const redditAPI = require('../config/redditAPI');

const searchPosts = async (req, res) => {
    const { subreddit, keyword, time } = req.query;

    try {
        const response = await redditAPI.get(`/r/${subreddit}/search.json`, {
            params: { q: keyword, restrict_sr: true, sort: 'new' },
        });

        const now = Math.floor(Date.now() / 1000);
        const timeFilters = {
            today: now - 86400, // 24 hours
            yesterday: now - 172800, // 48 hours
            week: now - 604800, // 7 days
        };

        const posts = response.data.data.children
            .filter(post =>
                time
                    ? post.data.created_utc >= timeFilters[time]
                    : true
            )
            .map(post => post.data);

        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching posts from Reddit' });
    }
};

module.exports = { searchPosts };