const express = require('express');
const employeeRouter = require('../routes/employee.router')

function routerApi(app){
  const router = express.Router();

  //Endpoint estático: http://localhost:4000/api/v1
  app.use('/api/v1', router);

  //Endpoint estático: http://localhost:4000/api/v1/employees
  router.use('/employees', employeeRouter);
}

module.exports = routerApi