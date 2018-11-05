const Router = require('koa-router');
const table = require('../db/queries/roles');

const router = new Router({
  prefix: '/roles'
});

router.get('/', async ctx => {
  const roles = await table().getAll();

  ctx.assert(roles.length, 404, 'No roles could be found.');

  ctx.body = { roles };
});

router.get('/:id', async ctx => {
  const roles = await table().getById(ctx.params.id);

  ctx.assert(roles.length, 404, 'No role with that ID could be found.');

  ctx.body = { roles: roles[0] };
});

router.post('/', async ctx => {
  const roles = await table().create('roles', ctx.request.body.role);

  ctx.assert(roles.length, 500, 'Something went wrong.');

  ctx.body = { roles: roles[0] };
});

router.put('/:id', async ctx => {
  const roles = await table().updateById(ctx.params.id, ctx.request.body.role);

  ctx.assert(roles.length, 404, 'No role with that ID could be found.');

  ctx.body = { role: roles[0] };
});

router.delete('/:id', async ctx => {
  const roles = await table().deleteById(ctx.params.id);

  ctx.assert(roles.length, 404, 'No role with that ID could be found.');

  ctx.body = { roles };
});

module.exports = router.routes();