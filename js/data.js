/* HI SUVAI — product & content data (Source: hisuvai.com) */
window.ECODRY = {
  phone: '+91 63819 26567',
  tel: '+916381926567',
  wa: '916381926567',
  email: 'hiisuvai@gmail.com',
  place: 'Pettai, Tirunelveli, Tamil Nadu',
  address: '15A, Madasamy Kovil Street, Pettai, Tirunelveli - 627004, Tamil Nadu',
  mapsUrl: 'https://maps.google.com/?q=Hi+Suvai+Pettai+Tirunelveli+627004',

  /* Exact real product image mapping — Hi Suvai pouches (p1-p6.png) */
  productImages: {
    suvai1: 'p1.png', /* Green Pouch: Karuppu Gothumai Flour (கருப்பு கோதுமை மாவு) */
    suvai2: 'p2.png', /* Pink Pouch: Navadhaniya Dosa Mix (நவதானிய தோசை மிக்ஸ்) */
    suvai3: 'p3.png', /* Pink Pouch: 16 Variety Porridge Mix (16 வகை பாரம்பரிய அரிசி கஞ்சி மிக்ஸ்) */
    suvai4: 'p4.png', /* Red Pouch: Karuppu Kavuni Aval (கருப்பு கவுனி அவல்) */
    suvai5: 'p5.png', /* Red Pouch: Karuppu Kavuni Rice Dosa Mix (கருப்பு கவுனி அரிசி தோசை மிக்ஸ்) */
    suvai6: 'p6.png', /* Pink Pouch: 24 Ingredient Health Mix (24 வகை பாரம்பரிய அரிசி கஞ்சி மிக்ஸ்) */
    /* Fallback aliases */
    gothumai:    'p1.png',
    dosa:        'p2.png',
    porridge16:  'p3.png',
    aval:        'p4.png',
    kavunidosa:  'p5.png',
    healthmix24: 'p6.png',
    banana:      'p6.png',
    carrot:      'p1.png',
    beetroot:    'p3.png',
    moringa:     'p6.png',
    amla:        'p2.png',
    abc:         'p4.png'
  },

  categories: [
    { key: 'flour',    name: 'Ancient Grain Flours',   hue: 'green', hero: 'suvai1', desc: 'Stone-milled black wheat & dosa flours.' },
    { key: 'health',   name: 'Traditional Health Mix', hue: 'pink',  hero: 'suvai6', desc: '24 Sprouted grains, millets & nuts.' },
    { key: 'porridge', name: 'Heritage Porridge Mix',  hue: 'red',   hero: 'suvai3', desc: '16 Ancient Tamil heritage rice kanji.' }
  ],

  products: [
    { id: 'suvai1', name: 'Karuppu Gothumai Flour', l1: 'Black Wheat', l2: 'Special Flour', cat: 'flour', price: 150, mrp: 190, weight: '500 g', band: '#0E4B33', band2: '#0A3A28', powder: '#8E9B65', bowl: '#B03A2E', ing: 'flour',
      blurb: '100% stone-milled Black Wheat (Karuppu Gothumai) Flour. Rich in anthocyanins, dietary fibre, and essential trace minerals.',
      benefits: ['கருப்பு கோதுமை மாவு — குறைந்த சர்க்கரை குறியீடு (Low GI)', 'சர்க்கரை அளவை சமநிலையில் பராமரிக்க உதவும்', 'அதிக நார்ச்சத்து மற்றும் சுவையான சப்பாத்திக்கு ஏற்றது'],
      nutri: { Energy: '345 kcal', Carbs: '71 g', Protein: '12.5 g', Fibre: '11 g', Fat: '1.5 g' } },
    { id: 'suvai6', name: '24 Ingredient Health Mix', l1: '24 Grains', l2: 'Health Mix', cat: 'health', price: 175, mrp: 220, weight: '250 g', band: '#B9482A', band2: '#8E3019', powder: '#D4B07B', bowl: '#A8362B', ing: 'healthmix',
      blurb: 'A powerhouse blend of 24 traditional grains, sprouted cereals, millets, nuts, and pulses from Tamil Nadu. 100% natural and preservative-free.',
      benefits: ['24 தானியங்கள் & நட்ஸ் — 100% இயற்கை தயாரிப்பு', 'முளைகட்டிய தானியங்களால் முழுமையான ஊட்டச்சத்து', 'நோய் எதிர்ப்பு சக்தி தரும் & உடலுக்கு உடனடி தெம்பு'],
      nutri: { Energy: '385 kcal', Carbs: '74 g', Protein: '14.5 g', Fibre: '8.2 g', Fat: '3.8 g' } },
    { id: 'suvai2', name: 'Navadhaniya Dosa Mix', l1: 'Navadhaniya', l2: 'Dosa Mix', cat: 'flour', price: 140, mrp: 180, weight: '500 g', band: '#C2552B', band2: '#8E3019', powder: '#E7D88C', bowl: '#B03A2E', ing: 'dosa',
      blurb: '9 Sacred grains ground into a crispy, golden dosa flour mix. Makes instant high-protein dosas without waiting hours for fermentation.',
      benefits: ['9 பாரம்பரிய தானியங்கள் கலந்த சத்தான தோசை மிக்ஸ்', 'எளிதில் மொறுமொறுப்பான, சுவையான தோசை செய்யலாம்', 'வளரும் குழந்தைகளுக்கு தேவையான புரதம் மற்றும் தாதுக்கள்'],
      nutri: { Energy: '355 kcal', Carbs: '73 g', Protein: '13.8 g', Fibre: '8 g', Fat: '2.5 g' } },
    { id: 'suvai3', name: '16 Variety Porridge Mix', l1: '16 Heritage Rice', l2: 'Porridge Mix', cat: 'porridge', price: 100, mrp: 130, weight: '250 g', band: '#8C1F45', band2: '#5E1230', powder: '#A3174F', bowl: '#7A1C3E', ing: 'porridge',
      blurb: 'Traditional kanji porridge flour mix crafted from 16 ancient Tamil grains, black rice, Karuppu Kavuni, and whole pulses for gut health.',
      benefits: ['16 வகை பாரம்பரிய அரிசி & சிறுதானியங்கள்', 'செரிமானத்திற்கு உகந்தது, வயிற்றுப்புண்ணை ஆற்றும்', 'எளிதில் செரிக்கும் ஆரோக்கியமான பாரம்பரிய கஞ்சி'],
      nutri: { Energy: '360 kcal', Carbs: '78 g', Protein: '10.5 g', Fibre: '6.5 g', Fat: '1.8 g' } },
    { id: 'suvai4', name: 'Karuppu Kavuni Aval', l1: 'Black Rice', l2: 'Flakes (Aval)', cat: 'aval', price: 120, mrp: 150, weight: '250 g', band: '#8C1F45', band2: '#5E1230', powder: '#5E1230', bowl: '#7A1C3E', ing: 'aval',
      blurb: 'Native Karuppu Kavuni Black Rice flattened into nutritious aval flakes. Perfect for instant morning upma, sweet porridge, or healthy snacks.',
      benefits: ['பாரம்பரிய கருப்பு கவுனி அவல்', 'உடல் எடையை கட்டுப்படுத்த உதவும் இயற்கையான உணவு', 'சுலபமாக சமைத்து உண்ணக்கூடிய உடனடி காலை உணவு'],
      nutri: { Energy: '360 kcal', Carbs: '79 g', Protein: '8.5 g', Fibre: '6 g', Fat: '1.2 g' } },
    { id: 'suvai5', name: 'Karuppu Kavuni Rice Dosa Mix', l1: 'Black Rice', l2: 'Dosa Mix', cat: 'flour', price: 140, mrp: 180, weight: '500 g', band: '#C2552B', band2: '#8E3019', powder: '#8C1F45', bowl: '#7A1C3E', ing: 'kavunidosa',
      blurb: 'Authentic Karuppu Kavuni black rice blended into a wholesome dosa batter mix for sustained stamina, iron, and natural immunity.',
      benefits: ['கருப்பு கவுனி அரிசி தோசை மிக்ஸ்', 'இயற்கையான ஆன்டி-ஆக்ஸிடன்ட்கள் மற்றும் இரும்புச்சத்து', 'சுவையான மற்றும் மிருதுவான பாரம்பரிய கருப்பு அரிசி தோசை'],
      nutri: { Energy: '350 kcal', Carbs: '75 g', Protein: '11.5 g', Fibre: '9 g', Fat: '1.8 g' } }
  ],

  hero: [
    { id: 'suvai1', h: ['Ancient Black Wheat,', 'Karuppu Gothumai,', 'Stone Milled Purity'], p: '100% stone-milled Karuppu Gothumai (Black Wheat) Flour from Pettai, Tirunelveli. Rich in anthocyanins, low GI, and high dietary fibre for diabetes-friendly daily wellness.', bg1: '#FFFFFF', bg2: '#FAFCFA', wave: '#0E4B33', wave2: '#4C9A3C' },
    { id: 'suvai6', h: ['24 Grains,', 'Sprouted Goodness,', 'Pure Nutrition'], p: 'A powerhouse traditional health blend crafted with 24 sprouted grains, millets, nuts, and pulses from Tamil Nadu. 100% natural, nourishing and chemical-free.', bg1: '#FFFFFF', bg2: '#FAFCFA', wave: '#B9482A', wave2: '#F5A623' },
    { id: 'suvai2', h: ['9 Sacred Grains,', 'Navadhaniya Dosa,', 'Crispy & Wholesome'], p: 'Crispy golden dosa flour mix milled from 9 traditional grains. Packed with high plant protein for a healthy and energetic family breakfast.', bg1: '#FFFFFF', bg2: '#FAFCFA', wave: '#C2552B', wave2: '#F5A623' },
    { id: 'suvai3', h: ['16 Heritage Rices,', 'Comforting Kanji,', 'Deep Nutrition'], p: 'Traditional kanji porridge flour mix crafted from 16 ancient Tamil grains, black rice, and whole pulses for gentle digestion and all-day vitality.', bg1: '#FFFFFF', bg2: '#FAFCFA', wave: '#8C1F45', wave2: '#B3294E' }
  ],

  steps: [
    { n: '01', t: 'Take 2 Spoonfuls', d: 'Add 2 generous tablespoons (approx. 25–30g) of Hi Suvai Health Mix or Porridge Mix into a clean bowl.', art: 'scoop',  side: 'l' },
    { n: '02', t: 'Mix Without Lumps', d: 'Add 1 cup of normal water or cold milk. Whisk thoroughly until smooth and completely lump-free.', art: 'glass', side: 'r' },
    { n: '03', t: 'Cook on Gentle Flame', d: 'Cook on a medium flame for 3 to 5 minutes, stirring continuously until thick, glossy and aromatic.', art: 'blend', side: 'l' },
    { n: '04', t: 'Add Jaggery & Sip Warm', d: 'Mix in pure country jaggery (nattu sakkarai) or pinch of salt. Serve warm for wholesome all-day energy!', art: 'sip',   side: 'r' }
  ],

  milestones: [
    { tag: 'Traditional', t: 'Ancient Tamil Nadu Heritage Grains', d: 'Sourced directly from native farmers practicing traditional cultivation in Tamil Nadu.', side: 'l' },
    { tag: 'Quality', t: 'FSSAI Certified & 100% Chemical-Free', d: 'Zero artificial preservatives, zero refined sugars, and zero synthetic additives.', side: 'r' }
  ],

  more_milestones: [
    { y: 'Roots', t: 'Traditional Tamil Recipes', d: 'Preserving ancient porridge and health mix recipes handed down through generations.' },
    { y: 'Purity', t: 'Sprouted & Cold Stone Milled', d: 'Gentle processing to protect enzymes, dietary fibre, and vital micronutrients.' },
    { y: 'Quality', t: 'FSSAI Certified Standards', d: 'Rigorous hygienic preparation and vacuum-sealed food-grade pouch packaging.' },
    { y: 'Today', t: 'Direct from Pettai, Tirunelveli', d: 'Delivering fresh, wholesome traditional health foods to thousands of happy families.' }
  ],

  policies: {
    'Shipping Policy': 'Orders dispatched within 24–48 hours directly from Pettai, Tirunelveli, Tamil Nadu. Fast delivery across India via premier courier partners.',
    'Return Policy': 'Unopened sealed pouches can be returned within 7 days of delivery. For any transit damages, WhatsApp us with photos for an immediate replacement.',
    'Refund Policy': 'Approved refunds are credited back to your original payment method within 5–7 business days.',
    'Payment Policy': 'We accept Google Pay, PhonePe, Paytm, all UPI apps, Credit/Debit cards, Net Banking, and Cash on Delivery.'
  }
};
