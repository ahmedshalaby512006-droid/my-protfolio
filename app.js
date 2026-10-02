
const DATA={
 name:"Ahmed Shalaby",
 photo:"IMG_20261001_224903.jpg",               
 greeting:"Hi, I'm Ahmed Shalaby, a software engineer",
 tagline:"I build fast, polished interfaces with React and JavaScript. I'm now learning Node.js and Java to work across the full stack, and growing into AI through data analysis, data science and SQL.",
 available:"Open to new roles and freelance projects",
 about:"I'm a software engineer who loves turning design into smooth, accessible interfaces with React and JavaScript. I'm learning Node.js and Java to build the back end too, and I'm using SQL, data analysis and data science to move toward AI.",
 stats:[{text:"+1",l:"Years of experience",c:"sw"},{n:5,s:"+",l:"Projects built",c:"sw"},{n:2,s:"",l:"Back-end languages in progress",c:"da"}],
 orbit:{sw:["React","JavaScript"],ai:["Data Science","SQL"],da:["Node.js","Java"]},
 stack:["React","JavaScript","HTML","CSS","Node.js","Java","SQL","Data Analysis","Data Science","AI"],
 skills:{
  sw:{title:"Front-End",blurb:"Fast, accessible interfaces built with React.",items:[["React",92],["JavaScript",90],["HTML & CSS",88],["UI/UX design",85]]},
  ai:{title:"Data & AI",blurb:"Turning raw data into answers and models.",items:[["SQL",null],["Data analysis",null],["Data science",null],["AI fundamentals",60]]},
  da:{title:"Back-End (learning)",blurb:"Extending my skills to the server side.",items:[["Node.js",10],["Java",40],["Python",35]]}
 },
 /* cat: sw (Front-End) | ai (Data & AI) | da (Back-End).  video: "videos/demo.mp4" or a YouTube link.  image: optional thumbnail */
 projects:[
  {title:"My Store",cat:"sw",desc:"A responsive e-commerce SPA built with React and Tailwind CSS, featuring product filtering, cart management, and REST API integration.",tags:["React","JavaScript","CSS","HTML"],video:"My Store - Google Chrome 2026-10-02 02-25-55.mp4",image:"My Store - Google Chrome 10_2_2026 2_24_45 AM.png",live:"https://ahmedshalaby512006-droid.github.io/My-Store/",repo:"https://github.com/ahmedshalaby512006-droid/My-Store"},
  {title:"Ankh Cafe",cat:"sw",desc:"A responsive landing page for a Pharaoh-themed coffee house, built with vanilla HTML, CSS, and JavaScript.",tags:["HTML","CSS" , "JavaScript"],video:"ANKH _ عنخ للقهوة الفرعونية and 4 more pages - Personal - Microsoft​ Edge 2026-10-01 23-50-23.mp4",image:"Ahmed Shalaby — Front-End Software Engineer and 11 more pages - Personal - Microsoft​ Edge 10_2_2026 12_16_12 AM.png",live:"https://ahmedshalaby512006-droid.github.io/ankh-cafe/",repo:"https://github.com/ahmedshalaby512006-droid/ankh-cafe"},
  {title:"Mood Cool Store",cat:"sw",desc:"A responsive landing page for an HVAC/air conditioning company, built with HTML, CSS, and JavaScript to showcase products and services.",tags:["HTML","CSS","JavaScript"],video:"Mood Cool _ تكييفات سبليت and 3 more pages - Personal - Microsoft​ Edge 2026-10-02 02-50-27.mp4",image:"My Store - Google Chrome 10_2_2026 2_44_34 AM.png",live:"https://ahmedshalaby512006-droid.github.io/mood-cool-store/",repo:"https://github.com/ahmedshalaby512006-droid/mood-cool-store"}
 ],
 education:[
  {role:"Faculty of Computers and Artificial Intelligence",org:"Damanhour University",date:"2025 to 2029",text:"Studying computing and artificial intelligence.",c:"ai"},
  {role:"Artificial Intelligence",org:"GCI",date:"In progress",text:"Currently studying artificial intelligence.",c:"ai"},
  {role:"Web Development",org:"ITI",date:"Completed",text:"Completed web development training.",c:"sw"}
 ],
 contact:{text:"Open to full-time roles, freelance work and collaborations.",phone:"01551644292",email:"ahmedshalaby512006@gmail.com",github:"https://github.com/ahmedshalaby512006-droid",linkedin:"https://www.linkedin.com/in/ahmed-shalaby-569100308?utm_source=share_via&utm_content=profile&utm_medium=member_android"}
};




