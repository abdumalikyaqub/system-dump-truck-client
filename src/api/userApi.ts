import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7222/api', // Замените на ваш URL API
    headers: {
        'Content-Type': 'application/json',
    },
});

export const loginUser = async (user: User) => {
    const response = await api.post('/users/login', user);
    return response.data;
};

export const registerUser = async (user: User) => {
    const response = await api.post('/users/register', user);
    return response.data;
};

export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    roleId: number;
}
