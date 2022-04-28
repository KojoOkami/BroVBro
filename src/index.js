import { createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard/Dashboard';
import Display from './pages/Display';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: "#a2f2ef",
    secondary: "#d19fc3",
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Display />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
