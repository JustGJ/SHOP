import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import About from './components/about';
import Catalog from './components/catalog';
import ProductDetails from './components/catalog/ProductDetails';
import Contact from './components/contact';
import Home from './components/home';
import Header from './components/layout/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
