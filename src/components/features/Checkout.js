import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer'
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import QRCode from 'qrcode.react'

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
    total: {
        fontFamily: 'Poppins',
        fontSize: '30px',
        margin: '20px'
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    section: {
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '2px solid grey',
    },
    icon: {
        backgroundColor: '#e4e4e4',
        borderRadius: '20px',
        padding: '10px',
        fontSize: '40px',
        verticalAlign: 'middle',
        margin: '5px',
        cursor: 'pointer'
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
        //let count = useState(product.numbers);
        //const [count, setCount] = useState(product.numbers);
        return (
            <div className={classes.section}>
                <HighlightOffIcon className={classes.icon} />
                <div className={classes.subsection}><h2 >{product.name}</h2></div>
                <div className={classes.subsection}><h2 >${product.price}</h2></div>
                <div className={classes.subsection}><h2><ArrowLeftIcon className={classes.icon} /> {product.size} <ArrowRightIcon className={classes.icon} /></h2></div>
                <div className={classes.subsection}><h2>
                    <RemoveIcon className={classes.icon}
                    //onClick={() => setCount(count - 1)} 
                    /> {product.numbers} <AddIcon className={classes.icon}
                    // onClick={() => setCount(count + 1)} 
                    /></h2>
                </div>
                <div className={classes.subsection}><h2 >Total: ${product.numbers * product.price}</h2></div><br />
                
            </div>
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
                    <Toolbar style={{ backgroundColor: '#047923', color: 'white', margin: '20px' }}>
                        <Typography variant="h6" className={classes.title}>
                            Product </Typography>
                        <Typography variant="h6" className={classes.title}>
                            Price  </Typography>
                        <Typography variant="h6" className={classes.title}>
                            Bucket Size </Typography>
                        <Typography variant="h6" className={classes.title}>
                            Quantity </Typography>
                        <Typography variant="h6" className={classes.title}>
                            Total </Typography>
                    </Toolbar>
                </div>
                
                <div>{productsInCart}</div>

                <Typography className={classes.total}>Basket Total: ${basketProps.cartCost}.00
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