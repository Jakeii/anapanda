/* global describe, it, before, after, beforeEach, afterEach */
process.env.NODE_ENV = 'test';

let knex = require('../db/db');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../index');

function correctKeys(res) {
  res.body.should.include.keys('id', 'email', 'username');
  res.body.should.not.include.keys('hash', 'confirmation_key', 'last_ip');
}

describe('routes : users', () => {

  before(() => knex = knex.reconnect());

  beforeEach(() => {
    return knex.migrate.rollback()
      .then(() => { return knex.migrate.latest(); })
      .then(() => { return knex.seed.run(); });
  });

  afterEach(() => knex.migrate.rollback());

  after(() => knex.destroy());

  describe('GET /users', () => {
    it('should not be implimented', async () => {
      const res = await chai.request(server).get('/users');
      res.status.should.eql(501);
    });
  });

  describe('GET /users/:id', () => {
    it('should return json', async () => {
      const res = await chai.request(server).get('/users/1');
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      correctKeys(res);
    });
  });

  describe('GET /users/999999', () => {
    it('should return 404', async () => {
      const res = await chai.request(server).get('/users/99999');
      res.status.should.eql(404);
      res.text.should.eql('That user does not exist.');
    });
  });

  describe('POST /users', () => {
    it('should create and return json', async () => {
      const res = await chai.request(server).post('/users').send({
        username: 'user4',
        email: 'user4@example.com',
        password: 'password'
      });
      res.status.should.eql(201);
      res.type.should.eql('application/json');
      correctKeys(res);
    });

    it('should throw an error of the payload is malformed', async () => {
      const res = await chai.request(server).post('/users').send({
        username: 'user4'
      });
      res.status.should.eql(400);
      should.exist(res.body);
    });
  });

  describe('PUT /users/:id', () => {
    it('should update and return json', async () => {
      const res = await chai.request(server).put('/users/1').send({
        username: 'user1',
        email: 'user4@example.com'
      });
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      correctKeys(res);
      res.body.email.should.equal('user4@example.com');
    });

    it('should throw an error if the user does not exist', async () => {
      const res = await chai.request(server).put('/users/9999999').send({
        username: 'user4'
      });
      res.status.should.eql(404);
      res.text.should.eql('That user does not exist.');
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete and return json', async () => {
      const res = await chai.request(server).delete('/users/1');
      res.status.should.eql(200);
      res.type.should.eql('application/json');
      correctKeys(res);
    });

    it('should throw an error if the user does not exist', async () => {
      const res = await chai.request(server).delete('/users/9999999');
      res.status.should.eql(404);
      res.text.should.eql('That user does not exist.');
    });
  });



});