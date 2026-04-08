export type Resource = {
  label: string;
  url: string;
};

export type Session = {
  id: string;
  title: string;
  date: string | null;
  description: string;
  body?: string;
  resources: Resource[];
};

export const sessions: Session[] = [
  {
    id: "1",
    title: "すごいぜ！チャッピー！",
    date: "2026-04-16",
    description:
      "AIと話してみたけど思い通りにならない...そんな経験ありませんか？第1回は、ChatGPTでできることを実演＆体験する回です。",
    resources: [],
  },
];

export function getSession(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}
