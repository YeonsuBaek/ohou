import React from 'react';
import NewProductForm from '../components/NewProduct/NewProductForm';
import NewProductHeader from '../Layouts/NewProductHeader';
import useAdminStore from '../stores/useAdminStore';
import useProductStore from '../stores/useProductStore';
import { useNavigate } from 'react-router-dom';

const NewProductPage = () => {
  const { adminID } = useAdminStore();
  const { name, price, image, setName, setPrice, setImage, setProducts } =
    useProductStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!adminID) {
      navigate('/');
    }
  });

  const handleAddProduct = (e) => {
    e.preventDefault();

    setProducts({
      name: name,
      price: price,
      image: image,
    });
    navigate('/');
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <>
      <NewProductHeader handleAddProduct={handleAddProduct} />
      <NewProductForm />
    </>
  );
};

export default NewProductPage;
