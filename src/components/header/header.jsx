
import './header.css'
const Header = ({ clickCart,showCartProduct }) => {

    return (
        <header>
            <nav className='nav-bar'>
                <div>
                    <h1 className='shop-logo'>SK Shop</h1>
                </div>
                <div className='nav-button'>
                    <div className='page-nav'>
                        <a className='active' href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact use</a>
                    </div>
                    <div className='cart' onClick={showCartProduct}>
                        <img src='../../../public/cart.png' /><sub>{clickCart.length}</sub>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export { Header };