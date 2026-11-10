// SmartBite AI — bilingual (EN/KZ) MVP
const $ = (s) => document.querySelector(s);
const flow = $('#flow');

// ---- i18n ----
const I18N = {
  en: {
    navHome: 'Kitchen', navSaved: 'Saved', langBtn: 'KZ',
    eyebrow: 'Your fridge, made useful',
    heroH1: 'Cook what you have. <em>Waste less.</em>',
    heroP: 'Point us at your ingredients and get a few realistic dinner ideas in seconds — no endless scrolling, no extra shopping trip.',
    startBtn: 'Find my dinner', artCopy: 'Built for the random Tuesday fridge.',
    phoneTitle: "Tonight's plan", phoneH3: 'Use what is<br>waiting.',
    savedTitle: 'Your saved ideas', savedSub: 'Recipes you marked for later will show up here.',
    savedEmpty: 'No saved recipes yet. Find a dinner and tap Save.',
    s1Title: 'Start with what you have', s1Sub: 'A photo is fastest. A short list works just as well.',
    tabPhoto: '📷 Scan my fridge', tabManual: '✎ Type ingredients',
    dropStrong: 'Drop a fridge photo here', dropSpan: 'or tap to choose an image',
    placeholder: 'Try: eggs, rice, tomatoes, spinach...',
    continueBtn: 'Continue',
    s2Title: 'Does this look right?', s2Sub: 'Remove anything wrong and add what we missed.',
    addPlaceholder: 'Add an ingredient', addBtn: 'Add', backBtn: 'Back', looksGood: 'Looks good',
    s3Title: 'Make it fit tonight', s3Sub: 'A little context helps keep suggestions realistic.',
    timeLabel: 'I have', servingsLabel: 'Cooking for', dietLabel: 'Keep it',
    t15: '15 minutes', t30: '30 minutes', t60: 'Up to an hour',
    p1: '1 person', p2: '2 people', p4: '3–4 people',
    dAny: 'Anything goes', dVeg: 'Vegetarian', dDairy: 'Dairy-free',
    showResults: 'Show my options', restart: 'Start over',
    s4Title: 'Your dinner shortlist', s4Sub: 'Ranked for what you have and how much time you have.',
    viewRecipe: 'View recipe', min: 'min', servings: 'servings', match: 'match',
    backToOptions: '← Back to options',
    whatGoesIn: 'What goes in', howToMake: 'How to make it',
    feedbackQ: 'Would you make this?',
    fbYes: "I'll cook this", fbNo: 'Not useful', fbWrong: 'Wrong ingredient', saveBtn: '☆ Save',
    savedToast: 'Saved for later', alreadySaved: 'Already saved', feedbackToast: (f) => `Thanks — “${f}” saved`,
    errNoInput: 'Please add at least one ingredient (type a list or upload a photo).',
    errNotImage: 'That file is not an image. Please choose a photo (JPG, PNG).',
    errUnknownWord: (w) => `We don't recognise “${w}”. Please check the spelling or try a simpler word.`,
    errNoMatch: 'No recipes matched your ingredients. Try adding a staple like rice, pasta, eggs or bread.',
    langSwitched: 'Language switched to English',
    demoScan: 'Demo scan: recognised typical fridge items. Edit them on the next screen.',
    detailLead: 'This recipe uses what you already have, with no unnecessary shopping trip.',
    shutter: '◎ Take photo', cancel: 'Stop camera', openCamera: 'Use camera', orFile: 'or upload a file',
    camDenied: 'Camera access was denied. You can upload a photo instead.',
    camNoDevice: 'No camera found on this device. You can upload a photo instead.',
    scanBusy: 'Recognising ingredients…', scanDone: (n) => `Recognised ${n} ingredient${n === 1 ? '' : 's'} — check them on the next screen.`,
    scanFail: 'Recognition is unavailable right now. You can type your ingredients instead.',
  },
  kz: {
    navHome: 'Асхана', navSaved: 'Сақталған', langBtn: 'EN',
    eyebrow: 'Тоңазытқышыңыз — пайдалы',
    heroH1: 'Бар нәрседен ас дайындаңыз. <em>Азық-түлік төкпеңіз.</em>',
    heroP: 'Қолыңыздағы азық-түліктерді көрсетіңіз — бірнеше реалды кешкі ас идеяларын секунттар ішінде алыңыз.',
    startBtn: 'Кешкі асымды тап', artCopy: 'Кәдімгі сейсенбі күнінің тоңазытқышына арналған.',
    phoneTitle: 'Бүгінгі жоспар', phoneH3: 'Бар нәрсені<br>қолдан.',
    savedTitle: 'Сақталған идеяларыңыз', savedSub: 'Кейінге қалдырылған рецепттер осында көрсетіледі.',
    savedEmpty: 'Әзірге сақталған рецепт жоқ. Кешкі ас тауып, «Сақтау» түймесін басыңыз.',
    s1Title: 'Бар нәрседен бастаңыз', s1Sub: 'Фото тезірек. Қысқа тізім де жарамды.',
    tabPhoto: '📷 Тоңазытқышты сканерлеу', tabManual: '✎ Азық-түліктерді жазу',
    dropStrong: 'Тоңазытқыш фотосуретін осында тастаңыз', dropSpan: 'немесе суретті таңдау үшін басыңыз',
    placeholder: 'Мысалы: жұмыртқа, күріш, қызанақ, шпинат...',
    continueBtn: 'Жалғастыру',
    s2Title: 'Дұрыс па?', s2Sub: 'Қате нәрсені өшіріп, жетіспейтінін қосыңыз.',
    addPlaceholder: 'Азық-түлік қосу', addBtn: 'Қосу', backBtn: 'Артқа', looksGood: 'Дұрыс',
    s3Title: 'Бүгінгіге сай етіңіз', s3Sub: 'Контекст ұсыныстарды нақтылауға көмектеседі.',
    timeLabel: 'Уақытым', servingsLabel: 'Кімге дайындаймын', dietLabel: 'Диета',
    t15: '15 минут', t30: '30 минут', t60: 'Бір сағатқа дейін',
    p1: '1 адам', p2: '2 адам', p4: '3–4 адам',
    dAny: 'Барлығы жарамды', dVeg: 'Вегетариандық', dDairy: 'Сүтсіз',
    showResults: 'Ұсыныстарымды көрсет', restart: 'Қайтадан бастау',
    s4Title: 'Кешкі ас тізіміңіз', s4Sub: 'Бар азық-түлік пен уақытыңызға сай реттелген.',
    viewRecipe: 'Рецептті көру', min: 'мин', servings: 'порция', match: 'сәйкес',
    backToOptions: '← Ұсыныстарға оралу',
    whatGoesIn: 'Керек азық-түліктер', howToMake: 'Дайындау тәртібі',
    feedbackQ: 'Бұл тағамды дайындайсыз ба?',
    fbYes: 'Дайындаймын', fbNo: 'Пайдасыз', fbWrong: 'Азық-түлік қате', saveBtn: '☆ Сақтау',
    savedToast: 'Кейін үшін сақталды', alreadySaved: 'Бұрын сақталған', feedbackToast: (f) => `Рахмет — «${f}» сақталды`,
    errNoInput: 'Кемінде бір азық-түлік қосыңыз (тізім жазыңыз немесе фото жүктеңіз).',
    errNotImage: 'Бұл файл сурет емес. Фотосурет таңдаңыз (JPG, PNG).',
    errUnknownWord: (w) => `«${w}» сөзі танылмады. Емлесін тексеріңіз немесе қарапайым сөз жазыңыз.`,
    errNoMatch: 'Азық-түліктеріңізге сәйкес рецепт табылмады. Күріш, паста, жұмыртқа немесе нан сияқты негізгі өнім қосыңыз.',
    langSwitched: 'Тіл қазақ тіліне ауысты',
    demoScan: 'Демо сканерлеу: тоңазытқыштың типтік өнімдері танылды. Келесі экранда түзетіңіз.',
    detailLead: 'Бұл рецепт қолыңызда бар нәрсені қолданады — қосымша сатып алусыз.',
    shutter: '◎ Сурет түсіру', cancel: 'Камераны өшіру', openCamera: 'Камераны қолдану', orFile: 'немесе файл жүктеу',
    camDenied: 'Камераға рұқсат берілмеді. Орнына фотосурет жүктей аласыз.',
    camNoDevice: 'Бұл құрылғыда камера табылмады. Орнына фотосурет жүктей аласыз.',
    scanBusy: 'Азық-түліктерді тану…', scanDone: (n) => `${n} азық-түлік танылды — келесі экранда тексеріңіз.`,
    scanFail: 'Тану қазіргі уақытта қолжетімсіз. Азық-түліктерді қолмен жазуыңызға болады.',
  }
};
let lang = localStorage.getItem('smartbite-lang') || 'en';
const t = (k) => I18N[lang][k];

