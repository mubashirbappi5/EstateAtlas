import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
 

  if (!token) {
    const loginUrl = new URL('/auth/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If token exists, continue
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Protect all dashboard subroutes
};
