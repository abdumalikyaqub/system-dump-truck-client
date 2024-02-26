import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Система мониторинга и управление
          </Typography>
          <Button
            variant="text"
            color="inherit"
            component={Link}
            to="/"
          >
            Главная
          </Button>
          <Button color="inherit" component={Link} to="/camera">
            Камера
          </Button>
          <Button color="inherit" component={Link} to="/radar-page">
            Радар
          </Button>
          <Button color="inherit" component={Link} to="/diagnostics">
            Диагностика
          </Button>
          <Button color="inherit" component={Link} to="/remote-control">
            Дистанционное управление
          </Button>
          <Button color="inherit" component={Link} to="/statistics">
            Статистика
          </Button>
          <Button color="inherit" component={Link} to="/map">
            Карта
          </Button>
          <Button color="inherit" component={Link} to="/planning">
            Автопарк
          </Button>
        </Toolbar>
    </AppBar>
  );
};

export default Header;
