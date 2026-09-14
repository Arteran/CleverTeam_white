import type { RefObject } from 'react';
import { STATS } from '../data/constants';
import { useScrollCounter } from '../hooks/useScrollCounter';

export function InteractiveStats() {
  const [wrapRef1, displayRef1] = useScrollCounter(STATS[0].value, {
    duration: 2.2,
    format: (n) => Math.round(n).toString(),
  });
  const [wrapRef2, displayRef2] = useScrollCounter(32.8, {
    duration: 2.6,
    format: (n) => n.toFixed(1),
  });
  const [wrapRef3, displayRef3] = useScrollCounter(STATS[2].value, {
    duration: 2.4,
    format: (n) => Math.round(n).toString(),
  });

  return (
    <section className="bg-[#0C100C] px-[48px] py-[100px] border-t border-[#1A221A]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 max-[900px]:grid-cols-1 max-[900px]:gap-[60px]">
        <div
          ref={wrapRef1 as RefObject<HTMLDivElement | null>}
          className="px-[40px] border-r border-[#1A221A] max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:px-0 max-[900px]:pb-[40px]"
        >
          <div className="flex items-baseline">
            <span
              ref={displayRef1 as RefObject<HTMLSpanElement | null>}
              className="font-['Archivo',sans-serif] text-[clamp(60px,8vw,120px)] font-[500] text-[#8DC63F] leading-[1] tracking-[-0.04em]"
            >
              0
            </span>
            <span className="text-[clamp(30px,4vw,60px)] font-[500] text-[#8DC63F]">+</span>
          </div>
          <p className="m-0 mt-[24px] text-[15px] font-['Inter',sans-serif] text-[#E0E0E0]">
            Клієнтів вибрало нас
          </p>
        </div>

        <div
          ref={wrapRef2 as RefObject<HTMLDivElement | null>}
          className="px-[40px] border-r border-[#1A221A] max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:px-0 max-[900px]:pb-[40px]"
        >
          <div className="flex items-baseline">
            <span
              ref={displayRef2 as RefObject<HTMLSpanElement | null>}
              className="font-['Archivo',sans-serif] text-[clamp(60px,8vw,120px)] font-[500] text-[#8DC63F] leading-[1] tracking-[-0.04em]"
            >
              0
            </span>
            <span className="text-[clamp(40px,5vw,80px)] font-[500] text-[#8DC63F] ml-[4px]">k</span>
          </div>
          <p className="m-0 mt-[24px] text-[15px] font-['Inter',sans-serif] text-[#E0E0E0]">
            Перевезених контейнерів
          </p>
        </div>

        <div
          ref={wrapRef3 as RefObject<HTMLDivElement | null>}
          className="px-[40px] max-[900px]:px-0"
        >
          <div className="flex items-baseline">
            <span
              ref={displayRef3 as RefObject<HTMLSpanElement | null>}
              className="font-['Archivo',sans-serif] text-[clamp(60px,8vw,120px)] font-[500] text-[#8DC63F] leading-[1] tracking-[-0.04em]"
            >
              0
            </span>
            <span className="text-[clamp(30px,4vw,60px)] font-[500] text-[#8DC63F]">+</span>
          </div>
          <p className="m-0 mt-[24px] text-[15px] font-['Inter',sans-serif] text-[#E0E0E0]">
            Вантажів розмитнено
          </p>
        </div>
      </div>
    </section>
  );
}
