const Router = require('koa-router');
const table = require('../db/queries/projects');

const router = new Router({
  prefix: '/projects'
});

router.get('/', async ctx => {
  const projects = await table().getAll();

  ctx.assert(projects.length, 404, 'No projects could be found.');

  ctx.body = { projects };
});

router.get('/:id', async ctx => {
  const projects = await table().getById(ctx.params.id);

  ctx.assert(projects.length, 404, 'No project with that ID could be found.');

  ctx.body = { projects: projects[0] };
});

router.post('/', async ctx => {
  const projects = await table().create('projects', ctx.request.body.project);

  ctx.assert(projects.length, 500, 'Something went wrong.');

  ctx.body = { projects: projects[0] };
});

router.put('/:id', async ctx => {
  const projects = await table().updateById(ctx.params.id, ctx.request.body.project);

  ctx.assert(projects.length, 404, 'No project with that ID could be found.');

  ctx.body = { project: projects[0] };
});

router.delete('/:id', async ctx => {
  const projects = await table().deleteById(ctx.params.id);

  ctx.assert(projects.length, 404, 'No project with that ID could be found.');

  ctx.body = { projects };
});

module.exports = router.routes();