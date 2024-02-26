import { Box, LinearProgress, Typography } from '@mui/material';

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
        <Typography variant="h4" gutterBottom>
          Кузбасский государственный технический университет имени Т.Ф. Горбачев
        </Typography>
        <Typography variant="h5" gutterBottom>
          Научный центр «Цифровые технологии»
        </Typography>
        {/* <CircularProgress color="inherit" /> */}
        <LinearProgress color="inherit" />
        {/* <Images/> */}
      </Box>
    </div>
  );
}

export default HomePage