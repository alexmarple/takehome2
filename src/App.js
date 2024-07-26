import './App.css';
import {
  createTheme,
  ScopedCssBaseline,
  setRef,
  ThemeProvider,
} from '@mui/material';
import CustomRoutes from './CustomRoutes';
import { useState, useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#484848',
    },
    piction: {
      background: '#eaeaea',
      text: '#6c6c72',
      white: '#fff',
    },
    grayTones: {
      main: '#636363',
      light: '#eeeeee',
      lighter: '#f5f5f5',
      ultralight: '#fafafa',
    },
  },
  spacing: 8,
});

function App() {
  const [patients, setPatients] = useState([]);
  async function getPatients() {
    try {
      const response = await fetch('http://localhost:3001/patients');
      const resData = await response.json();
      setPatients(resData);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  }
  useEffect(() => {
    getPatients();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <CustomRoutes cases={patients} />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
