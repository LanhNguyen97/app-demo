import nextCookie from 'next-cookies'
import { verifyToken } from '../../utils/token';

export const checkToken = (ctx) => {
  const { token } = nextCookie(ctx)
  const { pathname } = ctx
  let isValidToken = false;

  if (token) {
    const decode = verifyToken(token)
    const { userId, exp } = decode

    if (userId && parseInt(exp) >= (Date.now() / 1000)) {
      isValidToken = true
    }
  }

  if (!token || !isValidToken) {
    if (ctx.res && !pathname.includes('sign-in')) {
      ctx.res.writeHead(302, { Location: '/sign-in' });
      ctx.res.end();
    }
  }

  return { isValidToken }
}