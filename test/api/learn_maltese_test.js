/* globals api, expect, it, describe, afterEach, beforeEach */
require('../spec_helper');

const User = require('../../models/user');

describe('Authenication tests', () => {
  afterEach(done => {
    User.collection.remove();
    done();
  });

  describe('POST /api/register', () => {
    it('should register a user providing the correct credentials', done => {
      api
        .post('/register')
        .set('Accept', 'application/json')
        .send({
          name: 'tester',
          username: 'test',
          email: 'test@test.com',
          password: 'test123',
          passwordConfirmation: 'test123'
        })
        .end((err, res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.be.a('object');
          expect(res.body.tocket).to.be.a('string');
          done();
        });
    });

    it('should not register a user if password and passwordConfirmation do not match', done => {
      api
        .post('/api/register')
        .set('Accept', 'application/json')
        .send({
          name: 'tester',
          username: 'test',
          email: 'test@test.com',
          password: 'test123',
          passwordConfirmation: 'test321'
        })
        .end((err, res) => {
          expect(res.status).to.eq(422);
          done();
        });
    });
  });
  describe('POST /api/login', () => {
    beforeEach(done => {
      api
        .post('/register')
        .set('Accept', 'application/json')
        .send({
          name: 'tester',
          username: 'test',
          email: 'test@test.com',
          password: 'test123',
          passwordConfirmation: 'test123'
        })
        .end(() => {
          done();
        });
    });
    it('should login a user with the correct credentials', done => {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.eq(401);
          done();
        });
    });
    it('should not login a user with incorrect credentials', function(done) {
      api
        .post('/api/login')
        .set('Accept', 'application/json')
        .send({
          email: 'test@test.com',
          password: 'passworddd'
        })
        .end((err, res) => {
          expect(res.status).to.eq(401);
          expect(res.body).to.be.a('object');
          expect(res.body.message).to.eq('Unauthorized');
          expect(Object.keys(res.body)).to.not.include('token');
          done();
        });
    });
  });
});


describe('Card test', () => {
  describe('GET /cards', () => {
    it('should return a 200 response', done => {
      api
        .get('/cards', (req, res) => res.sendStatus(200))
        .set('Accept', 'application/json')
        .expect(200, done);
    });
  });
});
