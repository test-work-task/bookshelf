import { useState, useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material'
import { ThemeContext } from '../contexts/ThemeContext';
import { darckTheme } from '../themes/darckTheme';
import { whiteTheme } from '../themes/whiteTheme';
import { getBooks } from '../services/books.services';
import { IBook } from '../interfaces/book.interface';
import Spreadsheet from "./Spreadsheet";
import Header from './Header';

export default function App() {
  const [mode, setMode] = useState<'darck' | 'light'>('light');
  const [currentTheme, setCurrentTheme] = useState(whiteTheme)
  const [booksData, setBooksData] = useState<IBook[]>()
  useEffect(() => {
    const theme = localStorage.getItem('theme');
      if(theme === 'darck') {
        setMode('darck');
        setCurrentTheme(darckTheme)
      }
      if(theme === 'light') {
        setMode('light');
        setCurrentTheme(whiteTheme)
      } 
    const fetchData = async () => {
      const data = await getBooks()
      setBooksData(data)
    }
    fetchData()
  }, [])

  const toggleColorMode = () => {
    if(mode === 'darck') {
      setMode('light');
      setCurrentTheme(whiteTheme)
      localStorage.setItem('theme', 'light');
    } else {
      setMode('darck');
      setCurrentTheme(darckTheme)
      localStorage.setItem('theme', 'darck');
    } 
    
  }
  return (
    <ThemeContext.Provider value={mode}>
    <ThemeProvider theme={currentTheme}>
      <Box sx={{
        bgcolor: currentTheme.palette.primary.main,
        color: currentTheme.palette.primary.contrastText
      }}>
        <Header {...{toggleColorMode}} />
        {booksData && <Spreadsheet booksData={booksData} />}
      </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
