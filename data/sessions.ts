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
  /** タイトル中で色を付ける部分。例: "チャッピー！" */
  titleHighlight?: string;
  date: string | null;
  description: string;
  overview?: string;
  info: InfoItem[];
  /** 「こんな人におすすめ」の箇条書き */
  audience?: string[];
  /** ヒーロー下に出す一言。例: "事前申込不要・途中参加OK" */
  note?: string;
  /** HTML資料サンプルのギャラリーを表示するか（第1回のみ） */
  demos?: boolean;
  pains: Pain[];
  resources: Resource[];
};

export const sessions: Session[] = [
  {
    id: "1",
    title: "すごいぜ！チャッピー！",
    titleHighlight: "チャッピー！",
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
    note: "事前申込不要・途中参加OK・スマホ参加OK",
    demos: true,
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
  {
    id: "2",
    title: "読まずに、わかる。NotebookLM",
    titleHighlight: "NotebookLM",
    date: "2026-09-07",
    description:
      "診療報酬改定の分厚いPDF、英語の論文...全部読む時間はない。第2回は、長い資料をNotebookLMに読ませて「自分のもの」にする回です。",
    overview:
      "NotebookLMは、PDFや資料を放り込むと、その中身だけを根拠に要約・質問応答をしてくれるGoogleの無料AIツールです。出典（何ページのどこに書いてあるか）まで示してくれるので、業務資料との相性が抜群です。\n当日は診療報酬改定の資料や論文を実際に読み込ませて、「長い資料をパッと見て概要をつかむ」流れをその場で体験します。",
    info: [
      { label: "日時", value: "9/7（月）17:00〜" },
      { label: "場所", value: "大会議室" },
      { label: "持ち物", value: "個人PC推奨、なければスマホOK" },
      { label: "対象", value: "全職員" },
    ],
    audience: [
      "長い資料をパッと見て、まず概要をつかみたい人",
      "診療報酬改定やガイドラインの資料を追いかけている人",
      "論文を読みたいけれど、時間も英語もつらい人",
      "「積んだままのPDF」に心当たりがある人",
    ],
    note: "事前申込不要・途中参加OK・PC持参推奨（なくても大丈夫）",
    pains: [],
    resources: [],
  },
];

export function getSession(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}

/** 次回開催（今日以降でいちばん近い回）。なければ undefined */
export function getUpcomingSession(
  today: string = new Date().toISOString().slice(0, 10),
): Session | undefined {
  return sessions
    .filter((s) => s.date && s.date >= today)
    .sort((a, b) => a.date!.localeCompare(b.date!))[0];
}

/** 「第N回」の N。データ上の並び順で決まる */
export function getSessionNumber(id: string): number {
  return sessions.findIndex((s) => s.id === id) + 1;
}
