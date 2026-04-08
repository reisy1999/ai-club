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
  // {
  //   id: "1",
  //   title: "生成AIとは何か",
  //   date: "2026-04-18",
  //   description:
  //     "ChatGPTやGemini、画像生成AIなど、いま話題のAIの仕組みと使いどころを解説。",
  //   body: "初回は GenSpark を使ったポスター作成デモを中心に、AIで「こんなことができるんだ」を体感してもらう回にする予定です。",
  //   resources: [
  //     { label: "スライド", url: "#" },
  //     { label: "GenSpark", url: "https://genspark.ai" },
  //   ],
  // },
];

export function getSession(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}
