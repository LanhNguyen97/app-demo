import nextCookie from 'next-cookies'
import { verifyToken } from '../../utils/token';
import router from 'next/router'

export const checkToken = (ctx) => {
  const { token } = nextCookie(ctx)
  const { pathname } = ctx
  let isValidToken = false;

  const isBrowser = typeof window !== 'undefined'

  if (token) {
    const decode = verifyToken(token)
    const { userId, exp } = decode

    if (userId && parseInt(exp) >= (Date.now() / 1000)) {
      isValidToken = true
    }
  }

  if (!token || !isValidToken) {
    if (ctx.res) {
      if (pathname.includes('sign-in')) {
      } else {
        ctx.res.writeHead(302, { Location: '/sign-in' });
        ctx.res.end();
      }
    } else {
      if (pathname.includes('sign-in')) {
      } else {
        router.push('/sign-in')
      }
    }
  }

  return { isValidToken }
}