// db.js - fullstack-capstone-project
// Uses dotenv for environment variables; exports module; connects to giftdb; includes await client.connect()
require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'giftdb';
await client.connect();
console.log('Connected to MongoDB:', dbName);
module.exports = { client, dbName };
