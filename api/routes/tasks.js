const Router = require('koa-router');
const table = require('../db/queries/tasks');

const router = new Router({
  prefix: '/tasks'
});

router.get('/', async ctx => {
  const tasks = await table().getAll();

  ctx.assert(tasks.length, 404, 'No tasks could be found.');

  ctx.body = { tasks };
});

router.get('/:id', async ctx => {
  const tasks = await table().getById(ctx.params.id);

  ctx.assert(tasks.length, 404, 'No task with that ID could be found.');

  ctx.body = { tasks: tasks[0] };
});

router.post('/', async ctx => {
  const tasks = await table().create('tasks', ctx.request.body.task);

  ctx.assert(tasks.length, 500, 'Something went wrong.');

  ctx.body = { tasks: tasks[0] };
});

router.put('/:id', async ctx => {
  const tasks = await table().updateById(ctx.params.id, ctx.request.body.task);

  ctx.assert(tasks.length, 404, 'No task with that ID could be found.');

  ctx.body = { task: tasks[0] };
});

router.delete('/:id', async ctx => {
  const tasks = await table().deleteById(ctx.params.id);

  ctx.assert(tasks.length, 404, 'No task with that ID could be found.');

  ctx.body = { tasks };
});

module.exports = router.routes();
