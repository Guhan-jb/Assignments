import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Checkbox,
  Box,
  Button,
  Paper,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentComponentProps {
  departments: Department[];
}

const DepartmentComponent: React.FC<DepartmentComponentProps> = ({ departments }) => {
  const [openDepartments, setOpenDepartments] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);
  const navigate=useNavigate()
  const handleHomebtn=()=>{
    navigate("/")
  }
  const handleDepartmentToggle = (department: string) => () => {
    if (openDepartments.includes(department)) {
      setOpenDepartments(openDepartments.filter(item => item !== department));
    } else {
      setOpenDepartments([...openDepartments, department]);
    }
  };

  const handleDepartmentSelect = (department: string) => () => {
    const isSelected = selectedDepartments.includes(department);
    let newSelectedDepartments: string[] = [];
    let newSelectedSubDepartments: string[] = [];

    if (!isSelected) {
      newSelectedDepartments = [...selectedDepartments, department];
      newSelectedSubDepartments = [
        ...selectedSubDepartments,
        ...departments.find(d => d.department === department)?.sub_departments.map(subDep => department + '_' + subDep) || [],
      ];
    } else {
      newSelectedDepartments = selectedDepartments.filter(dep => dep !== department);
      newSelectedSubDepartments = selectedSubDepartments.filter(subDep => !subDep.startsWith(department + '_'));
    }

    setSelectedDepartments(newSelectedDepartments);
    setSelectedSubDepartments(newSelectedSubDepartments);
  };

  const handleSubDepartmentSelect = (subDepartment: string) => () => {
    const department = subDepartment.split('_')[0];
    const isSelected = selectedSubDepartments.includes(subDepartment);
    let newSelectedDepartments: string[] = [];
    let newSelectedSubDepartments: string[] = [];
  
    if (!isSelected) {
      newSelectedSubDepartments = [...selectedSubDepartments, subDepartment];
    } else {
      newSelectedSubDepartments = selectedSubDepartments.filter(subDep => subDep !== subDepartment);
    }
  
    // Check if all sub-departments of the department are selected
    const allSubsSelected =
      departments.find(d => d.department === department)?.sub_departments.every(subDep =>
        newSelectedSubDepartments.includes(department + '_' + subDep)
      ) || false;
  
    if (allSubsSelected) {
      newSelectedDepartments = [...selectedDepartments, department];
    } else {
      newSelectedDepartments = selectedDepartments.filter(dep => dep !== department);
    }
  
    setSelectedDepartments(newSelectedDepartments);
    setSelectedSubDepartments(newSelectedSubDepartments);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px' }}>
        <List>
          {departments.map(({ department, sub_departments }) => (
            <div key={department}>
              <ListItem  onClick={handleDepartmentToggle(department)}>
                <ListItemIcon>
                  {openDepartments.includes(department) ? <ExpandLess /> : <ExpandMore />}
                </ListItemIcon>
                <ListItemText primary={department} />
                <Checkbox
                  edge="end"
                  checked={selectedDepartments.includes(department)}
                  onChange={handleDepartmentSelect(department)}
                />
              </ListItem>
              <Collapse in={openDepartments.includes(department)}>
                <List>
                  {sub_departments.map(subDepartment => (
                    <ListItem
                      key={subDepartment}
                      onClick={handleSubDepartmentSelect(department + '_' + subDepartment)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="end"
                          checked={selectedSubDepartments.includes(department + '_' + subDepartment)}
                        />
                      </ListItemIcon>
                      <ListItemText primary={subDepartment} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      <Button color='primary' onClick={handleHomebtn}>Home</Button>
      </Paper>
    </Box>
  );
};

export default DepartmentComponent;
