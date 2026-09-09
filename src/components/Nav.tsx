import { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useUI } from '../context/UIContext';

gsap.registerPlugin(Flip, ScrollToPlugin);

const NAV_LINKS = [
  { label: 'Про компанію', href: '#about'    },
  { label: 'Послуги',      href: '#services' },
  { label: 'Партнери',     href: '#partners' },
  { label: 'Вакансії',     href: '#vacancy'  },
  { label: 'Контакти',     href: '#contacts' },
];

const SECTION_TO_HREF: Record<string, string> = {
  about:    '#about',
  services: '#services',
  partners: '#partners',
  vacancy:  '#vacancy',
  contacts: '#contacts',
};

export default function Nav() {
  const { language, setLanguage } = useUI();
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [hoverHref,  setHoverHref]  = useState<string | null>(null);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  const pillRef      = useRef<HTMLDivElement | null>(null);
  const linkRefs     = useRef<Record<string, HTMLAnchorElement | null>>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const sectionIds = Object.keys(SECTION_TO_HREF);
      for (const id of sectionIds.slice().reverse()) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 250) {
          setActiveHref(SECTION_TO_HREF[id]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const movePill = useCallback((targetHref: string) => {
    const pill       = pillRef.current;
    const targetLink = linkRefs.current[targetHref];
    const container  = containerRef.current;
    if (!pill || !targetLink || !container) return;

    const state = Flip.getState(pill);
    const targetRect    = targetLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    gsap.set(pill, {
      width:  targetRect.width  + 20,
      height: targetRect.height + 10,
      left:   targetRect.left - containerRect.left - 10,
      top:    targetRect.top  - containerRect.top  - 5,
    });

    Flip.from(state, { duration: 0.35, ease: 'power3.inOut', absolute: true });
  }, []);

  const displayHref = hoverHref ?? activeHref;

  useEffect(() => {
    if (displayHref) movePill(displayHref);
  }, [displayHref, movePill]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    gsap.to(window, { scrollTo: { y: href, offsetY: 72 }, duration: 0.9, ease: 'power3.inOut' });
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-[#FFFFFF] border-b border-[#DDDDDD] transition-shadow duration-300 ${scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'shadow-none'}`}
    >
      <div className="flex items-center justify-between px-8 md:px-12 h-[72px] max-w-[1400px] mx-auto">

        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 no-underline outline-none"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-[3px] w-[34px] h-[34px] shrink-0">
            <div className="rounded-[50%_50%_0_50%] bg-[#8DC63F]" />
            <div className="rounded-[50%_50%_50%_0] bg-[#7CB342]" />
            <div className="rounded-[50%_0_50%_50%] bg-[#AED581]" />
            <div className="rounded-[0_50%_50%_50%] bg-[#7CB342]" />
          </div>

          <div className="flex flex-col leading-none font-['Archivo',sans-serif]">
            <span className="font-[900] text-[20px] tracking-[-0.02em]">
              <span className="text-[#0A0A0A]">CLEVER</span>
              <span className="text-[#8DC63F] ml-[4px]">TEAM</span>
            </span>
          </div>
        </a>

        <div ref={containerRef} className="relative hidden md:flex items-center gap-8">
          <div
            ref={pillRef}
            className={`absolute pointer-events-none rounded-[4px] transition-opacity duration-200 bg-[#F4F9EE] border border-[#B8E085] ${displayHref ? 'opacity-100' : 'opacity-0'}`}
          />

          {NAV_LINKS.map((link) => {
            const isActive = link.href === displayHref;
            return (
              <a
                key={link.href}
                href={link.href}
                ref={(el) => { linkRefs.current[link.href] = el; }}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`font-['Inter',sans-serif] font-[800] text-[12px] tracking-[0.05em] uppercase relative z-1 px-[12px] py-[6px] transition-colors duration-200 no-underline ${isActive ? 'text-[#0A0A0A]' : 'text-[#555555]'}`}
                onMouseEnter={() => setHoverHref(link.href)}
                onMouseLeave={() => setHoverHref(null)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          
          <div className="hidden md:flex items-center gap-3">
            {(['UA', 'EN', 'CH'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`font-['Inter',sans-serif] text-[12px] bg-transparent border-none cursor-pointer p-0 transition-colors duration-200 ${language === lang ? 'font-[800] text-[#8DC63F]' : 'font-[500] text-[#888888]'}`}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Меню"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-[2px] rounded-[2px] bg-[#1A1A1A] transition-all duration-[250ms] ease-out ${i === 1 ? (menuOpen ? 'w-full opacity-0' : 'w-[70%] opacity-100') : 'w-full'} ${i === 0 && menuOpen ? 'translate-y-[7px] rotate-45' : i === 2 && menuOpen ? '-translate-y-[7px] -rotate-45' : 'transform-none'}`}
              />
            ))}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[#EEEEEE] bg-[#FFFFFF] py-[12px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="block px-[32px] py-[12px] text-[14px] font-[500] text-[#333333] no-underline border-b border-[#F5F5F5]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-[16px] px-[32px] py-[12px]">
            {(['UA', 'EN', 'CH'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setMenuOpen(false); }}
                className={`text-[13px] bg-transparent border-none cursor-pointer ${language === lang ? 'font-[700] text-[#7CB342]' : 'font-[400] text-[#888888]'}`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
