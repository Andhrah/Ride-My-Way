import chai from 'chai';
import supertest from 'supertest';

import app from '../index';
import db from '../data/rides';
import requestDb from '../data/requests';

const { expect } = chai;
const server = supertest(app);

describe('Ride-My-Way', () => {
  describe('the /rides endpoint', () => {
    it('should return a list of all rides', async () => {
      const response = await server.get('/api/v1/rides');
      expect(db.length).to.equal(response.body.length);
    });

    it('should create a ride and save into database', async () => {
      const newRide = {
        from: 'Victory Island',
        to: 'Lekki',
        departure: '2018-7-21 08:00:00',
      };
      const initalRides = db.length;
      const response = await server.post('/api/v1/rides').send(newRide);
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal('Ride offer created successfully.');
      expect(db.length).to.equal(initalRides + 1);
    });
  });

  describe('Display single ride offer', () => {
    it('should fetch a single ride offer and display it', async () => {
      const ride = db[0];
      const res = await server.get(`/api/v1/rides/${ride.id}`);
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('from');
      expect(res.body).to.have.property('to');
      expect(res.body).to.have.property('departure');
      expect(res.body).to.have.property('id').to.equal(ride.id);
    });
  });

  describe('Display ride requests', () => {
    it('should fetch all requests to join ride offers', async () => {
      const res = await server.get('/api/v1/requests');
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(requestDb.length);
    });
  });
});
