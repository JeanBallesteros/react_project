const mongoose = require('mongoose')
const employee = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  address:{
    type: Object,
    require: true,
    geo:{
      type: Array,
      require: true
    },
    city: {
      type: String,
      require: true
    },
    code_zip: {
      type: Number,
      require: true
    },
  },
  department:{
    type: Object,
    require: true,
    id_departament:{
      type: Number,
      require: true
    },
    name_departament: {
      type: String,
      require: true
    }
  }
});

module.exports = mongoose.model('Employee_Collection', employee);