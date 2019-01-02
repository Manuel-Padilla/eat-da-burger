// import ORM to function to interact with the database
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAl("burgers", function(res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};
