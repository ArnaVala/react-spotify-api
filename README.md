# Spotify API clone

I did this project from a code-a-long with Sonny Sangha in [this tutorial](https://www.youtube.com/watch?v=3xrko3GpYoU&t=3571s) to better get to understand Next.js 12, Middlewar and how to handle authenticated user access, as well as state management.
<br>
Sonny is b.t.w. one of the best online 'teachers' I have followed. He explains really well each step along the way, so that you actually get a very good understanding of the concepts, and what the functions/methods are doing. The projects he does are really high quality, and he really adhers to best practices.
<br>

## Stack

Built with a Next.js + Tailwind CSS starter.
I wanted to dive deep into understanding NextJS and Hooks - rather than styling, I decided not to use CSS modules or styled-components, but used TailwindCSS, so I could get it up fast and focus on the functional stuff.

- Spotify API and spotify-web-api-node package
- NextJS
- Hooks, using Recoil
- Spotify API
- Middleware and Next-auth
- TailwindCSS for quick styling of the app.

### NextAuth v4 / HOC / MIDDLEWARE

- Documentation on [NextAuth](https://next-auth.js.org/getting-started/example#add-api-route)
- Create a env.local file in the root folder and add the credentials.
- In the .env.local file you need these keys. NEXTAUTH_URL needs to be changed when deployed.
  <br>
  NEXTAUTH_URL=http://localhost:3000
  NEXT_PUBLIC_CLIENT_SECRET=your_token_from_spotify
  NEXT_PUBLIC_CLIENT_ID=your_token_from_spotify
  JWT_SECRET=secret_value_here

_HOC - HIGHER ORDER COMPONENTs_
SessionProvider from "next-auth/react" is an example of the use of a HOC component (Higher Order Component). The SessionProvider manages authentication and login states, and WRAPS OUR WHOLE SITE allowing the user to persist the logged in state navigating through the app.

_MIDDLEWARE IN NEXT.JS 12_
Middleware is integrated into NextJS 12, doesn't needed to be built.

- The middleware is still in beta, so there might be some breaking changes in the future.
- The middleware functionality required so little code to work, and is a really awesome feature of NextJS 12.

### Learning about NVM to control what node version you are running on when installing dependencies in your projects.

Many times I have run into issues with Node versions when installing dependencies.<br>
_nmv_ - Node Version Manager, gives you the ability to change the node -v you run on projects.

- I highly recommend reading about it : [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
