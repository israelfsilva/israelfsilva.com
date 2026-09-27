import { projects } from './data/site';

const USER = 'israelfsilva';

let cache: Promise<Map<string, number>> | undefined;

/** Data do último push de cada repositório (nome em minúsculas → timestamp). Buscada uma vez por build. */
function pushedAt() {
  cache ??= (async () => {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100`, { headers });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos: { name: string; pushed_at: string }[] = await res.json();
    return new Map(repos.map((r) => [r.name.toLowerCase(), Date.parse(r.pushed_at)]));
  })().catch((err) => {
    console.warn(`[github] não foi possível ordenar os projetos, mantendo a ordem de site.ts: ${err.message}`);
    return new Map<string, number>();
  });
  return cache;
}

/** Projetos do mais recente para o mais antigo segundo o último push no GitHub. */
export async function getProjects() {
  const dates = await pushedAt();
  const time = (p: (typeof projects)[number]) => dates.get(p.name.toLowerCase()) ?? 0;
  return [...projects].sort((a, b) => time(b) - time(a));
}
