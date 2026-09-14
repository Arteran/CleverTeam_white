import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '../data/constants';

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    if (!footerRef.current) return;
    const observer = new ResizeObserver(() => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    });
    observer.observe(footerRef.current);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const isCurtain = footerHeight > 0 && footerHeight < windowHeight;

  return (
    <>
      {isCurtain && (
        <div style={{ height: footerHeight, minHeight: footerHeight }} className="shrink-0" />
      )}

      <footer
        ref={footerRef}
        id="footer"
        style={{
          position: isCurtain ? 'fixed' : 'relative',
          bottom: isCurtain ? 0 : 'auto',
        }}
        className="left-0 w-full z-1 bg-[#0A0A0A] text-[#E0E0E0] pt-[80px] pb-[40px] px-[64px] border-t border-[rgba(141,198,63,0.2)]"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[64px]">
          <div className="grid grid-cols-[1.2fr_1fr_1.5fr] max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[64px]">
            
            <div>
              <div className="flex items-center gap-[10px] mb-[16px]">
                <div className="grid grid-cols-2 grid-rows-2 gap-[3px] w-[32px] h-[32px]">
                  <div className="rounded-tl-[50%] rounded-tr-[50%] rounded-br-[0] rounded-bl-[50%] bg-[#8DC63F]" />
                  <div className="rounded-tl-[50%] rounded-tr-[50%] rounded-br-[50%] rounded-bl-[0] bg-[#7CB342]" />
                  <div className="rounded-tl-[50%] rounded-tr-[0] rounded-br-[50%] rounded-bl-[50%] bg-[#AED581]" />
                  <div className="rounded-tl-[0] rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%] bg-[#7CB342]" />
                </div>
                <span className="font-[900] text-[18px] text-[#FFFFFF] tracking-[0.06em]">
                  CLEVER TEAM
                </span>
              </div>
              <p className="text-[14px] text-[#888888] m-0 mb-[24px] max-w-[280px] leading-[1.6]">
                Ваш надійний партнер у сфері міжнародної мультимодальної логістики.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-[700] text-[#8DC63F] uppercase tracking-[0.08em] m-0 mb-[20px]">
                Навігація
              </p>
              <div className="flex flex-col gap-[12px]">
                {[
                  { label: 'Про компанію', href: '#about'    },
                  { label: 'Послуги',      href: '#services' },
                  { label: 'Партнери',     href: '#partners' },
                  { label: 'Вакансії',     href: '#vacancy'  },
                  { label: 'Контакти',     href: '#contacts' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[14px] text-[#BBBBBB] hover:text-[#8DC63F] no-underline font-[500] transition-colors duration-200 w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-[32px] max-[1024px]:col-span-full">
              
              <div className="flex flex-col gap-[28px]">
                <div>
                  <p className="text-[11px] font-[700] text-[#8DC63F] uppercase tracking-[0.08em] m-0 mb-[8px]">
                    Зателефонуйте нам
                  </p>
                  {CONTACT.phones.map(p => (
                    <div key={p}>
                      <a href={`tel:${p.replace(/[^\d+]/g, '')}`}
                        className="text-[15px] text-[#FFFFFF] hover:text-[#8DC63F] no-underline font-[500] transition-colors duration-200"
                      >{p}</a>
                    </div>
                  ))}
                  <div className="text-[14px] text-[#666666] mt-[2px]">Факс: {CONTACT.fax}</div>
                </div>

                <div>
                  <p className="text-[11px] font-[700] text-[#8DC63F] uppercase tracking-[0.08em] m-0 mb-[8px]">
                    Електронна пошта
                  </p>
                  <a href={`mailto:${CONTACT.email}`}
                    className="text-[15px] text-[#FFFFFF] hover:text-[#8DC63F] no-underline font-[500] transition-colors duration-200"
                  >{CONTACT.email}</a>
                </div>
              </div>

              <div className="flex flex-col gap-[28px]">
                <div>
                  <p className="text-[11px] font-[700] text-[#8DC63F] uppercase tracking-[0.08em] m-0 mb-[8px]">
                    Адреса офісу
                  </p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.office)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-[14px] text-[#CCCCCC] hover:text-[#8DC63F] no-underline leading-[1.6] transition-colors duration-200"
                  >
                    {CONTACT.office}<br />
                    <span className="text-[#666666] text-[13px] group-hover:text-[#8DC63F]">{CONTACT.officeSub}</span>
                  </a>
                </div>

                <div>
                  <p className="text-[11px] font-[700] text-[#8DC63F] uppercase tracking-[0.08em] m-0 mb-[10px]">
                    Месенджери та соцмережі
                  </p>
                  <div className="flex gap-[8px] flex-wrap">
                    {[
                      { label: 'WhatsApp', short: 'WA',    href: CONTACT.whatsapp  },
                      { label: 'Viber',    short: 'Viber', href: CONTACT.viber     },
                      { label: 'Telegram', short: 'TG',    href: CONTACT.telegram  },
                      { label: 'Facebook', short: 'FB',    href: CONTACT.facebook  },
                      { label: 'Instagram',short: 'IG',    href: CONTACT.instagram },
                    ].map(s => (
                      <a key={s.short} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                        className="text-[12px] font-[600] text-[#BBBBBB] hover:text-[#8DC63F] border border-[#333333] hover:border-[#8DC63F] rounded-[4px] px-[12px] py-[5px] no-underline transition-all duration-200 bg-[rgba(255,255,255,0.02)] active:scale-[0.95]"
                      >{s.short}</a>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.1)]" />

          <div className="flex justify-between items-center flex-wrap gap-[12px]">
            <span className="text-[13px] text-[#666666]">
              © 2016–2024 Clever Team. Всі права захищені.
            </span>
            <a
              href="https://clever-team.com.ua"
              className="text-[12px] text-[#8DC63F] no-underline font-[600]"
            >
              clever-team.com.ua
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
