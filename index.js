const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3050;
const route = require("./routes");
require("./database");

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "pug");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "http://localhost:3000" }));

app.use(route);

app.listen(port, () => console.log("Connected on port: " + port));