// ---- state ----
const state = {
  step: 0, tab: 'photo', ingredients: [], time: 30, servings: 2, diet: 'anything',
  selected: null, lastResults: [], photoData: null,
  saved: JSON.parse(localStorage.getItem('smartbite-saved') || '[]')
};

function toast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2400);
}
function progress() {
  return '<div class="stepper">' + [1,2,3,4].map((i) => `<span class="step ${i <= state.step ? 'done' : ''}"></span>`).join('') + '</div>';
}
function errorBox(msg) { return `<div class="error-box" role="alert">⚠ ${msg}</div>`; }

function render() {
  flow.className = state.step ? 'fade' : 'hidden';
  if (!state.step) return;
  flow.innerHTML = [null, inputScreen, confirmScreen, constraintScreen, resultsScreen, detailScreen][state.step]();
  bind();
}

// ---- screens ----
function inputScreen() { return `${progress()}<div class="panel"><h2>${t('s1Title')}</h2><p class="sub">${t('s1Sub')}</p>${state.error ? errorBox(state.error) : ''}<div class="input-tabs"><button class="tab ${state.tab === 'photo' ? 'active' : ''}" data-tab="photo">${t('tabPhoto')}</button><button class="tab ${state.tab === 'manual' ? 'active' : ''}" data-tab="manual">${t('tabManual')}</button></div><div class="photo ${state.tab === 'photo' ? '' : 'hidden'}"><div id="camera-zone"><div id="camera-view" class="camera-view hidden"><video id="camera-video" autoplay playsinline muted></video><div class="scan-frame"></div></div><div id="camera-actions" class="camera-actions hidden"><button class="cta" id="shutter-btn">${t('shutter')}</button><button class="cta secondary" id="stop-camera">${t('cancel')}</button></div><label class="dropzone" id="dropzone" for="photo-input"><div><div class="camera">⌁</div><strong>${t('dropStrong')}</strong><span>${t('dropSpan')}</span><div class="cam-alt"><button type="button" class="linklike" id="open-camera">${t('openCamera')}</button><span> · </span><span>${t('orFile')}</span></div></div><input id="photo-input" type="file" accept="image/*"></label><div id="scan-status" class="scan-status hidden"></div></div><div class="preview" id="preview"><img alt=""></div></div><div class="manual ${state.tab === 'manual' ? '' : 'hidden'}"><textarea id="manual-input" placeholder="${t('placeholder')}"></textarea></div><div class="actions"><span></span><button class="cta" id="continue-input">${t('continueBtn')}</button></div></div>`; }

