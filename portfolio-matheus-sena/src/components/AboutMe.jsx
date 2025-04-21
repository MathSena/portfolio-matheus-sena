import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <Box id="about" sx={{ py: 12 }}>
      <Typography variant="h4" textAlign="center">
        {t('aboutTitle')}
      </Typography>
      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        sx={{ color: 'primary.main', mt: 0.5, mb: 4, letterSpacing: 2 }}
      >
        {t('exploreNow')}
      </Typography>

      <Container maxWidth="sm">
        <Typography variant="body1" textAlign="center">
          {t('aboutText')}
        </Typography>
      </Container>
    </Box>
  );
}
