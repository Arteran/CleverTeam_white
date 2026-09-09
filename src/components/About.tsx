export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F9F9F9] py-[120px]"
    >
      <div 
        className="max-w-[1400px] mx-auto px-[48px] max-[600px]:px-[24px] grid grid-cols-[1.2fr_1fr] max-[1024px]:grid-cols-1 gap-[80px] max-[1024px]:gap-[60px] items-start"
      >
        <div>
          <h2 className="font-['Archivo',sans-serif] text-[clamp(32px,4vw,54px)] font-[800] text-[#0A0A0A] leading-[1.1] tracking-[-0.02em] normal-case">
            Ми відкриваємо{' '}
            <span className="text-[#8DC63F]">безмежні перспективи</span>{' '}
            для{' '}
            <span className="text-[#8DC63F]">розвитку Вашого бізнесу!</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-[40px]">
          <div>
            <div className="flex items-center gap-[8px] mb-[20px]">
              <div className="w-[24px] h-[1px] bg-[#8DC63F]" />
              <span className="text-[10px] font-mono font-[600] tracking-[0.15em] text-[#8DC63F] uppercase">
                Про нас
              </span>
            </div>
            <p className="text-[14px] text-[#888888] leading-[1.7] font-mono">
              Логістична компанія «Клевер Тім» надає широкий спектр послуг з міжнародних перевезень. Компанія стабільно розвивається і закріплює свої позиції на ринку логістичних послуг України.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-[8px] mb-[20px]">
              <div className="w-[24px] h-[1px] bg-[#8DC63F]" />
              <span className="text-[10px] font-mono font-[600] tracking-[0.15em] text-[#8DC63F] uppercase">
                Ресурси
              </span>
            </div>
            <p className="text-[14px] text-[#888888] leading-[1.7] font-mono">
              Ми маємо в своєму розпорядженні власний парк транспортної техніки, офіси, складські приміщення і штат професійних співробітників.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