function confirmScreen() { return `${progress()}<div class="panel"><h2>${t('s2Title')}</h2><p class="sub">${t('s2Sub')}</p>${state.error ? errorBox(state.error) : ''}<div class="chips">${state.ingredients.map((x, i) => `<span class="chip">${x}<button data-remove="${i}" aria-label="remove">×</button></span>`).join('')}</div><div class="add-row"><input id="add-ingredient" placeholder="${t('addPlaceholder')}"><button class="cta secondary" id="add-btn">${t('addBtn')}</button></div><div class="actions"><button class="cta secondary" id="back-input">${t('backBtn')}</button><button class="cta" id="continue-confirm">${t('looksGood')}</button></div></div>`; }

function constraintScreen() { return `${progress()}<div class="panel"><h2>${t('s3Title')}</h2><p class="sub">${t('s3Sub')}</p><div class="form-grid"><div class="field"><label for="time">${t('timeLabel')}</label><select id="time"><option value="15">${t('t15')}</option><option value="30" selected>${t('t30')}</option><option value="60">${t('t60')}</option></select></div><div class="field"><label for="servings">${t('servingsLabel')}</label><select id="servings"><option value="1">${t('p1')}</option><option value="2" selected>${t('p2')}</option><option value="4">${t('p4')}</option></select></div><div class="field"><label for="diet">${t('dietLabel')}</label><select id="diet"><option value="anything">${t('dAny')}</option><option value="vegetarian">${t('dVeg')}</option><option value="dairy-free">${t('dDairy')}</option></select></div></div><div class="actions"><button class="cta secondary" id="back-confirm">${t('backBtn')}</button><button class="cta" id="show-results">${t('showResults')}</button></div></div>`; }

