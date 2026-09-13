/* บ้านดี คอนสตรัคชั่น — main.js · i18n · ผลงาน · FAQ · ฟอร์ม · เมนู */
document.documentElement.classList.add('js');
(function(){
'use strict';
var $=function(s,c){return (c||document).querySelector(s);};
var $$=function(s,c){return [].slice.call((c||document).querySelectorAll(s));};
var reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;

/* EN dictionary (TH from HTML) */
var EN = {
'meta.title':'Baan Dee Construction | Home Builder & Renovation, Khon Kaen',
'skip':'Skip to content','brand':'Baan Dee','brand.sub':'Construction',
'nav.services':'Services','nav.portfolio':'Projects','nav.process':'Process','nav.reviews':'Reviews','nav.faq':'FAQ','nav.contact':'Contact',
'aria.menu':'Open menu','brand.home':' — home','aria.nav':'Main menu','aria.lang':'Choose language','aria.stats':'Key figures',
'aria.filter':'Filter projects by type','aria.stars':'5 stars','aria.contact':'Contact channels','aria.bar':'Quick contact','aria.map':'Office map, Khon Kaen',
'cta.quote':'Get a free quote','cta.call':'Call 082-345-6789',
'hero.eyebrow':'Construction · Renovation · Extensions · Khon Kaen',
'hero.h1':'Build your home <mark>on budget</mark>, with a <span class="nb">10-year structural</span> warranty',
'hero.sub':'Engineer-supervised home building, renovation and extensions in Khon Kaen.<span class="hero-more"> The contract fixes the price and handover date from day one. No surprise extras.</span>',
'hero.n1':'Free site visit, no obligation','hero.n2':'Reply within 24 hours','hero.n3':'Pay by completed milestones',
'stat.years':'Years of experience','stat.homes':'Homes handed over','stat.team':'In-house tradespeople','stat.yr':'yrs','stat.warranty':'Structural warranty',
'svc.eyebrow':'What we do','svc.title':'From foundations to wiring, one team handles it all',
'svc.sub':'No juggling several contractors. Every project has a dedicated engineer and site foreman from the first day to handover.',
'svc1.t':'New home construction','svc1.d':'Design, permits and construction through to key handover. Single to three-storey homes, on empty land or rebuilds.',
'svc2.t':'Home renovation','svc2.d':'Bring an old house back to life: kitchens, bathrooms, floors, walls and roofs. We inspect first and give a clear price before any demolition starts.',
'svc3.t':'Extensions','svc3.d':'Back kitchens, carports, terraces and ground-floor bedrooms. Separate foundations calculated by our engineer, so nothing sinks or cracks.',
'svc4.t':'Electrical & plumbing','svc4.d':'Full rewiring, water supply and sanitary systems, air-conditioning and solar installation. Certified equipment (TIS) and licensed technicians.',
'svc.from':'From','svc.sqm':'THB/sq.m.','svc.from2':'Priced after site inspection','svc.cta':'Request a quote',
'pf.eyebrow':'Our work','pf.title':'A few of the 86 homes we have handed over',
'pf.sub':'Every project belongs to a real homeowner. Budgets shown are approximate construction costs in the year of handover, excluding land and furniture.',
'pf.all':'All','pf.new':'New build','pf.reno':'Renovation','pf.ext':'Extension',
'pf.sqm':'sq.m.','pf.budget':'Approx. budget','pf.more':'Show all projects','pf.less':'Show fewer',
'pr.eyebrow':'How we work','pr.title':'5 steps from our first chat to your keys',
'pr.sub':'You know in advance what happens at each stage, when payments are due, and who is responsible.',
'pr1.t':'Brief and site visit','pr1.d':'Meet at our office or on your land, free of charge. We ask about budget, timeline and the style you like.','pr1.x':'Free · 1-2 days',
'pr2.t':'Design and BOQ quote','pr2.d':'You get draft drawings with a line-by-line materials and price list. Revise until you are happy. No design fee if you build with us.','pr2.x':'2-4 weeks',
'pr3.t':'Contract and permits','pr3.d':'The contract states milestones, material brands and the handover date. We file the building permit with the local authority for you.','pr3.x':'2-6 weeks',
'pr4.t':'Construction','pr4.d':'Our engineer inspects every critical stage. You receive photos and a progress report on LINE every week and can visit the site any time.','pr4.x':'5-12 months',
'pr5.t':'Inspection & handover','pr5.d':'We walk through together, point by point, fix everything on the list, then hand over with warranty documents, as-built drawings and a home care guide.','pr5.x':'1-2 weeks',
'why.badge':'10-year structural warranty','why.badge2':'Written into every contract',
'docs.title':'Documents every homeowner receives','docs.1':'Itemised BOQ','docs.2':'10-year warranty certificate','docs.3':'Contract with milestones and handover date',
'why.eyebrow':'Why Baan Dee','why.title':'What we promise, and put in writing',
'why1.t':'A licensed engineer on every project','why1.d':'A civil engineer licensed by the Council of Engineers inspects and signs off the structure at every stage. Not just a foreman keeping an eye on things.',
'why2.t':'TIS-certified materials','why2.d':'Brands and models of key materials are named in the contract: steel, cement, tiles, sanitary ware. Specs change only with the homeowner’s written consent.',
'why3.t':'Clear contract, no surprise extras','why3.d':'Itemised BOQ for every category. You pay per completed milestone, with no large upfront deposit. The price only changes if you ask for a spec change.',
'why4.t':'On time, or we pay a penalty','why4.d':'The handover date is in the contract. If we are late through our own fault, we pay you a daily penalty. Over 12 years, 9 in 10 homes were delivered on or before schedule.',
'rv.eyebrow':'From our homeowners','rv.title':'What clients say about us',
'rv1.q':'I was really worried about the budget running away, because a friend had been through it. Here the price followed the BOQ from start to finish; the only extra was the tiles we chose to upgrade. They even handed over two weeks early.',
'rv1.av':'W','rv1.n':'Khun Waraporn','rv1.w':'New build · Khon Kaen',
'rv2.q':'Tidy, careful work. They cleaned up every single day and never left cement debris behind. The new kitchen has been in use for eight months without a single issue, and they reply fast on LINE.',
'rv2.av':'S','rv2.n':'Khun Somchai','rv2.w':'Kitchen renovation · Udon Thani',
'rv3.q':'We extended the kitchen on a separate foundation as their engineer advised. I did not get why at first. Then this year’s heavy rain cracked the neighbour’s extension by another builder, and ours was completely fine.',
'rv3.av':'P','rv3.n':'Khun Pimchanok','rv3.w':'Kitchen extension · Maha Sarakham',
'rv4.q':'I work in Bangkok and built a house for my parents in Kalasin. Weekly progress photos on LINE meant I saw the site the whole way through, as if I were there. The electrical and plumbing work is very neat.',
'rv4.av':'T','rv4.n':'Khun Thanakorn','rv4.w':'New build · Kalasin',
'faq.eyebrow':'FAQ','faq.title':'What homeowners usually ask before deciding',
'faq1.q':'How is the construction cost calculated? How much per square metre?',
'faq1.a':'A typical home starts at roughly 12,900-18,500 THB per square metre, depending on material specs, number of storeys and design complexity. You get an itemised BOQ before signing. The agreed price is what you pay, unless you request a spec change.',
'faq2.q':'How long does it take to build a house?',
'faq2.a':'A single-storey home takes about 5-7 months, a two-storey home about 8-12 months, counted from the start of work after the permit is issued. The duration is in the contract, with a daily penalty if delays are on our side.',
'faq3.q':'What is covered by the warranty, and for how long?',
'faq3.a':'Structure (columns, beams, foundations) 10 years; roof leaks 3 years; electrical, plumbing and general finishes 1 year. Warranty documents are handed over on delivery day.',
'faq4.q':'How do payments work? Is a large deposit required?',
'faq4.a':'No large deposit. Payment is split into 6-8 milestones based on completed work. The first payment on signing is about 10-15%; the rest is paid after each milestone passes inspection. Bank construction loans are supported.',
'faq5.q':'I have no house plans yet. Where do I start?',
'faq5.a':'You can start without plans. Choose from our standard designs and adapt them, or have our architect design from scratch. We prepare the permit drawings and file them with the local authority for you.',
'q.eyebrow':'Free quote','q.title':'Tell us roughly what you want to build. We will get back to you.',
'q.sub':'Fill in only what you know. Our team will call or message you on LINE within 24 hours on business days to arrange a free site visit.',
'f.name':'Full name','f.name.ph':'e.g. Somying Jaidee','f.phone':'Phone number','f.type':'Type of work',
'f.type.0':'Select a type','f.type.1':'New home','f.type.2':'Renovation','f.type.3':'Extension','f.type.4':'Electrical & plumbing','f.type.5':'Other',
'f.area':'Approximate area <small>(sq.m.)</small>','f.area.ph':'e.g. 150',
'f.budget':'Budget range','f.budget.0':'Not sure yet','f.budget.1':'Under 500,000 THB','f.budget.2':'500,000 - 1 million THB','f.budget.3':'1 - 3 million THB','f.budget.4':'3 - 5 million THB','f.budget.5':'Over 5 million THB',
'f.detail':'Details <small>(optional)</small>','f.detail.ph':'e.g. Land in Nam Phong, want a single-storey 3-bedroom home',
'f.submit':'Send quote request',
'f.pdpa':'By submitting, you consent to us storing and using your details to contact you, as described in our <a href="privacy.html">privacy policy</a>. We never share your data with third parties.',
'f.ok':'Thank you. We have received your request and will contact you within 24 hours on business days.',
'f.err':'Sorry, the message could not be sent. Please call 082-345-6789 or message LINE @example.',
'f.sending':'Sending…','f.invalid':'Please fill in your name, phone number and type of work.',
'c.phone':'Call us Mon-Sat 08:00-17:30','c.line':'Message us on LINE, send site photos or plans first',
'c.fb':'Facebook page','c.fb2':'Weekly progress photos from our sites',
'c.office':'Office and materials showroom','c.addr':'199/8 Si Chan Road, Nai Mueang, Mueang Khon Kaen, Khon Kaen 40000',
'c.hours':'Opening hours','c.hours2':'Mon-Sat 08:00-17:30 · Sunday by appointment',
'area.eyebrow':'Service area','area.title':'All districts of Khon Kaen and <span class="nb">nearby provinces</span>',
'area.sub':'Our crews are based in Khon Kaen and can reach any site within a day. In other provinces within 150 km we take on medium-sized builds and renovations.',
'area.1':'Khon Kaen (all districts)','area.2':'Udon Thani','area.3':'Maha Sarakham','area.4':'Kalasin','area.5':'Chaiyaphum','area.6':'Roi Et','area.7':'Nong Bua Lam Phu',
'area.office':'Office:','area.maplink':'Open in Google Maps',
'ft.about':'Home building, renovation, extensions and MEP works in Khon Kaen and Northeast Thailand. Founded in 2014. Engineer-supervised sites, 10-year structural warranty.',
'ft.reg':'Baan Dee Construction Co., Ltd. · Company registration no. 0405557001234',
'ft.menu':'Menu','ft.services':'Services','ft.contact':'Contact','ft.fb':'Facebook: Baan Dee Construction',
'ft.copy':'© 2026 Baan Dee Construction. All rights reserved.','ft.privacy':'Privacy policy',
'ft.demo':'Demo website — fictional business created to showcase web design',
'bar.call':'Call','bar.quote':'Get a quote',
'ck.text':'This website uses cookies to analyse usage and improve our service. See our privacy policy for details.','ck.no':'Decline','ck.yes':'Accept',
/* privacy.html */
'pv.meta.title':'Privacy Policy | Baan Dee Construction','pv.title':'Privacy Policy','pv.sub':'Last updated 1 September 2026 · Baan Dee Construction',
'pv.intro':'This policy explains what personal data Baan Dee Construction collects through this website and other contact channels, why, for how long, and your rights under Thailand’s Personal Data Protection Act B.E. 2562 (PDPA).',
'pv.h1':'1. Data we collect','pv.h1p':'We collect only what is needed to give you a quote and carry out the work:',
'pv.l1a':'Quote form: name, phone number, type of work, approximate area, budget range and any details you provide','pv.l1b':'LINE or phone contact: your display name, phone number and the messages, photos or plans you send us','pv.l1c':'When work proceeds: site address, ID card copy and documents needed for the permit and contract',
'pv.h2':'2. Why we use it','pv.t.purpose':'Purpose','pv.t.basis':'Legal basis','pv.t.retention':'Retention',
'pv.r1a':'Contacting you back, arranging a site visit and preparing a quote','pv.r1b':'Consent / steps prior to a contract','pv.r1c':'1 year after last contact if no contract is signed',
'pv.r2a':'Performing the construction contract, permits, invoicing and warranty','pv.r2b':'Contract performance / legal obligation','pv.r2c':'Warranty period + 2 years (up to 12 years for structural warranty)',
'pv.r3a':'Accounting and tax records','pv.r3b':'Legal obligation','pv.r3c':'5 years as required by law',
'pv.h3':'3. Sharing your data','pv.h3p':'We never sell or pass on your data for marketing. It is shared only with parties needed to deliver the work: our engineer, subcontractors on your project, the permit authority and the form service that delivers website messages to us, each only as far as required.',
'pv.h4':'4. Cookies and tracking','pv.h4p':'This website uses no analytics or advertising trackers. It only stores your language preference in your browser, which is never sent to us. The embedded Google Maps frame is governed by Google’s privacy policy.',
'pv.h5':'5. Your rights','pv.h5p':'You may ask to access, correct, delete or receive a copy of your data, withdraw consent, or object to processing at any time. We respond within 30 days.',
'pv.h6':'6. Security','pv.h6p':'Form submissions are encrypted in transit (HTTPS). Customer files are kept in access-controlled systems available only to staff who need them for your project.',
'pv.h7':'7. Contact for data matters','pv.h7p':'Data controller: Baan Dee Construction Co., Ltd., 199/8 Si Chan Road, Nai Mueang, Mueang Khon Kaen, Khon Kaen 40000 · Tel. 082-345-6789 · LINE @example',
'pv.back':'Back to home',
/* 404.html */
'nf.meta.title':'Page not found | Baan Dee Construction','nf.title':'Page not found','nf.sub':'The page may have been moved or the link is wrong. Head back to the home page or contact us directly.',
'nf.home':'Go to home page'
};

/* 12 projects — th/en: [ชื่องาน, เจ้าของ, อำเภอ] */
var PROJECTS=[
  {img:'pj-01',type:'new',area:220,budget:3900000,year:2568,th:['บ้านมินิ⁠มอล 2 ชั้น','คุณวราภรณ์','อ.เมืองขอนแก่น'],en:['Minimal 2-storey home','Khun Waraporn','Mueang Khon Kaen'],alt:'บ้านสองชั้นสีขาว มีต้นไม้ใหญ่หน้าบ้าน'},
  {img:'pj-06',type:'reno',area:48,budget:450000,year:2568,th:['รี⁠โน⁠เวทครัวทั้ง⁠ห้อง','คุณสมชาย','อ.เมืองอุดรธานี'],en:['Full kitchen renovation','Khun Somchai','Mueang Udon Thani'],alt:'ครัวบิวท์อินลายไม้ ท็อปขาว'},
  {img:'pj-10',type:'ext',area:42,budget:360000,year:2568,th:['ต่อเติมระเบียงหลัง⁠บ้าน','คุณสุรชัย','อ.เมืองขอนแก่น'],en:['Rear terrace extension','Khun Surachai','Mueang Khon Kaen'],alt:'ระเบียงหลังบ้าน พื้นกระเบื้องเทา ประตูกระจก'},
  {img:'pj-02',type:'new',area:160,budget:2600000,year:2568,th:['บ้านทรงกล่อง ชั้นเดียว','คุณกิตติ','อ.น้ำพอง'],en:['Single-storey box house','Khun Kitti','Nam Phong'],alt:'บ้านทรงกล่องปูนเปลือย ล้อมด้วยต้นปาล์ม'},
  {img:'pj-07',type:'reno',area:120,budget:890000,year:2567,th:['รี⁠โน⁠เวททาวน์⁠เฮาส์ทั้ง⁠หลัง','คุณนภา','อ.ชุมแพ'],en:['Whole-townhouse renovation','Khun Napha','Chum Phae'],alt:'ห้องนั่งเล่นโซฟาขาว พื้นกระเบื้อง แสงธรรมชาติ'},
  {img:'pj-11',type:'ext',area:42,budget:290000,year:2567,th:['เปลี่ยนหลังคา + โรง⁠จอดรถ','คุณมานพ','อ.น้ำพอง'],en:['Roof replacement and carport','Khun Manop','Nam Phong'],alt:'กระเบื้องหลังคาสีอิฐบนระแนงไม้'},
  {img:'pj-03',type:'new',area:310,budget:5400000,year:2567,th:['บ้าน 2 ชั้น ระเบียงกว้าง','คุณอรทัย','อ.บ้านไผ่'],en:['2-storey home with wide terrace','Khun Orathai','Ban Phai'],alt:'บ้านสองชั้นผนังหินและไม้ ระเบียงกระจก สนามหญ้า'},
  {img:'pj-08',type:'reno',area:64,budget:520000,year:2567,th:['ครัวและห้องนั่งเล่นใหม่','คุณเอกชัย','อ.เมืองมหาสารคาม'],en:['New kitchen and living room','Khun Ekkachai','Mueang Maha Sarakham'],alt:'ครัวตู้ขาว ผนังลายไม้ เคาน์เตอร์บาร์'},
  {img:'pj-04',type:'new',area:240,budget:4400000,year:2567,th:['บ้านระแนงไม้ริมสวน','คุณณัฐพล','อ.เมืองอุดรธานี'],en:['Timber-screen garden home','Khun Nattapon','Mueang Udon Thani'],alt:'บ้านผนังระแนงไม้และหิน ตอนพลบค่ำ'},
  {img:'pj-09',type:'ext',area:28,budget:240000,year:2566,th:['ต่อเติมครัวหลัง⁠บ้าน','คุณพิมพ์ชนก','อ.เมืองมหาสารคาม'],en:['Rear kitchen extension','Khun Pimchanok','Mueang Maha Sarakham'],alt:'ครัวบิวท์อินโทนเข้ม เตาอบและฮูดสีดำ'},
  {img:'pj-05',type:'new',area:260,budget:4800000,year:2566,th:['บ้าน 2 ชั้น มีสนามหญ้า','คุณจิราภา','อ.เมืองขอนแก่น'],en:['2-storey home with lawn','Khun Jirapa','Mueang Khon Kaen'],alt:'บ้านสองชั้นพร้อมสนามหญ้าและทางเดินหิน'},
  {img:'pj-12',type:'new',area:180,budget:2900000,year:2566,th:['บ้าน 2 ชั้น พร้อมงานระบบ','คุณธนากร','อ.เมืองกาฬสินธุ์'],en:['2-storey home incl. MEP works','Khun Thanakorn','Mueang Kalasin'],alt:'บ้านสองชั้นมีระเบียง สวนหน้าบ้าน'}
];
var TYPE_LABEL={th:{'new':'สร้างใหม่',reno:'รีโนเวท',ext:'ต่อเติม'},en:{'new':'New build',reno:'Renovation',ext:'Extension'}};
var MOBILE_SHOW=6;

/* ---- i18n ---- */
var lang='th';
var TH={};
var ATTRS=[['data-i18n-ph','placeholder'],['data-i18n-aria','aria-label'],['data-i18n-title','title'],['data-i18n-th','data-th']];
function captureThai(){/* เก็บไทยจาก DOM เมื่อสลับภาษาครั้งแรก */
  if (TH._ok) return;TH._ok=1;
  $$('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if (!(k in TH)) TH[k]=el.textContent;});
  $$('[data-i18n-html]').forEach(function(el){var k=el.getAttribute('data-i18n-html');if (!(k in TH)) TH[k]=el.innerHTML;});
  ATTRS.forEach(function(a){$$('['+a[0]+']').forEach(function(el){var k=el.getAttribute(a[0]);if (!(k in TH)) TH[k]=el.getAttribute(a[1])||'';});});
  var f=$('#quote-form');
  if (f) ['ok','err','sending','invalid'].forEach(function(k){TH['f.'+k]=f.getAttribute('data-'+k);});
}
function t(k){var d=lang==='en'?EN :TH;return (k in d)?d[k] :(TH[k]||EN[k]||k);}
function applyLang(l){
  captureThai();
  lang=l==='en'?'en' :'th';
  document.documentElement.lang=lang;
  $$('[data-i18n]').forEach(function(el){el.textContent=t(el.getAttribute('data-i18n'));});
  $$('[data-i18n-html]').forEach(function(el){el.innerHTML=t(el.getAttribute('data-i18n-html'));});
  ATTRS.forEach(function(a){$$('['+a[0]+']').forEach(function(el){el.setAttribute(a[1],t(el.getAttribute(a[0])));});});
  $$('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-lang')===lang?'true' :'false');});
  try {localStorage.setItem('bd-lang',lang);} catch (e){}
  var m=$('#form-msg');if (m) m.hidden=true;
  renderProjects();
}
var q=null,saved=null;/* ?lang= / ภาษาที่เคยเลือก */
try {q=new URLSearchParams(location.search).get('lang');saved=localStorage.getItem('bd-lang');} catch (e){}
function initLang(){
  var g=$('#pf-grid');
  if (g){TH['pf.sqm']=g.getAttribute('data-sqm');TH['pf.budget']=g.getAttribute('data-budget');}
  var l=q||saved||'th';
  if (l!=='th'||q) applyLang(l);else renderProjects();
  $$('.lang button').forEach(function(b){b.addEventListener('click',function(){applyLang(b.getAttribute('data-lang'));});});
}

