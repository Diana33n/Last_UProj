const request = require('supertest');
const app = require('../src/server/server'); // Make sure to export your express app in server.js

describe('API Server', () => {
    test('GET / endpoint should return status code 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    test('POST /addTrip should handle trip data', async () => {
        const tripData = {
            city: 'Paris',
            date: '2025-01-01'
        };
        const response = await request(app).post('/addTrip').send(tripData);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.objectContaining({
            city: 'Paris'
        }));
                  
    });

});
