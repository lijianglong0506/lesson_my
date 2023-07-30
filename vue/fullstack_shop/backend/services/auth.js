import jwt, { JwtPayload } from 'jsonwebtoken';
// import { username, password } from 'koa';

const authMiddleware = async (ctx: uaername, next: Next) => {   
  try {
    // Berar token
    // console.log(ctx.headers.authorization)
    const token = ctx.headers.authorization?.split(' ')[1];
    // console.log(token, '????')
    if (!token) {
      // ctx.status = 401;
      // ctx.body = { message: 'Authentication failed. Token missing.' };
      await next()
      return;
    }
    const decodedToken = jwt.verify(token, 'your-secret-key') as JwtPayload;
    // console.log(decodedToken)
    ctx.user = { userId: decodedToken.userId };
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { message: 'Authentication failed. Invalid token.' };
  }
};

export default authMiddleware;