import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../src/scss/style.scss"
import { BrowserRouter, Routes, Route } from 'react-router'
import Aboutus from './pages/Aboutus.jsx'
import Error from './pages/Error.jsx'
import Reacthook from './pages/Reacthook.jsx'
import Product from './pages/Product.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<Aboutus />} />
    <Route path="/*" element={<Error />} />
    <Route path="/hook" element={<Reacthook/>} />
    <Route path="/produt" element={<Product/>} />
    <Route path="products/:id" element={<ProductDetails/>} />
  </Routes>
</BrowserRouter>
)
