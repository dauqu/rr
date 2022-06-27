import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
// import { useParams } from 'react-router-dom';
import clsx from 'clsx';
// import { getProductById } from '../../service/api';
// import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { useParams } from 'react-router-dom';
// import { getProductDetails } from '../../redux/actions/productActions';
const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));

const data = {
    id: '',
    url: '',
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    },
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '',
    tagline: ''
};

export default function DetailView() {
    const {id} = useParams()
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  
    
    // getting data
    const [product, setProduct] = useState([])

    async function GetData() {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(res.data)
        setProduct(res.data);
    }
    useEffect(() => {
        GetData()
    }, []);

    return (
        <Box className={classes.component}>
            <Box></Box>
            {product && Object.keys(product).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 5 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="" /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹45{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.category} </span>
                        </Typography>
                        <ProductDetail/>
                    </Grid>
                </Grid>
            }
        </Box>
    )
}



