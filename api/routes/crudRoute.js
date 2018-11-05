const query = require("../db/queries/queries");

class Route {
  constructor(name, nameSingle, Query = query) {
    this.name = name;
    this.nameSingle = nameSingle;
    this.table = Query;
  }

  async getAll (ctx) {
    const records = await this.table.getAll();

    ctx.assert(records.length, 404, `No ${this.name} could be found.`);

    ctx.body = { [this.name]: records };
  }

  async getById(ctx) {
    const records = await this.table.getById(ctx.params.id);

    ctx.assert(records.length, 404, `No ${this.name} with that ID could be found.`);

    ctx.body = { [this.nameSingle]: records[0] };
  }

  async create (ctx) {
    const records = await this.table.create(ctx.request.body[this.nameSingle]);

    ctx.assert(records.length, 500, "Something went wrong.");

    ctx.body = { [this.nameSingle]: records[0] };
  }

  async updateById (ctx) {
    const records = await this.table.updateById(ctx.params.id, ctx.request.body[this.nameSingle]);

    ctx.assert(records.length, 404, `No ${this.name} with that ID could be found.`);

    ctx.body = { [this.nameSingle]: records[0] };
  }

  async deleteById (ctx) {
    const records = await this.table.deleteById(ctx.params.id);

    ctx.assert(records.length, 404, `No ${this.name} with that ID could be found.`);

    ctx.body = { records };
  }
}

module.exports = Route;
