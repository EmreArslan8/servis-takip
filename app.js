const SHELL = String.raw`<!-- ================= LOGIN ================= -->
<div id="login">
  <div class="login-brand">
    <div class="logo">
      <div class="logo-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
      <div>
        <div style="display:flex;align-items:center;gap:9px"><span class="logo-name">Servis<span style="color:var(--accent)">OS</span></span><span class="live-dot"></span></div>
        <div class="logo-sub">Teknik Servis Yönetim Sistemi</div>
      </div>
    </div>
    <div class="wall"></div>
    <div class="login-hero">
      <h1>Servis, <em>stok</em> ve kasa tek ekranda.</h1>
      <p>Çoklu şube yapısı, şube bazlı stok, otomatik stok düşen servis modülü, barkod, kasa ve raporlama. Tek temiz arayüzde birleşik yönetim.</p>
      <div class="feature-list">
        <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Çoklu şube + şube bazlı stok</div>
        <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Servis → stok entegrasyonu</div>
        <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Barkod + A5 servis formu</div>
        <div><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Şube kasası + log sistemi</div>
      </div>
    </div>
    <div class="login-foot">DEMO SÜRÜMÜ — TÜM VERİLER ÖRNEK AMAÇLIDIR</div>
  </div>
  <div class="login-panel">
    <h2>Giriş yap</h2>
    <p class="sub">Demo için bir <b>kullanıcı</b> seç — rol yetkilerine göre sistem davranışını incele.</p>
    <div class="user-cards" id="loginUsers"></div>
    <div class="login-foot">Bu ekran yalnızca demo amaçlıdır · Güvenli giriş (SSL + 2FA) gerçek sürümde uygulanır</div>
  </div>
</div>

<!-- ================= APP ================= -->
<div id="app">
  <aside id="sidebar">
    <div class="side-head">
      <button id="sbToggle" data-act="sbToggle" aria-label="Menüyü daralt/genişlet" title="Daralt / Genişlet"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg></button>
      <div class="logo" style="gap:10px">
        <div class="logo-ic" style="width:34px;height:34px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
        <div>
          <div class="logo-name" style="font-size:16px">Servis<span style="color:var(--accent)">OS</span></div>
          <div class="logo-sub">YÖNETİM SİSTEMİ</div>
        </div>
      </div>
    </div>
    <div class="side-scroll">
      <div class="nav-sec">Genel</div>
      <nav class="nav" id="navGeneral"></nav>
      <div class="nav-sec">Stok</div>
      <nav class="nav" id="navStock"></nav>
      <div class="nav-sec">Servis</div>
      <nav class="nav" id="navService"></nav>
      <div class="nav-sec">Kasa & Yönetim</div>
      <nav class="nav" id="navManage"></nav>
    </div>
    <div class="side-foot">
      <div class="side-user" id="sideUser"></div>
    </div>
  </aside>

  <div id="main">
    <div id="topbar">
      <button id="burger" aria-label="Menü">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h10M4 17h16"/></svg>
      </button>
      <div class="page-title" id="pageTitle"></div>
      <div class="searchbox">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input id="globalSearch" placeholder="Müşteri telefonu, IMEI, servis no, barkod, SKU, ürün adı…" autocomplete="off">
        <div class="search-results hide" id="searchResults"></div>
      </div>
      <div class="top-chip" id="branchChip"></div>
      <span class="demo-pill">DEMO</span>
    </div>
    <div id="view"></div>
  </div>
</div>

<div id="toasts"></div>
<div id="modals"></div>
<div id="printArea"></div>
`;
document.body.insertAdjacentHTML("afterbegin", SHELL);

const IC={
grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3v14"/><path d="m21 13-4 4-4-4"/><path d="M7 21V7"/><path d="m3 11 4-4 4 4"/></svg>',
move:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>',
wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
wallet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>',
building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>',
chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/></svg>',
log:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/></svg>',
search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/></svg>',
plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>',
print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
barcode:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14"/></svg>',
phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18.5h2"/></svg>',
clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>',
tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.6 2.8a2 2 0 0 0-1.4-.6H4a2 2 0 0 0-2 2v7.2c0 .5.2 1 .6 1.4l8.6 8.6a2 2 0 0 0 2.8 0l8.6-8.6a2 2 0 0 0 0-2.8Z"/><path d="M7.5 7.5h.01"/></svg>',
qty:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/></svg>',
filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>',
card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>',
upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>',
lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>',
money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></svg>',
send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>',
home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 22V12h6v10"/></svg>',
star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"/></svg>'
};

const ROLES={
  admin:{n:'Yönetici',bg:'#E4572E',badge:'dark'},
  manager:{n:'Şube Müdürü',bg:'#2E5FA3',badge:'blu'},
  stock:{n:'Stok Personeli',bg:'#177A52',badge:'grn'},
  tech:{n:'Teknisyen',bg:'#8A5A2E',badge:'amb'},
  cash:{n:'Kasa Personeli',bg:'#7C4DA6',badge:'acc'},
  view:{n:'Görüntüleme',bg:'#6B7079',badge:'mut'}
};
const USERS=[
  {id:'u1',name:'Ahmet Yılmaz',role:'admin',br:'M',color:'#E4572E'},
  {id:'u2',name:'Mehmet Kaya',role:'manager',br:'S1',color:'#2E5FA3'},
  {id:'u3',name:'Ayşe Demir',role:'cash',br:'M',color:'#7C4DA6'},
  {id:'u4',name:'Burak Topçu',role:'tech',br:'M',color:'#8A5A2E'},
  {id:'u5',name:'Selin Yıldız',role:'stock',br:'M',color:'#177A52'},
  {id:'u6',name:'Deniz Ateş',role:'tech',br:'S1',color:'#B07700'},
  {id:'u7',name:'Can Öz',role:'view',br:'S1',color:'#6B7079'}
];
const STATUSES=['Cihaz Kabul Edildi','İnceleniyor','Fiyat Bekliyor','Müşteri Onayı Bekliyor','Onaylandı','Parça Bekliyor','Onarımda','Test Ediliyor','Hazır','Teslim Edildi','İptal','Tamir Edilemedi'];
const STATUS_COLOR={0:'mut',1:'blu',2:'amb',3:'amb',4:'grn',5:'blu',6:'acc',7:'blu',8:'grn',9:'grn',10:'mut',11:'red'};
const PAY=['Nakit','Kredi Kartı','Banka Havalesi','Diğer'];
const CAT_YP=['Ekran','Batarya','Anakart','Kamera','Kamera Camı','Kasa','Kapak','Flex','Buzzer','Anten','Hoparlör','Mikrofon'];
const CAT_ACC=['Adaptör','Kablo','Kılıf'];
const SUPPLIERS=['Tekno Parça Ltd.','Cep Market Dağıtım','Aksesuar Toptan A.Ş.','Şahin Elektronik'];
const BRANCHES=[{id:'M',name:'Merkez',city:'İstanbul',mgr:'Ahmet Yılmaz'},{id:'S1',name:'Şube 1',city:'İstanbul',mgr:'Mehmet Kaya'}];
const BNAME=b=>BRANCHES.find(x=>x.id===b)?.name||b;
const D2=Math.round(Date.now()/86400000);
const daysAgo=d=>new Date(Date.now()-d*86400000);

