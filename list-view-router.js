const express = require('express');
const listViewRouter = express.Router();

// Middleware para verificar parámetros correctos
listViewRouter.use((req, res, next) => {

  if (!req.query.type) {
    return res.status(400).send('Parámetros incorrectos');
  }
  next();
});

// Ruta para obtener tareas completadas
listViewRouter.get('/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  res.json(completedTasks);
});

// Ruta para obtener tareas incompletas
listViewRouter.get('/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = listViewRouter;
