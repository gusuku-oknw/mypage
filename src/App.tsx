import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Header />
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to My Portfolio
                </Typography>
                <div id="about">
                    <About />
                </div>
                <div id="skills">
                    <Skills />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </Box>
        </Container>
    );
}

export default App;
