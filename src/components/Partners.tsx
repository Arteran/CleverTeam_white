import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NUM_PARTNERS = 12;

const getLogoUrl = (idx: number) => {
  if (idx === 11) return 'https://clever-team.com.ua/images/partners/logo12_ua.jpg';
  return `https://clever-team.com.ua/images/partners/logo${idx + 1}.jpg`;
};

export default function PartnersGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const cellRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(cellRefs.current.filter(Boolean), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="bg-[#F5F7F5] px-[64px] py-[80px] border-t border-[#DDDDDD]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[64px] text-right">
          <h2 className="font-['Archivo',sans-serif] text-[clamp(32px,4vw,54px)] font-[800] text-[#0A0A0A] leading-[1.1] tracking-[-0.02em] mb-[24px]">
            Наші партнери
          </h2>
          <p className="font-mono text-[14px] text-[#888888] leading-[1.7] max-w-2xl ml-auto">
            Компанії, довіра яких — наша величезна перемога.
          </p>
        </div>

        <div className="grid grid-cols-6 max-[900px]:grid-cols-4 max-[600px]:grid-cols-3 gap-4">
          {Array.from({ length: NUM_PARTNERS }).map((_, index) => {
            const isLast = index === NUM_PARTNERS - 1;

            return (
              <div
                key={index}
                ref={(el) => { cellRefs.current[index] = el; }}
              >
                <div className={`flex items-center justify-center px-5 py-7 h-[110px] bg-white rounded-lg shadow-sm transition-all duration-300 ease-out group hover:shadow-md hover:-translate-y-1 ${isLast ? 'cursor-pointer' : 'cursor-default'} w-full`}>
                  {isLast ? (
                    <a
                      href="#contacts"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex flex-col items-center justify-center no-underline w-full h-full"
                    >
                      <span className="text-[28px] font-[900] text-[#7CB342] leading-[1]">?</span>
                      <span className="text-[11px] font-[700] text-[#7CB342] mt-[4px] uppercase tracking-[0.06em]">Можливо Ви</span>
                    </a>
                  ) : (
                    <img
                      src={getLogoUrl(index)}
                      alt={`Партнер ${index + 1}`}
                      className="max-w-[110px] max-h-[55px] object-contain grayscale opacity-85 transition-all duration-300 ease-out group-hover:grayscale-0 group-hover:opacity-100"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
