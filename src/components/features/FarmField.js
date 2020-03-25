
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import tiers from './Productinfo'
import Counter from './Counter'
import { Button } from '@material-ui/core';

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
        marginLeft: '250px',
        '&:hover': {
            background: '#ffa500',
            color: 'white',
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

}));



export default function Pricing() {
    const classes = useStyles();

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
                </Container>
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map(tier => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        className={classes.cardHeader}
                                    />
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={tier.src}
                                        title="Image title"
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${tier.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /bucket          </Typography>
                                        </div>
                                        <ul>
                                            {tier.description.map(line => (
                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <Counter />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </React.Fragment>

        </div >
    );
}

