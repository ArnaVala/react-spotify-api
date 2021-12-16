import NextAuth from "next-auth"
import spotifyProvider from "next-auth/providers/spotify"
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify'

// USER AUTHENTICATION - LOGIN - TOKENS

async function refreshAccessToken(token) {

  try {
    spotifyApi.setAccessToken(token.accessToken); // we send these tokens back to spotify
    spotifyApi.setRefreshToken(token.setRefreshToken); // the refresh token never expires, so it sends us a new access token
    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();  //destructure the response - rename the response
    console.log("REFRESHED TOKEN IS", refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 2000, // = 1 hour = 3600 from spotifyAPI
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
      // if the refresh token exists then use it - otherwise fall back to the old refresh token
    }

  } catch (error) { // catching and logging an error 
    console.error(error)
    return {
      ...token, //return the token 
      error: 'RefreshAccessTokenError'
    }
  }
};

// GET ACCESS TO THE SPOTIFY AUTH
// create a env.local file where you store the credentials
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    spotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    //...add more providers here
  ],
  secret: process.env.JWT_SECRET, //encryption for the tokens we get passed back from spotify
  pages: {
    signIn: "/login", //create a custom signIn page
  },
  callbacks: {
    async jwt({ token, account, user }) {
      //if initial / first sign in then
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, //increasing expiry of token - handling it with milliseconds
        }
      }
      //return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log("EXISTING TOKEN IS VALID");
        return token; // that is doesn't get a new one
      }
      // If access token has expired, you need to refresh it...
      console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
      return await refreshAccessToken(token) //we create a refresh function
    },

    // the client can see this in their session:
    async session({ session, token }) { //create a session for the user
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  }
});


// Process:
// initial signin
// persisted state = is token valid then use it
// if token has expired - then refresh the token
// if error - then get error message

