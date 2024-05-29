import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack } from '@mui/material';
import { getDumpTrucks, deleteDumpTruck, DumpTruck } from '../../api/dumpTruckApi';
import { useNavigate } from 'react-router-dom';
import { exportToJson } from '../../utils/exportUtils';
import { importFromJson } from '../../utils/importUtils';

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

    // const handleExportCsv = () => {
    //     exportToCsv(); // Функция для экспорта в CSV
    //   };
    
      const handleExportJson = () => {
        exportToJson(); // Функция для экспорта в JSON
      };
    
    //   const handleImportCsv = () => {
    //     importFromCsv(); // Функция для импорта из CSV
    //   };
    
    const handleImportJson = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          await importFromJson(file);
          e.target.value = ''; // Очистить поле ввода файла после загрузки
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Автопарк</Typography>
            <Stack direction="row" justifyContent="flex-end" alignItems="flex-end">
                <Button sx={{ mr: 3}} variant="contained" color="secondary" onClick={handleExportJson}>Экспорт в JSON</Button>
                <Typography sx={{ mr: 3}} variant="h6">Импорт из JSON:</Typography>
                <input type="file" accept=".json" onChange={handleImportJson} />
                {/* <Button sx={{ ml: 3 }} variant="contained" color="primary" onClick={handleImportJson}>Import from JSON</Button> */}
            </Stack>
            <Button sx={{ mb: 3, mt: 4 }} variant="contained" color="primary" onClick={() => navigate('/create')}>Добавить самосвал</Button>
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
