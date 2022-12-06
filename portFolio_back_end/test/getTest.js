const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const express = require('express');
const app = express();

describe('GET /projects/:_id', () => {
  it('should return the project with the specified ID', (done) => {
    // Create a new project object to post to the API
    const newProject = {
      name: 'Project A',
      status: 'In Progress',
      description: 'This is a description of Project A',
      link: 'http://example.com/project-a',
      date: '12-31-22',
    };

    // Send a POST request to the /projects endpoint to create a new project
    request(app)
      .post('/projects')
      .send(newProject)
      .end((err, res) => {
        // Get the ID of the new project from the response body
        const projectId = res.body.id;

        // Send a GET request to the /projects/:_id endpoint using the project's ID
        request(app)
          .get(`/projects/${projectId}`)
          .end((err, res) => {
            // Check that the response has a 200 status code
            // (indicating that the request was successful)
            expect(res.statusCode).to.equal(200);

            // Check that the response body contains the new project object
            // with the same ID, name, status, description, link, and date as the project we created earlier
            expect(res.body).to.deep.include({
              id: projectId,
              name: 'Project A',
              status: 'In Progress',
              description: 'This is a description of Project A',
              link: 'http://example.com/project-a',
              date: '12-31-22',
            });

            // Call the "done" function to indicate that the test is complete
            done();
          });
      });
  });
});
