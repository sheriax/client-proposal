/* Centralized configuration */
const CONFIG = {
  pricing: {
    dynamic: [
      {
        service: 'UI/UX Design & Prototyping',
        description:
          'Complete visual system, wireframes, prototype (dark blue aesthetic).',
        amount: 25000,
      },
      {
        service: 'Frontend Website Development',
        description:
          'Next.js + Tailwind; video/carousel hero, dynamic templates, responsive.',
        amount: 75000,
      },
      {
        service: 'Sanity.io CMS Integration',
        description:
          'Backend setup, schemas (services, gallery, pages), training.',
        amount: 45000,
      },
      {
        service: 'Google Maps Integration',
        description: 'Embedded map on Contact page.',
        amount: 7000,
      },
      {
        service: 'Resend Email Integration',
        description:
          'Secure API integration, templates, success/error handling.',
        amount: 10000,
      },
      {
        service: 'Project Management & QA',
        description:
          'Oversight, cross-browser testing, performance optimization.',
        amount: 18000,
      },
    ],
    static: [
      {
        service: 'UI/UX Design & Prototyping',
        description: 'Identical to dynamic option.',
        amount: 25000,
      },
      {
        service: 'Static Website Development',
        description: 'All pages/components; content hard-coded.',
        amount: 60000,
      },
      {
        service: 'Third-Party Integrations',
        description: 'Google Maps + contact form via serverless function.',
        amount: 15000,
      },
      {
        service: 'Project Management & QA',
        description: 'Oversight, communication, and testing.',
        amount: 15000,
      },
    ],
  },
  contact: {
    email: 'contact@sheriax.com',
    phone: '+91 7338923502',
    website: 'https://sheriax.com',
  },
  meta: {
    company: 'Solar Technical Company (K.S.A.)',
    proposalId: 'WDP-2025-0911-ST-HA',
    date: '2025/09/11',
    validity: '30 days',
  },
};

