const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projects");
const validatePassword = require("../middleware/passwordValidation");

// Validator
router.use(validatePassword);

// Gets all data of all projects
router.get("/", projectController.getAllProjects);

// Get all project titles
router.get("/titles", projectController.getProjectTitles);

// Get all data for single project by searching for ID
// router.get("/:id", projectController.getProjectById);

// Get all data for single project by searching for Title
router.get("/:title", projectController.getProjectByTitle);

// Add project to Mongo
router.post("/", projectController.addProject);

module.exports = router;
