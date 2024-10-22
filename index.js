const {MongoClient} = require("mongodb");
const fs = require('fs');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
