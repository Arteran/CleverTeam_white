import type { ReactElement } from 'react';
import { SERVICES } from '../data/constants';

// ─── Icon shapes ──────────────────────────────────────────────────────────────

const shapes: Record<string, ReactElement> = {
  sea: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M 8 35 L 52 35 L 45 45 L 15 45 Z" strokeLinejoin="round" />
      <rect x="18" y="25" width="8" height="10" strokeLinejoin="round" />
      <rect x="26" y="25" width="8" height="10" strokeLinejoin="round" />
      <path d="M 38 35 L 38 20 L 46 20 L 46 35" strokeLinejoin="round" />
      <line x1="42" y1="20" x2="42" y2="15" strokeLinecap="round" />
      <path d="M 5 52 Q 12 48 20 52 T 35 52 T 50 52 T 60 52" strokeLinecap="round" />
    </svg>
  ),
  air: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M 30 10 C 35 10 35 15 35 15 L 35 25 L 50 35 L 50 40 L 35 35 L 35 45 L 40 50 L 40 55 L 30 50 L 20 55 L 20 50 L 25 45 L 25 35 L 10 40 L 10 35 L 25 25 L 25 15 C 25 15 25 10 30 10 Z" strokeLinejoin="round" />
    </svg>
  ),
  rail: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="15" y1="50" x2="26" y2="12" strokeLinecap="round" />
      <line x1="45" y1="50" x2="34" y2="12" strokeLinecap="round" />
      <line x1="13" y1="45" x2="47" y2="45" strokeLinecap="round" />
      <line x1="17" y1="34" x2="43" y2="34" strokeLinecap="round" />
      <line x1="21" y1="23" x2="39" y2="23" strokeLinecap="round" />
      <line x1="24" y1="14" x2="36" y2="14" strokeLinecap="round" />
    </svg>
  ),
  road: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="10" y1="60" x2="30" y2="0" />
      <line x1="50" y1="60" x2="30" y2="0" />
      <line x1="30" y1="20" x2="30" y2="30" />
      <line x1="30" y1="40" x2="30" y2="50" />
    </svg>
  ),
  consolidated: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="15" y="35" width="15" height="15" />
      <rect x="30" y="35" width="15" height="15" />
      <rect x="22.5" y="20" width="15" height="15" />
    </svg>
  ),
  relocation: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M 10 35 L 30 15 L 50 35" />
      <path d="M 18 27 L 18 50 L 42 50 L 42 27" />
    </svg>
  ),
  port: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="30" cy="15" r="5" />
      <line x1="30" y1="20" x2="30" y2="50" />
      <line x1="20" y1="25" x2="40" y2="25" />
      <path d="M 15 35 Q 30 55 45 35" />
    </svg>
  ),
  customs: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="15" y="10" width="30" height="40" rx="2" />
      <line x1="22" y1="20" x2="38" y2="20" />
      <line x1="22" y1="28" x2="38" y2="28" />
      <path d="M 22 40 L 28 45 L 42 25" />
    </svg>
  ),
  default: (
    <svg width="48" height="48" viewBox="0 0 60 60" fill="currentColor">
      {[10, 30, 50].flatMap((x) =>
        [10, 30, 50].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r={3} />),
      )}
    </svg>
  ),
};

// ─── Component ────────────────────────────────────────────────────────────────

export function ServicesReveal() {
  return (
    <section id="services" className="w-full relative py-[120px] bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[1400px] mx-auto px-[48px] max-[600px]:px-[24px]">
        {/* Header (aligned with the project style) */}
        <div className="mb-[80px]">
          <h2 className="font-['Archivo',sans-serif] text-[clamp(32px,4vw,54px)] font-[800] text-[#0A0A0A] leading-[1.1] tracking-[-0.02em] mb-[24px]">
            Наші послуги.
          </h2>
          <p className="font-mono text-[14px] text-[#888888] leading-[1.7] max-w-2xl">
            Ми забезпечуємо повний спектр логістичних рішень, від організації перевезень до митного оформлення.
          </p>
        </div>

        {/* Minimalist 4x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E5E5]">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className="group block p-[40px] border-b border-r border-[#E5E5E5] outline-none hover:bg-[#F9F9F9] transition-colors duration-200 active:bg-[#F0F0F0]"
            >
              {/* Icon Container - No crazy shapes, just a clean wrapper */}
              <div className="w-[48px] h-[48px] mb-[32px] text-[#0A0A0A] transition-all duration-300 ease-emil group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-[#8DC63F]">
                {shapes[service.slug] ?? shapes.default}
              </div>

              {/* Text Info */}
              <h3 className="font-['Archivo',sans-serif] font-[700] text-[20px] text-[#0A0A0A] mb-[16px] leading-[1.2] transition-colors duration-200 group-hover:text-[#8DC63F]">
                {service.name}
              </h3>
              <p className="font-mono text-[13px] text-[#888888] leading-[1.6]">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