/* Arabic version: only the translatable fields */
const AR={
 greeting:"أهلًا، أنا أحمد شلبي، مهندس برمجيات",
 tagline:"أبني واجهات سريعة وأنيقة باستخدام React وJavaScript. أتعلم حاليًا Node.js وJava لأعمل على الواجهة الخلفية أيضًا، وأتجه نحو الذكاء الاصطناعي من خلال تحليل البيانات وعلوم البيانات وSQL.",
 available:"متاح لفرص عمل جديدة ومشاريع حرة",
 about:"أنا مهندس برمجيات أحب تحويل التصميم إلى واجهات سلسة وسهلة الاستخدام باستخدام React وJavaScript. أتعلم Node.js وJava لأبني الجزء الخلفي أيضًا، وأستخدم SQL ل البيانات وعلوم البيانات للتقدم نحو الذكاء الاصطناعي. .",
 stats:[{l:"سنوات الخبرة"},{l:"مشاريع منفذة"},{l:"لغات خلفية قيد التعلم"}],
 skills:{
  sw:{title:"الواجهة الأمامية",blurb:"واجهات سريعة وسهلة الوصول مبنية بـ React.",items:[[],[],[],["تصميم UI/UX"]]},
  ai:{title:"البيانات والذكاء الاصطناعي",blurb:"تحويل البيانات الخام إلى إجابات ونماذج.",items:[[],["تحليل البيانات"],["علوم البيانات"],["أساسيات الذكاء الاصطناعي"]]},
  da:{title:"الواجهة الخلفية (قيد التعلم)",blurb:"أوسّع مهاراتي لتشمل جانب الخادم.",items:[]}
 },
 projects:[
  {title:" متجري",desc:"متجر إلكتروني متكامل (SPA) مبني باستخدام React وTailwind CSS، يتضمن تصفح المنتجات، سلة تسوق ديناميكية، والربط مع REST API."},
  {title:"عنخ كافية",desc:"واجهة هبوط متجاوبة لكافيه مستوحى من الطابع الفرعوني، تم بناؤها باستخدام HTML وCSS وJavaScript لتوفير تصفح سلس لقائمة المشروبات."},
  {title:"متجر موود كوول",desc:"صفحة هبوط متجاوبة لشركة تكييفات، مبنية بـ HTML وCSS وJavaScript لعرض المنتجات وخدمات التركيب مع تجربة تصفح سريعة."}
 ],
 education:[
  {role:"كلية الحاسبات والذكاء الاصطناعي",org:"جامعة دمنهور",date:"من 2025 إلى 2029",text:"أدرس الحوسبة والذكاء الاصطناعي."},
  {role:"الذكاء الاصطناعي",org:"GCI",date:"قيد الدراسة",text:"أدرس الذكاء الاصطناعي حاليًا."},
  {role:"تطوير الويب",org:"ITI",date:"مكتمل",text:"أنهيت التدريب على تطوير الويب."}
 ],
 contact:{text:"متاح للوظائف بدوام كامل والعمل الحر والتعاون."}
};
const UI={
 en:{lang:"العربية",docT:"Front-End Software Engineer",nAbout:"About",nSkills:"Skills",nProjects:"Projects",nEdu:"Education",nContact:"Contact",
  h:["Front-End","Data &amp; AI","Back-End","Engineer."],b1:"See my projects",b2:"Get in touch",photo:"",
  hAbout:"About Me",hSkills:"Technical Skills",sSkills:"The set of tools and technologies I rely on to build scalable projects.",
  hProj:"Projects",sProj:"Scroll to move through them. Select one to watch the demo.",cat:{sw:"Front-End",ai:"Data &amp; AI",da:"Back-End"},live:"Live site",repo:"Source code",
  hEdu:"Education and training",tel:"Phone:",hCt:"Let's build something together",sep:", "},
 ar:{lang:"English",docT:"مهندس برمجيات واجهات أمامية",nAbout:"نبذة",nSkills:"المهارات",nProjects:"المشاريع",nEdu:"التعليم",nContact:"تواصل",
  h:["فرونت إند","بيانات وAI","باك إند","مهندس."],b1:"شاهد مشاريعي",b2:"تواصل معي",photo:"أضف صورتك",
  hAbout:"من أنا",hSkills:"المهارات التقنية",sSkills:"مجموعة الأدوات والتقنيات التي أعتمد عليها في بناء المشاريع.",
  hProj:"المشاريع",sProj:"مرّر للتنقل بين المشاريع، واضغط على أي مشروع لمشاهدة العرض.",cat:{sw:"الواجهة الأمامية",ai:"بيانات وذكاء اصطناعي",da:"الواجهة الخلفية"},live:"الموقع",repo:"الكود المصدري",
  hEdu:"التعليم والتدريب",tel:"الهاتف:",hCt:"لنبنِ شيئًا معًا",sep:"، "}
};

