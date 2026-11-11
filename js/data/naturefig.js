/* 自然科學島（三～九年級）與地球科學島（三～六年級）的示意圖與動畫
 *  每個沒有圖的自然單元加一張圖，插在 FIG[id].after 那個教學區塊後面。
 *  anim: true 的圖有 SMIL 動畫，app.js 會加上「暫停／播放」按鈕；
 *  使用者系統設定「減少動態效果」時，動畫一開始就是暫停的。
 *  圖用固定顏色（深色模式下放在淺色紙上），文字至少 12 px。
 */
(function () {
  const U = id => window.SUBJECTS.flatMap(s => s.units).find(u => u.id === id);
  const INK = '#0f172a', MUT = '#475569';
  /** 文字：T(x, y, 內容, { fs, a: 對齊, c: 顏色, b: 粗體 }) */
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.fs || 15}" text-anchor="${o.a || 'middle'}" fill="${o.c || INK}"${o.b ? ' font-weight="800"' : ''}>${s}</text>`;
  /** 箭頭記號（每張圖用自己的 id，避免同頁重複） */
  const AR = (id, c) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`;
  const L = (x1, y1, x2, y2, c, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${o.w || 2.5}" stroke-linecap="round"${o.m ? ` marker-end="url(#${o.m})"` : ''}${o.d ? ` stroke-dasharray="${o.d}"` : ''}${o.op ? ` opacity="${o.op}"` : ''}/>`;
  const S = (w, h, label, body, defs) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" role="img" aria-label="${label}">${defs ? `<defs>${defs}</defs>` : ''}${body}</svg>`;
  /** 平滑來回擺動（像正弦）的 keySplines */
  const SINE = 'calcMode="spline" keyTimes="0;0.5;1" keySplines="0.37 0 0.63 1;0.37 0 0.63 1"';
  /** 固定種子的亂數，讓每次產生的圖都一樣 */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const FIG = {};

  /* ---------- 三年級 ---------- */
  FIG.n3 = {
    after: 2, title: '餐桌上的植物：吃的是哪個部位？', cap: '馬鈴薯長在土裡，但它有芽眼、會發芽，所以是莖，不是根。（示意圖）',
    v: S(440, 300, '植物各部位與常吃的蔬菜：花椰菜是花、高麗菜是葉、番茄是果實、竹筍是莖、馬鈴薯是地下莖、紅蘿蔔是根',
      `<rect x="0" y="210" width="440" height="90" fill="#e7c9a0"/>${L(0, 210, 440, 210, '#92400e', { w: 2 })}
<path d="M220 210 L220 72" stroke="#16a34a" stroke-width="7" stroke-linecap="round"/>
<ellipse cx="188" cy="138" rx="30" ry="11" fill="#4ade80" stroke="#15803d" transform="rotate(20 188 138)"/>
<ellipse cx="252" cy="108" rx="30" ry="11" fill="#4ade80" stroke="#15803d" transform="rotate(-20 252 108)"/>
${[0, 72, 144, 216, 288].map(a => `<circle cx="${220 + 11 * Math.cos(a * Math.PI / 180)}" cy="${58 + 11 * Math.sin(a * Math.PI / 180)}" r="9" fill="#f9a8d4"/>`).join('')}<circle cx="220" cy="58" r="7" fill="#fde047"/>
${L(222, 150, 244, 160, '#16a34a', { w: 3 })}<circle cx="252" cy="168" r="11" fill="#ef4444"/>
<path d="M211 210 L229 210 L221 290 L219 290 Z" fill="#f97316"/>${L(216, 236, 200, 248, '#c2410c', { w: 1.5 })}${L(224, 252, 240, 262, '#c2410c', { w: 1.5 })}
${L(214, 224, 190, 236, '#a16207', { w: 3 })}<ellipse cx="168" cy="244" rx="26" ry="17" fill="#d6a76a" stroke="#92400e" stroke-width="1.5"/><circle cx="158" cy="240" r="2.5" fill="#78350f"/><circle cx="176" cy="250" r="2.5" fill="#78350f"/>
${L(296, 58, 236, 58, '#94a3b8', { w: 1.5 })}${T(300, 63, '<tspan font-weight="800">花</tspan>：花椰菜', { a: 'start' })}
${L(296, 104, 270, 106, '#94a3b8', { w: 1.5 })}${T(300, 109, '<tspan font-weight="800">葉</tspan>：高麗菜、菠菜', { a: 'start' })}
${L(296, 168, 266, 168, '#94a3b8', { w: 1.5 })}${T(300, 173, '<tspan font-weight="800">果實</tspan>：番茄', { a: 'start' })}
${L(296, 268, 226, 268, '#94a3b8', { w: 1.5 })}${T(300, 273, '<tspan font-weight="800">根</tspan>：紅蘿蔔、地瓜', { a: 'start' })}
${L(124, 180, 216, 180, '#94a3b8', { w: 1.5 })}${T(10, 185, '<tspan font-weight="800">莖</tspan>：竹筍、蘆筍', { a: 'start' })}
${T(10, 262, '<tspan font-weight="800">地下的莖</tspan>', { a: 'start' })}${T(10, 282, '馬鈴薯（有芽眼）', { a: 'start', fs: 14 })}`)
  };

  FIG.n5 = {
    after: 2, anim: true, title: '動畫：東風怎麼吹？', cap: '風從東邊吹來：旗子往西飄，風向計的箭頭指著東邊（風吹來的方向）。（示意動畫）',
    v: S(440, 258, '東風吹過來，旗子往西飄，風向計箭頭指向東',
      `${T(24, 30, '西', { b: 1, fs: 18 })}${T(416, 30, '東', { b: 1, fs: 18 })}
${[70, 100, 130, 160].map((y, i) => `<line x1="400" y1="${y}" x2="440" y2="${y}" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" opacity="0"><animateTransform attributeName="transform" type="translate" values="0 0;-380 0" dur="2.4s" begin="${i * 0.6}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur="2.4s" begin="${i * 0.6}s" repeatCount="indefinite"/></line>`).join('')}
${L(150, 60, 150, 205, '#64748b', { w: 4 })}
<path fill="#ef4444" stroke="#b91c1c" stroke-width="1.5" d="M150 64 C130 56 110 72 90 64 C75 58 60 66 46 66 L46 102 C60 102 75 94 90 100 C110 108 130 92 150 100 Z"><animate attributeName="d" dur="1s" repeatCount="indefinite" values="M150 64 C130 56 110 72 90 64 C75 58 60 66 46 66 L46 102 C60 102 75 94 90 100 C110 108 130 92 150 100 Z;M150 64 C130 72 110 56 90 66 C75 72 60 58 46 62 L46 98 C60 94 75 108 90 102 C110 94 130 108 150 100 Z;M150 64 C130 56 110 72 90 64 C75 58 60 66 46 66 L46 102 C60 102 75 94 90 100 C110 108 130 92 150 100 Z"/></path>
${L(330, 92, 330, 205, '#64748b', { w: 4 })}<path d="M288 90 L366 90" stroke="#0f172a" stroke-width="4"/><path d="M362 80 L384 90 L362 100 Z" fill="#0f172a"/><path d="M276 72 L300 86 L300 94 L276 108 Z" fill="#0f172a"/>
${T(150, 226, '旗子往西飄', { fs: 14 })}${T(330, 226, '箭頭指向東', { fs: 14 })}${T(220, 252, '這是「東風」：風從東邊吹來', { b: 1, c: '#0369a1', fs: 15 })}`)
  };

  FIG.n7 = {
    after: 2, title: '昆蟲和蜘蛛比一比', cap: '昆蟲：頭、胸、腹 3 部分，6 隻腳都長在胸部，有一對觸角。蜘蛛：2 部分、8 隻腳，不是昆蟲。（示意圖）',
    v: S(440, 215, '昆蟲身體分頭胸腹三部分有六隻腳，蜘蛛分頭胸部和腹部兩部分有八隻腳',
      `${[[100, 98, 86, 68], [110, 96, 110, 64], [120, 98, 136, 68], [100, 122, 86, 152], [110, 124, 110, 156], [120, 122, 136, 152]].map(([a, b, c, d]) => L(a, b, c, d, '#92400e', { w: 3 })).join('')}
<path d="M64 96 Q52 72 40 64 M72 95 Q74 72 84 60" stroke="#92400e" stroke-width="2.5" fill="none"/>
<circle cx="70" cy="110" r="16" fill="#fcd34d" stroke="#92400e" stroke-width="2"/><ellipse cx="110" cy="110" rx="22" ry="16" fill="#fbbf24" stroke="#92400e" stroke-width="2"/><ellipse cx="170" cy="110" rx="38" ry="20" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
${T(30, 56, '觸角', { fs: 13, c: MUT })}${T(70, 182, '頭', { b: 1 })}${T(110, 182, '胸', { b: 1 })}${T(170, 182, '腹', { b: 1 })}${T(115, 206, '昆蟲：3 部分、6 隻腳', { fs: 14, c: '#92400e', b: 1 })}
${[-1, 1].map(s => [0, 1, 2, 3].map(i => `<path d="M${294 + i * 4} ${110 + s * 10} Q${270 + i * 14} ${110 + s * 40} ${252 + i * 22} ${110 + s * (52 - i * 4)}" stroke="#1e293b" stroke-width="2.5" fill="none"/>`).join('')).join('')}
<ellipse cx="300" cy="110" rx="22" ry="18" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/><circle cx="350" cy="110" r="26" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
${T(300, 182, '頭胸部', { b: 1 })}${T(352, 182, '腹部', { b: 1 })}${T(325, 206, '蜘蛛：2 部分、8 隻腳', { fs: 14, c: '#1e293b', b: 1 })}`)
  };

  const tree = (x, sway, dur) => `<rect x="${x - 6}" y="120" width="12" height="52" fill="#92400e"/><g>${sway ? `<animateTransform attributeName="transform" type="rotate" values="0 ${x} 172;${sway} ${x} 172;0 ${x} 172" ${SINE} dur="${dur}s" repeatCount="indefinite"/>` : ''}<circle cx="${x}" cy="100" r="32" fill="#22c55e" stroke="#15803d" stroke-width="2"/><circle cx="${x - 14}" cy="92" r="6" fill="#4ade80"/><circle cx="${x + 12}" cy="108" r="5" fill="#4ade80"/></g>`;
  FIG.n10 = {
    after: 3, anim: true, title: '動畫：風力大小怎麼看？', cap: '沒風時煙直直往上；風越大，煙越斜、樹搖得越厲害。（示意動畫）',
    v: S(440, 215, '沒風、小風、大風時，樹和煙的樣子',
      `${L(0, 172, 440, 172, '#a16207', { w: 3 })}
${tree(50, 0, 1)}<path d="M100 168 C94 140 106 120 100 92 C96 78 104 66 100 54" stroke="#94a3b8" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>
${tree(195, 4, 2.2)}<path d="M245 168 C248 150 258 138 270 128 C280 120 288 112 296 106" stroke="#94a3b8" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>
${tree(340, 12, 1.1)}<path d="M380 168 C392 164 404 160 414 158 C422 157 430 156 436 156" stroke="#94a3b8" stroke-width="7" fill="none" stroke-linecap="round" opacity=".8"/>
${T(72, 196, '沒風：', { b: 1, fs: 14 })}${T(72, 212, '煙直直往上', { fs: 13 })}${T(220, 196, '小風：', { b: 1, fs: 14 })}${T(220, 212, '樹葉輕輕搖', { fs: 13 })}${T(368, 196, '大風：', { b: 1, fs: 14 })}${T(368, 212, '樹枝搖晃', { fs: 13 })}`)
  };

  const node = (x, y, icon, name) => `<circle cx="${x}" cy="${y}" r="42" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>${icon}${T(x, y + 30, name, { b: 1, fs: 14 })}`;
  FIG.n11 = {
    after: 1, anim: true, title: '動畫：蝴蝶的一生（完全變態）', cap: '卵 → 幼蟲 → 蛹 → 成蟲。橘色圈會依序走一圈。（示意動畫）',
    v: S(440, 260, '蝴蝶的一生：卵、幼蟲、蛹、成蟲，循環',
      `<defs>${AR('n11a', '#16a34a')}</defs>
${node(220, 50, `<ellipse cx="220" cy="44" rx="24" ry="9" fill="#86efac"/><circle cx="212" cy="40" r="4" fill="#fef3c7" stroke="#a16207"/><circle cx="222" cy="38" r="4" fill="#fef3c7" stroke="#a16207"/><circle cx="231" cy="41" r="4" fill="#fef3c7" stroke="#a16207"/>`, '卵')}
${node(370, 130, T(370, 134, '🐛', { fs: 32 }), '幼蟲')}
${node(220, 210, `<ellipse cx="220" cy="200" rx="10" ry="18" fill="#a3e635" stroke="#4d7c0f" stroke-width="2"/>${L(220, 178, 220, 170, '#4d7c0f', { w: 2 })}`, '蛹')}
${node(70, 130, T(70, 134, '🦋', { fs: 32 }), '成蟲')}
<path d="M262 60 Q330 70 352 92" stroke="#16a34a" stroke-width="3" fill="none" marker-end="url(#n11a)"/><path d="M352 168 Q330 196 262 204" stroke="#16a34a" stroke-width="3" fill="none" marker-end="url(#n11a)"/>
<path d="M178 204 Q110 196 88 168" stroke="#16a34a" stroke-width="3" fill="none" marker-end="url(#n11a)"/><path d="M88 92 Q110 70 178 60" stroke="#16a34a" stroke-width="3" fill="none" marker-end="url(#n11a)"/>
<circle cx="220" cy="50" r="48" fill="none" stroke="#f59e0b" stroke-width="4"><animate attributeName="cx" values="220;370;220;70" calcMode="discrete" dur="6s" repeatCount="indefinite"/><animate attributeName="cy" values="50;130;210;130" calcMode="discrete" dur="6s" repeatCount="indefinite"/></circle>
${T(220, 126, '完全變態', { b: 1, fs: 16, c: '#15803d' })}${T(220, 146, '卵→幼蟲→蛹→成蟲', { fs: 13 })}`)
  };

  FIG.n12 = {
    after: 2, title: '放進水裡：浮還是沉？', cap: '上面浮著的由左到右：木塊、保麗龍、乒乓球、蓋緊的空寶特瓶；沉在底下的：鐵釘、石頭、彈珠、硬幣。（示意圖）',
    v: S(440, 215, '木塊、保麗龍、乒乓球、空寶特瓶浮在水面，鐵釘、石頭、彈珠、硬幣沉在水底',
      `${T(220, 24, '⬆ 浮：木塊、保麗龍、乒乓球、空寶特瓶', { fs: 14, b: 1, c: '#0369a1' })}
<rect x="70" y="66" width="50" height="22" fill="#d97706" stroke="#92400e"/><rect x="150" y="72" width="44" height="14" fill="#fff" stroke="#94a3b8"/><circle cx="236" cy="77" r="10" fill="#fff7ed" stroke="#f97316" stroke-width="2"/>
<rect x="272" y="66" width="62" height="20" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/><rect x="334" y="70" width="9" height="12" rx="2" fill="#0284c7"/>
${L(80, 174, 130, 168, '#475569', { w: 4 })}<ellipse cx="184" cy="168" rx="18" ry="10" fill="#78716c"/><circle cx="246" cy="171" r="8" fill="#60a5fa" stroke="#1d4ed8"/><ellipse cx="300" cy="175" rx="12" ry="4" fill="#eab308" stroke="#a16207"/>
<rect x="42" y="80" width="356" height="98" fill="#38bdf8" opacity=".35"/>${L(42, 80, 398, 80, '#0284c7', { w: 2 })}
<path d="M40 40 L40 180 L400 180 L400 40" stroke="#0f172a" stroke-width="3" fill="none"/>
${T(220, 204, '⬇ 沉：鐵釘、石頭、彈珠、硬幣', { fs: 14, b: 1, c: '#475569' })}`)
  };

  FIG.n13 = (() => {
    const dots = Array.from({ length: 26 }, (_, i) => {
      const tx = 168 + rnd() * 104, ty = 74 + rnd() * 98, b = (i * 0.12).toFixed(2);
      return `<circle cx="220" cy="164" r="2.6" fill="#f59e0b"><animate attributeName="cx" values="220;${tx.toFixed(1)};${tx.toFixed(1)}" keyTimes="0;0.6;1" dur="6s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="cy" values="164;${ty.toFixed(1)};${ty.toFixed(1)}" keyTimes="0;0.6;1" dur="6s" begin="${b}s" repeatCount="indefinite"/></circle>`;
    }).join('');
    return {
      after: 0, anim: true, title: '動畫：方糖溶解了', cap: '糖沒有消失，而是變成眼睛看不到的小粒子，散到整杯水裡（圖中的小點是放大畫出來的）。（示意動畫）',
      v: S(440, 210, '方糖放進水裡，慢慢分散成很小的粒子',
        `<path d="M150 40 L162 190 L278 190 L290 40" fill="none" stroke="#0f172a" stroke-width="3"/><path d="M152 64 L163 188 L277 188 L288 64 Z" fill="#bae6fd"/>
<g transform="translate(220 164)"><rect x="-16" y="-16" width="32" height="32" fill="#fff" stroke="#94a3b8" stroke-width="2"><animateTransform attributeName="transform" type="scale" values="1;0.05;0.05" keyTimes="0;0.7;1" dur="6s" repeatCount="indefinite"/></rect></g>
${dots}
${T(20, 92, '看不見了，', { a: 'start', fs: 14 })}${T(20, 112, '但糖還在！', { a: 'start', fs: 14, b: 1 })}${T(20, 132, '（喝起來甜甜的）', { a: 'start', fs: 12, c: MUT })}
${T(304, 92, '變成很小的粒子，', { a: 'start', fs: 14 })}${T(304, 112, '散到整杯水裡', { a: 'start', fs: 14 })}`)
    };
  })();

  /* ---------- 四年級 ---------- */
  FIG.g4n2 = {
    after: 0, title: '水生植物住在哪一層？', cap: '沉水植物整株在水裡；浮葉植物葉子浮在水面、根在泥裡；挺水植物莖葉挺出水面；漂浮植物整株漂著，根不碰泥土。（示意圖）',
    v: S(440, 255, '池塘裡的沉水、浮葉、挺水、漂浮四種水生植物',
      `<rect x="0" y="80" width="440" height="110" fill="#bae6fd"/>${L(0, 80, 440, 80, '#0284c7', { w: 2 })}<rect x="0" y="190" width="440" height="22" fill="#a16207" opacity=".75"/>
${[46, 60, 74].map((x, i) => `<path d="M${x} 190 C${x - 10} 170 ${x + 10} 150 ${x} 130 C${x - 8} 118 ${x + 6} 108 ${x} ${100 + i * 4}" stroke="#15803d" stroke-width="3" fill="none"/>`).join('')}
<path d="M170 190 C160 160 180 120 170 84" stroke="#15803d" stroke-width="2.5" fill="none"/><ellipse cx="170" cy="80" rx="30" ry="5" fill="#22c55e" stroke="#15803d"/><circle cx="186" cy="74" r="6" fill="#f9a8d4"/>
<path d="M280 190 L282 52" stroke="#15803d" stroke-width="3"/><ellipse cx="306" cy="50" rx="24" ry="8" fill="#16a34a" transform="rotate(-12 306 50)"/>${[0, 60, 120, 180, 240, 300].map(a => `<ellipse cx="${282 + 7 * Math.cos(a * Math.PI / 180)}" cy="${36 + 7 * Math.sin(a * Math.PI / 180)}" rx="6" ry="9" fill="#f472b6" transform="rotate(${a + 90} ${282 + 7 * Math.cos(a * Math.PI / 180)} ${36 + 7 * Math.sin(a * Math.PI / 180)})"/>`).join('')}<circle cx="282" cy="36" r="4" fill="#fde047"/>
${[370, 380, 390].map(x => L(x, 84, x + (x - 380) / 2, 122, '#78350f', { w: 1.5 })).join('')}${[-20, 0, 20].map(dx => `<ellipse cx="${380 + dx}" cy="74" rx="11" ry="8" fill="#4ade80" stroke="#15803d"/>`).join('')}
${[[60, '沉水植物', '水蘊草'], [170, '浮葉植物', '睡蓮'], [280, '挺水植物', '荷花'], [385, '漂浮植物', '布袋蓮']].map(([x, a, b]) => T(x, 232, a, { b: 1, fs: 14 }) + T(x, 250, b, { fs: 13, c: MUT })).join('')}`)
  };

  const pend = (x, len, dur, c) => `${L(x, 20, x, 20 + len + 12, '#cbd5e1', { w: 1.5, d: '4 4' })}<g><animateTransform attributeName="transform" type="rotate" values="16 ${x} 20;-16 ${x} 20;16 ${x} 20" ${SINE} dur="${dur}s" repeatCount="indefinite"/>${L(x, 20, x, 20 + len, '#334155', { w: 2 })}<circle cx="${x}" cy="${20 + len}" r="11" fill="${c}" stroke="#0f172a" stroke-width="1.5"/></g>`;
  FIG.g4n4 = {
    after: 2, anim: true, title: '動畫：擺長不同，擺動快慢不同', cap: '右邊的擺長是左邊的 4 倍，來回一次的時間變成 2 倍（擺得比較慢）。（示意動畫）',
    v: S(440, 275, '擺長短的擺擺得快，擺長是 4 倍的擺，來回一次的時間是 2 倍',
      `${L(40, 20, 400, 20, '#0f172a', { w: 5 })}${pend(130, 50, 1, '#f97316')}${pend(310, 200, 2, '#0ea5e9')}
${T(130, 115, '擺長 20 公分', { b: 1, fs: 14 })}${T(130, 135, '擺得快', { fs: 14, c: '#c2410c' })}${T(310, 254, '擺長 80 公分（4 倍）', { b: 1, fs: 14 })}${T(310, 272, '擺得慢', { fs: 14, c: '#0369a1' })}`)
  };

  FIG.g4n5 = {
    after: 1, anim: true, title: '動畫：反射和折射', cap: '左：光碰到鏡子反彈，入射角等於反射角。右：筷子插進水裡，從旁邊看好像折斷了，虛線是筷子真正的位置。（示意動畫）',
    v: S(440, 230, '光在鏡子上反射，入射角等於反射角；筷子在水中因折射看起來折斷',
      `<defs>${AR('g4n5a', '#f59e0b')}</defs>
<rect x="20" y="170" width="170" height="8" fill="#64748b"/>${[30, 50, 70, 90, 110, 130, 150, 170].map(x => L(x, 178, x - 8, 188, '#94a3b8', { w: 1.5 })).join('')}
${L(105, 70, 105, 170, '#94a3b8', { w: 1.5, d: '5 5' })}${T(105, 62, '法線', { fs: 12, c: MUT })}
${L(35, 70, 103, 167, '#f59e0b', { w: 3, m: 'g4n5a' })}${L(105, 170, 173, 73, '#f59e0b', { w: 3, m: 'g4n5a' })}
<circle r="6" fill="#facc15" stroke="#b45309"><animateMotion dur="2.4s" repeatCount="indefinite" path="M35 70 L105 170 L175 70"/></circle>
${T(105, 212, '反射：入射角 ＝ 反射角', { fs: 13, b: 1 })}
<path d="M270 60 L276 190 L384 190 L390 60" fill="none" stroke="#0284c7" stroke-width="2.5"/><path d="M272 110 L276 188 L384 188 L388 110 Z" fill="#bae6fd" opacity=".8"/>${L(272, 110, 388, 110, '#0284c7', { w: 2 })}
${L(300, 30, 330, 110, '#a16207', { w: 7 })}${L(330, 110, 360, 190, '#a16207', { w: 5, d: '6 6', op: 0.45 })}${L(330, 110, 376, 168, '#a16207', { w: 7 })}
${T(330, 212, '折射：筷子看起來折斷了', { fs: 13, b: 1 })}`)
  };

  /* ---------- 五年級 ---------- */
  const earth = (x, y, op) => `<g opacity="${op}"><circle cx="${x}" cy="${y}" r="15" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.5"/>${L(x + 8, y + 22, x - 8, y - 22, '#0f172a', { w: 2 })}${T(x - 10, y - 25, '北', { fs: 12 })}</g>`;
  FIG.g5n1 = {
    after: 3, anim: true, title: '動畫：地球繞太陽與四季', cap: '地軸一直朝同一個方向傾斜。北半球（臺灣）偏向太陽時是夏天，偏離太陽時是冬天。（示意動畫，大小和距離沒有照比例）',
    v: S(440, 260, '地球斜著地軸繞太陽公轉，夏至時北半球偏向太陽，冬至時偏離太陽',
      `<ellipse cx="220" cy="135" rx="170" ry="82" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6"/>
<circle cx="220" cy="135" r="26" fill="#fbbf24" stroke="#f59e0b" stroke-width="3"/>${T(220, 140, '太陽', { fs: 13, b: 1 })}
${earth(390, 135, 0.35)}${earth(220, 53, 0.35)}${earth(50, 135, 0.35)}${earth(220, 217, 0.35)}
${T(390, 178, '夏至（6 月）', { fs: 13, b: 1, c: '#dc2626' })}${T(285, 30, '秋分（9 月）', { fs: 13, b: 1 })}${T(52, 178, '冬至（12 月）', { fs: 13, b: 1, c: '#2563eb' })}${T(290, 252, '春分（3 月）', { fs: 13, b: 1 })}
<g><animateMotion dur="12s" repeatCount="indefinite" path="M390 135 A170 82 0 0 0 50 135 A170 82 0 0 0 390 135"/>${earth(0, 0, 1)}</g>`)
  };

  FIG.g5n2 = {
    after: 0, title: '花的構造（剖面）', cap: '花粉從雄蕊的花藥落到雌蕊的柱頭上（授粉），以後子房會長成果實，裡面的胚珠變成種子。（示意圖）',
    v: S(440, 260, '花的剖面：花瓣、花萼、雄蕊的花藥、雌蕊的柱頭和子房',
      `${L(220, 252, 220, 200, '#16a34a', { w: 7 })}
<path d="M205 196 C150 180 120 110 150 70 C175 100 195 150 212 190 Z" fill="#f9a8d4" stroke="#db2777" stroke-width="2"/><path d="M235 196 C290 180 320 110 290 70 C265 100 245 150 228 190 Z" fill="#f9a8d4" stroke="#db2777" stroke-width="2"/>
<path d="M212 200 L176 206 L210 212 Z M228 200 L264 206 L230 212 Z" fill="#16a34a"/>
${L(206, 194, 186, 112, '#ca8a04', { w: 2 })}${L(234, 194, 254, 112, '#ca8a04', { w: 2 })}<ellipse cx="186" cy="106" rx="6" ry="10" fill="#facc15" stroke="#a16207"/><ellipse cx="254" cy="106" rx="6" ry="10" fill="#facc15" stroke="#a16207"/>
${L(220, 165, 220, 96, '#16a34a', { w: 4 })}<ellipse cx="220" cy="90" rx="11" ry="6" fill="#22c55e" stroke="#15803d"/><ellipse cx="220" cy="180" rx="16" ry="20" fill="#86efac" stroke="#15803d" stroke-width="2"/><circle cx="214" cy="176" r="4" fill="#fef9c3"/><circle cx="226" cy="184" r="4" fill="#fef9c3"/>
${L(112, 112, 152, 112, '#94a3b8', { w: 1.5 })}${T(108, 117, '花瓣', { a: 'end', b: 1 })}${L(112, 214, 184, 206, '#94a3b8', { w: 1.5 })}${T(108, 219, '花萼', { a: 'end', b: 1 })}
${L(328, 100, 262, 104, '#94a3b8', { w: 1.5 })}${T(332, 105, '花藥（雄蕊）', { a: 'start', b: 1, fs: 14 })}${L(328, 70, 232, 88, '#94a3b8', { w: 1.5 })}${T(332, 75, '柱頭（雌蕊）', { a: 'start', b: 1, fs: 14 })}
${L(328, 184, 238, 182, '#94a3b8', { w: 1.5 })}${T(332, 182, '子房', { a: 'start', b: 1, fs: 14 })}${T(332, 200, '→ 以後變果實', { a: 'start', fs: 13, c: MUT })}`)
  };

  const strip = (x, y, a, b) => `<rect x="${x - 26}" y="${y - 14}" width="14" height="28" rx="2" fill="${a}"/>${T(x, y + 5, '→', { fs: 14, c: MUT })}<rect x="${x + 12}" y="${y - 14}" width="14" height="28" rx="2" fill="${b}"/>`;
  const BLUE = '#3b82f6', RED = '#ef4444';
  FIG.g5n3 = {
    after: 1, title: '指示劑的顏色變化', cap: '石蕊試紙：酸性讓藍色變紅，鹼性讓紅色變藍。紫色高麗菜汁：酸性變紅、粉紅，鹼性變綠、黃綠。（顏色為示意）',
    v: S(440, 215, '石蕊試紙和紫色高麗菜汁在酸性、中性、鹼性溶液中的顏色',
      `${T(150, 28, '酸性', { b: 1, c: '#dc2626' })}${T(260, 28, '中性', { b: 1, c: MUT })}${T(370, 28, '鹼性', { b: 1, c: '#2563eb' })}
${T(10, 72, '藍色石蕊', { a: 'start', fs: 13, b: 1 })}${strip(150, 67, BLUE, RED)}${strip(260, 67, BLUE, BLUE)}${strip(370, 67, BLUE, BLUE)}
${T(10, 118, '紅色石蕊', { a: 'start', fs: 13, b: 1 })}${strip(150, 113, RED, RED)}${strip(260, 113, RED, RED)}${strip(370, 113, RED, BLUE)}
${T(10, 164, '紫高麗菜汁', { a: 'start', fs: 13, b: 1 })}${[[150, '#f472b6'], [260, '#7e22ce'], [370, '#84cc16']].map(([x, c]) => `<path d="M${x - 18} 142 L${x - 15} 178 L${x + 15} 178 L${x + 18} 142" fill="none" stroke="#475569" stroke-width="2"/><path d="M${x - 17} 152 L${x - 15} 177 L${x + 15} 177 L${x + 17} 152 Z" fill="${c}"/>`).join('')}
${T(150, 206, '醋、檸檬汁', { fs: 12, c: MUT })}${T(260, 206, '糖水、純水', { fs: 12, c: MUT })}${T(370, 206, '小蘇打水、肥皂水', { fs: 12, c: MUT })}`)
  };

  FIG.g5n4 = {
    after: 0, anim: true, title: '動畫：燃燒三要素', cap: '可燃物、助燃物（氧氣）、溫度達到燃點，三個缺一個火就會熄滅：移走可燃物、隔絕氧氣、降低溫度。（示意動畫）',
    v: S(440, 250, '燃燒三角形：可燃物、助燃物氧氣、溫度達到燃點',
      `<path d="M220 34 L90 218 L350 218 Z" fill="#fff7ed" stroke="#ea580c" stroke-width="4" stroke-linejoin="round"/>
<g transform="translate(220 172)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1.06 1.12;0.96 0.94;1 1" dur="0.9s" repeatCount="indefinite"/>
<path d="M0 30 C-34 22 -32 -10 -12 -34 C-12 -16 -2 -14 0 -22 C4 -40 14 -54 10 -70 C34 -46 38 -14 30 6 C24 22 14 30 0 30 Z" fill="#f97316"/><path d="M0 28 C-14 24 -16 6 -6 -8 C-4 2 4 0 4 -10 C14 0 18 14 12 22 C8 26 4 28 0 28 Z" fill="#fde047"/></g></g>
${T(220, 22, '助燃物（氧氣）', { b: 1, fs: 14 })}${T(80, 240, '可燃物', { b: 1, fs: 14 })}${T(360, 240, '溫度達到燃點', { b: 1, fs: 14 })}`)
  };

  FIG.g5n5 = {
    after: 0, anim: true, title: '動畫：聲音是振動產生的', cap: '弦振動，推動旁邊的空氣一起振動，聲音就一圈一圈傳到耳朵。（示意動畫）',
    v: S(440, 200, '撥動的弦振動，聲波一圈圈傳到耳朵',
      `<defs><clipPath id="g5n5c"><rect x="132" y="0" width="300" height="200"/></clipPath></defs>
<rect x="52" y="86" width="10" height="28" fill="#92400e"/><rect x="198" y="86" width="10" height="28" fill="#92400e"/>
<path d="M60 100 Q130 88 200 100" stroke="#0f172a" stroke-width="2.5" fill="none"><animate attributeName="d" values="M60 100 Q130 86 200 100;M60 100 Q130 114 200 100;M60 100 Q130 86 200 100" dur="0.16s" repeatCount="indefinite"/></path>
<g clip-path="url(#g5n5c)">${[0, 0.6, 1.2].map(b => `<circle cx="130" cy="100" r="10" fill="none" stroke="#0ea5e9" stroke-width="3"><animate attributeName="r" values="10;250" dur="1.8s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.8s" begin="${b}s" repeatCount="indefinite"/></circle>`).join('')}</g>
${T(400, 112, '👂', { fs: 36 })}${T(130, 150, '弦振動', { b: 1, fs: 14 })}${T(300, 180, '聲音靠空氣傳到耳朵', { fs: 14 })}`)
  };

  /* ---------- 六年級 ---------- */
  FIG.g6n1 = {
    after: 0, anim: true, title: '動畫：水的循環', cap: '太陽晒熱海面，水蒸發上升；到高空變冷凝結成雲；雲裡的水滴變大落下成雨；雨水沿河流回大海。（示意動畫）',
    v: S(440, 260, '水的循環：海水蒸發、凝結成雲、降雨、河水流回大海',
      `<defs>${AR('g6n1a', '#0369a1')}</defs>
<circle cx="50" cy="45" r="22" fill="#fbbf24"/>${[0, 45, 90, 135, 180, 225, 270, 315].map(a => L(50 + 28 * Math.cos(a * Math.PI / 180), 45 + 28 * Math.sin(a * Math.PI / 180), 50 + 36 * Math.cos(a * Math.PI / 180), 45 + 36 * Math.sin(a * Math.PI / 180), '#f59e0b', { w: 3 })).join('')}
<path d="M250 200 L360 92 L440 160 L440 260 L250 260 Z" fill="#86efac" stroke="#15803d" stroke-width="2"/><rect x="0" y="200" width="252" height="60" fill="#38bdf8"/>
<path d="M352 116 C330 150 300 170 262 192 L244 204" stroke="#0ea5e9" stroke-width="5" fill="none" stroke-dasharray="10 6"><animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/></path>
${[80, 115, 150, 185, 220].map((x, i) => `<circle cx="${x}" cy="195" r="4" fill="#0ea5e9" opacity="0"><animate attributeName="cy" values="195;95" dur="2.5s" begin="${i * 0.5}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="${i * 0.5}s" repeatCount="indefinite"/></circle>`).join('')}
<g fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"><circle cx="280" cy="62" r="18"/><circle cx="304" cy="50" r="24"/><circle cx="330" cy="62" r="18"/></g><rect x="266" y="58" width="78" height="22" fill="#e2e8f0"/>
${[286, 302, 318, 334].map((x, i) => `<line x1="${x}" y1="84" x2="${x - 3}" y2="94" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" values="0 0;-6 36" dur="1s" begin="${i * 0.25}s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1s" begin="${i * 0.25}s" repeatCount="indefinite"/></line>`).join('')}
${T(150, 150, '蒸發', { b: 1, fs: 15, c: '#0369a1' })}${T(305, 24, '凝結成雲', { b: 1, fs: 14 })}${T(372, 80, '降雨', { b: 1, fs: 14, a: 'start' })}${T(120, 236, '海', { b: 1, fs: 15, c: '#fff' })}${T(350, 228, '河流流回大海', { b: 1, fs: 13 })}`)
  };

  FIG.g6n2 = {
    after: 2, title: '岩石的循環', cap: '三大類岩石會互相轉變：岩漿冷卻變火成岩；岩石風化、侵蝕、堆積變沉積岩；受高溫高壓變變質岩；熔融又變回岩漿。（示意圖）',
    v: S(440, 250, '岩石循環：岩漿、火成岩、沉積岩、變質岩之間的轉變',
      `<defs>${AR('g6n2a', '#475569')}</defs>
<rect x="170" y="20" width="100" height="40" rx="10" fill="#fecaca" stroke="#b91c1c" stroke-width="2"/>${T(220, 46, '火成岩', { b: 1 })}
<rect x="30" y="190" width="110" height="40" rx="10" fill="#fde68a" stroke="#a16207" stroke-width="2"/>${T(85, 216, '沉積岩', { b: 1 })}
<rect x="300" y="190" width="110" height="40" rx="10" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>${T(355, 216, '變質岩', { b: 1 })}
<ellipse cx="220" cy="135" rx="46" ry="20" fill="#fb923c" stroke="#c2410c" stroke-width="2"/>${T(220, 140, '岩漿', { b: 1, c: '#fff' })}
${L(220, 114, 220, 64, '#475569', { m: 'g6n2a' })}${T(228, 94, '冷卻凝固', { a: 'start', fs: 13 })}
${L(174, 60, 104, 186, '#475569', { m: 'g6n2a' })}${T(128, 112, '風化、侵蝕、', { a: 'end', fs: 13 })}${T(128, 130, '堆積', { a: 'end', fs: 13 })}
${L(142, 210, 296, 210, '#475569', { m: 'g6n2a' })}${T(220, 202, '高溫高壓', { fs: 13 })}
${L(330, 188, 264, 148, '#475569', { m: 'g6n2a' })}${T(316, 160, '熔融', { a: 'start', fs: 13 })}`)
  };

  FIG.g6n3 = {
    after: 0, anim: true, title: '動畫：熱的三種傳播方式', cap: '傳導：熱沿著湯匙傳到把手。對流：熱水上升、冷水下降，形成循環。輻射：太陽的熱不需要東西就能直接傳過來。（示意動畫）',
    v: S(440, 215, '熱的傳導、對流和輻射',
      `<defs><linearGradient id="g6n3g" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#dc2626"/><stop offset="1" stop-color="#fde68a"/></linearGradient></defs>
<path d="M18 118 Q72 176 126 118 Z" fill="#fde68a" stroke="#b45309" stroke-width="2"/><path d="M84 138 L124 54" stroke="url(#g6n3g)" stroke-width="7" stroke-linecap="round"/>
${[0, -0.7, -1.4].map(b => `<circle r="4" fill="#dc2626"><animateMotion dur="2.1s" begin="${b}s" repeatCount="indefinite" path="M86 134 L122 58"/></circle>`).join('')}
<rect x="170" y="78" width="100" height="80" rx="4" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>${[188, 206, 224, 242].map(x => `<path d="M${x} 180 L${x + 6} 164 L${x + 12} 180 Z" fill="#f97316"/>`).join('')}
${[['M216 150 L216 92 L184 92 L184 150 Z', '#dc2626'], ['M224 150 L224 92 L256 92 L256 150 Z', '#dc2626']].map(([d]) => `<path d="${d}" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>` + [0, 1, 2].map(i => `<circle r="4.5" fill="#ef4444"><animateMotion dur="3s" begin="${-i}s" repeatCount="indefinite" path="${d}"/></circle>`).join('')).join('')}
<circle cx="322" cy="54" r="18" fill="#fbbf24"/>${[[340, 64], [336, 74], [330, 80]].map(([x, y], i) => `<line x1="${x}" y1="${y}" x2="${386 - i * 6}" y2="${126 + i * 2}" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"><animate attributeName="stroke-dashoffset" values="28;0" dur="0.8s" repeatCount="indefinite"/></line>`).join('')}
<rect x="372" y="128" width="54" height="30" rx="6" fill="#334155"/>
${T(72, 196, '傳導', { b: 1 })}${T(72, 212, '沿著物體傳', { fs: 12, c: MUT })}${T(220, 196, '對流', { b: 1 })}${T(220, 212, '熱水上升循環', { fs: 12, c: MUT })}${T(370, 196, '輻射', { b: 1 })}${T(370, 212, '不用東西也能傳', { fs: 12, c: MUT })}`)
  };

  FIG.g6n4 = {
    after: 1, title: '自己做電磁鐵', cap: '電線繞在鐵釘上、接上電池，鐵釘就變成磁鐵，可以吸起迴紋針；斷電後磁力就消失。（示意圖）',
    v: S(440, 210, '電線繞在鐵釘上接電池，鐵釘吸起迴紋針',
      `<rect x="112" y="84" width="8" height="28" fill="#64748b"/><rect x="120" y="90" width="200" height="16" fill="#94a3b8"/><path d="M320 90 L346 98 L320 106 Z" fill="#94a3b8"/>
${Array.from({ length: 14 }, (_, i) => `<ellipse cx="${142 + i * 12}" cy="98" rx="5" ry="15" fill="none" stroke="#b45309" stroke-width="2.5"/>`).join('')}
<path d="M140 112 L140 166 L192 166 M298 112 L298 166 L250 166" stroke="#b45309" stroke-width="2.5" fill="none"/>
<rect x="192" y="152" width="58" height="28" rx="4" fill="#fde68a" stroke="#a16207" stroke-width="2"/>${T(204, 171, '+', { b: 1 })}${T(238, 171, '−', { b: 1 })}
<path d="M352 104 h14 a5 5 0 0 1 0 10 h-12 a4 4 0 0 1 0 -7 h10" stroke="#475569" stroke-width="2" fill="none"/><path d="M360 118 h14 a5 5 0 0 1 0 10 h-12 a4 4 0 0 1 0 -7 h10" stroke="#475569" stroke-width="2" fill="none"/>
${T(220, 66, '線圈：繞越多圈，磁力越強', { fs: 14, b: 1 })}${T(106, 103, '鐵釘', { a: 'end', fs: 14 })}${T(372, 150, '迴紋針', { fs: 13 })}${T(221, 200, '電池', { fs: 13 })}`)
  };

  FIG.g6n5 = {
    after: 0, anim: true, title: '動畫：槓桿怎麼省力？', cap: '施力臂比抗力臂長，就能用比較小的力抬起重物。（示意動畫）',
    v: S(440, 232, '槓桿：支點、施力點、抗力點；施力臂比抗力臂長所以省力',
      `<defs>${AR('g6n5a', '#dc2626')}</defs>
<g><animateTransform attributeName="transform" type="rotate" values="0 160 160;7 160 160;0 160 160" ${SINE} dur="3s" repeatCount="indefinite"/>
<rect x="40" y="154" width="345" height="10" rx="3" fill="#a16207"/><rect x="58" y="120" width="44" height="34" rx="4" fill="#64748b"/>${T(80, 142, '重物', { fs: 13, c: '#fff', b: 1 })}
${L(380, 104, 380, 148, '#dc2626', { w: 4, m: 'g6n5a' })}</g>
<path d="M160 164 L142 192 L178 192 Z" fill="#334155"/>
${T(80, 108, '抗力點', { b: 1, fs: 14 })}${T(380, 94, '施力點', { b: 1, fs: 14, c: '#dc2626' })}${T(136, 190, '支點', { b: 1, fs: 14, a: 'end' })}
${L(80, 204, 156, 204, '#475569', { w: 2 })}${L(80, 198, 80, 210, '#475569', { w: 2 })}${L(156, 198, 156, 210, '#475569', { w: 2 })}${T(118, 222, '抗力臂', { fs: 13 })}
${L(164, 204, 380, 204, '#475569', { w: 2 })}${L(164, 198, 164, 210, '#475569', { w: 2 })}${L(380, 198, 380, 210, '#475569', { w: 2 })}${T(272, 222, '施力臂（比較長 → 省力）', { fs: 13, b: 1 })}`)
  };

  FIG.g6n6 = {
    after: 1, title: '一條食物鏈', cap: '箭頭指向「吃的那一方」：蝗蟲吃稻子、青蛙吃蝗蟲、蛇吃青蛙、老鷹吃蛇。（示意圖）',
    v: S(440, 125, '食物鏈：稻子、蝗蟲、青蛙、蛇、老鷹',
      `<defs>${AR('g6n6a', '#15803d')}</defs>
${[[40, '🌾', '稻子'], [130, '🦗', '蝗蟲'], [220, '🐸', '青蛙'], [310, '🐍', '蛇'], [400, '🦅', '老鷹']].map(([x, e, n]) => T(x, 56, e, { fs: 34 }) + T(x, 90, n, { b: 1, fs: 14 })).join('')}
${[40, 130, 220, 310].map(x => L(x + 24, 44, x + 64, 44, '#15803d', { w: 3, m: 'g6n6a' })).join('')}
${T(40, 114, '生產者', { fs: 12, c: '#15803d' })}${T(265, 114, '消費者', { fs: 12, c: '#b45309' })}${L(110, 110, 230, 110, '#fcd34d', { w: 2 })}${L(300, 110, 420, 110, '#fcd34d', { w: 2 })}`)
  };

  /* ---------- 七年級 ---------- */
  FIG.j7n1 = {
    after: 0, title: '動物細胞和植物細胞', cap: '兩種細胞都有細胞膜、細胞質、細胞核和粒線體；植物細胞另外有細胞壁、葉綠體和大液胞。（示意圖，沒有照實際比例）',
    v: S(440, 240, '動物細胞與植物細胞的構造比較',
      `<ellipse cx="110" cy="112" rx="88" ry="72" fill="#fde2e2" stroke="#be123c" stroke-width="2.5"/>
<circle cx="100" cy="106" r="24" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/>${T(100, 111, '細胞核', { fs: 12, b: 1 })}
<ellipse cx="152" cy="146" rx="15" ry="7" fill="#fb923c"/><ellipse cx="62" cy="150" rx="15" ry="7" fill="#fb923c"/>${T(150, 84, '細胞質', { fs: 12, c: MUT })}${T(110, 30, '細胞膜', { fs: 12, c: '#be123c', b: 1 })}
<rect x="250" y="34" width="172" height="156" rx="6" fill="#ecfccb" stroke="#15803d" stroke-width="6"/><rect x="257" y="41" width="158" height="142" rx="4" fill="none" stroke="#65a30d" stroke-width="1.5"/>
<rect x="296" y="56" width="104" height="86" rx="18" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>${T(348, 104, '大液胞', { fs: 13, b: 1 })}
<circle cx="285" cy="164" r="20" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/>${T(285, 168, '細胞核', { fs: 11, b: 1 })}
${[[272, 60], [272, 104], [346, 164], [390, 162]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="6" fill="#22c55e" stroke="#15803d"/>`).join('')}<ellipse cx="404" cy="80" rx="8" ry="12" fill="#fb923c"/>
${T(336, 24, '細胞壁', { fs: 12, c: '#15803d', b: 1 })}
${T(110, 210, '動物細胞', { b: 1 })}${T(336, 210, '植物細胞', { b: 1 })}
<ellipse cx="128" cy="230" rx="10" ry="5" fill="#22c55e" stroke="#15803d"/>${T(144, 234, '葉綠體（只有植物）', { a: 'start', fs: 12 })}<ellipse cx="290" cy="230" rx="10" ry="5" fill="#fb923c"/>${T(306, 234, '粒線體', { a: 'start', fs: 12 })}`)
  };

  FIG.j7n2 = {
    after: 0, title: '光合作用：葉子的進與出', cap: '二氧化碳（從氣孔進入）＋水（從根吸收）在葉綠體裡利用光能，做出葡萄糖並放出氧。（示意圖）',
    v: S(440, 230, '光合作用：二氧化碳和水進入葉子，利用光能產生葡萄糖和氧',
      `<defs>${AR('j7n2i', '#475569')}${AR('j7n2o', '#0284c7')}</defs>
<ellipse cx="220" cy="120" rx="118" ry="54" fill="#4ade80" stroke="#15803d" stroke-width="2.5"/>${L(110, 120, 330, 120, '#15803d', { w: 2 })}
${T(220, 112, '光合作用', { b: 1, fs: 17 })}${T(220, 142, '（在葉綠體）', { fs: 12, c: '#14532d' })}
<circle cx="40" cy="38" r="20" fill="#fbbf24"/>${L(66, 52, 128, 84, '#f59e0b', { w: 3, m: 'j7n2i' })}${T(98, 52, '光', { b: 1, fs: 15, c: '#b45309' })}
${L(20, 164, 108, 140, '#475569', { w: 3, m: 'j7n2i' })}${T(12, 188, '二氧化碳', { a: 'start', fs: 14, b: 1 })}
${L(220, 220, 220, 180, '#475569', { w: 3, m: 'j7n2i' })}${T(230, 214, '水（從根）', { a: 'start', fs: 14, b: 1 })}
${L(326, 92, 400, 56, '#0284c7', { w: 3, m: 'j7n2o' })}${T(410, 48, '氧', { b: 1, fs: 15, c: '#0369a1' })}
${L(326, 150, 400, 182, '#0284c7', { w: 3, m: 'j7n2o' })}${T(432, 208, '葡萄糖（→澱粉）', { a: 'end', fs: 14, b: 1, c: '#0369a1' })}`)
  };

  const cell = (x, y, g, c, bg) => `<rect x="${x}" y="${y}" width="100" height="56" fill="${bg}" stroke="#94a3b8" stroke-width="1.5"/>${T(x + 50, y + 35, g, { b: 1, fs: 16, c })}`;
  FIG.j7n3 = {
    after: 2, title: '生男生女的機率', cap: '卵只帶 X；精子帶 X 或 Y 各一半。受精後 XX 是女生、XY 是男生，機率各 1/2。（示意圖）',
    v: S(440, 200, '棋盤方格：母親的卵 X、X，父親的精子 X、Y，子代 XX 女與 XY 男各一半',
      `${T(260, 22, '母親的卵', { b: 1, fs: 14 })}${T(210, 50, 'X', { b: 1, fs: 18, c: '#db2777' })}${T(310, 50, 'X', { b: 1, fs: 18, c: '#db2777' })}
${T(66, 124, '父親的精子', { b: 1, fs: 14 })}${T(140, 100, 'X', { b: 1, fs: 18, c: '#db2777' })}${T(140, 156, 'Y', { b: 1, fs: 18, c: '#2563eb' })}
${cell(160, 64, 'XX 女', '#be185d', '#fce7f3')}${cell(260, 64, 'XX 女', '#be185d', '#fce7f3')}${cell(160, 120, 'XY 男', '#1d4ed8', '#dbeafe')}${cell(260, 120, 'XY 男', '#1d4ed8', '#dbeafe')}
${T(380, 104, '女 2/4', { a: 'start', fs: 14, b: 1, c: '#be185d' })}${T(380, 160, '男 2/4', { a: 'start', fs: 14, b: 1, c: '#1d4ed8' })}${T(260, 196, '生男、生女的機率各 1/2', { fs: 14, b: 1 })}`)
  };

  FIG.j7n4 = {
    after: 1, title: '能量金字塔', cap: '每往上一層，大約只剩下 10% 的能量（數字是相對值）。所以越上層的生物數量通常越少。（示意圖）',
    v: S(440, 215, '能量金字塔：草、蚱蜢、青蛙、蛇，每往上一層能量約剩 10%',
      `<path d="M5 200 L345 200 L310 160 L40 160 Z" fill="#86efac" stroke="#15803d"/><path d="M40 160 L310 160 L275 120 L75 120 Z" fill="#fde68a" stroke="#a16207"/>
<path d="M75 120 L275 120 L240 80 L110 80 Z" fill="#fdba74" stroke="#c2410c"/><path d="M110 80 L240 80 L205 40 L145 40 Z" fill="#fca5a5" stroke="#b91c1c"/>
${T(175, 186, '草（生產者）', { b: 1, fs: 14 })}${T(175, 146, '蚱蜢', { b: 1, fs: 14 })}${T(175, 106, '青蛙', { b: 1, fs: 14 })}${T(175, 66, '蛇', { b: 1, fs: 14 })}
${T(372, 30, '能量', { b: 1, fs: 13, a: 'start' })}${[[186, '10000'], [146, '1000'], [106, '100'], [66, '10']].map(([y, n]) => T(372, y, n, { a: 'start', fs: 14, b: 1, c: '#0369a1' })).join('')}`)
  };

  /* ---------- 八年級 ---------- */
  const drop = (x, size, rest, fill, stroke, label) => `<rect x="${x}" y="15" width="${size}" height="${size}" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="2"><animate attributeName="y" values="15;${rest};${rest - 4};${rest};${rest}" keyTimes="0;0.3;0.38;0.46;1" dur="5s" repeatCount="indefinite"/></rect>${T(x + size / 2, 228, label, { b: 1, fs: 14 })}`;
  FIG.j8n1 = {
    after: 1, anim: true, title: '動畫：誰浮誰沉？', cap: '冰（0.92）比水小一點，所以大約 92% 沉在水面下；木頭（約 0.6）浮得比較高；鐵（7.9）比水大很多，沉到底。（示意動畫）',
    v: S(440, 240, '冰、木頭、鐵放進水裡：冰大部分沉在水面下，木頭浮得較高，鐵沉到底',
      `${drop(110, 40, 96.8, '#e0f2fe', '#38bdf8', '冰 0.92')}${drop(200, 40, 84, '#d97706', '#92400e', '木頭 ≈ 0.6')}${drop(292, 30, 178, '#64748b', '#1e293b', '鐵 7.9')}
<rect x="62" y="100" width="316" height="108" fill="#38bdf8" opacity=".35"/>${L(62, 100, 378, 100, '#0284c7', { w: 2 })}
<path d="M60 60 L60 210 L380 210 L380 60" stroke="#0f172a" stroke-width="3" fill="none"/>${T(372, 200, '水 1 g/cm³', { a: 'end', fs: 12, c: '#0369a1' })}`)
  };

  FIG.j8n2 = {
    after: 0, anim: true, title: '動畫：聲波是縱波', cap: '喇叭振動推擠空氣，空氣分子前後振動，形成一疏一密的波往前傳。分子本身沒有跟著跑走，傳出去的是能量。（示意動畫）',
    v: S(440, 165, '喇叭推動空氣，形成疏密相間的縱波向右傳播',
      `<rect x="10" y="52" width="24" height="66" fill="#334155"/><path d="M34 62 L56 40 L56 130 L34 108 Z" fill="#475569"/>
${Array.from({ length: 30 }, (_, i) => `<line x1="${72 + i * 12}" y1="46" x2="${72 + i * 12}" y2="124" stroke="#475569" stroke-width="2"><animateTransform attributeName="transform" type="translate" values="-9 0;9 0;-9 0" ${SINE} dur="1.2s" begin="${(-i * 0.1).toFixed(2)}s" repeatCount="indefinite"/></line>`).join('')}
${T(240, 152, '空氣分子前後振動，把能量往前傳', { fs: 14 })}`)
  };

  FIG.j8n3 = {
    after: 2, title: '凸透鏡會聚光線', cap: '平行光通過凸透鏡後會聚在焦點 F；透鏡中心到焦點的距離叫焦距。（示意圖）',
    v: S(440, 205, '平行光通過凸透鏡，會聚在焦點',
      `<defs>${AR('j8n3a', '#f59e0b')}</defs>
${L(10, 100, 430, 100, '#94a3b8', { w: 1.5, d: '6 5' })}
${[60, 100, 140].map(y => L(20, y, 186, y, '#f59e0b', { w: 2.5, m: 'j8n3a' }) + L(200, y, 320, 100, '#f59e0b', { w: 2.5 }) + L(320, 100, 400, 100 + (100 - y) * 0.667, '#f59e0b', { w: 2, d: '5 5' })).join('')}
<ellipse cx="200" cy="100" rx="14" ry="72" fill="#bae6fd" stroke="#0284c7" stroke-width="2" opacity=".85"/>
<circle cx="320" cy="100" r="5" fill="#dc2626"/>${T(320, 126, '焦點 F', { b: 1, fs: 14, c: '#dc2626' })}${T(200, 20, '凸透鏡', { b: 1, fs: 14 })}${T(70, 48, '平行光', { fs: 13 })}
${L(200, 180, 320, 180, '#475569', { w: 2 })}${L(200, 174, 200, 186, '#475569', { w: 2 })}${L(320, 174, 320, 186, '#475569', { w: 2 })}${T(260, 200, '焦距', { fs: 13, b: 1 })}`)
  };

  const PHC = ['#dc2626', '#ef4444', '#f97316', '#fb923c', '#f59e0b', '#facc15', '#a3e635', '#22c55e', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#7c3aed', '#6b21a8'];
  const phx = v => 25 + v * 26 + 13;
  FIG.j8n4 = {
    after: 1, title: 'pH 值的尺', cap: 'pH 7 是中性；越往左酸性越強，越往右鹼性越強。標示的是大約的值。（顏色為示意）',
    v: S(440, 175, 'pH 0 到 14 的色尺，標示胃酸、檸檬汁、純水、小蘇打水、肥皂水、漂白水的位置',
      `${PHC.map((c, i) => `<rect x="${25 + i * 26}" y="52" width="26" height="30" fill="${c}"/>${T(25 + i * 26 + 13, 72, i, { fs: 13, b: 1, c: i >= 4 && i <= 9 ? INK : '#fff' })}`).join('')}
${[[1.5, '胃酸'], [7, '純水'], [9.5, '肥皂水']].map(([v, n]) => L(phx(v), 36, phx(v), 50, '#475569', { w: 1.5 }) + T(phx(v), 30, n, { fs: 13, b: 1 })).join('')}
${[[2.5, '檸檬汁'], [8.5, '小蘇打水'], [12.5, '漂白水']].map(([v, n]) => L(phx(v), 84, phx(v), 98, '#475569', { w: 1.5 }) + T(phx(v), 114, n, { fs: 13, b: 1 })).join('')}
${L(150, 150, 40, 150, '#dc2626', { w: 3 })}<path d="M30 150 L42 143 L42 157 Z" fill="#dc2626"/>${T(100, 142, '酸性越強', { fs: 13, c: '#dc2626', b: 1 })}
${T(phx(7), 156, '中性', { fs: 13, b: 1 })}${L(290, 150, 400, 150, '#6d28d9', { w: 3 })}<path d="M410 150 L398 143 L398 157 Z" fill="#6d28d9"/>${T(345, 142, '鹼性越強', { fs: 13, c: '#6d28d9', b: 1 })}`)
  };

  /* ---------- 九年級 ---------- */
  const QUAD = 'calcMode="spline" keyTimes="0;0.7;1" keySplines="0.333 0 0.667 0.333;0 0 1 1"';
  const cart = (y, m, c, dist) => `<g><animateTransform attributeName="transform" type="translate" values="0 0;${dist} 0;${dist} 0" ${QUAD} dur="3s" repeatCount="indefinite"/>
<rect x="20" y="${y}" width="56" height="30" rx="4" fill="${c}"/>${T(48, y + 21, m, { b: 1, c: '#fff' })}<circle cx="34" cy="${y + 34}" r="6" fill="#334155"/><circle cx="62" cy="${y + 34}" r="6" fill="#334155"/>
${L(80, y + 15, 112, y + 15, '#dc2626', { w: 3.5, m: 'j9n1a' })}${T(96, y + 6, 'F', { b: 1, fs: 14, c: '#dc2626' })}</g>`;
  FIG.j9n1 = {
    after: 1, anim: true, title: '動畫：F ＝ m × a', cap: '兩台車受到一樣大的力 F。質量 2m 的車加速度只有一半，同樣時間內跑的距離也只有一半。（示意動畫）',
    v: S(440, 200, '同樣的力推質量 m 和 2m 的車，質量大的加速度小',
      `<defs>${AR('j9n1a', '#dc2626')}</defs>${T(220, 22, '同樣的力 F：質量越大，加速度越小', { b: 1, fs: 14 })}
${L(10, 96, 430, 96, '#94a3b8', { w: 2 })}${L(10, 186, 430, 186, '#94a3b8', { w: 2 })}${cart(56, 'm', '#f97316', 240)}${cart(146, '2m', '#0ea5e9', 120)}`)
  };

  FIG.j9n2 = {
    after: 2, anim: true, title: '動畫：單擺的能量轉換', cap: '擺到最高點時速度是 0，位能最大；擺到最低點時速度最快，動能最大。（不計空氣阻力時，力學能守恆；示意動畫）',
    v: S(440, 230, '單擺在最高點位能最大，在最低點動能最大',
      `${L(150, 20, 290, 20, '#0f172a', { w: 5 })}<path d="M117 142 A160 160 0 0 0 323 142" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="6 6"/>
<g><animateTransform attributeName="transform" type="rotate" values="40 220 20;-40 220 20;40 220 20" ${SINE} dur="2.4s" repeatCount="indefinite"/>${L(220, 20, 220, 180, '#334155', { w: 2 })}<circle cx="220" cy="180" r="13" fill="#f97316" stroke="#0f172a" stroke-width="1.5"/></g>
${T(80, 150, '最高點', { b: 1, fs: 13 })}${T(80, 168, '位能最大', { fs: 13, c: '#b45309' })}${T(80, 186, '速度 0', { fs: 13, c: MUT })}
${T(362, 150, '最高點', { b: 1, fs: 13 })}${T(362, 168, '位能最大', { fs: 13, c: '#b45309' })}${T(362, 186, '速度 0', { fs: 13, c: MUT })}
${T(220, 218, '最低點：速度最快（動能最大）', { b: 1, fs: 13, c: '#0369a1' })}`)
  };

  const bulb = (x, y) => `<circle cx="${x}" cy="${y}" r="12" fill="#fde047" stroke="#a16207" stroke-width="2"/>${L(x - 5, y - 5, x + 5, y + 5, '#a16207', { w: 1.5 })}${L(x - 5, y + 5, x + 5, y - 5, '#a16207', { w: 1.5 })}`;
  const batt = x => `<rect x="${x - 12}" y="96" width="24" height="44" rx="3" fill="#fde68a" stroke="#a16207" stroke-width="2"/>${T(x, 112, '+', { b: 1, fs: 14 })}${T(x, 134, '−', { b: 1, fs: 14 })}`;
  const flow = (d, n, dur) => Array.from({ length: n }, (_, i) => `<circle r="4" fill="#0ea5e9"><animateMotion dur="${dur}s" begin="${(-i * dur / n).toFixed(2)}s" repeatCount="indefinite" path="${d}"/></circle>`).join('');
  FIG.j9n3 = {
    after: 2, anim: true, title: '動畫：串聯和並聯', cap: '藍點表示電流的方向（從電池正極流出）。串聯只有一條路，一個燈壞了全部不亮；並聯各有各的路，一個燈壞了另一個還會亮。（示意動畫）',
    v: S(440, 215, '串聯電路只有一條路徑；並聯電路有兩條路徑',
      `<path d="M30 60 L180 60 L180 170 L30 170 Z" fill="none" stroke="#334155" stroke-width="3"/>${flow('M30 96 L30 60 L180 60 L180 170 L30 170 Z', 8, 4)}${batt(30)}${bulb(85, 60)}${bulb(140, 60)}
${T(105, 200, '串聯：一條路', { b: 1, fs: 14 })}
<path d="M250 60 L410 60 L410 170 L250 170 Z M330 60 L330 170" fill="none" stroke="#334155" stroke-width="3"/>${flow('M250 96 L250 60 L330 60 L330 170 L250 170 Z', 5, 3)}${flow('M250 96 L250 60 L410 60 L410 170 L250 170 Z', 6, 4)}${batt(250)}${bulb(330, 115)}${bulb(410, 115)}
${T(330, 200, '並聯：兩條路', { b: 1, fs: 14 })}`)
  };

  FIG.j9n4 = {
    after: 0, title: '三種板塊交界', cap: '張裂：板塊分開，岩漿湧出形成新地殼。聚合：板塊互相擠壓，形成山脈或隱沒帶（臺灣就在聚合的交界）。錯動：板塊水平錯開。（示意圖）',
    v: S(440, 215, '板塊交界的三種類型：張裂、聚合、錯動',
      `<defs>${AR('j9n4a', '#dc2626')}</defs>
<rect x="8" y="92" width="58" height="30" fill="#a8a29e" stroke="#57534e"/><rect x="78" y="92" width="58" height="30" fill="#a8a29e" stroke="#57534e"/><path d="M66 92 L72 80 L78 92 L78 150 L66 150 Z" fill="#f97316"/>
${L(54, 72, 20, 72, '#dc2626', { w: 3, m: 'j9n4a' })}${L(90, 72, 124, 72, '#dc2626', { w: 3, m: 'j9n4a' })}
<path d="M152 92 L212 92 L246 142 L234 150 L204 106 L152 106 Z" fill="#78716c" stroke="#44403c"/><rect x="214" y="86" width="72" height="28" fill="#a8a29e" stroke="#57534e"/><path d="M236 86 L252 60 L268 86 Z" fill="#a16207"/>
${L(160, 72, 196, 72, '#dc2626', { w: 3, m: 'j9n4a' })}${L(282, 72, 260, 72, '#dc2626', { w: 3, m: 'j9n4a' })}
<rect x="306" y="56" width="60" height="84" fill="#a8a29e" stroke="#57534e"/><rect x="370" y="56" width="60" height="84" fill="#d6d3d1" stroke="#57534e"/>${L(368, 50, 368, 146, '#dc2626', { w: 2, d: '5 4' })}
${L(336, 128, 336, 74, '#dc2626', { w: 3, m: 'j9n4a' })}${L(400, 70, 400, 124, '#dc2626', { w: 3, m: 'j9n4a' })}
${[[72, '張裂型', '板塊分開', '（中洋脊、裂谷）'], [220, '聚合型', '板塊擠壓', '（山脈、隱沒帶）'], [368, '錯動型', '水平錯開', '（轉形斷層）']].map(([x, a, b, c]) => T(x, 172, a, { b: 1, fs: 14 }) + T(x, 190, b, { fs: 13 }) + T(x, 207, c, { fs: 12, c: MUT })).join('')}`)
  };

  /** 月相：從地球看到的樣子。th：月球和太陽方向的夾角（逆時針，0＝新月） */
  const phase = (cx, cy, r, th) => {
    const base = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#475569"/>`;
    if (th === 0) return base;
    if (th === 180) return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fde68a"/>`;
    const rx = Math.abs(r * Math.cos(th * Math.PI / 180)).toFixed(2), top = `${cx} ${cy - r}`, bot = `${cx} ${cy + r}`;
    const d = th < 180
      ? `M${top} A${r} ${r} 0 0 1 ${bot} A${rx} ${r} 0 0 ${th < 90 ? 0 : 1} ${top} Z`
      : `M${top} A${r} ${r} 0 0 0 ${bot} A${rx} ${r} 0 0 ${th > 270 ? 1 : 0} ${top} Z`;
    return base + `<path d="${d}" fill="#fde68a"/>`;
  };
  FIG.j9n5 = {
    after: 0, title: '月相是怎麼來的？', cap: '太陽光從右邊照過來，月球永遠是面向太陽的一半亮。內圈是月球繞地球的位置，外圈是從地球（北半球）看到的樣子。（示意圖，沒有照比例）',
    v: S(440, 300, '月球繞地球公轉的八個位置與從地球看到的月相：新月、上弦月、滿月、下弦月',
      `<defs>${AR('j9n5a', '#f59e0b')}</defs>
${[60, 110, 190, 240].map(y => L(436, y, 396, y, '#f59e0b', { w: 3, m: 'j9n5a' })).join('')}${T(416, 150, '太陽光', { fs: 13, b: 1, c: '#b45309' })}
<circle cx="190" cy="150" r="90" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 5"/><circle cx="190" cy="150" r="20" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>${T(190, 155, '地球', { fs: 12, b: 1, c: '#fff' })}
${[0, 45, 90, 135, 180, 225, 270, 315].map(a => { const x = 190 + 90 * Math.cos(a * Math.PI / 180), y = 150 - 90 * Math.sin(a * Math.PI / 180); return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" fill="#475569"/><path d="M${x.toFixed(1)} ${(y - 10).toFixed(1)} A10 10 0 0 1 ${x.toFixed(1)} ${(y + 10).toFixed(1)} Z" fill="#fde68a"/>`; }).join('')}
${[0, 45, 90, 135, 180, 225, 270, 315].map(a => phase(+(190 + 136 * Math.cos(a * Math.PI / 180)).toFixed(1), +(150 - 136 * Math.sin(a * Math.PI / 180)).toFixed(1), 12, a)).join('')}
${T(326, 180, '新月', { b: 1, fs: 13 })}${T(212, 20, '上弦月', { b: 1, fs: 13, a: 'start' })}${T(54, 180, '滿月', { b: 1, fs: 13 })}${T(212, 292, '下弦月', { b: 1, fs: 13, a: 'start' })}`)
  };

  /* ---------- 地球科學島（三～六年級） ---------- */
  FIG.es3b = {
    after: 0, anim: true, title: '動畫：土壤是怎麼來的？', cap: '雨水、冷熱變化讓岩石慢慢碎裂成小顆粒；落葉和生物遺骸被分解成黑色的腐植質；蚯蚓幫忙鬆土。（示意動畫）',
    v: S(440, 250, '土壤的剖面：腐植質、表土、底土、岩石，岩石慢慢碎裂，蚯蚓在土裡鑽',
      `<rect x="0" y="0" width="440" height="70" fill="#e0f2fe"/>
${[60, 140, 220, 300, 380].map((x, i) => `<line x1="${x}" y1="0" x2="${x - 4}" y2="12" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" values="0 0;-6 58" dur="1.1s" begin="${(i * 0.23).toFixed(2)}s" repeatCount="indefinite"/></line>`).join('')}
<rect x="0" y="70" width="440" height="25" fill="#3f2a1d"/><rect x="0" y="95" width="440" height="45" fill="#7c4a2d"/><rect x="0" y="140" width="440" height="50" fill="#b07d4f"/><rect x="0" y="190" width="440" height="60" fill="#94a3b8"/>
${[[30, 160, 7], [90, 172, 5], [150, 156, 6], [230, 176, 8], [300, 162, 5]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#a8a29e"/>`).join('')}
${[[40, 192, 70, 230], [150, 190, 130, 236], [260, 190, 290, 240], [340, 190, 330, 222]].map(([a, b, c, d]) => L(a, b, c, d, '#475569', { w: 2 })).join('')}
${[[70, 0], [140, 1.5], [280, 3]].map(([x, b]) => `<circle cx="${x}" cy="196" r="3.5" fill="#cbd5e1"><animate attributeName="cy" values="196;178" dur="4.5s" begin="${b}s" repeatCount="indefinite"/></circle>`).join('')}
${[20, 50, 110, 170, 250, 330, 400].map(x => `<path d="M${x} 70 l-4 -12 M${x + 4} 70 l0 -15 M${x + 8} 70 l4 -11" stroke="#16a34a" stroke-width="2" fill="none"/>`).join('')}
<path d="M0 0 c6 -4 12 4 18 0 c6 -4 12 4 18 0" stroke="#f472b6" stroke-width="5" stroke-linecap="round" fill="none"><animateMotion dur="9s" repeatCount="indefinite" path="M40 118 C110 108 170 128 240 116 C300 106 330 124 360 118"/></path>
${T(432, 87, '腐植質（落葉分解）', { a: 'end', fs: 12, c: '#fff', b: 1 })}${T(432, 122, '表土', { a: 'end', fs: 13, c: '#fff', b: 1 })}${T(432, 170, '底土', { a: 'end', fs: 13, b: 1 })}${T(432, 222, '岩石（慢慢碎裂）', { a: 'end', fs: 13, b: 1 })}`)
  };

  FIG.es3c = {
    after: 1, anim: true, title: '動畫：水的旅行', cap: '太陽晒熱海面，水蒸發成水蒸氣；植物的葉子也會把水散發出去（蒸散）；水蒸氣在高空凝結成雲，再下雨落到地面，沿河流回大海。（示意動畫）',
    v: S(440, 255, '水循環：蒸發、蒸散、凝結成雲、降雨、流回大海',
      `<circle cx="45" cy="42" r="20" fill="#fbbf24"/>${[0, 60, 120, 180, 240, 300].map(a => L(45 + 26 * Math.cos(a * Math.PI / 180), 42 + 26 * Math.sin(a * Math.PI / 180), 45 + 33 * Math.cos(a * Math.PI / 180), 42 + 33 * Math.sin(a * Math.PI / 180), '#f59e0b', { w: 3 })).join('')}
<path d="M245 200 L330 96 L380 150 L440 150 L440 255 L245 255 Z" fill="#86efac" stroke="#15803d" stroke-width="2"/><rect x="0" y="200" width="247" height="55" fill="#38bdf8"/>
<path d="M326 112 C305 145 280 172 252 196" stroke="#0ea5e9" stroke-width="5" fill="none" stroke-dasharray="10 6"><animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/></path>
<rect x="405" y="122" width="8" height="28" fill="#92400e"/><circle cx="409" cy="112" r="18" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
${[0, 0.8, 1.6].map((b, i) => `<circle cx="${400 + i * 9}" cy="94" r="3.5" fill="#7dd3fc" opacity="0"><animate attributeName="cy" values="94;58" dur="2.4s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="${b}s" repeatCount="indefinite"/></circle>`).join('')}
${[70, 110, 150, 190].map((x, i) => `<circle cx="${x}" cy="195" r="4" fill="#0ea5e9" opacity="0"><animate attributeName="cy" values="195;90" dur="2.5s" begin="${i * 0.6}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur="2.5s" begin="${i * 0.6}s" repeatCount="indefinite"/></circle>`).join('')}
<g fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"><circle cx="262" cy="56" r="17"/><circle cx="285" cy="45" r="23"/><circle cx="309" cy="56" r="17"/></g><rect x="248" y="52" width="74" height="21" fill="#e2e8f0"/>
${[264, 280, 296, 312].map((x, i) => `<line x1="${x}" y1="78" x2="${x - 3}" y2="88" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round"><animateTransform attributeName="transform" type="translate" values="0 0;-5 32" dur="1s" begin="${i * 0.25}s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1s" begin="${i * 0.25}s" repeatCount="indefinite"/></line>`).join('')}
${T(130, 150, '蒸發', { b: 1, c: '#0369a1' })}${T(285, 20, '凝結成雲', { b: 1, fs: 14 })}${T(240, 98, '降雨', { b: 1, fs: 14, a: 'end' })}${T(410, 48, '蒸散', { b: 1, fs: 14, c: '#15803d' })}${T(120, 234, '海', { b: 1, c: '#fff' })}${T(345, 230, '河流流回大海', { b: 1, fs: 13 })}`)
  };

  const PL = [['水星', 34, 3, '#a8a29e', 3], ['金星', 48, 5, '#fbbf24', 4.5], ['地球', 62, 7, '#3b82f6', 4.5], ['火星', 78, 10, '#ef4444', 3.5], ['木星', 108, 16, '#d97706', 9], ['土星', 134, 22, '#eab308', 7.5], ['天王星', 162, 30, '#67e8f9', 6], ['海王星', 190, 40, '#2563eb', 6]];
  FIG.es4a = {
    after: 1, anim: true, title: '動畫：八大行星繞太陽', cap: '行星都繞著太陽轉，離太陽越遠，轉一圈越久。（示意動畫，大小、距離和速度都沒有照比例）',
    v: S(440, 252, '太陽系八大行星繞太陽公轉，越外面的行星轉得越慢',
      `<rect width="440" height="215" rx="10" fill="#0f172a"/>
${PL.map(([, r]) => `<ellipse cx="220" cy="108" rx="${r}" ry="${(r * 0.42).toFixed(1)}" fill="none" stroke="#475569" stroke-width="1"/>`).join('')}
<circle cx="220" cy="108" r="16" fill="#fbbf24"/><circle cx="220" cy="108" r="21" fill="none" stroke="#fde68a" stroke-width="2" opacity=".5"/>
${PL.map(([, r, d, c, s], i) => { const ry = (r * 0.42).toFixed(1); return `<g><animateMotion dur="${d}s" begin="${(-d * ((i * 0.37) % 1)).toFixed(2)}s" repeatCount="indefinite" path="M${220 + r} 108 A${r} ${ry} 0 1 0 ${220 - r} 108 A${r} ${ry} 0 1 0 ${220 + r} 108"/><circle r="${s}" fill="${c}"/>${i === 5 ? `<ellipse rx="${s + 5}" ry="2.5" fill="none" stroke="#fde68a" stroke-width="1.5"/>` : ''}</g>`; }).join('')}
${PL.map(([n, , , c], i) => `<circle cx="${22 + i * 53}" cy="236" r="5" fill="${c}" stroke="#334155" stroke-width="1"/>${T(30 + i * 53, 241, n, { a: 'start', fs: 12, b: 1 })}`).join('')}`)
  };

  const SKY = { P: [204, 150], dip: [[224, 230], [228, 246], [254, 252], [256, 232], [276, 228], [294, 222], [312, 230]], cas: [[128, 64], [140, 82], [152, 68], [166, 86], [178, 66]] };
  FIG.es4b = {
    after: 0, anim: true, title: '動畫：星星繞著北極星轉', cap: '面向北方，星星一整晚繞著北極星逆時針轉動（動畫加速顯示）。把北斗七星勺口的兩顆星連起來，往勺口方向延長約 5 倍，就找到北極星。',
    v: S(440, 305, '北斗七星和仙后座繞著北極星逆時針轉動；勺口兩顆星延長約五倍就是北極星',
      `<rect width="440" height="305" rx="10" fill="#0f172a"/>${[[30, 30], [400, 50], [380, 260], [60, 250], [350, 120], [90, 150], [420, 190], [40, 100]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.5" fill="#94a3b8"/>`).join('')}
<g><animateTransform attributeName="transform" type="rotate" values="0 204 150;-360 204 150" dur="24s" repeatCount="indefinite"/>
<path d="M${SKY.dip.slice(0, 4).map(p => p.join(' ')).join(' L')} Z M${SKY.dip.slice(3).map(p => p.join(' ')).join(' L')}" fill="none" stroke="#64748b" stroke-width="1.5"/>
${L(228, 246, 204, 150, '#f59e0b', { w: 2, d: '5 5' })}<path d="M${SKY.cas.map(p => p.join(' ')).join(' L')}" fill="none" stroke="#64748b" stroke-width="1.5"/>
${SKY.dip.concat(SKY.cas).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5" fill="#fde68a"/>`).join('')}</g>
<circle cx="204" cy="150" r="5.5" fill="#fff" stroke="#fde68a" stroke-width="2"/>${T(216, 155, '北極星', { a: 'start', fs: 14, b: 1, c: '#fde68a' })}
${T(220, 296, '勺子形：北斗七星　W 形：仙后座　虛線：找北極星', { fs: 12, c: '#e2e8f0' })}`)
  };

  FIG.es4c = {
    after: 0, anim: true, title: '動畫：地球自轉，有白天和黑夜', cap: '從北極上方往下看，地球由西向東（逆時針）自轉，大約 24 小時轉一圈。面向太陽的一半是白天，另一半是黑夜。紅點是臺灣。（示意動畫，加速顯示）',
    v: S(440, 230, '從北極上方看地球逆時針自轉，面向太陽的一半是白天',
      `<defs>${AR('es4ca', '#f59e0b')}</defs><circle cx="34" cy="115" r="26" fill="#fbbf24"/>${T(34, 160, '太陽', { b: 1, fs: 14 })}
${[75, 115, 155].map(y => L(68, y, 150, y, '#f59e0b', { w: 3, m: 'es4ca' })).join('')}
<g><animateTransform attributeName="transform" type="rotate" values="0 260 115;-360 260 115" dur="8s" repeatCount="indefinite"/>
<circle cx="260" cy="115" r="80" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
<path d="M230 60 C255 50 280 62 290 80 C270 92 245 90 230 60 Z M205 120 C215 105 240 112 238 135 C226 150 206 142 205 120 Z M285 130 C300 120 322 128 318 150 C305 165 286 158 285 130 Z" fill="#4ade80"/>
<circle cx="296" cy="72" r="6" fill="#dc2626" stroke="#fff" stroke-width="2"/></g>
<path d="M260 35 A80 80 0 0 1 260 195 Z" fill="#0f172a" opacity=".6"/><circle cx="260" cy="115" r="4" fill="#fff"/>
${T(214, 22, '白天', { b: 1, fs: 15, c: '#b45309' })}${T(310, 22, '黑夜', { b: 1, fs: 15, c: '#334155' })}${T(260, 218, '從北極上方往下看', { fs: 13, c: MUT })}`)
  };

  /* ---------- 五年級 ---------- */
  FIG.es5a = {
    after: 0, anim: true, title: '動畫：板塊擠壓與地震', cap: '菲律賓海板塊往西北擠壓歐亞板塊，把臺灣的山擠高；累積的力量突然釋放，就在震源發生地震，震波向四面八方傳出去。（示意動畫）',
    v: S(440, 230, '菲律賓海板塊擠壓歐亞板塊，臺灣山脈隆起，震源釋放震波',
      `<defs>${AR('es5aa', '#dc2626')}<clipPath id="es5ac"><rect width="440" height="200"/></clipPath></defs>
<rect x="0" y="0" width="440" height="120" fill="#e0f2fe"/><rect x="0" y="120" width="222" height="80" fill="#c8b39b" stroke="#78716c"/>
<g><animateTransform attributeName="transform" type="translate" values="0 0;-6 0;-6 0;0 0" keyTimes="0;0.5;0.55;1" dur="6s" repeatCount="indefinite"/><rect x="222" y="120" width="218" height="80" fill="#a8a29e" stroke="#57534e"/>${L(400, 145, 330, 145, '#dc2626', { w: 4, m: 'es5aa' })}</g>
<g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;-3 0;3 0;-2 0;0 0;0 0" keyTimes="0;0.5;0.53;0.56;0.6;0.64;1" dur="6s" repeatCount="indefinite"/>
<path d="M150 120 L196 70 L214 82 L232 56 L290 120 Z" fill="#65a30d" stroke="#3f6212" stroke-width="2"/><rect x="330" y="98" width="24" height="22" fill="#f8fafc" stroke="#475569"/><path d="M326 98 L342 86 L358 98 Z" fill="#dc2626"/></g>
<g clip-path="url(#es5ac)">${[0, 0.06].map(o => `<circle cx="222" cy="160" r="0" fill="none" stroke="#dc2626" stroke-width="3"><animate attributeName="r" values="0;0;150;150" keyTimes="0;${0.5 + o};${0.85 + o};1" dur="6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0;0" keyTimes="0;${0.5 + o};${0.85 + o};1" dur="6s" repeatCount="indefinite"/></circle>`).join('')}</g>
<path d="M222 150 l3 7 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 Z" fill="#facc15" stroke="#b45309"/>
${T(222, 40, '臺灣（山被擠高）', { b: 1, fs: 14 })}${T(110, 220, '歐亞板塊', { b: 1, fs: 14 })}${T(330, 220, '菲律賓海板塊', { b: 1, fs: 14 })}${T(236, 186, '震源', { a: 'start', fs: 13, b: 1, c: '#b91c1c' })}`)
  };

  FIG.es5b = {
    after: 0, anim: true, title: '動畫：火山爆發與溫泉', cap: '地底的岩漿從裂縫往上升，噴出地面就是火山爆發，流出來的叫熔岩；地下水被岩漿加熱，冒出地面就是溫泉。（示意動畫）',
    v: S(440, 255, '火山剖面：岩漿庫的岩漿沿通道上升噴發，地下水被加熱形成溫泉',
      `<rect x="0" y="0" width="440" height="200" fill="#e0f2fe"/><rect x="0" y="200" width="440" height="55" fill="#d6b48a"/>
<path d="M120 200 L203 72 L237 72 L320 200 Z" fill="#92400e" stroke="#78350f" stroke-width="2"/><rect x="212" y="72" width="16" height="140" fill="#f97316"/>
<ellipse cx="220" cy="228" rx="82" ry="20" fill="#ea580c" stroke="#9a3412" stroke-width="2"/>
${[0, 0.7, 1.4].map(b => `<circle cx="220" cy="214" r="5" fill="#fde047"><animate attributeName="cy" values="214;74" dur="2.1s" begin="${b}s" repeatCount="indefinite"/></circle>`).join('')}
${[[-30, 0], [0, 0.9], [26, 1.8]].map(([dx, b]) => `<circle cx="220" cy="64" r="10" fill="#64748b" opacity="0"><animate attributeName="cy" values="64;8" dur="2.7s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="cx" values="220;${220 + dx}" dur="2.7s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="r" values="8;20" dur="2.7s" begin="${b}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.85;0" dur="2.7s" begin="${b}s" repeatCount="indefinite"/></circle>`).join('')}
<path d="M236 76 C252 110 268 140 290 180" stroke="#f97316" stroke-width="7" fill="none" stroke-linecap="round" stroke-dasharray="14 8"><animate attributeName="stroke-dashoffset" values="44;0" dur="1.4s" repeatCount="indefinite"/></path>
<path d="M20 214 C70 216 110 222 140 226" stroke="#38bdf8" stroke-width="4" fill="none" stroke-dasharray="8 6"/><path d="M50 200 C46 208 54 214 50 222" stroke="#38bdf8" stroke-width="4" fill="none"/>
<ellipse cx="50" cy="199" rx="22" ry="5" fill="#7dd3fc" stroke="#0284c7"/>${[40, 52, 62].map((x, i) => `<path d="M${x} 190 c-4 -6 4 -10 0 -16" stroke="#94a3b8" stroke-width="2.5" fill="none"><animate attributeName="opacity" values="0;1;0" dur="2s" begin="${i * 0.6}s" repeatCount="indefinite"/></path>`).join('')}
${T(244, 66, '火山口', { a: 'start', fs: 13, b: 1 })}${T(296, 172, '熔岩', { a: 'start', fs: 13, b: 1, c: '#c2410c' })}${T(310, 244, '岩漿庫', { a: 'start', fs: 13, b: 1, c: '#9a3412' })}${T(50, 168, '溫泉', { fs: 14, b: 1, c: '#0369a1' })}${T(80, 244, '地下水被加熱', { fs: 12, c: INK })}`)
  };

  FIG.es5c = {
    after: 2, anim: true, title: '動畫：漲潮和退潮', cap: '海水一天大約漲潮、退潮各兩次（大約 12 小時 25 分鐘一個循環）。退潮時露出來的「潮間帶」可以觀察螃蟹和貝類。（示意動畫，加速顯示）',
    v: S(440, 215, '海水漲潮淹過潮間帶，退潮時露出螃蟹和貝類',
      `<defs><clipPath id="es5cc"><path d="M0 0 L440 0 L440 78 L300 108 L0 182 Z"/></clipPath></defs><rect width="440" height="200" fill="#e0f2fe"/>${T(36, 40, '🌙', { fs: 26 })}${T(64, 44, '月球的引力拉動海水', { a: 'start', fs: 13, c: MUT })}
<path d="M0 200 L0 182 L300 108 L440 78 L440 200 Z" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
${T(232, 132, '🦀', { fs: 20 })}${T(178, 150, '🐚', { fs: 18 })}
<rect x="0" y="165" width="440" height="100" fill="#38bdf8" opacity=".6" clip-path="url(#es5cc)"><animate attributeName="y" values="165;110;165" ${SINE} dur="8s" repeatCount="indefinite"/></rect>
${L(0, 110, 300, 110, '#0369a1', { w: 1.5, d: '6 5' })}${L(0, 165, 300, 165, '#0369a1', { w: 1.5, d: '6 5' })}
${T(8, 104, '滿潮（漲潮）', { a: 'start', fs: 13, b: 1, c: '#0369a1' })}${T(8, 160, '乾潮（退潮）', { a: 'start', fs: 13, b: 1, c: '#0369a1' })}${T(200, 190, '潮間帶：兩條虛線之間的海岸', { fs: 13, b: 1, c: '#92400e' })}`)
  };

  /* ---------- 六年級 ---------- */
  const LAY = [[200, '#a16207'], [165, '#ca8a04'], [130, '#d6b48a'], [95, '#a8a29e'], [60, '#e7c9a0']];
  FIG.es6a = {
    after: 0, anim: true, title: '動畫：地層一層一層堆起來', cap: '泥沙一層一層往上堆積：沒有被翻動的話，越下面的地層越老，越上面越新；被埋在地層裡的生物遺骸可能變成化石。（示意動畫）',
    v: S(440, 245, '地層從下往上一層一層堆積，下面的老、上面的新，化石埋在地層中',
      `${LAY.map(([y, c], i) => `<g transform="translate(0 -300)"><animateTransform attributeName="transform" type="translate" values="0 -300;0 -300;0 0;0 0" keyTimes="0;${(i * 0.14).toFixed(2)};${(i * 0.14 + 0.1).toFixed(2)};1" dur="9s" repeatCount="indefinite"/><rect x="20" y="${y}" width="330" height="35" fill="${c}" stroke="#78350f"/>
${i === 1 ? `<path d="M110 182 a9 9 0 1 1 -9 -9 a6 6 0 1 1 -6 6 a3 3 0 1 1 -3 -3" stroke="#44403c" stroke-width="2" fill="none"/>` : ''}${i === 3 ? `<path d="M230 112 l30 0 m-30 0 l-10 -6 m10 6 l-10 6 m14 -6 l0 -6 m8 6 l0 -6 m8 6 l0 -6 m-16 6 l0 6 m8 -6 l0 6 m8 -6 l0 6 m6 -6 a5 5 0 1 0 0.1 0" stroke="#44403c" stroke-width="2" fill="none"/>` : ''}</g>`).join('')}
${L(380, 222, 380, 70, '#475569', { w: 3 })}<path d="M380 62 L372 76 L388 76 Z" fill="#475569"/>${T(392, 74, '新', { a: 'start', b: 1 })}${T(392, 224, '老', { a: 'start', b: 1 })}${T(185, 30, '泥沙一層一層往上堆', { fs: 14, b: 1 })}`)
  };

  FIG.es6b = {
    after: 1, anim: true, title: '動畫：光一秒繞地球七圈半', cap: '光每秒大約跑 30 萬公里，一秒可以繞地球七圈半。動畫放慢 10 倍：黃點 10 秒繞 7 圈半，代表真實的 1 秒。（示意動畫）',
    v: S(440, 215, '光一秒繞地球七圈半，以及光從月球、太陽、比鄰星到地球要走多久',
      `<circle cx="105" cy="105" r="42" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/><path d="M80 85 C95 75 110 85 112 98 C100 108 85 104 80 85 Z M100 118 C112 112 128 120 124 134 C112 140 100 132 100 118 Z" fill="#4ade80"/>
<circle cx="105" cy="105" r="56" fill="none" stroke="#fde68a" stroke-width="2" stroke-dasharray="4 4"/>
<circle r="6" fill="#facc15" stroke="#b45309"><animateMotion dur="1.333s" repeatCount="indefinite" path="M161 105 A56 56 0 1 0 49 105 A56 56 0 1 0 161 105"/></circle>
${T(105, 190, '光 1 秒繞地球 7 圈半', { b: 1, fs: 14 })}${T(105, 208, '（放慢 10 倍）', { fs: 12, c: MUT })}
${T(208, 46, '光到地球要走多久？', { a: 'start', b: 1, fs: 14 })}
${[['🌕', '月球', '1 秒多', 84], ['☀️', '太陽', '8 分多', 124], ['⭐', '比鄰星', '4 年多', 164]].map(([e, n, t, y]) => T(214, y, e, { fs: 20 }) + T(234, y - 2, n, { a: 'start', fs: 14, b: 1 }) + T(300, y - 2, '→ 地球：', { a: 'start', fs: 13, c: MUT }) + T(432, y - 2, t, { a: 'end', fs: 14, b: 1, c: '#b45309' })).join('')}`)
  };

  FIG.es6c = {
    after: 0, anim: true, title: '動畫：地球的水，能用的很少', cap: '把地球的水分成 100 格：97 格是海水，只有 3 格是淡水；淡水裡大部分是冰川和地下水，河川湖泊只占很少一部分。（比例為大約值）',
    v: S(440, 230, '地球的水 100 格中 97 格是海水、3 格是淡水；淡水中約 69% 是冰、30% 是地下水、1% 是河湖等',
      `${Array.from({ length: 100 }, (_, i) => { const x = 40 + (i % 20) * 18, y = 30 + Math.floor(i / 20) * 18, t = (i / 100 * 0.6).toFixed(3); return `<rect x="${x}" y="${y}" width="15" height="15" rx="2" fill="${i < 97 ? '#0ea5e9' : '#34d399'}" opacity="0"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;${t};${(+t + 0.01).toFixed(3)};1" dur="8s" repeatCount="indefinite"/></rect>`; }).join('')}
<rect x="40" y="136" width="15" height="15" rx="2" fill="#0ea5e9"/>${T(62, 148, '海水 97 格', { a: 'start', fs: 13, b: 1 })}<rect x="180" y="136" width="15" height="15" rx="2" fill="#34d399"/>${T(202, 148, '淡水 3 格', { a: 'start', fs: 13, b: 1 })}
${T(40, 178, '淡水裡：', { a: 'start', fs: 13, b: 1 })}<rect x="100" y="166" width="207" height="18" fill="#e0f2fe" stroke="#64748b"/><rect x="307" y="166" width="90" height="18" fill="#a16207"/><rect x="397" y="166" width="5" height="18" fill="#0ea5e9"/>
${T(203, 204, '冰川、冰帽 約 69%', { fs: 12, b: 1 })}${T(352, 204, '地下水 約 30%', { fs: 12, b: 1 })}${L(399, 186, 410, 212, '#475569', { w: 1.5 })}${T(410, 224, '河湖等 約 1%', { a: 'end', fs: 12, b: 1, c: '#0369a1' })}`)
  };

  for (const id in FIG) { const u = U(id); if (!u) continue; const f = FIG[id]; u.lesson.splice(f.after + 1, 0, { t: 'svg', title: f.title, v: f.v, cap: f.cap, anim: !!f.anim }); }
})();
