require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const connectDB = require("./servers/config/db");

const app = express();
const PORT = process.env.PORT || 5000;

//connect to db

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layout/main');
app.set("view engine", "ejs");

app.use("/", require("./servers/routes/main"));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});