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

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<Aboutus />} />
    <Route path="/*" element={<Error />} />


  </Routes>
</BrowserRouter>
)
