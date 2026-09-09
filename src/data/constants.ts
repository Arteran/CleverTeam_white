export const COLORS = {
  bgBase:       '#060E08',
  bgSurface:    '#111714',
  bgElevated:   '#1C2220',
  bgGreen:      '#183A28',
  bgDeepGreen:  '#0F2318',
  bgNav:        '#0D1410',
  signalGreen:  '#3EBF72',
  forestGreen:  '#2E6B45',
  lightGreen:   '#A8D5B5',
  mutedGreen:   '#4A5E54',
  dimGreen:     '#2A3E32',
  textPrimary:  '#F8FAF9',
  textSecondary:'#9BA89F',
  textMuted:    '#4A5E54',
  border:       '#1E2E26',
} as const;

export interface Service {
  id: number;
  slug: string;
  number: string;
  name: string;
  nameEn: string;
  description: string;
  href: string;
}

export const SERVICES: Service[] = [
  { id:1, slug:'sea',         number:'01', name:'Морські перевезення',           nameEn:'Sea Freight',            description:'Контейнерні та насипні вантажі, FCL/LCL, будь-які порти світу.',          href:'/morskaya-perevozka' },
  { id:2, slug:'air',         number:'02', name:'Авіаперевезення',               nameEn:'Air Freight',            description:'Термінові та цінні вантажі, прямі та консолідовані рейси.',             href:'/aviaperevozka' },
  { id:3, slug:'rail',        number:'03', name:'З/Д перевезення',               nameEn:'Rail Freight',           description:'Контейнерні потяги, маршрути Європа — Азія.',                           href:'/zh-d-perevozka' },
  { id:4, slug:'road',        number:'04', name:'Автомобільні перевезення',      nameEn:'Road Freight',           description:'Повне та часткове завантаження, Україна та ЄС.',                        href:'/avtomobilnaya-perevozka' },
  { id:5, slug:'consolidated',number:'05', name:'Перевезення збірних вантажів',  nameEn:'Consolidated Cargo',     description:'Оптимізація витрат для малих та середніх партій.',                      href:'/perevozka-sbornykh-gruzov' },
  { id:6, slug:'relocation',  number:'06', name:'Переїзд в іншу країну',         nameEn:'International Relocation',description:'Повний цикл переїзду — від пакування до розміщення.',                href:'/pereezd-v-druguyu-stranu' },
  { id:7, slug:'port',        number:'07', name:'Внутрішньопортове оформлення',  nameEn:'In-Port Handling',       description:'Повний сервіс всередині портової зони Одеси.',                          href:'/vnutriportovoe-oformlenie' },
  { id:8, slug:'customs',     number:'08', name:'Митне оформлення',              nameEn:'Customs Clearance',      description:'Повний цикл митного супроводу, мінімізація затримок.',                  href:'/tamozhennoe-oformlenie' },
];

export interface Stat {
  value: number;
  label: string;
  descriptor: string;
}

export const STATS: Stat[] = [
  { value: 727,   label: 'КЛІЄНТІВ',    descriptor: 'обрали нас партнером' },
  { value: 32850, label: 'КОНТЕЙНЕРІВ', descriptor: 'перевезено з Одеси' },
  { value: 8535,  label: 'ВАНТАЖІВ',    descriptor: 'розмитнено без затримок' },
];

export const PARTNERS = [
  'АЛЬЦЕСТ','FACKELMANN','GREIF','HYSON','TARLTON','АВ МЕТАЛ ГРУП',
  'MASTERPLAST','ОЛІЯР','ВЕНА','VENTS','ELECTRUM','Можливо Ви?',
];

export const CONTACT = {
  office:      'Одеса, 65014, вул. Маразлієвська 1/20, офіс 418',
  officeSub:   'Бізнес центр «Шевченківський»',
  phones:      ['+38 (048) 738 01 21', '+38 (0482) 33 01 21'],
  fax:         '+38 (0482) 33 01 22',
  email:       'office@clever-team.com.ua',
  whatsapp:    'https://api.whatsapp.com/send?phone=380676542542',
  viber:       'viber://chat?number=+380676542542',
  telegram:    'tg://resolve?domain=CleverTeam_Od',
  facebook:    'https://www.facebook.com/clever.team.ua/',
  instagram:   'https://www.instagram.com/cleverteamukraine/',
  vacanciesUrl:'https://www.work.ua/jobs/by-company/392933/',
  mapsEmbed:   'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1373.7073604223888!2d30.7515876!3d46.4800999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631754ba81f99%3A0x78c2678f498ca193!2z0JrQu9C10LLQtdGAINCi0LjQvCDQntCe0J4!5e0!3m2!1sua!2sua!4v1695307680164!5m2!1sua!2sua',
} as const;
