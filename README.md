# Spotify API clone with NextJs, Hooks, Middleware and Tailwind

I really wanted to dig into NextJS with API's, to get a bit of a better understanding of state management, and how to handle user authentication in NextJS with middleware.
<br>
I did this project from a code-a-long with Sonny Sangha in
[this tutorial](https://www.youtube.com/watch?v=3xrko3GpYoU&t=3571s) .

Sonny is in my opinion one of the best online 'teachers' I have followed, with very comprehensive projects. He explains really well each step along the way, so that you actually get a very good understanding of the concepts, and what the functions/methods are doing. The projects he does are really high quality, and he really adhers to best practices

### Stack used

I used a Next.js + Tailwind CSS starter.
I wanted to dive deep into understanding NextJS and Hooks - rather than styling, I decided not to use CSS modules or styled-components, but used TailwindCSS, so I could get it up fast and focus on the functional stuff.

- Spotify API and spotify-web-api-node package
- NextJS
- Hooks - UseEffect, useState and custom hooks such as useSpotify hook.
- Next-auth for managing user authentication and Spotify API tokens, for login, and creating sessions to store and
- Middleware for communicating and managing between the server-side and client side.
- TailwindCSS for quick styling of the app.
- Higher order components, pure components
- [Recoil](https://recoiljs.org/) is for state managment library for react, <RecoilRoot> wrapped around our app-component, to store global state. It gives us the capability to get data from the global store, in whatever component we want. Recoil uses what it call Atoms, for the specific/contextual items in the store. (e.g. a playlist, song etc)
- In my app I also use array methods such as map(), filter(), find() to retrieve the data from the API and pass to the UI with user interaction.

# As this project covers a lot, I am using it for two projects:

## JavaScript/React - module 4:

The requirements were to build an interactive React application that uses: State and Effect hooks, state management, connects to an API. I did not decide to use style components or css modules in this project, as I wanted to focus on the in and outs of NextJS, hooks, HOC, authentication, and Middleware connecting to an API. I therefore used TailwindCSS for quick styling.
<br>

- There are quite a few hooks in this project for managing state.
- For example in the components/center.js file, I have used useState() and useEffect() for mounting a randomized color from an array, on page mount. Each time a user reloads, the header color changes.
- useSession() is a hook used with the SessionProvider a HOC that wraps the APP, to pass the data from Spotify API to the app.

## JavaScript Functional Programming - module 4:

Understanding and using HOC, pure components, using array methods such as filter(), map(), find() etc. The app connects to the Spotify API, which contains information about music and the user.

### HOOKS, useState, useEffect and some custom Hooks.

- There are quite a few hooks in this project for managing state.
- For example in the components/center.js file, I have used useState() and useEffect() for mounting a randomized color from an array, on page mount. Each time a user reloads, the header color changes.
- useSession() is a hook used with the SessionProvider, to pass the data from Spotify.
- a custom hook for spotify, useSpotify hook.

### HOC - HIGHER ORDER COMPONENTs and PURE FUNCTIONS

SessionProvider from "next-auth/react" is an example of the use of a HOC component (Higher Order Component). The SessionProvider manages authentication and login states, and WRAPS OUR WHOLE SITE allowing the user to persist the logged in state navigating through the app. the SessionProvider a HOC that wraps the APP, to pass the data from Spotify API to the app. useSession() hook is used to pass the state in components.
<br><br>
A HOC component is a function that takes a component and returns a new component, unlike a component that transforms props into UI. a HOC can share data and states accross many components. These are for example Providers used with Context API's. Like the <SessionProvider> which passes in the data from Spotify API.
<br><br>
The HOC 'contains' the data and passes it to the component it contains. That component, inside the HOC, then in turn renders it to the DOM, these components receive props(data). Pure components do not use any state, but receive props. A pure function should return the same output based on the same input. Pure components can be e.g Headers or Titles, that always take the same props, but are reusable.
<br><br>
In short HOC doesn't care how the data is used, and the wrapped component isn't concerned of where the data is from.

### NextAuth v4 for authentication and user login.

- Documentation on [NextAuth](https://next-auth.js.org/getting-started/example#add-api-route)
- Create a env.local file in the root folder and add the credentials.
- In the .env.local file you need these keys. NEXTAUTH_URL needs to be changed when deployed.

### MIDDLEWARE IN NEXT.JS 12

Middleware is integrated into NextJS 12, doesn't needed to be built. It is used between the server-side and client-side, and is used here to check and control if the user as a token to access the 'private' client side, or is sent to the user login for authentication.

- The middleware is still in beta, so there might be some breaking changes in the future.
- The middleware functionality required so little code to work, and is a really awesome feature of NextJS 12.s

### Learning about NVM to control what node version you are running on when installing dependencies in your projects.

Many times I have run into issues with Node versions when installing dependencies.<br>
_nmv_ - Node Version Manager, gives you the ability to change the node -v you run on projects.

- I highly recommend reading about it : [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
