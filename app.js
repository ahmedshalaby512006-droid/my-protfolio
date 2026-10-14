
const DATA = {
 name: "Ahmed Shalaby",
 photo: "IMG_20261001_224903.jpg",
 cv: "cv.pdf",
 greeting: "Hi, I'm Ahmed Shalaby — Front-End Software Engineer",
 tagline: "I specialize in building high-performance, responsive web applications with React and modern JavaScript. I turn complex UI/UX designs into pixel-perfect, accessible, and scalable digital experiences.",
 available: "Open to full-time roles & freelance projects",
 about: "I am a Front-End Software Engineer focused on crafting fast, pixel-perfect, and accessible Single Page Applications using React, modern JavaScript, and Tailwind CSS, backed by clean component architecture and smooth API integrations. I have an obsessive passion for optimizing web performance (Core Web Vitals) and engineering silky-smooth 60fps user experiences that delight users and load in milliseconds. Alongside frontend architecture and clean REST API integrations, I actively explore Artificial Intelligence and Machine Learning to bridge intelligent predictive models with modern, responsive user interfaces.",
 stats: [
  { text: "1+", l: "Years of Experience", c: "sw" },
  { text: "5+", l: "Projects Built", c: "sw" },
  { text: "10+", l: "Core Tools & Technologies", c: "da" }
 ],
 orbit: {
  sw: ["React", "JavaScript", "HTML5"],
  ai: ["AI", "Machine Learning"],
  da: ["Python", "Java"]
 },
 stack: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "C++", "Java", "Python", "Machine Learning", "REST API"],
 skills: {
  sw: {
   title: "Core Front-End",
   blurb: "Fast, responsive interfaces built with React & modern web standards.",
   items: [["React.js", null], ["JavaScript (ES6+)", null], ["Tailwind CSS", null], ["HTML5 & Modern CSS3", null], ["State Management (Context API)", null], ["Performance & Web Vitals", null]]
  },
  fe: {
   title: "Front-End Workflow & Tools",
   blurb: "Modern tooling ensuring clean code, testing, and team productivity.",
   items: [["Git & GitHub", null], ["REST API & Async Data", null], ["Responsive Design & a11y", null], ["Figma to Pixel-Perfect Code", null], ["Vite & Webpack", null]]
  },
  cs: {
   title: "Extended Foundations & AI",
   blurb: "Solid computer science principles, problem solving, and intelligent data concepts.",
   items: [["Python & Data Analysis", null], ["Machine Learning Fundamentals", null], ["C++ & Java (OOP)", null], ["Data Structures & Algorithms", null]]
  }
 },
 /* Projects: you can add any number of projects here! */
 projects: [
  {
   title: "My Store",
   cat: "sw",
   desc: "A responsive e-commerce SPA built with React and Tailwind CSS, featuring product filtering, cart management, and REST API integration.",
   highlight: "Context API State • Dynamic Product Filter • REST API",
   tags: ["React", "JavaScript", "Tailwind CSS", "HTML"],
   video: "My Store - Google Chrome 2026-10-02 02-25-55.mp4",
   image: "My Store - Google Chrome 10_2_2026 2_24_45 AM.png",
   live: "https://ahmedshalaby512006-droid.github.io/My-Store/",
   repo: "https://github.com/ahmedshalaby512006-droid/My-Store"
  },
  {
   title: "Ankh Cafe",
   cat: "sw",
   desc: "A responsive landing page for a Pharaoh-themed coffee house, built with vanilla HTML, CSS, and JavaScript with smooth interactions.",
   highlight: "Vanilla JS DOM Architecture • Zero Framework Overhead • 98+ PageSpeed",
   tags: ["JavaScript", "HTML", "CSS"],
   video: "ANKH _ عنخ للقهوة الفرعونية and 4 more pages - Personal - Microsoft​ Edge 2026-10-01 23-50-23.mp4",
   image: "Ahmed Shalaby — Front-End Software Engineer and 11 more pages - Personal - Microsoft​ Edge 10_2_2026 12_16_12 AM.png",
   live: "https://ahmedshalaby512006-droid.github.io/ankh-cafe/",
   repo: "https://github.com/ahmedshalaby512006-droid/ankh-cafe"
  },
  {
   title: "Mood Cool Store",
   cat: "sw",
   desc: "A responsive landing page for an HVAC company, built with HTML, CSS, and JavaScript to showcase products and services.",
   highlight: "Mobile-First Responsive Layout • Modern CSS Grid • Micro-interactions",
   tags: ["JavaScript", "HTML", "CSS"],
   video: "Mood Cool _ تكييفات سبليت and 3 more pages - Personal - Microsoft​ Edge 2026-10-02 02-50-27.mp4",
   image: "My Store - Google Chrome 10_2_2026 2_44_34 AM.png",
   live: "https://ahmedshalaby512006-droid.github.io/mood-cool-store/",
   repo: "https://github.com/ahmedshalaby512006-droid/mood-cool-store"
  }
 ],
 /* Education: 1) Faculty, 2) GCI, 3) NTI, 4) ITI */
 education: [
  {
   role: "Faculty of Computers and Artificial Intelligence",
   org: "Damanhour University",
   date: "2025 to 2029",
   text: "Undergraduate studies focusing on software engineering and computer science.",
   c: "ai"
  },
  {
   role: "Artificial Intelligence",
   org: "GCI",
   date: "In progress",
   text: "In-depth study of artificial intelligence concepts, models, and workflows.",
   c: "ai"
  },
  {
   role: "Machine Learning for Data Analysis",
   org: "NTI",
   date: "In progress",
   text: "Specialized training on machine learning algorithms and predictive data analysis.",
   c: "ai"
  },
  {
   role: "Web Development",
   org: "ITI",
   date: "Completed",
   text: "Comprehensive intensive training in modern front-end web development.",
   c: "sw"
  }
 ],
 contact: {
  text: "Open to full-time roles, freelance work and collaborations.",
  phone: "01551644292",
  email: "ahmedshalaby512006@gmail.com",
  whatsapp: "https://wa.me/201551644292?text=Hello%20Ahmed,%20I%20saw%20your%20portfolio...",
  social: [
   { name: "GitHub", url: "https://github.com/ahmedshalaby512006-droid" },
   { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-shalaby-569100308?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
   { name: "WhatsApp", url: "https://wa.me/201551644292?text=Hello%20Ahmed,%20I%20saw%20your%20portfolio..." }
  ]
 }
};

