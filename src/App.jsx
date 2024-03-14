
import { useState } from 'react'
import './App.css'
import Main from './components/body/main'
import { Header } from './components/header/header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [clickCart, setClickCard] = useState([])

  const warning = () => {
    toast.warn('You Already Added this product',{
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
    console.log(isExist)
    if (isExist) {
      warning();
      return;
    }
    else {
      toast.success('🦄 Wow so easy!', {
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
  return (
    <>
      <Header
        clickCart={clickCart}
      >
      </Header>
      <Main
        cartClickHandle={cartClickHandle}
        clickCart={clickCart}
      ></Main>
      <ToastContainer />
    </>
  )
}

export default App
