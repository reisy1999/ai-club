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
      "ChatGPTの基本的な使い方から、使っていく中で生じる悩みまで、実演を交えて解説します。\nみんなで実際に体験をして、チャッピーを使いこなしましょう！",
    info: [
      { label: "日時", value: "4/16（木）17:20〜18:00" },
      { label: "場所", value: "講堂" },
      { label: "持ち物", value: "個人PC推奨、なければスマホOK" },
      { label: "対象", value: "全職員" },
    ],
    pains: [
      {
        q: "そもそも何に使えばいいかわからない...",
        a: "基本操作はもちろん、性格カスタマイズや事前情報の設定で自分専用のアシスタントにできます。",
        color: "#85B7EB",
      },
      {
        q: "何回やりとりしても思った通りにならない...",
        a: "Canvas機能を使えばやりとり激減。プロンプトの書き方じゃなく「AIへの頼み方」を教えます。",
        color: "#ED93B1",
      },
      {
        q: "ポスター作ろうとしたら変な文字が出た...",
        a: "画像生成の得意・不得意を知れば解決。文面はAI、デザインはCanva連携で分担が正解。",
        color: "#5DCAA5",
      },
    ],
    resources: [],
  },
];

export function getSession(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}
