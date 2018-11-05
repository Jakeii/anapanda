module.exports = async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    console.log(`${ctx.method} ${ctx.url} - ${err.status} - ${err.message}`);
    ctx.status = err.status || 500;
    ctx.body = {
      status: ctx.status,
      message:
        err.message && err.status < 500
          ? err.message
          : 'Sorry, an error has occurred.'
    };
  }
};
