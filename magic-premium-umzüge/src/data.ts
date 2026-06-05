import { ServiceItem, FunnelOption, SizeOption, ProcessStep, GalleryItem, TestimonialItem, FaqItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'privat',
    title: 'Privatumzug',
    description: 'Sorgfältige Planung und diskrete Durchführung für Ihren Wohnungswechsel auf höchstem Niveau.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoFyhqM9zOsAUiox99rBgkuZC4UxY2MF3Oh9pk7gl2WFppNE9wOZXOx5e_-QH5iqutvSGD2T0wckLhWeQYjkYa9e29AVwjF1q63Cj5q3GDv_OhtVcnJmymtvKNowyQVGv5LiPcVgICgKeC2aroDV87YpQ6N-H0Qggu4rlYeRSJHRBLiLDCoHHuWm5f0KHC8H9Tjfh9SwCRm8hbmCEUuEVHbnv9Jcdg6cH0AqesJOAAaauXr8eOQ9jsyA6DWDkhnXOpXUi4_m4Bg',
    colSpan: 'md:col-span-3'
  },
  {
    id: 'firma',
    title: 'Firmenumzug',
    description: 'Minimale Ausfallzeiten durch präzise Taktung und IT-sicheren Transport.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPtgIgTNmJxTfWdTP9e7eFFYXVZPNpdGUTQ2fZZg6fBWyc4QdWZ0tD-pogRGMgsWzEwY8d4Kg-xGQhh-mt6zApaVG5zzGsZrMCw23Xf3JNpADMLP87qloDwYN2ZYrAj4x9ktp3VhfDfij4Rw8E6eQKqqVcgmrcjCYZDLpXiMTuq7-yZZBic5GAvF8ZHA1-ZHElvkLdM_PuAQTXw91DGAgM57zebvFGusRYmgF0W0__khStCawIIzEKsHjCSEIMBKmQdnuoIoVIRw',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'lager',
    title: 'Premium Einlagerung',
    description: 'Klimatisierte, hochsichere Depots für Ihr wertvolles Inventar. Flexibel und jederzeit zugänglich.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxeJLSczzJxAJWkfVdf2rvsTlDcSEST7XaKLBi6IK_F2W7YKhDgcdn_EEZZMErdYgPuiduV9CKLUuVRNeZPefusG5rbqB-JpX6ivG8rHnW4cYHS-NSbHeYoaj1RpWewomRw6YHAAYhuDeh895bOJJXzbonPKpYF2QAkYBZs8eovkIeCQ6PzKjWaiuffzkLdIpjK4buh-7aMXHQpfpaOGOnUmn59SpqUgyGj8kcZhlV2p3SVCM_UECKyWawsE9dloxIuKNfQ4HD-g',
    colSpan: 'md:col-span-5'
  }
];

export const SERVICE_FUNNEL_OPTIONS: FunnelOption[] = [
  {
    id: 'privat',
    label: 'Privatumzug',
    subtitle: 'Wohnung oder Haus',
    icon: 'Home',
    baseMultiplier: 1.0
  },
  {
    id: 'firma',
    label: 'Firmenumzug',
    subtitle: 'Büro oder Gewerbe',
    icon: 'Building2',
    baseMultiplier: 1.8
  },
  {
    id: 'lager',
    label: 'Lagerung',
    subtitle: 'Sicher & Klimatisiert',
    icon: 'Package',
    baseMultiplier: 0.6
  }
];

