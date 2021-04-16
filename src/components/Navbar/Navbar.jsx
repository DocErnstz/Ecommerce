import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/descarga.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {

  const classes = useStyles();
  
 
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" clasName={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button} />
          <IconButton aria-label="show cart items" color="inherit"> 
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
     
    </>
  );
};

export default PrimarySearchAppBar;