// short-link-backend/routes/link.js
const express = require('express');
const router = express.Router();
const Link = require('../models/Link');

router.post('/create', async (req, res) => {
  const { url } = req.body;

  try {
    const link = await Link.create({ url });

    res.json({ success: true, message: 'Link created successfully', link });
  } catch (error) {
    console.error('Error during link creation:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
