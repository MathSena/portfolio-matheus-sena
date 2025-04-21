import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            about: 'ABOUT ME',
            experience: 'EXPERIENCE',
            projects: 'PROJECTS',
            contact: 'CONTACT'
          },
          hero: {
            headline: 'TODO',
            headline2: 'TODO',
            button: 'Contact Me'
          },
          aboutTitle: 'ABOUT ME',
          aboutText:
            'I am a Software Developer with 8+ years of experience in Java, Spring Boot and Microservices.',
          exploreNow: 'EXPLORE NOW',
          experienceTitle: 'EXPERIENCE',
          projectsTitle: 'PROJECTS',
          letsConnect: "Let's Connect",
          reachOut: 'Feel free to reach out via social media.'
        }
      },
      pt: {
        translation: {
          nav: {
            about: 'SOBRE MIM',
            experience: 'EXPERIÊNCIA',
            projects: 'PROJETOS',
            contact: 'CONTATO'
          },
          hero: {
            headline: 'Transformando Ideias em Código',
            headline2: 'e Deixando a Web Mais Irada 🚀',
            button: 'Fale Comigo'
          },
          aboutTitle: 'SOBRE MIM',
          aboutText:
            'Sou desenvolvedor de software com mais de 8 anos de experiência em Java, Spring Boot e Microsserviços.',
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
