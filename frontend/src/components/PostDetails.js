import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const PostDetails = ({ post }) => {
    const createdAt = post.created_utc ? new Date(post.created_utc * 1000).toLocaleString() : 'Invalid date';

    return (
        <Box sx={{ mt: 2, p: 2, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <Typography variant="body1"><strong>Author:</strong> {post.author}</Typography>
            <Typography variant="body1"><strong>Created At:</strong> {createdAt}</Typography>
            <Typography variant="body1"><strong>Content:</strong> {post.selftext}</Typography>
            <Link href={post.url} target="_blank" rel="noopener noreferrer">
                View on Reddit
            </Link>
        </Box>
    );
};

export default PostDetails;