function normalize(word) { return window.ALIASES[word] || word; }
function score(recipe) {
  const have = state.ingredients.map(normalize);
  const hits = have.filter((i) => recipe.uses.some((u) => i.includes(u) || u.includes(i))).length;
  return hits * 25 + (recipe.time <= state.time ? 20 : 0);
}
function recipeCard(recipe) {
  const L = recipe[lang];
  const matchPct = Number.isFinite(recipe.score) ? Math.min(99, Math.max(32, recipe.score)) : null;
  return `<article class="recipe-card"><div class="recipe-top"><div class="recipe-emoji">${recipe.emoji}</div><span class="badge">${L.tag}</span></div><h3>${L.title}</h3><p>${L.desc}</p><div class="meta"><span>◷ ${recipe.time} ${t('min')}</span><span>♧ ${recipe.servings} ${t('servings')}</span>${matchPct ? `<span>${matchPct}% ${t('match')}</span>` : ''}</div><button class="open" data-open="${recipe.id}">${t('viewRecipe')}</button></article>`;
}
function resultsScreen() {
  const list = window.RECIPES.map((r) => ({ ...r, score: score(r) })).sort((a, b) => b.score - a.score);
  const matched = list.filter((r) => r.score >= 50);
  state.lastResults = matched;
  if (!matched.length) {
    return `${progress()}<div class="panel"><h2>${t('s4Title')}</h2>${errorBox(t('errNoMatch'))}<div class="actions"><button class="cta secondary" id="restart">${t('restart')}</button></div></div>`;
  }
  return `${progress()}<div class="results-head"><div><h2>${t('s4Title')}</h2><p>${t('s4Sub')}</p></div><button class="cta secondary" id="restart">${t('restart')}</button></div><div class="recipe-grid">${matched.slice(0, 6).map(recipeCard).join('')}</div>`;
}
function detailScreen() {
  const r = window.RECIPES.find((x) => x.id === state.selected);
  if (!r) return resultsScreen();
  const L = r[lang];
  return `${progress()}<div class="panel detail"><div class="detail-visual">${r.emoji}</div><div><button class="cta secondary" id="back-results">${t('backToOptions')}</button><h2>${L.title}</h2><p class="lead">${L.desc} ${t('detailLead')}</p><div class="meta"><span>◷ ${r.time} ${t('min')}</span><span>♧ ${r.servings} ${t('servings')}</span></div><div class="section-title">${t('whatGoesIn')}</div><div class="ingredients">${r.uses.map((x) => `<span class="ingredient">${x}</span>`).join('')}</div><div class="section-title">${t('howToMake')}</div><ol class="steps">${L.steps.map((x) => `<li>${x}</li>`).join('')}</ol><div class="feedback"><strong>${t('feedbackQ')}</strong><br><button data-feedback="${t('fbYes')}">${t('fbYes')}</button><button data-feedback="${t('fbNo')}">${t('fbNo')}</button><button data-feedback="${t('fbWrong')}">${t('fbWrong')}</button><button id="save-recipe">${t('saveBtn')}</button></div></div></div>`;
}

