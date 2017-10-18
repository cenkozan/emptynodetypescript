// import * as chai from 'chai';
// import * as chaiHttp from 'chai-http';
//
// process.env.NODE_ENV = 'test';
// import { app } from '../app';
//
// const should = chai.use(chaiHttp).should();
//
// describe('Users', () => {
//
//   describe('Backend tests for users', () => {
//
//     it('should get all the users', done => {
//       chai.request(app)
//         .get('/api/users')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           res.body.length.should.be.eql(0);
//           done();
//         });
//     });
//
//     it('should get users count', done => {
//       chai.request(app)
//         .get('/api/users/count')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('number');
//           res.body.should.be.eql(0);
//           done();
//         });
//     });
//
//     it('should create new user', done => {
//       const user = { username: 'Dave', email: 'dave@example.com', role: 'user' };
//       chai.request(app)
//         .post('/api/user')
//         .send(user)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.a.property('username');
//           res.body.should.have.a.property('email');
//           res.body.should.have.a.property('role');
//           done();
//         });
//     });
//
//
// });
//
//