const $=s=>document.querySelector(s),E=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const mg=(a,b)=>{if(b===undefined)return a;if(Array.isArray(a))return a.map((x,i)=>mg(x,b[i]));if(a&&typeof a==="object"){const o={...a};for(const k in b)o[k]=mg(a[k],b[k]);return o}return b};
let L="en",D=DATA;
try{L=localStorage.getItem("lang")||(navigator.language||"").startsWith("ar")&&"ar"||"en"}catch(e){}

const io=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const t=en.target;t.classList.add("in");
 t.querySelectorAll("[data-n]").forEach(b=>{const n=+b.dataset.n,s=b.dataset.s,t0=performance.now();
  (function f(t1){const k=Math.min((t1-t0)/1600,1);b.textContent=Math.round(n*(1-Math.pow(1-k,3)))+s;k<1&&requestAnimationFrame(f)})(t0)});
 io.unobserve(t)}),{threshold:.25});

function render(){
 D=L==="ar"?mg(DATA,AR):DATA;const U=UI[L],r=document.documentElement;
 r.lang=L;r.dir=L==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-t]").forEach(e=>e.textContent=U[e.dataset.t]);
 document.querySelectorAll("[data-p]").forEach(e=>e.placeholder=U[e.dataset.p]);
 document.title=D.name+" — "+U.docT;
 $("#logo").textContent=D.name.split(" ")[0]+".";$("#lang").textContent=U.lang;
 $("#hi").textContent=D.greeting;$("#tag").textContent=D.tagline;$("#ct").textContent=D.contact.text;
 $("#ft").textContent="© "+new Date().getFullYear()+" "+D.name;


 /* hero */
 $("#h1").innerHTML=["sw","ai","da"].map((c,i)=>`<span class="ln o" style="--c:var(--${c});--i:${i}"><i>${U.h[i]}</i></span>`).join("")+`<span class="ln" style="--i:3"><i>${U.h[3]}</i></span>`;
 $("#ph").innerHTML=Object.entries(D.orbit).map(([k,v])=>`<div class="ring" style="--c:var(--${k})"><span class="chip">${E(v[0])}</span><span class="chip b">${E(v[1])}</span></div>`).join("")+
  `<div class="fr" id="fr"><img src="IMG_20261001_224903.jpg" onerror="this.remove()"></div>`;
 $("#mq").innerHTML=[...D.stack,...D.stack].map(s=>`<span>${E(s)}</span>`).join("");


 /* bento */
 $("#bn").innerHTML=`<div class="bx ab rv"><p>${E(D.about)}</p></div>`+
  D.stats.map((s,i)=>`<div class="bx sx rv${i==2?" s3":""}" style="--c:var(--${s.c});--i:${i+1}"><b ${s.text?"":`data-n="${s.n}" data-s="${s.s}"`}>${s.text?E(s.text):0}</b>${E(s.l)}</div>`).join("")+
  `<div class="bx av rv" style="--i:4"><i class="dot"></i>${E(D.available)}</div>`;



 /* skills */
 $("#stx").innerHTML=Object.entries(D.skills).map(([k,v],i)=>`<div class="st${i?"":" on"}" tabindex="0" style="--c:var(--${k})"><h3>${E(v.title)}</h3><p>${E(v.blurb)}</p><ul>${v.items.map(([n,p])=>p==null?`<li class="nb">${E(n)}</li>`:`<li><div><span>${E(n)}</span><span>${p}%</span></div><div class="tr"><i style="--w:${p}%"></i></div></li>`).join("")}</ul></div>`).join("");
 const sts=[...document.querySelectorAll(".st")],open=s=>sts.forEach(x=>x.classList.toggle("on",x===s));
 sts.forEach(s=>{s.addEventListener("mouseenter",()=>innerWidth>859&&open(s));s.addEventListener("click",()=>open(s));s.addEventListener("focus",()=>open(s))});


 /* projects */
 $("#trk").innerHTML=D.projects.map((p,i)=>`<article class="pc" data-i="${i}" tabindex="0" style="--c:var(--${p.cat})"><div class="th">${p.image?`<img src="${E(p.image)}" alt="${E(p.title)}" loading="lazy">`:""}<div class="pl"></div></div><div class="pi"><span class="cat">${U.cat[p.cat]}</span><h3>${E(p.title)}</h3><p>${E(p.desc)}</p><div class="tg">${p.tags.map(t=>`<span>${E(t)}</span>`).join("")}</div><div class="lk">${p.live?`<a href="${E(p.live)}" target="_blank" rel="noopener">${U.live}</a>`:""}${p.repo?`<a href="${E(p.repo)}" target="_blank" rel="noopener">${U.repo}</a>`:""}</div></div></article>`).join("");
 
 
 
 /* education */
 $("#ed").innerHTML=D.education.map((j,i)=>`<div class="ev rv" style="--c:var(--${j.c});--i:${i}"><small>${E(j.date)}</small><div><b>${E(j.role)}${U.sep}${E(j.org)}</b><p>${E(j.text)}</p></div></div>`).join("");
 
 
 
 /* contact */
 const C=D.contact;$("#phn").style.display=C.phone?"":"none";$("#tel").textContent=C.phone;$("#tel").href="tel:"+C.phone.replace(/[^+\d]/g,"");
 $("#em").textContent=C.email;$("#em").href="mailto:"+C.email;
 $("#so").innerHTML=`<a class="btn" href="${E(C.github)}" target="_blank" rel="noopener">GitHub</a><a class="btn g" href="${E(C.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`;
 document.querySelectorAll(".rv:not(.in)").forEach(el=>io.observe(el));
 lay();
}



