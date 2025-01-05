const axios = require('axios');

const redditAPI = axios.create({
    baseURL: 'https://www.reddit.com',
});

module.exports = redditAPI;