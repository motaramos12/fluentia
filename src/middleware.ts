import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Em modo preview/gratuito, permite acesso direto sem autenticação
  // Redireciona / para /study
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/study", request.url));
  }

  // Redireciona /auth para /study (não precisa login)
  if (pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/study", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
