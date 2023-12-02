const express = require('express');
const path = require('path');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const app = express();

const tasks = [
  {
    "id": "1",
    "isCompleted": false,
    "description": "Walk the dog",
  },
  {
    "id": "2",
    "isCompleted": true,
    "description": "Eat",
  },
  {
    "id": "3",
    "isCompleted": false,
    "description": "Running in the backyard",
  }
];

// Middleware a nivel de aplicación para validar métodos HTTP válidos
app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

  if (!validMethods.includes(req.method)) {
    return res.status(400).send('Invalid HTTP method');
  }

  next();
});

// Ruta para listar tareas
app.use('/tasks', (req, res, next) => {
  next();
}, (req, res) => {
  res.json(tasks);
});

// Rutas para list-view y list-edit
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

// Iniciar servidor
app.listen(3000, () => {
  console.log("Server running on port", 3000);
});

