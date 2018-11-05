const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validate = require('validate.js');

const secret = require('../middleware/jwt').secret;
const Auth = require('../db/queries/auth');

const router = new Router({
  prefix: '/auth'
});

async function validateCredentials(ctx, next) {
  try {
    await validate.async(ctx.request.body, {
      username: {
        presence: true
      },
      password: {
        presence: true
      }
    });
    await next();
  } catch (errors) {
    console.log(errors);
    ctx.status = 400;
    ctx.body = errors;
  }
}

router.post('/', validateCredentials, async (ctx) => {
  const users = await Auth.getUserWithHash(ctx.request.body.username);

  ctx.assert(users.length, 401, 'A user with that email or username does not exist.');

  const user = users[0];

  const result = await bcrypt.compare(ctx.request.body.password, user.hash);

  ctx.assert(result, 401, 'That password is incorrect.');

  const token = jwt.sign({id: user.id}, secret, {expiresIn: '30d'});

  ctx.status = 200;
  ctx.body = {token};
});

router.post('/refresh', async (ctx) => {
  const payload = jwt.verify(ctx.body.token, secret);
});

module.exports = router.routes();