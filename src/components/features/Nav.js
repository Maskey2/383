import React from "react";
import { Link, Redirect } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Mini from '../../assets/mini.jpg';


const styles = theme => ({
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
});



class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reDirect: false
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    sessionStorage.clear("userData");
    //   this.setState(prevState => {
    //     return {
    //         isOpen: !prevState.isOpen,
    //     }


    // });
    return <Redirect to="/login" />

  }


  render() {
    const { classes } = this.props;
    // let btnTxt = this.state.isOpen ? 'Login' : 'Logout'
    const userData = sessionStorage.getItem('userData');



    //let user = sessionStorage.getItem('userData');
    // const link1 = sessionStorage.getItem('userData')!=null? '/farmfield' :'/login';
    // const link2 = sessionStorage.getItem('userData')!=null? "/logout" :'login';
    // console.log(sessionStorage['userData']);
    // if(sessionStorage.getItem('userData') === null){
    //   return (
    //     <div>
    //       <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
    //         <Toolbar className={classes.toolbar}>
    //           <Link to="/" className={classes.link}><img src={Mini} className={classes.mini} /></Link>
    //           <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
    //             <Link to="/" className={classes.link}>Envoc Agri Co</Link>
    //           </Typography>
    //           <nav>
    //             <Link to="/" className={classes.link}>Home</Link>
    //             <Link to="/contact" className={classes.link}>Contact</Link>
    //             {/* {user == null ?<Link to="/login" className={classes.link}> Login</Link>: <Link to  = "/farmfield" onClick = {this.handleLogout}>Logout</Link>} */}
    //             {/* <Link to = "/login" className = {classes.link}>Login</Link> */}
    //             <Link to = '/login' className = {classes.link}>Login</Link>
    //             <Link to="/signup" className={classes.link}>Signup</Link>
    //           </nav>
    //         </Toolbar>
    //       </AppBar>
    //     </div>
    //   );
    // }else{
    return (
      <div>
        <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Link to="/" className={classes.link}><img src={Mini} className={classes.mini} alt="logo" /></Link>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              <Link to="/" className={classes.link}>Envoc Agri Co</Link>
            </Typography>
            <nav>
              <Link to="/" className={classes.link}>Home</Link>
              <Link to="/contact" className={classes.link}>Contact</Link>

              {userData == null ? <Link to="/login" className={classes.link}> Login</Link> : <Link to="/login" className={classes.link} onClick={this.handleLogout}>Logout</Link>}
              {/* <Link to = "/login" className = {classes.link} onClick = {this.handleLogout}>Logout</Link> */}
              <Link to="/signup" className={classes.link}>Signup</Link>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
// }

export default withStyles(styles)(Nav);