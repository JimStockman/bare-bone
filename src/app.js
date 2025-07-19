// Imports
const path = require("path");
const express = require("express");
const public = require("./routers/public.js");

// Session variables
const app = express();
const port = 3000;

// App settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// App extesions
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", public);

// Startup messages
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
