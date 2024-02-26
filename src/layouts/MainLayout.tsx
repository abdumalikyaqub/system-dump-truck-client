import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Container } from '@mui/material';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container sx={{mt: '50px', bgcolor: '', borderRadius: "15px"}}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
