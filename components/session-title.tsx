import type { Session } from "@/data/sessions";

/**
 * セッションタイトルを表示する。titleHighlight が指定されていれば
 * その部分だけアクセントカラーで色付けする。
 */
export function SessionTitle({ session }: { session: Session }) {
  const { title, titleHighlight } = session;
  if (!titleHighlight || !title.includes(titleHighlight)) return <>{title}</>;

  const parts = title.split(titleHighlight);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="text-[#EF9F27]">{titleHighlight}</span>
          )}
        </span>
      ))}
    </>
  );
}
