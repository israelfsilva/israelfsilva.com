export const langs = ['pt', 'en'] as const;
export type Lang = (typeof langs)[number];

/** Texto bilíngue. */
export type T = Record<Lang, string>;

export const ui = {
  role: { pt: 'Engenheiro de Produto · São Paulo', en: 'Product Engineer · São Paulo' },
  experience: { pt: 'Experiência', en: 'Experience' },
  education: { pt: 'Formação e stack', en: 'Education & stack' },
  projects: { pt: 'Projetos', en: 'Projects' },
  writing: { pt: 'Escrita', en: 'Writing' },
  contact: { pt: 'Contato', en: 'Contact' },
  open: { pt: 'Aberto a novas conversas', en: 'Open to new conversations' },
  updated: { pt: 'Atualizado em', en: 'Updated' },
  toggleTheme: { pt: 'Alternar tema', en: 'Toggle theme' },
  allWriting: { pt: '← Todos os textos', en: '← All writing' },
  minRead: { pt: 'min de leitura', en: 'min read' },
  toc: { pt: 'Nesta página', en: 'On this page' },
  description: {
    pt: 'Israel Silva — engenheiro de produto em São Paulo. Interfaces para sistemas em que errar custa caro.',
    en: 'Israel Silva — product engineer in São Paulo. Interfaces for systems where mistakes are expensive.',
  },
} satisfies Record<string, T>;

const months: Record<Lang, string[]> = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const pad = (n: number) => String(n).padStart(2, '0');

/** "12 set 2026" / "Sep 12, 2026" */
export function formatDate(d: Date, lang: Lang) {
  const day = d.getUTCDate();
  const m = months[lang][d.getUTCMonth()];
  const y = d.getUTCFullYear();
  return lang === 'pt' ? `${pad(day)} ${m} ${y}` : `${m} ${day}, ${y}`;
}

/** "12/09" */
export function formatDayMonth(d: Date) {
  return `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}`;
}

/** "set 2026" / "Sep 2026" */
export function formatMonthYear(d: Date, lang: Lang) {
  return `${months[lang][d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export const homePath = (lang: Lang) => (lang === 'pt' ? '/' : '/en');
export const postPath = (lang: Lang, slug: string) => (lang === 'pt' ? `/blog/${slug}` : `/en/blog/${slug}`);
