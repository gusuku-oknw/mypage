import React from 'react';
import { Typography, Paper, Card, CardContent, Grid } from '@mui/material';

interface Project {
    name: string;
    description: string;
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        { name: 'Project 1', description: 'プロジェクト1の説明' },
        { name: 'Project 2', description: 'プロジェクト2の説明' },
    ];

    return (
        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                My Projects
            </Typography>
            <Grid container spacing={3}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {project.name}
                                </Typography>
                                <Typography variant="body2">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default Projects;