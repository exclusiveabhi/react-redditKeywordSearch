const express = require('express');
const { searchPosts } = require('../controllers/redditController');
const router = express.Router();

router.get('/search', searchPosts);

module.exports = router;
