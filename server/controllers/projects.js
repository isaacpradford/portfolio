const mongodb = require("mongodb");
const db = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllProjects = async (req, res, next) => {
  try {
    const result = await db.getDb().collection("portfolio").find();

    result.toArray().then((lists) => {
      res.status(200).json(lists);
    });
  } catch {
    logger.error("Error getting projects.");
    res.sendStatus(500);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const result = await db
      .getDb()
      .collection("portfolio")
      .findOne({ _id: new mongodb.ObjectId(req.params.id) });

    if (!result) {
      console.log("There was no result for that id.");
      res.sendStatus(500);
    } else {
      res.send(result).status(200);
    }
  } catch {
    console.log("Error getting project.");
    res.sendStatus(500);
  }
};

const getProjectByTitle = async (req, res, next) => {
  try {
    const result = await db
      .getDb()
      .collection("portfolio")
      .findOne({ title: req.params.title });

    if (!result) {
      console.log("There was no result for that title.");
      return res.status(404).json({ error: "Project not found" });
    } else {
      res.send(result).status(200);
    }
  } catch {
    console.log("Error getting project.");
    res.sendStatus(500);
  }
};

const getProjectTitles = async (req, res, next) => {
  try {
    const result = await db
      .getDb()
      .collection("portfolio")
      .find({}, { projection: { _id: 1, title: 1 } });

    result.toArray().then((titles) => {
      res.status(200).json(titles);
    });
  } catch {
    console.log("Error getting project titles.");
    res.sendStatus(500);
  }
};

const addProject = async (req, res) => {
  try {
    const project = {
      title: req.body.title,
      header_picture: req.body.header_picture,
      color: req.body.color,
      description1: req.body.description1,
      description2: req.body.description2,
      description3: req.body.description3,
      demo_link: req.body.demo_link,
      demo_picture: req.body.demo_picture,
      project_url: req.body.project_url,
      date_created: req.body.date_created,
      youtube_link: req.body.youtube_link,
      frontend_stack: req.body.frontend_stack,
      backend_stack: req.body.backend_stack,
    };

    const response = await db
      .getDb()
      .collection("portfolio")
      .insertOne(project);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "An error occurred while creating the Project."
        );
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  addProject,
  getProjectByTitle,
  getProjectTitles,
};
