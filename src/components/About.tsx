import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const About: React.FC = () => {
    return (
        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1">
                ここにあなたの自己紹介を書きます。
            </Typography>
        </Paper>
    );
};

export default About;