var filter='all';
function fmtBudget(n){
  if (lang==='en') return n>=1e6?'฿'+(n/1e6).toFixed(1).replace(/\.0$/,'')+'M' :'฿'+Math.round(n/1e3)+'K';
  return n>=1e6?(n/1e6).toFixed(1).replace(/\.0$/,'')+' ล้านบาท' :(n/1e5).toFixed(1).replace(/\.0$/,'')+' แสนบาท';
}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
var SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
var ICON_USER=SVG+'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
var ICON_PIN=SVG+'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>';
var ICON_AREA=SVG+'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></svg>';
function renderProjects(){
  var grid=$('#pf-grid');if (!grid) return;
  var eager=matchMedia('(min-width:1000px)').matches;/* มือถือ → lazy */
  var html='';
  PROJECTS.forEach(function(p,i){
    var L=lang==='en'?p.en :p.th;
    var year=lang==='en'?p.year-543 :p.year;
    var hide=filter!=='all'&&p.type!==filter;
    html += '<article class="pf" data-type="'+p.type+'"'+(hide?' hidden' :'')+'>' +
      '<div class="pf-media"><img src="img/'+p.img+'.webp" srcset="img/'+p.img+'-360.webp 360w,img/'+p.img+'-480.webp 480w,img/'+p.img+'.webp 640w" sizes="(max-width:599px) 40vw,(max-width:999px) 48vw,350px" width="640" height="480" alt="'+esc(p.alt)+'" loading="'+(eager&&i<3?'eager' :'lazy')+'" decoding="async">' +
      '<span class="pf-tag">'+TYPE_LABEL[lang][p.type]+'</span><span class="pf-year">'+year+'</span></div>' +
      '<div class="pf-body"><h3>'+esc(L[0])+'</h3>' +
      '<ul class="pf-meta"><li>'+ICON_USER+esc(L[1])+'</li><li>'+ICON_PIN+esc(L[2])+'</li><li>'+ICON_AREA+p.area+' '+t('pf.sqm')+'</li></ul>' +
      '<div class="pf-budget"><span>'+t('pf.budget')+'</span><b>'+fmtBudget(p.budget)+'</b></div></div></article>';
  });
  grid.innerHTML=html;
  markMore();
}
/* ใบที่เกิน 6 ติด data-more */
function markMore(){
  var n=0;
  $$('#pf-grid .pf').forEach(function(c){if (!c.hidden&&++n>MOBILE_SHOW) c.setAttribute('data-more','');else c.removeAttribute('data-more');});
  var b=$('#pf-more');if (b) b.hidden=n<=MOBILE_SHOW;
}
function initFilters(){
  $$('.chip[data-filter]').forEach(function(b){
    b.addEventListener('click',function(){
      filter=b.getAttribute('data-filter');
      $$('.chip[data-filter]').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true' :'false');});
      $$('#pf-grid .pf').forEach(function(card){card.hidden=filter!=='all'&&card.getAttribute('data-type')!==filter;});
      markMore();
    });
  });
  var more=$('#pf-more'),grid=$('#pf-grid');
  if (more&&grid) more.addEventListener('click',function(){
    var open=grid.classList.toggle('is-expanded');
    more.setAttribute('aria-expanded',open?'true' :'false');
    $('[data-i18n="pf.more"]',more).hidden=open;$('[data-i18n="pf.less"]',more).hidden=!open;
    if (!open) grid.scrollIntoView({block:'start',behavior:reduced?'auto' :'smooth'});
  });
}

