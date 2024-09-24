import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Grid, Paper, InputBase, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ScannerIcon from '@mui/icons-material/Scanner';
import Logo from './facee.jpg';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import RefreshIcon from '@mui/icons-material/Refresh';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { day: 'Mon', secondYear: 65, thirdYear: 90 },
  { day: 'Tue', secondYear: 80, thirdYear: 85 },
  { day: 'Wed', secondYear: 10, thirdYear: 15 },
  { day: 'Thu', secondYear: 82, thirdYear: 92 },
  { day: 'Fri', secondYear: 90, thirdYear: 53 },
  { day: 'Sat', secondYear: 40, thirdYear: 50 },
];
const Dashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleScanNowClick = () => {
    navigate('/scan');
  };
  const handleLogoutClick = () => {
    navigate('/');
  };
  const handleTeacherDashboardClick = () => {
    navigate("/TeacherDashboard");
  };
  const handleAssignmentManagerClick = () => {
    navigate("/AssignmentManager");
  };
  const handlerefreshiconClick =()=> {
    navigate("/dashboard")
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#14151B', color: 'white' }}>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Box sx={{ width: 250, backgroundColor: "#14151B", padding: 2, border: "1px solid #07f7ff", borderTop: '0', borderBottom: '0', borderLeft: '0' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <img src={Logo} alt="Logo" style={{ width: 60, height: 'auto', marginRight: "8px", borderRadius: "50%" }} />
              <Typography variant="h6" color="white" sx={{ display: 'inline', fontSize: "1.2rem" }}>Face Attendance</Typography>
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
            <Box sx={{ marginTop: 'auto' }}>
              <ListItem button onClick={handleLogoutClick}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: '#07f7ff', cursor: "pointer" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </Box>
          </List>
        </Box>
        <Box sx={{ flexGrow: 1, padding: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, borderBottom: '1px solid #07f7ff', paddingBottom: 1 }}>
            <Typography variant="h2" sx={{ color: 'white', fontSize: "1.2rem" }}>
              {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()} - {currentTime.toLocaleDateString(undefined, { weekday: 'long' })}
            </Typography>
            <Box>
              <IconButton color="inherit">
                <DarkModeIcon />
              </IconButton>
              <IconButton color="inherit" >
              onClick {handlerefreshiconClick}
                <RefreshIcon />
              </IconButton>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Box>
          </Box>
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
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
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
              <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e', color: "#07f7ff", border: "1px solid #07f7ff", borderRadius: "20px" }}>
                <Typography variant="h6" align="center">2nd Year vs 3rd Year Attendance</Typography>
                <ResponsiveContainer width="100%" height={300}> {/* Smaller height for the chart */}
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" stroke="#07f7ff" />
                    <YAxis stroke="#07f7ff" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="secondYear" stroke="#00C49F" activeDot={{ r: 8 }} name="2nd Year" />
                    <Line type="monotone" dataKey="thirdYear" stroke="#FF8042" name="3rd Year" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e', height: "6.2rem", border: "2px solid white", borderRadius: 2, cursor: 'pointer',transition: 'all 0.3s ease',boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)','&:hover': {borderColor: '#00ff00 ',boxShadow: '0px 10px 20px rgba(0, 255, 0, 0.5), 0px 4px 6px rgba(0, 255, 0, 0.3)'} }}>
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
                <Typography variant="h6">hello</Typography>
              </Paper>
              <Paper sx={{ padding: 2, backgroundColor: '#1e1e1e', mt: 1, height: "6.5rem", border: "2px solid white" }}>
                <Typography variant="h6">hello</Typography>
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
    </Box>
  );
};
export default Dashboard;