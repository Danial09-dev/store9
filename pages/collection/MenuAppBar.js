import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuMargin: {
    marginBottom: theme.spacing(7)
  },
 
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} className={classes.menuMargin}>
      <AppBar position="absolute" color='primary' >

        <Toolbar variant="dense"  >
       
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
      <Typography  variant="h3" color='secondary'>Store9 </Typography>

            </IconButton>
            
          
          
        <Link to="/"><Button  color="secondary">Home</Button></Link>
        <Link to="/collection" color="secondary"><Button >Shop</Button></Link>
        <Link to="/cart" color="secondary"><Button >Cart</Button></Link>

        



        </Toolbar>
      </AppBar>
    </div>
  );
}


// <Button style={classes.ButtonColor}><a href='/' style={{textDecoration: 'none'}} > Home </a> </Button> 
// <Button style={classes.ButtonColor}><a href='/collection' style={{textDecoration: 'none'}}> Shop </a> </Button>
// <Button style={classes.ButtonColor} >Cart</Button>

{/* <Link to="/dashboard">
     <Button style={myStyle}>
        <p>Click Me!</p>
     </Button>
 </Link> */}