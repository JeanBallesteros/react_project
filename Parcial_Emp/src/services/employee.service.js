const EmployeeModel = require('../models/employee.model')
const Boom = require('@hapi/boom');

class EmployeeService{
  /* Promesas y funciones asincrónicas
  Una función asincrónica devuelve una promesa
  JS es un lenguaje ejecuta un hilo -> sólo hace una cosa a la vez */
  async createEmployee(employee){
    employee.save();
    return employee
  }

  async listEmployee(){
    return EmployeeModel.find();
  }

  find(){
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(EmployeeModel.find());
      }, 3000);
    });
  }

  async showEmployee(employeeId){
    return EmployeeModel.findById({ _id: employeeId}).then(
      (employeeFind) => {
        if (!employeeFind) {
          throw Boom.notFound('No se encontró el empleado');
        }
        return employeeFind;
      }
    );
  }

  async editEmployee(employeeId, name, lastname, address, departament){
    return EmployeeModel.findById({ _id: employeeId }).then(
      (employeeFind) => {
        if (!employeeFind) throw Boom.notFound('No se encontró el empleado');
        return EmployeeModel.updateOne(
          { employeeId },
          { name, lastname, address, departament}
        );
      }
    );

    /* return EmployeeModel.updateOne(
      { _id: employeeId },
      { emp_info}
    ); */


  }

  async removeEmployee(employeeId){
    return EmployeeModel.findById({ _id: employeeId }).then(
      (employeeFind) => {
        if (!employeeFind) throw Boom.notFound('No se encontró el empleado');
        return EmployeeModel.deleteOne();
      }
    );

  }
}

module.exports = EmployeeService;