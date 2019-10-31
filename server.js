// Dependencies 
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3005;
const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API routes
app.use(routes);

// Connect to mongoose
mongoose.connect(process.env)

// ListenER
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost" + PORT);
});