const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./middleware/error');
const logger = require('./middleware/logger');
const jwt = require('./middleware/jwt');

const app = new Koa();
const router = new Router({
  prefix: '/api/v1'
});

app.use(errorHandler);

app.use(logger);

app.use(bodyParser());
app.use(jwt.authenticate);

router.use(require('./routes/auth'));
router.use(require('./routes/users'));
router.use(require('./routes/tasks'));
router.use(require('./routes/projects'));
router.use(require('./routes/roles'));
router.use(require('./routes/circles'));
router.use(require('./routes/kummitments'));

app.use(router.routes());

module.exports = app;
