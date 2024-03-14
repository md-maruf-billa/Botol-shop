
import { useState } from 'react'
import './App.css'
import Main from './components/body/main'
import { Header } from './components/header/header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [clickCart, setClickCard] = useState([])
  const [productCard, setProductCard] = useState(true)

  const showCartProduct = () => {
    setProductCard(false);
  }
  const warning = () => {
    toast.warn('You Already Added this product', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const cartClickHandle = (product) => {
    const isExist = clickCart.find(pd => pd.id == product.id)
    if (isExist) {
      warning();
      return;
    }
    else {
      toast.success('Successfully added this product', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setClickCard([...clickCart, product])
    }
  }
  const removeFromCart = (pds) => {
    const newCard = clickCart.filter(cardsig => cardsig.id != pds.id)
    setClickCard(newCard)
    toast.success('Successfully delete this product');
  }


  return (
    <>
      <Header
        clickCart={clickCart}
        showCartProduct={showCartProduct}
      >
      </Header>
      <Main
        cartClickHandle={cartClickHandle}
        clickCart={clickCart}
        productCard={productCard}
        removeFromCart={removeFromCart}
      ></Main>
      <ToastContainer />
    </>
  )
}

export default App
