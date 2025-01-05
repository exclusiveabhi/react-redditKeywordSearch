import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import PostDetails from './PostDetails';

const AnimatedCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
    width: 340, // Fixed width
    height: 300, // Fixed height
    display: 'flex',
    flexDirection: 'column',
}));

const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
        return title.substring(0, maxLength) + '...';
    }
    return title;
};

const PostCard = ({ post }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <AnimatedCard>
            {post.thumbnail && post.thumbnail !== 'self' && (
                <CardMedia
                    component="img"
                    height="140"
                    image={post.thumbnail}
                    alt="Thumbnail"
                />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {truncateTitle(post.title, 50)}
                </Typography>
                <Button size="small" onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
                <Collapse in={showDetails}>
                    <PostDetails post={post} />
                </Collapse>
            </CardContent>
        </AnimatedCard>
    );
};

export default PostCard;