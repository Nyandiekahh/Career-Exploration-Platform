import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function to merge Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Languages object (matching the structure expected by Navigation and other components)
export const languages = {
  en: {
    home: 'Home',
    howItWorks: 'How It Works',
    exploreCareers: 'Explore Careers',
    blog: 'Blog',
    faq: 'FAQ',
    login: 'Log In',
    signUp: 'Sign Up',
    bookSession: 'Book Session',
    hero: {
      title: 'Transform Your Career Journey',
      subtitle: 'Get personalized career guidance from AI-powered coaches and industry experts',
      cta: 'Start Your Journey',
      secondaryCta: 'Learn More',
      watchDemo: 'Watch Demo'
    },
    experts: {
      title: 'Meet Our Expert Coaches',
      subtitle: 'Connect with industry leaders who have walked the path you want to take'
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Discover how CareerCoach transforms your professional journey in three simple steps',
      step1: {
        title: 'Assessment',
        description: 'Take our comprehensive career assessment to understand your strengths and interests.'
      },
      step2: {
        title: 'Matching',
        description: 'Get matched with personalized career paths and opportunities that fit your profile.'
      },
      step3: {
        title: 'Growth',
        description: 'Follow your personalized roadmap with expert guidance and continuous support.'
      }
    },
    exploreCareers: {
      title: 'Explore Careers',
      subtitle: 'Discover exciting career opportunities across various industries and find the perfect match for your skills and interests',
      categories: [
        {
          name: 'Technology',
          description: 'Explore opportunities in technology and see if it\'s the right fit for you.'
        },
        {
          name: 'Healthcare',
          description: 'Explore opportunities in healthcare and see if it\'s the right fit for you.'
        },
        {
          name: 'Finance',
          description: 'Explore opportunities in finance and see if it\'s the right fit for you.'
        },
        {
          name: 'Marketing',
          description: 'Explore opportunities in marketing and see if it\'s the right fit for you.'
        },
        {
          name: 'Education',
          description: 'Explore opportunities in education and see if it\'s the right fit for you.'
        },
        {
          name: 'Design',
          description: 'Explore opportunities in design and see if it\'s the right fit for you.'
        }
      ]
    },
    blog: {
      title: 'Career Blog',
      subtitle: 'Latest insights, tips, and trends to help you navigate your career journey',
      readMore: 'Read More',
      categories: {
        all: 'All',
        careerTips: 'Career Tips',
        industryNews: 'Industry News',
        interviews: 'Interviews',
        resources: 'Resources'
      },
      posts: [
        {
          title: 'Career Development Tips for 2025',
          excerpt: 'Discover the latest strategies for advancing your career in today\'s competitive job market...',
          date: 'Published 3 days ago'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about CareerCoach and our services',
      categories: {
        general: 'General',
        booking: 'Booking',
        payment: 'Payment',
        technical: 'Technical'
      },
      questions: [
        {
          question: 'How does CareerCoach work?',
          answer: 'CareerCoach uses advanced algorithms and expert insights to match you with personalized career paths based on your skills, interests, and goals.'
        },
        {
          question: 'Is there a free trial?',
          answer: 'Yes! We offer a 30-day free trial with full access to all features. No credit card required to start.'
        },
        {
          question: 'Can I cancel anytime?',
          answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees or penalties.'
        },
        {
          question: 'What industries do you cover?',
          answer: 'We cover over 50 industries including technology, healthcare, finance, marketing, education, and many more.'
        }
      ]
    },
    features: {
      title: 'Why Choose CareerCoach?',
      subtitle: 'Everything you need to accelerate your career growth',
      expert: {
        title: 'Expert Coaching',
        description: 'Get personalized guidance from industry professionals and career specialists'
      },
      flexible: {
        title: 'Flexible Scheduling',
        description: 'Book sessions that fit your schedule with 24/7 availability'
      },
      personalized: {
        title: 'Personalized Approach',
        description: 'Comprehensive evaluation of your strengths and areas for growth'
      },
      items: [
        {
          title: 'AI-Powered Matching',
          description: 'Our advanced algorithms match you with the perfect career opportunities'
        },
        {
          title: 'Expert Guidance',
          description: 'Get advice from industry professionals and career specialists'
        },
        {
          title: 'Skill Assessment',
          description: 'Comprehensive evaluation of your strengths and areas for growth'
        },
        {
          title: '24/7 Support',
          description: 'Round-the-clock assistance whenever you need career guidance'
        }
      ]
    }
  },
  pt: {
    home: 'Início',
    howItWorks: 'Como Funciona',
    exploreCareers: 'Explorar Carreiras',
    blog: 'Blog',
    faq: 'FAQ',
    login: 'Entrar',
    signUp: 'Cadastrar',
    bookSession: 'Reservar Sessão',
    hero: {
      title: 'Transforme Sua Jornada Profissional',
      subtitle: 'Receba orientação personalizada de coaches com IA e especialistas da indústria',
      cta: 'Comece Sua Jornada',
      secondaryCta: 'Saiba Mais',
      watchDemo: 'Ver Demo'
    },
    experts: {
      title: 'Conheça Nossos Coaches Especialistas',
      subtitle: 'Conecte-se com líderes da indústria que percorreram o caminho que você quer seguir'
    },
    howItWorks: {
      title: 'Como Funciona',
      subtitle: 'Descubra como o CareerCoach transforma sua jornada profissional em três passos simples',
      step1: {
        title: 'Avaliação',
        description: 'Faça nossa avaliação abrangente de carreira para entender seus pontos fortes e interesses.'
      },
      step2: {
        title: 'Correspondência',
        description: 'Seja combinado com caminhos de carreira personalizados e oportunidades que se adequam ao seu perfil.'
      },
      step3: {
        title: 'Crescimento',
        description: 'Siga seu roteiro personalizado com orientação especializada e suporte contínuo.'
      }
    },
    exploreCareers: {
      title: 'Explorar Carreiras',
      subtitle: 'Descubra oportunidades de carreira emocionantes em várias indústrias e encontre a combinação perfeita para suas habilidades e interesses',
      categories: [
        {
          name: 'Tecnologia',
          description: 'Explore oportunidades em tecnologia e veja se é a opção certa para você.'
        },
        {
          name: 'Saúde',
          description: 'Explore oportunidades em saúde e veja se é a opção certa para você.'
        },
        {
          name: 'Finanças',
          description: 'Explore oportunidades em finanças e veja se é a opção certa para você.'
        },
        {
          name: 'Marketing',
          description: 'Explore oportunidades em marketing e veja se é a opção certa para você.'
        },
        {
          name: 'Educação',
          description: 'Explore oportunidades em educação e veja se é a opção certa para você.'
        },
        {
          name: 'Design',
          description: 'Explore oportunidades em design e veja se é a opção certa para você.'
        }
      ]
    },
    blog: {
      title: 'Blog de Carreira',
      subtitle: 'Últimas percepções, dicas e tendências para ajudá-lo a navegar em sua jornada profissional',
      readMore: 'Leia Mais',
      categories: {
        all: 'Todos',
        careerTips: 'Dicas de Carreira',
        industryNews: 'Notícias da Indústria',
        interviews: 'Entrevistas',
        resources: 'Recursos'
      },
      posts: [
        {
          title: 'Dicas de Desenvolvimento de Carreira para 2025',
          excerpt: 'Descubra as últimas estratégias para avançar sua carreira no mercado de trabalho competitivo de hoje...',
          date: 'Publicado há 3 dias'
        }
      ]
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Encontre respostas para perguntas comuns sobre o CareerCoach e nossos serviços',
      categories: {
        general: 'Geral',
        booking: 'Reserva',
        payment: 'Pagamento',
        technical: 'Técnico'
      },
      questions: [
        {
          question: 'Como funciona o CareerCoach?',
          answer: 'O CareerCoach usa algoritmos avançados e insights de especialistas para combiná-lo com caminhos de carreira personalizados baseados em suas habilidades, interesses e objetivos.'
        },
        {
          question: 'Há um teste gratuito?',
          answer: 'Sim! Oferecemos um teste gratuito de 30 dias com acesso completo a todos os recursos. Não é necessário cartão de crédito para começar.'
        },
        {
          question: 'Posso cancelar a qualquer momento?',
          answer: 'Absolutamente. Você pode cancelar sua assinatura a qualquer momento sem taxas de cancelamento ou penalidades.'
        },
        {
          question: 'Quais indústrias vocês cobrem?',
          answer: 'Cobrimos mais de 50 indústrias incluindo tecnologia, saúde, finanças, marketing, educação e muito mais.'
        }
      ]
    },
    features: {
      title: 'Por Que Escolher o CareerCoach?',
      subtitle: 'Tudo que você precisa para acelerar seu crescimento profissional',
      expert: {
        title: 'Coaching Especializado',
        description: 'Receba orientação personalizada de profissionais da indústria e especialistas em carreira'
      },
      flexible: {
        title: 'Horário Flexível',
        description: 'Reserve sessões que se adequam ao seu horário com disponibilidade 24/7'
      },
      personalized: {
        title: 'Abordagem Personalizada',
        description: 'Avaliação abrangente de seus pontos fortes e áreas de crescimento'
      },
      items: [
        {
          title: 'Correspondência por IA',
          description: 'Nossos algoritmos avançados combinam você com as oportunidades de carreira perfeitas'
        },
        {
          title: 'Orientação Especializada',
          description: 'Receba conselhos de profissionais da indústria e especialistas em carreira'
        },
        {
          title: 'Avaliação de Habilidades',
          description: 'Avaliação abrangente de seus pontos fortes e áreas de crescimento'
        },
        {
          title: 'Suporte 24/7',
          description: 'Assistência 24 horas sempre que você precisar de orientação profissional'
        }
      ]
    }
  }
};

// Keep the old structure as well for backward compatibility
export const translations = languages;