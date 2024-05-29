import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, User } from '../api/userApi';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const roleId = 1;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user: User = { name, email, password, roleId };
        try {
            await registerUser(user);
            navigate('/login'); // После успешной регистрации перенаправляем на страницу логина
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="80vh">
                <Typography variant="h4" gutterBottom>Регистрация</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                        required
                    />
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
                    {/* <TextField
                        label="Роль"
                        type="number"
                        value={roleId}
                        onChange={(e) => setRoleId(parseInt(e.target.value))}
                        fullWidth
                        margin="normal"
                        required
                    /> */}
                    <Button sx={{mt: 2}} type="submit" variant="contained" color="primary" fullWidth>
                       Зарегистрироваться
                    </Button>
                </form>
                <Button color="primary" sx={{mt: 4}} component={Link} to="/">Войти</Button>
            </Box>
        </Container>
    );
};

export default Register;
