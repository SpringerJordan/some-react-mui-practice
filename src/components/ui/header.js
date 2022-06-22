import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from  '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import logo from '../../assets/logo.svg';
import {Link} from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



//import createTheme from './theme';
import Button from '@mui/material/Button';
//import theme from './theme';




function ElevationScroll(props) {
    const { children } = props;
   
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
      toolbarMargin:{
        ...theme.mixins.toolbar,
        marginBottom: "3em"
      },
      logo: {
        height: "8em"
      },
      logoContainer:{
        padding: "0",
        "&:hover": {
          backgroundColor: "transparent"
        }
      },
      tabContainer: {
        marginLeft:"auto"
      },
      tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        //color: '#FFFFFF'
      },
      button: {
        ...theme.typography.estimate,
        borderRadius:"50px",
        marginLeft:"50px",
        marginRight:"25px",
        height:"45px"

    }
  }))


export default function Header(props){
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const[open, setOpen] = useState(false)

    const handleChange = (e, value) => {
        setValue(value)
    };

    // const handleClick = (e) => {
    //   setAnchorEl(e.currentTarget)
    //   setOpen(True)
    // }

    const handleClose = (e) => {
      setAnchorEl(null)
      setOpen(false)
    }


    useEffect(() =>{
      if (window.location.pathname ==="/" && value !==0){
        setValue(0)
      }else if(window.location.pathname ==="/services" && value !==1){
        setValue(1)
      }else if(window.location.pathname ==="/revolution" && value !==2){
        setValue(2)
      }else if(window.location.pathname ==="/about" && value !==3){
        setValue(3)
      }else if(window.location.pathname ==="/contact" && value !==4){
        setValue(4)
      }else if(window.location.pathname ==="/estimate" && value !==5){
        setValue(5)
      }
    }, [value]);

    return (
    <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters> 
                    
                    <Button component = {Link} to ="/" onClick = {() => setValue(0)} className={classes.logoContainer} disableRipple>
                      <img alt = "company logo" className={classes.logo} src= {logo} />
                    </Button>
                    <Tabs 
                        value = {value} 
                        onChange = {handleChange} 
                        className= {classes.tabContainer}
                        indicatorColor="primary"
                    >
                        <Tab 
                          className = {classes.tab} 
                          component = {Link} 
                          to = "/" 
                          label= "Home"
                        />
                        <Tab 
                          //aria-owns = {anchorEl ? "simple-menu" : undefined} 
                          //aria-haspopup = {anchorEl ? "true" : undefined} 
                          className = {classes.tab} 
                          component = {Link} 
                          to = "/services" 
                          label= "Services"
                        />
                        <Tab 
                          className = {classes.tab} 
                          component = {Link} 
                          to = "/revolution" 
                          label= "The Revolution"
                        />
                        <Tab 
                          className = {classes.tab} 
                          component = {Link} 
                          to = "/about" 
                          label= "About"
                        />
                        <Tab 
                          className = {classes.tab} 
                          component = {Link} 
                          to = "/contact" 
                          label= "Contact Us"
                        />   
                    </Tabs>

                    <Button variant="contained" color="secondary" >Free Estimate</Button>

                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
    </React.Fragment>
    )
}