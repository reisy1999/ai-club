"use client";

import { useEffect, useRef, useState } from "react";

export function HeroLogo() {
  const [active, setActive] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 画面に入ったら散らばった状態にリセットして、1秒後に集合
          setActive(false);
          timer = setTimeout(() => setActive(true), 1000);
        }
      },
      { threshold: 0.3 },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Center glow */}
      <circle
        cx="100" cy="100" r="22" fill="#EF9F27"
        style={{ opacity: active ? 0.3 : 0, transition: "opacity 0.6s ease" }}
      />

      {/* Connecting lines */}
      <line
        x1="60" y1="55" x2="95" y2="92"
        stroke="#378ADD" strokeWidth="1.5"
        style={{ opacity: active ? 0.7 : 0, transition: "opacity 0.3s ease 0.1s" }}
      />
      <line
        x1="140" y1="55" x2="105" y2="92"
        stroke="#D4537E" strokeWidth="1.5"
        style={{ opacity: active ? 0.7 : 0, transition: "opacity 0.3s ease 0.1s" }}
      />
      <line
        x1="100" y1="155" x2="100" y2="108"
        stroke="#1D9E75" strokeWidth="1.5"
        style={{ opacity: active ? 0.7 : 0, transition: "opacity 0.3s ease 0.1s" }}
      />

      {/* Orbiting nodes */}
      <circle
        r="16" fill="#85B7EB" opacity="0.85"
        style={{ cx: active ? 72 : 45, cy: active ? 62 : 42, transition: "cx 0.5s ease, cy 0.5s ease" }}
      />
      <circle
        r="16" fill="#ED93B1" opacity="0.85"
        style={{ cx: active ? 128 : 155, cy: active ? 62 : 42, transition: "cx 0.5s ease, cy 0.5s ease" }}
      />
      <circle
        r="16" fill="#5DCAA5" opacity="0.85"
        style={{ cx: active ? 100 : 100, cy: active ? 145 : 168, transition: "cx 0.5s ease, cy 0.5s ease" }}
      />

      {/* Center dot */}
      <circle
        cx="100" cy="100" r="6"
        style={{
          fill: active ? "#EF9F27" : "#666666",
          opacity: active ? 1 : 0.4,
          transition: "fill 0.5s ease, opacity 0.5s ease",
        }}
      />
    </svg>
  );
}
