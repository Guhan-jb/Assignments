import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserInfoForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    let valid = true;

    if (!name) {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

    if (!phoneNumber) {
      setPhoneNumberError('Phone number is required');
      valid = false;
    } else {
      setPhoneNumberError('');
    }

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      valid = false;
    } else {
      setEmailError('');
    }

    return valid;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      const userDetails = { name, phoneNumber, email };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/second-page');
    }
  };

  const isValidEmail = (value: string) => {
    // Basic email format validation (you can use a library for more comprehensive validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
        <Typography variant="h5">User Information</Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          error={Boolean(nameError)}
          helperText={nameError}
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          error={Boolean(phoneNumberError)}
          helperText={phoneNumberError}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={Boolean(emailError)}
          helperText={emailError}
        />
        <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Paper>
    </Box>
  );
};

export default UserInfoForm;