/* Arabic version: translations for any fields you wish to localize */
const AR = {
 greeting: "أهلًا، أنا أحمد شلبي — مهندس برمجيات واجهات أمامية",
 tagline: "متخصص في بناء واجهات وتطبيقات ويب سريعة وعالية الأداء باستخدام React وJavaScript الحديثة. أحول التصاميم وتجارب المستخدم المعقدة إلى واجهات تفاعلية متقنة، سهلة الوصول، ومُهيأة للتوسع.",
 available: "متاح لفرص العمل بدوام كامل والمشاريع الحرة",
 about: "أنا مهندس برمجيات واجهات أمامية، متخصص في بناء تطبيقات ويب تفاعلية وسريعة باستخدام React وJavaScript الحديثة وTailwind CSS، مع التركيز على دقة التصميم (Pixel-Perfect) والربط الاحترافي مع واجهات الـ REST API. لدي شغف حقيقي بهندسة تجربة المستخدم وتحسين أداء المواقع لتصل لأعلى سرعات التحميل (Core Web Vitals) وسلاسة تامة في التفاعل والحركة (60fps). بجانب ذلك، أهتم بعلوم البيانات والذكاء الاصطناعي (AI) وتعلم الآلة (Machine Learning) لدمج النماذج الذكية داخل واجهات ويب متطورة تصنع فارقاً حقيقياً.",
 stats: [
  { l: "سنوات خبرة في التطوير" },
  { l: "مشاريع عملية منفذة" },
  { l: "تقنيات وأدوات متقنة" }
 ],
 skills: {
  sw: {
   title: "الواجهة الأمامية الأساسية",
   blurb: "تطبيقات سريعة ومتجاوبة مبنية بـ React وأحدث معايير الويب.",
   items: [["React.js", null], ["JavaScript (ES6+)", null], ["Tailwind CSS", null], ["HTML5 & Modern CSS3", null], ["إدارة الحالة بـ Context API", null], ["تحسين الأداء وCore Web Vitals", null]]
  },
  fe: {
   title: "أدوات وسير عمل الواجهات",
   blurb: "أدوات حديثة لضمان كود نظيف وإنتاجية وتكامل احترافي.",
   items: [["Git & GitHub", null], ["ربط REST APIs والبيانات غير المتزامنة", null], ["التصميم المتجاوب وإتاحة الوصول a11y", null], ["تحويل تصاميم Figma لكود دقيق", null], ["أدوات البناء Vite & Webpack", null]]
  },
  cs: {
   title: "مهارات وأساسيات أخرى (AI & CS)",
   blurb: "أساس حوسبي متين وتفكير خوارزمي مع مفاهيم البيانات الذكية.",
   items: [["Python وتحليل البيانات", null], ["أساسيات تعلم الآلة والـ AI", null], ["البرمجة الكائنية C++ & Java (OOP)", null], ["هياكل البيانات والخوارزميات", null]]
  }
 },
 projects: [
  { title: "متجري", desc: "متجر إلكتروني متكامل (SPA) مبني بـ React وTailwind CSS، يتضمن تصفح المنتجات، سلة تسوق ديناميكية، والربط مع REST API.", highlight: "إدارة الحالة بـ Context API • تصفية ديناميكية للمنتجات • ربط REST API" },
  { title: "عنخ كافيه", desc: "واجهة هبوط متجاوبة لكافيه مستوحى من الطابع الفرعوني، مبنية بـ HTML وCSS وJavaScript لتوفير تصفح سلس لقائمة المشروبات.", highlight: "معمارية DOM نقية بـ Vanilla JS • خفة فائقة في التحميل • مؤشرات أداء 98+" },
  { title: "متجر موود كوول", desc: "صفحة هبوط متجاوبة لشركة تكييفات، مبنية بـ HTML وCSS وJavaScript لعرض المنتجات وخدمات التركيب مع تجربة تصفح سريعة.", highlight: "تصميم متجاوب Mobile-First • نظام CSS Grid متقدم • تفاعلات وحركات دقيقة" }
 ],
 education: [
  { role: "كلية الحاسبات والمعلومات والذكاء الاصطناعي", org: "جامعة دمنهور", date: "من 2025 إلى 2029", text: "دراسة أكاديمية متخصصة في هندسة البرمجيات وعلوم الحوسبة." },
  { role: "الذكاء الاصطناعي", org: "GCI", date: "قيد الدراسة", text: "دراسة متخصصة في خوارزميات ونماذج الذكاء الاصطناعي." },
  { role: "تعلم الآلة لتحليل البيانات", org: "NTI", date: "قيد التدريب", text: "تدريب عملي متخصص في خوارزميات تعلم الآلة وتحليل البيانات التنبؤية." },
  { role: "تطوير الويب", org: "ITI", date: "مكتمل", text: "تدريب مكثف في تطوير واجهات الويب الأمامية بأحدث المعايير." }
 ],
 contact: {
  text: "متاح للوظائف بدوام كامل، والعمل الحر والتعاون في المشاريع البرمجية."
 }
};

