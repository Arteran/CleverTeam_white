import { CONTACT } from '../data/constants';

export default function Vacancies() {
  return (
    <section
      id="vacancy"
      className="bg-[#8DC63F] py-[140px]"
    >
      <div className="max-w-[1400px] mx-auto px-[48px] flex justify-between items-center flex-wrap gap-[60px]">
        <div>
          <div className="flex items-center gap-[8px] mb-[32px]">
            <div className="w-[40px] h-[1px] bg-[#0A0A0A]" />
            <span className="text-[11px] font-mono font-[600] tracking-[0.15em] text-[#0A0A0A] uppercase">
              Приєднуйтесь до команди
            </span>
          </div>

          <h2 className="font-['Archivo',sans-serif] text-[clamp(50px,8vw,110px)] font-[900] text-[#0A0A0A] leading-[0.9] tracking-[-0.04em] m-0">
            ПРАЦЮЙ<br />З КРАЩИМИ.
          </h2>
        </div>

        <div>
          <a
            href={CONTACT.vacanciesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#FFFFFF] font-[800] font-['Inter',sans-serif] text-[13px] tracking-[0.05em] uppercase px-[40px] py-[18px] border-2 border-[#0A0A0A] no-underline transition-all duration-200 active:scale-[0.97]"
          >
            Усі Вакансії
          </a>
        </div>
      </div>
    </section>
  );
}
