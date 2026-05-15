import styles from './App.module.css'

/* ─── Image URLs (Google Stitch originals) ─── */
const IMG = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2QtARalehznyEAYrxf4yDvjaIto3F1OzYHmnj7Oz-5JSkPzdscNl2LvSBcWfIUp966_kKjZc9xTsidVlx41tU1TFYxWJPPYfYYigFJk0jR4pWUlEgF5EANdY5zpmfO6TkARI8pa5I_uCLkT24O6WQZwtzgHq_-EqlolnqYRR1xzlcPEnBEgQWKTQIMQvBe6zbITrGcj129EkmCRs4NFScYmNHGkhHh08J2TG43CZXSKE46rg7EECBoPQBIVzwdl0PKtl7iEqrXqg',
  cocktails: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_MsTGR1whOKuWkSabtmsdSDq4dIWzuEsQe1AygsMwIEIJ0vFuFa5VhiwN3t0cLEP2YT5QmV9tDCLZ3q71RilfIsK1dlnN1vcIqgFfQ_7-0rdnVTvBy5GqSX5P61BcG8Mueib71ympMZqATCxmvI0x84ZcHDyi7-tJgPw-rMmlXU0evUzMlSYmF6k1hxlWc2L__19YO-nx_EKDz-vZQGGsrzcWA7N0QTu1xYs3X1rcy_7Get2iBdHMOdvThY8GiGOdWb4OjD_OHCY',
  beers: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyjbiNSVdR-hVn-ImLkoDTbuLq7N2E1jLdNNy3av1GGcK28PMbUGIXBL2qzbus7gwt-vN7k60PxEwb7Riirpl6nP7lH41eQ5WKKZaR7Z9dn4sLh-ztZIKrFstmEhB9tFRluHwHM2YYf7xblI6qIOIOsunmQueLXVCPO-NV1gaRJfOnbxyCXT7dEnc1zTwH_f3OkD14nwMVJ9doFyHsI32Ae9sr391JEkpBtCmFPgh2Y5E-Ms8xRlrqhMLCJ2E_y16hREO3TYKPXb4',
  wines: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIsdWXl804D3LqYYIoONaDK8kwwQ0vyYpW5oLOJjuvCIbfYUsRFa-PB7iBp8OlmOfIEt21Uo_xvJN61GBHvn_EGeILV28iCeBATMdPhybo3RR5usDT0lhGO49LR2q0zLNT6-MI1ioYj7LcrNUC2ZvoGiCD8iyYUqsvRVCackRGKKLngR8a6rakYAUh_09BtjlXF3Sdh4ewT7TLfT2PRoazOERKwBnf4nV1B8E_4l9pFmgySv0OV9l_wOLGmsPhUUu2K3hSsOQs9iU',
  snacks: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd60NiJ8wDc2XRYOjKKO-gYeXEVIK6WiEAgBGbkQY4O0Wfg5kxgcioF7QdMwmliaOQbKbwUVfuw-hZLN_sfrdCTUyFTSOoL16_v8_gOEqZyjI7zZTCnHDSQpVpNi4DrGPlQvMmY8Je2s2klp8dursTuUEdvmSv4WrXtMzFlc1KnmRu0JbKLZazeK6D9u4gAx_mwBmhdyieVSyfXP-muPn52MKRaWgdH0u3dK1lfRFOzqabEcQV2IyC0tJsvFQbXyj1vSDn4oRvLp4',
  alquimista: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl4IJqAF3KKZFbPj3aes8-QV7Rx9vu3HnspjaN05QizKVsNJgXFsr2xv_YxwF8vKLLg1_X1MRfcP2nMdIucxKEjiDZX_ZpVALPIeMOx_cjr4ZtkV7N4twTyq11f1eaXlDKWYGkW3tI-3iOWzoCoIxtCRa21BG9D3CSIswOM0ByAVCPGZhERLZZI3Yhtp2EfIoV9odcrsP731PBXkyMLN4ADcJjVKm6hUvIG7-NQj48uASrBEIb0giHaQxyDTwepLTz7nkL4LhOoxQ',
  jardim: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtCjZqWiGlEROmrOHQhkdlbELh55JQDVc8t-QvOeAsXNnexuwBVii_L6bE3na_NqovpJvI4qqnXFsSr9UIkEd5r7XS1Rte-HUquBtfYuFwivKo9ns7SXZNj5bkt7AZDddJoux1VT9kCMdkcVlqkfAPMq1b92xrrfV2NO-y4M7hu3ocVbG1cDNOjEmQJulKK9Sb-riNensm3zopmLY0pJcp2Gm8ZYfrT7nAbWfl0V7IWo_qiO6jBr29ICQ10RqPjQx3kwz6yDa-1uo',
  fumo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXEb4r29u6XAZOiwpueP5rS4ick1hCRs7DUZ9G841PvwlBEBIb5LKJPx8I6FjrBNgtdVzzqpRM9csbfDCH1yxawD_qM2De1fM6XmnR2M-nU45ons8y-IYXkUCB-rTB0msDrbGW472egtAyWFW6fTSrNrSI6eSy2ByK0D6_mTsa2hZNibcQ5wXGNUPQi_ROiiySt-Levj3e2c_pSUmIOqYpoReuCZT2r4coYpJh2EnK0QTypN2J4-aqBjvZOOrBZKxmd4AdSiXM3ZU',
}

/* ─── Nav links ─── */
const NAV_LINKS = ['Cocktails', 'Beers', 'Wines', 'Food', 'Contact']

