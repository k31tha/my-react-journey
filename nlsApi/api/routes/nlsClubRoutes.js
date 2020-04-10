"use strict";
module.exports = function(app) {
  var clubs = require("../controllers/nlsClubController");

  // todoList Routes
  app.route("/clubs").get(clubs.list_all_clubs);
  app.route("/clubs/:url").get(clubs.find_a_club);


  //app.get("/", function(req, res) {
  //  res.send({ hi: "there" });
  //});

  //.post(todoList.create_a_task);

  //app.route('/tasks/:taskId')
  //  .get(todoList.read_a_task)
  //  .put(todoList.update_a_task)
  //  .delete(todoList.delete_a_task);
};
