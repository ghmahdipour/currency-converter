import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextRequest } from 'next/server';

export default async function middleware(req: NextRequest, event: NextFetchEvent) {

  const authMiddleware = await withAuth({
    pages: {
      signIn: '/'
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}
