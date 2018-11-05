const Router = require('koa-router');
const table = require('../db/queries/kummitments');

const router = new Router({
  prefix: '/kummitments'
});

router.get('/', async ctx => {
  const kummitments = await table().getAll();

  ctx.assert(kummitments.length, 404, 'No kummitments could be found.');

  ctx.body = { kummitments };
});

router.get('/:id', async ctx => {
  const kummitments = await table().getById(ctx.params.id);

  ctx.assert(kummitments.length, 404, 'No kummitment with that ID could be found.');

  ctx.body = { kummitments: kummitments[0] };
});

router.post('/', async ctx => {
  const kummitments = await table().create('kummitments', ctx.request.body.kummitment);

  ctx.assert(kummitments.length, 500, 'Something went wrong.');

  ctx.body = { kummitments: kummitments[0] };
});

router.put('/:id', async ctx => {
  const kummitments = await table().updateById(ctx.params.id, ctx.request.body.kummitment);

  ctx.assert(kummitments.length, 404, 'No kummitment with that ID could be found.');

  ctx.body = { kummitment: kummitments[0] };
});

router.delete('/:id', async ctx => {
  const kummitments = await table().deleteById(ctx.params.id);

  ctx.assert(kummitments.length, 404, 'No kummitment with that ID could be found.');

  ctx.body = { kummitments };
});

module.exports = router.routes();