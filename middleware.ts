import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

/** Pick the best matching locale from the Accept-Language header. */
function detectLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (header) {
    const accepted = header
      .split(",")
      .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
    for (const code of accepted) {
      if (isLocale(code)) return code;
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already prefixed with a supported locale → continue.
  const first = pathname.split("/")[1];
  if (isLocale(first)) return NextResponse.next();

  // Redirect to the detected locale, preserving the rest of the path.
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip API routes, Next internals, and any file with an extension
  // (sitemap.xml, robots.txt, og-image.png, etc.).
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