const UI = {
 en: {
  lang: "العربية",
  docT: "Front-End Software Engineer",
  nAbout: "About",
  nSkills: "Skills",
  nProjects: "Projects",
  nEdu: "Education",
  nContact: "Contact",
  h: ["Front-End", "Developer"],
  b1: "Explore Projects",
  b2: "Get in touch",
  bCv: "Download CV",
  photo: "",
  hAbout: "About Me",
  hSkills: "Technical Skills",
  sSkills: "The core tools, languages, and frameworks I use to build scalable web products.",
  hProj: "Featured Projects",
  sProj: "Interactive showcase. Select any project to preview or test live demo.",
  fltAll: "All",
  cat: { sw: "Front-End", ai: "Data & AI", da: "Languages", fe: "Workflow", cs: "Computer Science" },
  live: "Live Site",
  repo: "Source Code",
  hEdu: "Education & Journey",
  tel: "Phone:",
  hCt: "Let's build something great together",
  sep: ", ",
  copiedEmail: "Email copied to clipboard!",
  copiedPhone: "Phone copied to clipboard!"
 },
 ar: {
  lang: "English",
  docT: "مهندس برمجيات واجهات أمامية",
  nAbout: "نبذة",
  nSkills: "المهارات",
  nProjects: "المشاريع",
  nEdu: "التعليم",
  nContact: "تواصل",
  h: ["مطور", "واجهات أمامية"],
  b1: "شاهد مشاريعي",
  b2: "تواصل معي",
  bCv: "تحميل السيرة الذاتية",
  photo: "صورتك",
  hAbout: "من أنا",
  hSkills: "المهارات التقنية",
  sSkills: "مجموعة الأدوات والتقنيات التي أعتمد عليها في بناء واجهات وتطبيقات تفاعلية.",
  hProj: "المشاريع المميزة",
  sProj: "معرض تفاعلي للمشاريع. اضغط على أي مشروع لمشاهدة الفيديو أو المعاينة الحية.",
  fltAll: "الكل",
  cat: { sw: "الواجهة الأمامية", ai: "بيانات وذكاء اصطناعي", da: "لغات وأدوات", fe: "أدوات وسير العمل", cs: "علوم الحاسب" },
  live: "معاينة حية",
  repo: "الكود المصدري",
  hEdu: "التعليم والتدريب",
  tel: "الهاتف:",
  hCt: "لنبنِ شيئًا مميزًا معًا",
  sep: "، ",
  copiedEmail: "تم نسخ البريد الإلكتروني!",
  copiedPhone: "تم نسخ رقم الهاتف!"
 }
};

