import { useState } from 'react';
import './product.css'

import { BsCart2 } from "react-icons/bs";



const Product = ({ product, cartClickHandle }) => {
    const { name, seller, img, ratings, price } = product;

    const [cartColor, setCartColor] = useState(false)
    const changeCard = () => {
        setCartColor(true)
    }
    return (
        <div className='product-card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h3>Name: {name}</h3>
            <p>Price: {price}$</p>
            <small>Brand: {seller}</small>
            <p>Ratings: {ratings}</p>
            <div>
                <button
                    className='cart-button'
                    onClick={() => { cartClickHandle(product); changeCard(); }}
                >
                    <BsCart2 className={cartColor ? 'cart-icon' : 'cart-button'}></BsCart2>
                </button>
            </div>
        </div>
    );
};


const AsideCard = ({pd})=>{
    return(
        <div className='cart-bar'>
            <h3>{pd.name}</h3>
            <h3>{pd.price}</h3>
            <img src="../../../public/cross.png" alt="" />
        </div>
    )
}

export  {Product,AsideCard};