import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to the React Internship Assignment!
        </Typography>
        <Typography variant="body1" align="center" paragraph>
         I am Guhan and these the three tasks provided
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Button component={Link} to="/task1" variant="contained" color="primary" style={{ marginBottom: 10 }}>
            Task 1
          </Button>
          <Button component={Link} to="/task2" variant="contained" color="primary" style={{ marginBottom: 10 }}>
            Task 2
          </Button>
          <Button component={Link} to="/task3" variant="contained" color="primary">
            Task 3
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
