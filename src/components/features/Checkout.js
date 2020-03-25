import React from 'react';
import Nav from './Nav';
import Footer from './Footer'
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
}));


function Checkout() {
    const classes = useStyles();
    return (
        <div>
            <Nav />
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Checkout Ticket
                         </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Print out or Scan your Ticket
                      </Typography>
            </Container>
            <Footer />
        </div>
    )
}
export default Checkout;