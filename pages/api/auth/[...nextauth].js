import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { refreshAccessToken } from "spotify-web-api-node/src/server-methods"
import { LOGIN_URL } from '../../../lib/spotify'

// Get access to the Spotify Auth
// create a env.local file where you store the credentials
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET, //encryption for the tokens we get passed back from spotify
  pages: {
    signIn: '/login'  //create a custom signIn page
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
    }
  }
})

