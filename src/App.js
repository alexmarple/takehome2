import './App.css';
import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import CustomRoutes from './CustomRoutes';
import usePatients from './hooks/usePatients';

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
  const { patients } = usePatients();
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <CustomRoutes cases={patients} />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