/* ─── Featured category cards (right column top) ─── */
const FEATURED = [
  { img: IMG.cocktails, title: 'Cocktails Assinados', desc: 'Explora a nossa seleção de drinks exclusivos.' },
  { img: IMG.beers,     title: 'Cervejas Artesanais', desc: 'Descubra sabores únicos e regionais.' },
  { img: IMG.wines,     title: 'Vinhos Selecionados',  desc: 'Descubra sabores únicos e regionais.' },
  { img: IMG.snacks,    title: 'Petiscos Gourmet',     desc: 'Descubra sabores de petiscos gourmet.' },
]

/* ─── Specials ─── */
const SPECIALS = [
  {
    img: IMG.alquimista,
    name: 'O Alquimista',
    price: 'R$ 45,00',
    ingredients: ['Gin infusionado com botânicos', 'Xarope de hibisco', 'Sumo de limão siciliano'],
  },
  {
    img: IMG.jardim,
    name: 'Jardim Noturno',
    price: 'R$ 52,00',
    ingredients: ['Xarope de hibisco', 'Sumo de limão siciliano', 'Clara de ovo'],
  },
  {
    img: IMG.fumo,
    name: 'Fumo e Brasa',
    price: 'R$ 58,00',
    ingredients: ['Gin infusionado com botânicos', 'Xarope de hibisco', 'Clara de ovo'],
  },
]

/* ════════════════════════════════════════
   SUB-COMPONENTS
════════════════════════════════════════ */

function Header() {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <span className="material-symbols-outlined" style={{ fontSize: 28 }}>local_bar</span>
        <span className={styles.logoText}>Bar Digital</span>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <a key={link} href="#" className={styles.navLink}>{link}</a>
        ))}
      </nav>
    </header>
  )
}

function HeroBanner() {
  return (
    <div className={styles.heroBanner}>
      <img src={IMG.hero} alt="Bartender making a cocktail" className={styles.heroImg} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          A Experiência <br /> do Sabor
        </h1>
        <div style={{ marginTop: 32 }}>
          <a href="#" className={styles.heroBtn}>Ver Cardápio</a>
        </div>
      </div>
    </div>
  )
}

function CategoryCard({ img, title, desc }) {
  return (
    <div className={styles.categoryCard}>
      <img src={img} alt={title} className={styles.categoryImg} />
      <div className={styles.categoryOverlay}>
        <h3 className={styles.categoryTitle}>{title}</h3>
        <p className={styles.categoryDesc}>{desc}</p>
      </div>
    </div>
  )
}

function FeaturedCard({ img, title, desc }) {
  return (
    <div className={styles.featuredCard}>
      <img src={img} alt={title} className={styles.featuredImg} />
      <div className={styles.featuredOverlay}>
        <h4 className={styles.featuredTitle}>{title}</h4>
        <p className={styles.featuredDesc}>{desc}</p>
      </div>
    </div>
  )
}

function SpecialCard({ img, name, price, ingredients }) {
  return (
    <div className={styles.specialCard}>
      <div className={styles.specialImgWrap}>
        <img src={img} alt={name} className={styles.specialImg} />
      </div>
      <div className={styles.specialBody}>
        <h4 className={styles.specialName}>{name}</h4>
        <p className={styles.specialPrice}>{price}</p>
        <ul className={styles.specialIngredients}>
          {ingredients.map((ing) => (
            <li key={ing}>• {ing}</li>
          ))}
        </ul>
      </div>
      <button className={styles.orderBtn}>Order Now</button>
    </div>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Info */}
      <div className={styles.footerInfo}>
        <div className={styles.footerInfoItem}>
          <svg className={styles.footerIcon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Location: Citsirwsy<br />Rome — LK-K85</span>
        </div>
        <div className={styles.footerInfoItem}>
          <svg className={styles.footerIcon} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>Hours: 3:1—Hecrs<br />07:00 &amp; 18:00</span>
        </div>
      </div>

      {/* Social */}
      <div className={styles.footerSocial}>
        {['FB', 'TW', 'IG', 'YT'].map((s) => (
          <a key={s} href="#" className={styles.footerSocialLink}>{s}</a>
        ))}
      </div>

      {/* Legal */}
      <div className={styles.footerLegal}>
        <a href="#" className={styles.footerLegalLink}>Terms</a>
        <a href="#" className={styles.footerLegalLink}>Privacy Policy</a>
      </div>
    </footer>
  )
}

/* ════════════════════════════════════════
   MAIN APP
════════════════════════════════════════ */

export default function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        {/* ── LEFT COLUMN ── */}
        <section className={styles.leftCol}>
          <HeroBanner />

          {/* Categories */}
          <div className={styles.categoriesSection}>
            <h2 className={styles.sectionTitle}>Categories</h2>
            <div className={styles.categoriesGrid}>
              <CategoryCard img={IMG.cocktails} title="Cocktails Assinados" desc="Explore a nossa seleção de drinks exclusivos." />
              <CategoryCard img={IMG.beers}     title="Cervejas Artesanais" desc="Descubra sabores únicos e regionais." />
            </div>
          </div>
        </section>

        {/* ── RIGHT COLUMN ── */}
        <section className={styles.rightCol}>
          {/* 2×2 featured grid */}
          <div className={styles.featuredGrid}>
            {FEATURED.map((f) => (
              <FeaturedCard key={f.title} {...f} />
            ))}
          </div>

          {/* Chef's Specials */}
          <div className={styles.specialsSection}>
            <h2 className={styles.sectionTitle}>Chef's Specials</h2>
            <div className={styles.specialsGrid}>
              {SPECIALS.map((s) => (
                <SpecialCard key={s.name} {...s} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
