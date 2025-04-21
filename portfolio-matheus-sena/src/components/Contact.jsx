import React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Box id="contact" sx={{ py: 12 }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          <span style={{ color: '#bbb' }}>{t('letsConnect').split(' ')[0]} </span>
          <span style={{ color: '#5e7bff' }}>
            {t('letsConnect').split(' ').slice(1).join(' ')}
          </span>
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          {t('reachOut')}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            href="mailto:mathsena07@hotmail.com"
            sx={{ color: '#fff' }}
          >
            <Email />
          </IconButton>
          <IconButton
            href="https://github.com/mathsena"
            target="_blank"
            sx={{ color: '#fff' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/mathsena"
            target="_blank"
            sx={{ color: '#fff' }}
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
