"use client";

import { useRef, useState, type MouseEvent, type TouchEvent } from "react";

type Demo = {
  file: string;
  title: string;
  sub: string;
};

const demos: Demo[] = [
  {
    file: "demo-1.html",
    title: "社内通達文書｜リモートワーク制度改定",
    sub: "体裁を整えたフォーマル通達のA4サンプル",
  },
  {
    file: "demo-2.html",
    title: "新入社員オンボーディング業務手順書",
    sub: "Mermaidフローチャートで1ヶ月の流れを可視化",
  },
  {
    file: "demo-3.html",
    title: "社内ハッカソン2025 告知チラシ",
    sub: "グラデーション＆タイムテーブル入りポスター",
  },
  {
    file: "demo-4.html",
    title: "猫の鼻模様 雑学A4資料",
    sub: "Base64埋め込み画像つきの発展サンプル ✨",
  },
];

export function SessionDemos() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const didSwipeRef = useRef(false);
  const current = demos[index];

  const go = (next: number) => {
    const n = ((next % demos.length) + demos.length) % demos.length;
    setIndex(n);
  };
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    didSwipeRef.current = false;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    didSwipeRef.current = true;
    if (dx > 0) prev();
    else next();
  };

  const onLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (didSwipeRef.current) {
      e.preventDefault();
      didSwipeRef.current = false;
    }
  };

  return (
    <div className="relative mx-auto w-[320px] max-w-full">
      <div
        className="relative h-[452px] w-full touch-pan-y overflow-hidden rounded-xl bg-white shadow-[rgba(0,0,0,0.08)_0px_0px_0px_1px] select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {demos.map((demo, i) => (
          <a
            key={demo.file}
            href={`/demos/${demo.file}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-300 ease-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <iframe
              src={`/demos/${demo.file}`}
              title={demo.title}
              loading={i === 0 ? "eager" : "lazy"}
              sandbox="allow-scripts"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 origin-top-left border-0"
              style={{
                width: "794px",
                height: "1123px",
                transform: "scale(0.403)",
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="前の資料"
        className="absolute top-1/2 left-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[16px] shadow-[rgba(0,0,0,0.12)_0px_0px_0px_1px,rgba(0,0,0,0.08)_0px_4px_12px] backdrop-blur transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        ←
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="次の資料"
        className="absolute top-1/2 right-2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[16px] shadow-[rgba(0,0,0,0.12)_0px_0px_0px_1px,rgba(0,0,0,0.08)_0px_4px_12px] backdrop-blur transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        →
      </button>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {demos.map((demo, i) => (
          <button
            key={demo.file}
            type="button"
            onClick={() => go(i)}
            aria-label={`${i + 1}枚目へ`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25"
            }`}
          />
        ))}
      </div>

      <div className="mt-3 text-center">
        <p className="text-[13px] font-semibold tracking-[-0.01em]">
          {current.title}
        </p>
        <p className="mt-0.5 text-[11.5px] leading-relaxed text-muted-foreground">
          {current.sub}
        </p>
      </div>
    </div>
  );
}
