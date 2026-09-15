// app.js - fullstack-capstone-project
// Route serving /api/search with complete search logic
app.get('/api/search', (req, res) => {
  const query = req.query.category;
  const matches = gifts.filter(g => g.category === query);
  res.json({ query, results: matches, count: matches.length });
});
