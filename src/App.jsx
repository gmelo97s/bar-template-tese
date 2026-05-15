import { useState, useMemo, useEffect } from 'react'
import styles from './App.module.css'

/* ─── Image URLs ─── */
const IMG = {
  hero:       'https://lh3.googleusercontent.com/aida-public/AB6AXuC2QtARalehznyEAYrxf4yDvjaIto3F1OzYHmnj7Oz-5JSkPzdscNl2LvSBcWfIUp966_kKjZc9xTsidVlx41tU1TFYxWJPPYfYYigFJk0jR4pWUlEgF5EANdY5zpmfO6TkARI8pa5I_uCLkT24O6WQZwtzgHq_-EqlolnqYRR1xzlcPEnBEgQWKTQIMQvBe6zbITrGcj129EkmCRs4NFScYmNHGkhHh08J2TG43CZXSKE46rg7EECBoPQBIVzwdl0PKtl7iEqrXqg',
  cocktails:  'https://lh3.googleusercontent.com/aida-public/AB6AXuA_MsTGR1whOKuWkSabtmsdSDq4dIWzuEsQe1AygsMwIEIJ0vFuFa5VhiwN3t0cLEP2YT5QmV9tDCLZ3q71RilfIsK1dlnN1vcIqgFfQ_7-0rdnVTvBy5GqSX5P61BcG8Mueib71ympMZqATCxmvI0x84ZcHDyi7-tJgPw-rMmlXU0evUzMlSYmF6k1hxlWc2L__19YO-nx_EKDz-vZQGGsrzcWA7N0QTu1xYs3X1rcy_7Get2iBdHMOdvThY8GiGOdWb4OjD_OHCY',
  beers:      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyjbiNSVdR-hVn-ImLkoDTbuLq7N2E1jLdNNy3av1GGcK28PMbUGIXBL2qzbus7gwt-vN7k60PxEwb7Riirpl6nP7lH41eQ5WKKZaR7Z9dn4sLh-ztZIKrFstmEhB9tFRluHwHM2YYf7xblI6qIOIOsunmQueLXVCPO-NV1gaRJfOnbxyCXT7dEnc1zTwH_f3OkD14nwMVJ9doFyHsI32Ae9sr391JEkpBtCmFPgh2Y5E-Ms8xRlrqhMLCJ2E_y16hREO3TYKPXb4',
  wines:      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIsdWXl804D3LqYYIoONaDK8kwwQ0vyYpW5oLOJjuvCIbfYUsRFa-PB7iBp8OlmOfIEt21Uo_xvJN61GBHvn_EGeILV28iCeBATMdPhybo3RR5usDT0lhGO49LR2q0zLNT6-MI1ioYj7LcrNUC2ZvoGiCD8iyYUqsvRVCackRGKKLngR8a6rakYAUh_09BtjlXF3Sdh4ewT7TLfT2PRoazOERKwBnf4nV1B8E_4l9pFmgySv0OV9l_wOLGmsPhUUu2K3hSsOQs9iU',
  snacks:     'https://lh3.googleusercontent.com/aida-public/AB6AXuAd60NiJ8wDc2XRYOjKKO-gYeXEVIK6WiEAgBGbkQY4O0Wfg5kxgcioF7QdMwmliaOQbKbwUVfuw-hZLN_sfrdCTUyFTSOoL16_v8_gOEqZyjI7zZTCnHDSQpVpNi4DrGPlQvMmY8Je2s2klp8dursTuUEdvmSv4WrXtMzFlc1KnmRu0JbKLZazeK6D9u4gAx_mwBmhdyieVSyfXP-muPn52MKRaWgdH0u3dK1lfRFOzqabEcQV2IyC0tJsvFQbXyj1vSDn4oRvLp4',
  alquimista: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl4IJqAF3KKZFbPj3aes8-QV7Rx9vu3HnspjaN05QizKVsNJgXFsr2xv_YxwF8vKLLg1_X1MRfcP2nMdIucxKEjiDZX_ZpVALPIeMOx_cjr4ZtkV7N4twTyq11f1eaXlDKWYGkW3tI-3iOWzoCoIxtCRa21BG9D3CSIswOM0ByAVCPGZhERLZZI3Yhtp2EfIoV9odcrsP731PBXkyMLN4ADcJjVKm6hUvIG7-NQj48uASrBEIb0giHaQxyDTwepLTz7nkL4LhOoxQ',
  jardim:     'https://lh3.googleusercontent.com/aida-public/AB6AXuBtCjZqWiGlEROmrOHQhkdlbELh55JQDVc8t-QvOeAsXNnexuwBVii_L6bE3na_NqovpJvI4qqnXFsSr9UIkEd5r7XS1Rte-HUquBtfYuFwivKo9ns7SXZNj5bkt7AZDddJoux1VT9kCMdkcVlqkfAPMq1b92xrrfV2NO-y4M7hu3ocVbG1cDNOjEmQJulKK9Sb-riNensm3zopmLY0pJcp2Gm8ZYfrT7nAbWfl0V7IWo_qiO6jBr29ICQ10RqPjQx3kwz6yDa-1uo',
  fumo:       'https://lh3.googleusercontent.com/aida-public/AB6AXuCXEb4r29u6XAZOiwpueP5rS4ick1hCRs7DUZ9G841PvwlBEBIb5LKJPx8I6FjrBNgtdVzzqpRM9csbfDCH1yxawD_qM2De1fM6XmnR2M-nU45ons8y-IYXkUCB-rTB0msDrbGW472egtAyWFW6fTSrNrSI6eSy2ByK0D6_mTsa2hZNibcQ5wXGNUPQi_ROiiySt-Levj3e2c_pSUmIOqYpoReuCZT2r4coYpJh2EnK0QTypN2J4-aqBjvZOOrBZKxmd4AdSiXM3ZU',
}