/* Utilities */
const formatINR = n =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n);
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* Populate dynamic content */
function populateMeta() {
  const { company, proposalId, date, validity } = CONFIG.meta;
  $('#companyName').textContent = company;
  $('#companyNameMobile').textContent = company;
  $('#proposalId').textContent = proposalId;
  $('#proposalIdBadge').textContent = proposalId;
  $('#proposalDate').textContent = date;
  $('#proposalDateBadge').textContent = date;
  $('#proposalValidity').textContent = validity;
  $('#year').textContent = new Date().getFullYear();

  $('#contactEmail').textContent = CONFIG.contact.email;
  $('#contactEmail').href = `mailto:${CONFIG.contact.email}`;
  $('#contactPhone').textContent = CONFIG.contact.phone;
  $('#contactPhone').href = `tel:${CONFIG.contact.phone.replace(/\s+/g, '')}`;
  $('#contactWebsite').textContent = CONFIG.contact.website
    .replace(/\s+/g, '')
    .replace(/^https?:\/\//, '');
  $('#contactWebsite').href = CONFIG.contact.website.trim();
}

function buildPricingTables() {
  const dynTbody = $('#dynamicTable');
  const staTbody = $('#staticTable');
  dynTbody.innerHTML = '';
  staTbody.innerHTML = '';

  let dynSum = 0,
    staSum = 0;

  CONFIG.pricing.dynamic.forEach(item => {
    dynSum += item.amount;
    dynTbody.insertAdjacentHTML(
      'beforeend',
      `
            <tr class="border-b border-neutral-100">
              <td class="py-2 font-medium">${translateText(item.service)}</td>
              <td class="py-2 text-black">${translateText(
                item.description
              )}</td>
              <td class="py-2 text-right">${formatINR(item.amount)}</td>
            </tr>
          `
    );
  });
  CONFIG.pricing.static.forEach(item => {
    staSum += item.amount;
    staTbody.insertAdjacentHTML(
      'beforeend',
      `
            <tr class="border-b border-neutral-100">
              <td class="py-2 font-medium">${translateText(item.service)}</td>
              <td class="py-2 text-black">${translateText(
                item.description
              )}</td>
              <td class="py-2 text-right">${formatINR(item.amount)}</td>
            </tr>
          `
    );
  });

  $('#dynamicTotalCell').textContent = formatINR(dynSum);
  $('#staticTotalCell').textContent = formatINR(staSum);
  $('#dynamicTotal').textContent = formatINR(dynSum);
  $('#staticTotal').textContent = formatINR(staSum);
  $('#dynamicTotalHero').textContent = formatINR(dynSum);
  $('#staticTotalHero').textContent = formatINR(staSum);
}

/* Language toggles */
const TEXT = {
  en: {
    'nav-overview': 'Overview',
    'nav-intro': 'Introduction',
    'nav-scope': 'Scope & Structure',
    'nav-tech': 'Technology Stack',
    'nav-pricing': 'Pricing & Investment',
    'nav-timeline': 'Implementation Timeline',
    'nav-value': 'Value-Added Inclusions',
    'nav-appendix': 'Appendix: Page Structure',
    'nav-contact': 'Next Steps & Contact',
  },
  ar: {
    'nav-overview': 'نظرة عامة',
    'nav-intro': 'مقدمة',
    'nav-scope': 'النطاق والبنية',
    'nav-tech': 'حزمة التقنيات',
    'nav-pricing': 'التسعير والاستثمار',
    'nav-timeline': 'الجدول الزمني للتنفيذ',
    'nav-value': 'القيمة المضافة',
    'nav-appendix': 'الملحق: بنية الصفحات',
    'nav-contact': 'الخطوات التالية والتواصل',
  },
};

/* Comprehensive phrase-level translations by exact text match */
const TRANSLATIONS = {
  en: {},
  ar: {
    // Global / utility
    'Skip to content': 'تخطي إلى المحتوى',
    Proposal: 'عرض',
    'ID:': 'المعرف:',
    'Date:': 'التاريخ:',
    'Valid:': 'صالح لمدة:',
    Overview: 'نظرة عامة',
    Introduction: 'مقدمة',
    'Scope & Structure': 'النطاق والبنية',
    'Technology Stack': 'حزمة التقنيات',
    'Pricing & Investment': 'التسعير والاستثمار',
    'Implementation Timeline': 'الجدول الزمني للتنفيذ',
    'Value-Added Inclusions': 'القيمة المضافة',
    'Appendix: Page Structure': 'الملحق: بنية الصفحات',
    'Next Steps & Contact': 'الخطوات التالية والتواصل',
    'Quick Reference': 'مرجع سريع',
    'Dynamic Total': 'الإجمالي (ديناميكي)',
    'Static Total': 'الإجمالي (ثابت)',
    Timeline: 'الجدول الزمني',
    'EN/AR': 'إنجليزي/عربي',

    // Accessibility labels
    'Mermaid diagram: high-level workflow':
      'مخطط Mermaid: سير العمل عالي المستوى',
    'Mermaid diagram: project timeline': 'مخطط Mermaid: الجدول الزمني للمشروع',

    // Mermaid workflow node/edge labels
    'Sanity CMS': 'نظام إدارة المحتوى Sanity',
    'Content API': 'واجهة برمجة تطبيقات المحتوى',
    'Next.js Frontend': 'واجهة Next.js الأمامية',
    'Vercel/Netlify CDN': 'شبكة توزيع المحتوى Vercel/Netlify',
    Visitor: 'زائر',
    Deployed: 'تم النشر',
    Requests: 'طلبات',
    'Submits Form': 'يرسل النموذج',
    'Contact Form Handler': 'معالج نموذج التواصل',
    'Deliver Email': 'إرسال البريد',
    'Resend API': 'واجهة Resend',
    'Routes To': 'يوجه إلى',
    'Company Inbox': 'صندوق بريد الشركة',

    // Mermaid Gantt labels
    'Project Timeline (4–6 Weeks)': 'الجدول الزمني للمشروع (٤–٦ أسابيع)',
    'Week 1': 'الأسبوع ١',
    'Weeks 2–4': 'الأسابيع ٢–٤',
    'Week 5': 'الأسبوع ٥',
    'Week 6': 'الأسبوع ٦',
    'Discovery & UI/UX Design': 'الاستكشاف وتصميم واجهة وتجربة المستخدم',
    'Frontend Dev & CMS Integration':
      'تطوير الواجهة الأمامية وتكامل نظام إدارة المحتوى',
    'Integration, Testing, Feedback': 'التكامل والاختبار والملاحظات',
    'Final Revisions & Deployment': 'المراجعات النهائية والإطلاق',

    // Hero
    'Solar Technical Co. (K.S.A.)':
      'شركة سولار التقنية (المملكة العربية السعودية)',
    'Dynamic + Static Options': 'خيارات ديناميكية وثابتة',
    'Website Development Quotation': 'عرض سعر تطوير موقع إلكتروني',
    'A professional, dynamic, and scalable website to establish a strong digital presence, showcase technical expertise, and drive client engagement. Includes a Sanity CMS option for easy content management and an alternative Static site option for comparison.':
      'موقع إلكتروني احترافي وديناميكي وقابل للتوسع لتعزيز الحضور الرقمي، وإبراز الخبرة الفنية، وزيادة تفاعل العملاء. يتضمن خيار نظام إدارة المحتوى Sanity لسهولة إدارة المحتوى، بالإضافة إلى خيار موقع ثابت للمقارنة.',

    // Hero bento
    'Dynamic (CMS) Website': 'موقع ديناميكي (نظام إدارة محتوى)',
    'Sanity.io + Next.js + Tailwind': 'Sanity.io + Next.js + Tailwind',
    'CMS-managed content and dynamic templates':
      'محتوى مُدار عبر نظام إدارة المحتوى وقوالب ديناميكية',
    'Video + carousel hero, responsive UI':
      'واجهة بطل فيديو مع سلايدر، وواجهة متجاوبة',
    'Resend-powered contact form': 'نموذج تواصل مدعوم بخدمة Resend',

    'Static Website': 'موقع ثابت',
    'HTML/CSS/JS + SSG': 'HTML/CSS/JS + SSG',
    'Lower initial cost': 'تكلفة أولية أقل',
    'Developer-assisted content updates': 'تحديثات المحتوى بمساعدة المطور',
    'Serverless function for contact form': 'دالة بلا خادم لنموذج التواصل',

    // Hero buttons
    'View Pricing': 'عرض الأسعار',
    'See Timeline': 'عرض الجدول الزمني',

    // Executive summary
    'Executive Summary': 'الملخص التنفيذي',
    'We propose a dynamic, CMS-enabled website with a professional design system, performant frontend, and robust content workflows. An alternative static implementation is also provided for comparison.':
      'نقترح موقعًا ديناميكيًا مدعومًا بنظام إدارة محتوى مع نظام تصميم احترافي وواجهة أمامية عالية الأداء وتدفقات محتوى قوية. كما نوفر تنفيذًا ثابتًا بديلًا للمقارنة.',
    'Dynamic hero with seamless video-to-carousel transition':
      'بطل ديناميكي مع انتقال سلس من الفيديو إلى السلايدر',
    'CMS-driven services, gallery, and content pages':
      'خدمات ومعرض وصفحات محتوى مدارة عبر نظام CMS',
    'Resend-secured contact form and Google Maps embed':
      'نموذج تواصل مؤمن بـ Resend وتضمين خرائط جوجل',
    'Bilingual-ready and on-site SEO':
      'جاهز للغتين وتحسين محركات البحث على الموقع',
    'Recurring costs: Sanity Free, Resend Free, Hosting Free Tier, Domain (~₹1,200/year)':
      'تكاليف متكررة: Sanity مجانًا، Resend مجانًا، الاستضافة ضمن الخطة المجانية، النطاق (~₹1,200/سنة)',

    // Introduction
    "The website will elevate Solar Technical Company's digital presence in K.S.A., showcasing engineering credibility, service depth, and proof of work while enabling effortless content updates via Sanity CMS.":
      'سيعزز الموقع الحضور الرقمي لشركة سولار التقنية في المملكة العربية السعودية، مع إبراز الموثوقية الهندسية وعمق الخدمات وأدلة الإنجاز، مع تمكين تحديثات المحتوى بسهولة عبر نظام Sanity.',
    'Target Audience': 'الجمهور المستهدف',
    Objectives: 'الأهداف',
    Principles: 'المبادئ',
    '• Industrial and commercial clients, government/municipal buyers, and EPC partners seeking reliable solar engineering solutions.':
      '• عملاء صناعيون وتجاريون، وجهات حكومية/بلدية، وشركاء EPC يبحثون عن حلول هندسية موثوقة للطاقة الشمسية.',
    'Communicate credibility with galleries, certificates, and awards':
      'تعزيز المصداقية عبر المعارض والشهادات والجوائز',
    'Drive qualified inquiries via secure contact form':
      'زيادة الاستفسارات المؤهلة عبر نموذج تواصل آمن',
    'Ensure fast updates without developer dependency (Dynamic option)':
      'ضمان تحديثات سريعة دون الاعتماد على المطور (الخيار الديناميكي)',
    'Performance and accessibility': 'الأداء وسهولة الوصول',
    'Professional visual language (dark blue aesthetic)':
      'لغة بصرية احترافية (طابع أزرق داكن)',
    'SEO and scalable information architecture':
      'تهيئة لمحركات البحث وبنية معلومات قابلة للتوسع',

    // Scope & Structure
    'Project Scope & Finalized Structure': 'نطاق المشروع والبنية النهائية',
    'Pages and components aligned to your approved structure.':
      'الصفحات والمكونات وفق البنية المعتمدة.',
    'Home Page': 'الصفحة الرئيسية',
    'Dynamic hero: looping video with seamless zoom, transitions to carousel':
      'بطل ديناميكي: فيديو متكرر مع تكبير سلس، والتحول إلى سلايدر',
    'About, Services (CMS-driven), Our Customers, Why Choose Us':
      'نبذة، الخدمات (مدارة عبر CMS)، عملاؤنا، لماذا نحن',
    'Comprehensive footer with navigation and social links':
      'تذييل شامل مع روابط تنقل وروابط اجتماعية',
    'Service Details (Dynamic Template)': 'تفاصيل الخدمة (قالب ديناميكي)',
    'Reusable template generates one page per CMS service':
      'قالب قابل لإعادة الاستخدام يُنشئ صفحة لكل خدمة في CMS',
    'Fields for descriptions, specs, image galleries, related case studies':
      'حقول للوصف والمواصفات ومعارض الصور ودراسات الحالة ذات الصلة',
    Gallery: 'المعرض',
    'Filterable: Projects (Images/Videos), Certificates, Awards, Achievements':
      'قابل للتصفية: المشاريع (صور/فيديو)، الشهادات، الجوائز، الإنجازات',
    'All items managed via CMS for credibility and freshness':
      'جميع العناصر مُدارة عبر CMS للمصداقية والتجدد',
    'Contact Page': 'صفحة التواصل',
    'Embedded Google Map with “Get Directions”':
      'خريطة Google مدمجة مع الحصول على الاتجاهات',
    'Secure contact form: Name, Phone, Email, Message, Reference':
      'نموذج تواصل آمن: الاسم، الهاتف، البريد الإلكتروني، الرسالة، مرجع',
    'Submissions routed via Resend with success/error handling':
      'إرسال الرسائل عبر Resend مع معالجة النجاح/الأخطاء',
    'About Us': 'من نحن',
    'Derived from official documents with company history and team':
      'مستمد من الوثائق الرسمية مع تاريخ الشركة والفريق',
    'Structured for SEO with semantic HTML and schema':
      'منظم لتحسين محركات البحث مع HTML دلالي ومخططات',
    'Our Customers': 'عملاؤنا',
    'CMS-managed client logos and names (initially placeholders), designed to scale as your portfolio grows.':
      'شعارات وأسماء العملاء مُدارة عبر CMS (مبدئيًا عناصر وهمية)، مصممة للتوسع مع نمو أعمالكم.',

    // Workflow
    'High-Level System Workflow': 'مخطط سير العمل عالي المستوى',
    'Interactive diagram (zoom, pan, fullscreen)':
      'مخطط تفاعلي (تكبير، سحب، ملء الشاشة)',
    'Tip: Drag to pan. Use trackpad pinch or the +/– buttons to zoom.':
      'تلميح: اسحب للتحريك. استخدم القرص على لوحة اللمس أو أزرار +/– للتكبير.',
    'Tip: Use the toolbar to zoom/pan. On mobile, use two-finger pinch/drag.':
      'تلميح: استخدم شريط الأدوات للتكبير/التحريك. على الجوال، استخدم القرص/السحب بإصبعين.',

    // Tech stack
    'Technology Stack (Dynamic Website)': 'حزمة التقنيات (الموقع الديناميكي)',
    'A modern, scalable stack optimized for performance, SEO, and easy content management.':
      'حزمة حديثة وقابلة للتوسع ومُحسّنة للأداء وتحسين محركات البحث وسهولة إدارة المحتوى.',
    'Next.js (React)': 'Next.js (React)',
    'Server-side rendering and static generation for fast, SEO-friendly pages.':
      'تصيير على الخادم وتوليد صفحات ثابتة لصفحات سريعة وصديقة لمحركات البحث.',
    'Tailwind CSS': 'Tailwind CSS',
    'Rapid, professional UI development with responsive, accessible components.':
      'تطوير واجهات احترافية بسرعة مع مكونات متجاوبة وسهلة الوصول.',
    'Sanity.io CMS': 'Sanity.io CMS',
    'Headless CMS for flexible content schemas (services, galleries, pages) and real-time editing.':
      'نظام إدارة محتوى Headless لمخططات محتوى مرنة (الخدمات، المعارض، الصفحات) وتحرير فوري.',
    'Resend (Email)': 'Resend (البريد)',
    'Reliable email delivery for the contact form with secure server-side handling.':
      'تسليم موثوق للبريد لنموذج التواصل مع معالجة آمنة على الخادم.',

    // Pricing
    'Dynamic Website (with CMS)': 'موقع ديناميكي (مع CMS)',
    Recommended: 'موصى به',
    Service: 'الخدمة',
    Description: 'الوصف',
    'Cost (INR)': 'التكلفة (روبية)',
    'One-Time Development Cost': 'تكلفة التطوير لمرة واحدة',
    'Recurring: Sanity (Free), Resend (Free), Hosting (Free Tier), Domain (~₹1,200/year)':
      'تكاليف متكررة: Sanity (مجاني)، Resend (مجاني)، الاستضافة (الخطة المجانية)، النطاق (~₹1,200/سنة)',
    'Static Website': 'موقع ثابت',
    Alternative: 'بديل',
    'Feature Comparison': 'مقارنة الميزات',
    'Dynamic (CMS)': 'ديناميكي (CMS)',
    'CMS content updates without developer assistance':
      'تحديثات محتوى عبر CMS دون الحاجة إلى مطور',
    'Dynamic service templates and gallery': 'قوالب خدمات ومعرض ديناميكي',
    'Scales easily with new sections': 'يتوسع بسهولة مع أقسام جديدة',
    Static: 'ثابت',
    'Lower initial investment': 'استثمار أولي أقل',
    'Content updates billed separately': 'تحديثات المحتوى تُحاسَب بشكل منفصل',
    'Suitable for infrequent updates': 'مناسب للتحديثات غير المتكررة',
    'UI/UX Design & Prototyping':
      'تصميم واجهة وتجربة المستخدم والنماذج الأولية',
    'Complete visual system, wireframes, prototype (dark blue aesthetic).':
      'نظام بصري متكامل، مخططات هيكلية، نموذج أولي (بجمالية اللون الأزرق الداكن).',
    'Frontend Website Development': 'تطوير واجهة الموقع الأمامية',
    'Next.js + Tailwind; video/carousel hero, dynamic templates, responsive.':
      'Next.js + Tailwind؛ بطل فيديو/دائري، قوالب ديناميكية، تصميم متجاوب.',
    'Sanity.io CMS Integration': 'تكامل نظام إدارة المحتوى Sanity.io',
    'Backend setup, schemas (services, gallery, pages), training.':
      'إعداد الواجهة الخلفية، المخططات (خدمات، معرض، صفحات)، تدريب.',
    'Google Maps Integration': 'تكامل خرائط جوجل',
    'Embedded map on Contact page.': 'خريطة مدمجة في صفحة التواصل.',
    'Resend Email Integration': 'تكامل بريد Resend',
    'Secure API integration, templates, success/error handling.':
      'تكامل آمن لواجهة برمجة التطبيقات، قوالب، معالجة النجاح/الخطأ.',
    'Project Management & QA': 'إدارة المشاريع وضمان الجودة',
    'Oversight, cross-browser testing, performance optimization.':
      'إشراف، اختبار عبر المتصفحات، تحسين الأداء.',
    'Static Website Development': 'تطوير موقع ثابت',
    'Identical to dynamic option.': 'مطابق للخيار الديناميكي.',
    'All pages/components; content hard-coded.':
      'جميع الصفحات/المكونات؛ المحتوى مبرمج بشكل ثابت.',
    'Third-Party Integrations': 'تكاملات الطرف الثالث',
    'Google Maps + contact form via serverless function.':
      'خرائط جوجل + نموذج تواصل عبر دالة بدون خادم.',
    'Oversight, communication, and testing.': 'إشراف، تواصل، واختبار.',

    // Timeline
    'Implementation Timeline (4–6 Weeks)': 'الجدول الزمني للتنفيذ (٤–٦ أسابيع)',
    'A realistic, milestone-based plan from\n            discovery to deployment and handover.':
      'خطة واقعية قائمة على المراحل من الاستكشاف إلى الإطلاق والتسليم.',
    'A realistic, milestone-based plan from discovery to deployment and handover.':
      'خطة واقعية قائمة على المراحل من الاستكشاف إلى الإطلاق والتسليم.',

    // Value-added
    'Value-Added Inclusions (Special Offer)': 'إضافات ذات قيمة (عرض خاص)',
    'Bilingual Ready': 'جاهز للغتين',
    'Architecture supports English and Arabic\n              content (RTL-aware UI).':
      'معمارية تدعم الإنجليزية والعربية (واجهة تراعي الاتجاه من اليمين إلى اليسار).',
    'Architecture supports English and Arabic content (RTL-aware UI).':
      'معمارية تدعم الإنجليزية والعربية (واجهة تراعي الاتجاه من اليمين إلى اليسار).',
    'On-Site SEO': 'تهيئة لمحركات البحث',
    'Meta tags, semantic HTML, and schema markup\n              from day one.':
      'وسوم وصفية وHTML دلالي ومخططات منذ اليوم الأول.',
    'Meta tags, semantic HTML, and schema markup from day one.':
      'وسوم وصفية وHTML دلالي ومخططات منذ اليوم الأول.',
    '6 Months Support': 'دعم لمدة 6 أشهر',
    'Complimentary post-launch support for bug\n              fixes and performance monitoring.':
      'دعم مجاني بعد الإطلاق لإصلاح الأخطاء ومراقبة الأداء.',
    'Complimentary post-launch support for bug fixes and performance monitoring.':
      'دعم مجاني بعد الإطلاق لإصلاح الأخطاء ومراقبة الأداء.',

    // Appendix
    'Appendix: Page Structure (Quick View)':
      'الملحق: هيكل الصفحات (نظرة سريعة)',
    'Home Page Sections': 'أقسام الصفحة الرئيسية',
    'Hero (Video → Carousel)': 'البطل (فيديو → سلايدر)',
    'About (summary)': 'نبذة (موجز)',
    'Services (CMS list)': 'الخدمات (قائمة CMS)',
    'Our Customers': 'عملاؤنا',
    'Why Choose Us': 'لماذا نحن',
    Footer: 'تذييل',
    'Other Pages': 'صفحات أخرى',
    'Service Details (dynamic template per service)':
      'تفاصيل الخدمة (قالب ديناميكي لكل خدمة)',
    'Gallery (Projects, Certificates, Awards, Achievements)':
      'المعرض (مشاريع، شهادات، جوائز، إنجازات)',
    'Contact (Map, Form)': 'التواصل (خريطة، نموذج)',
    'About Us (detailed)': 'من نحن (تفاصيل)',

    // Next steps
    'Next Steps': 'الخطوات التالية',
    'Please review the options and confirm your\n            preferred approach. We will schedule a kickoff to begin design.':
      'يرجى مراجعة الخيارات وتأكيد النهج المفضل. سنحدد موعد بدء العمل للبدء في التصميم.',
    'Please review the options and confirm your preferred approach. We will schedule a kickoff to begin design.':
      'يرجى مراجعة الخيارات وتأكيد النهج المفضل. سنحدد موعد بدء العمل للبدء في التصميم.',
    '1) Review': '1) مراجعة',
    'Compare Dynamic and Static options and validate\n              the timeline.':
      'قارن بين الخيارين الديناميكي والثابت وتحقق من الجدول الزمني.',
    'Compare Dynamic and Static options and validate the timeline.':
      'قارن بين الخيارين الديناميكي والثابت وتحقق من الجدول الزمني.',
    '2) Confirm': '2) تأكيد',
    'Approve the quotation and select the chosen\n              approach.':
      'اعتمد عرض السعر وحدد النهج المختار.',
    'Approve the quotation and select the chosen approach.':
      'اعتمد عرض السعر وحدد النهج المختار.',
    '3) Kickoff': '3) بدء',
    'We start with discovery and UI/UX design (Week 1).':
      'نبدأ بالاستكشاف وتصميم UI/UX (الأسبوع 1).',
    'Approve\n            Dynamic': 'اعتماد الديناميكي',
    'Approve Dynamic': 'اعتماد الديناميكي',
    'Approve\n            Static': 'اعتماد الثابت',
    'Approve Static': 'اعتماد الثابت',
    'Download\n            PDF': 'تنزيل PDF',
    'Download PDF': 'تنزيل PDF',
    Contact: 'التواصل',
    Website: 'الموقع الإلكتروني',

    // Footer
    '© ': '© ',
    'Sheriax — Proposal for Solar Technical Company (K.S.A.)':
      'شيرياكس — عرض لشركة سولار التقنية (المملكة العربية السعودية)',

    // Toolbar titles
    'Zoom in': 'تكبير',
    'Zoom out': 'تصغير',
    'Reset view': 'إعادة التعيين',
    Fullscreen: 'ملء الشاشة',

    // Alerts
    ALERT_DYNAMIC:
      'شكرًا لك! سنمضي قدمًا في خيار الموقع الديناميكي (نظام إدارة المحتوى) وسنحدد موعد بدء العمل.',
    ALERT_STATIC:
      'شكرًا لك! سنمضي قدمًا في خيار الموقع الثابت وسنحدد موعد بدء العمل.',
  },
};

const getLang = () =>
  document.documentElement.lang || localStorage.getItem('lang') || 'en';
const translateText = (s, lang = getLang()) => {
  if (!s) return s;
  const key = typeof s === 'string' ? s.trim().replace(/\n\s+/g, ' ') : s;
  const map = TRANSLATIONS[lang] || {};
  return map && map[key] ? map[key] : s;
};

function translateToolbarTitles(lang) {
  const titles = [
    { sel: '[data-zoom-in]', key: 'Zoom in' },
    { sel: '[data-zoom-out]', key: 'Zoom out' },
    { sel: '[data-reset]', key: 'Reset view' },
    { sel: '[data-fullscreen]', key: 'Fullscreen' },
  ];
  titles.forEach(({ sel, key }) => {
    document.querySelectorAll(sel).forEach(btn => {
      btn.title = translateText(key, lang);
    });
  });
}

function translateAriaLabels(lang) {
  const map = [
    {
      el: document.querySelector('#workflowBox'),
      key: 'Mermaid diagram: high-level workflow',
    },
    {
      el: document.querySelector('#timelineBox'),
      key: 'Mermaid diagram: project timeline',
    },
  ];
  map.forEach(({ el, key }) => {
    if (el) el.setAttribute('aria-label', translateText(key, lang));
  });
}

function translatePage(lang) {
  const restore = lang === 'en';
  const isTranslatableParent = node =>
    node && node.nodeType === 1 && !['SCRIPT', 'STYLE'].includes(node.nodeName);

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
        if (!isTranslatableParent(node.parentNode))
          return NodeFilter.FILTER_REJECT;
        const txt = node.nodeValue.trim();
        if (!txt) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    const original = node.nodeValue;
    const trimmed = original.trim().replace(/\n\s+/g, ' ');
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    const el = node.parentElement;

    if (restore) {
      if (el && el.dataset && el.dataset.i18nOriginal) {
        node.nodeValue = leading + el.dataset.i18nOriginal + trailing;
      }
      return;
    }

    const translated = translateText(trimmed, lang);
    if (translated && translated !== trimmed) {
      if (el && (!el.dataset || !el.dataset.i18nOriginal)) {
        el.dataset.i18nOriginal = original.trim();
      }
      node.nodeValue = leading + translated + trailing;
    }
  });

  translateToolbarTitles(lang);
  translateAriaLabels(lang);
}

