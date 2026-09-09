import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(leftColRef.current, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.4, delay: 0.1 }
    )
    .fromTo(rightColRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2 },
      '-=1.0'
    );

    if (boxRef.current) {
      gsap.to(boxRef.current, {
        y: -15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(boxRef.current, {
      rotateY: -25 + x * 35, 
      rotateX: -12 - y * 35, 
      duration: 0.6,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    if (!boxRef.current) return;
    gsap.to(boxRef.current, {
      rotateY: -25,
      rotateX: -12,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  const w = 380;
  const h = 280;
  const d = 280;

  const faceStyle = (width: number, height: number, transform: string, bg: string): React.CSSProperties => ({
    position: 'absolute',
    width: `${width}px`,
    height: `${height}px`,
    left: `${-width / 2}px`,
    top: `${-height / 2}px`,
    transform,
    background: bg,
    backfaceVisibility: 'hidden',
  });

  return (
    <section
      ref={heroRef}
      id="hero"
      className="w-full min-h-[calc(100vh-72px)] bg-[#FFFFFF] flex items-stretch border-b border-[#E5E5E5]"
    >
      <div
        className="max-w-[1600px] mx-auto w-full grid grid-cols-[1.2fr_1fr] border-x border-[#E5E5E5] max-[1024px]:grid-cols-1 max-[1024px]:border-x-0"
      >
        <div 
          ref={leftColRef}
          className="opacity-0 flex flex-col justify-center px-[80px] py-[80px] pl-[60px] border-r border-[#E5E5E5] max-[1024px]:p-[60px_24px_40px_24px] max-[1024px]:border-r-0 max-[1024px]:border-b"
        >
          <div className="flex items-center gap-[16px] mb-[40px]">
            <div className="w-[48px] h-[1px] bg-[#8DC63F]" />
            <span className="text-[12px] font-mono font-[700] tracking-[0.2em] text-[#8DC63F] uppercase">
              Мультимодальна логістика
            </span>
          </div>

          <h1 className="font-['Archivo',sans-serif] text-[clamp(60px,8vw,130px)] font-[900] leading-[0.9] tracking-[-0.03em] m-0 mb-[40px] text-[#0A0A0A] uppercase">
            Глобальний<br />
            Рух<span className="text-[#8DC63F]">.</span>
          </h1>

          <p className="text-[18px] text-[#555555] leading-[1.6] max-w-[520px] m-0 mb-[56px] font-[400] font-['Inter',sans-serif]">
            Логістична компанія «Клевер Тім» надає широкий спектр послуг з міжнародних перевезень. 
            Ми гарантуємо збереження вантажу та оптимальний розподіл ресурсів.
          </p>

          <div className="flex gap-[20px] flex-wrap">
            <button
              onClick={() => scrollTo('contacts')}
              className="text-[13px] font-[800] tracking-[0.05em] py-[20px] px-[48px] border-none cursor-pointer font-['Inter',sans-serif] uppercase bg-[#0A0A0A] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#8DC63F]"
            >
              Залишити заявку
            </button>

            <button
              onClick={() => scrollTo('about')}
              className="text-[13px] tracking-[0.05em] py-[18px] px-[48px] cursor-pointer font-['Inter',sans-serif] uppercase bg-transparent text-[#0A0A0A] border border-[#E5E5E5] transition-colors duration-200 hover:border-[#0A0A0A]"
            >
              Про компанію
            </button>
          </div>
        </div>

        <div 
          ref={rightColRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="opacity-0 flex items-center justify-center p-[60px] [perspective:1400px] cursor-grab active:cursor-grabbing min-h-[450px] max-[1024px]:p-[100px_24px]"
        >
          <div 
            ref={boxRef}
            className="relative w-[0px] h-[0px] [transform-style:preserve-3d] max-[1024px]:scale-75"
            style={{ transform: 'rotateX(-12deg) rotateY(-25deg)' }}
          >
            <div 
              style={{ ...faceStyle(w, h, `translateZ(${d/2}px)`, '#CFA87D') }}
              className="p-[24px] box-border flex flex-col justify-center shadow-[inset_0_0_40px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.05)]"
            >
               <div className="border-[3px] border-[#1A1A1A] p-[20px] text-center mb-[24px]">
                 <div className="font-['Georgia',serif] italic text-[38px] text-[#1A1A1A] font-[600]">
                   Clever Team
                 </div>
                 <div className="font-mono text-[11px] tracking-[0.25em] text-[#1A1A1A] mt-[8px] font-[700]">
                   MULTIMODAL LOGISTICS
                 </div>
               </div>
               <div className="flex justify-between font-mono text-[11px] text-[#1A1A1A] font-[700]">
                 <div>MODEL: CT-2024<br/>SERIAL NO: 08842-UA</div>
                 <div className="text-right">QTY: 1 UNIT<br/>GROSS WT: 24KG</div>
               </div>
            </div>

            <div style={{ ...faceStyle(w, h, `translateZ(${-d/2}px) rotateY(180deg)`, '#B78B5D') }} className="border border-[rgba(0,0,0,0.05)]" />

            <div style={{ ...faceStyle(d, h, `translateX(${w/2}px) rotateY(90deg)`, '#B78B5D') }} className="border border-[rgba(0,0,0,0.05)]">
              <div className="absolute top-[50px] left-[40px] w-[80px] h-[130px] bg-[#FFFFFF] rotate-[4deg] p-[8px] shadow-[1px_2px_4px_rgba(0,0,0,0.1)] flex flex-col">
                <div className="font-[900] text-[10px] mb-[6px] font-['Inter',sans-serif] text-[#000]">PRIORITY</div>
                <div className="w-full h-[2px] bg-[#E0E0E0] mb-[3px]"></div>
                <div className="w-[80%] h-[2px] bg-[#E0E0E0] mb-[3px]"></div>
                <div className="w-[90%] h-[2px] bg-[#E0E0E0] mb-[12px]"></div>
                <div className="w-full h-[35px] bg-[repeating-linear-gradient(90deg,#000,#000_2px,transparent_2px,transparent_4px,#000_4px,#000_6px,transparent_6px,transparent_8px,#000_8px,#000_9px,transparent_9px,transparent_11px)] mt-auto"></div>
              </div>
            </div>

            <div style={{ ...faceStyle(d, h, `translateX(${-w/2}px) rotateY(-90deg)`, '#B78B5D') }} className="border border-[rgba(0,0,0,0.05)]" />

            <div 
              style={{ ...faceStyle(w, d, `translateY(${-h/2}px) rotateX(90deg)`, '#E0BF93') }}
              className="shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] border border-[rgba(0,0,0,0.05)]"
            >
              <div className="absolute bottom-[24px] right-[24px] border-[3px] border-[#C44D4D] text-[#C44D4D] px-[12px] py-[6px] font-['Inter',sans-serif] font-[900] text-[20px] tracking-[2px] rotate-[-12deg] opacity-[0.85]">
                FRAGILE
              </div>
            </div>

            <div 
              style={{ ...faceStyle(w, d, `translateY(${h/2}px) rotateX(-90deg)`, '#946E47') }}
              className="shadow-[0_0_60px_20px_rgba(0,0,0,0.15)] border border-[rgba(0,0,0,0.05)]" 
            />

          </div>
        </div>
      </div>
    </section>
  );
}
