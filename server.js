// require following npm packages
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

// serve static content from "public" directory
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and give server access
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// start server to begin listening to client request
app.listen(PORT, function() {
  // console.log when server fired
  console.log(`server listening on: ${PORT}`);
});
