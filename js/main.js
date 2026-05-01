/* ============================================
   Ballet & Dogs — Main JavaScript
   ============================================ */

// ── i18n Translations ──
const T = {
  ja: {
    'nav-home':          'ホーム',
    'nav-about':         'ブランドについて',
    'nav-products':      '商品',
    'nav-gallery':       'ギャラリー',
    'nav-news':          'ニュース',
    'nav-contact':       'お問い合わせ',
    'nav-dogs':          '犬種で探す',
    'nav-shop':          'ショップ',
    'hero-sub-jp':       'バレリーナと犬のイラストグッズブランド',
    'hero-sub-en':       '日本発・世界向け',
    'cta-jp':            '🇯🇵 日本で購入 (SUZURI)',
    'cta-en':            '🌍 海外ショップ (Redbubble)',
    'products-title-jp': '人気商品',
    'products-title-en': 'Our Products',
    'prod1-jp': 'Tシャツ',        'prod1-en': 'T-shirt',
    'prod2-jp': 'トートバッグ',   'prod2-en': 'Tote Bag',
    'prod3-jp': 'スマホケース',   'prod3-en': 'Smartphone Case',
    'prod4-jp': 'ポーチ',         'prod4-en': 'Pouch',
    'prod5-jp': 'マグカップ',     'prod5-en': 'Mug Cup',
    'btn-jp': '日本で購入',
    'btn-en': 'Worldwide',
    'browse-dogs': '🐾 犬種で探す',
    'browse-cats': '🛍 カテゴリで探す',
    'about-title-jp': 'ブランドについて',
    'about-title-en': 'About',
    'about-body': 'バレリーナと愛犬の愛らしい世界観をイラストにしたグッズブランドです。日本のアニメ・和モダンの美意識と、バレエの優雅さを融合させました。あなたの日常に、ときめきをいっしょに。',
    'shop-title-jp':  'ショップ',
    'shop-title-en':  'Shop Now',
    'shop-jp-sub':    '日本国内向けショップ',
    'shop-jp-btn':    'SUZURI で購入する',
    'shop-en-sub':    '海外発送対応',
    'shop-en-btn':    'Redbubble で購入する',
    'footer-sub':     'バレリーナと犬のイラストグッズブランド',
    'dogs-title-jp':  '犬種で探す',
    'dogs-title-en':  'Browse by Dog Breed',
    'dogs-subtitle':  'お気に入りの犬種のグッズを見つけよう',
    'cats-title-jp':  '商品カテゴリ',
    'cats-title-en':  'Product Categories',
    'cats-subtitle':  'お気に入りのアイテムを見つけよう',
    'cat1-jp': 'Tシャツ',        'cat1-en': 'T-shirt',
    'cat2-jp': 'トートバッグ',   'cat2-en': 'Tote Bag',
    'cat3-jp': 'スマホケース',   'cat3-en': 'Smartphone Case',
    'cat4-jp': 'ポーチ',         'cat4-en': 'Pouch',
    'cat5-jp': 'マグカップ',     'cat5-en': 'Mug Cup',
    'cat6-jp': 'ステッカー',     'cat6-en': 'Sticker',
    'cat7-jp': 'ノート',         'cat7-en': 'Notebook',
    'cat8-jp': 'クッション',     'cat8-en': 'Cushion',
  },
  en: {
    'nav-home':          'Home',
    'nav-about':         'About',
    'nav-products':      'Products',
    'nav-gallery':       'Gallery',
    'nav-news':          'News',
    'nav-contact':       'Contact',
    'nav-dogs':          'Gallery',
    'nav-shop':          'Shop',
    'hero-sub-jp':       'Ballerina & Dog Illustration Brand',
    'hero-sub-en':       'From Japan, For the World',
    'cta-jp':            '🇯🇵 Buy in Japan (SUZURI)',
    'cta-en':            '🌍 Shop Worldwide (Redbubble)',
    'products-title-jp': 'Popular Items',
    'products-title-en': 'Our Products',
    'prod1-jp': 'T-shirt',         'prod1-en': 'T-shirt',
    'prod2-jp': 'Tote Bag',        'prod2-en': 'Tote Bag',
    'prod3-jp': 'Phone Case',      'prod3-en': 'Smartphone Case',
    'prod4-jp': 'Pouch',           'prod4-en': 'Pouch',
    'prod5-jp': 'Mug',             'prod5-en': 'Mug Cup',
    'btn-jp': 'Japan Shop',
    'btn-en': 'Worldwide',
    'browse-dogs': '🐾 Browse by Dog Breed',
    'browse-cats': '🛍 Browse by Category',
    'about-title-jp': 'About the Brand',
    'about-title-en': 'About',
    'about-body': 'A goods brand featuring illustrations of ballerinas and their beloved dogs. We blend Japanese anime aesthetics and traditional Japanese beauty with the elegance of ballet. Bringing joy and sparkle to your everyday life.',
    'shop-title-jp':  'Our Shop',
    'shop-title-en':  'Shop Now',
    'shop-jp-sub':    'Japan domestic shop',
    'shop-jp-btn':    'Shop on SUZURI',
    'shop-en-sub':    'Worldwide shipping available',
    'shop-en-btn':    'Shop on Redbubble',
    'footer-sub':     'Ballerina & Dog Illustration Brand',
    'dogs-title-jp':  'Find by Breed',
    'dogs-title-en':  'Browse by Dog Breed',
    'dogs-subtitle':  'Find goods featuring your favourite breed',
    'cats-title-jp':  'Categories',
    'cats-title-en':  'Product Categories',
    'cats-subtitle':  'Find your favourite item',
    'cat1-jp': 'T-shirt',          'cat1-en': 'T-shirt',
    'cat2-jp': 'Tote Bag',         'cat2-en': 'Tote Bag',
    'cat3-jp': 'Phone Case',       'cat3-en': 'Smartphone Case',
    'cat4-jp': 'Pouch',            'cat4-en': 'Pouch',
    'cat5-jp': 'Mug Cup',          'cat5-en': 'Mug Cup',
    'cat6-jp': 'Sticker',          'cat6-en': 'Sticker',
    'cat7-jp': 'Notebook',         'cat7-en': 'Notebook',
    'cat8-jp': 'Cushion',          'cat8-en': 'Cushion',
  }
};

