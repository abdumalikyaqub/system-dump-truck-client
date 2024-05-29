import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getDumpTrucks, deleteDumpTruck, DumpTruck } from '../../api/dumpTruckApi';
import { useNavigate } from 'react-router-dom';

const DumpTruckList: React.FC = () => {
    const [dumpTrucks, setDumpTrucks] = useState<DumpTruck[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadDumpTrucks();
    }, []);

    const loadDumpTrucks = async () => {
        const data = await getDumpTrucks();
        setDumpTrucks(data);
    };

    const handleDelete = async (id: number) => {
        await deleteDumpTruck(id);
        loadDumpTrucks();
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Автопарк</Typography>
            <Button sx={{ mb: 3 }} variant="contained" color="primary" onClick={() => navigate('/create')}>Добавить самосвал</Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Модель</TableCell>
                            <TableCell>Год выпуска</TableCell>
                            <TableCell>Операции</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dumpTrucks.map((truck) => (
                            <TableRow key={truck.id}>
                                <TableCell>{truck.id}</TableCell>
                                <TableCell>{truck.model}</TableCell>
                                <TableCell>{truck.yearIssue}</TableCell>
                                <TableCell>
                                    <Button color="info" onClick={() => navigate(`/edit/${truck.id}`)}>Редактировать</Button>
                                    <Button color="warning" onClick={() => handleDelete(truck.id)}>Удалить</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default DumpTruckList;
