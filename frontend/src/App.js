import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner = {men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner = {women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid" />} />

          {/* Corrected placement of closing tag for the nested Route */}
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          {/* Corrected placement of closing tag for the Route */}
          <Route path="/cart" element={<Cart />} />
          {/* Corrected placement of closing tag for the Route */}
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
