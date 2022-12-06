const expect = require('chai').expect;
const request = require('request');

describe('/projects endpoint', () => {
    it('creates a new project with the data provided in the request body', () => {
        // Define the data to use in the request
        const data = {
            name: 'Test Project',
            status: 'In Progress',
            description: 'This is a test project',
            link: 'https://example.com',
            date: '12-05-22'
        };

        // Send a POST request to the /projects endpoint
        request.post({
            url: 'http://localhost:8000/projects',
            json: true,
            body: data
        }, (error, response, body) => {
            // Verify that the response has a successful status code
            expect(response.statusCode).to.equal(201);

            // Verify that the response body contains the expected data
            expect(body).to.have.property('name', 'Test Project');
            expect(body).to.have.property('status', 'In Progress');
            expect(body).to.have.property('description', 'This is a test project');
            expect(body).to.have.property('link', 'https://example.com');
            expect(body).to.have.property('date', '12-05-22');
        });
    });
});