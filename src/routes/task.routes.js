// Definir las operaciones a través de las urls del servidor
// Vamos a crear una url para que una persona pueda agregar una tarea, eliminarla, editarla
const express = require('express');
const router = express.Router();

const Task = require('../models/task');

// GET all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// POST new task
router.post('/', async (req, res) => {
   const { title, description } = req.body;
   const task = new Task({ title, description });
   await task.save();
   res.json({ status: 'Task saved' });
});

// UPDATE task
router.put('/:id', async (req, res) => {
   const { title, description } = req.body;
   const newTask = { title, description };
   await Task.findByIdAndUpdate(req.params.id, newTask);
   res.json({ status: 'Task updated' });
});

// DELETE task
router.delete('/:id', async (req, res) => {
   await Task.findByIdAndRemove(req.params.id);
   res.json({ status: 'Task deleted' });
});

// GET one task
router.get('/:id', async (req, res) => {
   const task = await Task.findById(req.params.id);
   res.json(task);
});
module.exports = router;
