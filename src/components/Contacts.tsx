import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CONTACT } from '../data/constants';
import Dropdown from './ui/Dropdown';

interface FormState { name: string; phone: string; cargoType: string; route: string; }

function LeadForm() {
  const [form, setForm]     = useState<FormState>({ name: '', phone: '', cargoType: '', route: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent]     = useState(false);
  const [busy, setBusy]     = useState(false);
  const formRef             = useRef<HTMLFormElement>(null);
  const successRef          = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormState]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim() || form.name.length < 2)        errs.name = "Мінімум 2 символи";
    if (!/^[\d+\-()\s]{10,20}$/.test(form.phone))         errs.phone = "Невірний номер";
    if (!form.cargoType)                                   errs.cargoType = "Оберіть послугу";
    if (!form.route.trim())                                errs.route = "Вкажіть маршрут";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy || !validate()) return;
    setBusy(true);
    try {
      await new Promise<void>(res => setTimeout(res, 800));
      if (formRef.current) {
        gsap.to(formRef.current, { opacity: 0, y: -10, duration: 0.3, onComplete: () => setSent(true) });
      } else {
        setSent(true);
      }
    } finally { setBusy(false); }
  };

  useEffect(() => {
    if (sent && successRef.current)
      gsap.fromTo(successRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
  }, [sent]);

  if (sent) {
    return (
      <div ref={successRef} className="text-center py-[40px]">
        <div className="w-[52px] h-[52px] rounded-full border-2 border-[#7CB342] flex items-center justify-center mx-auto mb-[16px]">
          <span className="text-[#7CB342] text-[22px]">✓</span>
        </div>
        <h3 className="font-[700] text-[20px] text-[#1A1A1A] m-0 mb-[8px]">Заявку прийнято!</h3>
        <p className="text-[14px] text-[#666666] m-0">Менеджер зв'яжеться з вами протягом 2 годин.</p>
      </div>
    );
  }

  const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
    <div>
      <label className="block text-[13px] font-[600] text-[#444444] mb-[6px] tracking-[0.02em]">
        {label}
      </label>
      {children}
      {error && <p className="text-[#E53935] text-[11px] m-0 mt-[4px]">{error}</p>}
    </div>
  );

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate
      className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-[20px] items-start"
    >
      <Field label="Ваше ім'я" error={errors.name}>
        <input name="name" type="text" placeholder="Іван Іваненко" value={form.name} onChange={handleChange}
          className={`w-full bg-[#FAFAFA] border rounded-[4px] text-[#1A1A1A] font-inherit text-[14px] px-[14px] py-[11px] outline-none transition-colors duration-150 ease-emil focus:border-[#7CB342] ${errors.name ? 'border-[#E53935]' : 'border-[#DDDDDD]'}`}
        />
      </Field>

      <Field label="Телефон / WhatsApp" error={errors.phone}>
        <input name="phone" type="tel" placeholder="+38 (0__) ___ __ __" value={form.phone} onChange={handleChange}
          className={`w-full bg-[#FAFAFA] border rounded-[4px] text-[#1A1A1A] font-inherit text-[14px] px-[14px] py-[11px] outline-none transition-colors duration-150 ease-emil focus:border-[#7CB342] ${errors.phone ? 'border-[#E53935]' : 'border-[#DDDDDD]'}`}
        />
      </Field>

      <Field label="Послуга" error={errors.cargoType}>
        <Dropdown
          options={[
            { value: 'sea',          label: 'Морські перевезення' },
            { value: 'air',          label: 'Авіаперевезення' },
            { value: 'rail',         label: 'З/Д перевезення' },
            { value: 'road',         label: 'Автомобільні перевезення' },
            { value: 'consolidated', label: 'Збірний вантаж' },
            { value: 'relocation',   label: 'Переїзд в іншу країну' },
            { value: 'port',         label: 'Внутрішньопортове оформлення' },
            { value: 'customs',      label: 'Митне оформлення' },
          ]}
          value={form.cargoType}
          onChange={val => { setForm(p => ({ ...p, cargoType: val })); if (errors.cargoType) setErrors(p => ({ ...p, cargoType: '' })); }}
          placeholder="Оберіть послугу…"
          error={!!errors.cargoType}
        />
      </Field>

      <Field label="Маршрут" error={errors.route}>
        <input name="route" type="text" placeholder="Одеса → Китай" value={form.route} onChange={handleChange}
          className={`w-full bg-[#FAFAFA] border rounded-[4px] text-[#1A1A1A] font-inherit text-[14px] px-[14px] py-[11px] outline-none transition-colors duration-150 ease-emil focus:border-[#7CB342] ${errors.route ? 'border-[#E53935]' : 'border-[#DDDDDD]'}`}
        />
      </Field>

      <div className="col-span-full">
        <button type="submit" disabled={busy}
          className={`text-[#FFFFFF] font-[700] text-[13px] tracking-[0.06em] py-[12px] px-[32px] rounded-[4px] transition-[background-color,transform] duration-150 ease-emil font-inherit ${busy ? 'bg-[#A5CC7F] cursor-not-allowed' : 'bg-[#7CB342] hover:bg-[#558B2F] cursor-pointer active:scale-[0.97]'}`}
        >
          {busy ? 'НАДСИЛАЄМО…' : 'НАДІСЛАТИ ЗАЯВКУ →'}
        </button>
      </div>
    </form>
  );
}

export default function Contacts() {
  return (
    <section id="contacts" className="bg-[#F5F7F5] border-t border-[#DDDDDD]">
      <div className="max-w-[1200px] mx-auto px-[64px] py-[80px] max-[900px]:px-[24px] max-[900px]:py-[60px]">

        <div className="mb-[48px]">
          <h2 className="text-[clamp(24px,3vw,36px)] font-[800] text-[#1A1A1A] m-0 mb-[12px]">
            Наші Контакти
          </h2>
          <p className="text-[15px] text-[#666666] max-w-[540px] m-0">
            Зв'яжіться з нами — зробіть перший крок до плідного співробітництва.
          </p>
        </div>

        <div className="grid grid-cols-[1.2fr_1fr] max-[900px]:grid-cols-1 gap-[48px] items-stretch">
          
          <div className="bg-[#FFFFFF] border border-[#DDDDDD] rounded-[8px] px-[48px] py-[40px] max-[900px]:px-[24px] max-[900px]:py-[28px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] h-full flex flex-col justify-center">
            <div className="mb-[28px]">
              <h3 className="text-[22px] font-[700] text-[#1A1A1A] m-0 mb-[6px]">Розрахувати вартість</h3>
              <p className="text-[13px] text-[#888888] m-0">
                Заповніть форму — ми підберемо оптимальний маршрут та ціну.
              </p>
            </div>
            <LeadForm />
          </div>

          <div className="rounded-[8px] overflow-hidden border border-[#DDDDDD] shadow-[0_2px_8px_rgba(0,0,0,0.06)] h-full min-h-[400px]">
            <iframe
              src={CONTACT.mapsEmbed}
              width="100%" height="100%" loading="lazy"
              className="border-0 block"
              title="Google Maps — Clever Team"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
