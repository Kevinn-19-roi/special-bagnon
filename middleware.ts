import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

const staffRoles = new Set(["OWNER", "ADMIN", "EDITOR", "VIEWER"]);

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET
  });

  if (staffRoles.has(String(token?.role))) {
    return NextResponse.next();
  }

  const signInUrl = new URL("/account", request.url);
  signInUrl.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(signInUrl);
}

export const config = { matcher: ["/admin/:path*"] };