function initHeader(){
  var header=$('.header');if (!header) return;
  var onScroll=function(){header.classList.toggle('is-scrolled',window.scrollY>8);};
  window.addEventListener('scroll',onScroll,{passive:true});requestAnimationFrame(onScroll);
  var burger=$('.burger'),drawer=$('#drawer');
  if (burger&&drawer){
    var setOpen=function(o){burger.setAttribute('aria-expanded',o?'true' :'false');drawer.classList.toggle('is-open',o);};
    burger.addEventListener('click',function(){setOpen(burger.getAttribute('aria-expanded')!=='true');});
    $$('a',drawer).forEach(function(a){a.addEventListener('click',function(){setOpen(false);});});
    document.addEventListener('keydown',function(e){if (e.key==='Escape') setOpen(false);});
  }
}

/* service link → preselect job type */
function initServiceLinks(){
  $$('a[data-type][href="#quote"]').forEach(function(a){
    a.addEventListener('click',function(){var sel=$('#f-type');if (sel) sel.value=a.getAttribute('data-type');});
  });
}

function initFaq(){
  $$('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var open=btn.getAttribute('aria-expanded')==='true';
      var panel=document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded',open?'false' :'true');
      if (panel) panel.hidden=open;
    });
  });
}

/* form: fetch → Formspree (no JS = normal POST) */
function initForm(){
  var form=$('#quote-form');if (!form) return;
  var msg=$('#form-msg'),btn=$('button[type="submit"]',form);
  var show=function(kind,text){msg.className='form-msg '+kind;msg.textContent=text;msg.hidden=false;};
  form.addEventListener('submit',function(e){
    e.preventDefault();captureThai();
    if (!form.checkValidity()){form.reportValidity();show('err',t('f.invalid'));return;}
    if (form._gotcha&&form._gotcha.value) return;/* honeypot */
    var label=$('[data-i18n="f.submit"]',btn),orig=label.textContent;
    btn.disabled=true;label.textContent=t('f.sending');msg.hidden=true;
    var fd=new FormData(form);
    fd.append('_language',lang);
    fetch(form.action,{method:'POST',body:fd,headers:{'Accept':'application/json'}})
      .then(function(r){if (!r.ok) throw new Error(r.status);return r.json();})
      .then(function(){show('ok',t('f.ok'));form.reset();})
      .catch(function(){show('err',t('f.err'));})
      .then(function(){btn.disabled=false;label.textContent=orig;});
  });
}

