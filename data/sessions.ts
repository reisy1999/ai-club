export type Resource = {
  label: string;
  url: string;
};

export type Pain = {
  q: string;
  a: string;
  color: string;
};

export type InfoItem = {
  label: string;
  value: string;
};

export type Session = {
  id: string;
  title: string;
  date: string | null;
  description: string;
  overview?: string;
  info: InfoItem[];
  pains: Pain[];
  resources: Resource[];
};

export const sessions: Session[] = [
  {
    id: "1",
    title: "すごいぜ！チャッピー！",
    date: "2026-04-16",
    description:
      "AIと話してみたけど思い通りにならない...そんな経験ありませんか？第1回は、ChatGPTでできることを実演＆体験する回です。",
    overview:
      "ChatGPTの基本的な使い方から、使っていく中で生じる悩みまで、実演を交えて解説します。\nメイン企画は「HTML単一ファイルできれいな資料をつくってみよう！」。みんなで実際に体験して、チャッピーを使いこなしましょう！",
    info: [
      { label: "日時", value: "4/16（木）17:20〜18:00" },
      { label: "場所", value: "講堂" },
      { label: "持ち物", value: "個人PC推奨、なければスマホOK" },
      { label: "対象", value: "全職員" },
    ],
    pains: [
      {
        q: "どんな内容の講座ですか？",
        a: "ChatGPTに指示を出して、実際に動くものを作る体験型の講座です。プログラミングの知識は不要です。",
        color: "#85B7EB",
      },
      {
        q: "Zoom参加やアーカイブ視聴はできますか？",
        a: "手を動かす体験が中心なので現地参加を推奨しますが、配信・アーカイブ対応は検討中です。途中参加や端末なしの見学もOKです。",
        color: "#ED93B1",
      },
      {
        q: "AI初心者で不安です",
        a: "むしろ初心者向けの講座です。当日は講師がライブで実演するので、予備知識ゼロで大丈夫です。",
        color: "#5DCAA5",
      },
      {
        q: "ChatGPTで画像の日本語文字がうまく出ません",
        a: "よくある悩みです！回避する方法がいくつかあるので、当日実演しながら紹介します。",
        color: "#EF9F27",
      },
    ],
    resources: [],
  },
];

export function getSession(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}
