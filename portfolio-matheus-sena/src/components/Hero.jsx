import React from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        pt: { xs: 20, md: 26 },
        pb: 8,
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* FOTO / MEMOJI */}
      <Avatar
        src="/avatar.jpeg"          /* coloque sua imagem em public/ */
        alt={t('hero.name')}
        sx={{
          width: { xs: 120, md: 140 },
          height: { xs: 120, md: 140 },
          mx: 'auto',
          mb: 4,
          boxShadow: 3,
        }}
      />

      {/* NOME */}
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '2.8rem', md: '4rem' },
          fontWeight: 800,
          letterSpacing: -1,
          mb: 2,
          fontFamily: 'SF Pro Display, Poppins, sans-serif',
        }}
      >
        {t('hero.name')}
      </Typography>

      {/* HEADLINE COM GRADIENTE COLORIDO */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          fontSize: { xs: '1.1rem', md: '1.5rem' },
          mb: 6,
          background: `linear-gradient(90deg,
            #ff5757 0%,
            #ffb547 20%,
            #ffe94a 40%,
            #3cff8f 60%,
            #5a8bff 80%,
            #c258ff 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {t('hero.headline')} &nbsp;{t('hero.headline2')}
      </Typography>

      {/* BIO EM DUAS LINHAS */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 720,
          mx: 'auto',
          lineHeight: 1.8,
          opacity: 0.9,
          fontSize: { xs: '0.95rem', md: '1.05rem' },
        }}
      >
        {t('hero.bio1')}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 680,
          mx: 'auto',
          lineHeight: 1.8,
          opacity: 0.9,
          fontSize: { xs: '0.95rem', md: '1.05rem' },
          mb: 6,
        }}
      >
        {t('hero.bio2')}
      </Typography>

      {/* CALL-TO-ACTION */}
      <Button
        href="#contact"
        size="large"
        sx={{
          px: 5,
          py: 1.5,
          borderRadius: 999,
          fontWeight: 600,
          bgcolor: 'rgba(255,255,255,0.05)',
          color: '#fff',
          backdropFilter: 'blur(4px)',
          transition: 'all .3s',
          '&:hover': {
            bgcolor: '#fff',
            color: '#000',
            boxShadow: 4,
          },
        }}
      >
        {t('hero.button')}
      </Button>
    </Box>
  );
}
