import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  // Функция для определения, нужно ли показывать Header
  const shouldShowHeader = () => {
    // Проверяем, находится ли текущий путь в массиве путей, на которых нужно скрыть Header
    return !['/', '/register'].includes(location.pathname);
  };

  return (
    <>
      {shouldShowHeader() && <Header />}
      <Container sx={{mt: '50px', bgcolor: '', borderRadius: "15px"}}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