const $ = s => document.querySelector(s);
const E = s => String(s == null ? "" : s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

/* Smart Merge: handles any array length, never drops items when lengths differ */
const mg = (a, b) => {
 if (b === undefined || b === null) return a;
 if (a === undefined || a === null) return b;
 if (Array.isArray(a) || Array.isArray(b)) {
  const arrA = Array.isArray(a) ? a : [];
  const arrB = Array.isArray(b) ? b : [];
  const max = Math.max(arrA.length, arrB.length);
  const out = [];
  for (let i = 0; i < max; i++) {
   if (arrA[i] !== undefined && arrB[i] !== undefined) {
    out.push(mg(arrA[i], arrB[i]));
   } else if (arrB[i] !== undefined) {
    out.push(arrB[i]);
   } else {
    out.push(arrA[i]);
   }
  }
  return out;
 }
 if (typeof a === "object" && typeof b === "object") {
  const o = { ...a };
  for (const k in b) {
   o[k] = mg(a[k], b[k]);
  }
  return o;
 }
 return b !== "" && b !== undefined ? b : a;
};

/* Language & Theme state */
let L = "en", D = DATA;
try {
 L = localStorage.getItem("lang") || ((navigator.language || "").startsWith("ar") ? "ar" : "en");
} catch (e) {}

let currentTheme = "light";
try {
 currentTheme = localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch (e) {}
document.documentElement.setAttribute("data-theme", currentTheme);

/* Toast Notification Helper */
function showToast(msg) {
 const t = $("#toast");
 if (!t) return;
 t.textContent = msg;
 t.classList.add("show");
 clearTimeout(t._timer);
 t._timer = setTimeout(() => t.classList.remove("show"), 2500);
}

/* Copy to Clipboard Helper */
function copyToClipboard(text, successMsg) {
 if (!text) return;
 if (navigator.clipboard && navigator.clipboard.writeText) {
  navigator.clipboard.writeText(text).then(() => showToast(successMsg)).catch(() => fallbackCopy(text, successMsg));
 } else {
  fallbackCopy(text, successMsg);
 }
}
function fallbackCopy(text, successMsg) {
 const ta = document.createElement("textarea");
 ta.value = text;
 ta.style.position = "fixed";
 ta.style.opacity = "0";
 document.body.appendChild(ta);
 ta.select();
 try {
  document.execCommand("copy");
  showToast(successMsg);
 } catch (err) {}
 document.body.removeChild(ta);
}

const io = new IntersectionObserver(es => es.forEach(en => {
 if (!en.isIntersecting) return;
 const t = en.target;
 t.classList.add("in");
 t.querySelectorAll("[data-n]").forEach(b => {
  const n = +b.dataset.n, s = b.dataset.s || "", t0 = performance.now();
  (function f(t1) {
   const k = Math.min((t1 - t0) / 1600, 1);
   b.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + s;
   k < 1 && requestAnimationFrame(f);
  })(t0);
 });
 io.unobserve(t);
}), { threshold: .25 });

/* Filter State */
let currentFilter = "all";

function renderFilters() {
 const pf = $("#p-filters");
 if (!pf) return;
 const U = UI[L];
 const filters = [
  { id: "all", label: U.fltAll || "All" },
  { id: "React", label: "React" },
  { id: "JavaScript", label: "JavaScript" }
 ];
 pf.innerHTML = filters.map(f =>
  `<button type="button" class="p-flt${f.id === currentFilter ? " on" : ""}" data-f="${f.id}">${E(f.label)}</button>`
 ).join("");
 pf.querySelectorAll(".p-flt").forEach(btn => {
  btn.onclick = () => {
   currentFilter = btn.dataset.f;
   renderProjects();
   renderFilters();
   lay();
  };
 });
}

function renderProjects() {
 const U = UI[L];
 const allProjects = D.projects || [];
 const filtered = currentFilter === "all"
  ? allProjects
  : allProjects.filter(p => (p.tags || []).some(t => t.toLowerCase().includes(currentFilter.toLowerCase())) || p.cat === currentFilter);

 $("#trk").innerHTML = filtered.map((p, i) => {
  const origIndex = allProjects.indexOf(p);
  return `<article class="pc" data-i="${origIndex}" tabindex="0" style="--c:var(--${p.cat || 'sw'})">` +
   `<div class="th">` +
    (p.image ? `<img src="${E(p.image)}" alt="${E(p.title)}" loading="lazy">` : "") +
    `<div class="pl"></div>` +
   `</div>` +
   `<div class="pi">` +
    `<span class="cat">${E((U.cat && U.cat[p.cat]) || p.cat || "")}</span>` +
    `<h3>${E(p.title)}</h3>` +
    (p.highlight ? `<div class="p-hl"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> <span>${E(p.highlight)}</span></div>` : "") +
    `<p>${E(p.desc)}</p>` +
    `<div class="tg">${(p.tags || []).map(t => `<span>${E(t)}</span>`).join("")}</div>` +
    `<div class="lk">` +
     (p.live ? `<a class="btn-lk live" href="${E(p.live)}" target="_blank" rel="noopener"><span>${E(U.live)}</span> <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></a>` : "") +
     (p.repo ? `<a class="btn-lk repo" href="${E(p.repo)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> <span>${E(U.repo)}</span></a>` : "") +
    `</div>` +
   `</div>` +
  `</article>`;
 }).join("");
}

function render() {
 D = L === "ar" ? mg(DATA, AR) : DATA;
 const U = UI[L] || UI.en, r = document.documentElement;
 r.lang = L;
 r.dir = L === "ar" ? "rtl" : "ltr";

 document.querySelectorAll("[data-t]").forEach(e => {
  if (U[e.dataset.t] !== undefined) e.textContent = U[e.dataset.t];
 });
 document.querySelectorAll("[data-p]").forEach(e => {
  if (U[e.dataset.p] !== undefined) e.placeholder = U[e.dataset.p];
 });

 document.title = (D.name || "Portfolio") + " — " + (U.docT || "");
 const brandLogo = (D.name || "").split(" ")[0] + ".";
 $("#logo").textContent = brandLogo;
 const mobLogo = $("#mob-logo");
 if (mobLogo) mobLogo.textContent = brandLogo;
 $("#lang").textContent = U.lang;
 $("#hi").textContent = D.greeting || "";
 $("#tag").textContent = D.tagline || "";
 $("#ct").textContent = (D.contact && D.contact.text) || "";
 $("#ft").textContent = "© " + new Date().getFullYear() + " " + (D.name || "");

 /* 1. Hero Dynamic Headlines */
 const hLines = Array.isArray(U.h) ? U.h : [U.h || ""];
 $("#h1").innerHTML = hLines.map((ln, i) =>
  `<span class="ln${i === 0 ? " o" : ""}" style="--c:var(--brand);--i:${i}"><i>${E(ln)}</i></span>`
 ).join("");

 /* 2. Hero Orbit & Portrait */
 const photoSrc = D.photo || "IMG_20261001_224903.jpg";
 const orbitEntries = Object.entries(D.orbit || {});
 $("#ph").innerHTML = orbitEntries.map(([k, v], i) =>
  `<div class="ring" style="--c:var(--${k}, var(--brand));"><span class="chip">${E(v[0] || "")}</span><span class="chip b">${E(v[1] || "")}</span></div>`
 ).join("") + `<div class="fr" id="fr"><img src="${E(photoSrc)}" alt="${E(D.name)}" onerror="this.remove()"></div>`;

 /* 3. Marquee */
 const stackList = D.stack || [];
 $("#mq").innerHTML = [...stackList, ...stackList].map(s => `<span>${E(s)}</span>`).join("");

 /* 4. Bento Grid (with dir="ltr" on stat numbers) */
 const statsList = D.stats || [];
 $("#bn").innerHTML = `<div class="bx ab rv"><p>${E(D.about || "")}</p></div>` +
  statsList.map((s, i) =>
   `<div class="bx sx rv${i === 2 ? " s3" : ""}" style="--c:var(--${s.c || 'sw'});--i:${i + 1}">` +
    `<b dir="ltr" ${s.text ? "" : `data-n="${s.n || 0}" data-s="${s.s || ""}"`}>${s.text ? E(s.text) : (s.n !== undefined ? s.n + (s.s || "") : 0)}</b>` +
    `${E(s.l || "")}` +
   `</div>`
  ).join("") +
  `<div class="bx av rv" style="--i:${statsList.length + 1}" title="Click to contact me"><i class="dot"></i>${E(D.available || "")}</div>`;

 /* 5. Skills */
 const skillsEntries = Object.entries(D.skills || {});
 $("#stx").innerHTML = skillsEntries.map(([k, v], i) =>
  `<div class="st${i === 0 ? " on" : ""}" tabindex="0" style="--c:var(--${k})">` +
   `<h3>${E(v.title || "")}</h3>` +
   `<p>${E(v.blurb || "")}</p>` +
   `<ul>` +
    (v.items || []).filter(item => Array.isArray(item) && item[0]).map(([n, p]) =>
     p == null
      ? `<li class="nb">${E(n)}</li>`
      : `<li><div><span>${E(n)}</span><span>${p}%</span></div><div class="tr"><i style="--w:${p}%"></i></div></li>`
    ).join("") +
   `</ul>` +
  `</div>`
 ).join("");

 const sts = [...document.querySelectorAll(".st")];
 const open = s => sts.forEach(x => x.classList.toggle("on", x === s));
 sts.forEach(s => {
  s.addEventListener("mouseenter", () => innerWidth > 859 && open(s));
  s.addEventListener("click", () => open(s));
  s.addEventListener("focus", () => open(s));
 });

 /* 6. Projects & Filters */
 renderFilters();
 renderProjects();

 /* 7. Education */
 const eduList = D.education || [];
 $("#ed").innerHTML = eduList.map((j, i) =>
  `<div class="ev rv" style="--c:var(--${j.c || 'sw'});--i:${i}">` +
   `<small>${E(j.date || "")}</small>` +
   `<div>` +
    `<b>${E(j.role || "")}${j.org ? `${U.sep}${E(j.org)}` : ""}</b>` +
    (j.text ? `<p>${E(j.text)}</p>` : "") +
   `</div>` +
  `</div>`
 ).join("");

 /* 8. Contact & Social */
 const C = D.contact || {};
 $("#phn").style.display = C.phone ? "" : "none";
 $("#tel").textContent = C.phone || "";
 $("#tel").href = "tel:" + (C.phone || "").replace(/[^+\d]/g, "");
 $("#em").textContent = C.email || "";
 $("#em").href = "mailto:" + (C.email || "");

 let socialButtons = [];
 if (Array.isArray(C.social) && C.social.length) {
  socialButtons = C.social;
 } else {
  if (C.github) socialButtons.push({ name: "GitHub", url: C.github });
  if (C.linkedin) socialButtons.push({ name: "LinkedIn", url: C.linkedin });
  if (C.whatsapp) socialButtons.push({ name: "WhatsApp", url: C.whatsapp });
 }
 $("#so").innerHTML = socialButtons.map((s, idx) => {
  const isWa = (s.name || "").toLowerCase().includes("whatsapp");
  return `<a class="btn${isWa ? " wa" : (idx % 2 === 1 ? " g" : "")}" href="${E(s.url)}" target="_blank" rel="noopener">${E(s.name)}</a>`;
 }).join("");

 document.querySelectorAll(".rv:not(.in)").forEach(el => io.observe(el));
 lay();
}

/* Event Delegations & Interactivity */
$("#lang").onclick = () => {
 L = L === "en" ? "ar" : "en";
 try { localStorage.setItem("lang", L); } catch (e) {}
 render();
};

const themeBtn = $("#theme-btn");
if (themeBtn) {
 themeBtn.onclick = () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  try { localStorage.setItem("theme", currentTheme); } catch (e) {}
 };
}

/* Copy email & phone to clipboard on click */
$("#em").onclick = e => {
 e.preventDefault();
 copyToClipboard(D.contact.email, (UI[L] && UI[L].copiedEmail) || "Email copied!");
};
$("#tel").onclick = e => {
 e.preventDefault();
 copyToClipboard(D.contact.phone, (UI[L] && UI[L].copiedPhone) || "Phone copied!");
};

/* Clicking "Available for work" scrolls to contact */
document.addEventListener("click", e => {
 const av = e.target.closest(".av");
 if (av) {
  const ct = $("#contact");
  if (ct) ct.scrollIntoView({ behavior: "smooth" });
 }
});

/* Video Modal */
const yt = u => {
 const m = (u || "").match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
 return m ? "https://www.youtube.com/embed/" + m[1] + "?autoplay=1&rel=0" : null;
};

function openV(i) {
 const p = (D.projects || [])[i];
 if (!p) return;
 if (!p.video) {
  if (p.live) window.open(p.live, "_blank");
  return;
 }
 const y = yt(p.video);
 $("#mb").innerHTML = (y
  ? `<iframe src="${y}" allow="autoplay; fullscreen" allowfullscreen title="${E(p.title)}"></iframe>`
  : `<video src="${E(p.video)}" controls autoplay playsinline></video>`) +
  `<p><b>${E(p.title)}</b>. ${E(p.desc)}</p>`;
 $("#md").classList.add("o");
}

const closeV = () => {
 $("#md").classList.remove("o");
 $("#mb").innerHTML = "";
};

$("#trk").onclick = e => {
 if (e.target.closest("a")) return;
 const c = e.target.closest(".pc");
 c && openV(+c.dataset.i);
};

$("#trk").onkeydown = e => {
 if (e.key === "Enter") {
  const c = e.target.closest(".pc");
  c && openV(+c.dataset.i);
 }
};

$("#mx").onclick = closeV;
$("#md").onclick = e => { e.target.id === "md" && closeV(); };
addEventListener("keydown", e => e.key === "Escape" && closeV());

/* Portrait Tilt */
$("#hero").addEventListener("mousemove", e => {
 const fr = $("#fr");
 if (fr) {
  fr.style.transform = `perspective(900px) rotateY(${(e.clientX / innerWidth - .5) * 10}deg) rotateX(${-(e.clientY / innerHeight - .5) * 8}deg)`;
 }
});

/* Pinned Horizontal Scroll for projects */
const hp = $("#hp"), trk = $("#trk");
function lay() {
 hp.style.height = innerWidth > 859 ? (trk.scrollWidth - innerWidth + innerHeight) + "px" : "auto";
 scr();
}
function scr() {
 const h = document.documentElement.scrollHeight - innerHeight;
 $("#top").style.width = (h > 0 ? (scrollY / h * 100) : 0) + "%";
 if (innerWidth <= 859) {
  trk.style.transform = "";
  return;
 }
 const maxScroll = hp.offsetHeight - innerHeight;
 const p = maxScroll > 0 ? Math.max(0, Math.min(1, (scrollY - hp.offsetTop) / maxScroll)) : 0;
 const sg = L === "ar" ? 1 : -1;
 trk.style.transform = `translateX(${sg * p * (trk.scrollWidth - innerWidth)}px)`;
 $("#pbi").style.width = (p * 100) + "%";
}

addEventListener("scroll", scr, { passive: true });
addEventListener("resize", lay);
addEventListener("load", lay);
document.fonts && document.fonts.ready.then(lay);

/* Mobile Navigation Menu Toggle */
const menuBtn = $("#menu-btn");
const mobMenu = $("#mob-menu");
const mobOverlay = $("#mob-overlay");
const mobClose = $("#mob-close");

function toggleMobMenu(open) {
 if (!mobMenu || !menuBtn) return;
 const isOpen = open !== undefined ? open : !mobMenu.classList.contains("open");
 mobMenu.classList.toggle("open", isOpen);
 if (mobOverlay) mobOverlay.classList.toggle("open", isOpen);
 menuBtn.classList.toggle("open", isOpen);
 menuBtn.setAttribute("aria-expanded", String(isOpen));
 mobMenu.setAttribute("aria-hidden", String(!isOpen));
 if (mobOverlay) mobOverlay.setAttribute("aria-hidden", String(!isOpen));
 document.body.style.overflow = isOpen ? "hidden" : "";
}

if (menuBtn) menuBtn.onclick = () => toggleMobMenu();
if (mobClose) mobClose.onclick = () => toggleMobMenu(false);
if (mobOverlay) mobOverlay.onclick = () => toggleMobMenu(false);

document.querySelectorAll(".mob-link, .mob-menu-footer a").forEach(link => {
 link.addEventListener("click", () => toggleMobMenu(false));
});

addEventListener("keydown", e => {
 if (e.key === "Escape" && mobMenu && mobMenu.classList.contains("open")) {
  toggleMobMenu(false);
 }
});

render();
