import type { T } from '../i18n';

export const experience: { period: string; company: string; role: string; description: T }[] = [
  {
    period: '2024 — 2026',
    company: 'Bradesco',
    role: 'Senior Software Engineer',
    description: {
      pt: 'Features do Pix — usado por mais de 150 milhões de pessoas — numa arquitetura de micro-frontends (Module Federation). Liderei uma feature nova da ideação e prototipação no Figma até o deploy.',
      en: 'Pix features — used by 150M+ people — within a micro-frontend architecture (Module Federation). Led a new feature from ideation and Figma prototyping to production.',
    },
  },
  {
    period: '2022 — 2024',
    company: 'Santander',
    role: 'Senior Frontend',
    description: {
      pt: 'SPAs em Angular e RxJS para a plataforma de comércio exterior e câmbio. Processamento de milhares de registros em Excel direto no navegador, sem backend.',
      en: 'Angular and RxJS SPAs for the international trade and FX platform. Parsed thousands of Excel records in-browser, no backend needed.',
    },
  },
  {
    period: '2019 — 2022',
    company: 'Casas Bahia',
    role: 'Senior Frontend',
    description: {
      pt: 'Liderei o frontend do PDV nacional e das vendas remotas que mantiveram as lojas operando na pandemia. Testes E2E com Cypress e participação no Chapter de Frontend.',
      en: 'Led frontend for the national POS and the remote-sales tools that kept stores running through the pandemic. Cypress E2E suites and the Frontend Chapter.',
    },
  },
  {
    period: '2016 — 2019',
    company: 'Scriptcase',
    role: 'Frontend',
    description: {
      pt: 'Redesign da interface do produto RAD principal, novos componentes de UI e um sistema de documentação com tutoriais interativos.',
      en: 'Redesigned the core RAD product interface, built new UI components and a documentation system with interactive tutorials.',
    },
  },
];

export const education: { label: T; value: T; detail?: T }[] = [
  {
    label: { pt: '2024 — 2026', en: '2024 — 2026' },
    value: { pt: 'Design de Serviços', en: 'Service Design' },
    detail: { pt: 'UNINASSAU, São Paulo', en: 'UNINASSAU, São Paulo' },
  },
  {
    label: { pt: '2012 — 2014', en: '2012 — 2014' },
    value: { pt: 'Arquitetura e Urbanismo', en: 'Architecture and Urbanism' },
    detail: { pt: 'UNINASSAU, Recife · não concluída', en: 'UNINASSAU, Recife · not completed' },
  },
  {
    label: { pt: 'Stack', en: 'Stack' },
    value: {
      pt: 'Angular, TypeScript, RxJS, React, Next.js, Tailwind, Cypress, Jest, Figma',
      en: 'Angular, TypeScript, RxJS, React, Next.js, Tailwind, Cypress, Jest, Figma',
    },
  },
  {
    label: { pt: 'Idiomas', en: 'Languages' },
    value: { pt: 'Português nativo · Inglês fluente', en: 'Portuguese (native) · English (full professional)' },
  },
  {
    label: { pt: 'Certificação', en: 'Certification' },
    value: { pt: 'Azure AZ-900', en: 'Azure AZ-900' },
  },
];

// Repositórios de github.com/israelfsilva. Na home são ordenados pelo último push (ver src/github.ts).
export const projects: { name: string; language: string; url: string; description: T }[] = [
  {
    name: 'Chronobar',
    language: 'Swift',
    url: 'https://github.com/israelfsilva/Chronobar',
    description: {
      pt: 'App nativo para macOS que mostra o progresso do ano, mês, semana ou dia na barra de menus.',
      en: 'Native macOS app that shows year, month, week or day progress in the menu bar.',
    },
  },
  {
    name: 'openchords',
    language: 'TypeScript',
    url: 'https://github.com/israelfsilva/openchords',
    description: {
      pt: 'Biblioteca aberta de acordes para violão, inspirada no clássico Billion Chords.',
      en: 'An open-source guitar chord library, inspired by the classic Billion Chords.',
    },
  },
  {
    name: 'timan',
    language: 'TypeScript',
    url: 'https://github.com/israelfsilva/timan',
    description: {
      pt: 'CLI para consultar fusos horários pelo terminal.',
      en: 'A command-line tool for looking up time zones.',
    },
  },
  {
    name: 'notepad95',
    language: 'Swift',
    url: 'https://github.com/israelfsilva/notepad95',
    description: {
      pt: 'Editor de texto simples para macOS inspirado no Bloco de Notas do Windows 95.',
      en: 'A simple macOS text editor inspired by the Windows 95 Notepad.',
    },
  },
];

export const contact: { label: string; value: string; href: string }[] = [
  { label: 'GitHub', value: 'israelfsilva', href: 'https://github.com/israelfsilva' },
  { label: 'LinkedIn', value: 'israelfsilva', href: 'https://linkedin.com/in/israelfsilva' },
  { label: 'E-mail', value: 'israelfsilva@pm.me', href: 'mailto:israelfsilva@pm.me' },
];
