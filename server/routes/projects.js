const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects');

// Validator
// const { projectValidation } = require('../validation/');

// Gets all data of all projects
router.get('/', projectController.getAllProjects);

// Get all data for single project by searching for ID
// router.get('/:id', projectController.getProjectById);

// Get all data for single project by searching for Title
router.get('/:title', projectController.getProjectByTitle)

// Add project to Mongo
router.post('/',projectController.addProject);

module.exports = router;