const ALL_ITEMS = [
  { id: 1, name: 'O Alquimista',    price: 'R$ 45,00', priceNum: 45, img: IMG.alquimista, category: 'cocktails', tag: 'Cocktail', ingredients: ['Gin infusionado com botânicos', 'Xarope de hibisco', 'Sumo de limão siciliano'] },
  { id: 2, name: 'Jardim Noturno',  price: 'R$ 52,00', priceNum: 52, img: IMG.jardim,     category: 'cocktails', tag: 'Cocktail', ingredients: ['Xarope de hibisco', 'Sumo de limão siciliano', 'Clara de ovo'] },
  { id: 3, name: 'Fumo e Brasa',    price: 'R$ 58,00', priceNum: 58, img: IMG.fumo,       category: 'cocktails', tag: 'Cocktail', ingredients: ['Gin infusionado com botânicos', 'Xarope de hibisco', 'Clara de ovo'] },
  { id: 4, name: 'IPA Artesanal',   price: 'R$ 28,00', priceNum: 28, img: IMG.beers,      category: 'beers',     tag: 'Cerveja',  ingredients: ['Malte caramelo', 'Lúpulo Citra', 'Levedura belga'] },
  { id: 5, name: 'Vinho da Casa',   price: 'R$ 65,00', priceNum: 65, img: IMG.wines,      category: 'wines',     tag: 'Vinho',    ingredients: ['Uva Cabernet', 'Criado em barrica', 'Safra selecionada'] },
  { id: 6, name: 'Petisco Gourmet', price: 'R$ 38,00', priceNum: 38, img: IMG.snacks,     category: 'food',      tag: 'Petisco',  ingredients: ['Ingredientes frescos', 'Molho especial', 'Ervas finas'] },
]

const CATEGORIES = [
  { key: 'all',       label: 'Todos' },
  { key: 'cocktails', label: 'Cocktails' },
  { key: 'beers',     label: 'Cervejas' },
  { key: 'wines',     label: 'Vinhos' },
  { key: 'food',      label: 'Petiscos' },
]

const FEATURED = [
  { img: IMG.cocktails, title: 'Cocktails Assinados', desc: 'Drinks exclusivos do nosso bar.',    cat: 'cocktails' },
  { img: IMG.beers,     title: 'Cervejas Artesanais', desc: 'Sabores únicos e regionais.',        cat: 'beers' },
  { img: IMG.wines,     title: 'Vinhos Selecionados',  desc: 'Rótulos cuidadosamente escolhidos.', cat: 'wines' },
  { img: IMG.snacks,    title: 'Petiscos Gourmet',     desc: 'Para acompanhar qualquer drink.',   cat: 'food' },
]

/* ─── Toast notification ─── */
function Toast({ msg, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 2500)
    return () => clearTimeout(t)
  }, [onClose])
  return <div className={styles.toast}>🛒 {msg}</div>
}

/* ─── Cart Modal ─── */
function CartModal({ cart, onClose, onRemove, onClear }) {
  const total = cart.reduce((s, i) => s + i.priceNum * i.qty, 0)
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>🛒 Seu Pedido</h2>
          <button className={styles.modalClose} onClick={onClose}>✕</button>
        </div>
        {cart.length === 0
          ? <p className={styles.cartEmpty}>Carrinho vazio.</p>
          : <>
              <ul className={styles.cartList}>
                {cart.map(item => (
                  <li key={item.id} className={styles.cartItem}>
                    <img src={item.img} alt={item.name} className={styles.cartThumb} />
                    <div className={styles.cartInfo}>
                      <span className={styles.cartName}>{item.name}</span>
                      <span className={styles.cartMeta}>{item.price} × {item.qty}</span>
                    </div>
                    <button className={styles.cartRemove} onClick={() => onRemove(item.id)}>✕</button>
                  </li>
                ))}
              </ul>
              <div className={styles.cartFooter}>
                <span className={styles.cartTotal}>Total: <strong>R$ {total},00</strong></span>
                <button className={styles.confirmBtn} onClick={() => { alert('Pedido enviado! 🎉'); onClear(); onClose() }}>
                  Confirmar Pedido
                </button>
              </div>
            </>
        }
      </div>
    </div>
  )
}

