import React, { Component } from "react";
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TodoList from './component/todos/TodoList'
import CopyRight from "./component/CopyRight";

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
          <CopyRight />
        </Box>
    </Container>   
    </div>
  );
};

export default App;