import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    name: 'TODO',
    descEn: 'TODO',
    descPt: 'Add‑on do Google Sheets para jogos de adivinhação em tempo real.',
    logo: '/feedgame.svg',
  },
  {
    name: 'TODO',
    descEn: 'TODO',
    descPt: 'Add‑on do Google Sheets para jogos de adivinhação em tempo real.',
    logo: '/feedgame.svg',
  },
];

export default function Projects() {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language === 'pt';

  return (
    <Box id="projects" sx={{ bgcolor: '#1e1e1e', color: '#fff', py: 12 }}>
      <Typography variant="h4" textAlign="center">
        {t('projectsTitle')}
      </Typography>
      <Typography
        variant="caption"
        display="block"
        textAlign="center"
        sx={{ color: 'primary.main', mt: 0.5, mb: 4, letterSpacing: 2 }}
      >
        {t('exploreNow')}
      </Typography>

      <Container maxWidth="md">
        <Grid container spacing={4}>
          {projects.map((p) => (
            <Grid item xs={12} sm={6} key={p.name}>
              <Card
                sx={{
                  bgcolor: '#272727',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  width={56}
                  height={56}
                  style={{ marginRight: 16 }}
                />

                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6" gutterBottom>
                    {p.name}
                  </Typography>
                  <Typography variant="body2">
                    {isPt ? p.descPt : p.descEn}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
