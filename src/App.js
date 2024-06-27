// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Header from './components/Header';
// import HomePage from './pages/HomePage';
// import CategoryPage from './pages/CategoryPage';
// import BlogDetail from './pages/BlogDetail';
// import BlogEditor from './pages/BlogEditor';

// const App = () => {
//   const themeMode = useSelector((state) => state.theme.theme);
//   const theme = createTheme({
//     palette: {
//       mode: themeMode,
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//   <Routes>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/about" element={<AboutPage />} />
//     <Route path="/contact" element={<ContactPage />} />
//     <Route path="/blog/:id" element={<BlogPost />} />
//     <Route path="/editor" element={<BlogEditor />} />
//   </Routes>
// </Router>
//     </ThemeProvider>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './pages/BlogPost';
import BlogEditor from './pages/BlogEditor';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  return (
     <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/editor" element={<BlogEditor />} />
        </Routes>
      </Router>
    </ThemeProvider>
     </Provider>
  );
}

export default App;