/* language toggle */
$("#lang").onclick=()=>{L=L==="en"?"ar":"en";try{localStorage.setItem("lang",L)}catch(e){}render()};



/* video modal */
const yt=u=>{const m=(u||"").match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);return m?"https://www.youtube.com/embed/"+m[1]+"?autoplay=1&rel=0":null};
function openV(i){const p=D.projects[i],y=yt(p.video);
 $("#mb").innerHTML=(y?`<iframe src="${y}" allow="autoplay; fullscreen" allowfullscreen title="${E(p.title)}"></iframe>`:`<video src="${E(p.video)}" controls autoplay playsinline></video>`)+`<p><b>${E(p.title)}</b>. ${E(p.desc)}</p>`;
 $("#md").classList.add("o")}
const closeV=()=>{$("#md").classList.remove("o");$("#mb").innerHTML=""};
$("#trk").onclick=e=>{if(e.target.closest("a"))return;const c=e.target.closest(".pc");c&&openV(+c.dataset.i)};
$("#trk").onkeydown=e=>{if(e.key==="Enter"){const c=e.target.closest(".pc");c&&openV(+c.dataset.i)}};
$("#mx").onclick=closeV;$("#md").onclick=e=>{e.target.id==="md"&&closeV()};
addEventListener("keydown",e=>e.key==="Escape"&&closeV());


/* portrait tilt */
$("#hero").addEventListener("mousemove",e=>{const fr=$("#fr");if(fr)fr.style.transform=`perspective(900px) rotateY(${(e.clientX/innerWidth-.5)*10}deg) rotateX(${-(e.clientY/innerHeight-.5)*8}deg)`});



/* pinned horizontal scroll for projects */
const hp=$("#hp"),trk=$("#trk");
function lay(){hp.style.height=innerWidth>859?(trk.scrollWidth-innerWidth+innerHeight)+"px":"auto";scr()}
function scr(){const h=document.documentElement.scrollHeight-innerHeight;$("#top").style.width=(scrollY/h*100)+"%";
 if(innerWidth<=859){trk.style.transform="";return}
 const p=Math.max(0,Math.min(1,(scrollY-hp.offsetTop)/(hp.offsetHeight-innerHeight))),sg=L==="ar"?1:-1;
 trk.style.transform=`translateX(${sg*p*(trk.scrollWidth-innerWidth)}px)`;$("#pbi").style.width=p*100+"%"}
addEventListener("scroll",scr,{passive:true});addEventListener("resize",lay);addEventListener("load",lay);
document.fonts&&document.fonts.ready.then(lay);
render();
