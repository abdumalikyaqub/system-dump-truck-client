import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7222/api', // Замените на ваш URL API
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getDumpTrucks = async () => {
    const response = await api.get('/dumptrucks');
    return response.data;
};

export const getDumpTruck = async (id: number) => {
    const response = await api.get(`/dumptrucks/${id}`);
    return response.data;
};

export const createDumpTruck = async (dumpTruck: Omit<DumpTruck, 'id'>) => {
    const response = await api.post('/dumptrucks', dumpTruck);
    return response.data;
};

export const updateDumpTruck = async (id: number, dumpTruck: DumpTruck) => {
    const response = await api.put(`/dumptrucks/${id}`, dumpTruck);
    return response.data;
};

export const deleteDumpTruck = async (id: number) => {
    const response = await api.delete(`/dumptrucks/${id}`);
    return response.data;
};

export interface DumpTruck {
    id: number;
    model?: string;
    yearIssue?: string; // Преобразуем DateOnly в строку
    gosNumber?: string;
    kpp?: string;
    loadCapacity?: number;
    bodyVolume?: number;
    toir?: string;
    maxSpeed?: number;
    fullMass?: number;
    mileage?: number;
    maxFuel?: number;
    engineModel?: string;
    tireModel?: string;
}
