import React, { useState } from 'react';
import { Typography, Box, CircularProgress, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import PostCard from '../components/PostCard';

const HomePage = () => {
    const [subreddit, setSubreddit] = useState('');
    const [keyword, setKeyword] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('all');

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://redditkeywordsearch-api.onrender.com/api/reddit/search?subreddit=${subreddit}&keyword=${keyword}&time=${filter}`
            );
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
        setLoading(false);
    };

    const filterPostsByDate = () => {
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000;
        const yesterdayStart = todayStart - 86400;
        const weekStart = todayStart - 7 * 86400;

        switch (filter) {
            case 'today':
                return posts.filter(post => post.created_utc >= todayStart);
            case 'yesterday':
                return posts.filter(post => post.created_utc >= yesterdayStart && post.created_utc < todayStart);
            case 'week':
                return posts.filter(post => post.created_utc >= weekStart);
            default:
                return posts;
        }
    };

    const filteredPosts = filterPostsByDate();

    return (
        <Box sx={{ mt: 4 }}>
            <center>
            <Typography variant="h4" gutterBottom>
                Assignment no:- 3 Reddit
            </Typography>
            </center>
            <SearchBar
                subreddit={subreddit}
                setSubreddit={setSubreddit}
                keyword={keyword}
                setKeyword={setKeyword}
                onSearch={fetchPosts}
            />
            <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel id="filter-label">Filter</InputLabel>
                <Select
                    labelId="filter-label"
                    id="filter"
                    value={filter}
                    label="Filter"
                    onChange={e => setFilter(e.target.value)}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="today">Today</MenuItem>
                    <MenuItem value="yesterday">Yesterday</MenuItem>
                    <MenuItem value="week">This Week</MenuItem>
                </Select>
            </FormControl>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    {filteredPosts.map(post => (
                        <Grid item key={post.id}>
                            <PostCard post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default HomePage;