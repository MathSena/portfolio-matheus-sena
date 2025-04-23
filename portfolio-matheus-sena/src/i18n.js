import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      /* ─────────────────────────────── ENGLISH ───────────────────────────── */
      en: {
        translation: {
          nav: {
            about: 'ABOUT ME',
            experience: 'EXPERIENCE',
            projects: 'PROJECTS',
            contact: 'CONTACT'
          },

          hero: {
            name: 'Matheus Sena',
            headline: 'May the code',
            headline2: 'be with you.',
            bio1: 'AWS-certified Software Engineer with 8+ years in Java, Spring Boot and Microservices.',
            bio2: 'Cloud-driven, knowledge-sharing enthusiast, always chasing innovation and scalable design.',
            button: 'LET’S TALK'
          },

          aboutTitle: 'ABOUT ME',
          aboutText:
            'I am a Software Developer with 8+ years of experience in Java, Spring Boot and Microservices.',
          exploreNow: 'EXPLORE NOW',
          experienceTitle: 'EXPERIENCE',
          projectsTitle: 'PROJECTS',
          letsConnect: "Let's Connect",
          reachOut: 'Feel free to reach out via social media.'
        }
      },

      /* ────────────────────────────── PORTUGUÊS ──────────────────────────── */
      pt: {
        translation: {
          nav: {
            about: 'SOBRE MIM',
            experience: 'EXPERIÊNCIA',
            projects: 'PROJETOS',
            contact: 'CONTATO'
          },

          hero: {
            name: 'Matheus Sena',
            headline: 'Que o código',
            headline2: 'esteja com você.',
            bio1: 'Engenheiro de Software certificado AWS com mais de 8 anos em Java, Spring Boot e Microsserviços.',
            bio2: 'Apaixonado por cloud e compartilhamento de conhecimento, sempre em busca de inovação e soluções escaláveis.',
            button: 'VAMOS CONVERSAR'
          },

          aboutTitle: 'SOBRE MIM',
          aboutText:
            'Sou desenvolvedor de software com mais de 8 anos de experiência em Java, Spring Boot e Microsserviços.',
          exploreNow: 'CONHEÇA',
          experienceTitle: 'EXPERIÊNCIA',
          projectsTitle: 'PROJETOS',
          letsConnect: 'Vamos nos conectar',
          reachOut: 'Fique à vontade para entrar em contato pelas redes.'
        }
      }
    },

    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n
