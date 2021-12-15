import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"

/* 
SessionProvider is a HOC component (Higher Order Component)
that WRAPS the WHOLE SITE allowing the user to persist the logged in state navigating through the app.
Session props is passed to the provider - making the session state 'accessible' everywhere in the app.
*/
/* Recoil is a state management library for React. <RecoilRoot> wraps our app, to store global state in our app */

function MyApp({ Component, pageProps: { session, ...pageProps } }
) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp
