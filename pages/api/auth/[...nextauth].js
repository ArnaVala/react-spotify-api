import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
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
})

