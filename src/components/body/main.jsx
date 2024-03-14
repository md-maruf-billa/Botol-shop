import { useEffect, useState } from "react";
import {Product,AsideCard} from "../Product/Product";
import './main.css'
const Main = ({ cartClickHandle,clickCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <main>

            <section className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        cartClickHandle={cartClickHandle}
                    ></Product>)
                }

            </section>
            <section className="aside">
                <div className="title">
                    <h1 >Your Added</h1>
                </div>

                <div className='cart-container'>
                    <h3>Name</h3>
                    <h3>Price</h3>
                    <h3>Status</h3>
                    
                </div>
                {
                   clickCart.map((pd,idx)=><AsideCard pd={pd} key={idx}></AsideCard>) 
                }
            </section>
        </main>
    );
};

export default Main;