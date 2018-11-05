const Router = require('koa-router');
const table = require('../db/queries/circles');

const router = new Router({
  prefix: '/circles'
});

router.get('/', async ctx => {
  const circles = await table().getAll();

  ctx.assert(circles.length, 404, 'No circles could be found.');

  ctx.body = { circles };
});

router.get('/:id', async ctx => {
  const circles = await table().getById(ctx.params.id);

  ctx.assert(circles.length, 404, 'No circle with that ID could be found.');

  ctx.body = { circles: circles[0] };
});

router.post('/', async ctx => {
  const circles = await table().create('circles', ctx.request.body.circle);

  ctx.assert(circles.length, 500, 'Something went wrong.');

  ctx.body = { circles: circles[0] };
});

router.put('/:id', async ctx => {
  const circles = await table().updateById(ctx.params.id, ctx.request.body.circle);

  ctx.assert(circles.length, 404, 'No circle with that ID could be found.');

  ctx.body = { circle: circles[0] };
});

router.delete('/:id', async ctx => {
  const circles = await table().deleteById(ctx.params.id);

  ctx.assert(circles.length, 404, 'No circle with that ID could be found.');

  ctx.body = { circles };
});

module.exports = router.routes();