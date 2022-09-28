import Box from '@mui/material/Box';
import './App.css';

function App() {
  return (
    <Box sx={{
      display: 'flex',
      textAlign: 'center',
      width: 300,
      height: 300,
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      }
    }} >
      Here is some placeholder information
    </Box>
  );
}

export default App;
