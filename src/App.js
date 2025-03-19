import React, { Component } from "react";
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TodoList from './component/todos/TodoList'

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Configured TODO App
        </Typography>
        <Box sx={{ my: 4 }}>
          <TodoList />
        </Box>
        <Box sx={{ my: 4 }}>
          <Copyright />
        </Box>
    </Container>   
    </div>
  );
};

export default App;