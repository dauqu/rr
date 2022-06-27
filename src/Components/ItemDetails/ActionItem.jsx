import { useState, useContext, useReducer, useEffect } from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';
// import { initialState, reducer } from '../../reducers/reducer';
import { addToCart } from '../../redux/actions/cartActions';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadRazorpay } from '../../razorpay/loadPayment';
import axios from "axios";
import { useParams } from 'react-router-dom';

const actionStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow: {
        background: '#fb641b',
        color: '#FFF'
    }
}));

export default function ActionItem() {
    const classes = actionStyle();
    const history = useHistory();
    const { account } = useContext(LoginContext);


    // getting data
    const [product, setProduct] = useState([])
    const { id } = useParams()
    async function GetData() {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(res.data)
        setProduct(res.data);
    }
    useEffect(() => {
        GetData()
    }, []);


    // const buyNow = () => {
    //    <Link to="/chekout"></Link>
    // }

    const addItemToCart = () => {
        
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.image} className={classes.productImage} alt="imageS" /><br />
            <Button onClick={() => addItemToCart()} className={clsx(classes.button, classes.addToCart)} style={{ marginRight: 10 }} variant="contained"><Cart />Add to Cart</Button>
            {/* <Button onClick={() => buyNow()} className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash /> Buy Now</Button> */}
        </Box>
    )
}
