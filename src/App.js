import './App.css';
import SidebarModal from './Hooks/SidebarModal';
import Header from './Layouts/Header';
import StorePage from './pages/StorePage';
import useModalStore from './stores/useModalStore';
import { Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import useProductStore from './stores/useProductStore';
import NewProductPage from './pages/NewProductPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

function App() {
  const { modal, setModal } = useModalStore();
  const { products } = useProductStore();

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <StorePage />
              {modal && <SidebarModal onClose={() => setModal(false)} />}
            </>
          }
        />
        <Route
          path='/product/:id'
          element={<ProductDetailPage products={products} />}
        />
        <Route path='/new-product' element={<NewProductPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cart/:id' element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
