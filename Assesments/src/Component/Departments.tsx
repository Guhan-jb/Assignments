// App.tsx
import React from 'react';
import { Container, CssBaseline, Typography, createTheme, ThemeProvider,Box} from '@mui/material';
import DepartmentComponent from './Dept_Component';

const departmentsData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];
const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Blue color
      },
    },
  });
  

const Departments: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" alignItems="center" height="110vh">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            Departments and Sub-Departments
          </Typography>
          <DepartmentComponent departments={departmentsData} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Departments;
