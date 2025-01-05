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

        const filteredPosts = response.data.data.children.filter(post => {
            const postTime = post.data.created_utc;
            if (time === 'all') return true;
            return postTime >= timeFilters[time];
        });

        const posts = filteredPosts.map(post => ({
            id: post.data.id,
            title: post.data.title,
            thumbnail: post.data.thumbnail,
            created_utc: post.data.created_utc,
        }));

        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

module.exports = {
    searchPosts,
};