import React from 'react';
import { Typography, Paper, Chip, Box } from '@mui/material';

const Skills: React.FC = () => {
    const skills: string[] = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

    return (
        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                My Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill, index) => (
                    <Chip key={index} label={skill} color="primary" variant="outlined" />
                ))}
            </Box>
        </Paper>
    );
};

export default Skills;