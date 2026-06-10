"use client";

import { useEffect, useRef, useState } from "react";
import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";

const data = [
  {
    stat: "2,000+",
    statNum: "2,000",
    statSuffix: "+ workers",
    tag: "Workforce",
    tagIcon: "👥",
    title: "Deployed across Japan",
    desc: "Successfully placed professionals across Japan since establishment in 2020.",
    accent: "#1D9E75",
    accentLight: "#E1F5EE",
    accentMid: "#9FE1CB",
    accentText: "#085041",
    img: "/images/workers-japan.jpg",
    illustration: "workers",
  },
  {
    stat: "70%",
    statNum: "70",
    statSuffix: "% pass rate",
    tag: "JFT A2",
    tagIcon: "🎓",
    title: "First-time JFT A2 takers",
    desc: "Achieved within a focused 4-month training program for new students.",
    accent: "#378ADD",
    accentLight: "#E6F1FB",
    accentMid: "#85B7EB",
    accentText: "#0C447C",
    img: "/images/jft-exam.jpg",
    illustration: "jft",
  },
  {
    stat: "85%",
    statNum: "85",
    statSuffix: "% success",
    tag: "Retake",
    tagIcon: "🔄",
    title: "Second-attempt students",
    desc: "Improved outcomes through targeted and focused coaching sessions.",
    accent: "#EF9F27",
    accentLight: "#FAEEDA",
    accentMid: "#FAC775",
    accentText: "#633806",
    img: "/images/jft-second.jpg",
    illustration: "retake",
  },
  {
    stat: "90%",
    statNum: "90",
    statSuffix: "% pass rate",
    tag: "Prometric",
    tagIcon: "📋",
    title: "First-time Prometric takers",
    desc: "Consistently strong performance results for first-time takers.",
    accent: "#7F77DD",
    accentLight: "#EEEDFE",
    accentMid: "#AFA9EC",
    accentText: "#3C3489",
    img: "/images/prometric.jpg",
    illustration: "prometric",
  },
];

function WorkersIllustration({ accent, accentLight, accentMid }: { accent: string; accentLight: string; accentMid: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="140" fill={accentLight} />
      <circle cx="60" cy="50" r="22" fill={accentMid} />
      <circle cx="120" cy="45" r="18" fill={accentMid} opacity="0.7" />
      <circle cx="175" cy="55" r="25" fill={accent} opacity="0.8" />
      <circle cx="240" cy="48" r="20" fill={accentMid} />
      <circle cx="90" cy="98" r="15" fill={accentMid} opacity="0.5" />
      <circle cx="150" cy="100" r="20" fill={accent} opacity="0.5" />
      <circle cx="210" cy="92" r="16" fill={accentMid} opacity="0.7" />
    </svg>
  );
}

function JFTIllustration({ accent, accentLight, accentMid, accentText }: { accent: string; accentLight: string; accentMid: string; accentText: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="140" fill={accentLight} />
      <rect x="30" y="90" width="36" height="40" rx="3" fill={accentMid} opacity="0.5" />
      <rect x="82" y="70" width="36" height="60" rx="3" fill={accentMid} opacity="0.7" />
      <rect x="134" y="50" width="36" height="80" rx="3" fill={accent} opacity="0.6" />
      <rect x="186" y="30" width="36" height="100" rx="3" fill={accent} opacity="0.8" />
      <rect x="238" y="20" width="36" height="110" rx="3" fill={accent} />
      <line x1="20" y1="130" x2="290" y2="130" stroke={accentMid} strokeWidth="1" />
      <text x="248" y="14" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="11" fill={accentText} fontWeight="600">70%</text>
    </svg>
  );
}

function RetakeIllustration({ accent, accentLight, accentMid, accentText }: { accent: string; accentLight: string; accentMid: string; accentText: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="140" fill={accentLight} />
      <path d={`M30,110 Q80,40 130,65 Q180,90 230,25 L270,25 L270,130 L30,130 Z`} fill={accentMid} opacity="0.4" />
      <path d={`M30,110 Q80,40 130,65 Q180,90 230,25`} stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="230" cy="25" r="5" fill={accentText} />
      <text x="238" y="22" fontFamily="DM Sans, sans-serif" fontSize="11" fill={accentText} fontWeight="600">85%</text>
    </svg>
  );
}