// ---- event binding ----
// ---- camera ----
let cameraStream = null;
function stopCamera() {
  if (cameraStream) { cameraStream.getTracks().forEach((tk) => tk.stop()); cameraStream = null; }
  const v = $('#camera-video'); if (v) v.srcObject = null;
}
async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) { state.error = t('camNoDevice'); render(); return; }
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
  } catch {
    state.error = t('camDenied'); render(); return;
  }
  state.error = null;
  const view = $('#camera-view'), actions = $('#camera-actions'), dz = $('#dropzone');
  if (!view) return; // tab switched while awaiting permission
  view.classList.remove('hidden'); actions.classList.remove('hidden'); if (dz) dz.classList.add('hidden');
  $('#camera-video').srcObject = cameraStream;
}
function capturePhoto() {
  const v = $('#camera-video');
  const c = document.createElement('canvas');
  c.width = v.videoWidth || 720; c.height = v.videoHeight || 960;
  c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
  c.toBlob((blob) => {
    if (!blob) return;
    const dataUrl = c.toDataURL('image/jpeg', 0.9);
    state.photoData = { dataUrl, base64: dataUrl.split(',')[1], mimeType: 'image/jpeg' };
    stopCamera();
    const p = $('#preview'); if (p) { p.style.display = 'block'; p.querySelector('img').src = dataUrl; }
    const view = $('#camera-view'), actions = $('#camera-actions');
    if (view) view.classList.add('hidden'); if (actions) actions.classList.add('hidden');
    runRecognition(state.photoData);
  }, 'image/jpeg', 0.9);
}
async function runRecognition(photo) {
  const status = $('#scan-status');
  if (status) { status.textContent = t('scanBusy'); status.classList.remove('hidden'); }
  let ingredients = null;
  try {
    const resp = await fetch('/.netlify/functions/recognize', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: photo.base64, mimeType: photo.mimeType })
    });
    if (resp.ok) {
      const data = await resp.json();
      if (Array.isArray(data.ingredients)) ingredients = data.ingredients;
    }
  } catch { /* network or function unavailable */ }
  if (status) status.classList.add('hidden');
  if (ingredients && ingredients.length) {
    state.ingredients = ingredients.map(normalize).filter((w) => w && w.length > 1);
    toast(t('scanDone')(state.ingredients.length));
  } else if (ingredients) {
    state.ingredients = [];
    state.error = t('errNoMatch');
    render();
  } else {
    // graceful fallback: local demo recognition, transparent to the user
    state.ingredients = ['tomato', 'egg', 'rice', 'onion'];
    toast(t('demoScan'));
  }
}

function bind() {
  document.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => { state.tab = b.dataset.tab; stopCamera(); render(); });
  const openCam = $('#open-camera');
  if (openCam) openCam.onclick = (e) => { e.preventDefault(); e.stopPropagation(); startCamera(); };
  const shutter = $('#shutter-btn');
  if (shutter) shutter.onclick = capturePhoto;
  const stopBtn = $('#stop-camera');
  if (stopBtn) stopBtn.onclick = () => { stopCamera(); const v = $('#camera-view'), a = $('#camera-actions'), dz = $('#dropzone'); if (v) v.classList.add('hidden'); if (a) a.classList.add('hidden'); if (dz) dz.classList.remove('hidden'); };
  const photo = $('#photo-input');
  if (photo) photo.onchange = (e) => {
    const file = e.target.files[0]; if (!file) return;
    if (!file.type.startsWith('image/')) { state.error = t('errNotImage'); render(); return; }
    state.error = null;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const p = $('#preview'); if (p) { p.style.display = 'block'; p.querySelector('img').src = ev.target.result; }
      const parts = String(ev.target.result).split(',');
      state.photoData = { dataUrl: ev.target.result, base64: parts[1], mimeType: file.type };
      runRecognition(state.photoData);
    };
    reader.readAsDataURL(file);
  };
  const next = $('#continue-input');
  if (next) next.onclick = async () => {
    if (state.tab === 'photo') {
      if (state.photoData && state.ingredients.length) { state.step = 2; render(); return; }
      if (state.photoData && !state.ingredients.length) { // photo taken, recognition returned nothing
        state.error = t('errNoInput'); render(); return;
      }
      // no photo yet: transparent demo fallback so the flow is testable without a camera
      state.ingredients = ['tomato', 'egg', 'rice', 'onion'];
      toast(t('demoScan'));
    } else {
      const text = $('#manual-input')?.value || '';
      const words = text.split(/[,\n]+/).map((x) => normalize(x.trim().toLowerCase())).filter(Boolean);
      const known = new Set([...window.KNOWN, ...Object.keys(window.ALIASES)]);
      const unknown = words.find((w) => !known.has(w) && w.length > 2);
      if (!words.length) { state.error = t('errNoInput'); render(); return; }
      if (unknown) { state.error = t('errUnknownWord')(unknown); render(); return; }
      state.error = null;
      state.ingredients = words;
    }
    state.step = 2; render();
  };
  document.querySelectorAll('[data-remove]').forEach((b) => b.onclick = () => { state.ingredients.splice(Number(b.dataset.remove), 1); render(); });
  const add = $('#add-btn');
  if (add) add.onclick = () => { const input = $('#add-ingredient'); if (input.value.trim()) { state.ingredients.push(input.value.trim().toLowerCase()); render(); } };
  const good = $('#continue-confirm');
  if (good) good.onclick = () => { if (!state.ingredients.length) { state.error = t('errNoInput'); render(); return; } state.error = null; state.step = 3; render(); };
  const show = $('#show-results');
  if (show) show.onclick = () => { state.time = Number($('#time').value); state.servings = Number($('#servings').value); state.diet = $('#diet').value; state.step = 4; render(); };
  document.querySelectorAll('[data-open]').forEach((b) => b.onclick = () => { state.selected = b.dataset.open; state.step = 5; render(); });
  const back = $('#back-results'); if (back) back.onclick = () => { state.step = 4; render(); };
  const backInput = $('#back-input'); if (backInput) backInput.onclick = () => { state.step = 1; render(); };
  const backConfirm = $('#back-confirm'); if (backConfirm) backConfirm.onclick = () => { state.step = 2; render(); };
  document.querySelectorAll('[data-feedback]').forEach((b) => b.onclick = () => toast(t('feedbackToast')(b.dataset.feedback)));
  const save = $('#save-recipe');
  if (save) save.onclick = () => {
    if (!state.saved.includes(state.selected)) { state.saved.push(state.selected); localStorage.setItem('smartbite-saved', JSON.stringify(state.saved)); toast(t('savedToast')); }
    else toast(t('alreadySaved'));
  };
  const restart = $('#restart');
  if (restart) restart.onclick = () => { state.step = 1; state.ingredients = []; state.error = null; state.photoData = null; stopCamera(); const p = $('#preview'); if (p) p.style.display = 'none'; render(); };
  window.addEventListener('beforeunload', stopCamera);
}

