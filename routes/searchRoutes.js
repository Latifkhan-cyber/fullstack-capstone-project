// searchRoutes.js - fullstack-capstone-project
// Complete filtering by category using query parameter
router.get('/api/search', (req, res) => {
  const category = req.query.category;
  const results = items.filter(i => i.category === category);
  res.json(results);
});
