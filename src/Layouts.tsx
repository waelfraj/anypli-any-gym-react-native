import React from 'react';
import CustomModal from './components/CustomModal/CustomModal';
import Routes from './navigations/routes';
import { useAppSelector } from './hooks/hooks';

const Layouts = () => {
  const popup = useAppSelector((state) => state.popup);

  return (
    <>
      <CustomModal {...popup} />
      <Routes />
    </>
  );
};

export default Layouts;
