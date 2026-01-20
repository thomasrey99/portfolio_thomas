import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") return;

  const cookieLang = request.cookies.get("lang")?.value;

  if (cookieLang) {
    return NextResponse.redirect(new URL(`/${cookieLang}`, request.url));
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const lang = acceptLanguage.startsWith("es") ? "es" : "en";

  const response = NextResponse.redirect(new URL(`/${lang}`, request.url));
  response.cookies.set("lang", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365
  });

  return response;
}

export const config = {
  matcher: ["/"]
};
