
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import tiers from './Productinfo'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: 'white',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    createbutton: {
        background: '#047923',
        color: 'white',
        '&:hover': {
            background: '#ffa500',
            color: 'white',
        }
    },
    checkoutbutton: {
        marginTop: '20px',
        background: '#047923',
        color: 'white',
        '&:hover': {
            background: '#ffa500',
            color: 'black',
        }
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    textarea: {
        height: '200px',
        width: '500px',
        border: '1px solid grey',
        margin: '40px',
        fontFamily: 'Roboto',
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));



function Farmfield(props) {
    console.log(props);
    const classes = useStyles();

    const [buttonText, setButtonText] = React.useState("Buy Ticket");

    function handleClick() {
        console.log('clicked');
        setButtonText("Go to Cart");
    }
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Farm Field
                </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Know your Agriculture Products with Envoc Agri Co's Farm Field.
                </Typography>
                    <Typography align="center">
                        <Link to='/checkout' style={{ textDecoration: 'none' }}>
                            <Button size="large" className={classes.checkoutbutton}>Go to Cart</Button></Link>
                    </Typography>
                </Container>
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map(tier => (
                            <Grid item key={tier.id} xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        title={tier.title} subheader={tier.subheader} titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }} className={classes.cardHeader} />
                                    <CardMedia className={classes.cardMedia} image={tier.src} title="Image title" />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${tier.mprice}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /bucket (M)  </Typography>
                                        </div>
                                        <ul>
                                            {tier.description.map(line => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                        <Typography align="center">
                                            <Button onClick={() => { props.addBasket(tier.title); handleClick(); }} className={classes.createbutton} style={{ marginTop: '5px' }}>{buttonText}</Button>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </React.Fragment>
        </div >
    );
}

export default connect(null, { addBasket })(Farmfield);