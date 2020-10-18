
const mongoose = require('mongoose');


const apiSchema = new mongoose.Schema({ 
  result:Object
  
});

module.exports = mongoose.model('api', apiSchema);
