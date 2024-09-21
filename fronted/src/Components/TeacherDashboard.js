import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';

// Create a dark theme with neon accents
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00', // Neon green
    },
    secondary: {
      main: '#ff00ff', // Neon pink
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// Styled components for modern design
const ModernCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: theme.shadows[5],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: `2px solid ${theme.palette.primary.main}`,
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[8],
  },
}));

const ModernButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ModernTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: '8px',
  },
}));

const Sidebar = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRight: `2px solid ${theme.palette.primary.main}`,
  },
}));

const attendanceData = [
  { id: 1, name: 'John Doe', present: true },
  { id: 2, name: 'Jane Smith', present: false },
  { id: 3, name: 'Bob Johnson', present: true },
];

export default function TeacherDashboard() {
  const [newStudentName, setNewStudentName] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNewStudentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('New student registered:', newStudentName);
    setNewStudentName('');
    setIsFormVisible(false); // Hide the form after submission
  };

  const handleAttendanceDownload = () => {
    console.log('Downloading attendance data...');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCardClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar
          anchor="left"
          open={sidebarOpen}
          onClose={toggleSidebar}
        >
          <Box sx={{ width: 250, p: 2 }}>
            <Typography variant="h6">Sidebar Menu</Typography>
            {/* Add additional links or content here */}
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Link 1</Button>
            <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>Link 2</Button>
          </Box>
        </Sidebar>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Teacher Dashboard - Face Recognition Attendance System
              </Typography>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
              {/* New Student Registration and Teacher Assignment Check */}
              <Grid container item spacing={4}>
                <Grid item xs={12} md={6}>
                  <ModernCard onClick={handleCardClick}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        New Student Registration
                      </Typography>
                      <Collapse in={isFormVisible}>
                        <form onSubmit={handleNewStudentSubmit}>
                          <ModernTextField
                            label="Student Name"
                            variant="outlined"
                            fullWidth
                            value={newStudentName}
                            onChange={(e) => setNewStudentName(e.target.value)}
                            sx={{ mb: 2 }}
                          />
                          <ModernButton type="submit" variant="contained" color="primary">
                            Register New Student
                          </ModernButton>
                        </form>
                      </Collapse>
                    </CardContent>
                  </ModernCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ModernCard>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Teacher Assignment Check
                      </Typography>
                      <ModernButton variant="contained" color="primary">
                        View Assignments
                      </ModernButton>
                    </CardContent>
                  </ModernCard>
                </Grid>
              </Grid>
              {/* Daily Attendance */}
              <Grid item xs={12}>
                <ModernCard>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Daily Attendance
                    </Typography>
                    <TableContainer sx={{ mt: 2 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Present</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {attendanceData.length > 0 ? (
                            attendanceData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                  {row.name}
                                </TableCell>
                                <TableCell align="right">{row.present ? 'Yes' : 'No'}</TableCell>
                              </TableRow>
                            ))
                          ) : (
                            <TableRow>
                              <TableCell colSpan={2} align="center">
                                No Data Available
                              </TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </ModernCard>
              </Grid>
              {/* Weekly & Monthly Attendance and Attendance Download */}
              <Grid container item spacing={4}>
                <Grid item xs={12} md={6}>
                  <ModernCard>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Weekly & Monthly Attendance
                      </Typography>
                      <ModernButton variant="outlined" color="primary" sx={{ mb: 2 }}>
                        View Weekly Report
                      </ModernButton>
                      <ModernButton variant="outlined" color="secondary">
                        View Monthly Report
                      </ModernButton>
                    </CardContent>
                  </ModernCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ModernCard>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Attendance Download
                      </Typography>
                      <ModernButton variant="contained" color="primary" onClick={handleAttendanceDownload}>
                        Download Attendance Data
                      </ModernButton>
                    </CardContent>
                  </ModernCard>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