function setupLanguageToggle() {
  const apply = lang => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
    // Update nav labels
    const labels = [
      'overview',
      'intro',
      'scope',
      'tech',
      'pricing',
      'timeline',
      'value',
      'appendix',
      'contact',
    ];
    labels.forEach(key => {
      const sel = `a[href="#${key === 'overview' ? 'hero' : key}"]`;
      $$(sel, $('#tocNav')).forEach(
        a =>
          (a.textContent =
            TEXT[lang][`nav-${key === 'hero' ? 'overview' : key}`])
      );
    });
    // Rebuild dynamic tables in selected language
    buildPricingTables();
    // Translate static content in DOM
    translatePage(lang);
  };
  const saved = localStorage.getItem('lang') || 'en';
  apply(saved);

  const toggles = ['#langToggle', '#langToggleMobile']
    .map(id => $(id))
    .filter(Boolean);
  toggles.forEach(btn =>
    btn.addEventListener('click', () => {
      const next = document.documentElement.lang === 'en' ? 'ar' : 'en';
      apply(next);
    })
  );
}

/* TOC active highlight */
function setupTOCHighlight() {
  const links = $$('.toc-link');
  const map = new Map();
  links.forEach(a => {
    const id = a.getAttribute('href').replace('#', '');
    const section = document.getElementById(id);
    if (section) map.set(section, a);
  });
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const link = map.get(entry.target);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
  );
  map.forEach((_, section) => observer.observe(section));
}

