
import { useState } from 'react'
import './App.css'
import Main from './components/body/main'
import { Header } from './components/header/header'
Header
function App() {
  const [clickCart, setClickCard] = useState([])


  const cartClickHandle = (product) => {
    const isExist = clickCart.find(pd=>pd.id == product.id)
    console.log(isExist)
    if(isExist){
      alert('pagla')
    }
    else{
      setClickCard([...clickCart,product])    
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
    </>
  )
}

export default App
