/* ECODRY — application logic */
(function () {
  'use strict';
  const D = window.ECODRY, A = window.Art;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const money = n => '₹' + n.toLocaleString('en-IN');
  const byId = id => D.products.find(p => p.id === id);
  const catName = k => (D.categories.find(c => c.key === k) || {}).name || '';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = typeof gsap !== 'undefined';
  const hasST = hasGSAP && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };

  const ICON = {
    bag: '<svg viewBox="0 0 24 24"><path d="M5.5 8h13l-1 12h-11z"/><path d="M9 8V6.5a3 3 0 016 0V8"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.6a4.3 4.3 0 017.5 2.2C19.5 15.4 12 20 12 20z"/></svg>',
    arrow: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowLeft: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    fb: '<svg viewBox="0 0 24 24"><path d="M14 8.5V7c0-.7.3-1 1-1h2V3h-3a4 4 0 00-4 4v1.5H7V12h3v9h4v-9h2.7l.5-3.5z"/></svg>',
    yt: '<svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 001.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8zM10 15V9l5.2 3z"/></svg>',
    ig: '<svg viewBox="0 0 24 24"><path d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm0 1.8A2.7 2.7 0 004.8 7.5v9a2.7 2.7 0 002.7 2.7h9a2.7 2.7 0 002.7-2.7v-9a2.7 2.7 0 00-2.7-2.7zM12 7.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm0 1.8a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8zm4.6-3.1a1 1 0 110 2 1 1 0 010-2z"/></svg>'
  };
  const socials = () => `<div class="socials"><a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">${ICON.fb}</a><a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">${ICON.yt}</a><a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a></div>`;

  /* ---------------- Toast ---------------- */
  let toastT;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2400);
  }

  /* ---------------- Loader — fast skip, non-blocking ---------- */
  function runLoader() {
    const L = $('#loader');
    const finish = () => {
      document.body.classList.remove('is-loading');
      if (L) {
        L.classList.add('done');
        L.style.pointerEvents = 'none';
        setTimeout(() => { if (L.parentNode) L.remove(); }, 300);
      }
      const hero = $('#hero');
      if (hero) hero.classList.add('ready');
      animateHeroIn();
    };
    if (reduce) { finish(); return; }
    setTimeout(finish, 400);
    if (L) L.addEventListener('click', finish);
  }

  /* ---------------- Hero — cinematic dark style ---------------- */
  let heroI = 0, heroTimer;
  function renderHero() {
    const n = D.hero.length;
    $('#hero').innerHTML = `
      <div class="hero-dark-bg" aria-hidden="true"></div>
      ${D.hero.map((h, i) => {
        const img = D.productImages[h.id] || 'p1.png';
        return `<div class="hero-slide-bg ${i===0?'on':''}" style="background-image:url('js/assets/${img}')" aria-hidden="true"></div>`;
      }).join('')}
      <div class="hero-dim" aria-hidden="true"></div>
      <button class="hero-nav prev" id="heroPrev" aria-label="Previous slide">${ICON.arrow}</button>
      <button class="hero-nav next" id="heroNext" aria-label="Next slide">${ICON.arrow}</button>
      <div class="hero-inner wrap">
        <div class="hero-copy-wrap">
          ${D.hero.map((h, i) => `
            <div class="hero-slide ${i===0?'on':''}" data-slide="${i}">
              <p class="hero-eye">Powered by sun &middot; Dried by nature</p>
              <h1 class="hero-h">${h.h.map(l=>`<span class="hln"><span>${l}</span></span>`).join('')}</h1>
              <p class="hero-p">${h.p.substring(0, 100)}…</p>
              <div class="hero-acts desktop-only">
                <a class="btn btn-amber hero-shop-btn" href="#featured">Shop now <span class="arr">${ICON.arrow}</span></a>
                <a class="btn btn-glass" href="#about">Our story ${ICON.arrow}</a>
              </div>
            </div>`).join('')}
        </div>
        <div class="hero-right">
          <div class="hero-img-ring" aria-hidden="true"></div>
          <div class="stage" id="stage">
            ${D.hero.map((h, i) => {
              const img = D.productImages[h.id] || 'p1.png';
              return `<div class="hp" data-i="${i}" data-pos="${i}" role="button" tabindex="0" aria-label="Shop Now · ${byId(h.id).name}">
                <img src="js/assets/${img}" alt="${byId(h.id).name}" class="hero-pimg" loading="${i===0?'eager':'lazy'}">
              </div>`;
            }).join('')}
          </div>
        </div>
        <div class="hero-acts mobile-acts">
          <a class="btn btn-amber hero-shop-btn" href="#featured">Shop now <span class="arr">${ICON.arrow}</span></a>
          <a class="btn btn-glass" href="#about">Our story ${ICON.arrow}</a>
        </div>
      </div>
      <div class="hero-pills" aria-hidden="true"><span>100% Natural</span><span>No Preservatives</span><span>Rich in Fibre</span></div>
      <div class="hero-foot">
        <div class="sun-badge"><i></i><div><b>Solar Sun-Dried</b><span>Never baked, never rushed</span></div></div>
        ${socials()}
      </div>
      <div class="hero-dots" role="tablist">${D.hero.map((h,i)=>`<button class="hdot ${i===0?'on':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('')}</div>
      <div class="scroll-cue" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg></div>`;

    const hero = $('#hero');
    const setHero = idx => {
      heroI = (idx + n) % n;
      hero.style.setProperty('--wave', D.hero[heroI].wave);
      hero.style.setProperty('--wave2', D.hero[heroI].wave2);
      $$('.hero-slide-bg', hero).forEach((e,k) => e.classList.toggle('on', k===heroI));
      $$('.hero-slide', hero).forEach((e,k) => e.classList.toggle('on', k===heroI));
      $$('.hdot', hero).forEach((e,k) => e.classList.toggle('on', k===heroI));
      $$('.hp', hero).forEach((e,k) => e.dataset.pos = (k - heroI + n) % n);
    };
    setHero(0);
    const auto = () => {
      clearInterval(heroTimer);
      if (!reduce) heroTimer = setInterval(() => {
        const homeV = $('[data-view=home]');
        const isHome = !homeV || homeV.classList.contains('active');
        if (!document.hidden && isHome) setHero(heroI + 1);
      }, 4500);
    };
    auto();

    const prevB = $('#heroPrev', hero);
    if (prevB) prevB.onclick = () => { setHero(heroI - 1); auto(); };
    const nextB = $('#heroNext', hero);
    if (nextB) nextB.onclick = () => { setHero(heroI + 1); auto(); };

    $$('.hero-shop-btn', hero).forEach(b => {
      b.onclick = (e) => {
        e.preventDefault();
        $('#featured')?.scrollIntoView({ behavior: 'smooth' });
      };
    });

    $('.hero-dots', hero).addEventListener('click', e => { const b = e.target.closest('[data-i]'); if (b) { setHero(+b.dataset.i); auto(); } });
    const cue = $('.scroll-cue', hero);
    if (cue) { cue.style.cursor = 'pointer'; cue.onclick = () => $('#featured').scrollIntoView({ behavior: 'smooth' }); }
    $('#stage').addEventListener('click', e => { const hp = e.target.closest('.hp'); if (!hp) return; if (hp.dataset.pos==='0') openQuick(D.hero[heroI].id); else setHero(+hp.dataset.i); auto(); });
    $('#stage').addEventListener('keydown', e => { if (e.key==='Enter') e.target.click(); });
    let sx = null;
    $('#stage').addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive:true});
    $('#stage').addEventListener('touchend', e => { if (sx===null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx)>40) { setHero(heroI+(dx<0?1:-1)); auto(); } sx=null; });
    window.addEventListener('keydown', e => {
      if (!$('[data-view=home]').classList.contains('active') || e.target.matches('input,textarea')) return;
      if (e.key==='ArrowRight') { setHero(heroI+1); auto(); } if (e.key==='ArrowLeft') { setHero(heroI-1); auto(); }
    });
  }

  /* GSAP hero entrance animation — called after loader finishes */
  function animateHeroIn() {
    if (!hasGSAP || reduce) return;
    const slide = $('.hero-slide.on');
    if (!slide) return;
    const lines = $$('.hln span', slide);
    const right = $('.hero-right');
    const tl = gsap.timeline();
    if (lines.length) tl.from(lines, { yPercent: 110, opacity: 0, stagger: .1, duration: .85, ease: 'power3.out' });
    if (right) tl.from(right, { x: 60, opacity: 0, duration: .9, ease: 'power2.out' }, '-=0.5');
  }

  /* ---------------- How to use ---------------- */
  function renderHow() {
    const howImg = D.productImages['suvai6'] || 'p6.png';
    $('#how').innerHTML = `
      <div class="how-sticky">
        <div class="how-head">
          <p class="eyebrow">Traditional Preparation</p>
          <h2>From pouch to glass in 4 easy steps</h2>
        </div>
        <div class="how-ring"></div>
        <div class="how-pouch" id="howPouch"><img src="js/assets/${howImg}" alt="Hi Suvai Health Mix" class="how-pimg"></div>
        ${D.steps.map((s, i) => `<article class="step ${s.side}" data-i="${i}"><div class="th">${A.stepArt(s.art)}</div><div class="step-content"><small class="step-badge">STEP ${s.n}</small><h4>${s.t}</h4><p>${s.d}</p></div></article>`).join('')}
        <div class="how-bar"><i></i></div>
      </div>`;
  }
  const TH = [.08, .28, .52, .76];
  function updateHow() {
    const sec = $('#how'); if (!sec || !$('[data-view=home]').classList.contains('active')) return;
    const r = sec.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    const total = sec.offsetHeight - vh;
    const p = total <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / total));
    sec.style.setProperty('--p', p);
    const pouch = $('#howPouch');
    if (!pouch) return;
    pouch.style.setProperty('--rot', (-9 + p * 18).toFixed(2) + 'deg');
    pouch.style.setProperty('--sc', (.92 + Math.sin(p * Math.PI) * .12).toFixed(3));
    
    const vw = window.innerWidth || 1200;
    if (vw <= 860) {
      // Mobile: reveal the active step card based on current scroll position
      let activeIdx = 0;
      if (p >= 0.72) activeIdx = 3;
      else if (p >= 0.48) activeIdx = 2;
      else if (p >= 0.24) activeIdx = 1;
      else activeIdx = 0;
      $$('.step', sec).forEach((s, i) => s.classList.toggle('on', i === activeIdx));
    } else {
      // Desktop: turn on each step as progress crosses threshold
      $$('.step', sec).forEach((s, i) => s.classList.toggle('on', p > TH[i]));
    }
    const bar = $('.how-bar i', sec);
    if (bar) bar.style.width = (p * 100) + '%';
  }

  /* ---------------- Categories ---------------- */
  function renderCats() {
    const names = {
      flour: ['Karuppu Gothumai Flour', 'Navadhaniya Dosa Mix', 'Black Rice Dosa'],
      health: ['24 Grains Health Mix', 'Sprouted Grain Malt', 'Nutritious Aval'],
      porridge: ['16 Variety Porridge', 'Heritage Rice Porridge', 'Ancient Tamil Kanji'],
      aval: ['Karuppu Kavuni Aval', 'Native Black Rice Flakes', 'Instant Healthy Meal']
    };
    const catImages = { flour: 'p1.png', health: 'p6.png', porridge: 'p3.png', aval: 'p4.png' };
    $('#cats').innerHTML = `
      <div class="sec-head reveal"><div><p class="eyebrow">Shop by category</p><h2>Our Traditional Categories</h2></div><a class="link-arrow" href="#products">View all products ${ICON.arrow}</a></div>
      <div class="cat-grid">
        ${D.categories.map((c, i) => {
          const img = catImages[c.key] || 'p1.png';
          const pNames = names[c.key] || ['Traditional Blend', 'Authentic Recipe'];
          return `<a class="cat ${c.hue} reveal" style="--d:${i * .12}s" href="#products-${c.key}">
            <div class="panel">
              <div class="cp"><img src="js/assets/${img}" alt="${c.name}" class="cat-pimg"></div>
              <div class="meta">
                <h3>${c.name}</h3>
                <p>${pNames.join(' · ')}</p>
              </div>
            </div>
            <span class="go">${ICON.arrow}</span>
          </a>`;
        }).join('')}
      </div>`;
  }

  /* ---------------- Product cards ---------------- */
  const wish = new Set(store.get('ecodry_wish', []));
  function pcard(p, i = 0) {
    const img = D.productImages[p.id] || 'p1.png';
    return `<article class="pcard reveal" style="--d:${(i % 3) * .1}s" data-id="${p.id}">
      <div class="p-top"><span class="p-tag">${catName(p.cat)}</span><button class="heart ${wish.has(p.id) ? 'on' : ''}" aria-label="Save ${p.name}" aria-pressed="${wish.has(p.id)}">${ICON.heart}</button></div>
      <div class="p-media" data-s="0">
        <img src="js/assets/${img}" alt="${p.name}" class="product-img" loading="lazy">
      </div>
      <div class="p-info">
        <h3 class="p-name">${p.name}</h3>
        <p class="p-sub">${p.weight} · 100% Traditional</p>
        <div class="p-row"><span class="price">${money(p.price)}</span><button class="add" data-add="${p.id}">${ICON.bag}Add to cart</button></div>
      </div>
    </article>`;
  }
  function renderFeatured() {
    const list = D.products;
    $('#featured').innerHTML = `
      <div class="sec-head reveal"><div><p class="eyebrow">Our best sellers</p><h2>Our Featured Traditional Foods</h2></div><a class="link-arrow" href="#products">View all products ${ICON.arrow}</a></div>
      <div class="grid">${list.map((p, i) => pcard(p, i)).join('')}</div>`;
  }
  function slideTo(card, s) {
    return;
  }

  /* ---------------- Showcase (Continuous Slow Single-Row Marquee) ---------------- */
  function renderShowcase() {
    // Duplicate products for a seamless, continuous infinite loop in a single row
    const loopList = [...D.products, ...D.products];
    $('#showcase').innerHTML = `
      <div class="showcase-head wrap">
        <div>
          <p class="eyebrow">The full collection</p>
          <h2 class="serif">Every pouch, a story</h2>
        </div>
        <div class="showcase-sub-wrap">
          <p class="showcase-sub">Traditional health mix & porridge collection — swipe or explore.</p>
          <div class="showcase-nav-btns">
            <button type="button" class="s-arr prev" id="scPrev" aria-label="Previous">${ICON.arrowLeft}</button>
            <button type="button" class="s-arr next" id="scNext" aria-label="Next">${ICON.arrow}</button>
          </div>
        </div>
      </div>
      <div class="showcase-pin" id="showcasePin">
        <div class="showcase-track" id="showcaseTrack">
          ${loopList.map((p, i) => {
            const img = D.productImages[p.id] || 'p1.png';
            return `<div class="showcase-card" data-id="${p.id}">
              <div class="showcase-frame">
                <img src="js/assets/${img}" alt="${p.name}" loading="lazy">
                <div class="showcase-grad"></div>
              </div>
              <div class="showcase-meta">
                <span class="eyebrow">${catName(p.cat)}</span>
                <h3>${p.name}</h3>
                <span class="showcase-price">${money(p.price)} · ${p.weight}</span>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>`;

    const track = $('#showcaseTrack');
    const pBtn = $('#scPrev'), nBtn = $('#scNext');
    if (track) {
      let isPaused = false;
      let animId = null;
      let resumeTimer = null;

      track.addEventListener('mouseenter', () => isPaused = true);
      track.addEventListener('mouseleave', () => isPaused = false);
      track.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
      track.addEventListener('touchend', () => {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => isPaused = false, 2000);
      }, { passive: true });

      let lastT = performance.now();
      function marqueeLoop(now) {
        const dt = Math.min(now - lastT, 100);
        lastT = now;
        if (!isPaused && !animId && track) {
          // Slow continuous movement: ~36px per second
          track.scrollLeft += (36 * dt) / 1000;
          const half = track.scrollWidth / 2;
          if (half > 0) {
            if (track.scrollLeft >= half) {
              track.scrollLeft -= half;
            } else if (track.scrollLeft <= 0) {
              track.scrollLeft += half;
            }
          }
        }
        requestAnimationFrame(marqueeLoop);
      }
      requestAnimationFrame(marqueeLoop);

      const getScrollAmount = () => {
        const card = $('.showcase-card', track);
        const gap = window.innerWidth <= 1024 ? 14 : 24;
        return card ? (card.offsetWidth + gap) : (window.innerWidth <= 640 ? 224 : 310);
      };

      function animateScroll(delta) {
        if (!track) return;
        isPaused = true;
        if (animId) cancelAnimationFrame(animId);
        clearTimeout(resumeTimer);

        const half = track.scrollWidth / 2;
        if (half > 0) {
          if (delta < 0 && track.scrollLeft <= 10) {
            track.scrollLeft += half;
          } else if (delta > 0 && track.scrollLeft >= half - 10) {
            track.scrollLeft -= half;
          }
        }

        const startPos = track.scrollLeft;
        const duration = 320;
        const startTime = performance.now();

        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const ease = 1 - Math.pow(1 - progress, 3);
          let current = startPos + (delta * ease);

          if (half > 0) {
            if (current >= half) {
              current -= half;
            } else if (current < 0) {
              current += half;
            }
          }
          track.scrollLeft = current;

          if (progress < 1) {
            animId = requestAnimationFrame(step);
          } else {
            animId = null;
            resumeTimer = setTimeout(() => { isPaused = false; }, 2500);
          }
        }
        animId = requestAnimationFrame(step);
      }

      const scrollPrev = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        animateScroll(-getScrollAmount());
      };

      const scrollNext = (e) => {
        if (e) { e.preventDefault(); e.stopPropagation(); }
        animateScroll(getScrollAmount());
      };

      if (pBtn && nBtn) {
        pBtn.addEventListener('click', scrollPrev);
        nBtn.addEventListener('click', scrollNext);
      }
    }
  }

  /* ---------------- Shop page ---------------- */
  const shop = { cat: 'all', sort: 'feat' };
  function renderShopChrome() {
    $('#chips').innerHTML = [{ key: 'all', name: 'All' }, ...D.categories].map(c => `<button class="chip ${shop.cat === c.key ? 'on' : ''}" data-cat="${c.key}">${c.name}</button>`).join('');
  }
  function renderShop() {
    let list = D.products.filter(p => shop.cat === 'all' || p.cat === shop.cat);
    if (shop.sort === 'low') list.sort((a, b) => a.price - b.price);
    if (shop.sort === 'high') list.sort((a, b) => b.price - a.price);
    if (shop.sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
    $('#shopGrid').innerHTML = list.map((p, i) => pcard(p, i)).join('');
    $('#shopEmpty').hidden = list.length > 0;
    renderShopChrome();
    observeReveal();
  }

  /* ---------------- Milestones & visit ---------------- */
  function renderMiles(el) {
    if (!el) return;
    const m = D.milestones;
    el.innerHTML = `
      <div class="head reveal"><p class="eyebrow amber">Our milestones</p><h2>Recognition that <em>grew in the sun</em></h2></div>
      <div class="m-stage">
        <div class="rays"></div>
        <div class="m-item l reveal"><div class="arch-img" data-par="-1">${A.sceneAward()}</div>
          <div class="m-cap"><span class="tag">★ ${m[0].tag}</span><h3>${m[0].t}</h3><p>${m[0].d}</p></div></div>
        <div class="orb" aria-hidden="true"></div>
        <div class="m-item r reveal" style="--d:.15s"><div class="arch-img" data-par="1">${A.sceneExpo()}</div>
          <div class="m-cap"><span class="tag">★ ${m[1].tag}</span><h3>${m[1].t}</h3><p>${m[1].d}</p></div></div>
      </div>`;
  }
  function renderVisit(el) {
    if (!el) return;
    el.innerHTML = `
      <div class="v-stage">
        <div class="v-img reveal">${A.sceneGreenhouse()}</div>
        <div class="glass reveal" style="--d:.1s">
          <p class="eyebrow">Our story</p>
          <h2>Grown in sunshine, dried by it too</h2>
          <p>Ecodry is a natural food processing company specialising in high-quality dehydrated fruits, vegetables, herbs and leafy greens. Using eco-friendly solar dryers, we preserve natural taste, colour and nutrition — delivering clean food to your kitchen.</p>
          <ul class="bul">
            <li><i></i><div><b>Solar sun-dried</b><span>Gentle sunlight and solar heat, never harsh flame.</span></div></li>
            <li><i></i><div><b>Chemical-free</b><span>No chemicals, colours or preservatives. Ever.</span></div></li>
            <li><i></i><div><b>Nutrients kept in</b><span>Slow drying locks in colour, aroma and goodness.</span></div></li>
          </ul>
        </div>
        <a class="mapcard reveal" style="--d:.2s" href="${D.mapsUrl}" target="_blank" rel="noopener" aria-label="Open Ecodry location in Maps">
          <div class="map">${A.sceneMap()}<span class="map-chip">Open in Maps ↗</span></div>
          <div class="pin"><i><svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 110-6 3 3 0 010 6z"/></svg></i><div><small>Visit the farm</small><b>${D.place}</b></div><span class="btn btn-dark">Directions →</span></div>
        </a>
      </div>`;
  }

  /* ---------------- About ---------------- */
  function renderAbout() {
    const I = {
      sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
      leaf: '<svg viewBox="0 0 24 24"><path d="M5 19C4 9 10 4 20 4c0 10-5 16-15 15zM5 19l8-8"/></svg>',
      heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0112 7.6a4.3 4.3 0 017.5 2.2C19.5 15.4 12 20 12 20z"/></svg>'
    };
    const pill = [
      ['sun', 'Ancient Tamil Recipes', 'Crafted with authentic multigrain health mix recipes handed down through generations.'],
      ['leaf', '100% Chemical-Free', 'Zero artificial preservatives, zero refined sugar, and zero additives — pure natural food.'],
      ['heart', 'From Pettai, Tirunelveli', 'Stone-milled fresh in Tirunelveli and packed hygienically for families across India.']
    ];
    $('#pillars').innerHTML = pill.map((p, i) => `<div class="pillar reveal" style="--d:${i * .1}s"><div class="ic">${I[p[0]]}</div><h3>${p[1]}</h3><p>${p[2]}</p></div>`).join('');
    $('#stats').innerHTML = `<div class="in">${[[24, '+', 'Grains & Millets'], [100, '%', 'Traditional Tamil Foods'], [0, '%', 'Preservatives or Chemicals'], [5000, '+', 'Happy Families']].map(s => `<div class="reveal"><b data-count="${s[0]}" data-suf="${s[1]}">0${s[1]}</b><span>${s[2]}</span></div>`).join('')}</div>`;
    $('#timeline').innerHTML = `<p class="eyebrow" style="text-align:center">Our heritage</p><h2 class="reveal">Rooted in Tirunelveli</h2><div class="tl">${D.more_milestones.map((m, i) => `<div class="reveal" style="--d:${i * .1}s"><b>${m.y}</b><h4>${m.t}</h4><p>${m.d}</p></div>`).join('')}</div>`;
    renderMiles($('#milesAbout')); renderVisit($('#visitAbout'));
  }
  function runCounters() {
    const vh = window.innerHeight || 800;
    $$('[data-count]').forEach(el => {
      if (el.dataset.done) return;
      const r = el.getBoundingClientRect(); if (r.top > vh || r.bottom < 0) return;
      el.dataset.done = 1;
      const to = +el.dataset.count, suf = el.dataset.suf, t0 = performance.now(), dur = 1600;
      const tick = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = Math.round(to * e).toLocaleString('en-IN') + suf; if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
  }

  /* ---------------- Footer ---------------- */
  function renderFooter() {
    const pol = Object.keys(D.policies);
    $('#footer').innerHTML = `
      <div class="f-sun" id="fSun"></div>
      <svg class="f-wave" viewBox="0 0 1440 130" preserveAspectRatio="none" aria-hidden="true"><path class="a" d="M0 60 C240 10 520 100 800 56 S1240 20 1440 54 V130 H0Z"/><path class="b" d="M0 82 C260 34 540 112 820 78 S1240 50 1440 76 V130 H0Z"/></svg>
      <div class="f-body"><div class="f-in">
        <div class="cta-row"><h2>Bring traditional wellness home.</h2><a class="btn btn-amber" href="#products">Shop now ${ICON.arrow}</a></div>
        <div class="f-cols">
          <div class="f-brand">
            <span class="lg"><img src="js/assets/logo.png" alt="Hi Suvai" style="width:48px;height:48px;object-fit:contain;border-radius:10px"></span>
            <p>Hi Suvai offers traditional health mix, sprouted grain porridge, and ancient flours crafted with heritage grains from Tamil Nadu.</p>${socials()}</div>
          <div class="f-col"><h4>Shop</h4><ul>${D.categories.map(c => `<li><a href="#products-${c.key}">${c.name}</a></li>`).join('')}<li><a href="#products">All products</a></li></ul></div>
          <div class="f-col"><h4>Help & Policies</h4><ul>${pol.map(p => `<li><a href="#" data-policy="${p}">${p}</a></li>`).join('')}</ul></div>
          <div class="f-col"><h4>Get in touch</h4><ul>
            <li class="ct"><svg viewBox="0 0 24 24"><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg><a href="${D.mapsUrl}" target="_blank" rel="noopener">${D.address}</a></li>
            <li class="ct"><svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1z"/></svg><a href="tel:${D.tel}">${D.phone}</a></li>
            <li class="ct"><svg viewBox="0 0 24 24"><path d="M4 20l1.3-4.2A8 8 0 1112 20a8 8 0 01-3.6-.9z"/></svg><a href="https://wa.me/${D.wa}" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
            <li class="ct"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><a href="mailto:${D.email}">${D.email}</a></li></ul></div>
        </div>
        <div class="f-bottom"><span>© ${new Date().getFullYear()} Hi Suvai. All rights reserved.</span><span>${D.address}</span></div>
      </div></div>`;
  }

  /* ---------------- Cart ---------------- */
  let cart = store.get('ecodry_cart', []);
  const saveCart = () => store.set('ecodry_cart', cart);
  const count = () => cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = () => cart.reduce((s, i) => s + byId(i.id).price * i.qty, 0);
  function updateBag(bump) {
    const b = $('#bagCount'); b.textContent = count(); b.classList.toggle('on', count() > 0);
    if (bump) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
  }
  function addToCart(id, q = 1) {
    const it = cart.find(i => i.id === id); if (it) it.qty += q; else cart.push({ id, qty: q });
    saveCart(); updateBag(true); renderCart();
    toast(`${byId(id).name} added to cart`);
  }
  function renderCart() {
    const body = $('#cartBody'), foot = $('#cartFoot');
    if (!cart.length) {
      body.innerHTML = `<div class="empty-cart"><p class="serif">Your cart is empty</p><p>Add a pouch of sunshine to get started.</p></div>`;
      foot.innerHTML = `<a class="btn btn-dark" style="width:100%;justify-content:center" href="#products" data-close-go>Browse products</a>`; return;
    }
    body.innerHTML = cart.map(i => { const p = byId(i.id); const ciImg = D.productImages[p.id] || 'p1.png'; return `<div class="ci" data-id="${p.id}">
      <div class="t"><img src="js/assets/${ciImg}" alt="${p.name}" style="width:52px;height:62px;object-fit:cover;border-radius:10px"></div>
      <div><b>${p.name}</b><small>${p.weight} · ${money(p.price)}</small>
        <div class="qty"><button data-q="-1" aria-label="Decrease">−</button><span>${i.qty}</span><button data-q="1" aria-label="Increase">+</button></div></div>
      <div class="rm"><b>${money(p.price * i.qty)}</b><br><button data-rm>Remove</button></div></div>`; }).join('');
    const sub = subtotal(), free = 499, ship = sub >= free ? 0 : 49;
    foot.innerHTML = `
      <div class="free-bar"><i style="width:${Math.min(100, sub / free * 100)}%"></i></div>
      <p class="free-note">${sub >= free ? '🎉 You\'ve unlocked free shipping' : `Add ${money(free - sub)} more for free shipping`}</p>
      <div class="sum"><span>Subtotal</span><span>${money(sub)}</span></div>
      <div class="sum"><span>Shipping</span><span>${ship ? money(ship) : 'Free'}</span></div>
      <div class="sum tot"><span>Total</span><span>${money(sub + ship)}</span></div>
      <button class="btn btn-dark" id="checkoutBtn" style="width:100%;justify-content:center">Checkout</button>`;
  }
  function checkout() {
    const sub = subtotal(), ship = sub >= 499 ? 0 : 49;
    const u = store.get('ecodry_user', {});
    openModal(`<form class="form" id="coForm"><h3 class="serif">Almost there</h3><p class="s">Confirm your details and we'll complete the order with you on WhatsApp.</p>
      <label>Full name</label><input name="name" required value="${u.name || ''}" autocomplete="name">
      <label>Phone</label><input name="phone" required inputmode="tel" pattern="[0-9+ ]{8,15}" autocomplete="tel">
      <label>Delivery address</label><textarea name="addr" rows="3" required autocomplete="street-address"></textarea>
      <button class="btn btn-dark" type="submit">Place order · ${money(sub + ship)}</button></form>`, 'sm');
    $('#coForm').addEventListener('submit', e => {
      e.preventDefault();
      const f = new FormData(e.target);
      const lines = cart.map(i => `• ${byId(i.id).name} × ${i.qty} = ${money(byId(i.id).price * i.qty)}`).join('\n');
      const msg = `Hello Ecodry! I'd like to order:\n${lines}\n\nSubtotal: ${money(sub)}\nShipping: ${ship ? money(ship) : 'Free'}\nTotal: ${money(sub + ship)}\n\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nAddress: ${f.get('addr')}`;
      window.open(`https://wa.me/${D.wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
      cart = []; saveCart(); updateBag(); renderCart(); closeAll(); toast('Order sent — thank you!');
    });
  }

  /* ---------------- Overlays ---------------- */
  const open = id => { const o = $(id); o.hidden = false; document.body.style.overflow = 'hidden'; return o; };
  function closeAll() {
    $$('.overlay').forEach(o => o.hidden = true);
    document.body.style.overflow = document.body.classList.contains('is-loading') ? 'hidden' : '';
  }
  function openModal(html, size) { $('#modal').className = 'modal ' + (size || ''); $('#modalBody').innerHTML = html; open('#modalOverlay'); }
  function openQuick(id) {
    const p = byId(id);
    const img = D.productImages[id] || 'p1.png';
    openModal(`<div class="qv"><div class="L"><img src="js/assets/${img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;padding:12px;display:block"></div><div class="R">
      <p class="eyebrow">${catName(p.cat)}</p><h2>${p.name}</h2><p class="lead" style="font-size:13px">${p.blurb}</p>
      <div class="pr">${money(p.price)} <small style="font-weight:400;color:var(--muted)">· ${p.weight}</small></div>
      <ul>${p.benefits.map(b => `<li>${b}</li>`).join('')}</ul>${A.nutri(p)}
      <div class="acts"><div class="qty" id="qvQty"><button data-d="-1" aria-label="Decrease">−</button><span>1</span><button data-d="1" aria-label="Increase">+</button></div>
      <button class="add" id="qvAdd" style="padding:12px 20px">${ICON.bag}Add to cart</button>
      <a class="btn btn-ghost" style="padding:12px 16px" target="_blank" rel="noopener" href="https://wa.me/${D.wa}?text=${encodeURIComponent('Hi Suvai, I am interested in ' + p.name)}">WhatsApp</a></div></div></div>`);
    let q = 1; const span = $('#qvQty span');
    $('#qvQty').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; q = Math.max(1, Math.min(20, q + +b.dataset.d)); span.textContent = q; });
    $('#qvAdd').addEventListener('click', () => { addToCart(id, q); closeAll(); });
  }
  function openAccount() {
    const u = store.get('ecodry_user', null);
    if (u) {
      openModal(`<div class="form"><h3 class="serif">Hello, ${u.name.split(' ')[0]}</h3><p class="s">${u.email}</p>
        <p style="font-size:13px;color:var(--ink-2)">You have ${wish.size} saved product${wish.size === 1 ? '' : 's'} and ${count()} item${count() === 1 ? '' : 's'} in your cart.</p>
        <button class="btn btn-dark" id="signOut">Sign out</button></div>`, 'sm');
      $('#signOut').onclick = () => { store.set('ecodry_user', null); $('#userDot').classList.remove('on'); closeAll(); toast('Signed out'); };
      return;
    }
    let mode = 'in';
    const draw = () => {
      openModal(`<form class="form" id="authForm"><h3 class="serif">${mode === 'in' ? 'Welcome back' : 'Join Ecodry'}</h3><p class="s">${mode === 'in' ? 'Sign in to save favourites and speed up checkout.' : 'Create an account in a few seconds.'}</p>
        <div class="tabs"><button type="button" data-m="in" class="${mode === 'in' ? 'on' : ''}">Sign in</button><button type="button" data-m="up" class="${mode === 'up' ? 'on' : ''}">Sign up</button></div>
        ${mode === 'up' ? '<label>Full name</label><input name="name" required autocomplete="name">' : ''}
        <label>Email</label><input name="email" type="email" required autocomplete="email">
        <label>Password</label><input name="pw" type="password" required minlength="6" autocomplete="${mode === 'in' ? 'current-password' : 'new-password'}">
        <button class="btn btn-dark" type="submit">${mode === 'in' ? 'Sign in' : 'Create account'}</button></form>`, 'sm');
      $('.tabs').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { mode = b.dataset.m; draw(); } });
      $('#authForm').addEventListener('submit', e => {
        e.preventDefault(); const f = new FormData(e.target); const email = f.get('email');
        const name = f.get('name') || String(email).split('@')[0];
        store.set('ecodry_user', { name, email }); $('#userDot').classList.add('on'); closeAll(); toast(`Welcome, ${name}!`);
      });
    };
    draw();
  }
  function openSearch() {
    open('#searchOverlay'); const inp = $('#searchInput'); inp.value = ''; drawSearch(''); setTimeout(() => inp.focus(), 50);
  }
  function drawSearch(q) {
    q = q.trim().toLowerCase();
    const list = (q ? D.products.filter(p => (p.name + ' ' + catName(p.cat) + ' ' + p.blurb).toLowerCase().includes(q)) : D.products.slice(0, 6));
    $('#searchResults').innerHTML = list.length ? list.map(p => { const pImg = D.productImages[p.id] || 'p1.png'; return `<button class="sr" data-open="${p.id}"><span class="t"><img src="js/assets/${pImg}" alt="${p.name}" style="width:42px;height:42px;object-fit:cover;border-radius:8px"></span><span><b>${p.name}</b><span>${catName(p.cat)}</span></span><em>${money(p.price)}</em></button>`; }).join('') : `<p class="sp-empty">No powders match "${q}". Try "carrot" or "green".</p>`;
  }

  /* ---------------- Router ---------------- */
  const TITLES = { home: 'Hi Suvai | Traditional Health Mix & Nutritious Food Products', products: 'Products — Hi Suvai', about: 'About — Hi Suvai' };
  function route() {
    const parts = (location.hash.replace(/^#/, '') || '').split('-');
    let view = ['products', 'about'].includes(parts[0]) ? parts[0] : 'home';
    if (view === 'products') shop.cat = D.categories.some(c => c.key === parts[1]) ? parts[1] : 'all';
    $$('.view').forEach(v => v.classList.toggle('active', v.dataset.view === view));
    $$('.nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === view));
    document.title = TITLES[view];
    $('#nav').classList.remove('open'); $('#burger').setAttribute('aria-expanded', 'false');
    closeAll();
    if (view === 'products') renderShop();
    window.scrollTo(0, 0);
    requestAnimationFrame(() => { observeReveal(); onScroll(); if (hasST) ScrollTrigger.refresh(); });
  }

  /* ---------------- Scroll effects ---------------- */
  let io;
  function observeReveal() {
    if (typeof IntersectionObserver === 'undefined') {
      $$('.view.active .reveal, .site-footer .reveal').forEach(el => el.classList.add('in'));
      return;
    }
    if (!io) io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    $$('.view.active .reveal:not(.in), .site-footer .reveal:not(.in)').forEach(el => io.observe(el));
  }
  let tick = false;
  function onScroll() {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      tick = false;
      const sy = window.scrollY || 0;
      const vh = window.innerHeight || 800;
      $('#header')?.classList.toggle('scrolled', sy > 30);
      updateHow();
      $$('.view.active .m-stage').forEach(st => {
        const r = st.getBoundingClientRect(); const k = (r.top + r.height / 2 - vh / 2) / vh;
        $$('.arch-img', st).forEach(a => a.style.setProperty('--py', (k * 34 * +a.dataset.par).toFixed(1) + 'px'));
      });
      $$('.view.active .v-img').forEach(v => { const r = v.getBoundingClientRect(); const k = Math.min(1, Math.max(0, 1 - r.top / vh)); v.style.setProperty('--z', (1.02 + k * .08).toFixed(3)); });
      const f = $('#footer'); if (f) { const r = f.getBoundingClientRect(); const k = Math.min(1, Math.max(0, 1 - r.top / vh)); $('#fSun')?.style.setProperty('--sy', (70 - k * 90).toFixed(0) + 'px'); }
      runCounters();
    });
  }

  /* ---------------- Events ---------------- */
  function bind() {
    document.addEventListener('click', e => {
      const t = e.target;
      const add = t.closest('[data-add]');
      if (add) { e.preventDefault(); addToCart(add.dataset.add); add.classList.add('added'); setTimeout(() => add.classList.remove('added'), 900); return; }
      const heart = t.closest('.heart');
      if (heart) { const id = heart.closest('.pcard').dataset.id; wish.has(id) ? wish.delete(id) : wish.add(id); store.set('ecodry_wish', [...wish]); const on = wish.has(id); $$(`.pcard[data-id="${id}"] .heart`).forEach(h => { h.classList.toggle('on', on); h.setAttribute('aria-pressed', on); }); toast(on ? 'Saved to favourites' : 'Removed from favourites'); return; }
      const arrow = t.closest('.p-arrow');
      if (arrow) { const c = arrow.closest('.pcard'); slideTo(c, +$('.p-media', c).dataset.s + (arrow.classList.contains('next') ? 1 : -1)); return; }
      const media = t.closest('.p-media');
      if (media) { openQuick(media.closest('.pcard').dataset.id); return; }
      const chip = t.closest('.chip'); if (chip) { shop.cat = chip.dataset.cat; history.replaceState(null, '', shop.cat === 'all' ? '#products' : '#products-' + shop.cat); renderShop(); return; }
      const pol = t.closest('[data-policy]'); if (pol) { e.preventDefault(); openModal(`<div class="policy"><h3 class="serif">${pol.dataset.policy}</h3><p>${D.policies[pol.dataset.policy]}</p></div>`, 'sm'); return; }
      const op = t.closest('[data-open]'); if (op) { closeAll(); openQuick(op.dataset.open); return; }
      if (t.closest('[data-close]') || t.classList.contains('overlay')) { closeAll(); return; }
      if (t.closest('[data-close-go]')) { closeAll(); return; }
      const ci = t.closest('.ci');
      if (ci) {
        const id = ci.dataset.id, it = cart.find(i => i.id === id);
        const q = t.closest('[data-q]');
        if (q && it) { it.qty += +q.dataset.q; if (it.qty < 1) cart = cart.filter(i => i.id !== id); }
        else if (t.closest('[data-rm]')) cart = cart.filter(i => i.id !== id);
        else return;
        saveCart(); updateBag(); renderCart(); return;
      }
      if (t.closest('#checkoutBtn')) { closeAll(); checkout(); return; }
    });
    $('#searchBtn').onclick = openSearch;
    $('#userBtn').onclick = openAccount;
    $('#cartBtn').onclick = () => { renderCart(); open('#cartOverlay'); };
    $('#searchInput').addEventListener('input', e => drawSearch(e.target.value));
    $('#sortSel').addEventListener('change', e => { shop.sort = e.target.value; renderShop(); });
    $('#burger').onclick = e => { e.stopPropagation(); const o = $('#nav').classList.toggle('open'); $('#burger').setAttribute('aria-expanded', o); };
    document.addEventListener('click', e => {
      if (!e.target.closest('#nav') && !e.target.closest('#burger')) {
        $('#nav').classList.remove('open');
        $('#burger').setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('hashchange', route);
  }

  /* ---------------- Init ---------------- */
  function init() {
    renderHero(); renderHow(); renderCats(); renderFeatured(); renderShowcase();
    renderMiles($('#miles')); renderVisit($('#visit')); renderAbout(); renderFooter();
    updateBag(); renderCart();
    if (store.get('ecodry_user', null)) $('#userDot').classList.add('on');
    bind(); route(); runLoader();
  }
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
