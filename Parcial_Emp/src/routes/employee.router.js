const express = require('express');
const Boom = require('@hapi/boom');
const EmployeeService = require('../services/employee.service')
const employeeModel = require('../models/employee.model');
const employeeRouter = express.Router();
const service = new EmployeeService();



/* //////////////////////////////////////////////// */
/*201: Created
  200: Listas
  302: Found
  304: Not modified
  404: Not found */

  employeeRouter.post('/employee', async (req, res) => {
    try {
      const employee = employeeModel(req.body);
      const data = await service.createEmployee(employee);
      res.status(201).json(data);
    } catch (error) {
      res.status(404).json({ message: err });
    }

  });

  employeeRouter.get('/', async (req, res, next) => {
    try {
      const data = await service.find();
      res.status(200).json(data);
    } catch (error) {
      next(error)
    }
  });

  employeeRouter.get('/:employeeId', async (req, res, next) => {
    try {
      const { employeeId } = req.params;
      const data = await service.showEmployee(employeeId);
      res.status(302).json(data);
    } catch (error) {
      next(error);
    }
  });

  employeeRouter.put('/:employeeId', async (req, res, next) => {
    try {
      const { employeeId } = req.params;
      const { name, lastname, address, departament } = req.body;
      const data = await service.editEmployee(employeeId, name, lastname, address, departament);
      res.status(200).json(data);
    } catch (error) {
      next(error)
    }
  });

  employeeRouter.delete('/:employeeId' , async (req, res, next) => {
    try {
      const { employeeId } = req.params;
      const data = await service.removeEmployee(employeeId);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  } );


  module.exports = employeeRouter;
