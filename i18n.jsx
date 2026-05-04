// i18n dictionary — RU / EN / UZ
const I18N = {
  ru: {
    nav: { work: "Работы", services: "Услуги", manifesto: "Манифест", contact: "Контакт" },
    hero: {
      eyebrow: "",
      title1: "ИНТЕРФЕЙСЫ,",
      title2: "КОТОРЫЕ",
      title3: "ОТГРУЖАЮТСЯ",
      sub: "Мы строим сайты, SaaS-платформы, ботов и интеграции для бизнесов, которые устали смотреть на чужой PSD-инфантилизм. Без шаблонов. С инженерией.",
      cta: "Начать проект",
      cta2: "Смотреть кейсы",
      label1: "Готов к продакшену",
      label2: "Сборка под ключ",
      label3: "Edge / SSR / Static",
    },
    marquee: ["WEB DEVELOPMENT", "SAAS PLATFORMS", "AI BOTS", "INTEGRATIONS", "DESIGN SYSTEMS", "MOTION", "INFRASTRUCTURE"],
    services: {
      eyebrow: "Что мы делаем",
      title: "Пять направлений.",
      title2: "Один инженерный стандарт.",
      items: [
        { num:"01", name:"Сайты", desc:"Лендинги, корпоративные сайты, e-commerce. Pixel-perfect, 95+ Lighthouse, инженерный SEO.", tags:["Next.js","Astro","Shopify"] },
        { num:"02", name:"SaaS платформы", desc:"Полноценные продукты с авторизацией, биллингом, дашбордами, аналитикой и админкой. От MVP до Series A.", tags:["TypeScript","Postgres","Stripe"] },
        { num:"03", name:"Боты", desc:"Telegram-боты для продаж, поддержки, аналитики, AI-ассистенты. Подключаем GPT, Claude, локальные модели.", tags:["Telegram","OpenAI","n8n"] },
        { num:"04", name:"Интеграции", desc:"AmoCRM, Bitrix, 1С, Stripe, Webhook-цепочки, автоматизации между сервисами. Чтобы всё работало само.", tags:["REST","GraphQL","Zapier"] },
        { num:"05", name:"AI-автоматизация", desc:"Голосовые и текстовые AI-агенты для поддержки, продаж и телефонии. Автоматическая квалификация лидов, суммаризация звонков, интеллектуальная маршрутизация обращений — без участия оператора.", tags:["LLM","RAG","VoIP"] },
      ]
    },
    manifesto: {
      eyebrow: "Манифест",
      lines: [
        "МЫ НЕ", "ДЕЛАЕМ", "САЙТЫ.",
        "МЫ", "СТРОИМ", "ИНТЕРФЕЙСЫ,",
        "КОТОРЫЕ", "ЗАРАБАТЫВАЮТ."
      ],
      body: "Каждый кейс — уникальный подход и уникальная инженерия. Мы не копируем и не повторяемся. Стремимся к техническому совершенству, но с одной целью — чтобы интерфейс продавал, конвертил и работал на бизнес."
    },
    cases: {
      eyebrow: "Избранные работы",
      title: "Свежие отгрузки",
      view: "Открыть кейс",
      items: [
        { tag:"SAAS", year:"2026", name:"FleetOps", brief:"Дашборд для логистических парков. Реальный тайминг, маршрутизация, биллинг.", metric:"+38% удержание" },
        { tag:"WEB", year:"2026", name:"Korium Capital", brief:"Сайт инвест-фонда. Тёмная типографика, motion-driven сторителлинг.", metric:"$12M raised" },
        { tag:"BOT", year:"2025", name:"Asal AI", brief:"Telegram-ассистент для аптечной сети — рецепты, заказы, склады.", metric:"230k MAU" },
        { tag:"SAAS", year:"2025", name:"Brushwork", brief:"AI-платформа для архитектурных рендеров. Очередь, кредиты, S3.", metric:"110k рендеров/мес" },
      ]
    },
    testimonials: {
      eyebrow: "Слово клиентов",
      items: [
        { quote:"Сделали MVP за шесть недель. Через два месяца мы закрыли seed-раунд. Aurelyn — не подрядчик, это часть команды.", author:"Тимур А.", role:"CEO, FleetOps" },
        { quote:"Я видел десятки агентств. Никто не пишет код такого качества за такие сроки. Сайт грузится 0.4 секунды.", author:"Алина К.", role:"CMO, Korium" },
        { quote:"Бот, который реально окупился. Никаких \"а можно ещё фичу\" — просто работает.", author:"Бекзод Р.", role:"Founder, Asal" },
      ]
    },
    contact: {
      eyebrow: "Готовы начать?",
      title1: "ПРИШЛИТЕ",
      title2: "ЗАДАЧУ —",
      title3: "ОТВЕТИМ ЗА 24 ЧАСА.",
      name: "Ваше имя", email: "Email или Telegram", brief: "Расскажите о задаче", budget: "Бюджет", send: "Отправить заявку",
      budgets: ["до $5k","$5–15k","$15–50k","$50k+","Нужна оценка"],
      direct: "Или напрямую:"
    },
    footer: {
      tag:"Сделано с инженерной аккуратностью.",
      rights:"© 2026 Aurelyn. Все права защищены.",
      sitemap:"Карта",
      legal:"Юр.информация"
    }
  },
  en: {
    nav: { work: "Work", services: "Services", manifesto: "Manifesto", contact: "Contact" },
    hero: {
      eyebrow: "Studio / Frontend engineering / 2026",
      title1: "INTERFACES",
      title2: "THAT",
      title3: "SHIP.",
      sub: "We build websites, SaaS platforms, bots and integrations for businesses tired of generic templates. No fluff. Just engineering.",
      cta: "Start a project",
      cta2: "View cases",
      label1: "Production-ready",
      label2: "End-to-end build",
      label3: "Edge / SSR / Static",
    },
    marquee: ["WEB DEVELOPMENT", "SAAS PLATFORMS", "AI BOTS", "INTEGRATIONS", "DESIGN SYSTEMS", "MOTION", "INFRASTRUCTURE"],
    services: {
      eyebrow: "What we do",
      title: "Five disciplines.",
      title2: "One engineering bar.",
      items: [
        { num:"01", name:"Websites", desc:"Landings, corporate sites, e-commerce. Pixel-perfect, 95+ Lighthouse, engineered SEO.", tags:["Next.js","Astro","Shopify"] },
        { num:"02", name:"SaaS platforms", desc:"Full products: auth, billing, dashboards, analytics, admin. From MVP to Series A.", tags:["TypeScript","Postgres","Stripe"] },
        { num:"03", name:"Bots", desc:"Telegram bots for sales, support, analytics, AI assistants. GPT, Claude, local models.", tags:["Telegram","OpenAI","n8n"] },
        { num:"04", name:"Integrations", desc:"AmoCRM, Bitrix, 1C, Stripe, webhook chains, cross-service automations. Make it run itself.", tags:["REST","GraphQL","Zapier"] },
        { num:"05", name:"AI Automation", desc:"Voice and text AI agents for support, sales and telephony. Automated lead qualification, call summarization, intelligent ticket routing — no human operator needed.", tags:["LLM","RAG","VoIP"] },
      ]
    },
    manifesto: {
      eyebrow: "Manifesto",
      lines: [
        "WE DON'T", "BUILD", "WEBSITES.",
        "WE", "ENGINEER", "INTERFACES",
        "THAT", "MAKE", "MONEY."
      ],
      body: "Every case demands a unique approach and bespoke engineering. We don't copy and we don't repeat ourselves. We pursue technical perfection with one goal — the interface must sell, convert, and work for the business."
    },
    cases: {
      eyebrow: "Selected work",
      title: "Recent shipments",
      view: "Open case",
      items: [
        { tag:"SAAS", year:"2026", name:"FleetOps", brief:"Dashboard for logistics fleets. Real-time, routing, billing.", metric:"+38% retention" },
        { tag:"WEB", year:"2026", name:"Korium Capital", brief:"Investment fund website. Dark type, motion-driven storytelling.", metric:"$12M raised" },
        { tag:"BOT", year:"2025", name:"Asal AI", brief:"Telegram assistant for a pharmacy chain — prescriptions, orders, stock.", metric:"230k MAU" },
        { tag:"SAAS", year:"2025", name:"Brushwork", brief:"AI platform for architectural renders. Queue, credits, S3.", metric:"110k renders/mo" },
      ]
    },
    testimonials: {
      eyebrow: "What clients say",
      items: [
        { quote:"They shipped our MVP in six weeks. Two months later we closed our seed round. Aurelyn isn't a vendor — they're our team.", author:"Timur A.", role:"CEO, FleetOps" },
        { quote:"I've seen dozens of agencies. Nobody writes code this clean at this pace. Our site loads in 400ms.", author:"Alina K.", role:"CMO, Korium" },
        { quote:"A bot that actually paid for itself. No endless feature creep — it just works.", author:"Bekzod R.", role:"Founder, Asal" },
      ]
    },
    contact: {
      eyebrow: "Ready to start?",
      title1: "SEND THE",
      title2: "BRIEF —",
      title3: "WE REPLY IN 24 HOURS.",
      name: "Your name", email: "Email or Telegram", brief: "Tell us about the project", budget: "Budget", send: "Send brief",
      budgets: ["under $5k","$5–15k","$15–50k","$50k+","Need estimate"],
      direct: "Or directly:"
    },
    footer: {
      tag:"Built with engineering rigor.",
      rights:"© 2026 Aurelyn. All rights reserved.",
      sitemap:"Sitemap",
      legal:"Legal"
    }
  },
  uz: {
    nav: { work: "Ishlar", services: "Xizmatlar", manifesto: "Manifest", contact: "Aloqa" },
    hero: {
      eyebrow: "Studiya / Frontend-injineriya / 2026",
      title1: "ISHLAYDIGAN",
      title2: "INTERFEYSLAR.",
      title3: "TAYYOR MAHSULOT.",
      sub: "Biz biznes uchun saytlar, SaaS platformalar, botlar va integratsiyalarni yaratamiz. Shablon emas — injineriya.",
      cta: "Loyihani boshlash",
      cta2: "Keyslarni ko'rish",
      label1: "Production-ready",
      label2: "Kalit topshirildi",
      label3: "Edge / SSR / Static",
    },
    marquee: ["VEB ISHLAB CHIQISH", "SAAS PLATFORMALAR", "AI BOTLAR", "INTEGRATSIYA", "DIZAYN TIZIMI", "MOTION", "INFRASTRUKTURA"],
    services: {
      eyebrow: "Biz nima qilamiz",
      title: "Beshta yo'nalish.",
      title2: "Bitta injineriya darajasi.",
      items: [
        { num:"01", name:"Saytlar", desc:"Lendinglar, korporativ saytlar, e-commerce. Pixel-perfect, 95+ Lighthouse, injinerlik SEO.", tags:["Next.js","Astro","Shopify"] },
        { num:"02", name:"SaaS platformalar", desc:"To'liq mahsulotlar: avtorizatsiya, billing, dashboard, analytics, admin. MVP'dan Series A'gacha.", tags:["TypeScript","Postgres","Stripe"] },
        { num:"03", name:"Botlar", desc:"Sotuv, qo'llab-quvvatlash, tahlil uchun Telegram-botlar va AI yordamchilar. GPT, Claude, lokal modellar.", tags:["Telegram","OpenAI","n8n"] },
        { num:"04", name:"Integratsiyalar", desc:"AmoCRM, Bitrix, 1C, Stripe, webhook'lar, avtomatizatsiya. Hammasi o'zi ishlasin.", tags:["REST","GraphQL","Zapier"] },
        { num:"05", name:"AI-avtomatizatsiya", desc:"Qo'llab-quvvatlash, sotuv va telefoniya uchun ovozli va matnli AI-agentlar. Lidlarni avtomatik kvalifikatsiya qilish, qo'ng'iroqlarni umumlashtirish, so'rovlarni intellektual yo'naltirish.", tags:["LLM","RAG","VoIP"] },
      ]
    },
    manifesto: {
      eyebrow: "Manifest",
      lines: [
        "BIZ", "SAYT", "QURMAYMIZ.",
        "BIZ", "PUL TOPADIGAN", "INTERFEYS",
        "ISHLAB", "CHIQARAMIZ.", ""
      ],
      body: "Har bir keys — noyob yondashuv va noyob injineriya. Biz nusxa ko'chirmaymiz va takrorlanmaymiz. Texnik mukammallikka intilamiz, lekin bitta maqsad bilan — interfeys sotsin, konvertatsiya qilsin va biznes uchun ishlasin."
    },
    cases: {
      eyebrow: "Tanlangan ishlar",
      title: "So'nggi loyihalar",
      view: "Keysni ochish",
      items: [
        { tag:"SAAS", year:"2026", name:"FleetOps", brief:"Logistika parklari uchun dashboard. Real vaqt, marshrutlash, billing.", metric:"+38% retention" },
        { tag:"WEB", year:"2026", name:"Korium Capital", brief:"Investitsiya fondi sayti. Qora tipografika, motion-storytelling.", metric:"$12M jalb qilindi" },
        { tag:"BOT", year:"2025", name:"Asal AI", brief:"Dorixonalar tarmog'i uchun Telegram yordamchi — retseptlar, buyurtmalar, ombor.", metric:"230k MAU" },
        { tag:"SAAS", year:"2025", name:"Brushwork", brief:"Arxitektura renderlari uchun AI platforma. Navbat, kreditlar, S3.", metric:"110k render/oy" },
      ]
    },
    testimonials: {
      eyebrow: "Mijozlar fikri",
      items: [
        { quote:"MVP'ni olti haftada topshirishdi. Ikki oy o'tib seed-raundni yopdik. Aurelyn pudratchi emas — bizning jamoamiz.", author:"Timur A.", role:"CEO, FleetOps" },
        { quote:"O'nlab agentlikni ko'rganman. Hech kim bunday darajada va tezlikda kod yozmaydi. Sayt 400ms'da yuklanadi.", author:"Alina K.", role:"CMO, Korium" },
        { quote:"O'zini-o'zi qoplagan bot. Cheksiz \"yana bir feature\" yo'q — shunchaki ishlaydi.", author:"Bekzod R.", role:"Founder, Asal" },
      ]
    },
    contact: {
      eyebrow: "Boshlashga tayyormisiz?",
      title1: "BRIEF",
      title2: "YUBORING —",
      title3: "24 SOATDA JAVOB BERAMIZ.",
      name: "Ismingiz", email: "Email yoki Telegram", brief: "Loyiha haqida yozing", budget: "Byudjet", send: "Yuborish",
      budgets: ["$5k gacha","$5–15k","$15–50k","$50k+","Baholash kerak"],
      direct: "Yoki to'g'ridan-to'g'ri:"
    },
    footer: {
      tag:"Injinerlik aniqligi bilan yasaldi.",
      rights:"© 2026 Aurelyn. Barcha interfeyslar himoyalangan.",
      sitemap:"Sayt xaritasi",
      legal:"Yuridik"
    }
  }
};

window.I18N = I18N;
