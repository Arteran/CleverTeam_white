import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data/constants';

gsap.registerPlugin(ScrollTrigger);

const shapes: Record<string, ReactElement> = {
  sea: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
      <path d="M 8 38 L 52 38 L 46 50 L 14 50 Z" />
      <rect x="17" y="26" width="10" height="12" />
      <rect x="28" y="26" width="10" height="12" />
      <path d="M 40 38 L 40 22 L 48 22 L 48 38" />
      <line x1="44" y1="22" x2="44" y2="16" strokeLinecap="round" />
      <path d="M 4 55 Q 12 50 22 55 T 40 55 T 58 55" strokeLinecap="round" />
    </svg>
  ),
  air: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M 30 10 C 36 10 36 16 36 16 L 36 26 L 52 38 L 52 43 L 36 38 L 36 46 L 41 52 L 41 56 L 30 51 L 19 56 L 19 52 L 24 46 L 24 38 L 8 43 L 8 38 L 24 26 L 24 16 C 24 16 24 10 30 10 Z" strokeLinejoin="round" />
    </svg>
  ),
  rail: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="15" y1="52" x2="26" y2="10" />
      <line x1="45" y1="52" x2="34" y2="10" />
      <line x1="12" y1="46" x2="48" y2="46" />
      <line x1="17" y1="34" x2="43" y2="34" />
      <line x1="21" y1="22" x2="39" y2="22" />
    </svg>
  ),
  road: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M 5 55 L 30 5 L 55 55 Z" strokeLinejoin="round" />
      <line x1="30" y1="22" x2="30" y2="31" />
      <line x1="30" y1="40" x2="30" y2="49" />
    </svg>
  ),
  consolidated: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="10" y="34" width="17" height="17" rx="2" />
      <rect x="33" y="34" width="17" height="17" rx="2" />
      <rect x="21" y="16" width="17" height="17" rx="2" />
      <line x1="18" y1="34" x2="22" y2="33" />
      <line x1="42" y1="34" x2="38" y2="33" />
    </svg>
  ),
  relocation: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
      <path d="M 8 38 L 30 14 L 52 38" />
      <path d="M 16 30 L 16 54 L 44 54 L 44 30" />
      <rect x="23" y="40" width="14" height="14" />
    </svg>
  ),
  port: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="30" cy="14" r="6" />
      <line x1="30" y1="20" x2="30" y2="52" strokeLinecap="round" />
      <line x1="18" y1="26" x2="42" y2="26" strokeLinecap="round" />
      <path d="M 14 38 Q 30 56 46 38" strokeLinecap="round" />
    </svg>
  ),
  customs: (
    <svg width="52" height="52" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="12" y="8" width="36" height="44" rx="3" />
      <line x1="20" y1="20" x2="40" y2="20" strokeLinecap="round" />
      <line x1="20" y1="29" x2="40" y2="29" strokeLinecap="round" />
      <line x1="20" y1="38" x2="32" y2="38" strokeLinecap="round" />
      <path d="M 26 42 L 32 48 L 44 34" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function ServicesReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(itemRefs.current.filter(Boolean), {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#FFFFFF] px-[64px] py-[80px]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-[32px]">
          <h2 className="text-[clamp(24px,3vw,36px)] font-[800] text-[#1A1A1A] m-0 mb-[16px] heading-underline-center tracking-[-0.02em]">
            Послуги Компанії
          </h2>
          <p className="text-[15px] text-[#555555] max-w-[680px] mx-auto mt-[16px] leading-[1.75]">
            Вам потрібен надійний і стабільний партнер в сфері перевезення вантажів?
            Ми з радістю надамо Вам найширший спектр логістичних послуг на найвищому рівні.
          </p>
        </div>

        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-[40px_24px] max-[480px]:gap-[16px_12px]">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="service-block"
            >
              <a
                href={service.href}
                className="flex flex-col items-center text-center no-underline px-[16px] py-[40px] rounded-[16px] border border-[#EEEEEE] shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-emil cursor-pointer bg-[#FFFFFF] hover:bg-[#8DC63F] hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(141,198,63,0.3)] hover:border-[#8DC63F] active:scale-[0.97] group w-full h-full"
              >
                <div className="relative w-[84px] h-[84px] mb-[24px] shrink-0 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none bg-[#F4F9EE] transition-[background-color,transform,box-shadow] duration-[400ms] ease-emil group-hover:bg-[#FFFFFF] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] group-hover:rotate-[270deg] group-hover:scale-105"
                  />
                  <div className="relative z-10 text-[#7CB342] transition-colors duration-200 ease-emil group-hover:text-[#8DC63F]">
                    {shapes[service.slug] ?? shapes.customs}
                  </div>
                </div>

                <span
                  className="text-[15px] font-[700] text-[#1A1A1A] leading-[1.4] transition-colors duration-200 ease-emil group-hover:text-[#FFFFFF]"
                >
                  {service.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
