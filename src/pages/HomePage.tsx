import { Box, LinearProgress, Typography } from '@mui/material';
import mainImage from '../../public/kamaz.jpg'; // Импорт изображения


const HomePage = () => {
  return (
    <div>
      <Box
        sx={{
          color: "#000",
          width: "100%",
          textAlign: "center",
          mt: "60px",
          p: '20px',
          // background: "#226080",
          // borderRadius: "5px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Кузбасский государственный технический университет имени Т.Ф. Горбачев
        </Typography>
        <Typography variant="h5" gutterBottom>
          Научный центр «Цифровые технологии»
        </Typography>
        <LinearProgress color="inherit" sx={{mb: 3}} />
        <img src={mainImage} alt="Main" style={{ maxWidth: '60%', height: 'auto' }} />
      </Box>
    </div>
  );
}

export default HomePage