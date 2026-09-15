// giftRoutes.js - fullstack-capstone-project
// Uses connectToDatabase() for DB connection; serves /api/gifts and /api/gifts/:id
const connectToDatabase = require('./db');
router.get('/api/gifts', async (req, res) => { /* return all gifts */ });
router.get('/api/gifts/:id', async (req, res) => { /* return gift by id */ });
