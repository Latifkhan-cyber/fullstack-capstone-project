// db.js - giftlink-backend/models/db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'giftdb';
await client.connect();
console.log('Connected to MongoDB giftdb');
module.exports = { client, dbName };
