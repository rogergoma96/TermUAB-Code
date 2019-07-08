const express = require('express');
const router = express.Router();

// Project Model
const Project = require('../models/project');

// GET all Projects
router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// GET all Projects
router.get('/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.json(project);
});

// ADD a new project
router.post('/', async (req, res) => {
    const { name, description, languages } = req.body;
    const project = new Project({name, description, languages});
    await project.save();
    res.json({status: 'Project Saved'});
});

// UPDATE a new project
router.put('/:id', async (req, res) => {
    const { name, description, languages } = req.body;
    const newProject = {name, description, languages};
    await Project.findByIdAndUpdate(req.params.id, newProject);
    res.json({status: 'Project Updated'});
});

router.delete('/:id', async (req, res) => {
    await Project.findByIdAndRemove(req.params.id);
    res.json({status: 'Project Deleted'});
});

module.exports = router;
