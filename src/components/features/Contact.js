import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import Logo from '../../assets/logo.jpg';
import Footer from './Footer'
import Navbar from './Nav'

const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    contactimage: {
        height: '200px',
    },

}));

export default function Contact() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Navbar />
            <CssBaseline />
            <div className={classes.paper}>
                <img src={Logo} className={classes.contactimage} />
            </div>
            {/* Hero unit */}
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Contact Us
                 </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    <FacebookIcon fontSize='large' />
                    <GitHubIcon fontSize='large' />
                    <EmailIcon fontSize='large' />
                    <TwitterIcon fontSize='large' />
                </Typography>
            </Container>
            <Footer />
        </React.Fragment >
    );
}