const PRODUCTS=[
 {id:'p1',sku:'EKR-IP13-ORG',name:'iPhone 13 OLED Ekran',quality:'Orijinal',brand:'Apple',model:'iPhone 13',cat:'Ekran',sub:'Yedek Parça',buy:6200,sell:7800,min:{M:3,S1:3},stock:{M:7,S1:7},sup:0,desc:'Orijinal OLED panel, flex ile birlikte. Renk kalibrasyonu yapılmıştır.',barcode:'8690120011001'},
 {id:'p2',sku:'EKR-IP13-YAN',name:'iPhone 13 OLED Ekran',quality:'Yan Sanayi',brand:'Apple',model:'iPhone 13',cat:'Ekran',sub:'Yedek Parça',buy:3800,sell:5200,min:{M:4,S1:4},stock:{M:6,S1:4},sup:0,desc:'Yan sanayi OLED panel. Renkler orijinale yakın, hafif ışık sızması olabilir.',barcode:'8690120011002'},
 {id:'p3',sku:'BAT-IP13-ORG',name:'iPhone 13 Batarya',quality:'Orijinal',brand:'Apple',model:'iPhone 13',cat:'Batarya',sub:'Yedek Parça',buy:1450,sell:2350,min:{M:3,S1:3},stock:{M:8,S1:3},sup:1,desc:'Orijinal batarya, %100 kapasite. Swift/servis programı ile kayıt gerektirir.',barcode:'8690120011003'},
 {id:'p4',sku:'KMC-IP13-ORG',name:'iPhone 13 Kamera Camı',quality:'Orijinal',brand:'Apple',model:'iPhone 13',cat:'Kamera Camı',sub:'Yedek Parça',buy:320,sell:650,min:{M:6,S1:6},stock:{M:11,S1:6},sup:1,desc:'Kamera modülü üstü koruyucu cam, yapışkan hazır.',barcode:'8690120011004'},
 {id:'p5',sku:'FLX-IP13-SAR',name:'iPhone 13 Flex Şarj',quality:'Yan Sanayi',brand:'Apple',model:'iPhone 13',cat:'Flex',sub:'Yedek Parça',buy:480,sell:880,min:{M:2,S1:2},stock:{M:1,S1:1},sup:2,desc:'Şarj + şarj kablosu flexi. FindMy desteği yeniden yazılmalıdır.',barcode:'8690120011005'},
 {id:'p6',sku:'EKR-IP12-YAN',name:'iPhone 12 OLED Ekran',quality:'Yan Sanayi',brand:'Apple',model:'iPhone 12',cat:'Ekran',sub:'Yedek Parça',buy:2800,sell:4200,min:{M:3,S1:3},stock:{M:4,S1:2},sup:0,desc:'Yan sanayi OLED panel, flexli.',barcode:'8690120011006'},
 {id:'p7',sku:'BAT-IP12-ORG',name:'iPhone 12 Batarya',quality:'Orijinal',brand:'Apple',model:'iPhone 12',cat:'Batarya',sub:'Yedek Parça',buy:1200,sell:2050,min:{M:3,S1:3},stock:{M:5,S1:3},sup:1,desc:'Orijinal batarya %100.',barcode:'8690120011007'},
 {id:'p8',sku:'EKR-IP14P-ORG',name:'iPhone 14 Pro OLED Ekran',quality:'Orijinal',brand:'Apple',model:'iPhone 14 Pro',cat:'Ekran',sub:'Yedek Parça',buy:9800,sell:12100,min:{M:2,S1:2},stock:{M:2,S1:1},sup:0,desc:'Orijinal panel. TrueDepth ve True Tone kaydı gerekir.',barcode:'8690120011008'},
 {id:'p9',sku:'EKR-S23-ORG',name:'Galaxy S23 OLED Ekran',quality:'Orijinal',brand:'Samsung',model:'Galaxy S23',cat:'Ekran',sub:'Yedek Parça',buy:5400,sell:6900,min:{M:3,S1:3},stock:{M:8,S1:3},sup:0,desc:'Orijinal AMOLED, çerçeveli.',barcode:'8690120011009'},
 {id:'p10',sku:'BAT-S23-ORG',name:'Galaxy S23 Batarya',quality:'Orijinal',brand:'Samsung',model:'Galaxy S23',cat:'Batarya',sub:'Yedek Parça',buy:1100,sell:1950,min:{M:3,S1:3},stock:{M:9,S1:5},sup:1,desc:'Orijinal batarya 3900 mAh.',barcode:'8690120011010'},
 {id:'p11',sku:'EKR-A54-YAN',name:'Galaxy A54 LCD Ekran',quality:'Yan Sanayi',brand:'Samsung',model:'Galaxy A54',cat:'Ekran',sub:'Yedek Parça',buy:1900,sell:3150,min:{M:3,S1:3},stock:{M:4,S1:2},sup:2,desc:'LCD panel + dokunmatik, çerçevesiz.',barcode:'8690120011011'},
 {id:'p12',sku:'BAT-A54-ORG',name:'Galaxy A54 Batarya',quality:'Orijinal',brand:'Samsung',model:'Galaxy A54',cat:'Batarya',sub:'Yedek Parça',buy:780,sell:1450,min:{M:3,S1:3},stock:{M:2,S1:0},sup:1,desc:'Orijinal batarya 5000 mAh.',barcode:'8690120011012'},
 {id:'p13',sku:'EKR-RN12-YAN',name:'Redmi Note 12 LCD Ekran',quality:'Yan Sanayi',brand:'Xiaomi',model:'Redmi Note 12',cat:'Ekran',sub:'Yedek Parça',buy:1650,sell:2900,min:{M:3,S1:3},stock:{M:7,S1:3},sup:2,desc:'LCD panel + dokunmatik, hazır yapışkan.',barcode:'8690120011013'},
 {id:'p14',sku:'BAT-RN12-ORG',name:'Redmi Note 12 Batarya',quality:'Orijinal',brand:'Xiaomi',model:'Redmi Note 12',cat:'Batarya',sub:'Yedek Parça',buy:650,sell:1250,min:{M:3,S1:3},stock:{M:8,S1:4},sup:3,desc:'Orijinal batarya 5000 mAh.',barcode:'8690120011014'},
 {id:'p15',sku:'KAM-GNL-12M',name:'Kamera Modülü 12MP',quality:'Yan Sanayi',brand:'Genel',model:'Universal',cat:'Kamera',sub:'Yedek Parça',buy:1150,sell:2100,min:{M:5,S1:5},stock:{M:11,S1:5},sup:3,desc:'12MP ana kamera modülü, çoğu modelle uyumlu.',barcode:'8690120011015'},
 {id:'p16',sku:'HOP-IP13-ORG',name:'iPhone 13 Hoparlör',quality:'Orijinal',brand:'Apple',model:'iPhone 13',cat:'Hoparlör',sub:'Yedek Parça',buy:550,sell:980,min:{M:3,S1:3},stock:{M:6,S1:2},sup:1,desc:'Alt hoparlör modülü.',barcode:'8690120011016'},
 {id:'p17',sku:'MİK-FLX-YAN',name:'Mikrofon Flex',quality:'Yan Sanayi',brand:'Genel',model:'Universal',cat:'Mikrofon',sub:'Yedek Parça',buy:280,sell:550,min:{M:3,S1:3},stock:{M:5,S1:2},sup:2,desc:'Konnektörlü mikrofon flexi.',barcode:'8690120011017'},
 {id:'p18',sku:'BUZ-IP13-ORG',name:'iPhone 13 Buzzer',quality:'Orijinal',brand:'Apple',model:'iPhone 13',cat:'Buzzer',sub:'Yedek Parça',buy:190,sell:420,min:{M:3,S1:3},stock:{M:7,S1:3},sup:1,desc:'Zil + titreşim motoru.',barcode:'8690120011018'},
 {id:'p19',sku:'ANT-FLX-YAN',name:'Anten Flex',quality:'Yan Sanayi',brand:'Genel',model:'Universal',cat:'Anten',sub:'Yedek Parça',buy:240,sell:480,min:{M:2,S1:2},stock:{M:3,S1:1},sup:2,desc:'Anten kablosu + braket, universal.',barcode:'8690120011019'},
 {id:'p20',sku:'KPK-IP13-ORG',name:'iPhone 13 Yedek Kapak',quality:'Orijinal',brand:'Apple',model:'iPhone 13',cat:'Kapak',sub:'Yedek Parça',buy:1600,sell:2650,min:{M:3,S1:3},stock:{M:9,S1:4},sup:0,desc:'Orijinal arka kapak + yapışkan, cam değişiminde kullanılır.',barcode:'8690120011020'},
 {id:'p21',sku:'ADP-APP20',name:'Apple USB-C Adaptör 20W',quality:'Orijinal',brand:'Apple',model:'Adapters',cat:'Adaptör',sub:'Aksesuar',buy:620,sell:990,min:{M:5,S1:5},stock:{M:15,S1:8},sup:3,attrs:[['Tip','USB-C'],['Güç','20W']],barcode:'8690120011021'},
 {id:'p22',sku:'ADP-APP35',name:'Apple USB-C Adaptör 35W',quality:'Orijinal',brand:'Apple',model:'Adapters',cat:'Adaptör',sub:'Aksesuar',buy:1150,sell:1650,min:{M:4,S1:2},stock:{M:6,S1:2},sup:3,attrs:[['Tip','USB-C'],['Güç','35W']],barcode:'8690120011022'},
 {id:'p23',sku:'ADP-SAM25',name:'Samsung USB-C Adaptör 25W',quality:'Orijinal',brand:'Samsung',model:'Adapters',cat:'Adaptör',sub:'Aksesuar',buy:480,sell:790,min:{M:3,S1:3},stock:{M:10,S1:5},sup:3,attrs:[['Tip','USB-C'],['Güç','25W']],barcode:'8690120011023'},
 {id:'p24',sku:'KIL-SPG-IP13R',name:'spigen Rugged Armor Kılıf',quality:'Orijinal',brand:'spigen',model:'iPhone 13',cat:'Kılıf',sub:'Aksesuar',buy:350,sell:690,min:{M:3,S1:3},stock:{M:11,S1:7},sup:2,attrs:[['Renk','Siyah'],['Tip','Rugged']],barcode:'8690120011024'},
 {id:'p25',sku:'KIL-SPG-IP13S',name:'spigen Liquid Air Kılıf',quality:'Orijinal',brand:'spigen',model:'iPhone 13',cat:'Kılıf',sub:'Aksesuar',buy:290,sell:550,min:{M:3,S1:3},stock:{M:4,S1:1},sup:2,attrs:[['Renk','Grafit'],['Tip','Slim']],barcode:'8690120011025'},
 {id:'p26',sku:'KIL-LNG-S23',name:'ling Clear Kılıf',quality:'Orijinal',brand:'ling',model:'Galaxy S23',cat:'Kılıf',sub:'Aksesuar',buy:240,sell:490,min:{M:3,S1:3},stock:{M:8,S1:4},sup:2,attrs:[['Renk','Şeffaf'],['Tip','Clear']],barcode:'8690120011026'},
 {id:'p27',sku:'KBL-APP-1M',name:'Apple USB-C→Lightning Kablo 1m',quality:'Orijinal',brand:'Apple',model:'Cables',cat:'Kablo',sub:'Aksesuar',buy:450,sell:790,min:{M:3,S1:3},stock:{M:14,S1:6},sup:3,attrs:[['Uzunluk','1 m'],['Bağlantı','USB-C → Lightning']],barcode:'8690120011027'},
 {id:'p28',sku:'KBL-ANK-2M',name:'Anker USB-C→USB-C Kablo 2m',quality:'Orijinal',brand:'Anker',model:'Cables',cat:'Kablo',sub:'Aksesuar',buy:380,sell:720,min:{M:2,S1:2},stock:{M:0,S1:1},sup:2,attrs:[['Uzunluk','2 m'],['Bağlantı','USB-C → USB-C']],barcode:'8690120011028'}
];
const CUSTOMERS=[
 {id:'c1',name:'Ahmet Yılmaz',phone:'0532 111 22 33',phone2:'0532 999 88 77',mail:'ahmet.yilmaz@mail.com',addr:'Atatürk Cad. No:42, Kadıköy / İstanbul',notes:'Daha önce 2 servis yaptırdı, kılıf satın aldı.'},
 {id:'c2',name:'Elif Kaya',phone:'0544 222 33 44',phone2:'',mail:'elif.kaya@mail.com',addr:'Bağdat Cad. No:118, Kadıköy / İstanbul',notes:''},
 {id:'c3',name:'Murat Demir',phone:'0505 333 44 55',phone2:'0530 444 33 22',mail:'',addr:'Ferah Mah. Sinekli Sk. No:7, Üsküdar / İstanbul',notes:'İki cihazı da serviste.'},
 {id:'c4',name:'Zeynep Şahin',phone:'0533 444 55 66',phone2:'',mail:'zeynep.sahin@mail.com',addr:'Barbaros Bulvarı No:51, Beşiktaş / İstanbul',notes:''},
 {id:'c5',name:'Okan Çetin',phone:'0542 555 66 77',phone2:'',mail:'okan.cetin@mail.com',addr:'İstiklal Cad. No:8, Beyoğlu / İstanbul',notes:'Kurumsal davranır, garanti kartı yazdırılmalı.'},
 {id:'c6',name:'Selin Arslan',phone:'0507 666 77 88',phone2:'',mail:'selin.arslan@mail.com',addr:'Koşuyolu Mah. No:23, Kadıköy / İstanbul',notes:''}
];
const DEVICES=[
 {id:'d1',cust:'c1',brand:'Apple',model:'iPhone 13',imei:'356789012345678',seri:'F2LLK2XJ',color:'Siyah',size:'256 GB',cosm:{ekran:['Kırık'],cerceve:['Çizik']},fault:'',acc:'',notes:'Ekran kırılması düşme sonucu, kamera modülü sağlam.'},
 {id:'d2',cust:'c1',brand:'Samsung',model:'Galaxy A54',imei:'359999012345001',seri:'R58N30A12',color:'Beyaz',size:'128 GB',cosm:{},fault:'',acc:'',notes:''},
 {id:'d3',cust:'c2',brand:'Apple',model:'iPhone 12',imei:'356123456789012',seri:'GDXKW4M8',color:'Kırmızı',size:'64 GB',cosm:{kamera:['Kırık']},fault:'',acc:'',notes:''},
 {id:'d4',cust:'c3',brand:'Xiaomi',model:'Redmi Note 12',imei:'352999123456001',seri:'RN12K0G7',color:'Gri',size:'128 GB',cosm:{ekran:['Çizik','Ölü piksel']},fault:'',acc:'',notes:''},
 {id:'d5',cust:'c3',brand:'Apple',model:'iPhone 13',imei:'356987456123004',seri:'F2LLG3Q5',color:'Mavi',size:'128 GB',cosm:{arka:['Çizik']},fault:'',acc:'',notes:''},
 {id:'d6',cust:'c4',brand:'Samsung',model:'Galaxy S23',imei:'355666777888999',seri:'R9TT23100',color:'Yeşil',size:'256 GB',cosm:{},fault:'',acc:'',notes:''},
 {id:'d7',cust:'c5',brand:'Apple',model:'iPhone 14 Pro',imei:'356444555666777',seri:'J0LKX9Z1',color:'Mor',size:'256 GB',cosm:{cerceve:['Çizik','Ezik']},fault:'',acc:'',notes:''},
 {id:'d8',cust:'c6',brand:'Samsung',model:'Galaxy A54',imei:'355333444555666',seri:'R58N11B42',color:'Siyah',size:'128 GB',cosm:{},fault:'',acc:'',notes:''}
];
const SERVICES=[
 {id:'s1',no:'SRV-2026-00001',cust:'c1',dev:'d1',br:'M',date:daysAgo(1),fault:'Cihaz yere düşmüş, ekran kırık ve dokunmatik çalışmıyor',pass:'1324',tech:'u4',parts:[{pid:'p1',qty:1}],labor:300,disc:0,pay:'Nakit',paid:8100,status:9,notes:'Ekran değişimi yapıldı, true tone kaydedildi.'},
 {id:'s2',no:'SRV-2026-00002',cust:'c2',dev:'d3',br:'M',date:daysAgo(1),fault:'Batarya şarj tutmuyor, gün içinde bitiyor',pass:'',tech:'u4',parts:[{pid:'p7',qty:1}],labor:250,disc:0,pay:'Nakit',paid:0,status:6,notes:''},
 {id:'s3',no:'SRV-2026-00003',cust:'c3',dev:'d4',br:'M',date:daysAgo(2),fault:'Dokunmatik ölü, ekranın sol tarafından tepki yok',pass:'2580',tech:'u4',parts:[],labor:250,disc:0,pay:'Kredi Kartı',paid:0,status:2,notes:'Müşteriye 2.900₺ fiyat teklif edildi, onay bekleniyor.'},
 {id:'s4',no:'SRV-2026-00004',cust:'c4',dev:'d6',br:'S1',date:daysAgo(2),fault:'Ekran çizik ve üstte kırık',pass:'',tech:'u6',parts:[{pid:'p9',qty:1}],labor:300,disc:0,pay:'Banka Havalesi',paid:0,status:5,notes:'Orijinal ekran tedarikçiden sipariş edildi.'},
 {id:'s5',no:'SRV-2026-00005',cust:'c5',dev:'d7',br:'M',date:daysAgo(3),fault:'Düşme sonrası ekran kırık, Dynamic Island bölgesinde ışık sızması',pass:'',tech:'u4',parts:[{pid:'p8',qty:1}],labor:400,disc:0,pay:'Nakit',paid:0,status:7,notes:'True Tone ve Face ID kaydı yapıldı, test aşamasında.'},
 {id:'s6',no:'SRV-2026-00006',cust:'c3',dev:'d5',br:'M',date:daysAgo(3),fault:'Şarj olmuyor, şarj kablosunu takınca tepki yok',pass:'9876',tech:'u4',parts:[{pid:'p5',qty:1}],labor:200,disc:0,pay:'Nakit',paid:0,status:1,notes:'Flex değişimi yapıldı, FindMy yeniden yazıldı. Kapanış testi devam ediyor.'},
 {id:'s7',no:'SRV-2026-00007',cust:'c6',dev:'d8',br:'S1',date:daysAgo(1),fault:'Batarya şişmiş, arka kapak kalkmış',pass:'0000',tech:'u6',parts:[],labor:200,disc:0,pay:'Nakit',paid:0,status:0,notes:'Batarya stokta yok, tedarikçiden temin edilecek.'},
 {id:'s8',no:'SRV-2026-00008',cust:'c2',dev:'d3',br:'M',date:daysAgo(3),fault:'Kamera camı kırık',pass:'',tech:'u4',parts:[{pid:'p4',qty:1}],labor:150,disc:0,pay:'Nakit',paid:800,status:9,notes:''},
 {id:'s9',no:'SRV-2026-00009',cust:'c1',dev:'d1',br:'M',date:daysAgo(4),fault:'Anakart arızası, cihaz açılmıyor',pass:'',tech:'u4',parts:[],labor:0,disc:0,pay:'Nakit',paid:0,status:2,notes:'Anakart tamiri 8.500₺ teklif edildi, müşteri karar verecek.'},
 {id:'s10',no:'SRV-2026-00010',cust:'c4',dev:'d6',br:'S1',date:daysAgo(5),fault:'Hoparlör ses gelmiyor',pass:'',tech:'u6',parts:[],labor:0,disc:0,pay:'Nakit',paid:0,status:10,notes:'Müşteri vazgeçti, cihaz teslim edilmedi.'},
 {id:'s11',no:'SRV-2026-00011',cust:'c5',dev:'d7',br:'M',date:daysAgo(6),fault:'Su hasarı, cihaz kapanıyor',pass:'',tech:'u4',parts:[],labor:0,disc:0,pay:'Nakit',paid:0,status:11,notes:'Anakart korozyon, tamir edilemedi.'}
];
const CASH=[
 {id:'k1',d:daysAgo(6),br:'M',user:'u1',type:'out',kind:'Ürün/parça alışı',amt:42000,pay:'Banka Havalesi',desc:'Tekno Parça Ltd. — ekran ve batarya alımı'},
 {id:'k2',d:daysAgo(5),br:'S1',user:'u6',type:'in',kind:'Servis ödemesi',amt:2100,pay:'Nakit',desc:'SRV-2026-00006 avans tahsilatı'},
 {id:'k3',d:daysAgo(4),br:'M',user:'u3',type:'in',kind:'Aksesuar satışı',amt:990,pay:'Kredi Kartı',desc:'Apple USB-C Adaptör 20W satışı'},
 {id:'k4',d:daysAgo(4),br:'M',user:'u1',type:'out',kind:'Diğer gider',amt:4500,pay:'Banka Havalesi',desc:'Şubeler arası elektrik faturası (Merkez payı)'},
 {id:'k5',d:daysAgo(3),br:'M',user:'u3',type:'in',kind:'Servis ödemesi',amt:800,pay:'Nakit',desc:'SRV-2026-00008 tahsilat — kamera camı'},
 {id:'k6',d:daysAgo(2),br:'M',user:'u5',type:'in',kind:'Ürün satışı',amt:5200,pay:'Kredi Kartı',desc:'iPhone 13 Yan Sanayi ekran tezgah satışı'},
 {id:'k7',d:daysAgo(2),br:'M',user:'u1',type:'out',kind:'Ürün/parça alışı',amt:18500,pay:'Banka Havalesi',desc:'Cep Market Dağıtım — batarya ve flex alımı'},
 {id:'k8',d:daysAgo(1),br:'S1',user:'u2',type:'in',kind:'Aksesuar satışı',amt:720,pay:'Nakit',desc:'Anker USB-C kablo satışı'},
 {id:'k9',d:daysAgo(1),br:'M',user:'u3',type:'in',kind:'Aksesuar satışı',amt:1380,pay:'Kredi Kartı',desc:'spigen Rugged Armor kılıf × 2'},
 {id:'k10',d:new Date(),br:'M',user:'u3',type:'in',kind:'Servis ödemesi',amt:8100,pay:'Nakit',desc:'SRV-2026-00001 tahsilat — ekran değişimi + işçilik'},
 {id:'k11',d:new Date(),br:'M',user:'u1',type:'out',kind:'Diğer gider',amt:2750,pay:'Nakit',desc:'Merkez kırtasiye + yazıcı sarf malzemesi'}
];
const TRANSFERS=[
 {id:'t1',from:'M',to:'S1',pid:'p1',qty:2,d:daysAgo(2),user:'u1',note:'Şube 1 ekran talebi — servis için'},
 {id:'t2',from:'M',to:'S1',pid:'p21',qty:3,d:daysAgo(1),user:'u5',note:'Vitrin aksesuar takviyesi'}
];
const LOGS=[
 {id:'l1',d:daysAgo(2),time:'10:35',user:'u1',txt:'iPhone 13 OLED Ekran (Orijinal) — Merkez → Şube 1 transfer: 2 adet gönderildi.',kind:'transfer'},
 {id:'l2',d:daysAgo(2),time:'11:20',user:'u5',txt:'iPhone 13 OLED Ekran (Orijinal) stok girişi — Merkez +5 adet.',kind:'in'},
 {id:'l3',d:daysAgo(2),time:'14:15',user:'u3',txt:'iPhone 13 Yan Sanayi ekran satışı — Merkez stok 5 → 4.',kind:'sell'},
 {id:'l4',d:daysAgo(1),time:'09:40',user:'u4',txt:'SRV-2026-00001 için parça kullanıldı: iPhone 13 OLED Ekran (Orijinal) × 1 — Merkez stok 8 → 7.',kind:'part'},
 {id:'l5',d:daysAgo(1),time:'10:05',user:'u2',txt:'Apple USB-C Adaptör 20W — Merkez → Şube 1 transfer: 3 adet gönderildi.',kind:'transfer'},
 {id:'l6',d:daysAgo(1),time:'11:12',user:'u4',txt:'SRV-2026-00004 fiyat teklifi düzenlendi — 7.200₺.',kind:'edit'},
 {id:'l7',d:daysAgo(1),time:'15:30',user:'u3',txt:'spigen Rugged Armor Kılıf × 2 satış — Merkez stok 13 → 11.',kind:'sell'},
 {id:'l8',d:daysAgo(1),time:'16:05',user:'u2',txt:'Anker USB-C→USB-C Kablo 2m satış — Şube 1 stok 2 → 1.',kind:'sell'},
 {id:'l9',d:daysAgo(1),time:'17:20',user:'u1',txt:'SRV-2026-00006 servis fiyatı 1.050₺ → 1.080₺ olarak güncellendi.',kind:'edit'},
 {id:'l10',d:new Date(),time:'09:15',user:'u4',txt:'SRV-2026-00001 parça kullanımı: iPhone 13 OLED Ekran (Orijinal) × 1 — Merkez stok 8 → 7.',kind:'part'},
 {id:'l11',d:new Date(),time:'10:02',user:'u3',txt:'SRV-2026-00001 tahsilat — Nakit 8.100₺ (kasa girişi).',kind:'cash'},
 {id:'l12',d:new Date(),time:'10:18',user:'u1',txt:'Merkez kırtasiye gideri 2.750₺ (kasa çıkışı).',kind:'cash'}
];
let SEQ={prod:100,srv:12,trf:3,cash:12,log:13,cust:7,dev:9};
/* ---------- CORE ---------- */
const state={user:null,view:'dashboard',managerLog:false,pf:{q:'',brand:'',model:'',cat:'',sub:'',qual:'all',sup:'',stok:'all',treeQ:''},sf:{q:'',dur:'all'},cf:{q:'',br:'all'},lf:{kind:'all'}};
let MOVES=[
 {d:daysAgo(2),t:'10:35',u:'u1',pid:'p1',br:'M',act:'Transfer çıkışı',old:10,now:8,note:'Şube 1 transferi'},
 {d:daysAgo(2),t:'10:35',u:'u1',pid:'p1',br:'S1',act:'Transfer girişi',old:5,now:7,note:'Merkezden gelen'},
 {d:daysAgo(2),t:'14:15',u:'u3',pid:'p2',br:'M',act:'Satış',old:7,now:6,note:'Tezgah satışı'},
 {d:daysAgo(2),t:'16:40',u:'u5',pid:'p12',br:'S1',act:'Stok çıkışı',old:1,now:0,note:'Servis kullanımı (SRV-2026-00006)'},
 {d:daysAgo(1),t:'09:40',u:'u4',pid:'p1',br:'M',act:'Servis kullanımı',old:8,now:7,note:'SRV-2026-00001'},
 {d:daysAgo(1),t:'10:05',u:'u2',pid:'p21',br:'M',act:'Transfer çıkışı',old:18,now:15,note:'Şube 1 transferi'},
 {d:daysAgo(1),t:'10:05',u:'u2',pid:'p21',br:'S1',act:'Transfer girişi',old:5,now:8,note:'Merkezden gelen'},
 {d:daysAgo(1),t:'15:30',u:'u3',pid:'p24',br:'M',act:'Satış',old:13,now:11,note:'Kılıf × 2'},
 {d:daysAgo(1),t:'16:05',u:'u2',pid:'p28',br:'S1',act:'Satış',old:2,now:1,note:'Kablo satışı'},
 {d:new Date(),t:'09:15',u:'u4',pid:'p8',br:'M',act:'Servis kullanımı',old:3,now:2,note:'SRV-2026-00005'}
];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>(Number(n)||0).toLocaleString('tr-TR');
const tl=n=>'₺'+fmt(n);
const pad=n=>String(n).padStart(2,'0');
const fmtD=d=>pad(d.getDate())+'.'+pad(d.getMonth()+1)+'.'+d.getFullYear();
const fmtDT=d=>fmtD(d)+' '+pad(d.getHours())+':'+pad(d.getMinutes());
const nowHM=()=>pad(new Date().getHours())+':'+pad(new Date().getMinutes());
const uid=p=>{SEQ[p]=(SEQ[p]||0)+1;return p+'-'+SEQ[p]};
const me=()=>state.user?USERS.find(u=>u.id===state.user):null;
const roleKey=()=>me()?(me().role||''):'';
const isAdmin=()=>roleKey()==='admin';
const perm=k=>{const r=roleKey();if(r==='admin')return true;if(r==='view')return false;
 const m={manager:['dashboard','products','transfers','movements','services','customers','cash','branchReports'],stock:['dashboard','products','transfers','movements','customers'],tech:['dashboard','products','movements','services','customers'],cash:['dashboard','products','movements','services','customers','cash']};
 return (m[r]||[]).includes(k)};
