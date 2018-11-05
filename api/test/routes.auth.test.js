/* global describe, it, before, after, beforeEach, afterEach */
process.env.NODE_ENV = 'test';

const knex = require('../db/db');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../index');

describe('routes : auth', () => {

  before(() => knex.reconnect());

  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => { return knex.migrate.latest(); })
      .then(() => { return knex.seed.run(); });
  });

  afterEach(() => knex.migrate.rollback());

  after(() => knex.destroy());

  describe('POST /auth', () => {
    it('should return token', async () => {
      const res = await chai.request(server).post('/auth').send({
        email: 'email1@example.com',
        password: 'password'
      });
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      should.exist(res.body.token);
    });

    it('should throw an error if user does not exist', async () => {
      const res = await chai.request(server).post('/auth').send({
        email: 'email9999@example.com',
        password: 'password'
      });
      res.status.should.eql(404);
    });

    it('should throw an error if password is wrong', async () => {
      const res = await chai.request(server).post('/auth').send({
        email: 'email1@example.com',
        password: 'qwerty'
      });
      res.status.should.eql(401);
    });
  });




});