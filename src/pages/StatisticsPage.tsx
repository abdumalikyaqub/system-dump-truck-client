import React, { useEffect, useState } from 'react';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router';
import { DumpTruck, getDumpTrucks } from '../api/dumpTruckApi';

const StatisticsPage: React.FC = () => {
  const [dumpTrucks, setDumpTrucks] = useState<DumpTruck[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
      loadDumpTrucks();
  }, []);

  const loadDumpTrucks = async () => {
      const data = await getDumpTrucks();
      setDumpTrucks(data);
  };
  
  return (
    <Container>
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
                  <Button variant="contained" color="success" onClick={() => navigate('/engine-predict')}>Отказ двигателя</Button>
                  <Button 
                    variant="contained" 
                    color="success" 
                    sx = {{ml:3}}
                    onClick={() => navigate(`/edit/${truck.id}`)}>
                      Износ шина
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default StatisticsPage;
