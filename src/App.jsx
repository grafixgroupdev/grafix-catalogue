import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import InstallationPage from './pages/InstallationPage'
import SignagePage from './pages/SignagePage'
import GraphicSystemsPage from './pages/GraphicSystemsPage'
import BlindSystemsPage from './pages/BlindSystemsPage'
import LettersLogosPage from './pages/LettersLogosPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/signage" element={<SignagePage />} />
        <Route path="/products/graphic-systems" element={<GraphicSystemsPage />} />
        <Route path="/products/blind-systems" element={<BlindSystemsPage />} />
        <Route path="/products/letters-logos" element={<LettersLogosPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/installation" element={<InstallationPage />} />
      </Routes>
    </Router>
  )
}

export default App
