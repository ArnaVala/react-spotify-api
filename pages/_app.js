import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"


/* 
SessionProvider is a HOC component (Higher Order Component)
that WRAPS the WHOLE SITE allowing the user to persist the logged in state navigating through the app.
Session props is passed to the provider - making the session state 'accessible' everywhere in the app.
*/

function MyApp({ Component, pageProps: { session, ...pageProps } }
) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
