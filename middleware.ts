// src/middleware.ts
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Check for password reset tokens in various formats
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const token = url.searchParams.get("token");
  const type = url.searchParams.get("type");

  // Handle password reset links coming to root
  if (
    url.pathname === "/" &&
    ((code && type === "recovery") ||
      (token && type === "recovery") ||
      (code && !type)) // Fallback for older links
  ) {
    console.log("Redirecting recovery link to reset-password page");
    // Pass all parameters
    const params = new URLSearchParams(url.search);
    return NextResponse.redirect(
      new URL(`/reset-password?${params}`, request.url)
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
