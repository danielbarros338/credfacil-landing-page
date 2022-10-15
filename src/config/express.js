const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("./public")));

require("../routes/router")(app);

module.exports = app;