/* ─── Item detail Modal ─── */
function ItemModal({ item, onClose, onAdd }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>✕</button>
        <img src={item.img} alt={item.name} className={styles.detailImg} />
        <div className={styles.detailBody}>
          <span className={styles.detailTag}>{item.tag}</span>
          <h2 className={styles.detailName}>{item.name}</h2>
          <p className={styles.detailPrice}>{item.price}</p>
          <ul className={styles.detailIngredients}>
            {item.ingredients.map(i => <li key={i}>• {i}</li>)}
          </ul>
          <button className={styles.confirmBtn} onClick={() => { onAdd(item); onClose() }}>
            Adicionar ao Pedido
          </button>
        </div>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════
   APP
════════════════════════════════════════ */
export default function App() {
  const [query, setQuery]           = useState('')
  const [activeCat, setActiveCat]   = useState('all')
  const [menuOpen, setMenuOpen]     = useState(false)
  const [cart, setCart]             = useState([])
  const [cartOpen, setCartOpen]     = useState(false)
  const [toast, setToast]           = useState(null)
  const [selectedItem, setItem]     = useState(null)
  const [showSearch, setShowSearch] = useState(false)

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    return ALL_ITEMS.filter(item => {
      const matchCat = activeCat === 'all' || item.category === activeCat
      const matchQ   = !q
        || item.name.toLowerCase().includes(q)
        || item.tag.toLowerCase().includes(q)
        || item.ingredients.some(i => i.toLowerCase().includes(q))
      return matchCat && matchQ
    })
  }, [query, activeCat])

  const addToCart = item => {
    setCart(prev => {
      const ex = prev.find(i => i.id === item.id)
      return ex
        ? prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...item, qty: 1 }]
    })
    setToast(`${item.name} adicionado!`)
  }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)

  const openCategory = cat => {
    setActiveCat(cat)
    setShowSearch(true)
    setMenuOpen(false)
    setTimeout(() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  const closeSearch = () => { setShowSearch(false); setQuery(''); setActiveCat('all') }

  /* close mobile menu on outside tap */
  useEffect(() => {
    if (!menuOpen) return
    const h = () => setMenuOpen(false)
    document.addEventListener('click', h)
    return () => document.removeEventListener('click', h)
  }, [menuOpen])

  return (
    <div className={styles.container}>

      {/* ══ HEADER ══ */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>local_bar</span>
          <span className={styles.logoText}>Bar Digital</span>
        </div>

        {/* Search bar */}
        <div className={styles.searchBar}>
          <svg className={styles.searchIcon} width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            className={styles.searchInput}
            placeholder="Buscar drink, cerveja, petisco…"
            value={query}
            onFocus={() => setShowSearch(true)}
            onChange={e => { setQuery(e.target.value); setShowSearch(true) }}
          />
          {query && <button className={styles.searchClear} onClick={() => setQuery('')}>✕</button>}
        </div>

        <div className={styles.headerRight}>
          <button className={styles.cartBtn} onClick={() => setCartOpen(true)}>
            <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </button>

          <button className={styles.burger} onClick={e => { e.stopPropagation(); setMenuOpen(v => !v) }}>
            <span className={menuOpen ? styles.burgerOpen1 : ''} />
            <span className={menuOpen ? styles.burgerOpen2 : ''} />
            <span className={menuOpen ? styles.burgerOpen3 : ''} />
          </button>
        </div>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          {CATEGORIES.slice(1).map(c => (
            <button key={c.key} className={styles.navBtn} onClick={() => openCategory(c.key)}>{c.label}</button>
          ))}
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className={styles.drawer} onClick={e => e.stopPropagation()}>
            {CATEGORIES.slice(1).map(c => (
              <button key={c.key} className={styles.drawerBtn} onClick={() => openCategory(c.key)}>{c.label}</button>
            ))}
          </div>
        )}
      </header>

      {/* ══ SEARCH / MENU SECTION ══ */}
      {showSearch && (
        <section id="search-section" className={styles.searchSection}>
          <div className={styles.pills}>
            {CATEGORIES.map(c => (
              <button key={c.key} className={`${styles.pill} ${activeCat === c.key ? styles.pillOn : ''}`} onClick={() => setActiveCat(c.key)}>
                {c.label}
              </button>
            ))}
          </div>

          {results.length === 0
            ? <p className={styles.noResults}>Nenhum resultado para <strong>"{query}"</strong></p>
            : (
              <div className={styles.grid}>
                {results.map(item => (
                  <div key={item.id} className={styles.card} onClick={() => setItem(item)}>
                    <div className={styles.cardImgWrap}>
                      <img src={item.img} alt={item.name} className={styles.cardImg} />
                      <span className={styles.cardTag}>{item.tag}</span>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardName}>{item.name}</h3>
                      <p className={styles.cardPrice}>{item.price}</p>
                    </div>
                    <button className={styles.addBtn} onClick={e => { e.stopPropagation(); addToCart(item) }}>+ Adicionar</button>
                  </div>
                ))}
              </div>
            )
          }

          <button className={styles.closeSearchBtn} onClick={closeSearch}>✕ Fechar cardápio</button>
        </section>
      )}

      {/* ══ LANDING CONTENT ══ */}
      {!showSearch && (
        <main className={styles.main}>
          {/* LEFT */}
          <section className={styles.leftCol}>
            <div className={styles.hero}>
              <img src={IMG.hero} alt="Bartender" className={styles.heroImg} />
              <div className={styles.heroOverlay} />
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>A Experiência<br />do Sabor</h1>
                <button className={styles.heroBtn} onClick={() => { setShowSearch(true); setTimeout(() => document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' }), 50) }}>
                  Ver Cardápio
                </button>
              </div>
            </div>

            <div className={styles.catSection}>
              <h2 className={styles.sectionTitle}>Categories</h2>
              <div className={styles.catGrid}>
                {[
                  { img: IMG.cocktails, title: 'Cocktails Assinados', desc: 'Explore a nossa seleção de drinks exclusivos.', cat: 'cocktails' },
                  { img: IMG.beers,     title: 'Cervejas Artesanais', desc: 'Descubra sabores únicos e regionais.',          cat: 'beers' },
                ].map(c => (
                  <div key={c.cat} className={styles.catCard} onClick={() => openCategory(c.cat)}>
                    <img src={c.img} alt={c.title} className={styles.catImg} />
                    <div className={styles.catOverlay}>
                      <h3 className={styles.catTitle}>{c.title}</h3>
                      <p className={styles.catDesc}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section className={styles.rightCol}>
            <div className={styles.featGrid}>
              {FEATURED.map(f => (
                <div key={f.cat} className={styles.featCard} onClick={() => openCategory(f.cat)}>
                  <img src={f.img} alt={f.title} className={styles.featImg} />
                  <div className={styles.featOverlay}>
                    <h4 className={styles.featTitle}>{f.title}</h4>
                    <p className={styles.featDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.specialsSection}>
              <h2 className={styles.sectionTitle}>Chef's Specials</h2>
              <div className={styles.specialsGrid}>
                {ALL_ITEMS.filter(i => i.category === 'cocktails').map(item => (
                  <div key={item.id} className={styles.special} onClick={() => setItem(item)}>
                    <div className={styles.specialImgWrap}>
                      <img src={item.img} alt={item.name} className={styles.specialImg} />
                    </div>
                    <h4 className={styles.specialName}>{item.name}</h4>
                    <p className={styles.specialPrice}>{item.price}</p>
                    <ul className={styles.specialIngr}>
                      {item.ingredients.map(i => <li key={i}>• {i}</li>)}
                    </ul>
                    <button className={styles.orderBtn} onClick={e => { e.stopPropagation(); addToCart(item) }}>
                      Order Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ══ FOOTER ══ */}
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <div className={styles.footerItem}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>Location: Citsirwsy<br />Rome — LK-K85</span>
          </div>
          <div className={styles.footerItem}>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>Horário: Seg–Sáb<br />07:00 às 18:00</span>
          </div>
        </div>
        <div className={styles.footerSocial}>
          {['FB','TW','IG','YT'].map(s => <a key={s} href="#" className={styles.socialLink}>{s}</a>)}
        </div>
        <div className={styles.footerLegal}>
          <a href="#" className={styles.legalLink}>Termos</a>
          <a href="#" className={styles.legalLink}>Privacidade</a>
        </div>
      </footer>

      {/* ══ OVERLAYS ══ */}
      {cartOpen     && <CartModal cart={cart} onClose={() => setCartOpen(false)} onRemove={id => setCart(p => p.filter(i => i.id !== id))} onClear={() => setCart([])} />}
      {selectedItem && <ItemModal item={selectedItem} onClose={() => setItem(null)} onAdd={addToCart} />}
      {toast        && <Toast msg={toast} onClose={() => setToast(null)} />}
    </div>
  )
}
