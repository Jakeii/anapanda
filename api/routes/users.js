const Router = require('koa-router');
const User = require('../db/queries/users');
const jwt = require('../middleware/jwt');
const bcrypt = require('bcrypt');
const validate = require('validate.js');

const router = new Router({
  prefix: '/users',
});

async function createPasswordHash(ctx, next) {
  if (ctx.request.body.user.password) {
    const hash = await bcrypt.hash(ctx.request.body.user.password, 10);

    delete ctx.request.body.user.password;
    ctx.request.body.user.hash = hash;
  }
  await next();
}

async function validateNewUser(ctx, next) {
  try {
    await validate.async(ctx.request.body.user, {
      'email': {
        presence: true,
        email: true
      },
      'username': {
        presence: true,
        format: '[a-zA-Z0-9_-]*'
      },
      'password': {
        presence: true,
        length: {
          minimum: 6,
          maximum: 50
        }
      }
    });
    await next();
  } catch(errors) {
    console.log(errors);
    ctx.status = 400;
    ctx.body = {errors};
  }
}

router.get('/', async (ctx) => ctx.throw(501));

router.get('/:id', async (ctx) => {
  const users = await User.getUserById(ctx.params.id);

  ctx.assert(users.length, 404, 'That user does not exist.');

  ctx.body = {user: users[0]};
});

router.post('/', validateNewUser, createPasswordHash, async (ctx) => {
  const users = await User.createUser(ctx.request.body.user);

  ctx.assert(users.length, 401, 'Something went wrong.');

  ctx.status = 201;
  ctx.body = {user: users[0]};
});

router.put('/:id', createPasswordHash, async (ctx) => {
  // ctx.assert(ctx.state.user === ctx.request.body.id, 401, 'You are not authorised to modify this user.');

  const users = await User.updateUserById(ctx.params.id, ctx.request.body.user);

  ctx.assert(users.length, 404, 'That user does not exist.');

  ctx.body = {user: users[0]};
});

router.delete('/:id', async (ctx) => {
  // ctx.assert(ctx.state.user === ctx.request.body.id, 401, 'You are not authorised to modify this user.');

  const users = await User.deleteUserById(ctx.params.id);

  ctx.assert(users.length, 404, 'That user does not exist.');

  ctx.body = {user: users[0]};
});

module.exports = router.routes();