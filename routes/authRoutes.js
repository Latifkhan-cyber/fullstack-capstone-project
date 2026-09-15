// authRoutes.js - fullstack-capstone-project
// findOne to locate current user by email from request body
router.post('/login', async (req, res) => {
  const user = await collection.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ token: 'jwt-token', user: user.username, email: user.email });
});