/* reveal + count-up — ใช้ rect จาก IO (ไม่ force reflow) · seen = เห็นตั้งแต่โหลด · go = เลื่อนมาถึง · rect ว่าง = ยังไม่ render */
function watch(items,opts,k,seen,go){
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      var el=en.target,r=en.boundingClientRect;
      if (!(r.width||r.height)) return;
      if (!el._w){el._w=1;if (r.top<(en.rootBounds?en.rootBounds.bottom/k :innerHeight)){io.unobserve(el);seen(el);return;}}
      if (en.isIntersecting){io.unobserve(el);go(el);}
    });
  },opts);
  items.forEach(function(el){io.observe(el);});
}
function initReveal(){
  var items=$$('.reveal'),show=function(el){el.classList.add('is-in');};
  if (reduced||!('IntersectionObserver' in window)) return items.forEach(show);
  watch(items,{rootMargin:'0px 0px -8% 0px',threshold:0.08},0.92,function(el){el.classList.add('no-anim');show(el);},show);
}
function initCount(){
  var nums=$$('[data-count]');
  if (!nums.length||reduced||!('IntersectionObserver' in window)) return;
  var run=function(el){
    var to=parseInt(el.getAttribute('data-count'),10),t0=null,dur=1100;
    var step=function(ts){if (!t0) t0=ts;var p=Math.min(1,(ts-t0)/dur);p=1-Math.pow(1-p,3);el.textContent=Math.round(to*p);if (p<1) requestAnimationFrame(step);};
    requestAnimationFrame(step);
  };
  watch(nums,{threshold:0.5},1,function(){},run);
}

