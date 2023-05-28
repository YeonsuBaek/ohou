import React from 'react';
import NewProductForm from '../components/NewProduct/NewProductForm';
import NewProductHeader from '../Layouts/NewProductHeader';
import useAdminStore from '../stores/useAdminStore';
import { useNavigate } from 'react-router-dom';

const NewProductPage = () => {
  const { adminID } = useAdminStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!adminID) {
      navigate('/');
    }
  });

  return (
    <>
      <NewProductHeader />
      <NewProductForm />
    </>
  );
};

export default NewProductPage;
