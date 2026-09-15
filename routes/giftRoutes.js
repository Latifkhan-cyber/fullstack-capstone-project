// giftRoutes.js - giftlink-backend/routes/giftRoutes.js
// Database connection using connectToDatabase() method
const connectToDatabase = require('../models/db');
// Explicit connection established
await connectToDatabase();

// Route to serve /api/gifts (lists all items)
router.get('/api/gifts', async (req, res) => {
  const gifts = await db.collection('gifts').find({}).toArray();
  res.json(gifts);
});

// Route to serve /api/gifts/:id (item details by id)
router.get('/api/gifts/:id', async (req, res) => {
  const gift = await db.collection('gifts').findOne({ id: parseInt(req.params.id) });
  res.json(gift);
});
