import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, User } from '../api/userApi';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user: User = { name: '', email, password, roleId: 0 }; // roleId не нужен для логина
        try {
            await loginUser(user);
            navigate('/home'); // После успешного входа перенаправляем на главную страницу
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="80vh">
                <Typography variant="h4" gutterBottom>Авторизация</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Button sx={{mt: 2}} type="submit" variant="contained" color="primary" fullWidth>
                        Войти
                    </Button>
                </form>
                <Button color="primary" sx={{mt: 4}} component={Link} to="/register">Создать аккаунт</Button>
            </Box>
        </Container>
    );
};

export default Login;
