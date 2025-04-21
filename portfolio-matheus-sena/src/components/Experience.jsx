import React from 'react';
import { Box, Typography, Container, Stack, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const jobs = [
  {
    company: 'KPMG Portugal',
    role:    'Java Software Developer',
    period:  'Jun 2023 – Nov 2024',
    place:   'Lisboa, PT',
    descEn:  'Java 17, Spring Boot, Kafka, Angular, microservices.',
    descPt:  'Java 17, Spring Boot, Kafka, Angular, microsserviços.',
    tech:    ['Java', 'Spring', 'Kafka', 'Angular', 'AWS'],
  },
  {
    company: 'C&A Brasil',
    role:    'IT Systems Analyst',
    period:  'Mar 2019 – Jun 2023',
    place:   'Barueri, BR',
    descEn:  'Logistics integration and process automation.',
    descPt:  'Integração logística e automação de processos.',
    tech:    ['Java', 'DB2', 'Docker', 'Jira', 'Scrum'],
  },
];

export default function Experience() {
  const { t, i18n } = useTranslation();
  const isPt = i18n.language === 'pt';

  return (
    <Box id="experience" sx={{ py: 12 }}>
      <Typography variant="h4" textAlign="center">
        {t('experienceTitle')}
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
        <Stack spacing={6}>
          {jobs.map((j) => (
            <Box key={j.company}>
              <Typography variant="h6" fontWeight="bold">
                {j.company}  |  {j.role}
              </Typography>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                {j.period} • {j.place}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {isPt ? j.descPt : j.descEn}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap">
                {j.tech.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{ bgcolor: '#222', color: '#fff', mb: 0.5 }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
