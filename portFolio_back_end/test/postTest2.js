const expect = require('chai').expect;
const request = require('request');
const express = require('express');
const app = express();

describe('POST /projects', () => {
    // Test that the endpoint creates a new project with the provided name, status, description, link, and date
    it('should create a new project with the provided name, status, description, link, and date', (done) => {
      // Create a new project object to post to the API
      const newProject = {
        name: 'My Project',
        status: 'In Progress',
        description: 'This is a description of my project',
        link: 'http://myproject.com',
        date: '12-31-20',
      };
  
      // Send a POST request to the /projects endpoint
      request(app)
        .post('/projects')
        .send(newProject)
        .end((err, res) => {
          // Check that the response has a 201 status code
          // (indicating that the project was successfully created)
          expect(res.statusCode).to.equal(201);
  
          // Check that the response body contains the new project object
          expect(res.body).to.deep.include(newProject);
  
          // Check that the response body has a unique ID for the new project
          expect(res.body).to.have.property('_id');
  
          // Call the "done" function to indicate that the test is complete
          done();
        });
    });
  });
  