/* hangi rol hangi menü/sayfayı görebilir */
const NAVALLOW={
 admin:['dashboard','branches','products','transfers','movements','services','customers','cash','reports','users','logs'],
 manager:['dashboard','branches','products','transfers','movements','services','customers','cash','reports','logs'],
 stock:['dashboard','products','transfers','movements','customers'],
 tech:['dashboard','services','customers','products','movements'],
 cash:['dashboard','cash','services','customers','products','movements'],
 view:['dashboard','branches','products','movements','services','customers','reports']
};
const canView=v=>{const r=roleKey();if(r==='admin')return true;if(v==='logs')return r==='manager'&&state.managerLog;return (NAVALLOW[r]||['dashboard']).includes(v)};
const prod=id=>PRODUCTS.find(p=>p.id===id);
const stockTotal=p=>BRANCHES.reduce((s,b)=>s+((p.stock[b.id]??0)),0);
const brLow=(p,b)=>{const s=p.stock[b.id]??0;return s<=p.min[b.id]};
const isCritical=p=>BRANCHES.some(b=>brLow(p,b.id));
const stokDurum=p=>{const t=stockTotal(p);if(BRANCHES.some(b=>(p.stock[b.id]??0)===0))return['Tükendi','red'];if(isCritical(p))return['Kritik','amb'];return['Normal','grn']};
const uName=id=>USERS.find(u=>u.id===id)?.name||'?';
const cust=id=>CUSTOMERS.find(c=>c.id===id);
const dev=id=>DEVICES.find(d=>d.id===id);
const devsOf=c=>DEVICES.filter(d=>d.cust===c);
const servOf=c=>SERVICES.filter(s=>s.cust===c);
const svcTotal=s=>s.parts.reduce((a,x)=>a+prod(x.pid).sell*x.qty,0)+s.labor-s.disc;
const toast=(m,t)=>{const el=document.createElement('div');el.className='toast '+(t||'');el.innerHTML=m;document.getElementById('toasts').appendChild(el);setTimeout(()=>{el.style.transition='.3s';el.style.opacity='0';el.style.transform='translateX(24px)';setTimeout(()=>el.remove(),300)},3200)};
const logIt=(txt,kind)=>{LOGS.unshift({id:uid('log'),d:new Date(),time:nowHM(),user:state.user,userName:uName(state.user),txt,kind});SEQ.logCatch?0:0};
function modal(html,cls){document.getElementById('modals').innerHTML='<div class="overlay" id="overlay"><div class="modal '+(cls||'')+'">'+html+'</div></div>'}
const closeModal=()=>{document.getElementById('modals').innerHTML='';state.selZone=null};
const av=c=>({background:c.color});
const avEl=(u,s=36)=>'<span class="u-av" style="width:'+s+'px;height:'+s+'px;background:'+u.color+'">'+u.name.split(' ').map(x=>x[0]).join('')+'</span>';
const bdg=(txt,c)=>'<span class="bdg '+c+'">'+esc(txt)+'</span>';
const opt=(v,t,sel)=>{const a=v===sel?' selected':'';return '<option value="'+v+'"'+a+'>'+esc(t)+'</option>'};

/* ---------- STOCK & CASH ACTIONS ---------- */
function applyStock(p,br,qty,type,note){
 const old=p.stock[br]??0;let now;
 if(type==='in')now=old+qty;else now=old-qty;
 p.stock[br]=now;const u=me();
 const actName=type==='in'?'Stok girişi':(type==='out'?'Stok çıkışı':'Servis kullanımı');
 MOVES.unshift({d:new Date(),t:nowHM(),u:state.user,pid:p.id,br,act:actName,old,now,note});
 const bname=BNAME(br);
 logIt(esc(p.name)+' ('+esc(p.quality||'-')+') — '+bname+' '+actName.toLowerCase()+': '+old+' → '+now+' adet.',type==='in'?'in':'out');
 const low=now<=p.min[br];
 toast('<b>'+esc(p.name)+'</b> — '+bname+': '+old+' → <b>'+now+'</b>'+(low?' · <span style="color:#F5C542">Kritik stok!</span>':''),low?'warn':'ok');
 return now;
}
function applyTransfer(from,to,pid,qty,note){
 const p=prod(pid);if(!p)return;
 const cur=p.stock[from]??0;
 if(qty>cur){toast('<b>Yetersiz stok!</b> '+BNAME(from)+' stoğu: '+cur, 'warn');return false}
 p.stock[from]=cur-qty;p.stock[to]=(p.stock[to]??0)+qty;
 TRANSFERS.unshift({id:uid('trf'),from,to,pid,qty,d:new Date(),user:state.user,note});
 MOVES.unshift({d:new Date(),t:nowHM(),u:state.user,pid,br:from,act:'Transfer çıkışı',old:cur,now:cur-qty,note:BNAME(to)+' transferi'});
 MOVES.unshift({d:new Date(),t:nowHM(),u:state.user,pid,br:to,act:'Transfer girişi',old:p.stock[to]-qty,now:p.stock[to],note:BNAME(from)+'dan gelen'});
 logIt(esc(p.name)+' — '+BNAME(from)+' → '+BNAME(to)+' transfer: '+qty+' adet.', 'transfer');
 toast('<b>'+qty+' adet</b> '+esc(p.name)+' — '+BNAME(from)+' → '+BNAME(to)+': <b>'+cur+' → '+(cur-qty)+'</b>','ok');
 return true;
}
function addCash(br,type,kind,amt,pay,desc){
 CASH.unshift({id:uid('cash'),d:new Date(),br,user:state.user,type,kind,amt,pay,desc});
 logIt('Kasa '+(type==='in'?'girişi':'çıkışı')+' — '+BNAME(br)+' · '+kind+' · '+tl(amt)+' ('+pay+')', 'cash');
 if(type==='in'&&['Ürün Satışı','Aksesuar Satışı'].includes(kind))logIt('Satış kaydı — '+desc+' · '+tl(amt),'sell');
 toast((type==='in'?'Kasa girişi':'Kasa çıkışı')+' — '+BNAME(br)+' · '+tl(amt)+' · '+esc(pay),type==='in'?'ok':'warn');
}
function ensureStock(p){BRANCHES.forEach(b=>{if(!(b.id in p.stock))p.stock[b.id]=0;if(!(b.id in p.min))p.min[b.id]=3})}

/* ---------- LOGIN / SHELL ---------- */
const VIEWMETA={
 dashboard:['Ana Sayfa','GENEL BAKIŞ'], products:['Ürünler & Stok','YEDEK PARÇA · AKSESUAR · BARKOD'], transfers:['Stok Transferi','ŞUBELER ARASI'], movements:['Stok Hareketleri','DEĞİŞMEZ LOG'],
 services:['Servis Takibi','TEKNİK SERVİS'], customers:['Müşteriler','MÜŞTERİ & CİHAZ KARTLARI'], cash:['Kasa','ŞUBE KASASI'],
 branches:['Şubeler','MERKEZ + ŞUBELER'], reports:['Raporlar','STOK · SERVİS · KASA'], users:['Kullanıcılar & Yetkiler','ROL YÖNETİMİ'], logs:['Kullanıcı Logları','KİM NE YAPTI']};
function renderNavs(){
 const busy=me()&&!USERS.find(u=>u.id===state.user).role;
 const item=(v,ic,label)=>{if(!canView(v))return '';const on=v===state.view?' on':'';return '<a href="#" class="'+on+'" data-act="nav" data-v="'+v+'" data-label="'+esc(label)+'">'+IC[ic]+'<span>'+label+'</span></a>'};
 document.getElementById('navGeneral').innerHTML=item('dashboard','grid','Ana Sayfa')+item('branches','building','Şubeler');
 document.getElementById('navStock').innerHTML=item('products','box','Ürünler & Stok')+item('transfers','swap','Stok Transferi')+item('movements','log','Stok Hareketleri');
 document.getElementById('navService').innerHTML=item('services','wrench','Servis Takibi')+item('customers','users','Müşteriler');
 document.getElementById('navManage').innerHTML=item('cash','wallet','Kasa')+item('reports','chart','Raporlar')+item('users','eye','Kullanıcılar')+item('logs','shield','Kullanıcı Logları');
 /* içi boş kalan menü bölümlerinin başlığını gizle */
 ['navGeneral','navStock','navService','navManage'].forEach(id=>{const nav=document.getElementById(id);const sec=nav.previousElementSibling;if(sec&&sec.classList.contains('nav-sec'))sec.style.display=nav.children.length?'':'none'});
 const u=me();
 document.getElementById('sideUser').innerHTML=avEl(u,34)+'<div style="min-width:0"><div class="nm">'+esc(u.name)+'</div><div class="rl">'+(ROLES[u.role].n)+' · '+BNAME(u.br)+'</div></div>';
 document.getElementById('branchChip').innerHTML='Kapsam: <b>'+(roleKey()==='admin'?'Tüm Şubeler':BNAME(u.br))+'</b>';
}
function renderLogin(){
 document.getElementById('loginUsers').innerHTML=USERS.map(u=>{
  const svc=CASH.filter(c=>c.user===u.id).length;
  return '<button class="u-card" data-act="login" data-u="'+u.id+'">'+
  avEl(u,40)+
  '<div><div class="u-nm">'+esc(u.name)+'</div><div class="u-rl">'+esc(ROLES[u.role].n)+' · '+(u.br==='M'?'Merkez':'Şube 1')+'</div></div>'+
  '<div class="u-br">'+(isAdmin()?'yetki: full':'şube bazlı')+'</div></button>'}).join('');
}
function login(uid){
 state.user=uid;
 document.getElementById('login').style.display='none';
 document.getElementById('app').classList.add('on');
 try{if(localStorage.getItem('sbCollapsed')==='1')document.body.classList.add('sb-collapsed')}catch(e){}
 renderNavs();navigate('dashboard');
 toast('<b>Hoş geldin, '+esc(uName(uid))+'</b> — '+(ROLES[roleKey()].n)+' olarak giriş yaptın.');
}
function navigate(v){
 if(!canView(v)){toast('<b>Yetkiniz yok</b> — bu bölüm rolünüze kapalı.','warn');v='dashboard';}
 state.view=v;renderNavs();renderView();
}
function renderView(){
 const v=state.view;
 document.getElementById('pageTitle').innerHTML=VIEWMETA[v][0]+'<small>'+VIEWMETA[v][1]+'</small>';
 const el=document.getElementById('view');
 el.innerHTML='<div class="view-in" style="animation:rise .3s both">'+({dashboard:rDashboard,products:rProducts,transfers:rTransfers,movements:rMovements,services:rServices,customers:rCustomers,cash:rCash,branches:rBranches,reports:rReports,users:rUsers,logs:rLogs}[v]())+'</div>';
 window.scrollTo({top:0});
}

/* ---------- DASHBOARD ---------- */
function rDashboard(){
 const acik=SERVICES.filter(s=>s.status<9).length;
 const hazir=SERVICES.filter(s=>s.status===8).length;
 const kritik=PRODUCTS.filter(isCritical).length;
 const tot=b=>PRODUCTS.reduce((a,p)=>a+(p.stock[b]??0),0);
 const bug=[...CASH].filter(c=>fmtD(c.d)===fmtD(new Date()));
 const bugIn=bug.filter(c=>c.type==='in').reduce((a,c)=>a+c.amt,0);
 const bugNet=bug.reduce((a,c)=>a+(c.type==='in'?c.amt:-c.amt),0);
 const week=[];for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*86400000);const dstr=fmtD(d);const net=CASH.filter(c=>fmtD(c.d)===dstr).reduce((a,c)=>a+(c.type==='in'?c.amt:-c.amt),0);week.push({label:['Pzt','Sal','Çar','Per','Cum','Cmt','Paz'][d.getDay()===0?6:d.getDay()-1],net})}
 const mx=Math.max(...week.map(w=>Math.abs(w.net)),1);
 const bars=week.map(w=>'<div class="bar"><i style="height:'+Math.max(3,Math.round(Math.abs(w.net)/mx*100))+'%;background:'+(w.net>=0?'linear-gradient(180deg,var(--accent),#B83E1B)':'linear-gradient(180deg,#4A5568,#2B3648)')+'"></i><b>'+fmt(Math.round(w.net/1000))+'k</b><span>'+w.label+'</span></div>').join('');
 const done=SERVICES.filter(s=>s.status===9).length;
 const open=SERVICES.filter(s=>s.status<9).length;
 const okPct=done+open?Math.round(done/(done+open)*100):0;
 const dotCol={'transfer':'#2E5FA3',part:'#E4572E',in:'#177A52',out:'#C93A3A',sell:'#B07700',cash:'#177A52',edit:'#7C4DA6',login:'#6B7079'};
 const feed=LOGS.slice(0,6).map(l=>'<div class="feed-item"><span class="dot" style="background:'+(dotCol[l.kind]||'#8B909A')+'"></span><div style="flex:1"><div class="who"><b>'+esc(l.userName||uName(l.user))+'</b> <span class="when">'+fmtD(l.d)+' '+l.time+'</span></div><div class="what">'+esc(l.txt)+'</div></div><span style="align-self:flex-start;text-align:right" class="bdg '+(l.kind==='transfer'?'blu':l.kind==='part'?'acc':l.kind==='in'?'grn':l.kind==='out'?'red':l.kind==='sell'?'amb':l.kind==='cash'?'grn':'mut')+'">'+({transfer:'transfer',part:'parça',in:'giriş',out:'çıkış',sell:'satış',cash:'kasa',edit:'düzenle'}[l.kind]||l.kind)+'</span></div>').join('');
 const kr=PRODUCTS.filter(isCritical).slice(0,6).map(p=>{const s=BRANCHES.map(b=>(p.stock[b.id]??0)<=p.min[b.id]?(p.stock[b.id]??0)+'/'+p.min[b.id]:'').filter(Boolean).join(' · ');return '<div class="pl"><span class="pl-bar" style="width:6px"></span><span class="nm">'+esc(p.name)+' <small style="color:var(--ink3);font-size:11.5px">'+esc(p.quality||'')+'</small></span><span class="cnt" style="color:var(--amber)">'+s+'</span>'+bdg('Kritik','amb')+'</div>'}).join('')||'<div class="empty">Kritik stok yok</div>';
 const partsCount={};SERVICES.forEach(s=>s.parts.forEach(pt=>{partsCount[pt.pid]=(partsCount[pt.pid]||0)+pt.qty}));
 const topParts=Object.entries(partsCount).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([pid,n])=>{const p=prod(pid);return '<div class="pl"><span class="nm">'+esc(p.name)+'</span><span class="cnt">×'+n+'</span></div>'}).join('');
 const brBox=BRANCHES.map(b=>'<div class="bs"><div class="l">'+esc(b.name)+' Stok</div><div class="n">'+fmt(tot(b.id))+'</div><div style="font-family:var(--mono);font-size:11px;color:var(--ink3);margin-top:2px">'+PRODUCTS.filter(p=>brLow(p,b.id)).length+' kritik</div></div>').join('');
 return '<div class="stat-grid">'+
 '<div class="stat bump" style="--d:.02s"><div class="ic">'+IC.wrench+'</div><div class="lbl">Açık Servis</div><div class="num">'+acik+'</div></div>'+
 '<div class="stat bump2" style="--d:.06s"><div class="ic">'+IC.check+'</div><div class="lbl">Hazır Cihazlar</div><div class="num">'+hazir+'</div></div>'+
 '<div class="stat bump3" style="--d:.1s"><div class="ic">'+IC.alert+'</div><div class="lbl">Kritik Stok</div><div class="num">'+kritik+'</div></div>'+
 '<div class="stat bump4" style="--d:.14s"><div class="ic">'+IC.box+'</div><div class="lbl">Toplam Stok</div><div class="num">'+fmt(PRODUCTS.reduce((a,p)=>a+stockTotal(p),0))+' <small>adet</small></div></div>'+
 '<div class="stat" style="--d:.18s"><div class="ic">'+IC.money+'</div><div class="lbl">Bugünkü Satış & Tahsilat</div><div class="num">'+tl(bugIn)+'</div></div>'+
 '<div class="stat bump2" style="--d:.22s"><div class="ic">'+IC.send+'</div><div class="lbl">Bugünkü Net Kasa</div><div class="num">'+tl(bugNet)+'</div></div>'+
 '</div>'+
 '<div class="br-stock" style="margin-bottom:18px">'+brBox+'</div>'+
 '<div class="grid2">'+
  '<div class="card"><div class="card-h"><h4>Haftalık Net Kasa</h4><span class="bdg mut">son 7 gün</span></div><div class="card-pad"><div class="hero-bars">'+bars+'</div></div></div>'+
  '<div class="card"><div class="card-h"><h4>Servis Tamamlanma</h4><span class="bdg mut">'+done+' teslim · '+open+' açık</span></div><div class="card-pad"><div style="display:flex;gap:16px;align-items:center"><div class="gauge '+(okPct>=70?'g':okPct>=40?'o':'r')+'" style="--p:'+okPct+'"><i>%'+okPct+'</i></div><div style="flex:1"><div class="kv"><div><div class="k">Teslim edilen</div><div class="v" style="color:var(--green)">'+done+' servis</div></div><div><div class="k">Devam eden</div><div class="v" style="color:var(--accent)">'+open+' servis</div></div></div></div></div></div></div>'+
 '</div>'+
 '<div class="mini-cols" style="margin-bottom:18px">'+
  '<div class="card"><div class="card-h"><h4>Son İşlemler</h4><span class="bdg mut">canlı log</span></div><div class="feed">'+feed+'</div></div>'+
  '<div style="display:grid;gap:16px;align-content:start">'+
   '<div class="card"><div class="card-h"><h4>Kritik Stok</h4><span class="bdg red">'+kritik+' ürün</span></div><div class="parts-list" style="padding:6px 20px 10px">'+kr+'</div></div>'+
   '<div class="card"><div class="card-h"><h4>En Çok Kullanılan Parçalar</h4></div><div class="parts-list" style="padding:6px 20px 10px">'+topParts+'</div></div>'+
  '</div>'+
 '</div>';
}

