import { getToken } from "next-auth/jwt"
import { NextResponse } from 'next/server'
// Middleware is between the client and serverside render - especially important in e.g. user auth - when e.g. retrieving login details.

export async function middleware(req) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl // we catch the url with middleware
  // Allow the requests if the following is true...
  // 1) If its a request for next-auth session (/api/auth in pathname) & provider fetching
  // 2) If the token exists
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next(); // if it passes the Middleware (e.g. with a token) then let user through
  }
  // otherwise Redirect them to login if they dont have a token AND are requesting a protected route
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}