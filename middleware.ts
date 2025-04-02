// src/middleware.ts
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Check if this is a password reset request coming to the root URL
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const type = url.searchParams.get("type");

  // If there's a code parameter and we're at the root, redirect to the reset-password page
  if (url.pathname === "/" && code && type === "recovery") {
    return NextResponse.redirect(
      new URL(`/reset-password?code=${code}`, request.url)
    );
  }

  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = await createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protected routes pattern
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (isAuthRoute && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/api/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