function PrometricIllustration({ accent, accentLight, accentMid }: { accent: string; accentLight: string; accentMid: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="140" fill={accentLight} />
      <circle cx="150" cy="66" r="52" fill={accentMid} opacity="0.35" />
      <circle cx="150" cy="66" r="36" fill={accentMid} opacity="0.5" />
      <circle cx="150" cy="66" r="22" fill={accent} opacity="0.9" />
      <path d="M138,66 L146,74 L163,58" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function Illustration({ type, accent, accentLight, accentMid, accentText }: {
  type: string; accent: string; accentLight: string; accentMid: string; accentText: string;
}) {
  if (type === "workers") return <WorkersIllustration accent={accent} accentLight={accentLight} accentMid={accentMid} />;
  if (type === "jft") return <JFTIllustration accent={accent} accentLight={accentLight} accentMid={accentMid} accentText={accentText} />;
  if (type === "retake") return <RetakeIllustration accent={accent} accentLight={accentLight} accentMid={accentMid} accentText={accentText} />;
  return <PrometricIllustration accent={accent} accentLight={accentLight} accentMid={accentMid} />;
}

function AchievementCard({
  item,
  index,
}: {
  item: (typeof data)[0];
  index: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
        
        <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 0.1}s, transform 0.55s ease ${index * 0.1}s`,
        background: "#fff",
        borderRadius: "16px",
        border: "0.5px solid #e5e7eb",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLDivElement).style.borderColor = item.accentMid;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb";
      }}
    >
      {/* Image / Illustration */}
      <div style={{ position: "relative", width: "100%", height: "140px", overflow: "hidden" }}>
        <Illustration
          type={item.illustration}
          accent={item.accent}
          accentLight={item.accentLight}
          accentMid={item.accentMid}
          accentText={item.accentText}
        />
      </div>

      {/* Body */}
      <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>

        {/* Tag */}
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.04em",
          padding: "3px 10px",
          borderRadius: "99px",
          marginBottom: "12px",
          background: item.accentLight,
          color: item.accentText,
        }}>
          {item.tag}
        </span>

        {/* Stat */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "6px" }}>
          <span style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "34px",
            fontWeight: 400,
            lineHeight: 1,
            color: "#111827",
          }}>
            {item.statNum}
          </span>
          <span style={{ fontSize: "14px", fontWeight: 500, color: "#6b7280" }}>
            {item.statSuffix}
          </span>
        </div>

        {/* Divider */}
        <div style={{
          width: "28px",
          height: "2px",
          borderRadius: "2px",
          background: item.accent,
          margin: "10px 0",
        }} />

        {/* Title */}
        <p style={{ fontSize: "14px", fontWeight: 600, color: "#111827", margin: "0 0 4px" }}>
          {item.title}
        </p>

        {/* Desc */}
        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
          {item.desc}
        </p>
      </div>
    </div>
    </>
    
  );
}

export default function Achievements() {
  const t = useTranslations("achievement");
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        .ach-section * { box-sizing: border-box; }
      `}</style>
        <Banner
            backgroundImage="/img/banner/144829.jpg"
            title={t('title')}
            subtitle={t('subtitle')}
            description={t('desc')}
        />
      <section
        className="ach-section"
        style={{
          padding: "5rem 1.5rem",
          background: "#fafafa",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "0.75rem" }}>
            <div style={{ width: "32px", height: "1px", background: "#d1d5db" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", fontWeight: 500 }}>
              Since 2020
            </span>
            <div style={{ width: "32px", height: "1px", background: "#d1d5db" }} />
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 400,
            color: "#111827",
            textAlign: "center",
            margin: "0 0 0.5rem",
            lineHeight: 1.15,
          }}>
            Our <em style={{ fontStyle: "italic", color: "#1D9E75" }}>Achievements</em>
          </h2>

          <p style={{ textAlign: "center", fontSize: "15px", color: "#6b7280", margin: "0 0 3rem" }}>
            Milestones that define Hashira&apos;s impact and commitment.
          </p>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            {data.map((item, i) => (
              <AchievementCard key={i} item={item} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}