const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'PortfolioAPI',
        description: 'An API for Isaac Radfords portfolio!'
    }, 
    host: 'localhost:5500',
    
// Once this is changed, will need to add 'https' and 'http' to the schemes.
    schemes: []
};

const outputFile = './swagger.json';
const endpointsFiles = ['routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);