/* 學習島（三～六年級）— 主程式
 * 資料在 js/data/*.js（三年級）與 js/data/g4、g5、g6/*.js（四～六年級），每個檔案把一個科目 push 進 window.SUBJECTS。
 * 科目的 grade 欄位決定年級（沒寫就是 3）；首頁可切換年級。
 * 路由：#/ 首頁、#/s/科目、#/u/單元、#/p/單元（練習）、#/mix 綜合挑戰、#/review 錯題本
 */
(function () {
  'use strict';

  const SUBJECTS = window.SUBJECTS || [];
  const UNITS = {};

  /* 補充內容（js/data/more/*.js）：依單元 id 合併。
   *   think: [[問題, [推理步驟…], 還可以問]] → 「想一想」區塊，放在重點整理前面
   *   lesson: [教學區塊…] → 同樣放在重點整理前面
   *   quiz: [[題目, [正解, 錯1, 錯2, 錯3], 解說, 推理?]] 或一般題目物件 → 接在原本題目後面（不改變舊題目的編號）
   */
  const MORE = window.MORE || {};
  SUBJECTS.forEach(s => s.units.forEach(u => {
    const m = MORE[u.id]; if (!m) return;
    const add = (m.lesson || []).concat((m.think || []).map(t => Array.isArray(t) ? { t: 'think', q: t[0], steps: t[1], ask: t[2] } : Object.assign({ t: 'think' }, t)));
    if (add.length) {
      let at = u.lesson.findIndex(b => b.t === 'key');
      if (at < 0) at = u.lesson.findIndex(b => b.t === 'tip');
      if (at < 0) at = u.lesson.length;
      u.lesson.splice(at, 0, ...add);
    }
    (m.quiz || []).forEach(q => u.quiz.push(Array.isArray(q) ? Object.assign({ q: q[0], opts: q[1], ans: 0, exp: q[2] }, q[3] ? { logic: true } : {}) : q));
  }));
  SUBJECTS.forEach(s => { s.grade = s.grade || 3; s.units.forEach((u, i) => { u.subject = s; u.no = i + 1; UNITS[u.id] = u; }); });
  const GRADES = [...new Set(SUBJECTS.map(s => s.grade))].sort();
  const GNAME = { 3: '三年級', 4: '四年級', 5: '五年級', 6: '六年級' };

  const ROUND = 10;          // 每回合題數
  const FIXED_IN_GEN = 5;    // 有自動出題的單元，每回合放幾題固定題

  /* ---------------- 小工具 ---------------- */
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  const plain = s => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

  /** 數字的國字讀法（0–99999），例：5803 → 五千八百零三 */
  function readNum(n) {
    if (n === 0) return '零';
    const D = '零一二三四五六七八九', U = ['', '十', '百', '千', '萬'];
    const s = String(n);
    let out = '', zero = false;
    for (let i = 0; i < s.length; i++) {
      const d = +s[i], p = s.length - 1 - i;
      if (d === 0) { zero = true; continue; }
      if (zero && out) out += '零';
      zero = false;
      out += D[d] + U[p];
    }
    return out.startsWith('一十') ? out.slice(1) : out;
  }

  /** 由正解與干擾選項組成選擇題（自動去重、補足 4 個） */
  function mc(q, right, wrongs, exp, extra) {
    const opts = [String(right)];
    wrongs.map(String).forEach(w => { if (opts.length < 4 && !opts.includes(w)) opts.push(w); });
    return Object.assign({ q, opts, ans: 0, exp }, extra || {});
  }

  /** 單字題：從單字表隨機出「意思／說法／拼音／聽力／拼字」題（lang：'taigi' 或 'en'） */
  function vocabQ(words, lang) {
    const pool = words.filter(w => w.m);
    const x = pick(pool);
    const others = shuffle(pool.filter(y => y !== x && y.m !== x.m && y.w !== x.w)).slice(0, 3);
    const bare = s => plain(s).replace(/（.*?）|\(.*?\)/g, '');
    if (lang === 'taigi') {
      const same = bare(x.m) === bare(x.w);
      const t = same ? 'rom' : pick(['meaning', 'meaning', 'reverse', 'rom']);
      const exp = `${x.w}（${x.r}）＝「${x.m}」。`;
      if (t === 'meaning') return mc(`台語「${x.w}」（${x.r}）是什麼意思？`, x.m, others.map(o => o.m), exp);
      if (t === 'reverse') return mc(`「${x.m}」的台語怎麼說？`, `${x.w}（${x.r}）`, others.map(o => `${o.w}（${o.r}）`), exp);
      return mc(`「${x.w}」${same ? '' : `（${x.m}）`}的臺羅拼音是哪一個？`, x.r, others.map(o => o.r), exp);
    }
    const single = /^[a-z]+$/i.test(x.w) && x.w.length <= 11;
    const kk = kkOf(x.w), kkOthers = others.map(o => kkOf(o.w)).filter(Boolean);
    const modes = single ? ['meaning', 'reverse', 'listen', 'spell', 'spell'] : ['meaning', 'reverse', 'listen'];
    if (kk && kkOthers.length >= 2) modes.push('kk');
    const t = pick(modes);
    if (t === 'kk') return mc(`「${x.w}」（${x.m}）的 KK 音標是哪一個？`, kk, kkOthers, `${x.w} 唸 ${kk}。`, { say: x.s || x.w });
    const exp = `${x.w}＝${x.m}。`;
    if (t === 'meaning') return mc(`「${x.w}」是什麼意思？`, x.m, others.map(o => o.m), exp, { say: x.s || x.w });
    if (t === 'reverse') return mc(`「${x.m}」的英文是哪一個？`, x.w, others.map(o => o.w), exp);
    if (t === 'listen') return mc('按「🔊 聽英文」，你聽到的是哪一個？', x.w, others.map(o => o.w), exp, { say: x.s || x.w, noread: true });
    return { q: `拼拼看：「${x.m}」的英文怎麼拼？（${x.w[0]} 開頭，共 ${x.w.length} 個字母）`, input: true, text: true, ans: x.w, exp: `${x.w}：${x.w.split('').join('-')}` };
  }

  /** KK 音標（js/data/kk.js 由 CMU 發音辭典轉換產生） */
  function kkOf(w) { const K = window.KK || {}; const k = String(w).toLowerCase().replace(/[!?.,]/g, '').trim(); return K[k] ? `[${K[k]}]` : ''; }

  // 給資料檔的出題函式使用
  window.G3 = { rnd, pick, shuffle, readNum, mc, vocabQ };

  // vocab: true 的單元，從教學中的單字卡自動出題（若已有 gen，兩種各半）
  SUBJECTS.forEach(s => s.units.forEach(u => {
    if (!u.vocab) return;
    const words = u.lesson.filter(b => b.t === 'words' || b.t === 'sents').flatMap(b => b.v).concat(u.extraWords || []);
    const lang = s.id.startsWith('taigi') ? 'taigi' : 'en';
    const own = u.gen;
    u.gen = own ? () => (Math.random() < .5 ? vocabQ(words, lang) : own()) : () => vocabQ(words, lang);
    u.fixedN = u.fixedN || 5;
  }));

  /* ---------------- 學習紀錄 ---------------- */
  const KEY = 'g3isle_v2';
  let store = load();
  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(KEY)) || {};
      return { units: d.units || {}, wrong: d.wrong || {} };
    } catch (e) { return { units: {}, wrong: {} }; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* 無痕模式等 */ }
    updateTop();
  }
  /* 目前年級：記在 localStorage；打開某科目或單元時自動切到它的年級 */
  const GKEY = 'isle_grade';
  let grade = (() => { try { return +localStorage.getItem(GKEY); } catch (e) { return 0; } })();
  if (!GRADES.includes(grade)) grade = GRADES[0];
  const gradeSubjects = () => SUBJECTS.filter(s => s.grade === grade);
  function setGrade(g) {
    if (g === grade || !GRADES.includes(g)) return;
    grade = g;
    try { localStorage.setItem(GKEY, g); } catch (e) { /* 無痕模式等 */ }
    updateTop();
  }
  const unitRec = id => store.units[id] || (store.units[id] = { best: 0, plays: 0, read: false });
  function starsOf(id) {
    const r = store.units[id];
    if (!r || !r.plays) return 0;
    return r.best >= 1 ? 3 : r.best >= 0.8 ? 2 : r.best >= 0.6 ? 1 : 0;
  }
  const starHtml = n => `<span class="stars" aria-label="${n} 顆星">${'★'.repeat(n)}<span class="off">${'★'.repeat(3 - n)}</span></span>`;
  function subjectStars(s) { return s.units.reduce((t, u) => t + starsOf(u.id), 0); }
  function updateTop() {
    $('#starCount').textContent = gradeSubjects().reduce((t, s) => t + subjectStars(s), 0);
    $('#brandName').textContent = `${GNAME[grade]}學習島`;
    $('#wrongCount').textContent = Object.keys(store.wrong).length;
  }

  /* ---------------- 語音朗讀（Web Speech，手機相容處理） ---------------- */
  const synth = window.speechSynthesis;
  const NOVELTY = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|junior|ralph|fred|kathy|grandma|grandpa|eddy|flo|reed|rocko|sandy|shelley)\b/i;
  let voices = [];
  function loadVoices() { if (synth) voices = synth.getVoices().filter(v => !NOVELTY.test(v.name)); }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
  function pickVoice(lang) {
    const want = lang === 'en' ? /^en[-_]US/i : /^zh[-_](TW|Hant)/i;
    const loose = lang === 'en' ? /^en[-_]/i : /^zh/i;
    const local = voices.filter(v => v.localService !== false);
    const pool = local.filter(v => want.test(v.lang)).concat(local.filter(v => loose.test(v.lang) && !want.test(v.lang)));
    return pool.find(v => v.default) || pool[0] || null;
  }
  let speechOk = false, hintShown = false, playToken = 0;
  function stopSpeech() { playToken++; if (synth && (synth.speaking || synth.pending)) synth.cancel(); }
  function speak(text, lang) {
    return new Promise(resolve => {
      if (!synth) { showSpeechHint(); return resolve(); }
      const u = new SpeechSynthesisUtterance(plain(text));
      u.lang = lang === 'en' ? 'en-US' : 'zh-TW';
      u.rate = lang === 'en' ? 0.85 : 0.95;
      const v = pickVoice(lang); if (v) u.voice = v;
      let started = false;
      u.onstart = () => { started = speechOk = true; };
      u.onend = u.onerror = () => resolve();
      setTimeout(resolve, 3000 + u.text.length * 200);
      setTimeout(() => { if (!started && !speechOk) showSpeechHint(); }, 2500);
      if (synth.paused) synth.resume();
      synth.speak(u);
    });
  }
  function say(text, lang) { stopSpeech(); speak(text, lang); }
  async function playSeq(btn, items) {
    if (btn.dataset.on) { stopSpeech(); delete btn.dataset.on; btn.textContent = btn.dataset.label; return; }
    stopSpeech(); const my = playToken;
    btn.dataset.on = '1'; btn.dataset.label = btn.textContent; btn.textContent = '⏹ 停止';
    for (const it of items) {
      if (my !== playToken) break;
      it.el.classList.add('playing');
      it.el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      await speak(it.text, it.lang);
      await new Promise(r => setTimeout(r, 400));
      it.el.classList.remove('playing');
    }
    if (my === playToken) { delete btn.dataset.on; btn.textContent = btn.dataset.label; }
  }
  function showSpeechHint() {
    if (hintShown) return; hintShown = true;
    const ua = navigator.userAgent;
    const tips = [];
    if (/\bLine\/|FBAN|FBAV|Instagram|MicroMessenger/i.test(ua)) tips.push('你正在 LINE／臉書裡開啟，請按右上角 ⋯ 選「用瀏覽器開啟」。');
    if (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) tips.push('iPhone／iPad 請關掉側邊的靜音開關。');
    tips.push('把「媒體音量」調大。');
    tips.push('建議用 Chrome（Android）或 Safari（iPhone）。Android 若沒有聲音，請到「設定 → 文字轉語音」安裝中文和英文語音。');
    const d = document.createElement('div');
    d.className = 'speech-hint'; d.setAttribute('role', 'alert');
    d.innerHTML = `<button type="button" aria-label="關閉">✕</button><b>🔇 聽不到聲音嗎？</b><ul>${tips.map(t => `<li>${t}</li>`).join('')}</ul>`;
    d.querySelector('button').onclick = () => d.remove();
    document.body.appendChild(d);
  }
  // LINE 內建瀏覽器 → 外部瀏覽器（保留 #路由）
  if (/\bLine\//i.test(navigator.userAgent) && !/[?&]openExternalBrowser=1/.test(location.search)) {
    location.replace(location.pathname + '?openExternalBrowser=1' + location.hash);
  }

  /* ---------------- 首頁 ---------------- */
  // 橫式地圖（電腦、平板）與直式地圖（手機）的島嶼位置
  // 6 座島 3×2；7 座島 4＋3；8 座島 4＋4；9 座島 3×3；10 座島 5×2（手機 2×5）
  const MAP_WIDE6 = { w: 900, h: 460, k: 1, pos: [[150, 130], [450, 95], [750, 135], [160, 335], [455, 330], [745, 340]] };
  const MAP_TALL6 = { w: 400, h: 600, k: .86, pos: [[105, 105], [295, 115], [105, 300], [295, 310], [105, 495], [295, 505]] };
  const MAP_WIDE7 = { w: 900, h: 460, k: .82, pos: [[115, 125], [340, 100], [565, 125], [790, 100], [228, 335], [450, 320], [672, 335]] };
  const MAP_TALL7 = { w: 400, h: 790, k: .86, pos: [[105, 105], [295, 115], [105, 300], [295, 310], [105, 495], [295, 505], [200, 690]] };
  const MAP_WIDE8 = { w: 900, h: 460, k: .82, pos: [[115, 125], [340, 100], [565, 125], [790, 100], [115, 345], [340, 320], [565, 345], [790, 320]] };
  const MAP_TALL8 = { w: 400, h: 790, k: .86, pos: [[105, 105], [295, 115], [105, 300], [295, 310], [105, 495], [295, 505], [105, 690], [295, 700]] };
  const MAP_WIDE9 = { w: 900, h: 640, k: .9, pos: [[150, 120], [450, 100], [750, 120], [150, 320], [450, 300], [750, 320], [150, 520], [450, 500], [750, 520]] };
  const MAP_TALL9 = { w: 400, h: 980, k: .86, pos: [[105, 105], [295, 115], [105, 300], [295, 310], [105, 495], [295, 505], [105, 690], [295, 700], [200, 885]] };
  const MAP_WIDE10 = { w: 900, h: 470, k: .72, pos: [[90, 130], [270, 110], [450, 130], [630, 110], [810, 130], [90, 345], [270, 325], [450, 345], [630, 325], [810, 345]] };
  const MAP_TALL10 = { w: 400, h: 980, k: .86, pos: [[105, 105], [295, 115], [105, 300], [295, 310], [105, 495], [295, 505], [105, 690], [295, 700], [105, 885], [295, 895]] };
  const MAP_WIDE11 = { w: 900, h: 640, k: .8, pos: [[115, 120], [340, 100], [565, 120], [790, 100], [115, 320], [340, 300], [565, 320], [790, 300], [228, 520], [450, 500], [672, 520]] };
  const MAP_TALL11 = { w: 400, h: 1175, k: .86, pos: [[105, 105], [295, 115], [105, 300], [295, 310], [105, 495], [295, 505], [105, 690], [295, 700], [105, 885], [295, 895], [200, 1080]] };
  const MAP_WIDE12 = { w: 900, h: 640, k: .8, pos: [[115, 120], [340, 100], [565, 120], [790, 100], [115, 320], [340, 300], [565, 320], [790, 300], [115, 520], [340, 500], [565, 520], [790, 500]] };
  const MAP_TALL12 = { w: 400, h: 1175, k: .86, pos: [[105, 105], [295, 115], [105, 300], [295, 310], [105, 495], [295, 505], [105, 690], [295, 700], [105, 885], [295, 895], [105, 1080], [295, 1090]] };
  const MAPS = { 6: [MAP_WIDE6, MAP_TALL6], 7: [MAP_WIDE7, MAP_TALL7], 8: [MAP_WIDE8, MAP_TALL8], 9: [MAP_WIDE9, MAP_TALL9], 10: [MAP_WIDE10, MAP_TALL10], 11: [MAP_WIDE11, MAP_TALL11], 12: [MAP_WIDE12, MAP_TALL12] };
  function islesSvg(map) {
    return gradeSubjects().map((s, i) => {
      const [x, y] = map.pos[i] || [100 + i * 120, 220];
      const st = subjectStars(s), max = s.units.length * 3;
      return `
      <g class="isle" tabindex="0" role="link" aria-label="${s.name}，${st}/${max} 顆星" data-href="#/s/${s.id}" transform="translate(${x} ${y}) scale(${map.k})">
        <ellipse cx="0" cy="38" rx="120" ry="34" fill="#38bdf8" opacity=".45"/>
        <g class="isle-land">
          <ellipse cx="0" cy="26" rx="104" ry="34" fill="#fde68a"/>
          <ellipse cx="0" cy="16" rx="90" ry="28" fill="${s.land || '#4ade80'}"/>
          <text x="0" y="22" text-anchor="middle" font-size="44">${s.icon}</text>
        </g>
        <g class="isle-label" transform="translate(0 -40)">
          <rect x="-82" y="-22" width="164" height="40" rx="20" fill="#fff" stroke="${s.color}" stroke-width="3"/>
          <text x="0" y="5" text-anchor="middle" font-size="19" font-weight="800" fill="#0f172a">${s.name}</text>
        </g>
        <g transform="translate(0 72)">
          <rect x="-46" y="-15" width="92" height="26" rx="13" fill="${s.color}"/>
          <text x="0" y="4" text-anchor="middle" font-size="15" font-weight="800" fill="#fff">★ ${st}/${max}</text>
        </g>
      </g>`;
    }).join('');
  }
  function mapSvg(map, cls) {
    return `
        <svg class="${cls}" viewBox="0 0 ${map.w} ${map.h}" role="img" aria-label="學習島地圖">
          <g class="wave" fill="none" stroke="#e0f2fe" stroke-width="3" stroke-linecap="round" opacity=".8">
            <path d="M20 ${map.h / 2} q20 -12 40 0 t40 0"/><path d="M${map.w / 3} ${map.h / 2 - 10} q20 -12 40 0 t40 0"/>
            <path d="M${map.w * .66} ${map.h / 2 - 5} q20 -12 40 0 t40 0"/><path d="M${map.w - 80} 60 q15 -10 30 0 t30 0"/>
            <path d="M40 ${map.h - 30} q20 -12 40 0 t40 0"/><path d="M${map.w * .65} ${map.h - 20} q20 -12 40 0 t40 0"/>
          </g>
          <g class="boat"><text x="0" y="${map.h / 2 + 8}" font-size="34">⛵</text></g>
          ${islesSvg(map)}
        </svg>`;
  }
  function renderHome() {
    document.body.style.setProperty('--c', '#0f766e');
    const subs = gradeSubjects();
    const totalUnits = subs.reduce((t, s) => t + s.units.length, 0);

    $('#view').innerHTML = `
      <div class="grade-tabs" role="tablist" aria-label="選擇年級">${GRADES.map(g => `<button type="button" role="tab" class="grade-tab${g === grade ? ' on' : ''}" aria-selected="${g === grade}" data-grade="${g}">${GNAME[g]}</button>`).join('')}</div>
      <section class="hero">
        <h1>嗨！今天想去哪一座島？</h1>
        <p>${GNAME[grade]}：${subs.length} 個科目、${totalUnits} 個單元。每個單元先讀<b>蛋蛋老師的重點教學</b>，再做 10 題練習，答得越好星星越多（最多 3 顆）。</p>
      </section>
      <div class="map-wrap">${(m => mapSvg(m[0], 'map-wide') + mapSvg(m[1], 'map-tall'))(MAPS[Math.min(12, Math.max(6, subs.length))])}</div>
      <div class="quick-row">
        <a class="quick" href="#/mix"><b>🎲 綜合挑戰</b><span>${GNAME[grade]} ${subs.length} 科隨機各種題目，10 題一回合</span></a>
        <a class="quick alt" href="#/review"><b>📕 錯題本（${Object.keys(store.wrong).length} 題）</b><span>答錯的題目都在這裡，重做答對就會消失</span></a>
      </div>
      <div class="subject-grid">
        ${subs.map(s => {
          const st = subjectStars(s), max = s.units.length * 3;
          return `<a class="subject-card" href="#/s/${s.id}" style="--c:${s.color}">
            <span class="ico">${s.icon}</span>
            <span style="flex:1;min-width:0">
              <h3>${s.name}</h3><p>${s.blurb}</p>
              <div class="bar"><i style="width:${Math.round(st / max * 100)}%"></i></div>
            </span></a>`;
        }).join('')}
      </div>`;

    document.querySelectorAll('.grade-tab').forEach(b => { b.onclick = () => { setGrade(+b.dataset.grade); renderHome(); }; });
    document.querySelectorAll('.isle').forEach(g => {
      const go = () => { location.hash = g.dataset.href; };
      g.addEventListener('click', go);
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }

  /* ---------------- 科目頁 ---------------- */
  function renderSubject(id) {
    const s = SUBJECTS.find(x => x.id === id);
    if (!s) return renderHome();
    document.body.style.setProperty('--c', s.color);
    $('#view').innerHTML = `
      <div class="crumb"><a href="#/">🏝️ 地圖</a> › ${GNAME[s.grade]} › ${s.name}</div>
      <section class="subject-head"><h1>${s.icon} ${s.name}</h1><p>${s.intro || s.blurb}</p></section>
      <div class="unit-list">
        ${s.units.map(u => {
          const r = store.units[u.id];
          const status = r && r.plays ? `最佳 ${Math.round(r.best * 100)} 分・練習 ${r.plays} 次` : (r && r.read ? '已讀教學，還沒練習' : '還沒開始');
          return `<a class="unit-row" href="#/u/${u.id}">
            <span class="num">${u.icon || u.no}</span>
            <span class="body"><h3>第 ${u.no} 課　${u.title}</h3><p>${u.summary}</p><p style="font-size:13px">${status}</p></span>
            ${starHtml(starsOf(u.id))}
          </a>`;
        }).join('')}
      </div>`;
  }

  /* ---------------- 單元教學頁 ---------------- */
  function renderUnit(id) {
    const u = UNITS[id];
    if (!u) return renderHome();
    const s = u.subject;
    document.body.style.setProperty('--c', s.color);
    unitRec(id).read = true; save();
    const idx = s.units.indexOf(u);
    const next = s.units[idx + 1];
    const nq = u.gen ? '自動出題，每次都不一樣' : `題庫 ${u.quiz.length} 題，每次隨機抽 ${Math.min(ROUND, u.quiz.length)} 題`;
    $('#view').innerHTML = `
      <div class="crumb"><a href="#/">🏝️ 地圖</a> › ${GNAME[s.grade]} › <a href="#/s/${s.id}">${s.name}</a> › 第 ${u.no} 課</div>
      <div class="unit-head">
        <h1>${u.icon || ''} ${u.title}</h1>
        <a class="btn" href="#/p/${u.id}">🎯 開始練習</a>
      </div>
      <article class="lesson">${u.lesson.map(renderBlock).join('')}</article>
      <div class="lesson-end">
        <p>讀完了嗎？試試看你學會多少！（${nq}）</p>
        <a class="btn big" href="#/p/${u.id}">🎯 開始練習 ${Math.min(ROUND, u.gen ? ROUND : u.quiz.length)} 題</a>
        ${next ? `<p style="margin-top:14px"><a href="#/u/${next.id}">下一課：${next.title} ›</a></p>` : ''}
      </div>`;
    mountLesson($('#view'));
  }

  function renderBlock(b) {
    switch (b.t) {
      case 'h': return `<section class="blk"><h2>${b.v}</h2>${b.p ? [].concat(b.p).map(p => `<p>${p}</p>`).join('') : ''}${b.cards ? cardsHtml(b.cards) : ''}</section>`;
      case 'p': return `<section class="blk">${[].concat(b.v).map(p => `<p>${p}</p>`).join('')}</section>`;
      case 'key': return `<section class="blk key"><h3>📌 ${b.title || '重點整理'}</h3><ul>${b.v.map(x => `<li>${x}</li>`).join('')}</ul></section>`;
      case 'tip': return `<section class="blk tip"><span class="egg" aria-hidden="true">🥚</span><div><b>蛋蛋老師小叮嚀</b><p>${b.v}</p></div></section>`;
      case 'ex': return `<section class="blk ex"><span class="ex-label">例題</span><p class="ex-q">${b.q}</p><ol>${b.steps.map(x => `<li>${x}</li>`).join('')}</ol>${b.a ? `<p>答：<span class="ex-a">${b.a}</span></p>` : ''}</section>`;
      case 'table': return `<section class="blk">${b.title ? `<h2>${b.title}</h2>` : ''}<div class="tbl-wrap"><table class="tbl"><thead><tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${b.note ? `<p class="qsub">${b.note}</p>` : ''}</section>`;
      case 'cards': return `<section class="blk">${b.title ? `<h2>${b.title}</h2>` : ''}${b.p ? `<p>${b.p}</p>` : ''}${cardsHtml(b.v)}</section>`;
      case 'svg': return `<section class="blk figure">${b.title ? `<h2 style="text-align:left">${b.title}</h2>` : ''}${b.v}${b.cap ? `<p class="cap">${b.cap}</p>` : ''}</section>`;
      case 'widget': return `<section class="blk widget">${b.title ? `<h2 style="text-align:left">${b.title}</h2>` : ''}${b.p ? `<p style="text-align:left">${b.p}</p>` : ''}<div data-widget="${b.v}"></div></section>`;
      case 'think': return `<section class="blk think"><h3>🤔 想一想</h3><p class="think-q">${b.q}</p><details><summary>先自己想想看，再點我看推理 👀</summary><ol>${b.steps.map(x => `<li>${x}</li>`).join('')}</ol>${b.ask ? `<p class="think-ask">🙋 還可以再問：${b.ask}</p>` : ''}</details></section>`;
      case 'words': return wordsHtml(b);
      case 'sents': return sentsHtml(b);
      default: return '';
    }
  }
  const cardsHtml = v => `<div class="cards">${v.map(c => `<div class="card-mini">${c.e ? `<div class="e">${c.e}</div>` : ''}<b>${c.h}</b><span>${c.p}</span></div>`).join('')}</div>`;
  function wordsHtml(b) {
    const lang = b.lang || 'zh';
    const canSay = lang !== 'taigi';
    const cards = b.v.map(w => `
      <div class="word" data-say="${canSay ? esc(w.s || w.w) : ''}" data-lang="${lang}">
        ${w.e ? `<div class="e">${w.e}</div>` : ''}
        <div class="w">${w.w}</div>
        ${w.r ? `<div class="r">${w.r}</div>` : (lang === 'en' && kkOf(w.w) ? `<div class="r kk">${kkOf(w.w)}</div>` : '')}
        ${w.m ? `<div class="m">${w.m}</div>` : ''}
        ${canSay ? `<button class="say" type="button" data-act="say">🔊 聽</button>` : ''}
      </div>`).join('');
    const note = lang === 'en' && b.v.some(w => kkOf(w.w)) ? `<p class="qsub">[ ] 裡是 KK 音標（美式發音），按 🔊 可以聽真正的聲音。</p>` : lang === 'taigi'
      ? `<p class="qsub">🗣️ 瀏覽器沒有台語語音，請跟著老師、家人一起唸。想聽真人發音，可以到<a href="https://sutian.moe.edu.tw/" target="_blank" rel="noopener">教育部臺灣台語常用詞辭典</a>查詢。</p>`
      : '';
    return `<section class="blk">${b.title ? `<h2>${b.title}</h2>` : ''}${b.p ? `<p>${b.p}</p>` : ''}
      ${canSay ? `<button class="btn ghost" type="button" data-act="playall">▶ 全部唸一遍</button>` : ''}
      <div class="words">${cards}</div>${note}</section>`;
  }
  function sentsHtml(b) {
    const lang = b.lang || 'taigi', canSay = lang === 'en';
    return `<section class="blk">${b.title ? `<h2>${b.title}</h2>` : ''}${b.p ? `<p>${b.p}</p>` : ''}
      ${canSay ? `<button class="btn ghost" type="button" data-act="playall">▶ 全部唸一遍</button>` : ''}
      <div class="sents">${b.v.map(x => `
        <div class="sent word" data-say="${canSay ? esc(x.w) : ''}" data-lang="${lang}">
          ${x.e ? `<span class="se">${x.e}</span>` : ''}
          <div class="sb"><div class="w">${x.w}</div>${x.r ? `<div class="r">${x.r}</div>` : ''}<div class="m">${x.m}</div></div>
          ${canSay ? `<button class="say" type="button" data-act="say">🔊</button>` : ''}
        </div>`).join('')}</div>
      ${lang === 'taigi' ? `<p class="qsub">🗣️ 句子的拼音是本調（沒有標變調）。請家人或老師示範，跟著唸最準。</p>` : ''}</section>`;
  }
  function mountLesson(root) {
    root.querySelectorAll('[data-act="say"]').forEach(btn => {
      btn.onclick = () => { const w = btn.closest('.word'); say(w.dataset.say, w.dataset.lang); };
    });
    root.querySelectorAll('[data-act="playall"]').forEach(btn => {
      btn.onclick = () => {
        const items = [...btn.parentElement.querySelectorAll('.word')].map(el => ({ el, text: el.dataset.say, lang: el.dataset.lang }));
        playSeq(btn, items);
      };
    });
    root.querySelectorAll('[data-widget]').forEach(el => { const w = WIDGETS[el.dataset.widget]; if (w) w(el); });
  }

  /* ---------------- 互動小工具 ---------------- */
  const WIDGETS = {
    /** 時鐘：撥動指針、計算經過時間 */
    clock(el) {
      let t = 9 * 60, start = null; // 一天中的第幾分鐘
      const label = m => {
        const h = Math.floor(m / 60) % 24, mm = m % 60;
        const part = h < 12 ? '上午' : (h === 12 ? '中午' : '下午');
        const h12 = h % 12 === 0 ? 12 : h % 12;
        return `${part} ${h12} 時 ${String(mm).padStart(2, '0')} 分`;
      };
      const ticks = Array.from({ length: 60 }, (_, i) => {
        const a = i * 6 * Math.PI / 180, r1 = i % 5 ? 88 : 82;
        return `<line x1="${100 + Math.sin(a) * r1}" y1="${100 - Math.cos(a) * r1}" x2="${100 + Math.sin(a) * 94}" y2="${100 - Math.cos(a) * 94}" stroke="#334155" stroke-width="${i % 5 ? 1 : 3}"/>`;
      }).join('');
      const nums = Array.from({ length: 12 }, (_, i) => {
        const n = i + 1, a = n * 30 * Math.PI / 180;
        return `<text x="${100 + Math.sin(a) * 70}" y="${100 - Math.cos(a) * 70 + 7}" text-anchor="middle" font-size="20" font-weight="800" fill="#0f172a">${n}</text>`;
      }).join('');
      el.innerHTML = `
        <svg viewBox="0 0 200 200" width="240" height="240" aria-label="時鐘">
          <circle cx="100" cy="100" r="97" fill="#fff" stroke="#0f172a" stroke-width="4"/>${ticks}${nums}
          <line class="hh" x1="100" y1="100" x2="100" y2="52" stroke="#0f172a" stroke-width="7" stroke-linecap="round"/>
          <line class="mh" x1="100" y1="100" x2="100" y2="24" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/>
          <circle cx="100" cy="100" r="6" fill="#0f172a"/>
        </svg>
        <div class="readout"></div><div class="sub">黑色短針＝時針，紅色長針＝分針</div>
        <div class="ctl">
          <button data-d="-60">− 1 小時</button><button data-d="60">＋ 1 小時</button>
          <button data-d="-5">− 5 分</button><button data-d="5">＋ 5 分</button><button data-d="1">＋ 1 分</button>
        </div>
        <div class="ctl"><button data-act="start">📌 把現在設為「開始時間」</button></div>
        <div class="sub elapsed"></div>`;
      const draw = () => {
        const h = (t / 60) % 12, m = t % 60;
        el.querySelector('.hh').setAttribute('transform', `rotate(${h * 30} 100 100)`);
        el.querySelector('.mh').setAttribute('transform', `rotate(${m * 6} 100 100)`);
        el.querySelector('.readout').textContent = label(t);
        if (start !== null) {
          const d = t - start;
          el.querySelector('.elapsed').innerHTML = d >= 0
            ? `從 <b>${label(start)}</b> 到 <b>${label(t)}</b>，經過了 <b>${Math.floor(d / 60)} 小時 ${d % 60} 分</b>（共 ${d} 分鐘）`
            : '現在比開始時間還早喔，把指針往後撥。';
        }
      };
      el.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { t = Math.min(23 * 60 + 59, Math.max(0, t + +b.dataset.d)); draw(); });
      el.querySelector('[data-act="start"]').onclick = () => { start = t; draw(); };
      draw();
    },

    /** 分數披薩：選擇平分幾塊，點塊來塗色 */
    fraction(el) {
      let n = 8; let on = new Set([0, 1, 2]);
      const zh = '零一二三四五六七八九十';
      const draw = () => {
        const parts = [];
        for (let i = 0; i < n; i++) {
          const a0 = (i / n) * 2 * Math.PI - Math.PI / 2, a1 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
          const p = (a) => `${100 + Math.cos(a) * 90} ${100 + Math.sin(a) * 90}`;
          parts.push(`<path data-i="${i}" d="M100 100 L${p(a0)} A90 90 0 ${n === 1 ? 1 : 0} 1 ${p(a1)} Z" fill="${on.has(i) ? '#f97316' : '#fef3c7'}" stroke="#92400e" stroke-width="2" style="cursor:pointer"/>`);
        }
        const k = on.size;
        el.innerHTML = `
          <svg viewBox="0 0 200 200" width="240" height="240" aria-label="分數圓形圖">${parts.join('')}</svg>
          <div class="readout">${k === 0 ? '還沒塗色' : k === n ? `全部塗滿＝${n}/${n}＝1 個` : `${k}/${n}（${zh[n]}分之${zh[k]}）個`}</div>
          <div class="sub">點披薩的每一塊來塗色。分母＝平分成幾塊，分子＝取了幾塊。</div>
          <div class="ctl">${[2, 3, 4, 5, 6, 8, 10].map(d => `<button data-n="${d}" class="${d === n ? 'on' : ''}">平分 ${d} 塊</button>`).join('')}</div>`;
        el.querySelectorAll('path').forEach(pth => pth.onclick = () => { const i = +pth.dataset.i; on.has(i) ? on.delete(i) : on.add(i); draw(); });
        el.querySelectorAll('[data-n]').forEach(b => b.onclick = () => { n = +b.dataset.n; on = new Set(); draw(); });
      };
      draw();
    },

    /** 位值板：千、百、十、個 */
    placevalue(el) {
      const d = [5, 8, 0, 3];
      const names = ['千位', '百位', '十位', '個位'], unit = ['千', '百', '十', '一'], money = ['💵 1000元', '💵 100元', '🪙 10元', '🪙 1元'];
      const draw = () => {
        const n = d[0] * 1000 + d[1] * 100 + d[2] * 10 + d[3];
        el.innerHTML = `
          <div class="pv">${d.map((x, i) => `<div class="pv-col"><div class="lab">${names[i]}</div><div class="dig">${x}</div>
            <div><button data-i="${i}" data-d="-1" aria-label="${names[i]}減一">−</button> <button data-i="${i}" data-d="1" aria-label="${names[i]}加一">＋</button></div>
            <div class="lab">${money[i]}</div></div>`).join('')}</div>
          <div class="readout">${n}　讀作「${readNum(n)}」</div>
          <div class="sub">${d.map((x, i) => `${x} 個${unit[i]}`).join(' ＋ ')} ＝ ${n}</div>`;
        el.querySelectorAll('button').forEach(b => b.onclick = () => { const i = +b.dataset.i; d[i] = (d[i] + +b.dataset.d + 10) % 10; draw(); });
      };
      draw();
    },

    /** 方位：面向某方位時，前後左右各是哪裡 */
    compass(el) {
      const dirs = ['北', '東', '南', '西'];
      let f = 1;
      const draw = () => {
        const front = dirs[f], right = dirs[(f + 1) % 4], back = dirs[(f + 2) % 4], left = dirs[(f + 3) % 4];
        el.innerHTML = `
          <svg viewBox="0 0 220 220" width="250" height="250" aria-label="方位圖">
            <circle cx="110" cy="110" r="100" fill="#f0f9ff" stroke="#0ea5e9" stroke-width="3"/>
            <text x="110" y="30" text-anchor="middle" font-size="20" font-weight="900" fill="#dc2626">北</text>
            <text x="198" y="117" text-anchor="middle" font-size="20" font-weight="900">東</text>
            <text x="110" y="205" text-anchor="middle" font-size="20" font-weight="900">南</text>
            <text x="22" y="117" text-anchor="middle" font-size="20" font-weight="900">西</text>
            <g transform="rotate(${f * 90} 110 110)">
              <path d="M110 48 L128 92 L116 88 L116 140 L104 140 L104 88 L92 92 Z" fill="#f97316"/>
              <circle cx="110" cy="112" r="14" fill="#fde68a" stroke="#92400e" stroke-width="2"/>
            </g>
          </svg>
          <div class="readout">面向${front}：前面是${front}、後面是${back}、右手邊是${right}、左手邊是${left}</div>
          <div class="sub">橘色箭頭是你面向的方向。地圖通常「上北、下南、左西、右東」。</div>
          <div class="ctl">${dirs.map((x, i) => `<button data-f="${i}" class="${i === f ? 'on' : ''}">我面向${x}</button>`).join('')}</div>`;
        el.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { f = +b.dataset.f; draw(); });
      };
      draw();
    }
  };

  /* ---------------- 練習 ---------------- */
  let session = null;

  function norm(raw, uid, key) {
    const q = Object.assign({}, raw, { key, uid });
    if (q.opts) {
      q.answer = q.opts[q.ans];
      q.shown = q.keep ? q.opts.slice() : shuffle(q.opts.slice());
    }
    return q;
  }
  function genOne(u) {
    const g = u.gen();
    const sig = plain(g.q) + (g.passage || '') + (g.say || '') + (g.opts ? g.opts[g.ans] : [].concat(g.ans)[0]);
    return norm(g, u.id, `${u.id}-g-${hash(sig)}`);
  }
  function buildUnitRound(u) {
    const fixed = shuffle(u.quiz.map((q, i) => norm(q, u.id, `${u.id}-${i}`)));
    if (!u.gen) return fixed.slice(0, ROUND);
    const list = fixed.slice(0, u.fixedN || FIXED_IN_GEN);
    const seen = new Set(list.map(q => q.key));
    for (let guard = 0; list.length < ROUND && guard < 300; guard++) {
      const q = genOne(u);
      if (!seen.has(q.key)) { seen.add(q.key); list.push(q); }
    }
    return shuffle(list);
  }
  function buildMixRound() {
    const units = shuffle(Object.values(UNITS).filter(u => u.subject.grade === grade)).slice(0, ROUND);
    return units.map(u => {
      if (u.gen && Math.random() < 0.6) return genOne(u);
      const i = rnd(0, u.quiz.length - 1);
      return norm(u.quiz[i], u.id, `${u.id}-${i}`);
    });
  }

  function startSession(kind, uid) {
    let list, title, back;
    if (kind === 'unit') {
      const u = UNITS[uid]; if (!u) return renderHome();
      document.body.style.setProperty('--c', u.subject.color);
      list = buildUnitRound(u); title = `${u.subject.icon} ${u.title}`; back = `#/u/${u.id}`;
    } else if (kind === 'mix') {
      document.body.style.setProperty('--c', '#0f766e');
      list = buildMixRound(); title = `🎲 ${GNAME[grade]}綜合挑戰`; back = '#/';
    } else {
      document.body.style.setProperty('--c', '#be123c');
      list = shuffle(Object.values(store.wrong).map(q => norm(q, q.uid, q.key))).slice(0, ROUND);
      title = '📕 錯題重練'; back = '#/review';
    }
    session = { kind, uid, list, i: 0, results: [], title, back };
    renderQuestion();
  }

  function renderQuestion() {
    const S = session, q = S.list[S.i], u = UNITS[q.uid];
    const subj = u ? u.subject : null;
    if (S.kind !== 'unit' && subj) document.body.style.setProperty('--c', subj.color);
    const pct = Math.round(S.i / S.list.length * 100);
    const canRead = !(subj && subj.id === 'taigi') && !q.noread;
    $('#view').innerHTML = `
      <div class="crumb"><a href="${S.back}">‹ 離開練習</a>　${S.title}${S.kind !== 'unit' && u ? `・${subj.name}／${u.title}` : ''}</div>
      <div class="quiz-top"><div class="prog bar"><i style="width:${pct}%"></i></div><span class="count">第 ${S.i + 1} / ${S.list.length} 題</span></div>
      <section class="qcard">
        ${q.passage ? `<div class="passage">${q.passage}</div>` : ''}
        ${q.svg ? `<div class="figure">${q.svg}</div>` : ''}
        ${q.logic ? '<span class="logic-tag">🧠 推理題</span>' : ''}
        <div class="qtext">${q.q}</div>
        <div>
          ${canRead ? `<button class="say" type="button" id="readQ">🔊 唸題目</button>` : ''}
          ${q.say ? `<button class="say" type="button" id="readEn">🔊 聽英文</button>` : ''}
        </div>
        ${q.input ? `
          <form class="inrow" id="inForm" autocomplete="off">
            <input id="inBox" inputmode="${q.text ? 'text' : 'decimal'}" aria-label="填入答案" placeholder="?">
            ${q.unit ? `<span class="unit">${q.unit}</span>` : ''}
            <button class="btn" type="submit">確定</button>
          </form>` : `
          <div class="opts">${q.shown.map((o, i) => `<button class="opt" type="button" data-v="${esc(o)}"><span class="k">${'ABCD'[i]}</span><span>${o}</span></button>`).join('')}</div>`}
        <div id="fb"></div>
      </section>`;
    const rq = $('#readQ');
    if (rq) rq.onclick = () => say((q.passage ? q.passage + '。' : '') + q.q + (q.shown ? '。' + q.shown.map((o, i) => 'ABCD'[i] + '，' + o).join('。') : ''), 'zh');
    const re = $('#readEn');
    if (re) re.onclick = () => say(q.say, 'en');
    if (q.input) {
      const box = $('#inBox');
      box.focus({ preventScroll: true });
      $('#inForm').onsubmit = e => {
        e.preventDefault();
        const v = box.value.trim();
        if (!v) { box.focus(); return; }
        box.disabled = true; e.target.querySelector('button').disabled = true;
        judge(q, v);
      };
    } else {
      document.querySelectorAll('.opt').forEach(b => b.onclick = () => judge(q, b.dataset.v, b));
    }
  }

  const toHalf = s => s.replace(/[０-９．／]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)).replace(/\s+/g, '').replace(/,/g, '');
  function isRight(q, v) {
    if (!q.input) return v === q.answer;
    const accept = [].concat(q.ans).map(String);
    const nv = toHalf(v).toLowerCase();
    return accept.some(a => {
      const na = toHalf(a).toLowerCase();
      if (na === nv) return true;
      const x = parseFloat(nv), y = parseFloat(na);
      return !q.text && /^-?\d+(\.\d+)?$/.test(nv) && !isNaN(y) && Math.abs(x - y) < 1e-9;
    });
  }

  function judge(q, v, btn) {
    stopSpeech();
    const ok = isRight(q, v);
    session.results.push({ q, v, ok });
    if (ok) delete store.wrong[q.key];
    else {
      const keep = Object.assign({}, q); delete keep.shown;
      store.wrong[q.key] = keep;
    }
    save();
    if (!q.input) {
      document.querySelectorAll('.opt').forEach(b => {
        b.disabled = true;
        if (b.dataset.v === q.answer) b.classList.add('right');
      });
      if (!ok && btn) btn.classList.add('wrong');
    }
    const rightText = q.input ? [].concat(q.ans)[0] + (q.unit || '') : q.answer;
    const last = session.i === session.list.length - 1;
    $('#fb').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'no'}">
        <div class="t">${ok ? pick(['🎉 答對了！', '👍 好厲害！', '✅ 完全正確！', '🌟 太棒了！']) : `😮 再想想！正確答案是：${rightText}`}</div>
        ${q.exp ? `<div>💡 ${q.exp}</div>` : ''}
      </div>
      <div class="next-row"><button class="btn" id="nextBtn" type="button">${last ? '看成績 ›' : '下一題 ›'}</button></div>`;
    const nb = $('#nextBtn');
    nb.focus({ preventScroll: true });
    nb.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    nb.onclick = () => { session.i++; session.i < session.list.length ? renderQuestion() : renderResult(); window.scrollTo(0, 0); };
  }

  function renderResult() {
    const S = session;
    const right = S.results.filter(r => r.ok).length, total = S.results.length;
    const pct = right / total;
    let starLine = '';
    if (S.kind === 'unit') {
      const r = unitRec(S.uid);
      const before = starsOf(S.uid);
      r.plays++; r.best = Math.max(r.best, pct); save();
      const n = pct >= 1 ? 3 : pct >= 0.8 ? 2 : pct >= 0.6 ? 1 : 0;
      starLine = `<div class="big-stars">${'⭐'.repeat(n)}${'☆'.repeat(3 - n)}</div>${starsOf(S.uid) > before ? '<p>🎊 這個單元的星星增加了！</p>' : ''}`;
    }
    const msg = pct >= 1 ? '全對！你是這一課的小老師了！' : pct >= 0.8 ? '很棒！只差一點點就全對。' : pct >= 0.6 ? '不錯喔！把錯的題目再看一次會更好。' : '先回去讀一次重點教學，再來挑戰吧！';
    const wrongs = S.results.filter(r => !r.ok);
    $('#view').innerHTML = `
      <div class="crumb"><a href="${S.back}">‹ 返回</a></div>
      <section class="result">
        <h1>${S.title}</h1>
        ${starLine}
        <div class="score">${right} / ${total} 題</div>
        <p>${msg}</p>
        <div class="btns">
          <button class="btn" id="againBtn" type="button">🔁 再練一回（題目會換）</button>
          ${S.kind === 'unit' ? `<a class="btn ghost" href="#/u/${S.uid}">📖 回去看教學</a>` : ''}
          <a class="btn ghost" href="#/">🏝️ 回地圖</a>
        </div>
        ${wrongs.length ? `<div class="review-list"><h3>📕 這回答錯的題目（已收進錯題本）</h3>${wrongs.map(r => `
          <div class="review-item">
            <div class="q">${r.q.passage ? '（閱讀題）' : ''}${r.q.q}</div>
            <div class="x">你的答案：${esc(r.v)}</div>
            <div class="a">正確答案：${r.q.input ? [].concat(r.q.ans)[0] + (r.q.unit || '') : r.q.answer}</div>
            ${r.q.exp ? `<div class="x">💡 ${r.q.exp}</div>` : ''}
          </div>`).join('')}</div>` : ''}
      </section>`;
    $('#againBtn').onclick = () => {
      if (S.kind === 'review' && !Object.keys(store.wrong).length) { location.hash = '#/review'; return; }
      startSession(S.kind, S.uid); window.scrollTo(0, 0);
    };
  }

  /* ---------------- 錯題本 ---------------- */
  function renderReview() {
    document.body.style.setProperty('--c', '#be123c');
    const list = Object.values(store.wrong);
    if (!list.length) {
      $('#view').innerHTML = `<div class="crumb"><a href="#/">🏝️ 地圖</a> › 錯題本</div>
        <div class="empty"><div class="e">🎉</div><h2>錯題本是空的！</h2><p>練習時答錯的題目會自動收進來，重做答對就會移除。</p><a class="btn" href="#/mix">🎲 去綜合挑戰</a></div>`;
      return;
    }
    const groups = {};
    list.forEach(q => { const u = UNITS[q.uid]; const k = u ? u.subject.id : 'x'; (groups[k] = groups[k] || []).push(q); });
    $('#view').innerHTML = `
      <div class="crumb"><a href="#/">🏝️ 地圖</a> › 錯題本</div>
      <div class="unit-head"><h1>📕 錯題本（${list.length} 題）</h1><a class="btn" href="#/p/review">🔁 重練錯題</a></div>
      <p>每次最多抽 ${ROUND} 題。重做答對的題目會從錯題本消失。</p>
      ${SUBJECTS.filter(s => groups[s.id]).map(s => `
        <section class="blk" style="--c:${s.color};margin-bottom:12px">
          <h2>${s.icon} ${GRADES.length > 1 ? GNAME[s.grade] + '・' : ''}${s.name}（${groups[s.id].length} 題）</h2>
          <div class="review-list" style="margin-top:6px">${groups[s.id].map(q => `
            <div class="review-item"><div class="q">${q.q}</div>
            <div class="x">單元：<a href="#/u/${q.uid}">${UNITS[q.uid].title}</a></div></div>`).join('')}</div>
        </section>`).join('')}`;
  }

  /* ---------------- 路由 ---------------- */
  function route() {
    stopSpeech();
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').filter(Boolean);
    const [a, b] = parts;
    const own = a === 's' ? SUBJECTS.find(x => x.id === b) : (a === 'u' || a === 'p') && UNITS[b] ? UNITS[b].subject : null;
    if (own) setGrade(own.grade);
    if (a === 's') renderSubject(b);
    else if (a === 'u') renderUnit(b);
    else if (a === 'p' && b === 'review') { if (Object.keys(store.wrong).length) startSession('review'); else renderReview(); }
    else if (a === 'p') startSession('unit', b);
    else if (a === 'mix') startSession('mix');
    else if (a === 'review') renderReview();
    else renderHome();
    window.scrollTo(0, 0);
    $('#view').focus({ preventScroll: true });
  }

  $('#resetBtn').onclick = () => {
    if (confirm('確定要清除所有星星、練習成績和錯題本嗎？')) {
      store = { units: {}, wrong: {} }; save(); route();
    }
  };
  window.addEventListener('hashchange', route);
  updateTop();
  route();
})();
