const mongodb = require('mongodb');
const db = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllProjects = async(req, res, next) => {
    try {     
        const result = await db
        .getDb()
        .collection('portfolio')
        .find();
    
        result.toArray().then((lists) => {
            res.status(200).json(lists);
        })
    } catch {
        logger.error("Error getting projects.")
        res.sendStatus(500);
    }
}

const getSingleProject = async(req, res, next) => {
    try {
        const result = await db
        .getDb()
        .collection('portfolio')
        .findOne({_id: new mongodb.ObjectId(req.params.id)});
        res.send(result).status(200);

        if (!result) {
            console.log('There was no result for that id.')
            res.sendStatus(500);
        } 
    } catch {
        console.log('Error getting project.')
        res.sendStatus(500)
    }
}

const addProject = async(req, res) => {
    try {
        const project = {
            title: req.body.title,
            header_picture: req.body.header_picture,
            color: req.body.color,
            description: req.body.description,
            tech_stack: req.body.tech_stack,
            demo_link: req.body.demo_link,
            demo_picture: req.body.demo_picture,
            project_url: req.body.project_url
        }

        const response = await db
            .getDb()
            .collection('portfolio')
            .insertOne(project);

            if (response.acknowledged) {
                res.status(201).json(response);
            } else {
                res.status(500).json(response.error || 'An error occurred while creating the Project.');
            }
        } catch(error) {
            console.log(error)
            res.sendStatus(500)
        }
}




module.exports = {  getAllProjects, 
                    getSingleProject,
                    addProject }