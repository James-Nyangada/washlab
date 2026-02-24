import { NextResponse } from 'next/server';

// This is a basic Edge Middleware template.
// If you host on Vercel and want to use Upstash Redis for robust rate limiting, 
// you can uncomment the @upstash/ratelimit blocks below after running `npm intall @upstash/ratelimit @upstash/redis`.

/*
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Create a new ratelimiter, that allows 50 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(50, "1 m"),
  analytics: true,
});
*/

export async function middleware(request) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || '127.0.0.1';

  // --- BOT PROTECTION LOGIC ---
  /*
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(ip);
  if (!success) {
    console.log(`Rate limit exceeded for IP: ${ip}`);
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'X-RateLimit-Limit': limit.toString(),
        'X-RateLimit-Remaining': remaining.toString(),
        'X-RateLimit-Reset': reset.toString(),
      },
    });
  }
  */

  // Pass-through if below limit
  // return NextResponse.next();
  
  // NOTE: If you use Cloudflare, it is highly recommended to handle this at the DNS/CDN level instead!
  return NextResponse.next();
}

export const config = {
  // Apply this middleware to API routes or pages you want to protect
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
