# Spotify API clone

I did this project from a [this tutorial](https://www.youtube.com/watch?v=3xrko3GpYoU&t=3571s) to better get to understand
Next.js 12, Middlewar and how to handle authenticated user access, as well as state management.

Because I wanted to focus on learning Next/React and Hooks, rather than styling, I decided not to use CSS modules or styled-components,
but used TailwindCSS, so I could get it up fast.

## Stack

Built with a Next.js + Tailwind CSS starter.

- Spotify API and spotify-web-api-node package
- NextJS
- Hooks, using Recoil
- Spotify API
- Middleware and Next-auth
- TailwindCSS for quick prototyping

### NextAuth V4

- Documentation on [NextAuth](https://next-auth.js.org/getting-started/example#add-api-route)
- Create a env.local file in the root folder and add the credentials.
- In the .env.local file you need these keys. NEXTAUTH_URL needs to be changed when deployed.
  <br>
  NEXTAUTH_URL=http://localhost:3000
  NEXT_PUBLIC_CLIENT_SECRET=your
  NEXT_PUBLIC_CLIENT_ID=
  JWT_SECRET=secret_value_here

### Learning about NVM to control what node version you are running on when installing dependencies.

- Many times I have run into issues with Node versions when installing dependencies.
- nmv - Node Version Manager, gives you the ability to change the node -v you run on projects.
- I highly recommend reading about it : [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
