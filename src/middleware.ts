// middleware.ts
import { auth } from "~/server/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  if (!req.auth) {
    const signInUrl = new URL("/signin", req.nextUrl.origin)
    return NextResponse.redirect(signInUrl)
  }
})

export const config = {
  matcher: ["/dashboard/:path*"],
}