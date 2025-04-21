import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000', // preto total
      paper: '#111' // cinza‑escuro
    },
    primary: {
      main: '#5e7bff' // roxo‑azulado usado nos links
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
    h1: { fontWeight: 700, fontSize: '3.2rem' },
    h4: { letterSpacing: 1.5 }
  }
})
export default theme
