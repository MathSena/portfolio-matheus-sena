import React from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box sx={{ pt: { xs: 22, sm: 28 }, textAlign: 'center', color: '#fff' }}>
      <Avatar
        src="/avatar.png"          /* coloque sua imagem em public/ */
        sx={{ width: 128, height: 128, mx: 'auto', mb: 3 }}
      />

      <Typography variant="h1">Matheus Sena!</Typography>

      <Typography variant="h6" sx={{ mt: 1, maxWidth: 600, mx: 'auto' }}>
        {t('hero.headline')} <br />
        <span style={{ color: '#5e7bff' }}>{t('hero.headline2')}</span>
      </Typography>

      <Button
        href="#contact"
        variant="outlined"
        size="large"
        sx={{
          mt: 4,
          borderRadius: 5,
          px: 4,
          color: '#fff',
          borderColor: '#fff',
          '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
        }}
      >
        {t('hero.button')}
      </Button>
    </Box>
  );
}
