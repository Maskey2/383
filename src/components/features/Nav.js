import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Mini from '../../assets/mini.jpg';


const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: '#007c21',
  },
  mini: {
    height: 32,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    }
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  let user = sessionStorage.getItem('userData');

  return (
    <div>
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}><img src={Mini} className={classes.mini} /></Link>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link to="/" className={classes.link}>Envoc Agri Co</Link>
          </Typography>
          <nav>
            <Link to="/" className={classes.link}>Home</Link>
            <Link to="/contact" className={classes.link}>Contact</Link>
            <Link to="/login" className={classes.link}> Login</Link>
            <Link to="/signup" className={classes.link}>Signup</Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
