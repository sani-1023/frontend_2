import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer
} from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeIcon from '@mui/icons-material/Home';

const styles = (theme) => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const DrawerComponent = (props) => {
 const navigate = useNavigate()
  const { classes } = props;

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
      
    >
      
      <List style={{backgroundColor:"#b6f5ff"}}>
           <h1 style={{fontFamily:"italic" ,marginLeft:"1rem"}}>Ecommerce 🛍</h1>
           <div style={{marginTop:"2rem",marginBottom:"1rem"}}>
            <ListItem button  onClick={()=> navigate('/')}>
            <ListItemIcon>
              <HomeIcon /> 
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
           </div>
          
           <div style={{marginTop:"2rem",marginBottom:"1rem"}}>
            <ListItem button  onClick={()=> navigate('/profile')}>
            <ListItemIcon>
              <AccountCircleIcon /> 
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
           </div>
          <div style={{marginTop:"2rem",marginBottom:"1rem"}}>
            <ListItem button  onClick={()=> navigate('/login')}>
            <ListItemIcon>
              <HowToRegIcon /> 
            </ListItemIcon>
            <ListItemText primary="Sign up" />
          </ListItem>
          </div>
          <div style={{marginTop:"2rem",marginBottom:"1rem"}}>
            <ListItem button  onClick={()=> navigate('/login')}>
            <ListItemIcon>
              <LoginIcon /> 
            </ListItemIcon>
            <ListItemText primary="Log in" />
          </ListItem>
          </div>
          <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
            <ListItem button  onClick={()=> navigate('/orders')}>
            <ListItemIcon>
              <ShoppingBagIcon /> 
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          </div>
          
          <ListItem button  onClick={()=> navigate('/cart')}>
            <ListItemIcon>
              <AddShoppingCartIcon /> 
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
        
      </List>
      {/* <Divider /> */}
    </div>
  );

  return (
    <Drawer open={props.open} onClose={props.toggleDrawerHandler}>
      {sideList()}
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComponent);