/* ---------- PRODUCTS ---------- */
function selOpts(arr,sel){return arr.map(v=>opt(v,v,sel)).join('')}
function stockCells(p,brHl){
 return BRANCHES.map(b=>{const s=p.stock[b.id]??0;const low=s<=p.min[b.id];const zero=s<=0;const hl=brHl&&brHl===b.id;
 return '<span class="stock-cell '+(zero?'zero':low?'low':'')+(hl?' hl':'')+'"><b>'+s+'</b><span>'+esc(b.name)+'</span></span>'}).join('');
}
function filteredProducts(){
 const f=state.pf;const q=(f.q||'').trim().toLowerCase();
 return PRODUCTS.filter(p=>{
  if(f.brand&&p.brand!==f.brand)return false;
  if(f.model&&p.model!==f.model)return false;
  if(f.cat&&p.cat!==f.cat)return false;
  if(f.sub&&p.sub!==f.sub)return false;
  if(f.sup!==''&&p.sup!=f.sup)return false;
  if(f.qual!=='all'&&(!p.quality||p.quality!==f.qual))return false;
  if(f.stok==='low'&&!isCritical(p))return false;
  if(f.stok==='zero'&&stockTotal(p)!==0)return false;
  if(f.stok==='ok'&&(isCritical(p)||stockTotal(p)===0))return false;
  if(q){const hay=[p.name,p.brand,p.model,p.cat,p.sku,p.barcode,p.quality,p.sub].join(' ').toLowerCase();
   if(!q.split(' ').every(tok=>hay.includes(tok)))return false}
  return true});
}
function treeHTML(){
 const subcat=(s)=>PRODUCTS.filter(p=>p.sub===s);
 const brandTree=(sub)=>function(){
  const brands=[...new Set(subcat(sub).map(p=>p.brand))].sort();
  return brands.map(b=>{
   const models=[...new Set(subcat(sub).filter(p=>p.brand===b).map(p=>p.model))].sort();
   const cnt=subcat(sub).filter(p=>p.brand===b).length;
   return '<details class="tree-grp"><summary><span class="car">'+IC.chev+'</span>'+esc(b)+(b==='Genel'?' <span style="color:var(--ink3)">(universal)</span>':'')+'<span class="sc">'+cnt+'</span></summary>'+
   models.map(m=>{const cats=[...new Set(subcat(sub).filter(p=>p.brand===b&&p.model===m).map(p=>p.cat))].sort();
    const mc=subcat(sub).filter(p=>p.brand===b&&p.model===m).length;
    return '<details class="tree-grp" style="margin-left:10px;margin-bottom:4px"><summary><span class="car">'+IC.chev+'</span>'+esc(m)+'<span class="sc">'+mc+'</span></summary>'+
    cats.map(c=>{const on=(state.pf.brand===b&&state.pf.model===m&&state.pf.cat===c)?' on':'';return '<div class="tree-item leaf'+on+'" data-act="ttree" data-b="'+esc(b)+'" data-m="'+esc(m)+'" data-c="'+esc(c)+'">'+esc(c)+'</div>'}).join('')+
    '</details>'}).join('')+
   '</details>'}).join('');
 }();
 const fq=q=>PRODUCTS.filter(p=>{if(!q)return true;const hay=[p.brand,p.model,p.cat].join(' ').toLowerCase();return q.split(' ').every(t=>hay.includes(t))});
 const q=state.pf.treeQ.trim().toLowerCase();
 let inner='';
 if(q){inner=['Yedek Parça','Aksesuar'].map(sub=>{const list=fq(q).filter(p=>p.sub===sub);if(!list.length)return '';return '<details class="tree-grp" open><summary><span class="car">'+IC.chev+'</span>'+sub+'<span class="sc">'+list.length+'</span></summary>'+list.slice(0,16).map(p=>'<div class="tree-item leaf on" data-act="ttree" data-b="'+esc(p.brand)+'" data-m="'+esc(p.model)+'" data-c="'+esc(p.cat)+'">'+esc(p.brand)+' · '+esc(p.model)+' · '+esc(p.cat)+' <span class="sc">'+esc(p.quality)+'</span></div>').join('')+'</details>'}).join('')||'<div class="empty">Eşleşme yok</div>'}
 else inner='<details class="tree-grp" open><summary><span class="car">'+IC.chev+'</span>Yedek Parça<span class="sc">'+subcat('Yedek Parça').length+'</span></summary>'+brandTree('Yedek Parça')+'</details>'+
 '<details class="tree-grp" open><summary><span class="car">'+IC.chev+'</span>Aksesuar<span class="sc">'+subcat('Aksesuar').length+'</span></summary>'+brandTree('Aksesuar')+'</details>';
 return inner;
}
function prodAvatar(p){
 const cls=p.quality==='Orijinal'?'og':p.quality==='Yan Sanayi'?'ys':'';
 const ini=(p.brand||'?').trim().slice(0,2).toUpperCase();
 return '<span class="p-av '+cls+'">'+esc(ini)+'</span>';
}
function rProducts(){
 const f=state.pf;const list=filteredProducts();
 const brandOpts=[...new Set(PRODUCTS.map(p=>p.brand))].sort();
 const modelOpts=[...new Set(PRODUCTS.filter(p=>!f.brand||p.brand===f.brand).map(p=>p.model))].sort();
 const catOpts=[...new Set(PRODUCTS.filter(p=>!f.brand||p.brand===f.brand).map(p=>p.cat))].sort();
 const anyFilter=f.q||f.brand||f.model||f.cat||f.sup!==''||f.stok!=='all'||f.qual!=='all';
 const rows=list.map(p=>{
  const [dur,c]=stokDurum(p);
  return '<tr data-act="prow" data-pid="'+p.id+'"><td><div class="prod-cell">'+prodAvatar(p)+'<div class="prod-name">'+esc(p.name)+'<small>'+esc(p.sub)+' · '+esc(p.quality||'Tanımsız kalite')+'</small></div></div></td>'+
  '<td class="mono2"><span class="sku-tag">'+esc(p.sku)+'</span><div class="bar-mono">'+esc(p.barcode)+'</div></td>'+
  '<td>'+esc(p.brand)+'<br><span class="mono" style="font-size:11.5px;color:var(--ink3)">'+esc(p.model)+' · '+esc(p.cat)+'</span></td>'+
  '<td class="num"><span class="price-buy">'+tl(p.buy)+'</span><div class="price-sell">'+tl(p.sell)+'</div></td>'+
  '<td><div class="prod-stock">'+stockCells(p)+'</div></td>'+
  '<td class="num"><span class="tot-num">'+fmt(stockTotal(p))+'</span></td>'+
  '<td>'+bdg(dur,c)+'</td></tr>'}).join('');
 return '<div class="prod-single">'+
  '<div class="prod-toolbar" style="animation:rise .3s .05s both">'+
   '<div class="pt-search">'+
    '<div class="searchbox pt-main">'+IC.search+'<input id="pSearch" placeholder="Ürün adı, SKU, model ara… (örn: iphone 13 ekran)" value="'+esc(f.q)+'"></div>'+
    '<div class="searchbox pt-bar">'+IC.barcode+'<input id="pBarcode" placeholder="Barkod oku, Enter" style="padding-left:36px"></div>'+
   '</div>'+
   '<div class="pt-filters">'+
    '<select class="fld" id="fBrand"><option value="">Tüm markalar</option>'+selOpts(brandOpts,f.brand)+'</select>'+
    '<select class="fld" id="fModel"><option value="">Tüm modeller</option>'+selOpts(modelOpts,f.model)+'</select>'+
    '<select class="fld" id="fCat"><option value="">Tüm kategoriler</option>'+selOpts(catOpts,f.cat)+'</select>'+
    '<select class="fld" id="fSup"><option value="">Tüm tedarikçiler</option>'+SUPPLIERS.map((s,i)=>opt(i,s,f.sup!==''?Number(f.sup):''))+'</select>'+
    '<select class="fld" id="fStok"><option value="all">Tüm stok durumları</option><option value="low" '+(f.stok==='low'?'selected':'')+'>Kritik / düşük</option><option value="zero" '+(f.stok==='zero'?'selected':'')+'>Tükendi</option><option value="ok" '+(f.stok==='ok'?'selected':'')+'>Normal</option></select>'+
    '<div class="q-chips"><span class="chip '+(f.qual==='all'?'on':'')+'" data-act="qual" data-q="all">Tümü</span><span class="chip '+(f.qual==='Orijinal'?'on':'')+'" data-act="qual" data-q="Orijinal">Orijinal</span><span class="chip '+(f.qual==='Yan Sanayi'?'on':'')+'" data-act="qual" data-q="Yan Sanayi">Yan Sanayi</span></div>'+
    (anyFilter?'<button class="chip clr" data-act="clearpf">'+IC.x+' Temizle</button>':'')+
   '</div>'+
  '</div>'+
  '<div class="card"><div class="card-h"><h4>Ürün Listesi</h4><span class="bdg mut">'+fmt(list.length)+' ürün</span><div class="act">'+(perm('products')&&roleKey()!=='view'?'<button class="btn sm" data-act="newprod">'+IC.plus+' Yeni Ürün</button>':'')+'</div></div>'+
  '<div class="tbl-wrap"><table class="tbl prod-tbl"><thead><tr><th>Ürün</th><th>SKU / Barkod</th><th>Marka / Model</th><th class="num">Alış / Satış</th><th class="cnt">Şube Stokları</th><th class="num">Toplam</th><th>Durum</th></tr></thead><tbody>'+(rows||'<tr class="no-hover"><td colspan="7"><div class="empty">'+IC.box+'Filtrelere uyan ürün yok</div></td></tr>')+'</tbody></table></div></div>'+
 '</div>';
}
function prodModalHtml(p){
 const [dur,c]=stokDurum(p);
 const moveRows=MOVES.filter(m=>m.pid===p.id).slice(0,8).map(m=>'<tr><td class="mono2">'+fmtD(m.d)+' '+m.t+'</td><td>'+esc(uName(m.u))+'</td><td>'+esc(m.act)+'</td><td class="num">'+m.old+' → '+m.now+'</td></tr>').join('');
 const attrs=(p.attrs||[]).map(a=>'<tr><td style="color:var(--ink3)">'+esc(a[0])+'</td><td style="font-weight:600">'+esc(a[1])+'</td></tr>').join('');
 return '<div class="modal-head"><div><h3>'+esc(p.name)+' '+bdg(p.quality||'-',p.quality==='Orijinal'?'grn':p.quality==='Yan Sanayi'?'amb':'mut')+'</h3><div class="sub">SKU '+esc(p.sku)+' · Barkod '+esc(p.barcode)+'</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
 '<div class="modal-body">'+
  '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">'+
   '<div class="f-group"><span class="lbl">Marka / Model</span><div style="font-weight:600">'+esc(p.brand)+' — '+esc(p.model)+'</div></div>'+
   '<div class="f-group"><span class="lbl">Kategori</span><div style="font-weight:600">'+esc(p.sub)+' › '+esc(p.cat)+'</div></div>'+
   '<div class="f-group"><span class="lbl">Tedarikçi</span><div style="font-weight:600">'+esc(SUPPLIERS[p.sup])+'</div></div>'+
   '<div class="f-group"><span class="lbl">Durum</span><div>'+bdg(dur,c)+'</div></div>'+
   '<div class="f-group"><span class="lbl">Alış fiyatı</span><div class="mono">'+tl(p.buy)+'</div></div>'+
   '<div class="f-group"><span class="lbl">Satış fiyatı</span><div class="mono" style="font-weight:600">'+tl(p.sell)+'</div></div>'+
  '</div>'+
  (attrs?'<table class="pm" style="margin:4px 0 12px">'+attrs+'</table>':'')+
  '<div class="sec-t">Şube Bazlı Stok '+bdg('Toplam '+fmt(stockTotal(p))+' adet','dark')+'</div>'+
  '<div style="display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">'+BRANCHES.map(b=>{const s=p.stock[b.id]??0;const low=s<=p.min[b.id];return '<div style="border:1px solid '+(low?'#F0C6C0':'var(--line)')+';background:'+(low?'var(--red-soft)':'#FBF9F4')+';border-radius:10px;padding:10px 13px"><span class="lbl" style="margin:0 0 3px">'+esc(b.name)+'</span><div style="font-family:var(--disp);font-size:22px;color:'+(low?'var(--red)':'var(--ink)')+'">'+s+' <span style="font-family:var(--mono);font-size:12.5px;color:var(--ink3)">/ min '+p.min[b.id]+'</span></div></div>'}).join('')+'</div>'+
  '<div class="notes '+(isCritical(p)?'':'blu')+'" style="margin-top:12px">'+IC.alert+'<div>'+(isCritical(p)?'<b>Dikkat:</b> Bu ürün bir veya daha fazla şubede minimum stok seviyesinin altında. Tedarik planı yapılmalı.':'<b>Bilgi:</b> Minimum stok seviyesi şube bazında tanımlıdır. Stok kritik seviyeye düştüğünde sistem otomatik uyarı verir.')+'</div></div>'+
  '<div class="sec-t">Hareket Geçmişi</div>'+
  '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tarih</th><th>Kullanıcı</th><th>İşlem</th><th class="num">Stok</th></tr></thead><tbody>'+moveRows+'</tbody></table></div>'+
  '<div class="sec-t">Barkod</div>'+
  '<div style="display:flex;gap:16px;align-items:center;background:#FBF9F4;border:1px solid var(--line);border-radius:10px;padding:12px 16px">'+
   '<div style="flex:1"><div class="barcode" style="max-width:180px"></div><div class="mono" style="font-size:12.5px;margin-top:4px">'+esc(p.barcode)+'</div></div>'+
   '<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end">'+
    (roleKey()!=='view'?'<button class="btn sm ghost" data-act="newbarcode" data-pid="'+p.id+'">'+IC.qty+' Yeni Barkod</button>':'')+
    '<button class="btn sm ghost" data-act="label" data-pid="'+p.id+'">'+IC.print+' Etiket Yazdır</button>'+
   '</div>'+
  '</div>'+
  '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:15px">'+
   (roleKey()!=='view'?'<button class="btn sm green" data-act="stockop" data-pid="'+p.id+'" data-t="in">'+IC.plus+' Stok Girişi</button><button class="btn sm" data-act="stockop" data-pid="'+p.id+'" data-t="out">'+IC.x+' Stok Çıkışı</button><button class="btn sm ghost" data-act="stockop" data-pid="'+p.id+'" data-t="trf">'+IC.swap+' Transfer</button>':'<span class="bdg mut">Görüntüleme rolü — işlem yapamaz</span>')+
  '</div>'+
 '</div>';
}
function addProductModal(){modal('<div class="modal-head"><div><h3>'+IC.plus+' Yeni Ürün</h3><div class="sub">branş / barkod / fiyat bilgileri</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div><div class="modal-body"><div class="f-row">'+
 '<div class="f-group"><span class="lbl">Ürün adı</span><input class="fld" id="npName" placeholder="iPhone 13 OLED Ekran"></div>'+
 '<div class="f-group"><span class="lbl">Ürün türü</span><select class="fld" id="npSub"><option>Yedek Parça</option><option>Aksesuar</option></select></div>'+
 '<div class="f-group"><span class="lbl">Marka</span><input class="fld" id="npBrand" placeholder="Apple"></div>'+
 '<div class="f-group"><span class="lbl">Model</span><input class="fld" id="npModel" placeholder="iPhone 13"></div>'+
 '<div class="f-group"><span class="lbl">Kategori</span><select class="fld" id="npCat"></select></div>'+
 '<div class="f-group"><span class="lbl">Kalite</span><select class="fld" id="npQual"><option>Orijinal</option><option>Yan Sanayi</option></select></div>'+
 '<div class="f-group"><span class="lbl">SKU</span><input class="fld" id="npSku" placeholder="EKR-IP13-ORG"></div>'+
 '<div class="f-group"><span class="lbl">Barkod <small>(boş bırakılırsa otomatik üretilir)</small></span><input class="fld" id="npBar" placeholder="86901200…"></div>'+
 '<div class="f-group"><span class="lbl">Alış fiyatı</span><input class="fld" id="npBuy" type="number" placeholder="6200"></div>'+
 '<div class="f-group"><span class="lbl">Satış fiyatı</span><input class="fld" id="npSell" type="number" placeholder="7800"></div>'+
 '<div class="f-group"><span class="lbl">Tedarikçi</span><select class="fld" id="npSup">'+SUPPLIERS.map((s,i)=>opt(i,s))+'</select></div>'+
 '<div class="f-group"><span class="lbl">Minimum stok</span><input class="fld" id="npMin" type="number" value="3"></div>'+
 '</div><div class="f-group"><span class="lbl">Açıklama</span><textarea class="fld" id="npDesc" placeholder="Ürün açıklaması…"></textarea></div></div>'+
 '<div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn" data-act="saveprod">'+IC.check+' Kaydet</button></div>','wide');}
