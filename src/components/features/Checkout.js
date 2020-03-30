import React, { useEffect, Fragment } from 'react';
import Nav from './Nav';
import Footer from './Footer'
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux'
import { getNumbers } from '../../actions/getAction';
import { addBasket } from '../../actions/addAction'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    products: {
        justifyContent: 'space-around',
        color: 'green',
        fontSize: '20px',
        borderBottom: '2px solid grey',
        padding: '20px',
        display: 'flex',
        flexWrap: 'wrap'

    }
}));


function Checkout({ basketProps }) {
    const classes = useStyles();
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach(function (item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })

    productsInCart = productsInCart.map((product, index) => {
        return (
            <Fragment>
                <h2>{product.name}</h2>
                <h2>${product.price}</h2>
                <h2>{product.numbers}</h2>
                <h2>Total: ${product.numbers * product.price}</h2>
            </Fragment>
        )
    });
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

            <Container>
                <div className={classes.root}>
                    <Toolbar style={{ backgroundColor: '#047923', color: 'white' }}>
                        <Typography variant="h6" className={classes.title}>
                            Product
                             </Typography>
                        <Typography variant="h6" className={classes.title}>
                            Price
                             </Typography>
                        <Typography variant="h6" className={classes.title}>
                            Quantity
                             </Typography>
                        <Typography variant="h6" className={classes.title}>
                            Total
                        </Typography>
                    </Toolbar>
                </div>

                <div className={classes.products}>{productsInCart}</div>

                <Typography variant="h6" className={classes.title}>Basket Total: {basketProps.cartCost}.00
                </Typography>
            </Container>
            <Footer />

        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
})
export default connect(mapStateToProps)(Checkout);