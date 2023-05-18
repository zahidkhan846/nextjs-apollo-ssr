import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let isAuth = false;
  if (isAuth) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/auth/login', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/protected_routes/:path*'],
};
