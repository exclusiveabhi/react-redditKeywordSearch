const axios = require('axios');
//this file not implemented in the project
const getAccessToken = async () => {
    const clientId = ''; 
    const clientSecret = ''; 
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    try {
        const response = await axios.post('https://www.reddit.com/api/v1/access_token', 'grant_type=client_credentials', {
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return response.data.access_token;
    } catch (error) {
        console.error('Error obtaining access token:', error.message);
        throw error;
    }
};

const createRedditAPI = async () => {
    const accessToken = await getAccessToken();

    return axios.create({
        baseURL: 'https://www.reddit.com',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'User-Agent': 'YourAppName/1.0.0 (http://yourapp.com)',
        },
    });
};

module.exports = createRedditAPI;