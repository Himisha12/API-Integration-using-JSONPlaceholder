import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const CustomAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Item List App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
