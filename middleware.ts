import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // La lógica original para manejar rutas y sesiones protegidas está deshabilitada.
  // Este middleware simplificado permite que todas las solicitudes pasen.
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};