// ---- language toggle ----
function applyLang() {
  document.documentElement.lang = lang === 'kz' ? 'kk' : 'en';
  document.title = lang === 'kz' ? 'SmartBite AI — бар нәрседен ас дайындаңыз' : 'SmartBite AI — cook what you have';
  $('[data-nav="home"]').textContent = t('navHome');
  $('[data-nav="saved"]').textContent = t('navSaved');
  $('#lang-btn').textContent = t('langBtn');
  $('#eyebrow').innerHTML = t('eyebrow');
  $('#hero-h1').innerHTML = t('heroH1');
  $('#hero-p').textContent = t('heroP');
  $('#start-btn').textContent = t('startBtn');
  $('#art-copy').textContent = t('artCopy');
  $('#phone-title').textContent = t('phoneTitle');
  $('#phone-h3').innerHTML = t('phoneH3');
  $('#saved-title').textContent = t('savedTitle');
  $('#saved-sub').textContent = t('savedSub');
  render();
  if ($('#saved-view') && !$('#saved-view').classList.contains('hidden')) showSaved();
}
$('#lang-btn').onclick = () => { lang = lang === 'en' ? 'kz' : 'en'; localStorage.setItem('smartbite-lang', lang); applyLang(); };

// ---- static wiring ----
$('#start-btn').onclick = () => { state.step = 1; render(); setTimeout(() => flow.scrollIntoView({ behavior: 'smooth' }), 30); };
document.querySelectorAll('[data-nav]').forEach((b) => b.onclick = () => {
  document.querySelectorAll('[data-nav]').forEach((x) => x.classList.remove('active'));
  b.classList.add('active');
  if (b.dataset.nav === 'saved') showSaved();
  else { $('#home-view').classList.remove('hidden'); $('#saved-view').classList.add('hidden'); }
});
function showSaved() {
  const list = $('#saved-list');
  list.innerHTML = state.saved.length
    ? state.saved.map((id) => recipeCard(window.RECIPES.find((r) => r.id === id))).join('')
    : `<div class="callout">${t('savedEmpty')}</div>`;
  $('#home-view').classList.add('hidden');
  $('#saved-view').classList.remove('hidden');
  list.querySelectorAll('[data-open]').forEach((b) => b.onclick = () => {
    $('#home-view').classList.remove('hidden');
    $('#saved-view').classList.add('hidden');
    state.selected = b.dataset.open; state.step = 5; render();
  });
}
applyLang();
