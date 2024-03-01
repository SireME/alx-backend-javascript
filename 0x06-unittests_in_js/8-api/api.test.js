const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index Page', () => {
  it('should return status code 200', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return correct result', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

});

