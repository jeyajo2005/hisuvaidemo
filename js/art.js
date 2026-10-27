/* ECODRY — vector artwork (pouches, scenes, icons). All drawn in SVG so nothing external is needed. */
(function () {
  let uid = 0;

  const leaf = (x, y, rot, len, fill, w) =>
    `<path transform="translate(${x} ${y}) rotate(${rot})" d="M0 0 C${w || 6} ${-len * .35} ${w || 6} ${-len * .75} 0 ${-len} C${-(w || 6)} ${-len * .75} ${-(w || 6)} ${-len * .35} 0 0Z" fill="${fill}"/>`;

  const sprig = (x, y, rot, n, fill, fill2) => {
    let s = `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M0 0 L0 -60" stroke="#3b6b2a" stroke-width="2" fill="none"/>`;
    for (let i = 0; i < n; i++) {
      const yy = -8 - i * (50 / n);
      s += leaf(0, yy, -55, 16, i % 2 ? fill : fill2, 5) + leaf(0, yy, 55, 16, i % 2 ? fill2 : fill, 5);
    }
    return s + leaf(0, -58, 0, 15, fill, 5) + '</g>';
  };

  const ING = {
    banana: () => `
      <g>
        <path d="M34 282 Q62 214 140 246" stroke="#7DA52F" stroke-width="22" fill="none" stroke-linecap="round"/>
        <path d="M36 276 Q64 220 134 244" stroke="#A6CC4B" stroke-width="9" fill="none" stroke-linecap="round" opacity=".7"/>
        <path d="M48 298 Q80 236 150 266" stroke="#6C9A28" stroke-width="20" fill="none" stroke-linecap="round"/>
        <path d="M50 293 Q82 241 144 264" stroke="#9CC444" stroke-width="8" fill="none" stroke-linecap="round" opacity=".6"/>
        <circle cx="62" cy="318" r="17" fill="#EDEBD2"/><circle cx="62" cy="318" r="12" fill="#FAF8EA"/><circle cx="62" cy="318" r="3" fill="#D8D4B0"/>
      </g>`,
    carrot: () => `
      <g>
        ${leaf(56, 226, -20, 30, '#3F8F34', 5)}${leaf(60, 226, 10, 28, '#58A83F', 5)}
        <path d="M54 232 L142 274 Q150 282 140 286 L50 256 Q46 242 54 232Z" fill="#E9742B"/>
        <path d="M60 240 L136 274" stroke="#F7A05B" stroke-width="4" opacity=".6" fill="none"/>
        <path d="M44 262 L132 296 Q140 304 130 308 L40 284 Q36 270 44 262Z" fill="#D9601E"/>
        <circle cx="64" cy="316" r="17" fill="#F0883F"/><circle cx="64" cy="316" r="11" fill="#F8A768"/><circle cx="64" cy="316" r="4" fill="#FCCB9C"/>
      </g>`,
    beet: () => `
      <g>
        ${leaf(70, 240, -18, 34, '#B3294E', 6)}${leaf(78, 240, 12, 30, '#3E7F34', 6)}
        <ellipse cx="74" cy="268" rx="26" ry="24" fill="#7B1B47"/><path d="M74 290 L72 306" stroke="#5E1235" stroke-width="3"/>
        <ellipse cx="66" cy="262" rx="8" ry="6" fill="#B24A78" opacity=".55"/>
        <ellipse cx="124" cy="282" rx="20" ry="18" fill="#6A1640"/>
        <circle cx="48" cy="312" r="15" fill="#A31F54"/><circle cx="48" cy="312" r="9" fill="#C94F7E"/>
      </g>`,
    moringa: () => `${sprig(74, 300, -20, 6, '#3E9A3A', '#59B04A')}${sprig(214, 290, 22, 6, '#4BA544', '#2F7F2E')}`,
    amla: () => `
      <g>
        ${leaf(130, 232, 30, 26, '#3E8F36', 5)}
        <circle cx="62" cy="276" r="25" fill="#9CC246"/><circle cx="54" cy="268" r="8" fill="#D4E88C" opacity=".6"/>
        <circle cx="112" cy="268" r="22" fill="#B1CF55"/><circle cx="105" cy="261" r="7" fill="#E1EFA0" opacity=".6"/>
        <circle cx="86" cy="310" r="18" fill="#8DB83B"/>
        ${leaf(62, 252, -10, 14, '#3E8F36', 4)}
      </g>`,
    abc: () => `
      <g>
        <circle cx="64" cy="270" r="24" fill="#C92B3A"/><circle cx="56" cy="262" r="7" fill="#F27B86" opacity=".7"/>${leaf(64, 248, 15, 14, '#3E8F36', 4)}
        <ellipse cx="112" cy="288" rx="19" ry="17" fill="#7B1B47"/>${leaf(112, 272, 8, 24, '#3E7F34', 5)}
        <path d="M40 306 L106 322 Q112 328 104 330 L36 318Z" fill="#E4702B"/>
        ${leaf(206, 258, 20, 34, '#4BA544', 6)}${leaf(222, 270, 40, 30, '#2F7F2E', 6)}
      </g>`,
    broccoli: () => `
      <g>
        <path d="M70 320 L72 280" stroke="#8DB04B" stroke-width="10" stroke-linecap="round"/>
        <circle cx="52" cy="262" r="17" fill="#2F7F2E"/><circle cx="72" cy="250" r="19" fill="#3E9A3A"/><circle cx="94" cy="264" r="17" fill="#2A7228"/><circle cx="72" cy="270" r="17" fill="#4BA544"/>
        <circle cx="66" cy="244" r="6" fill="#74C25F" opacity=".6"/>
        <path d="M200 300 L202 266" stroke="#8DB04B" stroke-width="8" stroke-linecap="round"/>
        <circle cx="188" cy="250" r="13" fill="#3E9A3A"/><circle cx="206" cy="244" r="14" fill="#2F7F2E"/><circle cx="218" cy="258" r="12" fill="#4BA544"/>
      </g>`,
    mango: () => `
      <g>
        ${leaf(100, 236, 35, 24, '#3E8F36', 5)}
        <path d="M44 296 Q40 246 92 240 Q132 242 134 280 Q130 324 80 324 Q50 320 44 296Z" fill="#E9C94A"/>
        <path d="M50 290 Q48 252 88 246 Q110 246 120 262 Q96 258 74 276 Q60 292 56 308 Q50 302 50 290Z" fill="#9CC246" opacity=".85"/>
        <ellipse cx="84" cy="262" rx="10" ry="6" fill="#fff" opacity=".35"/>
      </g>`,
    curry: () => `${sprig(70, 306, -24, 7, '#2E7B2E', '#468F36')}${sprig(220, 296, 26, 7, '#3C8D34', '#256B28')}`,
    tomato: () => `
      <g>
        <circle cx="62" cy="276" r="26" fill="#D5362A"/><circle cx="54" cy="268" r="8" fill="#F27A6B" opacity=".6"/>
        <path d="M50 252 l12 6 l12 -6 l-6 10 l8 6 l-14 -2 l-14 2 l8 -6z" fill="#3E8F36"/>
        <circle cx="116" cy="286" r="20" fill="#C42A20"/><path d="M106 270 l10 5 l10 -5 l-5 8z" fill="#3E8F36"/>
        <circle cx="52" cy="322" r="13" fill="#E34838"/>
      </g>`,
    spinach: () => `
      <g>
        ${leaf(70, 314, -22, 62, '#2F7F2E', 14)}${leaf(86, 314, 14, 56, '#3E9A3A', 14)}${leaf(60, 316, -50, 44, '#4BA544', 11)}
        ${leaf(214, 300, 22, 58, '#3E9A3A', 13)}${leaf(224, 300, 48, 44, '#2F7F2E', 11)}
      </g>`,
    papaya: () => `
      <g>
        <ellipse cx="82" cy="278" rx="38" ry="26" transform="rotate(-24 82 278)" fill="#F0932F"/>
        <ellipse cx="82" cy="278" rx="26" ry="14" transform="rotate(-24 82 278)" fill="#F7B65A"/>
        ${[0, 1, 2, 3, 4].map(i => `<circle cx="${68 + i * 7}" cy="${284 - i * 3}" r="2.6" fill="#3a2a1a"/>`).join('')}
        ${leaf(150, 248, 40, 24, '#3E8F36', 5)}
      </g>`
  };

  const SMALL_ICONS = [
    '<circle cx="0" cy="0" r="3" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M0 -8v3M0 5v3M-8 0h3M5 0h3M-5.6 -5.6l2 2M3.6 3.6l2 2M5.6 -5.6l-2 2M-3.6 3.6l-2 2" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>',
    '<path d="M-5 5 C-6 -4 0 -8 6 -6 C6 0 2 6 -5 5Z M-5 5 L2 -2" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
    '<path d="M0 -7 C5 -1 6 2 0 7 C-6 2 -5 -1 0 -7Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>'
  ];

  /* The product pouch. `withBand` false => plain cream pouch (used in miniature scenes). */
  function pouch(p, cls) {
    const id = 'p' + (uid++);
    const name1 = p.l1, name2 = p.l2;
    const fs = name1.length > 11 ? 26 : name1.length > 8 ? 30 : 34;
    return `
<svg viewBox="0 0 300 440" class="pouch ${cls || ''}" role="img" aria-label="${p.name} pouch" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${id}b" x1="0" x2="1"><stop offset="0" stop-color="#DFD3BA"/><stop offset=".22" stop-color="#F4ECDB"/><stop offset=".7" stop-color="#EEE4CF"/><stop offset="1" stop-color="#D2C4A8"/></linearGradient>
    <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${p.band}"/><stop offset="1" stop-color="${p.band2}"/></linearGradient>
    <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".18" stop-color="#fff" stop-opacity="0"/><stop offset=".82" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".16"/></linearGradient>
    <radialGradient id="${id}bw" cx=".4" cy=".25" r=".9"><stop offset="0" stop-color="${p.bowl}"/><stop offset="1" stop-color="#000" stop-opacity=".0"/></radialGradient>
    <pattern id="${id}z" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M0 6 L6 0" stroke="#000" stroke-opacity=".12" stroke-width="1"/></pattern>
    <clipPath id="${id}c"><path d="M16 24 H284 L292 410 Q292 426 276 426 H24 Q8 426 8 410 Z"/></clipPath>
  </defs>
  <ellipse cx="150" cy="432" rx="118" ry="6" fill="#000" opacity=".18"/>
  <g clip-path="url(#${id}c)">
    <rect x="0" y="0" width="300" height="440" fill="url(#${id}b)"/>
    <rect x="0" y="24" width="300" height="34" fill="#E3D8C0"/><rect x="0" y="24" width="300" height="34" fill="url(#${id}z)"/>
    <rect x="0" y="62" width="300" height="5" fill="#000" opacity=".07"/><rect x="0" y="67" width="300" height="2" fill="#fff" opacity=".5"/>
    <g transform="translate(150 96)">
      <path d="M-17 3 C-12 -9 -2 -9 0 -3 C2 -9 12 -9 17 3 C10 9 2 6 0 0 C-2 6 -10 9 -17 3Z" fill="#6FAE3E"/>
      <path d="M0 -3 V12" stroke="#E7A22C" stroke-width="2.4" stroke-linecap="round"/>
      <text y="30" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="15" letter-spacing="3" fill="#3B3A2A">ECODRY</text>
    </g>
    <text x="34" y="${fs > 30 ? 160 : 156}" font-family="Cormorant Garamond, serif" font-weight="700" font-size="${fs}" fill="#2B2A1D">${name1}</text>
    <text x="34" y="${(fs > 30 ? 160 : 156) + fs - 2}" font-family="Cormorant Garamond, serif" font-weight="700" font-size="${fs}" fill="#2B2A1D">${name2}</text>
    <g transform="translate(44 ${(fs > 30 ? 160 : 156) + fs + 14})"><circle r="6" fill="none" stroke="#7a6b3a" stroke-width="1"/><path d="M0 -10v3M0 7v3M-10 0h3M7 0h3" stroke="#7a6b3a" stroke-width="1"/><text x="14" y="3" font-family="Inter, sans-serif" font-size="7" letter-spacing="1.2" fill="#7a6b3a">SUN DRIED</text></g>
    ${(ING[p.ing] || ING.banana)()}
    <path d="M0 322 Q150 296 300 322 V440 H0Z" fill="url(#${id}g)"/>
    <path d="M0 322 Q150 296 300 322" stroke="#fff" stroke-opacity=".25" stroke-width="1.4" fill="none"/>
    <g transform="translate(100 392)">${[0, 1, 2].map(i => `<g transform="translate(${i * 50} 0)"><circle r="14" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.1"/>${SMALL_ICONS[i]}</g>`).join('')}</g>
    <g>
      <ellipse cx="170" cy="332" rx="76" ry="10" fill="#000" opacity=".22"/>
      <path d="M96 286 Q170 274 244 286 Q240 334 170 342 Q100 334 96 286Z" fill="${p.bowl}"/>
      <path d="M96 286 Q170 274 244 286 Q240 334 170 342 Q100 334 96 286Z" fill="url(#${id}bw)" opacity=".7"/>
      <path d="M104 312 Q170 322 236 312" stroke="#fff" stroke-opacity=".25" stroke-width="2" fill="none"/>
      <ellipse cx="170" cy="286" rx="74" ry="11" fill="#000" opacity=".25"/>
      <path d="M106 284 Q112 238 170 230 Q228 238 234 284 Q170 296 106 284Z" fill="${p.powder}"/>
      <path d="M118 270 Q150 244 190 246" stroke="#fff" stroke-opacity=".35" stroke-width="5" stroke-linecap="round" fill="none"/>
      ${Array.from({ length: 18 }, (_, i) => `<circle cx="${120 + (i * 37) % 100}" cy="${248 + (i * 23) % 34}" r="1.3" fill="#000" opacity=".12"/>`).join('')}
    </g>
  </g>
  <path d="M16 24 H284 L292 410 Q292 426 276 426 H24 Q8 426 8 410 Z" fill="url(#${id}s)"/>
</svg>`;
  }

  /* ---------- Scenes ---------- */
  function sceneSky() {
    return `
<svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F8FD6"/><stop offset=".55" stop-color="#8CC8EE"/><stop offset="1" stop-color="#D5ECF5"/></linearGradient>
    <radialGradient id="sn" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff" stop-opacity="1"/><stop offset=".25" stop-color="#FFF4B8" stop-opacity=".95"/><stop offset="1" stop-color="#FFE27A" stop-opacity="0"/></radialGradient>
    <linearGradient id="mt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7C8E9C"/><stop offset="1" stop-color="#52707A"/></linearGradient>
    <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5FA43B"/><stop offset="1" stop-color="#2F6E22"/></linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#sk)"/>
  <circle cx="470" cy="190" r="240" fill="url(#sn)"/>
  <g fill="#fff" opacity=".9"><ellipse cx="180" cy="160" rx="150" ry="34"/><ellipse cx="260" cy="140" rx="90" ry="30"/><ellipse cx="980" cy="150" rx="170" ry="38"/><ellipse cx="1060" cy="128" rx="100" ry="32"/><ellipse cx="760" cy="300" rx="130" ry="26" opacity=".7"/></g>
  <path d="M0 520 L180 420 L300 470 L520 330 L640 400 L780 300 L930 420 L1060 360 L1200 470 V620 H0Z" fill="url(#mt)"/>
  <path d="M520 330 L560 372 L520 360 L500 392 L470 372Z M780 300 L820 345 L780 335 L760 365 L735 342Z" fill="#fff" opacity=".85"/>
  <path d="M0 600 Q200 540 420 590 T860 580 T1200 600 V800 H0Z" fill="#7FB654"/>
  <path d="M0 650 Q300 600 600 650 T1200 640 V800 H0Z" fill="url(#gr)"/>
  <g fill="#2E7A25">${Array.from({ length: 34 }, (_, i) => `<path d="M${i * 38 - 20} 800 q${10 + (i % 3) * 6} -${90 + (i * 29) % 90} ${28} -${40 + (i * 13) % 50} q-6 40 -${28} ${40 + (i * 13) % 50}z" opacity="${.5 + (i % 4) * .12}"/>`).join('')}</g>
  <g fill="#3D8F2F">${Array.from({ length: 16 }, (_, i) => `<ellipse cx="${i * 80 + 20}" cy="${760 - (i * 41) % 60}" rx="46" ry="22" transform="rotate(${-20 + (i * 17) % 40} ${i * 80 + 20} 760)"/>`).join('')}</g>
</svg>`;
  }

  function figure(x, y, s, skin, cloth, hair, extra) {
    return `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-46 160 Q-46 70 0 66 Q46 70 46 160Z" fill="${cloth}"/>
      <circle cx="0" cy="34" r="30" fill="${skin}"/>
      ${hair}
      ${extra || ''}
    </g>`;
  }

  function sceneAward() {
    const sh = (x, y, i) => `<g transform="translate(${x} ${y}) scale(.15)">${pouch(window.ECODRY.products[i % window.ECODRY.products.length]).replace(/<svg[^>]*>/, '').replace('</svg>', '')}</g>`;
    return `
<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aw" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8FB6D5"/><stop offset=".5" stop-color="#C9D9C0"/><stop offset="1" stop-color="#E9D8A8"/></linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#aw)"/>
  <path d="M0 250 L120 190 L220 230 L330 150 L460 240 L560 200 L800 280 V380 H0Z" fill="#8AA6A0" opacity=".6"/>
  <rect x="0" y="330" width="800" height="270" fill="#E9DCC0"/>
  ${figure(210, 160, 1.5, '#8B5A3C', '#F5F1E4', '<path d="M-30 20 Q-30 -12 0 -12 Q32 -12 30 20 Q10 4 -30 20Z" fill="#1C1410"/>')}
  ${figure(380, 150, 1.55, '#C48A63', '#FBF7EA', '<path d="M-28 22 Q-28 -4 0 -4 Q28 -4 28 22 Q0 10 -28 22Z" fill="#E4E0D8"/>')}
  <circle cx="300" cy="300" r="26" fill="#E3C26C" stroke="#B98F2D" stroke-width="3"/>
  <rect x="0" y="372" width="800" height="26" fill="#D9C8A0"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((k, i) => sh(18 + i * 64, 276 + (i % 2) * 2, i)).join('')}
  <g>${Array.from({ length: 22 }, (_, i) => `<circle cx="${20 + i * 36}" cy="${412 + (i % 3) * 8}" r="${12 + (i % 4) * 2}" fill="${['#D94B2B', '#8CBF3F', '#F0A53A', '#B02C4B', '#5BA13B'][i % 5]}"/>`).join('')}</g>
  <rect x="0" y="440" width="800" height="160" fill="#8F6A45"/><rect x="0" y="440" width="800" height="10" fill="#A67C52"/>
  <g>${sh(520, 150, 3).replace('scale(.15)', 'scale(.5)')}</g>
</svg>`;
  }

  function sceneExpo() {
    const sh = (x, y, i, s) => `<g transform="translate(${x} ${y}) scale(${s})">${pouch(window.ECODRY.products[i % window.ECODRY.products.length]).replace(/<svg[^>]*>/, '').replace('</svg>', '')}</g>`;
    return `
<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="ex" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9CCE0"/><stop offset="1" stop-color="#E8E0C6"/></linearGradient></defs>
  <rect width="800" height="600" fill="url(#ex)"/>
  <path d="M0 260 Q200 150 400 240 T800 220 V400 H0Z" fill="#9CB98A" opacity=".8"/>
  <rect x="470" y="40" width="130" height="330" rx="10" fill="#C7A774"/><rect x="480" y="52" width="110" height="306" rx="8" fill="#DCC593"/>
  <text x="535" y="110" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="22" fill="#4a3a1c">ECODRY</text>
  ${figure(250, 170, 1.4, '#9A6240', '#F5F1E4', '<path d="M-30 18 Q-34 -14 0 -14 Q36 -14 30 18 Q10 6 -30 18Z" fill="#14100C"/><path d="M-32 18 Q-44 70 -26 90" stroke="#14100C" stroke-width="10" fill="none"/>')}
  <rect x="0" y="392" width="800" height="208" fill="#C9AC7A"/><rect x="0" y="388" width="800" height="14" fill="#E4D2A8"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((k, i) => sh(10 + i * 62, 300, i, .17)).join('')}
  ${[0, 1, 2, 3, 4, 5, 6, 7].map((k, i) => sh(40 + i * 96, 340, i + 3, .21)).join('')}
  <g>${Array.from({ length: 28 }, (_, i) => `<circle cx="${14 + i * 28}" cy="${470 + (i % 3) * 10}" r="${10 + (i % 4) * 2}" fill="${['#D94B2B', '#8CBF3F', '#F0A53A', '#B02C4B', '#5BA13B'][i % 5]}"/>`).join('')}</g>
  <rect x="0" y="520" width="800" height="80" fill="#7D5A37"/>
</svg>`;
  }

  function sceneGreenhouse() {
    return `
<svg viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F4D58D"/><stop offset=".5" stop-color="#F8E9C4"/><stop offset="1" stop-color="#EAF1DC"/></linearGradient>
    <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#CFE5EA"/><stop offset="1" stop-color="#8FB7B6"/></linearGradient>
    <linearGradient id="pv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#26457A"/><stop offset="1" stop-color="#14305E"/></linearGradient>
    <radialGradient id="gsun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF6C9"/><stop offset="1" stop-color="#FFD76A" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="700" fill="url(#gs)"/>
  <circle cx="320" cy="170" r="190" fill="url(#gsun)"/>
  <path d="M0 330 L140 230 L260 300 L420 200 L560 300 L700 240 L880 330 V460 H0Z" fill="#9DB48A" opacity=".75"/>
  <path d="M0 400 Q300 330 600 390 T1200 360 V700 H0Z" fill="#8DB45A"/>
  <path d="M470 330 L900 210 L1020 250 L1020 470 L470 470Z" fill="url(#gl)"/>
  <path d="M470 330 L900 210 L1020 250 L630 380Z" fill="url(#pv)"/>
  ${Array.from({ length: 9 }, (_, i) => `<path d="M${470 + i * 62} ${330 - i * 13.5} L${630 + i * 44} ${380 - i * 14}" stroke="#7FA4D8" stroke-width="2" opacity=".6"/>`).join('')}
  ${Array.from({ length: 12 }, (_, i) => `<path d="M${470 + i * 46} 340 V470" stroke="#6C8F8E" stroke-width="3" opacity=".7"/>`).join('')}
  <rect x="560" y="360" width="130" height="62" rx="8" fill="#C8955A"/><text x="625" y="400" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="24" fill="#3c2a14">ECODRY</text>
  <path d="M490 470 H1020 V520 H440Z" fill="#B9855A"/>
  <rect x="150" y="400" width="300" height="120" fill="#B98558"/><path d="M130 400 L300 340 L470 400Z" fill="#8F5C38"/>
  ${Array.from({ length: 7 }, (_, i) => `<rect x="${170 + i * 40}" y="410" width="22" height="100" fill="#8F5C38" opacity=".55"/>`).join('')}
  <path d="M0 520 H1200 V700 H0Z" fill="#E5D3B0"/>
  <g fill="#3E8F36">${[60, 120, 1100, 1160].map((x, i) => `<path d="M${x} 520 Q${x - 30} 440 ${x + 10} 380 Q${x + 40} 440 ${x} 520Z"/>`).join('')}</g>
  <g fill="#2C6E28" opacity=".9"><ellipse cx="40" cy="90" rx="60" ry="26" transform="rotate(-30 40 90)"/><ellipse cx="100" cy="60" rx="48" ry="20" transform="rotate(-10 100 60)"/><ellipse cx="1160" cy="80" rx="54" ry="22" transform="rotate(30 1160 80)"/></g>
  <g>${Array.from({ length: 6 }, (_, i) => `<g transform="translate(${660 + i * 52} 440)"><circle cy="-30" r="9" fill="#F1D3B3"/><path d="M-10 0 Q-10 -20 0 -22 Q10 -20 10 0Z" fill="#F7F4EB"/></g>`).join('')}</g>
</svg>`;
  }

  function sceneMap() {
    return `
<svg viewBox="0 0 520 340" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="340" fill="#EDEAE0"/>
  <path d="M0 40 Q120 20 200 60 T520 30 V0 H0Z" fill="#D6E7C7"/>
  <path d="M300 340 Q340 240 460 230 L520 232 V340Z" fill="#CFE6BE"/>
  <path d="M30 230 Q90 200 150 240 T210 330 H20Z" fill="#CFE6BE"/>
  <path d="M-10 120 Q150 100 260 160 T540 140" stroke="#fff" stroke-width="16" fill="none"/>
  <path d="M-10 120 Q150 100 260 160 T540 140" stroke="#F7D98B" stroke-width="10" fill="none"/>
  <path d="M120 -10 L150 130 L120 350" stroke="#fff" stroke-width="12" fill="none"/>
  <path d="M330 -10 L300 150 L360 350" stroke="#fff" stroke-width="12" fill="none"/>
  <path d="M-10 260 L540 240" stroke="#fff" stroke-width="9" fill="none"/>
  <path d="M200 -10 L230 340" stroke="#fff" stroke-width="5" fill="none"/>
  <path d="M-10 70 L540 90" stroke="#fff" stroke-width="5" fill="none"/>
  <g fill="#E1DCCD">${[[160, 170, 50, 40], [240, 180, 50, 50], [370, 170, 70, 40], [40, 160, 60, 36], [160, 270, 60, 40], [250, 270, 60, 50], [380, 270, 60, 40], [30, 90, 60, 40]].map(b => `<rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}" rx="3"/>`).join('')}</g>
  <g font-family="Inter, sans-serif" font-size="9" fill="#6a6a60"><text x="170" y="110">Chintamani</text><text x="350" y="215">Karnataka</text><text x="40" y="285">Kolar Road</text><text x="395" y="62">Srinivaspur</text></g>
  <g transform="translate(262 150)"><path d="M0 0 C-18 -22 -18 -40 0 -44 C18 -40 18 -22 0 0Z" fill="#E94B35"/><circle cy="-30" r="6" fill="#fff"/></g>
  <circle cx="400" cy="120" r="8" fill="#7B68D6"/><circle cx="110" cy="200" r="8" fill="#7B68D6"/>
</svg>`;
  }

  /* Step thumbnails (how-to-use) */
  function stepArt(kind) {
    const bg = {
      scoop: ['#F3E2B8', '#E8C98A'], glass: ['#E9D6C0', '#D8B08A'], blend: ['#D9E9C2', '#9FC47A'], sip: ['#F2C7B8', '#D9967F']
    }[kind];
    const inner = {
      scoop: `<ellipse cx="50" cy="82" rx="30" ry="9" fill="#6B4A2B"/><path d="M26 60 Q50 44 74 60 Q70 80 50 84 Q30 80 26 60Z" fill="#8A6A3B"/><path d="M30 58 Q50 36 70 58 Q50 66 30 58Z" fill="#A5B24A"/><path d="M62 30 L90 20" stroke="#B8B8B0" stroke-width="5" stroke-linecap="round"/><ellipse cx="60" cy="34" rx="10" ry="6" fill="#C8C8BE"/><ellipse cx="60" cy="33" rx="7" ry="3.5" fill="#9AA84A"/>`,
      glass: `<path d="M30 22 H70 L64 90 H36Z" fill="#fff" opacity=".85"/><path d="M33 48 H67 L64 90 H36Z" fill="#E9E1CF"/><path d="M33 48 Q50 54 67 48" stroke="#B7B07A" stroke-width="2" fill="none"/><path d="M60 14 L50 62" stroke="#E56A3A" stroke-width="3" stroke-linecap="round"/><ellipse cx="50" cy="48" rx="17" ry="3" fill="#C9C48A"/>`,
      blend: `<path d="M30 20 H70 L64 88 H36Z" fill="#fff" opacity=".8"/><path d="M33 40 H67 L64 88 H36Z" fill="#7CB342"/><path d="M33 40 Q42 34 50 40 T67 40" stroke="#B6DD7C" stroke-width="3" fill="none"/><circle cx="46" cy="64" r="3" fill="#C5E78E" opacity=".8"/><circle cx="56" cy="74" r="2.4" fill="#C5E78E" opacity=".8"/>`,
      sip: `<circle cx="42" cy="46" r="22" fill="#E9B79C"/><path d="M20 44 Q20 18 44 18 Q68 22 64 46 Q50 30 20 44Z" fill="#2A1A12"/><path d="M14 92 Q14 66 42 66 Q70 66 70 92Z" fill="#C4463A"/><path d="M60 64 L66 40 H86 L82 66Z" fill="#fff" opacity=".9"/><path d="M62 54 H84" stroke="#8BC34A" stroke-width="8"/>`
    }[kind];
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="st${kind}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient></defs><rect width="100" height="100" fill="url(#st${kind})"/>${inner}</svg>`;
  }

  /* Ingredient close-up (product card slide 2) */
  function closeup(p) {
    const id = 'cu' + (uid++);
    return `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="closeup">
      <defs><radialGradient id="${id}" cx=".5" cy=".4" r=".8"><stop offset="0" stop-color="#FFF8E4"/><stop offset="1" stop-color="${p.powder}" stop-opacity=".35"/></radialGradient>
      <radialGradient id="${id}b" cx=".4" cy=".25" r=".9"><stop offset="0" stop-color="${p.bowl}"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></radialGradient></defs>
      <rect width="300" height="300" fill="url(#${id})"/>
      <g transform="translate(20 -30) scale(1.3)">${(ING[p.ing] || ING.banana)()}</g>
      <ellipse cx="150" cy="250" rx="100" ry="12" fill="#000" opacity=".15"/>
      <path d="M60 190 Q150 176 240 190 Q232 252 150 262 Q68 252 60 190Z" fill="url(#${id}b)"/>
      <ellipse cx="150" cy="190" rx="90" ry="13" fill="#000" opacity=".22"/>
      <path d="M72 188 Q78 120 150 108 Q222 120 228 188 Q150 204 72 188Z" fill="${p.powder}"/>
      <path d="M92 168 Q124 130 168 128" stroke="#fff" stroke-opacity=".4" stroke-width="6" stroke-linecap="round" fill="none"/>
    </svg>`;
  }

  function nutri(p) {
    return `<div class="nutri"><h5>Nutrition · per 100 g</h5>${Object.entries(p.nutri).map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>`;
  }

  window.Art = { pouch, sceneSky, sceneAward, sceneExpo, sceneGreenhouse, sceneMap, stepArt, closeup, nutri };
})();
