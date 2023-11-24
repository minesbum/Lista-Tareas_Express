const express = require('express');
const listEditRouter = express.Router();

listEditRouter.post('/create', (req, res) => {

  res.json({ message: 'Tarea creada con éxito' });
});


listEditRouter.delete('/delete/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  res.json({ message: 'Tarea eliminada con éxito' });
});

listEditRouter.put('/update/:taskId', (req, res) => {
  const taskId = req.params.taskId;


  res.json({ message: 'Tarea actualizada con éxito' });
});

module.exports = listEditRouter;