/* ---------- TRANSFERS ---------- */
function rTransfers(){
 const rows=TRANSFERS.map(t=>{const p=prod(t.pid);return '<tr><td class="mono2" style="font-weight:600">'+esc(t.id)+'</td><td class="mono2">'+fmtD(t.d)+' '+pad(t.d.getHours())+':'+pad(t.d.getMinutes())+'</td><td>'+esc(BNAME(t.from))+' <span class="bdg acc">→</span> '+esc(BNAME(t.to))+'</td><td>'+esc(p.name)+'<br><small class="mono" style="color:var(--ink3);font-size:11.5px">'+esc(p.sku)+'</small></td><td class="num" style="font-weight:700">'+t.qty+' adet</td><td>'+esc(uName(t.user))+'</td><td style="max-width:220px">'+esc(t.note||'-')+'</td></tr>'}).join('');
 const opts=PRODUCTS.map(p=>'<option value="'+p.id+'">['+esc(p.sub)+'] '+esc(p.brand)+' · '+esc(p.name)+(p.quality?' · '+esc(p.quality):'')+'</option>').join('');
 return '<h3 style="font-size:16px;margin-bottom:4px">Şubeler Arası Stok Transferi</h3><p style="color:var(--ink2);font-size:14px;margin-bottom:16px">Gönderen şube stoğu düşer, alan şube stoğu artar. Her transfer otomatik loglanır ve sistem tarafından şube stokları güncellenir.</p>'+
 '<div class="card" style="margin-bottom:18px"><div class="card-pad" style="display:grid;grid-template-columns:1fr 1fr 1fr 100px 1.4fr;gap:12px;align-items:end">'+
  '<div class="f-group" style="margin:0"><span class="lbl">Ürün</span><select class="fld" id="trfProd"><option value="">Seçin…</option>'+opts+'</select></div>'+
  '<div class="f-group" style="margin:0"><span class="lbl">Gönderen şube</span><select class="fld" id="trfFrom">'+BRANCHES.map(b=>opt(b.id,b.name)).join('')+'</select></div>'+
  '<div class="f-group" style="margin:0"><span class="lbl">Alan şube</span><select class="fld" id="trfTo">'+BRANCHES.map(b=>opt(b.id,b.name)).join('')+'</select></div>'+
  '<div class="f-group" style="margin:0"><span class="lbl">Miktar</span><input class="fld" id="trfQty" type="number" min="1" value="1"></div>'+
  '<div class="f-group" style="margin:0"><span class="lbl">Açıklama (ops.)</span><input class="fld" id="trfNote" placeholder="örn: şube ekran talebi"></div>'+
  '<button class="btn" data-act="doTransferView" style="height:38px">'+IC.swap+' Transfer Yap</button></div>'+
  '<div style="grid-column:1/-1;padding:0 20px 16px"><div class="notes blu" style="margin:0">'+IC.info+'<div>Merkez → Şube 1 örneği: <b>2 adet iPhone 13 OLED Ekran</b> transfer edildiğinde Merkez stoğu 7 → 5, Şube 1 stoğu 7 → 9 olarak otomatik güncellenir ve <b>Stok Hareketleri</b> + <b>Loglar</b> bölümüne işlenir.</div></div></div></div>'+
 '<div class="card"><div class="card-h"><h4>Transfer Kayıtları</h4><span class="bdg mut">'+TRANSFERS.length+' kayıt</span></div><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Kayıt</th><th>Tarih</th><th>Güzergah</th><th>Ürün</th><th class="num">Miktar</th><th>İşlemi yapan</th><th>Açıklama</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}
function doTransferCore(from,to,pid,qty,note){
 if(!pid||from===to){toast('<b>Geçersiz transfer.</b> Ürün seç ve farklı şubeler belirle.','warn');return}
 if(!qty||qty<1){toast('<b>Miktar girin.</b>','warn');return}
 applyTransfer(from,to,pid,Number(qty),note);
 closeModal();renderView();
}
/* ---------- MOVEMENTS ---------- */
function rMovements(){
 const br=state.mvBr||'all';
 const list=MOVES.filter(m=>br==='all'||m.br===br);
 const rows=list.map(m=>{const p=prod(m.pid);const delta=m.now-m.old;return '<tr class="no-hover"><td class="mono2">'+fmtD(m.d)+' '+m.t+'</td><td>'+esc(uName(m.u))+'</td><td>'+esc(p.name)+'<br><small class="mono" style="color:var(--ink3);font-size:11.5px">'+esc(p.sku)+'</small></td><td>'+esc(BNAME(m.br))+'</td><td>'+bdg(m.act,m.act==='Stok girişi'||m.act==='Transfer girişi'?'grn':m.act==='Transfer çıkışı'?'blu':'amb')+'</td><td class="num mono2">'+m.old+' → <b>'+m.now+'</b></td><td class="num mono2" style="color:'+(delta>=0?'var(--green)':'var(--red)')+'">'+(delta>=0?'+':'')+delta+'</td><td style="color:var(--ink3);font-size:12.5px">'+esc(m.note||'')+'</td></tr>'}).join('');
 return '<div class="notes grn">'+IC.shield+'<div><b>Kayıtlar silinemez.</b> Stok hareketleri tüm kullanıcılar tarafından görüntülenebilir; silme/yönetme yetkisi yalnızca yöneticidedir. Barkodlu stok giriş/çıkış, transfer ve servis kullanımları burada otomatik kaydedilir.</div></div>'+
 '<div class="filter-bar" style="margin-bottom:14px"><select class="fld" id="mvBr" style="width:150px"><option value="all">Tüm şubeler</option>'+BRANCHES.map(b=>opt(b.id,b.name,br)).join('')+'</select><span class="warn-strip" style="margin-left:auto">'+IC.clock+' '+MOVES.length+' hareket · '+list.length+' şube filtresinde</span></div>'+
 '<div class="card"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tarih / Saat</th><th>Kullanıcı</th><th>Ürün</th><th>Şube</th><th>İşlem</th><th class="num">Eski → Yeni</th><th class="num">Δ</th><th>Not</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}
/* ---------- SERVICES ---------- */
function svcRows(list){
 return list.map(s=>{const c=cust(s.cust);const dv=s.dev&&dev(s.dev);const tot=svcTotal(s);
  return '<tr data-act="svcRow" data-sid="'+s.id+'"><td class="mono2" style="font-weight:600;color:var(--accent-dark)">'+s.no+'</td><td style="max-width:150px">'+esc(c.name)+'<br><small class="mono" style="color:var(--ink3);font-size:11.5px">'+esc(c.phone)+'</small></td><td>'+(dv?esc(dv.brand)+' '+esc(dv.model)+'<br><small class="mono" style="color:var(--ink3);font-size:11.5px">IMEI '+esc(dv.imei)+'</small>':'<span style="color:var(--ink3)">cihaz yok</span>')+'</td><td>'+esc(BNAME(s.br))+'</td><td style="max-width:190px;color:var(--ink2)">'+esc(s.fault||'-')+'</td><td>'+esc(uName(s.tech))+'</td><td class="num" style="font-weight:600">'+tl(tot)+'</td><td>'+bdg(STATUSES[s.status],STATUS_COLOR[s.status])+'</td></tr>'}).join('');
}
function rServices(){
 const f=state.sf;const q=(f.q||'').trim().toLowerCase();
 let list=SERVICES.filter(s=>{
  if(state.sbBr&&state.sbBr!=='all'&&s.br!==state.sbBr)return false;
  if(f.dur!=='all'&&s.status!==Number(f.dur))return false;
  if(q){const hay=[s.no,cust(s.cust).name,cust(s.cust).phone,dev(s.dev).imei,dev(s.dev).brand+' '+dev(s.dev).model,s.fault].join(' ').toLowerCase();if(!hay.includes(q))return false}
  return true});
 const rows=svcRows(list);
 const durOpts=STATUSES.map((s,i)=>opt(i,s,f.dur!=='all'?f.dur:''));
 return '<div class="filter-bar">'+
  '<div class="searchbox" style="max-width:300px;margin:0">'+IC.search+'<input id="sSearch" placeholder="Servis no, IMEI, telefon, müşteri…" value="'+esc(f.q)+'"></div>'+
  '<select class="fld" id="fDurum" style="width:190px"><option value="all">Tüm durumlar</option>'+durOpts+'</select>'+
  '<select class="fld" id="fSvcBr" style="width:130px"><option value="all">Tüm şubeler</option>'+BRANCHES.map(b=>opt(b.id,b.name,state.sbBr||'all')).join('')+'</select>'+
  (roleKey()!=='view'?'<button class="btn" data-act="newSvc" style="margin-left:auto">'+IC.plus+' Yeni Servis Kaydı</button>':'')+
 '</div>'+
 '<div class="card"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Servis No</th><th>Müşteri</th><th>Cihaz</th><th>Şube</th><th>Arıza</th><th>Teknisyen</th><th class="num">Toplam</th><th>Durum</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}
function svcModal(s){
 const c=cust(s.cust);const dv=s.dev&&dev(s.dev);const tot=svcTotal(s);
 const parts=s.parts.length?s.parts.map(pt=>{const p=prod(pt.pid);return '<tr><td>'+esc(p.name)+' <small class="mono" style="color:var(--ink3)">'+esc(p.sku)+'</small></td><td class="num">× '+pt.qty+'</td><td class="num">'+tl(p.sell*pt.qty)+'</td></tr>'}).join(''):'<tr><td colspan="3" style="color:var(--ink3)">Parça kullanılmadı</td></tr>';
 const nowIdx=s.status;
 const steps=STATUSES.map((st,i)=>'<span class="st '+(i<nowIdx?'done':i===nowIdx?'now':'pending')+'">'+esc(st)+'</span>').join('');
 const payBd=s.paid>=tot&&tot>0&&s.status===9?'grn':s.paid>0?'amb':'red';
 return '<div class="modal-head"><div><h3 class="mono">'+esc(s.no)+' <span class="bdg acc">'+STATUSES[s.status]+'</span></h3><div class="sub">'+esc(c.name)+' · '+esc(d.brand)+' '+esc(d.model)+' · IMEI '+esc(d.imei)+'</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
 '<div class="modal-body">'+
  '<div class="kv" style="margin-bottom:14px"><div><div class="k">Şube</div><div class="v">'+esc(BNAME(s.br))+'</div></div><div><div class="k">Açılış</div><div class="v">'+fmtDT(s.date)+'</div></div><div><div class="k">Teknisyen</div><div class="v">'+esc(uName(s.tech))+'</div></div><div><div class="k">Şifre / Pin</div><div class="v">'+(s.pass?esc(s.pass):'<span style="color:var(--ink3)">—</span>')+'</div></div><div><div class="k">Ödeme</div><div class="v">'+esc(s.pay)+' · '+bdg(s.paid?'Tahsil edildi':'Ödenmedi',payBd)+'</div></div>'+(dv?'<div><div class="k">Cihaz</div><div class="v">'+esc(dv.brand)+' '+esc(dv.model)+' <span class="mono" style="color:var(--ink3)">'+esc(dv.imei)+'</span></div></div>':'')+'</div>'+
  '<div class="sec-t">Müşteri Şikayeti</div><div class="a5-box" style="min-height:auto">'+esc(s.fault||'—')+'</div>'+
  '<div class="sec-t">Kullanılan Parçalar</div><table class="a5-table"><thead><tr><th>Ürün</th><th class="num">Miktar</th><th class="num">Tutar</th></tr></thead><tbody>'+parts+'</tbody></table>'+
  '<div class="a5-total"><span>İşçilik <b>'+tl(s.labor)+'</b></span><span>İndirim <b>−'+tl(s.disc)+'</b></span><span class="v big">TOPLAM '+tl(tot)+'</span></div>'+
  (s.notes?'<div class="notes blu" style="margin-top:12px">'+IC.info+'<div>'+esc(s.notes)+'</div></div>':'')+
  '<div class="sec-t">Servis Durumu</div><div class="status-step">'+steps+'</div>'+
  (roleKey()!=='view'?'<div class="f-group" style="margin-top:13px"><span class="lbl">Durumu güncelle</span><select class="fld" id="svcStatus" data-sid="'+s.id+'">'+STATUSES.map((st,i)=>opt(i,st,i===s.status)).join('')+'</select></div>':'')+
 '</div>'+
 '<div class="modal-foot">'+(roleKey()!=='view'?'<button class="btn ghost" data-act="editSvc" data-sid="'+s.id+'">'+IC.edit+' Düzenle</button>':'')+'<button class="btn" data-act="printA5" data-sid="'+s.id+'">'+IC.print+' A5 Servis Formu</button></div>';
}
function newSvcModal(){
 const custOpts=CUSTOMERS.map(c=>opt(c.id,c.name+' — '+c.phone)).join('');
 const techOpts=USERS.filter(u=>u.role==='tech').map(u=>opt(u.id,u.name)).join('');
 const payOpts=PAY.map(p=>opt(p,p)).join('');
 const partOpts=PRODUCTS.map(p=>'<option value="'+p.id+'">['+esc(p.sub)+'] '+esc(p.brand)+' · '+esc(p.name)+(p.quality?' · '+esc(p.quality):'')+'</option>').join('');
 return modal('<div class="modal-head"><div><h3>Yeni Servis Kaydı</h3><div class="sub">servis no otomatik üretilir · parça kullanımı stoktan düşer</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
 '<div class="modal-body">'+
  '<div class="f-row">'+
   '<div class="f-group"><span class="lbl">Müşteri</span><select class="fld" id="nsCust"><option value="">Seçin…</option>'+custOpts+'</select></div>'+
   '<div class="f-group"><span class="lbl">Cihaz</span><select class="fld" id="nsDev"><option value="">Önce müşteri seçin</option></select></div>'+
   '<div class="f-group"><span class="lbl">Şube</span><select class="fld" id="nsBr">'+BRANCHES.map(b=>opt(b.id,b.name,me().br)).join('')+'</select></div>'+
   '<div class="f-group"><span class="lbl">Teknisyen</span><select class="fld" id="nsTech">'+techOpts+'</select></div>'+
  '</div>'+
  '<div class="f-group"><span class="lbl">Arıza / Müşteri şikayeti</span><textarea class="fld" id="nsFault" placeholder="Cihazın arızası, müşterinin şikayeti…"></textarea></div>'+
  '<div class="f-row"><div class="f-group"><span class="lbl">Cihaz şifresi / PIN</span><input class="fld" id="nsPass" placeholder="pin veya desen (slack)"></div><div class="f-group"><span class="lbl">Ödeme yöntemi</span><select class="fld" id="nsPay">'+payOpts+'</select></div></div>'+
  '<div class="sec-t">Kullanılacak Parçalar <span style="font-weight:400;color:var(--ink3)">(şube stoğundan otomatik düşülür)</span></div>'+
  '<div id="nsParts"><div class="part-row" style="display:grid;grid-template-columns:1fr 90px 40px;gap:10px;margin-bottom:9px"><select class="fld" style="height:36px">'+partOpts+'</select><input class="fld" type="number" value="1" min="1" style="height:36px;text-align:center"><button class="btn ghost sm" data-act="addpart">'+IC.plus+'</button></div></div>'+
  '<div class="f-row3"><div class="f-group"><span class="lbl">İşçilik (₺)</span><input class="fld" id="nsLabor" type="number" value="250"></div><div class="f-group"><span class="lbl">İndirim (₺)</span><input class="fld" id="nsDisc" type="number" value="0"></div><div class="f-group"><span class="lbl">Şu an tahsilat (₺)</span><input class="fld" id="nsPaid" type="number" value="0"></div></div>'+
  '<div class="f-group"><span class="lbl">Notlar</span><textarea class="fld" id="nsNotes"></textarea></div>'+
 '</div>'+
 '<div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn" data-act="saveSvc" style="font-weight:700">'+IC.check+' Servisi Aç</button></div>','wide');
}
function saveSvcCore(){
 const cid=document.getElementById('nsCust').value;
 const did=document.getElementById('nsDev').value;
 const br=document.getElementById('nsBr').value;
 const tech=document.getElementById('nsTech').value;
 const fault=document.getElementById('nsFault').value.trim();
 const pass=document.getElementById('nsPass').value.trim();
 if(!cid||!fault){toast('<b>Müşteri ve arıza bilgisi zorunlu.</b>','warn');return}
 if(!did){toast('<b>Cihaz seçilmedi.</b> Önce Müşteriler → Cihaz Ekle ile cihaz kartı oluştur.','warn');return}
 const parts=[...document.querySelectorAll('#nsParts .part-row')].map(r=>{const sel=r.querySelector('select');const q=r.querySelector('input');return{pid:sel.value,qty:Math.max(1,Number(q.value)||1)}}).filter(x=>x.pid);
 if(parts.some(pt=>{const p=prod(pt.pid);return (p.stock[br]??0)<pt.qty})){toast('<b>Seçilen şubede yetersiz parça stoğu!</b> Transfer yaparak takviye edin.','warn');return}
 const s={id:uid('srv'),no:'SRV-2026-'+String(10000+SEQ.srv),cust:cid,dev:did,br,date:new Date(),fault,pass,tech,parts,labor:Number(document.getElementById('nsLabor').value)||0,disc:Number(document.getElementById('nsDisc').value)||0,pay:document.getElementById('nsPay').value,paid:Number(document.getElementById('nsPaid').value)||0,status:0,notes:document.getElementById('nsNotes').value.trim()};
 SERVICES.unshift(s);
 parts.forEach(pt=>{const p=prod(pt.pid);applyStock(p,br,pt.qty,'svc','Servis '+s.no)});
 const tot=svcTotal(s);
 if(s.paid>0){addCash(br,'in','Servis ödemesi',s.paid,s.pay,s.no+' tahsilat — '+cust(cid).name)}
 logIt('Yeni servis açıldı: '+s.no+' — '+cust(cid).name+' · '+dev(did).brand+' '+dev(did).model+' · '+BNAME(br),'svc');
 toast('<b>'+s.no+'</b> açıldı — toplam '+tl(tot)+' ('+(s.paid?'tahsilat '+tl(s.paid)+' alındı':'tahsilat bekleniyor')+')','ok');
 closeModal();renderView();
}
/* ---------- CUSTOMERS ---------- */
function rCustomers(){
 const q=(state.cf.q||'').trim().toLowerCase();
 const list=CUSTOMERS.filter(c=>!q||[c.name,c.phone,c.phone2,c.mail].join(' ').toLowerCase().includes(q));
 const rows=list.map(c=>{const ds=devsOf(c.id);const sv=servOf(c.id);const open=sv.filter(s=>s.status<9).length;
  return '<tr data-act="custRow" data-cid="'+c.id+'"><td style="font-weight:600">'+esc(c.name)+'</td><td class="mono2">'+esc(c.phone)+'</td><td class="mono2" style="color:var(--ink3)">'+esc(c.phone2||'—')+'</td><td>'+(ds.map(d=>'<span class="bdg mut" style="margin:1px 2px">'+esc(d.brand)+' '+esc(d.model)+'</span>').join('')||'—')+'</td><td class="cnt">'+sv.length+'</td><td>'+(open?bdg(open+' açık','acc'):bdg('—','mut'))+'</td></tr>'}).join('');
 return '<div class="filter-bar">'+
  '<div class="searchbox" style="max-width:320px;margin:0">'+IC.search+'<input id="cSearch" placeholder="Ad, telefon ara…" value="'+esc(state.cf.q)+'"></div>'+
  (roleKey()!=='view'?'<button class="btn" data-act="newCust" style="margin-left:auto">'+IC.plus+' Yeni Müşteri</button>':'')+
 '</div>'+
 '<div class="card"><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Müşteri</th><th>Telefon</th><th>Alt. Telefon</th><th>Cihazları</th><th class="cnt">Toplam Servis</th><th>Açık Servis</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}
function custModal(c){
 const ds=devsOf(c.id);const sv=servOf(c.id);
 const devCards=ds.map(d=>{
  const zones=Object.keys(d.cosm);const zsum=zones.length?zones.map(z=>{const dam=d.cosm[z].join(', ');return '<span class="bdg red" style="margin:2px">'+esc(z)+' · '+esc(dam)+'</span>'}).join(''):'<span class="bdg grn">Temiz</span>';
  const zl=zones.map(z=>'<span class="bdg red" style="margin:2px">'+esc(z)+' · '+esc(d.cosm[z].join(', '))+'</span>').join('');
  return '<div class="device-card"><div style="display:flex;gap:10px;align-items:flex-start"><div style="width:56px;flex:none">'+phoneSvg(d.cosm)+'</div><div style="flex:1;min-width:0"><div style="font-weight:700;font-size:14.5px">'+esc(d.brand)+' '+esc(d.model)+' <span class="mono" style="color:var(--ink3);font-size:12px">'+esc(d.size||'')+' · '+esc(d.color)+'</span></div>'+
   '<div class="kv" style="margin-top:7px"><div><div class="k">IMEI</div><div class="v mono" style="font-weight:400">'+esc(d.imei)+'</div></div><div><div class="k">Seri No</div><div class="v mono" style="font-weight:400">'+esc(d.seri||'—')+'</div></div></div>'+
   '<div style="margin-top:7px;display:flex;flex-wrap:wrap;gap:2px">'+(zl||'<span class="bdg grn">Kozmetik: Temiz</span>')+'</div>'+
   (d.notes?'<div style="margin-top:7px;font-size:12.5px;color:var(--ink3)">'+esc(d.notes)+'</div>':'')+
  '</div></div></div>'}).join('');
 const svRows=sv.map(s=>'<tr data-act="svcRow" data-sid="'+s.id+'"><td class="mono2" style="color:var(--accent-dark);font-weight:600">'+s.no+'</td><td>'+esc(BNAME(s.br))+'</td><td style="max-width:170px">'+esc(s.fault||'—')+'</td><td>'+bdg(STATUSES[s.status],STATUS_COLOR[s.status])+'</td><td class="num">'+tl(svcTotal(s))+'</td></tr>').join('');
 return '<div class="modal-head"><div><h3>'+esc(c.name)+'</h3><div class="sub">'+esc(c.phone)+(c.phone2?' · '+esc(c.phone2):'')+(c.mail?' · '+esc(c.mail):'')+'</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
 '<div class="modal-body">'+
  '<div class="kv" style="margin-bottom:16px"><div><div class="k">Adres</div><div class="v">'+esc(c.addr||'—')+'</div></div><div><div class="k">Notlar</div><div class="v">'+esc(c.notes||'—')+'</div></div></div>'+
  '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px"><div class="sec-t" style="margin:0;flex:1">Cihaz Kartları ('+ds.length+')</div>'+(roleKey()!=='view'?'<button class="btn sm ghost" data-act="addDev" data-cid="'+c.id+'">'+IC.plus+' Cihaz Ekle</button>':'')+'</div>'+
  (devCards||'<div class="empty">'+IC.phone+'Cihaz eklenmemiş</div>')+
  '<div class="sec-t">Geçmiş Servisler ('+sv.length+')</div>'+
  (sv.length?'<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Servis</th><th>Şube</th><th>Arıza</th><th>Durum</th><th class="num">Tutar</th></tr></thead><tbody>'+svRows+'</tbody></table></div>':'<div class="empty">'+IC.wrench+'Servis geçmişi yok</div>')+
 '</div>','wide';
}
function phoneSvg(cosm,zones){
 const damp=(z)=>cosm&&cosm[z]&&cosm[z].length;
 const zoneFill=z=>damp(z)?'rgba(201,58,58,.28)':'rgba(0,0,0,0)';
 return '<svg class="phone-svg" viewBox="0 0 120 150" fill="none">'+
 '<rect x="26" y="6" width="68" height="138" rx="14" fill="transparent" stroke="#8B909A" stroke-width="2"/>'+
 '<rect class="zone" x="33" y="13" width="54" height="105" rx="7" fill="'+zoneFill('ekran')+'" stroke="'+(damp('ekran')?'#C93A3A':'#B9BDC7')+'" data-zone="ekran"/>'+
 '<line x1="33" y1="13" x2="87" y2="13" stroke="#333" stroke-width="2"/>'+
 '<rect class="zone" x="33" y="122" width="54" height="16" rx="4" fill="'+zoneFill('arka')+'" stroke="'+(damp('arka')?'#C93A3A':'#B9BDC7')+'" data-zone="arka"/>'+
 '<rect class="zone" x="80" y="20" width="9" height="4" rx="2" fill="'+zoneFill('kamera')+'" stroke="'+(damp('kamera')?'#C93A3A':'#B9BDC7')+'" data-zone="kamera"/>'+
 '<rect class="zone" x="24" y="40" width="3" height="30" rx="1.5" fill="'+zoneFill('tuslar')+'" stroke="'+(damp('tuslar')?'#C93A3A':'#8B909A')+'" data-zone="tuslar"/>'+
 '<rect class="zone" x="93" y="36" width="3" height="44" rx="1.5" fill="'+zoneFill('cerceve')+'" stroke="'+(damp('cerceve')?'#C93A3A':'#8B909A')+'" data-zone="cerceve"/>'+
 '</svg>';
}
/* ---------- CASH ---------- */
function rCash(){
 const f=state.cf;const br=f.br;const q=(f.q||'').trim().toLowerCase();
 const list=CASH.filter(c=>(br==='all'||c.br===br)&&(!q||[c.desc,c.kind,c.pay,BNAME(c.br),uName(c.user)].join(' ').toLowerCase().includes(q)));
 const gelir=list.filter(c=>c.type==='in').reduce((a,c)=>a+c.amt,0);
 const gider=list.filter(c=>c.type==='out').reduce((a,c)=>a+c.amt,0);
 const rows=list.map(c=>'<tr class="no-hover"><td class="mono2">'+fmtDT(c.d)+'</td><td>'+esc(uName(c.user))+'</td><td>'+esc(BNAME(c.br))+'</td><td>'+bdg(c.type==='in'?'Gelir':'Gider',c.type==='in'?'grn':'red')+'</td><td>'+esc(c.kind)+'</td><td style="max-width:230px;color:var(--ink2)">'+esc(c.desc)+'</td><td>'+bdg(c.pay,c.pay==='Nakit'?'amb':c.pay==='Kredi Kartı'?'blu':c.pay==='Banka Havalesi'?'mut':'mut')+'</td><td class="num mono2" style="font-weight:700;color:'+(c.type==='in'?'var(--green)':'var(--red)')+'">'+(c.type==='in'?'+':'−')+tl(c.amt)+'</td></tr>').join('');
 const tabs=['all',...BRANCHES.map(b=>b.id)].map(b=>'<button class="tab '+(br===b?'on':'')+'" data-act="cashTab" data-b="'+b+'">'+(b==='all'?'Tümü':esc(BNAME(b)))+'</button>').join('');
 return '<div class="notes grn">'+IC.shield+'<div><b>Kasa kayıtları sabittir.</b> Personel hiçbir kasa hareketini silemez veya düzenleyemez; tüm hareketler loglanır, silme/yönetim yalnızca yönetici yetkisindedir.</div></div>'+
 '<div class="stat-grid" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">'+
  '<div class="stat bump2" style="--d:.02s"><div class="ic">'+IC.money+'</div><div class="lbl">Toplam Gelir</div><div class="num" style="color:var(--green)">'+tl(gelir)+'</div></div>'+
  '<div class="stat bump3" style="--d:.06s"><div class="ic">'+IC.money+'</div><div class="lbl">Toplam Gider</div><div class="num" style="color:var(--red)">'+tl(gider)+'</div></div>'+
  '<div class="stat" style="--d:.1s"><div class="ic">'+IC.wallet+'</div><div class="lbl">Net Kasa</div><div class="num">'+tl(gelir-gider)+'</div></div>'+
  '<div class="stat bump" style="--d:.14s"><div class="ic">'+IC.clock+'</div><div class="lbl">Bugünkü Gelir</div><div class="num" style="color:var(--green)">'+tl(CASH.filter(c=>(br==='all'||c.br===br)&&fmtD(c.d)===fmtD(new Date())&&c.type==='in').reduce((a,c)=>a+c.amt,0))+'</div></div>'+
 '</div>'+
 '<div class="tabs">'+tabs+'</div>'+
 '<div class="card"><div class="card-h"><h4>Kasa Hareketleri</h4><div class="act"><div class="searchbox" style="max-width:240px;margin:0">'+IC.search+'<input id="cSearch2" placeholder="Açıklama ara…" style="height:32px"></div>'+(roleKey()==='admin'||roleKey()==='cash'?'<button class="btn sm" data-act="newCash">'+IC.plus+' Yeni Hareket</button>':'')+'</div></div>'+
 '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Tarih / Saat</th><th>Kullanıcı</th><th>Şube</th><th>Tip</th><th>İşlem Tipi</th><th>Açıklama</th><th>Ödeme Yöntemi</th><th class="num">Tutar</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}
function newCashModal(){
 return '<div class="modal-head"><div><h3>Yeni Kasa Hareketi</h3><div class="sub">tüm hareketler loglanır ve sabitlenir</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
 '<div class="modal-body">'+
  '<div class="f-group"><span class="lbl">İşlem tipi</span><div style="display:flex;gap:8px" id="cbTypeRow"><button class="chip on" data-act="cbType" data-t="in">Gelir</button><button class="chip" data-act="cbType" data-t="out">Gider</button></div></div>'+
  '<div class="f-row"><div class="f-group"><span class="lbl">Kategori</span><select class="fld" id="cbKind"></select></div>'+
  '<div class="f-group"><span class="lbl">Şube</span><select class="fld" id="cbBr">'+BRANCHES.map(b=>opt(b.id,b.name,me().br)).join('')+'</select></div></div>'+
  '<div class="f-row"><div class="f-group"><span class="lbl">Tutar (₺)</span><input class="fld" id="cbAmt" type="number" placeholder="0"></div>'+
  '<div class="f-group"><span class="lbl">Ödeme yöntemi</span><select class="fld" id="cbPay">'+PAY.map(p=>opt(p,p)).join('')+'</select></div></div>'+
  '<div class="f-group"><span class="lbl">Açıklama</span><textarea class="fld" id="cbDesc"></textarea></div>'+
 '</div><div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn" data-act="saveCash">'+IC.check+' Kaydet</button></div>';
}
/* ---------- BRANCHES ---------- */
function rBranches(){
 const cards=BRANCHES.map(b=>{
  const tot=PRODUCTS.reduce((a,p)=>a+(p.stock[b.id]??0),0);
  const low=PRODUCTS.filter(p=>brLow(p,b.id)).length;
  const gelir=CASH.filter(c=>c.br===b.id&&c.type==='in').reduce((a,c)=>a+c.amt,0);
  const gider=CASH.filter(c=>c.br===b.id&&c.type==='out').reduce((a,c)=>a+c.amt,0);
  const open=SERVICES.filter(s=>s.br===b.id&&s.status<9).length;
  const staff=USERS.filter(u=>u.br===b.id).length;
  return '<div class="card"><div class="card-h"><h4>'+esc(b.name)+'</h4><span class="bdg mut">'+esc(b.city)+'</span></div><div class="card-pad" style="display:grid;gap:10px">'+
   '<div class="kv"><div><div class="k">Kasa Net</div><div class="v '+(gelir-gider<0?'":color:var(--red)':'')+'">'+tl(gelir-gider)+'</div></div>'+
   '<div><div class="k">Stok Adedi</div><div class="v">'+fmt(tot)+' ürün</div></div>'+
   '<div><div class="k">Açık Servis</div><div class="v">'+open+'</div></div>'+
   '<div><div class="k">Personel</div><div class="v">'+staff+' kişi</div></div>'+
   '<div><div class="k">Yönetici</div><div class="v">'+esc(b.mgr)+'</div></div></div>'+
   '<div class="warn-strip" style="align-items:center">'+IC.alert+' '+low+' ürün kritik stokta</div>'+
  '</div></div>'}).join('');
 const matRows=PRODUCTS.map(p=>'<tr class="no-hover"><td>'+esc(p.name)+' <small class="mono" style="color:var(--ink3)">'+esc(p.sku)+'</small></td>'+BRANCHES.map(b=>{const z=(p.stock[b.id]??0)===0;return '<td class="num mono2 '+(z?'zero':brLow(p,b.id)?'low':'')+'">'+(p.stock[b.id]??0)+'</td>'}).join('')+'<td class="num">'+fmt(stockTotal(p))+'</td></tr>').join('');
 return '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-bottom:22px">'+cards+'</div>'+
 '<div class="card"><div class="card-h"><h4>Şube Bazlı Stok Matrisi</h4><span class="bdg mut">tüm şubeler tüm stokları görür</span>'+(isAdmin()?'<div class="act"><button class="btn sm" data-act="addBranch">'+IC.plus+' Yeni Şube</button></div>':'')+'</div>'+
 '<div class="tbl-wrap"><table class="tbl" style="min-width:640px"><thead><tr><th>Ürün</th>'+BRANCHES.map(b=>'<th class="num">'+esc(b.name)+'</th>').join('')+'<th class="num">Toplam</th></tr></thead><tbody>'+matRows+'</tbody></table></div></div>';
}
/* ---------- REPORTS ---------- */
function rReports(){
 const totStok=PRODUCTS.reduce((a,p)=>a+stockTotal(p),0);
 const stokDeger=PRODUCTS.reduce((a,p)=>a+stockTotal(p)*p.buy,0);
 const kritik=PRODUCTS.filter(isCritical).length;
 const acik=SERVICES.filter(s=>s.status<9).length;
 const tamam=SERVICES.filter(s=>s.status===9).length;
 const bugIn=CASH.filter(c=>fmtD(c.d)===fmtD(new Date())&&c.type==='in').reduce((a,c)=>a+c.amt,0);
 const bugOut=CASH.filter(c=>fmtD(c.d)===fmtD(new Date())&&c.type==='out').reduce((a,c)=>a+c.amt,0);
 const partsCount={};SERVICES.forEach(s=>s.parts.forEach(pt=>partsCount[pt.pid]=(partsCount[pt.pid]||0)+pt.qty));
 const topP=Object.entries(partsCount).sort((a,b)=>b[1]-a[1]).slice(0,8);
 const mxP=Math.max(...topP.map(x=>x[1]),1);
 const partBars=topP.map(([pid,n])=>{const p=prod(pid);return '<div class="pl"><span class="nm">'+esc(p.name)+'</span><div style="flex:1;max-width:160px"><div class="total-bar"><i style="width:'+Math.round(n/mxP*100)+'%"></i></div></div><span class="cnt">×'+n+'</span></div>'}).join('');
 const techs=USERS.filter(u=>u.role==='tech').map(u=>{const sv=SERVICES.filter(s=>s.tech===u.id);const rev=sv.filter(s=>s.paid>0).reduce((a,s)=>a+s.paid,0);return '<tr class="no-hover"><td>'+avEl(u,26)+'<b style="margin-left:8px">'+esc(u.name)+'</b></td><td class="cnt">'+sv.length+'</td><td class="cnt">'+sv.filter(s=>s.status===9).length+'</td><td class="num">'+tl(rev)+'</td><td class="cnt">'+bdg(sv.length?Math.round(sv.filter(s=>s.status===9).length/sv.length*100)+'%':'—','grn')+'</td></tr>'}).join('');
 const payD=PAY.map(p=>{const tot=CASH.filter(c=>c.type==='in'&&c.pay===p).reduce((a,c)=>a+c.amt,0);const cnt=CASH.filter(c=>c.type==='in'&&c.pay===p).length;return{pay:p,tot,cnt}}).sort((a,b)=>b.tot-a.tot);
 const mxPay=Math.max(...payD.map(p=>p.tot),1);
 const payBars=payD.map(p=>p.tot?'<div class="pl"><span class="nm">'+esc(p.pay)+'</span><div style="flex:1;max-width:160px"><div class="total-bar"><i style="width:'+Math.round(p.tot/mxPay*100)+'%;background:var(--green)"></i></div></div><span class="cnt">'+tl(p.tot)+' · '+p.cnt+' işlem</span></div>':'').join('');
 const brK=CASH.filter(c=>c.type==='in').reduce((a,c)=>a+c.amt,0)-CASH.filter(c=>c.type==='out').reduce((a,c)=>a+c.amt,0);
 return '<div class="stat-grid">'+
  '<div class="stat" style="--d:.02s"><div class="ic">'+IC.box+'</div><div class="lbl">Toplam Stok Adedi</div><div class="num">'+fmt(totStok)+'</div></div>'+
  '<div class="stat bump4" style="--d:.06s"><div class="ic">'+IC.money+'</div><div class="lbl">Stok Değeri (maliyet)</div><div class="num">'+tl(stokDeger)+'</div></div>'+
  '<div class="stat bump3" style="--d:.1s"><div class="ic">'+IC.alert+'</div><div class="lbl">Kritik Stok</div><div class="num">'+kritik+'</div></div>'+
  '<div class="stat bump" style="--d:.14s"><div class="ic">'+IC.wrench+'</div><div class="lbl">Açık Servis</div><div class="num">'+acik+'</div></div>'+
  '<div class="stat bump2" style="--d:.18s"><div class="ic">'+IC.check+'</div><div class="lbl">Tamamlanan Servis</div><div class="num">'+tamam+'</div></div>'+
  '<div class="stat" style="--d:.22s"><div class="ic">'+IC.wallet+'</div><div class="lbl">Toplam Net Kasa</div><div class="num">'+tl(brK)+'</div></div>'+
 '</div>'+
 '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">'+
  '<div class="card"><div class="card-h"><h4>En Çok Kullanılan Parçalar</h4></div><div class="parts-list" style="padding:8px 20px 14px">'+partBars+'</div></div>'+
  '<div class="card"><div class="card-h"><h4>Ödeme Yöntemi Dağılımı (gelir)</h4></div><div class="parts-list" style="padding:8px 20px 14px">'+payBars+'</div></div>'+
 '</div>'+
 '<div class="card" style="margin-bottom:20px"><div class="card-h"><h4>Teknisyen Performansı</h4></div><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Teknisyen</th><th class="cnt">Toplam Servis</th><th class="cnt">Teslim Edilen</th><th class="num">Hasılat</th><th class="cnt">Tamamlanma</th></tr></thead><tbody>'+techs+'</tbody></table></div></div>'+
 '<div class="card"><div class="card-h"><h4>Günlük Kasa Özeti</h4><span class="bdg mut">bugün</span></div><div class="card-pad"><div class="kv"><div><div class="k">Gelir</div><div class="v" style="color:var(--green)">'+tl(bugIn)+'</div></div><div><div class="k">Gider</div><div class="v" style="color:var(--red)">'+tl(bugOut)+'</div></div><div><div class="k">Net</div><div class="v">'+tl(bugIn-bugOut)+'</div></div></div></div></div>';
}
/* ---------- USERS ---------- */
function rUsers(){
 const PM=['Dashboard görüntüleme','Stok görüntüleme','Fiyat düzenleme','Stok giriş / çıkış','Stok transferi','Servis açma','Servis görüntüleme','Servis güncelleme','Kasa görüntüleme','Kasa işlemleri','Kullanıcı logları','Raporlar','Şube yönetimi'];
 const RP={
  admin:[1,1,1,1,1,1,1,1,1,1,1,1,1],
  manager:[1,1,0,1,1,1,1,1,1,1,0,1,0],
  stock:[1,1,0,1,1,0,1,0,0,0,0,0,0],
  tech:[1,1,0,0,0,0,1,1,0,0,0,0,0],
  cash:[1,1,0,0,0,0,1,0,1,1,0,0,0],
  view:[1,1,0,0,0,0,1,0,0,0,0,0,0]};
 const rows=USERS.map(u=>{
  const p=RP[u.role];const sv=SERVICES.filter(s=>s.tech===u.id && u.role==='tech').length;
  return '<tr class="no-hover"><td><div style="display:flex;align-items:center;gap:10px">'+avEl(u,32)+'<div><div style="font-weight:600">'+esc(u.name)+'</div><div class="mono" style="font-size:11px;color:var(--ink3)">'+esc(BNAME(u.br))+'</div></div></div></td>'+
  '<td>'+bdg(ROLES[u.role].n,ROLES[u.role].badge)+'</td>'+
  '<td><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(74px,1fr));gap:3px;font-size:10.5px;font-family:var(--mono)">'+p.map(v=>v?'<span style="color:var(--green)">'+IC.check.replace('width="2.2"','width="2.4"').replace('height="2.2"','height="2.4"')+'</span>':'<span style="color:var(--line2)">'+IC.x+'</span>').join('')+'</div></td>'+
  '<td class="cnt">'+(u.role==='tech'?sv:'—')+'</td></tr>'}).join('');
 return '<div class="card" style="margin-bottom:16px"><div class="card-pad"><div class="kv"><div><div class="k">Yetki anlayışı</div><div class="v" style="font-weight:400;font-size:13.5px;color:var(--ink2)">Örnek: Yönetici her şeyi görür; Şube Müdürü yalnızca kendi şubesini yönetir; Teknisyen kendine atanmış servisleri günceller; bir kullanıcı stok görebilir ama fiyat değiştiremez.</div></div></div></div></div>'+
 '<div class="card"><div class="card-h"><h4>Kullanıcılar & Rol Yetkileri</h4><span class="bdg mut">'+USERS.length+' kullanıcı · demo matrisi</span></div>'+
 '<div class="tbl-wrap"><table class="tbl" style="min-width:900px"><thead><tr><th>Kullanıcı</th><th>Rol</th><th style="font-size:10.5px">'+PM.map(m=>'<span title="'+esc(m)+'" style="display:inline-block;width:60px;margin:2px;text-align:center;white-space:normal;line-height:1.2;height:20px;overflow:hidden">'+esc(m)+'</span>').join('')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}
/* ---------- LOGS ---------- */
function rLogs(){
 const f=state.lf;
 let list=LOGS;
 if(f.kind!=='all')list=list.filter(l=>l.kind===f.kind);
 const kinds=['all','transfer','part','in','out','sell','cash','edit','svc'];
 const feed=list.map(l=>'<div class="feed-item"><span class="dot" style="background:'+({transfer:'#2E5FA3',part:'#E4572E',in:'#177A52',out:'#C93A3A',sell:'#B07700',cash:'#177A52',edit:'#7C4DA6',svc:'#2E5FA3'}[l.kind]||'#8B909A')+'"></span><div style="flex:1"><div class="who"><b>'+esc(l.userName||uName(l.user))+'</b> <span class="when">'+fmtD(l.d)+' · '+l.time+'</span></div><div class="what">'+esc(l.txt)+'</div></div><span class="bdg mut">'+l.kind+'</span></div>').join('');
 return '<div class="notes">'+IC.shield+'<div><b>Log kayıtları silinemez ve düzenlenemez.</b> Bu sayfayı yalnızca yönetici görür. İsterseniz şube müdürlerine kendi şubelerinin log görünümünü açabilirsiniz:</div>'+
 '<button class="btn sm '+(state.managerLog?'green':'ghost')+'" data-act="logToggle" style="margin-left:auto">'+(state.managerLog?'Müdür görünümü AÇIK':'Müdür görünümü KAPALI')+'</button></div>'+
 '<div class="filter-bar"><select class="fld" id="lKind" style="width:160px">'+kinds.map(k=>opt(k,k==='all'?'Tüm işlemler':k,state.lf.kind)).join('')+'</select><span class="warn-strip" style="margin-left:auto">'+IC.clock+' '+list.length+' kayıt</span></div>'+
 '<div class="card"><div class="feed">'+feed+'</div></div>';
}
/* ---------- PRINT (A5 + label) ---------- */
function printA5(s){
 const c=cust(s.cust);const dv=s.dev&&dev(s.dev);const tot=svcTotal(s);
 const partsRows=s.parts.length?s.parts.map(pt=>{const p=prod(pt.pid);return '<tr><td>'+esc(p.name)+(p.quality?' ('+esc(p.quality)+')':'')+'</td><td style="text-align:center">'+pt.qty+'</td><td style="text-align:right">'+tl(p.sell*pt.qty)+'</td></tr>'}).join(''):'<tr><td style="color:#888">—</td><td></td><td></td></tr>';
 const dam=Object.entries((dv&&dv.cosm)||{}).map(([z,t])=>esc(z)+': '+esc(t.join(', '))).join(' · ');
 document.getElementById('printArea').innerHTML='<div class="a5sheet">'+
  '<div class="a5-head"><div><div class="co">Servis<span>OS</span> Teknik</div><div style="font-size:8.5pt;color:#555">Telekomünikasyon San. ve Tic. Ltd. Şti.<br>Atatürk Cad. No:42 Kadıköy / İstanbul · 0216 000 00 00<br>info@servisos.com</div></div>'+
  '<div><div class="srvid">'+esc(s.no)+'</div><div class="inf">İşlem Tarihi: '+fmtDT(s.date)+'<br>Şube: '+esc(BNAME(s.br))+'<br>Teknisyen: '+esc(uName(s.tech))+'</div></div></div>'+
  '<div class="a5-title">Müşteri & Cihaz</div><div class="a5-grid"><div class="f"><label>Müşteri</label><div>'+esc(c.name)+'</div></div><div class="f"><label>Telefon</label><div>'+esc(c.phone)+'</div></div>'+(dv?'<div class="f"><label>Cihaz</label><div>'+esc(dv.brand)+' '+esc(dv.model)+' '+esc(dv.size||'')+' '+esc(dv.color)+'</div></div><div class="f"><label>IMEI</label><div class="a5-line">'+esc(dv.imei)+'</div></div>':'')+'<div class="f full"><label>Kozmetik durum</label><div>'+esc(dam||'Temiz')+'</div></div></div>'+
  '<div class="a5-title">Arıza / Yapılan İşlem</div><div class="a5-box">'+esc(s.fault||'—')+(s.notes?'<br><b>Not:</b> '+esc(s.notes):'')+'</div>'+
  '<div class="a5-title">Kullanılan Parçalar</div><table class="a5-table"><thead><tr><th>Ürün</th><th style="text-align:center">Adet</th><th style="text-align:right">Tutar</th></tr></thead><tbody>'+partsRows+'</tbody></table>'+
  '<div class="a5-total"><span>İşçilik</span><span class="v">'+tl(s.labor)+'</span><span>İndirim</span><span class="v">−'+tl(s.disc)+'</span><span class="v big">'+tl(tot)+'</span></div>'+
  '<div class="a5-total" style="margin-top:2px"><span>Ödeme: '+esc(s.pay)+' · '+(s.paid>=tot?'TAHSİL EDİLDİ ('+tl(s.paid)+')':'KISMİ / BEKLEMEDE')+'</span></div>'+
  '<div class="a5-warr"><b>Garanti:</b> Yapılan değişim 30 gün yedek parça + işçilik garantisi kapsamındadır. Sıvı teması, darbe ve kurcalama garanti dışıdır. Müşteri cihazı teslim alırken üzerindeki verilerin yedeklenmediğini kabul etmiştir.</div>'+
  '<div class="a5-sign"><div>Müşteri İmzası</div><div>Teknisyen İmzası</div></div></div>';
 setTimeout(()=>window.print(),150);
}
function printLabel(p){
 document.getElementById('printArea').innerHTML='<div style="display:flex;gap:4mm;padding:2mm">'+[0,1].map(()=>'<div style="width:58mm;border:1.2px dashed #999;padding:3mm;border-radius:2mm;font-family:Arial,Helvetica,sans-serif">'+
  '<div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1.5px solid #000;padding-bottom:1.5mm;margin-bottom:2mm"><b style="font-size:13pt">Servis<span style="color:#E4572E">OS</span></b><span style="font-size:6.5pt;color:#555">'+esc(BNAME(state.pf.br||'M'))+'</span></div>'+
  '<div style="font-size:8.5pt;font-weight:700;margin-bottom:1mm">'+esc(p.name)+(p.quality?' · '+esc(p.quality):'')+'</div>'+
  '<div style="font-size:7.5pt;color:#555;margin-bottom:2mm">SKU: <span style="font-family:monospace">'+esc(p.sku)+'</span></div>'+
  '<div style="background:repeating-linear-gradient(90deg,#000 0 1px,transparent 1px 3px,#000 3px 4px,transparent 4px 6px,#000 6px 8px,transparent 8px 9px);height:11mm;margin-bottom:1mm"></div>'+
  '<div style="font-family:monospace;font-size:8pt;text-align:center">'+esc(p.barcode)+'</div>'+
  '<div style="font-size:9pt;font-weight:700;margin-top:2mm;text-align:right">'+tl(p.sell)+'</div></div>').join('')+'</div>';
 setTimeout(()=>window.print(),150);
}
/* ---------- SEARCH ---------- */
function renderSearch(q){
 const box=document.getElementById('searchResults');const inp=document.getElementById('globalSearch');
 if(!q){box.classList.add('hide');return}
 const hay=(s)=>s.toLowerCase().includes(q.toLowerCase());
 let res=[];
 PRODUCTS.filter(p=>hay(p.name)||hay(p.sku)||hay(p.barcode)||hay(p.brand)||hay(p.model)).slice(0,4).forEach(p=>res.push({ty:'product',ref:p.id,t:p.name,s:'SKU '+p.sku+' · '+esc(p.barcode),k:'ürün'}));
 CUSTOMERS.filter(c=>hay(c.name)||hay(c.phone)||hay(c.phone2)).slice(0,3).forEach(c=>res.push({ty:'customer',ref:c.id,t:c.name,s:c.phone+' · '+c.mail,k:'müşteri'}));
 SERVICES.filter(s=>hay(s.no)||hay(dev(s.dev).imei)||hay(cust(s.cust).phone)).slice(0,3).forEach(s=>res.push({ty:'service',ref:s.id,t:s.no,s:esc(cust(s.cust).name)+' · '+esc(dev(s.dev).imei),k:'servis'}));
 DEVICES.filter(d=>hay(d.imei)).slice(0,2).forEach(d=>res.push({ty:'customer',ref:d.cust,t:d.brand+' '+d.model,s:'IMEI '+d.imei,k:'imei'}));
 box.innerHTML=res.length?res.map(r=>'<div class="sr-item" data-act="sr" data-ty="'+r.ty+'" data-ref="'+r.ref+'"><span class="bdg acc" style="font-size:10.5px">'+r.k+'</span><div style="min-width:0"><div class="t">'+r.t+'</div><div class="s">'+r.s+'</div></div></div>').join(''):'<div class="empty" style="padding:16px">Eşleşme yok</div>';
 box.classList.remove('hide');
}
/* ---------- EVENTS ---------- */
let editTarget=null,ckType='in',tempCosm={},tempZone=null;
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-act]');
 if(!t){
  const res=document.getElementById('searchResults');
  if(res&&!e.target.closest('.searchbox'))res.classList.add('hide');
  return;
 }
 const a=t.dataset.act;
 switch(a){
  case 'nav':e.preventDefault();navigate(t.dataset.v);break;
  case 'login':{
   if(window.ROLE_LINKS){const r=(USERS.find(u=>u.id===t.dataset.u)||{}).role;if(window.ROLE_LINKS[r]){location.href=window.ROLE_LINKS[r];break;}}
   login(t.dataset.u);break;
  }
  case 'close':closeModal();break;
  case 'burger':document.getElementById('sidebar').classList.toggle('open');break;
  case 'sbToggle':document.body.classList.toggle('sb-collapsed');try{localStorage.setItem('sbCollapsed',document.body.classList.contains('sb-collapsed')?'1':'0')}catch(e){}break;
  case 'ttree':state.pf.brand=t.dataset.b;state.pf.model=t.dataset.m;state.pf.cat=t.dataset.c;state.pf.qual='all';document.getElementById('sidebar').classList.remove('open');renderView();break;
  case 'qual':state.pf.qual=t.dataset.q;renderView();break;
  case 'clearpf':state.pf.q='';state.pf.brand='';state.pf.model='';state.pf.cat='';state.pf.sub='';state.pf.sup='';state.pf.stok='all';state.pf.qual='all';state.pf.treeQ='';renderView();break;
  case 'prow':modal(prodModalHtml(prod(t.dataset.pid)),'wide');break;
  case 'sr':{
   closeModal();
   if(t.dataset.ty==='product')modal(prodModalHtml(prod(t.dataset.ref)),'wide');
   if(t.dataset.ty==='service')modal(svcModal(SERVICES.find(s=>s.id===t.dataset.ref)),'xl');
   if(t.dataset.ty==='customer')modal(custModal(cust(t.dataset.ref)),'wide');
   document.getElementById('searchResults').classList.add('hide');
   document.getElementById('globalSearch').value='';break}
  case 'svcRow':modal(svcModal(SERVICES.find(s=>s.id===t.dataset.sid)),'xl');break;
  case 'custRow':modal(custModal(cust(t.dataset.cid)),'wide');break;
  case 'newprod':
   modal('<div class="modal-head"><div><h3>'+IC.plus+' Yeni Ürün</h3><div class="sub">branş / barkod / fiyat bilgileri</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div><div class="modal-body"><div class="f-row">'+
    '<div class="f-group"><span class="lbl">Ürün adı</span><input class="fld" id="npName" placeholder="iPhone 13 OLED Ekran"></div>'+
    '<div class="f-group"><span class="lbl">Ürün türü</span><select class="fld" id="npSub"><option>Yedek Parça</option><option>Aksesuar</option></select></div>'+
    '<div class="f-group"><span class="lbl">Marka</span><input class="fld" id="npBrand" placeholder="Apple"></div>'+
    '<div class="f-group"><span class="lbl">Model</span><input class="fld" id="npModel" placeholder="iPhone 13"></div>'+
    '<div class="f-group"><span class="lbl">Kategori</span><select class="fld" id="npCat"></select></div>'+
    '<div class="f-group"><span class="lbl">Kalite</span><select class="fld" id="npQual"><option>Orijinal</option><option>Yan Sanayi</option></select></div>'+
    '<div class="f-group"><span class="lbl">SKU</span><input class="fld" id="npSku" placeholder="EKR-IP13-ORG"></div>'+
    '<div class="f-group"><span class="lbl">Barkod (boş = otomatik)</span><input class="fld" id="npBar"></div>'+
    '<div class="f-group"><span class="lbl">Alış / Satış (₺)</span><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><input class="fld" id="npBuy" type="number" placeholder="Alış"><input class="fld" id="npSell" type="number" placeholder="Satış"></div></div>'+
    '<div class="f-group"><span class="lbl">Tedarikçi</span><select class="fld" id="npSup">'+SUPPLIERS.map((s,i)=>opt(i,s)).join('')+'</select></div>'+
    '<div class="f-group"><span class="lbl">Min. stok / şube</span><input class="fld" id="npMin" type="number" value="3"></div>'+
    '</div></div><div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn" data-act="saveprod">'+IC.check+' Kaydet</button></div>','wide');
   const cats=document.getElementById('npCat');
   const fill=()=>{const sub=document.getElementById('npSub').value;cats.innerHTML=[''];
    ['Yedek Parça','Aksesuar'].forEach(s=>{const arr=s==='Yedek Parça'?CAT_YP:CAT_ACC;if(s===sub)arr.forEach((c,i)=>cats.insertAdjacentHTML('beforeend','<option'+(i===0?' selected':'')+'>'+c+'</option>'))})};
   document.getElementById('npSub').addEventListener('change',fill);fill();
   break;
  case 'saveprod':{
   const name=document.getElementById('npName').value.trim();const brand=document.getElementById('npBrand').value.trim();const model=document.getElementById('npModel').value.trim();
   const sku=document.getElementById('npSku').value.trim();const buy=Number(document.getElementById('npBuy').value)||0;const sell=Number(document.getElementById('npSell').value)||0;
   if(!name||!brand){toast('<b>Ürün adı ve marka zorunlu.</b>','warn');break}
   const p={id:uid('prod'),sku:sku||('SKU-'+SEQ.prod),name,brand,model,cat:document.getElementById('npCat').value,sub:document.getElementById('npSub').value,quality:document.getElementById('npQual').value,buy,sell,min:{M:Number(document.getElementById('npMin').value)||3},stock:{},sup:Number(document.getElementById('npSup').value),barcode:document.getElementById('npBar').value.trim()||('8690'+String(10000000+SEQ.prod*37).slice(0,8))};
   ensureStock(p);PRODUCTS.push(p);logIt('Ürün eklendi: '+esc(p.name)+' ('+esc(p.sku)+')','in');
   toast('<b>'+esc(p.name)+'</b> eklendi — barkod <span class="mono">'+esc(p.barcode)+'</span>','ok');closeModal();renderView();break}
  case 'stockop':editTarget={pid:t.dataset.pid,type:t.dataset.t};
   {
    const p=prod(t.dataset.pid);const isTrf=t.dataset.t==='trf';
    modal('<div class="modal-head"><div><h3>'+IC.box+' '+(isTrf?'Stok Transferi':t.dataset.t==='in'?'Stok Girişi':'Stok Çıkışı')+'</h3><div class="sub">'+esc(p.name)+' · '+esc(p.sku)+'</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
     '<div class="modal-body">'+
      (isTrf?'<div class="f-row"><div class="f-group"><span class="lbl">Gönderen şube</span><select class="fld" id="soFrom">'+BRANCHES.map(b=>opt(b.id,b.name)).join('')+'</select></div><div class="f-group"><span class="lbl">Alan şube</span><select class="fld" id="soTo">'+BRANCHES.map(b=>opt(b.id,b.name)).join('')+'</select></div></div><div class="f-row"><div class="f-group"><span class="lbl">Miktar</span><input class="fld" id="soQty" type="number" value="1" min="1"></div><div class="f-group"><span class="lbl">Açıklama</span><input class="fld" id="soNote" placeholder="transfer nedeni…"></div></div>':
      '<div class="f-group"><span class="lbl">Şube</span><select class="fld" id="soBr">'+BRANCHES.map(b=>{const s=p.stock[b.id]??0;return opt(b.id,b.name+' (stok: '+s+')',me().br===b.id?b.id:'')}).join('')+'</select></div><div class="f-row"><div class="f-group"><span class="lbl">Miktar</span><input class="fld" id="soQty" type="number" value="1" min="1"></div><div class="f-group"><span class="lbl">Açıklama</span><input class="fld" id="soNote" placeholder="'+(t.dataset.t==='in'?'tedarikçi, fatura no…':'kullanım nedeni…')+'"></div></div>')+
     '</div><div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn '+(t.dataset.t==='out'?'danger':'green')+'" data-act="doStock">Onayla</button></div>');
   }
   break;
  case 'doStock':{
   const p=prod(editTarget.pid);const qty=Number(document.getElementById('soQty').value);
   const note=document.getElementById('soNote').value.trim();
   if(!qty||qty<1){toast('<b>Geçerli miktar girin.</b>','warn');break}
   if(editTarget.type==='trf'){
    const from=document.getElementById('soFrom').value,to=document.getElementById('soTo').value;
    if(from===to){toast('<b>Gönderen ve alan şube aynı olamaz.</b>','warn');break}
    if((p.stock[from]??0)<qty){toast('<b>Yetersiz stok!</b> '+BNAME(from)+' stoğu: '+(p.stock[from]??0),'warn');break}
    applyTransfer(from,to,p.id,qty,note);closeModal();renderView();
   }else{
    const br=document.getElementById('soBr').value;
    if(editTarget.type==='out'&&(p.stock[br]??0)<qty){toast('<b>Yetersiz stok!</b> '+BNAME(br)+' stoğu: '+(p.stock[br]??0),'warn');break}
    applyStock(p,br,qty,editTarget.type,note);closeModal();renderView();
   }
   break}
  case 'doTransferView':doTransferCore(document.getElementById('trfFrom').value,document.getElementById('trfTo').value,document.getElementById('trfProd').value,Number(document.getElementById('trfQty').value),document.getElementById('trfNote').value.trim());break;
  case 'newbarcode':{
   const p=prod(t.dataset.pid);p.barcode='8690'+String(90000000+SEQ.prod*7919).slice(0,8);
   logIt('Barkod üretildi: '+esc(p.name)+' → '+p.barcode,'edit');
   toast('Yeni barkod: <span class="mono">'+p.barcode+'</span>','ok');
   modal(prodModalHtml(p),'wide');break}
  case 'label':printLabel(prod(t.dataset.pid));break;
  case 'addpart':{
   const row=document.createElement('div');row.className='part-row';
   row.style.cssText='display:grid;grid-template-columns:1fr 90px 40px;gap:10px;margin-bottom:9px';
   row.innerHTML='<select class="fld" style="height:36px">'+PRODUCTS.map(p=>'<option value="'+p.id+'">['+esc(p.sub)+'] '+esc(p.brand)+' · '+esc(p.name)+(p.quality?' · '+esc(p.quality):'')+'</option>').join('')+'</select>'+
    '<input class="fld" type="number" value="1" min="1" style="height:36px;text-align:center">'+
    '<button class="btn ghost sm" data-act="rmpart">'+IC.x.replace('width="2.2"','width="1.8"')+'</button>';
   document.getElementById('nsParts').appendChild(row);break}
  case 'rmpart':t.closest('.part-row').remove();break;
  case 'newSvc':newSvcModal();break;
  case 'saveSvc':saveSvcCore();break;
  case 'editSvc':toast('Demo: servis düzenleme paneli gerçek sürümde açılır.<br>Durumu sağ üstteki menüden güncelleyebilirsin.','warn');break;
  case 'printA5':printA5(SERVICES.find(s=>s.id===t.dataset.sid));break;
  case 'newCust':
   modal('<div class="modal-head"><div><h3>Yeni Müşteri</h3><div class="sub">müşteri kartı + telefon</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div><div class="modal-body"><div class="f-row">'+
    '<div class="f-group"><span class="lbl">Ad Soyad</span><input class="fld" id="ncName"></div><div class="f-group"><span class="lbl">Telefon</span><input class="fld" id="ncPhone" placeholder="05xx xxx xx xx"></div>'+
    '<div class="f-group"><span class="lbl">Alternatif Telefon</span><input class="fld" id="ncPhone2"></div><div class="f-group"><span class="lbl">E-posta</span><input class="fld" id="ncMail"></div>'+
    '<div class="f-group"><span class="lbl">Adres</span><input class="fld" id="ncAddr"></div><div class="f-group"><span class="lbl">Notlar</span><input class="fld" id="ncNotes"></div>'+
    '</div></div><div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn" data-act="saveCust">'+IC.check+' Kaydet</button></div>');
   break;
  case 'saveCust':{
   const name=document.getElementById('ncName').value.trim();const phone=document.getElementById('ncPhone').value.trim();
   if(!name||!phone){toast('<b>Ad ve telefon zorunlu.</b>','warn');break}
   CUSTOMERS.push({id:uid('cust'),name,phone,phone2:document.getElementById('ncPhone2').value.trim(),mail:document.getElementById('ncMail').value.trim(),addr:document.getElementById('ncAddr').value.trim(),notes:document.getElementById('ncNotes').value.trim()});
   logIt('Yeni müşteri eklendi: '+esc(name)+' — '+esc(phone),'edit');
   toast('<b>'+esc(name)+'</b> müşteri kartı oluşturuldu.','ok');closeModal();renderView();break}
  case 'addDev':{
   const cid=t.dataset.cid;tempCosm={};tempZone='ekran';
   modal('<div class="modal-head"><div><h3>Yeni Cihaz Kartı</h3><div class="sub">'+esc(cust(cid).name)+' adına</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>'+
    '<div class="modal-body"><div class="f-row">'+
    '<div class="f-group"><span class="lbl">Marka</span><input class="fld" id="ndBrand" placeholder="Apple"></div>'+
    '<div class="f-group"><span class="lbl">Model</span><input class="fld" id="ndModel" placeholder="iPhone 13"></div>'+
    '<div class="f-group"><span class="lbl">IMEI</span><input class="fld" id="ndImei" placeholder="356…"></div>'+
    '<div class="f-group"><span class="lbl">Seri No</span><input class="fld" id="ndSeri"></div>'+
    '<div class="f-group"><span class="lbl">Renk</span><input class="fld" id="ndColor"></div>'+
    '<div class="f-group"><span class="lbl">Hafıza</span><input class="fld" id="ndSize" placeholder="128 GB"></div>'+
    '<div class="f-group" style="grid-column:1/-1"><span class="lbl">Cihaz şikayeti</span><input class="fld" id="ndFault"></div>'+
    '<div class="f-group" style="grid-column:1/-1"><span class="lbl">Teslim alınan aksesuarlar</span><input class="fld" id="ndAcc" placeholder="kılıf, ekran koruyucu…"></div>'+
    '<div class="f-group" style="grid-column:1/-1"><span class="lbl">Notlar</span><textarea class="fld" id="ndNotes"></textarea></div></div>'+
    '<div class="sec-t">Kozmetik Durum <span style="font-weight:400;color:var(--ink3)">— telefona tıklayın, sonra hasarı seçin</span></div>'+
    '<div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap"><div style="width:130px" id="cosmSvg">'+phoneSvg(tempCosm)+'</div><div style="flex:1;min-width:200px"><div class="lbl">Seçili bölge</div><div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px">'+['ekran','cerceve','arka','kamera','tuslar'].map(z=>'<span class="chip '+(tempZone===z?'on':'')+'" data-act="zone" data-z="'+z+'">'+z+'</span>').join('')+'</div>'+
    '<div class="lbl">Hasar türleri</div><div style="display:flex;gap:5px;flex-wrap:wrap">'+['Çizik','Ezik','Kırık','Ölü piksel','Şişme'].map(dm=>{const on=tempCosm[tempZone]&&tempCosm[tempZone].includes(dm);return'<span class="chip '+(on?'on':'')+'" data-act="zdamage" data-d="'+dm+'">'+dm+'</span>'}).join('')+'</div></div></div>'+
    '</div><div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn" data-act="saveDev" data-cid="'+cid+'">'+IC.check+' Kaydet</button></div>','wide');
   break}
  case 'zone':tempZone=t.dataset.z;
   document.querySelectorAll('[data-act="zone"]').forEach(z=>z.classList.toggle('on',z===t));
   document.querySelectorAll('[data-act="zdamage"]').forEach(dm=>{const on=tempCosm[tempZone]&&tempCosm[tempZone].includes(dm.dataset.d);dm.classList.toggle('on',!!on)});
   break;
  case 'zdamage':{
   if(!tempZone){toast('Önce telefonda bölge seçin.','warn');break}
   tempCosm[tempZone]=tempCosm[tempZone]||[];const i=tempCosm[tempZone].indexOf(t.dataset.d);
   if(i>=0)tempCosm[tempZone].splice(i,1);else tempCosm[tempZone].push(t.dataset.d);
   if(!tempCosm[tempZone].length)delete tempCosm[tempZone];
   document.getElementById('cosmSvg').innerHTML=phoneSvg(tempCosm);
   t.classList.toggle('on',!!(tempCosm[tempZone]||[]).includes(t.dataset.d));break}
  case 'saveDev':{
   const cid=t.dataset.cid;const brand=document.getElementById('ndBrand').value.trim();const model=document.getElementById('ndModel').value.trim();const imei=document.getElementById('ndImei').value.trim();
   if(!brand||!model||!imei){toast('<b>Marka, model ve IMEI zorunlu.</b>','warn');break}
   DEVICES.push({id:uid('dev'),cust:cid,brand,model,imei,seri:document.getElementById('ndSeri').value.trim(),color:document.getElementById('ndColor').value.trim(),size:document.getElementById('ndSize').value.trim(),cosm:JSON.parse(JSON.stringify(tempCosm)),fault:document.getElementById('ndFault').value.trim(),acc:document.getElementById('ndAcc').value.trim(),notes:document.getElementById('ndNotes').value.trim()});
   logIt('Cihaz kartı eklendi: '+esc(brand)+' '+esc(model)+' — IMEI '+esc(imei),'edit');
   toast('<b>'+esc(brand)+' '+esc(model)+'</b> cihaz kartı kaydedildi.','ok');
   closeModal();modal(custModal(cust(cid)),'wide');break}
  case 'cashTab':state.cf.br=t.dataset.b;renderView();break;
  case 'cbType':ckType=t.dataset.t;
   document.querySelectorAll('[data-act="cbType"]').forEach(b=>b.classList.toggle('on',b===t));
   fillKinds();break;
  case 'newCash':ckType='in';modal(newCashModal());fillKinds();break;
  case 'saveCash':{
   const amt=Number(document.getElementById('cbAmt').value)||0;
   const kind=document.getElementById('cbKind').value;const pay=document.getElementById('cbPay').value;
   const desc=document.getElementById('cbDesc').value.trim();const br=document.getElementById('cbBr').value;
   if(amt<=0){toast('<b>Geçerli tutar girin.</b>','warn');break}
   addCash(br,ckType,kind,amt,pay,desc||kind);closeModal();renderView();break}
  case 'addBranch':
   modal('<div class="modal-head"><div><h3>Yeni Şube</h3><div class="sub">şube bazlı stok/kasa/personel otomatik oluşur</div></div><button class="x-close" data-act="close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div><div class="modal-body"><div class="f-group"><span class="lbl">Şube adı</span><input class="fld" id="abName" placeholder="Şube 2"></div><div class="f-group"><span class="lbl">Şehir</span><input class="fld" id="abCity" placeholder="İstanbul"></div></div><div class="modal-foot"><button class="btn ghost" data-act="close">Vazgeç</button><button class="btn" data-act="saveBranch">'+IC.check+' Oluştur</button></div>');
   break;
  case 'saveBranch':{
   const name=document.getElementById('abName').value.trim();
   if(!name){toast('<b>Şube adı girin.</b>','warn');break}
   BRANCHES.push({id:'S'+BRANCHES.length,name,city:document.getElementById('abCity').value.trim()||'—',mgr:'—'});
   PRODUCTS.forEach(ensureStock);
   logIt('Yeni şube oluşturuldu: '+esc(name),'edit');
   toast('<b>'+esc(name)+'</b> eklendi — tüm ürün stokları 0 ile açıldı.','ok');
   closeModal();renderView();break}
  case 'logToggle':state.managerLog=!state.managerLog;
   toast('Şube müdürü log görünümü: <b>'+(state.managerLog?'AÇIK':'KAPALI')+'</b>',state.managerLog?'ok':'warn');
   renderNavs();renderView();break;
 }
});
function fillKinds(){
 const sel=document.getElementById('cbKind');
 sel.innerHTML=(ckType==='in'?['Servis ödemesi','Ürün satışı','Aksesuar satışı','Diğer gelir']:['Ürün / parça alışı','Diğer gider']).map((k,i)=>'<option'+(i===0?' selected':'')+'>'+k+'</option>').join('');
}
document.addEventListener('input',e=>{
 const id=e.target.id;
 if(id==='globalSearch')renderSearch(e.target.value.trim());
 if(id==='pSearch'){state.pf.q=e.target.value;checkDebounce('products')}
 if(id==='pTreeSearch'){state.pf.treeQ=e.target.value;checkDebounce('products')}
 if(id==='pBarcode')return;
 if(id==='sSearch'){state.sf.q=e.target.value;checkDebounce('services')}
 if(id==='cSearch'||id==='cSearch2'){state.cf.q=e.target.value;renderView()}
});
let debTimer=null;
function checkDebounce(v){clearTimeout(debTimer);debTimer=setTimeout(()=>{if(state.view===v)renderView()},150)}
document.addEventListener('change',e=>{
 const id=e.target.id;
 if(id==='fBrand'){state.pf.brand=e.target.value;state.pf.model='';state.pf.cat='';renderProductsOnly()}
 if(id==='fModel'){state.pf.model=e.target.value;state.pf.cat='';renderProductsOnly()}
 if(id==='fCat'){state.pf.cat=e.target.value;renderProductsOnly()}
 if(id==='fSup'){state.pf.sup=e.target.value===''?'':Number(e.target.value);renderProductsOnly()}
 if(id==='fStok'){state.pf.stok=e.target.value;renderProductsOnly()}
 if(id==='fDurum'){state.sf.dur=e.target.value;checkDebounce('services')}
 if(id==='fSvcBr'){state.sbBr=e.target.value;checkDebounce('services')}
 if(id==='mvBr'){state.mvBr=e.target.value;renderView()}
 if(id==='lKind'){state.lf.kind=e.target.value;renderView()}
 if(id==='svcStatus'){updateServiceStatus(e.target.dataset.sid,Number(e.target.value))}
 if(id==='nsCust'){const devs=devsOf(e.target.value);const sel=document.getElementById('nsDev');sel.innerHTML=devs.length?devs.map(d=>'<option value="'+d.id+'">'+d.brand+' '+d.model+' · IMEI '+d.imei+'</option>').join(''):'<option value="">Bu müşterinin cihazı yok — önce cihaz ekleyin</option>'}
});
function renderProductsOnly(){if(state.view==='products')renderView()}
function updateServiceStatus(sid,st){
 const s=SERVICES.find(x=>x.id===sid);if(!s)return;
 const old=STATUSES[s.status];s.status=st;
 logIt('Servis durumu değişti: '+s.no+' — '+old+' → '+STATUSES[st],'edit');
 toast('<b>'+s.no+'</b> durumu: '+old+' → <b>'+STATUSES[st]+'</b>','ok');
 document.querySelector('.modal').scrollTop=0;
 const newModal=svcModal(s);
 closeModal();modal(newModal,'xl');
}
document.addEventListener('keydown',e=>{
 if(e.key==='Escape')closeModal();
 if(e.key==='Enter'&&e.target&&e.target.id==='pBarcode'){
  const v=e.target.value.trim();
  if(!v)return;
  const p=PRODUCTS.find(x=>x.barcode===v);
  if(p){toast('Barkod eşleşti: <b>'+esc(p.name)+'</b>','ok');modal(prodModalHtml(p),'wide');e.target.value=''}
  else toast('<b>Barkod bulunamadı</b> — '+esc(v),'warn');
 }
});
document.addEventListener('click',e=>{
 const res=document.getElementById('searchResults');
 if(res&&!e.target.closest('.searchbox'))res.classList.add('hide');
});
/* ---------- INIT ---------- */
function autoLogin(role){
 const u=USERS.find(x=>x.role===role);
 if(!u){renderLogin();return;}
 login(u.id);
}
if(window.FORCE_ROLE){
 document.getElementById('login').style.display='none';
 autoLogin(window.FORCE_ROLE);
}else{
 renderLogin();
}