export const SIZE_FUNNEL_OPTIONS: SizeOption[] = [
  {
    id: 'small',
    label: '1-2 Zimmer',
    subtitle: 'Bis ca. 50 m²',
    multiplier: 1.0
  },
  {
    id: 'medium',
    label: '3-4 Zimmer',
    subtitle: '50 - 100 m²',
    multiplier: 1.8
  },
  {
    id: 'large',
    label: '5+ Zimmer / Haus',
    subtitle: 'Über 100 m²',
    multiplier: 2.8
  },
  {
    id: 'commercial',
    label: 'Gewerbefläche',
    subtitle: 'Individuelle Planung',
    multiplier: 4.0
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Kostenlose Besichtigung & Beratung',
    description: 'Wir verschaffen uns vor Ort oder virtuell einen Überblick über das Volumen und besprechen Ihre individuellen Wünsche. Sie erhalten ein transparentes Festpreisangebot.'
  },
  {
    number: '02',
    title: 'Planung & Materiallieferung',
    description: 'Wir erstellen einen detaillierten Ablaufplan und liefern auf Wunsch vorab hochwertiges Verpackungsmaterial, damit Sie in Ruhe packen können.'
  },
  {
    number: '03',
    title: 'Der Umzugstag',
    description: 'Unser geschultes Team übernimmt den sicheren Abbau, die sorgfältige Verladung und den Transport. Lehnen Sie sich entspannt zurück.'
  },
  {
    number: '04',
    title: 'Aufbau & Abschluss',
    description: 'Am Zielort montieren wir Ihre Möbel fachgerecht und positionieren alles nach Ihren Vorgaben. Wir hinterlassen Ihr neues Heim bezugsfertig.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBE2FoywAzGqFZzfUBqCxzFvL-Xk8ypQ2P2iXgf6W-ZCsqcvY5iF7QWWqr_hktgs1uF2kFJkKtqvPPlVOFBOWnDeqcaEsif18fxKXbXapvmNGq1zhclw6oRC3y8pMOAiAEqqQr-bF7Xl1NS8msPs55tAEXLlj3l0zoA1MUsM-MEUhGq-sCs-qxTsWcyLKuOz7L19k5XmWP5ln6dVUfA1Aq8bHX0TU0AwqqA8qcEt6MKYtDZ8CzyH5ej0zeJZNLUeUWWHwovVRLnA',
    title: 'Dienstleistungsfahrzeuge am Morgen'
  },
  {
    id: 'g2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMc4cATjdqDWWd_Cm8v7W73RJcgdrh4g7XgRhuWsA51-KaJqLHE0TUl_RZX1hGZaaD0IjtN5wRMwNrjID_prE8qJYnF_IaQzUkBS43P0zBuVnAmAo-eEluALPhtaMtUN6JKCOaRB1hFMtc_hV2iB-WishmwQVyo-Rrbs7vIKj9VSpFWPg9JHKOVFGxfzNLngwS1tAM1iqB3uADNM5vUXE9hnQuDlfH0qzQR_B5PxLrzydVcwOFsHG31Wak6mel9Ku6XJCnkikrbQ',
    title: 'Perfekt gesicherter Wohnungswechsel'
  },
  {
    id: 'g3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWxeg28yBuU5PBd67Vpaj6UpB52JjQ3KVFkhG-YoQjFHGBzFbTi3EE37YbOpm28kC0QVSwrepJ0Ki9vMK5cLddNRpEIiuMKfvLCN8sdYfzVSirsVcds92T0KMmWxshJG9babnd2Ysktl7MrLhChs3Zmav4TGIq-nC8jJeOJ4GzXOxWjXkTVpXWXnkXReSv7ClWr_UVRe0e205wwtHe9TvaSy_-gP1pxjsFhdq4YQjTi5-EaON4N9JuW7XoTbY-vTurZLndxKxvlg',
    title: 'Premium Lagerhäuser & Depots'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    text: '"Ein absolut reibungsloser Ablauf. Das Team war pünktlich, extrem vorsichtig mit unseren Antiquitäten und sehr freundlich. Besser geht es nicht."',
    name: 'Dr. Anja Becker',
    role: 'Privatumzug, München',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0p-ytJFs0yUKxTiSKI5ICycdQCvZjZjXCBiwPrz4nLJffJfU22OY0ovxAzODVf8f9n0Rym-DLesLj3k938aA1ejPc-6E5v5-0861DEeWXfhpj7OXHL6Yc4oR2qLKi_cF4P0uILbzQtIa_7MuN9GgB2bHs7Ufa4sGEvy819M_GT7s_6dEP3gLRy7vn8EcQGQQl77wdGbRQVtPVwBXeXBplbHug7EVXDrUorrLPwwk0oOWcl9fXtcGd4T0oTQv6-5OTVSC3urGGpg',
    rating: 5
  },
  {
    id: 't2',
    text: '"Unser Firmenumzug mit 50 Arbeitsplätzen wurde über das Wochenende perfekt abgewickelt. Am Montag konnten alle sofort weiterarbeiten. Absolut professionell!"',
    name: 'Thomas Wagner',
    role: 'CEO, Tech Solutions GmbH',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClcL1LhGv2nQ_mJp5TLIhFOBGYWotPwxrr6wCqbr3Hsf-Ag3GU7NLtaJxicHO3gqrcnkqWS1m00VR1VGKGQ7PBJCYnI17XSI-3C2qdoMJkyqikQ5ldDfHZSsO6w_HL0uQath7TlH_jzSgUTC2P5NZgYGLsU-Vh0sirdOfxBGFgP44ZM1RHnegRsp20jjpxRyFBdQXCfL0lYA-Cc9El7FmQso6gMtJ5JSJlX_Py0W6s-J4vMkHreiY87i4SOfO0QETXVJ77dDrjgQ',
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Wie lange im Voraus sollte ich buchen?',
    answer: 'Wir empfehlen eine Buchung ca. 4-6 Wochen vor dem gewünschten Termin, um Ihren Wunschtermin garantieren zu können. Bei kurzfristigen Anfragen versuchen wir jedoch immer, eine flexible Lösung zu finden.'
  },
  {
    id: 'f2',
    question: 'Sind meine Möbel versichert?',
    answer: 'Ja, Ihr Umzugsgut ist bei uns standardmäßig vollumfänglich transportversichert. Für besonders wertvolle Gegenstände, Gemälde oder Antiquitäten bieten wir auf Wunsch eine erweiterte Kunst- und Wertversicherung an.'
  },
  {
    id: 'f3',
    question: 'Stellen Sie Verpackungsmaterial?',
    answer: 'Selbstverständlich. Wir liefern Ihnen hochwertige Umzugskartons, Kleiderboxen für hängende Kleidung, Seidenpapier und Luftpolsterfolie vorab oder bringen alles am Umzugstag mit – je nachdem, ob Sie selbst packen oder unseren Premium-Einpackservice nutzen.'
  },
  {
    id: 'f4',
    question: 'Bieten Sie auch einen Montageservice an?',
    answer: 'Ja, unsere erfahrenen Schreiner und Monteure übernehmen den fachgerechten Ab- und Aufbau Ihrer Möbel, einschließlich komplexer Schranksysteme, Regalkonstruktionen oder Küchenmontagen.'
  },
  {
    id: 'f5',
    question: 'Was kostet ein Umzug im Durchschnitt?',
    answer: 'Die Kosten variieren je nach Volumen, Transportdistanz und gewünschten Zusatzleistungen (z. B. Einpackservice, Montage). Nutzen Sie unseren interaktiven Angebotsrechner oben oder fordern Sie ein kostenloses Festpreisangebot an.'
  }
];
