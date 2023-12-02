const express = require('express');
const listEditRouter = express.Router();

listEditRouter.use((req, res, next) => {
  if (req.method === 'POST' && Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Cuerpo de la solicitud vacío para POST' });
  }

  if (req.method === 'POST' && (!req.body.description || !req.body.isCompleted)) {
    return res.status(400).json({ error: 'Información no válida o atributos faltantes para crear tareas' });
  }

  if (req.method === 'PUT' && Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Cuerpo de la solicitud vacío para PUT' });
  }

  if (req.method === 'PUT' && (!req.body.description || !req.body.isCompleted)) {
    return res.status(400).json({ error: 'Información no válida o atributos faltantes para actualizar tareas' });
  }

  next();
});

listEditRouter.post('/create', (req, res) => {
  // Lógica para crear una nueva tarea
  res.json({ message: 'Tarea creada con éxito' });
});

listEditRouter.delete('/delete/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Lógica para eliminar una tarea
  res.json({ message: 'Tarea eliminada con éxito' });
});

listEditRouter.put('/update/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  // Lógica para actualizar una tarea
  res.json({ message: 'Tarea actualizada con éxito' });
});

module.exports = listEditRouter;

