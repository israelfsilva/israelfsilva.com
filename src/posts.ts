import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type Post = CollectionEntry<'blog'> & { lang: Lang; slug: string };

function parse(entry: CollectionEntry<'blog'>): Post {
  const [lang, slug] = entry.id.split('/') as [Lang, string];
  return Object.assign(entry, { lang, slug });
}

/** Posts publicados, do mais novo para o mais antigo. */
export async function getPosts(lang?: Lang): Promise<Post[]> {
  const entries = await getCollection('blog', (e) => import.meta.env.DEV || !e.data.draft);
  return entries
    .map(parse)
    .filter((p) => !lang || p.lang === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Agrupa por ano, mantendo a ordem. */
export function groupByYear(posts: Post[]) {
  const groups: { year: number; posts: Post[] }[] = [];
  for (const p of posts) {
    const year = p.data.date.getUTCFullYear();
    const last = groups.at(-1);
    if (last?.year === year) last.posts.push(p);
    else groups.push({ year, posts: [p] });
  }
  return groups;
}

export function readingTime(body = '') {
  const words = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