// ── Language switcher ──
let currentLang = localStorage.getItem('bd-lang') || 'ja';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('bd-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Init language
  setLang(currentLang);

  // Lang button clicks
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
  });

  // ── Mobile hamburger ──
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const open = mobileNav.classList.contains('open');
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Sticky header shadow on scroll ──
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ── Sakura petal animation ──
  const container = document.getElementById('sakura-container');
  if (container) spawnSakura(container);
});

// ── Sakura petals ──
function spawnSakura(container) {
  const colors = ['#F8C0D0', '#F4A7B9', '#FFCDD8', '#FFF0F5', '#FFB8CC'];
  const totalPetals = 22;

  for (let i = 0; i < totalPetals; i++) {
    setTimeout(() => createPetal(container, colors), i * 320);
  }
  setInterval(() => createPetal(container, colors), 1200);
}

function createPetal(container, colors) {
  const petal = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  petal.setAttribute('viewBox', '0 0 20 20');
  const size = 8 + Math.random() * 14;
  petal.style.cssText = `
    position:absolute;
    width:${size}px;
    height:${size}px;
    left:${Math.random() * 100}%;
    top:-20px;
    opacity:0;
    pointer-events:none;
    animation: sakura-fall ${5.5 + Math.random() * 6.5}s linear forwards;
    animation-delay: ${Math.random() * 1.5}s;
  `;

  const color = colors[Math.floor(Math.random() * colors.length)];
  const angle = Math.random() * 360;

  petal.innerHTML = `
    <g transform="rotate(${angle} 10 10)">
      <ellipse cx="10" cy="5" rx="4.5" ry="6.5" fill="${color}" opacity="0.88"/>
      <ellipse cx="15" cy="11" rx="4.5" ry="6.5" fill="${color}" opacity="0.88" transform="rotate(72 10 10)"/>
      <ellipse cx="13" cy="18" rx="4.5" ry="6.5" fill="${color}" opacity="0.88" transform="rotate(144 10 10)"/>
      <ellipse cx="7" cy="18" rx="4.5" ry="6.5" fill="${color}" opacity="0.88" transform="rotate(216 10 10)"/>
      <ellipse cx="5" cy="11" rx="4.5" ry="6.5" fill="${color}" opacity="0.88" transform="rotate(288 10 10)"/>
    </g>`;

  container.appendChild(petal);
  petal.addEventListener('animationend', () => petal.remove());
}

// Inject sakura keyframes once
(function injectKeyframes() {
  if (document.getElementById('sakura-kf')) return;
  const style = document.createElement('style');
  style.id = 'sakura-kf';
  const drift = -40 + Math.random() * 90;
  style.textContent = `
    @keyframes sakura-fall {
      0%   { opacity:0; transform: translate(0, -20px) rotate(0deg); }
      6%   { opacity:0.9; }
      88%  { opacity:0.75; }
      100% { opacity:0; transform: translate(${drift}px, 108vh) rotate(${480 + Math.random() * 400}deg); }
    }`;
  document.head.appendChild(style);
})();
