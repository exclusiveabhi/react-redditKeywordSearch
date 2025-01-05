import React, { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Grid, CircularProgress } from '@mui/material';
import SearchBar from '../components/SearchBar';
import PostCard from '../components/PostCard';

const HomePage = () => {
    const [subreddit, setSubreddit] = useState('');
    const [keyword, setKeyword] = useState('');
    const [filter, setFilter] = useState('all');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://www.reddit.com/r/${subreddit}/search.json?q=${keyword}&restrict_sr=1`
            );
            const data = await response.json();
            console.log('Fetched posts:', data); // Debugging log
            setPosts(data.data.children.map(child => child.data)); // Ensure posts is an array of post objects
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
        setLoading(false);
    };

    const filterPostsByDate = () => {
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000;
        const yesterdayStart = todayStart - 86400;
        const weekStart = todayStart - 604800;

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
    console.log('Filtered posts:', filteredPosts); // Debugging log

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
                    {Array.isArray(filteredPosts) && filteredPosts.map(post => (
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