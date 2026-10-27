/* ECODRY — product & content data */
window.ECODRY = {
  phone: '+91 98765 4321',
  tel: '+919876543210',
  wa: '919876543210',
  email: 'info@ecodry.com',
  place: 'Chintamani, Karnataka',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chintamani%2C+Karnataka',

  /* Real product image mapping — 6 photos (p1-p6.png) across 12 products */
  productImages: {
    banana:   'p1.png',
    carrot:   'p2.png',
    beetroot: 'p3.png',
    moringa:  'p4.png',
    amla:     'p5.png',
    abc:      'p6.png',
    broccoli: 'p2.png',
    mango:    'p1.png',
    curry:    'p4.png',
    tomato:   'p3.png',
    spinach:  'p4.png',
    papaya:   'p5.png'
  },

  categories: [
    { key: 'veg',   name: 'Dehydrated Vegetables', hue: 'red',   hero: 'carrot',   desc: 'Sun-dried vegetables milled fine.' },
    { key: 'fruit', name: 'Dehydrated Fruits',     hue: 'green', hero: 'banana',   desc: 'Naturally sweet, gently dried fruit.' },
    { key: 'super', name: 'Superfood Powders',     hue: 'pink',  hero: 'abc',      desc: 'Everyday greens & power blends.' }
  ],

  products: [
    { id: 'banana',   name: 'Raw Banana Powder',  l1: 'Raw Banana', l2: 'Powder', cat: 'fruit', price: 120, weight: '100 g', band: '#2E7D3A', band2: '#1D5A2A', powder: '#F7F4EC', bowl: '#A8362B', ing: 'banana',
      blurb: 'Tender green bananas, sliced and slowly dried under the sun, then milled into a fine, naturally mild powder.',
      benefits: ['Gentle on the stomach', 'Rich in resistant starch', 'Great for porridge & baby food'],
      nutri: { Energy: '340 kcal', Carbs: '82 g', Fibre: '9 g', Protein: '4 g', Fat: '0.8 g' } },
    { id: 'carrot',   name: 'Carrot Powder',      l1: 'Carrot', l2: 'Powder', cat: 'veg', price: 120, weight: '100 g', band: '#B9482A', band2: '#8E3019', powder: '#E8793A', bowl: '#B4412A', ing: 'carrot',
      blurb: 'Farm-fresh carrots, sun-dried to lock in their sweetness and colour, then finely milled. No chemicals, no preservatives.',
      benefits: ['Natural beta-carotene', 'Sweetens smoothies & bakes', 'Colours dough & soups naturally'],
      nutri: { Energy: '325 kcal', Carbs: '78 g', Fibre: '24 g', Protein: '8 g', Fat: '1.5 g' } },
    { id: 'beetroot', name: 'Beetroot Powder',    l1: 'Beetroot', l2: 'Powder', cat: 'veg', price: 120, weight: '100 g', band: '#8C1F45', band2: '#5E1230', powder: '#A3174F', bowl: '#7A1C3E', ing: 'beet',
      blurb: 'Deep-red beetroots, gently sun-dried and rolled into a fine, earthy-flavoured powder. Bold colour, bold taste.',
      benefits: ['Earthy, naturally sweet', 'Vibrant natural colour', 'Lovely in lattes & raitas'],
      nutri: { Energy: '330 kcal', Carbs: '75 g', Fibre: '20 g', Protein: '12 g', Fat: '1 g' } },
    { id: 'moringa',  name: 'Moringa Powder',     l1: 'Moringa', l2: 'Powder', cat: 'super', price: 120, weight: '100 g', band: '#2F7A36', band2: '#1D5A28', powder: '#9AA24A', bowl: '#B03A2E', ing: 'moringa',
      blurb: 'Fresh moringa leaves, gently sun-dried and ground into a vivid green powder. Blend into smoothies, dals and chutneys for an everyday green boost.',
      benefits: ['Iron & calcium rich', 'Vivid, fresh green colour', 'Stir into dals, rotis & smoothies'],
      nutri: { Energy: '205 kcal', Carbs: '38 g', Fibre: '19 g', Protein: '27 g', Fat: '2.3 g' } },
    { id: 'amla',     name: 'Amla Powder',        l1: 'Amla', l2: 'Powder', cat: 'fruit', price: 120, weight: '100 g', band: '#3A8035', band2: '#245A25', powder: '#B8A86A', bowl: '#B03A2E', ing: 'amla',
      blurb: 'Indian gooseberries, sun-dried whole and milled into a tangy, vitamin-C rich powder.',
      benefits: ['Naturally tangy', 'Vitamin-C rich', 'Mix with honey or water'],
      nutri: { Energy: '300 kcal', Carbs: '70 g', Fibre: '22 g', Protein: '6 g', Fat: '1 g' } },
    { id: 'abc',      name: 'ABC Powder',         l1: 'ABC', l2: 'Powder', cat: 'super', price: 150, weight: '100 g', band: '#8C1F45', band2: '#5E1230', powder: '#B5304F', bowl: '#7A1C3E', ing: 'abc',
      blurb: 'Apple, beetroot and carrot — three classic goodness-makers sun-dried and blended into one rosy powder.',
      benefits: ['Three-in-one blend', 'Kid-friendly sweetness', 'Perfect morning shake mix'],
      nutri: { Energy: '320 kcal', Carbs: '76 g', Fibre: '18 g', Protein: '7 g', Fat: '1 g' } },
    { id: 'broccoli', name: 'Broccoli Powder',    l1: 'Broccoli', l2: 'Powder', cat: 'veg', price: 160, weight: '100 g', band: '#2E7D3A', band2: '#1D5A2A', powder: '#6E8F3A', bowl: '#B03A2E', ing: 'broccoli',
      blurb: 'Fresh broccoli florets, slowly sun-dried and milled into a deep green powder that keeps its character.',
      benefits: ['Fibre & vitamin K', 'Add to soups and batters', 'Deep natural green'],
      nutri: { Energy: '300 kcal', Carbs: '55 g', Fibre: '28 g', Protein: '32 g', Fat: '2 g' } },
    { id: 'mango',    name: 'Raw Mango Powder',   l1: 'Raw Mango', l2: 'Powder', cat: 'fruit', price: 110, weight: '100 g', band: '#2E7D3A', band2: '#1D5A2A', powder: '#E7D88C', bowl: '#B03A2E', ing: 'mango',
      blurb: 'Raw green mangoes, sun-dried and ground into a sharp, citrusy amchur-style powder.',
      benefits: ['Tangy & sour', 'Brightens curries & chaats', 'Natural souring agent'],
      nutri: { Energy: '320 kcal', Carbs: '80 g', Fibre: '12 g', Protein: '3 g', Fat: '1 g' } },
    { id: 'curry',    name: 'Curry Leaves Powder', l1: 'Curry Leaves', l2: 'Powder', cat: 'super', price: 110, weight: '100 g', band: '#2F7A36', band2: '#1D5A28', powder: '#7C9440', bowl: '#B03A2E', ing: 'curry',
      blurb: 'Aromatic curry leaves, shade-and-sun dried, then finely ground. A pinch lifts every tadka.',
      benefits: ['Aromatic & earthy', 'Tadka in seconds', 'Iron & antioxidants'],
      nutri: { Energy: '310 kcal', Carbs: '62 g', Fibre: '16 g', Protein: '9 g', Fat: '5 g' } },
    { id: 'tomato',   name: 'Tomato Powder',      l1: 'Tomato', l2: 'Powder', cat: 'veg', price: 130, weight: '100 g', band: '#B9382A', band2: '#8A2218', powder: '#D5402C', bowl: '#A8362B', ing: 'tomato',
      blurb: 'Ripe tomatoes, sun-dried and milled into a rich, tangy powder — instant gravies without the cans.',
      benefits: ['Instant gravy base', 'Rich in lycopene', 'Tangy and deep'],
      nutri: { Energy: '300 kcal', Carbs: '70 g', Fibre: '20 g', Protein: '13 g', Fat: '1 g' } },
    { id: 'spinach',  name: 'Spinach Powder',     l1: 'Spinach', l2: 'Powder', cat: 'veg', price: 130, weight: '100 g', band: '#2E7D3A', band2: '#1D5A2A', powder: '#4F7A2E', bowl: '#B03A2E', ing: 'spinach',
      blurb: 'Tender spinach leaves, gently sun-dried into a rich green powder for rotis, dips and smoothies.',
      benefits: ['Iron & folate', 'Green rotis & pasta', 'Mild flavour'],
      nutri: { Energy: '290 kcal', Carbs: '50 g', Fibre: '25 g', Protein: '30 g', Fat: '2 g' } },
    { id: 'papaya',   name: 'Papaya Powder',      l1: 'Papaya', l2: 'Powder', cat: 'fruit', price: 140, weight: '100 g', band: '#C2641F', band2: '#94470F', powder: '#F0A24A', bowl: '#A8362B', ing: 'papaya',
      blurb: 'Sun-ripened papaya, slowly dried and milled into a sweet, golden powder.',
      benefits: ['Naturally sweet', 'Mix into yoghurt & oats', 'Golden colour'],
      nutri: { Energy: '330 kcal', Carbs: '80 g', Fibre: '10 g', Protein: '3 g', Fat: '0.5 g' } }
  ],

  hero: [
    { id: 'banana',   h: ['Sun-dried', 'Goodness,', 'Naturally Mild'], p: 'Tender green bananas, sliced and slowly dried under the sun, then milled into a fine, naturally mild powder. No chemicals, no preservatives.', bg1: '#FFE7A1', bg2: '#FFF7DE', wave: '#7DB53C', wave2: '#4F8F2C' },
    { id: 'carrot',   h: ['Sweet Sunshine,', 'Finely Milled'],         p: 'Farm-fresh carrots, sun-dried to lock in their sweetness and colour, then finely milled. No chemicals, no preservatives.', bg1: '#FFC890', bg2: '#FFEBD0', wave: '#E9843A', wave2: '#C2551B' },
    { id: 'beetroot', h: ['Earthy Colour,', 'Naturally Bold'],         p: 'Deep-red beetroots, gently sun-dried and rolled into a fine, earthy-flavoured powder. No chemicals, no preservatives.', bg1: '#FFC2B4', bg2: '#FFEADB', wave: '#D7344F', wave2: '#A31D3A' },
    { id: 'moringa',  h: ['Everyday Greens,', 'Sun-Kissed'],           p: 'Fresh moringa leaves, gently sun-dried and ground into a vivid green powder. Blend into smoothies, dals and chutneys for an everyday green boost.', bg1: '#FFE4A0', bg2: '#FFF5DA', wave: '#69AD36', wave2: '#3E8226' },
    { id: 'abc',      h: ['Apple · Beetroot', '· Carrot,', 'One Blend'], p: 'Three superfoods — apple, beetroot and carrot — sun-dried and blended into one rosy, naturally sweet powder. Your perfect morning shake.', bg1: '#FFCBB8', bg2: '#FFE8E0', wave: '#B03060', wave2: '#8C1F45' }
  ],

  steps: [
    { n: '01', t: 'Scoop 1–2 teaspoons', d: 'Take one or two teaspoons of powder. New to it? Start with one and build up.', art: 'scoop',  side: 'l' },
    { n: '02', t: 'Add to your drink',   d: 'Stir it into a glass of warm or cold milk, buttermilk, or your favourite smoothie.', art: 'glass', side: 'r' },
    { n: '03', t: 'Mix, blend or whisk', d: 'Shake, blend or whisk until it is smooth and evenly coloured — about 20 seconds.', art: 'blend', side: 'l' },
    { n: '04', t: 'Sip the sunshine',    d: 'Enjoy it fresh, every morning. Consistency is where the goodness really adds up.', art: 'sip',   side: 'r' }
  ],

  milestones: [
    { tag: 'Award',      t: 'Sustainable Agri Innovation Award', d: 'Recognised for bringing a low-chemical, solar-dried processing method to small farms.', side: 'l' },
    { tag: 'Exhibition', t: 'Natural Foods Expo',                d: 'Sharing our sun-dried superfood range with buyers, chefs and families.', side: 'r' }
  ],

  more_milestones: [
    { y: '2019', t: 'First solar dryer', d: 'Our first solar dryer goes up beside the family farm.' },
    { y: '2021', t: '12 farms on board', d: 'We partner with neighbouring farmers for sun-ripened produce.' },
    { y: '2023', t: 'Sustainable Agri Innovation Award', d: 'Honoured for low-chemical, solar-dried processing.' },
    { y: '2025', t: 'Natural Foods Expo', d: 'Our superfood range meets buyers, chefs and families.' }
  ],

  policies: {
    'Shipping Policy': 'We dispatch within 1–2 working days from Chintamani, Karnataka. Standard delivery across India takes 3–7 days. Orders above ₹499 ship free; a flat ₹49 applies below that.',
    'Return Policy': 'Unopened pouches can be returned within 7 days of delivery. Because our products are food items, opened pouches cannot be returned unless damaged or incorrect.',
    'Refund Policy': 'Approved refunds go back to your original payment method within 5–7 working days. For damaged items, send us a photo on WhatsApp and we will replace or refund quickly.',
    'Payment Policy': 'We accept UPI, cards, net-banking and cash on delivery (select pincodes). All online payments are processed over secure, encrypted connections.'
  }
};
