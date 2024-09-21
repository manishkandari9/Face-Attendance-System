import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, InputBase } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ScannerIcon from '@mui/icons-material/Scanner';
import Logo from './facee.jpg';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const customers = [
  { name: 'Rishab', Rollno: 1, Date: "15/09/2024", Presence: 'absent' },
  { name: 'Mohit', Rollno: 2, Date: "15/09/2024", Presence: 'precent' },
  { name: 'Vikash', Rollno: 3, Date: "15/09/2024", Presence: 'absent' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const handleScanNowClick = () => {
    navigate('/scan');
  };

  const handleLogoutClick =()=>{
    navigate('/');
  }
  const handleTeacherDashboardClick = ()=>{
    navigate("/TeacherDashboard");
  }
  const handleAssignmentManagerClick =()=>{
    navigate("/AssignmentManager")
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '', color: 'white' }}>
      <Box sx={{ width: 250, backgroundColor: "#14151B", padding: 2, border: "1px solid #07f7ff", borderTop: '', borderBottom:'', borderLeft: '0'  }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <img src={Logo} alt="Logo" style={{ width: 60, height: 'auto', marginRight: "8", borderRadius:"50%" }} />
            <Typography variant="h6" color="white">Face Attendance</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid orange', borderRadius: 4, padding: 0.5 }}>
            <SearchIcon sx={{ color: 'white', mr: 1 }} />
            <InputBase 
              placeholder="Search..." 
              sx={{ color: '#00ff00', flex: 1, ml: 1 }} 
            />
          </Box>
        </Box>

        <List>
          <ListItem button selected>
            <ListItemIcon>
              <DashboardIcon sx={{ color: '#07f7ff' }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="?" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="abhi pta nhi" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="abhi pta nhi" />
          </ListItem>
          <Box sx={{ marginTop: 'auto' }}>
          <ListItem button onClick={handleLogoutClick}>
              <ListItemIcon>
                <LogoutIcon sx={{ color: '#07f7ff', cursor: "pointer"}} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </Box>
        </List>
      </Box>

      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
        <Grid item xs={3}>
            <Paper 
              sx={{ 
                p: 4, 
                height: "5rem", 
                background: 'linear-gradient(to bottom right, #000000 0%, #000000 10%, #6901aa 70%, #000000 100%)',
                border: "2px solid ", 
                borderRadius: 2, 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', 
                '&:hover': {
                  border: "2px solid #ff00ff",
                  borderColor: '#ff00ff',
                  boxShadow: '0px 10px 20px rgba(255, 0, 255, 0.5), 0px 4px 6px rgba(255, 0, 255, 0.3)'
                }
              }}
              onClick={handleScanNowClick}
            >
              <Typography 
                variant="h6" 
                color="white" 
                align="center" 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                sx={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600', 
                  '&:hover': {
                    color: '#00ff00',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                  },
                  // transition: 'color 2.10s ease, textShadow 0.3s ease',
                }}
              >
                <ScannerIcon sx={{ fontSize: 30, mr: 1 }} />
                Scan Face
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper 
              sx={{ 
                p: 4, 
                height: "5rem", 
                background: "linear-gradient(to right, #000000, #6901cb)", 
                border: "2px solid",
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', // Default shadow
                '&:hover': {
                  borderColor: '#00ff00 ',
                  boxShadow: '0px 10px 20px rgba(0, 255, 0, 0.5), 0px 4px 6px rgba(0, 255, 0, 0.3)' 
                }
              }}
            >
              <Typography 
                variant="h6" 
                color="white" 
                align="center" 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                sx={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  '&:hover': {
                    color: 'blue' 
                  },
                  transition: 'color 0.3s ease' 
                }}
                onClick={handleTeacherDashboardClick}
              >
                Teacher Dashboard
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper 
              sx={{ 
                p: 4, 
                height: "5rem", 
                background: "linear-gradient(to right, #000000, #003440)", 
                border: "2px solid white",
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', 
                '&:hover': {
                  borderColor: 'blue',
                  boxShadow: '0px 10px 20px rgba(0, 0, 255, 0.5), 0px 4px 6px rgba(0, 0, 255, 0.3)' 
                }
              }}
            >
              <Typography 
                variant="h6" 
                color="white" 
                align="center" 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                sx={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  '&:hover': {
                    color: 'blue'
                  },
                  transition: 'color 0.3s ease' 
                }}
              >
                Student Dashboard
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper 
              sx={{ 
                p: 4, 
                height: "5rem", 
                background: "linear-gradient(to right, #000000, #003440)", 
                border: "2px solid white",
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)', 
                '&:hover': {
                  borderColor: 'blue',
                  boxShadow: '0px 10px 20px rgba(0, 0, 255, 0.5), 0px 4px 6px rgba(0, 0, 255, 0.3)' 
                }
              }}
            >
              <Typography 
                variant="h6" 
                color="white" 
                align="center" 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                sx={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  '&:hover': {
                    color: 'blue' 
                  },
                  transition: 'color 0.3s ease' 
                }}
                onClick={handleAssignmentManagerClick}
              >
               AssignmentManager
              </Typography>
            </Paper>
          </Grid>
        </Grid>


        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={8}>
            <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e', color: "#07f7ff", border: "1px solid #07f7ff", borderRadius: "20px"}}>
              <Typography variant="h6">Student Attendance List</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: 'white' }}>Name</TableCell>
                      <TableCell sx={{ color: 'white' }} align="right">Rollno</TableCell>
                      <TableCell sx={{ color: 'white' }} align="right">Date</TableCell>
                      <TableCell sx={{ color: 'white' }} align="right">Presence</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.name}>
                        <TableCell sx={{ color: 'white' }}>{customer.name}</TableCell>
                        <TableCell sx={{ color: 'white' }} align="right">{customer.Rollno}</TableCell>
                        <TableCell sx={{ color: 'white' }} align="right">{customer.Date}</TableCell>
                        <TableCell sx={{ color: 'white' }} align="right">{customer.Presence}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e', height:"6.2rem", border: "2px solid white" }}>
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ height: 5, backgroundColor: '#2e2e2e' }}></Box>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e', height: "6.2rem", border: "2px solid white" }}>
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ height: 4, backgroundColor: '#2e2e2e' }}></Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e', mt: 1, height: "6.5rem", border: "2px solid white" }}>
              <Typography variant="h6"></Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
