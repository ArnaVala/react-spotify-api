import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import SpotifyWebApi from 'spotify-web-api-node';



const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

function useSpotify() {
  const { data: session, status } = useSession();

  //the useSpotify function runs onMount, and has the [session] dependency, and changes whenever the session changes,
  // eg. when we login or logout.
  useEffect(() => {
    if (session) {
      // If the refresh access token attempt fails, then direct the user to login...
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }

  }, [session]);

  // we only initialize the app once with spotifyAPI
  return spotifyApi;
}

export default useSpotify
