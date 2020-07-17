const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const uri = process.env.ATLAS_URI;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/playgamesdb");

const routes = require("./API/routes");

// Add routes, both API and view
app.use(routes);

const connection = mongoose.connection;
connection.once('open', () =>{
  console.log("MongoDB connection established")
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});