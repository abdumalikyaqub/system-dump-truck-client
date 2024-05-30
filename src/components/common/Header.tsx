import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Система мониторинга и диагностики
          </Typography>
          <Button
            variant="text"
            color="inherit"
            component={Link}
            to="/home"
          >
            Главная
          </Button>
          <Button color="inherit" component={Link} to="/planning">
            Автопарк
          </Button>
          <Button color="inherit" component={Link} to="/diagnostics">
            Мониторинг
          </Button>
          <Button color="inherit" component={Link} to="/statistics">
          Диагностика
          </Button>
        </Toolbar>
    </AppBar>
  );
};

export default Header;
