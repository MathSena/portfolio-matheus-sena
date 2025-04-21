import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#121212',
        color: 'grey.600',
        py: 3,
        textAlign: 'center',
        mt: 6,
      }}
    >
      <Typography variant="caption">
        Built with Vite &amp; MUI. Deployed with Vercel.
        <br />
        © {new Date().getFullYear()} Matheus Sena
      </Typography>
    </Box>
  );
}