/* แผนที่: สร้างจาก <noscript> เมื่อใกล้ถึง */
function initMap(){
  var m=$('.map'),ns=m&&$('noscript',m);if (!ns) return;
  var go=function(){m.insertAdjacentHTML('beforeend',ns.textContent);var f=$('iframe',m);if (!TH['aria.map']) TH['aria.map']=f.title;f.title=t('aria.map');};
  if (!('IntersectionObserver' in window)) return go();
  var io=new IntersectionObserver(function(en){if (en[0].isIntersecting){io.disconnect();go();}},{rootMargin:'600px'});
  io.observe(m);
}

/* Cookie banner (off) */
var COOKIE_BANNER=false;
function initCookie(){
  var box=$('#cookie');if (!box||!COOKIE_BANNER) return;
  try {if (localStorage.getItem('bd-cookie')) return;} catch (e){}
  box.hidden=false;
  $$('[data-cookie]',box).forEach(function(b){
    b.addEventListener('click',function(){try {localStorage.setItem('bd-cookie',b.getAttribute('data-cookie'));} catch (e){} box.hidden=true;});
  });
}

function init(){
  requestAnimationFrame(function(){document.documentElement.classList.add('ready');});/* .ready หลังเฟรมแรก */
  initLang();initFilters();initHeader();initServiceLinks();initFaq();initForm();initReveal();initCount();initMap();initCookie();
}
/* TH: init ในเฟรมแรก · EN: แปลก่อนวาด */
if ((q||saved)==='en') init();else requestAnimationFrame(init);
})();
