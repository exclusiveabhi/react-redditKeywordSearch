import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ subreddit, setSubreddit, keyword, setKeyword, onSearch }) => {
    return (
        <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
            <TextField
                label="Enter Subreddit"
                variant="outlined"
                value={subreddit}
                onChange={e => setSubreddit(e.target.value)}
                fullWidth
                sx={{ flex: 1 }}
            />
            <TextField
                label="Enter Keyword"
                variant="outlined"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                fullWidth
                sx={{ flex: 1 }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={onSearch}
                startIcon={<SearchIcon />}
                sx={{ height: '56px' }}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;