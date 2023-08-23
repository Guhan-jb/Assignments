// SecondPage.tsx
import React from 'react';
import { Box,Typography,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Details: React.FC = () => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  const navigate=useNavigate()
  const handleHomebtn=()=>{
    navigate("/")
  }
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <Box textAlign="center" p={3} border={1} borderRadius={4} boxShadow={3}>
      <Typography variant="h5">Details</Typography>
      <Typography>Name: {userDetails.name}</Typography>
      <Typography>Phone Number: {userDetails.phoneNumber}</Typography>
      <Typography>Email: {userDetails.email}</Typography>
      <Button color='primary' onClick={handleHomebtn}>Home</Button>
    </Box>
  </Box>
  );
};

export default Details;
