import React from 'react';
import { AppBar, Toolbar, Button, Stack, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();

  const navLinks = [
    { id: 'about',      label: t('nav.about') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects',   label: t('nav.projects') },
    { id: 'contact',    label: t('nav.contact') },
  ];

  const changeLang = (lng) => i18n.changeLanguage(lng);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: 'transparent', backdropFilter: 'blur(4px)', p: 1 }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Stack direction="row" spacing={2} alignItems="center">
          {navLinks.map((l) => (
            <Button
              key={l.id}
              href={`#${l.id}`}
              sx={{
                color: '#fff',
                fontSize: 12,
                fontWeight: 500,
                '&:hover': { color: 'primary.main' },
              }}
            >
              {l.label}
            </Button>
          ))}

          {/* Botões EN / PT */}
          <IconButton
            size="small"
            onClick={() => changeLang('en')}
            sx={{ color: i18n.language === 'en' ? 'primary.main' : '#fff', p: 0.5 }}
          >
            EN
          </IconButton>
          <IconButton
            size="small"
            onClick={() => changeLang('pt')}
            sx={{ color: i18n.language === 'pt' ? 'primary.main' : '#fff', p: 0.5 }}
          >
            PT
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
