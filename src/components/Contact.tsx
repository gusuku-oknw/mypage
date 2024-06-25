import React from 'react';
import { Typography, Paper, TextField, Button, Box } from '@mui/material';

const Contact: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // ここにフォーム送信のロジックを実装
        console.log('Form submitted');
    };

    return (
        <Paper elevation={3} sx={{ p: 3, my: 3 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Contact Me
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{ mt: 2 }}>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                    type="email"
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Send
                </Button>
            </Box>
        </Paper>
    );
};

export default Contact;