/* Reveal on scroll */
function setupReveal() {
  const els = $$('.reveal');
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  els.forEach(el => io.observe(el));
}

/* Mermaid init and pan/zoom handlers */
function initMermaid() {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'neutral',
    securityLevel: 'loose',
  });

  // After render, attach controls
  const boxes = [$('#workflowBox'), $('#timelineBox')].filter(Boolean);
  boxes.forEach(setupPanZoomBox);

  // Ensure translated labels inside generated SVG when Arabic is active
  if (getLang() === 'ar') {
    // slight delay to allow Mermaid to render
    setTimeout(() => translatePage('ar'), 50);
  }
}

function setupPanZoomBox(box) {
  let scale = 1,
    tx = 0,
    ty = 0;
  let isPanning = false,
    startX = 0,
    startY = 0;

  const stage = $('.mermaid-stage', box);

  function applyTransform() {
    const svg = $('svg', stage);
    if (!svg) return;
    svg.style.transformOrigin = '0 0';
    svg.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }

  function reset() {
    scale = 1;
    tx = 0;
    ty = 0;
    applyTransform();
  }

  // toolbar
  $('[data-zoom-in]', box).addEventListener('click', () => {
    scale = Math.min(4, scale * 1.2);
    applyTransform();
  });
  $('[data-zoom-out]', box).addEventListener('click', () => {
    scale = Math.max(0.25, scale / 1.2);
    applyTransform();
  });
  $('[data-reset]', box).addEventListener('click', reset);
  $('[data-fullscreen]', box).addEventListener('click', () => {
    if (!document.fullscreenElement) {
      box.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });

  // mouse
  stage.addEventListener(
    'wheel',
    e => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY);
      const rect = stage.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      const prevScale = scale;
      scale =
        delta > 0 ? Math.max(0.25, scale / 1.1) : Math.min(4, scale * 1.1);

      // zoom towards cursor
      tx = cx - (cx - tx) * (scale / prevScale);
      ty = cy - (cy - ty) * (scale / prevScale);
      applyTransform();
    },
    { passive: false }
  );

  stage.addEventListener('pointerdown', e => {
    isPanning = true;
    startX = e.clientX - tx;
    startY = e.clientY - ty;
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove', e => {
    if (!isPanning) return;
    tx = e.clientX - startX;
    ty = e.clientY - startY;
    applyTransform();
  });
  stage.addEventListener('pointerup', e => {
    isPanning = false;
    stage.releasePointerCapture(e.pointerId);
  });
  stage.addEventListener('pointercancel', () => {
    isPanning = false;
  });

  // initial transform application after mermaid has rendered
  const tryApply = () => {
    if ($('svg', stage)) applyTransform();
    else requestAnimationFrame(tryApply);
  };
  tryApply();
}

/* Download as PDF (print) */
function setupDownload() {
  $('#btnDownload')?.addEventListener('click', () => {
    window.print();
  });
}

/* Approvals (placeholder actions) */
function setupApprovals() {
  $('#btnApproveDynamic')?.addEventListener('click', () => {
    const lang = getLang();
    const msg =
      lang === 'ar'
        ? TRANSLATIONS.ar['ALERT_DYNAMIC']
        : 'Thank you! We’ll proceed with the Dynamic (CMS) option and schedule a kickoff.';
    alert(msg);
  });
  $('#btnApproveStatic')?.addEventListener('click', () => {
    const lang = getLang();
    const msg =
      lang === 'ar'
        ? TRANSLATIONS.ar['ALERT_STATIC']
        : 'Thank you! We’ll proceed with the Static option and schedule a kickoff.';
    alert(msg);
  });
}

/* Init */
document.addEventListener('DOMContentLoaded', () => {
  populateMeta();
  buildPricingTables();
  setupLanguageToggle();
  setupTOCHighlight();
  setupReveal();
  initMermaid();
  setupDownload();
  setupApprovals();
});
