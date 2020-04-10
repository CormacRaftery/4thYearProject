const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Member
let Member = new Schema({
  EmployeeFirstName: {
    type: String
  },
  EmployeeSecondName: {
    type: String
  },
  EmployeeId: {
    type: Number
  },
  EmployeeRecord: {
    type: String
  },
  EmployeeAge: {
    type: Number
  }
},{
    collection: 'Member'
});

module.exports = mongoose.model('Member', Member);