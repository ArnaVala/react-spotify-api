import SpotifyWebApi from "spotify-web-api-node";

// HELPER FILE FOR SPOTIFY
// define permissions or scopes we are asking from Spotify
const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read"
].join(',');

// using join (",") with a comma inside the string, puts everything in one long string 

const params = {
  scopes: scopes,
};

// So then the url will look like this e.g. with the sscopes, and a comma in between. For example:
//https://accounts.spotify.com/authorize?params=user-read-email,user-follow-read, etc.....

const queryParamString = newURLSearchParams(params); //creates a new object for us.

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
})

export default spotifyApi;

export { LOGIN_URL };
// the login auth will initialize by sending the user to the LOGIN_URL
