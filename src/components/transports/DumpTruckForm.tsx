import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import { createDumpTruck, getDumpTruck, updateDumpTruck, DumpTruck } from '../../api/dumpTruckApi';

const DumpTruckForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [dumpTruck, setDumpTruck] = useState<Omit<DumpTruck, 'id'>>({
        model: '',
        yearIssue: '',
        gosNumber: '',
        kpp: '',
        loadCapacity: 0,
        bodyVolume: 0,
        toir: '',
        maxSpeed: 0,
        fullMass: 0,
        mileage: 0,
        maxFuel: 0,
        engineModel: '',
        tireModel: '',
    });

    useEffect(() => {
        if (id) {
            loadDumpTruck(parseInt(id));
        }
    }, [id]);

    const loadDumpTruck = async (id: number) => {
        const data = await getDumpTruck(id);
        setDumpTruck(data);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDumpTruck({ ...dumpTruck, [name]: value });
    };

    const handleSubmit = async () => {
        if (id) {
            await updateDumpTruck(parseInt(id), { ...dumpTruck, id: parseInt(id) });
        } else {
            await createDumpTruck(dumpTruck);
        }
        navigate('/planning');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>{id ? 'Редактировать самосвал' : 'Добавить самосвал'}</Typography>
            <TextField
                name="model"
                label="Модель"
                value={dumpTruck.model}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="yearIssue"
                label="Год выпуска"
                type="date"
                value={dumpTruck.yearIssue}
                onChange={handleChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                name="gosNumber"
                label="Гос. номер"
                value={dumpTruck.gosNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="kpp"
                label="КПП"
                value={dumpTruck.kpp}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="loadCapacity"
                label="Грузоподъемность"
                type="number"
                value={dumpTruck.loadCapacity}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="bodyVolume"
                label="Объем кузова"
                type="number"
                value={dumpTruck.bodyVolume}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="toir"
                label="ТОиР"
                value={dumpTruck.toir}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="maxSpeed"
                label="Макс. скорость"
                type="number"
                value={dumpTruck.maxSpeed}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="fullMass"
                label="Полная масса"
                type="number"
                value={dumpTruck.fullMass}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="mileage"
                label="Пробег"
                type="number"
                value={dumpTruck.mileage}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="maxFuel"
                label="Макс. топливо"
                type="number"
                value={dumpTruck.maxFuel}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="engineModel"
                label="Модель двигателя"
                value={dumpTruck.engineModel}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                name="tireModel"
                label="Модель шины"
                value={dumpTruck.tireModel}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                {id ? 'Обновить' : 'Создать'}
            </Button>
        </Container>
    );
};

export default DumpTruckForm;
