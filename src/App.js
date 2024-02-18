import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HeaderComp from './Components/HeaderComp/HeaderComp'
import HomePage from './Pages/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
import Cart from './Pages/CartPage/Cart'
import ProductFromApiCart from './Components/ProductFromApiCart/ProductFromApiCart'
import ContextProvider from './ContextAPi/ContextProvider'
import ProductInCart from './Pages/ProductInCart/ProductInCart'
import AllElectronicsPage from './Pages/AllElectronicsPage/AllElectronicsPage'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
      <HeaderComp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={`/cart/:id`} element={<Cart />} />
          <Route path={`/product/:id`} element={<ProductFromApiCart />} />
          <Route path="/productInCart" element={<ProductInCart />} />
          <Route path="/allelectronicsPage" element={<AllElectronicsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
