/* 高中物理與化學（高一～高三）的 SMIL 互動示意動畫
 *  與 naturefig.js 相同機制：app.js 會自動加上「⏸ 暫停動畫 / ▶ 播放動畫」按鈕，
 *  並依系統 prefers-reduced-motion 自動處理無障礙動態設定。
 */
(function () {
  const S = (w, h, label, body) =>
    `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" style="max-width:100%;height:auto" role="img" aria-label="${label}"><rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>${body}</svg>`;
  const T = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" font-size="${o.fs || 13}" font-weight="${o.b ? 800 : 600}" fill="${o.c || '#0f172a'}">${s}</text>`;
  const L = (x1, y1, x2, y2, c, o = {}) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c || '#334155'}" stroke-width="${o.w || 2}"${o.d ? ` stroke-dasharray="${o.d}"` : ''}${o.m ? ` marker-end="url(#${o.m})"` : ''}/>`;
  const AR = (id, c) =>
    `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9 z" fill="${c}"/></marker>`;
  const MUT = '#475569';

  function U(id) {
    for (const s of (window.SUBJECTS || [])) {
      const u = (s.units || []).find(x => x.id === id);
      if (u) return u;
    }
    return null;
  }

  const FIG = {};

  /* ════════ 物理動畫 ════════ */

  // 1. 高一物理 s10p1：自由落體 vs 等速運動（頻閃攝影）
  FIG.s10p1 = {
    after: 0, anim: true,
    title: '動畫：等速運動 vs 自由落體（頻閃攝影）',
    cap: '左球做等速運動，每秒位移相等；右球做自由落體（a＝g），每秒位移呈 1：3：5 越來越大，兩者受重力與初速差異一目了然！',
    v: S(440, 230, '左球等速下落間距相等，右球自由落體間距呈1比3比5遞增',
      `<defs>${AR('p1a', '#0284c7')}${AR('p1b', '#ea580c')}</defs>
      ${T(110, 22, '等速運動（a ＝ 0）', { b: 1, fs: 14, c: '#0369a1' })}
      ${T(330, 22, '自由落體（a ＝ g）', { b: 1, fs: 14, c: '#c2410c' })}
      ${L(220, 14, 220, 218, '#cbd5e1', { w: 1.5, d: '4 4' })}
      ${[40, 95, 150, 205].map((y, i) => `${L(50, y, 170, y, '#e2e8f0', { w: 1 })}${T(32, y + 4, `t=${i}s`, { fs: 11, c: MUT })}`).join('')}
      ${[40, 58, 113, 205].map((y, i) => `${L(270, y, 390, y, '#e2e8f0', { w: 1 })}${T(412, y + 4, i === 0 ? '0' : `Δy=${[0, 1, 3, 5][i]}份`, { fs: 11, c: MUT })}`).join('')}
      <circle cx="110" cy="40" r="10" fill="#0ea5e9" stroke="#0369a1" stroke-width="2">
        <animate attributeName="cy" values="40;205;205" keyTimes="0;0.8;1" dur="3.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="330" cy="40" r="10" fill="#f97316" stroke="#c2410c" stroke-width="2">
        <animate attributeName="cy" values="40;58;113;205;205" keyTimes="0;0.27;0.53;0.8;1" calcMode="spline" keySplines="0.4 0 1 1;0.4 0 1 1;0.4 0 1 1;0 0 1 1" dur="3.2s" repeatCount="indefinite"/>
      </circle>
      ${[0.2, 0.4, 0.6].map((kt, i) => `<circle cx="110" cy="${40 + (i + 1) * 55}" r="4" fill="#7dd3fc" opacity="0"><animate attributeName="opacity" values="0;0;0.9;0.9;0" keyTimes="0;${kt};${kt + 0.02};0.85;1" dur="3.2s" repeatCount="indefinite"/></circle>`).join('')}
      ${[[58, 0.26], [113, 0.52]].map(([y, kt]) => `<circle cx="330" cy="${y}" r="4" fill="#fdba74" opacity="0"><animate attributeName="opacity" values="0;0;0.9;0.9;0" keyTimes="0;${kt};${kt + 0.02};0.85;1" dur="3.2s" repeatCount="indefinite"/></circle>`).join('')}
      ${T(110, 222, '相同時間，間距相等', { fs: 12, c: '#0369a1' })}
      ${T(330, 222, '相同時間，間距 1 : 3 : 5', { fs: 12, c: '#c2410c' })}`)
  };

  // 2. 高一物理 s10p2：克卜勒第二定律（等面積定律）
  FIG.s10p2 = {
    after: 0, anim: true,
    title: '動畫：克卜勒第二定律（近日點快、遠日點慢）',
    cap: '行星沿橢圓軌道繞太陽公轉：離太陽越近（近日點）速度越快，離太陽越遠（遠日點）速度越慢，相同時間掃過的面積相等！',
    v: S(440, 220, '行星繞太陽橢圓軌道運行，近日點快而遠日點慢',
      `<ellipse cx="220" cy="112" rx="165" ry="76" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
      <path d="M295 112 L385 112 A165 76 0 0 1 360 153 Z" fill="#fef08a" opacity="0.7"/>
      <path d="M295 112 L55 112 A165 76 0 0 1 65 86 Z" fill="#bae6fd" opacity="0.7"/>
      <circle cx="295" cy="112" r="18" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
      ${T(295, 117, '太陽', { b: 1, fs: 11, c: '#713f12' })}
      ${T(385, 96, '近日點（最快）', { fs: 11, b: 1, c: '#dc2626' })}
      ${T(62, 134, '遠日點（最慢）', { fs: 11, b: 1, c: '#0369a1' })}
      ${T(220, 24, '克卜勒等面積定律：兩塊扇形面積相等（Δt 相同）', { b: 1, fs: 13 })}
      <circle r="9" fill="#0ea5e9" stroke="#0f172a" stroke-width="1.5">
        <animateMotion dur="5s" repeatCount="indefinite"
          path="M385 112 A165 76 0 1 0 55 112 A165 76 0 1 0 385 112"
          keyPoints="0;0.15;0.5;0.85;1" keyTimes="0;0.08;0.5;0.92;1" calcMode="linear"/>
      </circle>
      ${T(220, 206, '藍色扇形面積 ＝ 黃色扇形面積', { fs: 12, c: MUT })}`)
  };

  // 3. 高二物理 s11p1：靜力平衡與力矩（τ = F × d⊥）
  FIG.s11p1 = {
    after: 1, anim: true,
    title: '動畫：力矩平衡（順時針力矩 ＝ 逆時針力矩）',
    cap: '左邊 30 N 掛在距離支點 2 m（力矩 60 N·m），右邊 60 N 掛在距離支點 1 m（力矩 60 N·m）；兩邊力矩相等時就會維持水平靜力平衡！',
    v: S(440, 215, '槓桿支點兩側力矩相等時達成水平平衡',
      `${T(220, 24, '力矩 τ ＝ F × d⊥（槓桿平衡示範）', { b: 1, fs: 14 })}
      <polygon points="220,132 204,172 236,172" fill="#475569"/>
      ${L(60, 172, 380, 172, '#334155', { w: 3 })}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-8 220 132;6 220 132;0 220 132;0 220 132" keyTimes="0;0.28;0.5;1" dur="4.5s" repeatCount="indefinite"/>
        ${L(60, 130, 380, 130, '#0f172a', { w: 6 })}
        ${L(80, 130, 80, 152, '#334155', { w: 2 })}
        <rect x="62" y="152" width="36" height="26" rx="4" fill="#0ea5e9" stroke="#0369a1" stroke-width="1.5"/>
        ${T(80, 169, '30 N', { b: 1, fs: 11, c: '#fff' })}
        ${T(150, 120, 'd₁ ＝ 2 m', { fs: 12, b: 1, c: '#0369a1' })}
        ${L(290, 130, 290, 148, '#334155', { w: 2 })}
        <rect x="268" y="148" width="44" height="32" rx="4" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
        ${T(290, 168, '60 N', { b: 1, fs: 11, c: '#fff' })}
        ${T(255, 120, 'd₂ ＝ 1 m', { fs: 12, b: 1, c: '#c2410c' })}
      </g>
      ${T(115, 200, '逆時針 τ ＝ 30×2 ＝ 60 N·m', { fs: 12, b: 1, c: '#0369a1' })}
      ${T(325, 200, '順時針 τ ＝ 60×1 ＝ 60 N·m', { fs: 12, b: 1, c: '#c2410c' })}`)
  };

  // 4. 高二物理 s11p2：簡諧運動（SHM）與理想氣體分子運動
  FIG.s11p2 = {
    after: 0, anim: true,
    title: '動畫：彈簧簡諧運動（SHM）與氣體溫度',
    cap: '左：彈簧在平衡點 x＝0 速率最大，在端點 ±A 瞬時速度為 0。右：絕對溫度 T 越高，理想氣體分子的平均動能越大、跑得越快！',
    v: S(440, 220, '左圖為彈簧簡諧運動振盪，右圖為低溫與高溫氣體分子運動速率比較',
      `${T(110, 22, '簡諧運動 F ＝ −kx', { b: 1, fs: 14, c: '#0369a1' })}
      ${T(330, 22, '理想氣體：溫度越高動能越大', { b: 1, fs: 14, c: '#c2410c' })}
      ${L(220, 14, 220, 208, '#cbd5e1', { w: 1.5, d: '4 4' })}
      ${L(20, 60, 20, 140, '#334155', { w: 4 })}
      ${L(110, 52, 110, 152, '#94a3b8', { w: 1.5, d: '4 4' })}
      ${T(110, 168, '平衡點 x=0 (v最大)', { fs: 11, b: 1, c: '#0369a1' })}
      ${T(54, 186, '−A', { fs: 11, c: MUT })}${T(166, 186, '+A', { fs: 11, c: MUT })}
      <g>
        <animateTransform attributeName="transform" type="translate" values="-40 0;40 0;-40 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.45 0.05 0.55 0.95;0.45 0.05 0.55 0.95" dur="2.4s" repeatCount="indefinite"/>
        <rect x="92" y="80" width="36" height="36" rx="5" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/>
        ${T(110, 103, 'm', { b: 1, fs: 13, c: '#fff' })}
      </g>
      ${L(20, 98, 70, 98, '#64748b', { w: 2.5, d: '4 3' })}
      <rect x="242" y="42" width="84" height="120" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      ${T(284, 180, '低溫 300 K', { fs: 12, b: 1, c: '#0369a1' })}
      <rect x="338" y="42" width="84" height="120" rx="6" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
      ${T(380, 180, '高溫 600 K', { fs: 12, b: 1, c: '#c2410c' })}
      ${[[260, 65, 310, 140], [305, 80, 255, 130], [280, 145, 295, 58]].map(([x1, y1, x2, y2], i) =>
        `<circle r="4.5" fill="#0284c7"><animate attributeName="cx" values="${x1};${x2};${x1}" dur="${2.4 + i * 0.3}s" repeatCount="indefinite"/><animate attributeName="cy" values="${y1};${y2};${y1}" dur="${2.1 + i * 0.25}s" repeatCount="indefinite"/></circle>`
      ).join('')}
      ${[[355, 65, 405, 140], [400, 75, 352, 135], [375, 148, 392, 56]].map(([x1, y1, x2, y2], i) =>
        `<circle r="4.5" fill="#ea580c"><animate attributeName="cx" values="${x1};${x2};${x1}" dur="${1.1 + i * 0.15}s" repeatCount="indefinite"/><animate attributeName="cy" values="${y1};${y2};${y1}" dur="${0.95 + i * 0.12}s" repeatCount="indefinite"/></circle>`
      ).join('')}`)
  };

  // 5. 高三物理 s12p1：電場、電位與庫侖定律
  FIG.s12p1 = {
    after: 1, anim: true,
    title: '動畫：電力線方向（高電位 → 低電位）',
    cap: '電力線由正電荷（高電位）出發指向負電荷（低電位）。正檢驗電荷（＋q）會順著電力線方向加速移動！',
    v: S(440, 210, '正電荷與負電荷間的電力線，以及正檢驗電荷從高電位移動到低電位',
      `<defs>${AR('e1', '#64748b')}</defs>
      ${T(220, 22, '電場方向 ＝ 正電荷受力方向（高電位 → 低電位）', { b: 1, fs: 13 })}
      <path d="M122 108 L318 108" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#e1)"/>
      <path d="M118 94 Q220 42 322 94" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#e1)"/>
      <path d="M118 122 Q220 174 322 122" fill="none" stroke="#94a3b8" stroke-width="2" marker-end="url(#e1)"/>
      <circle cx="105" cy="108" r="20" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
      ${T(105, 114, '+Q', { b: 1, fs: 15, c: '#fff' })}
      <circle cx="335" cy="108" r="20" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
      ${T(335, 114, '−Q', { b: 1, fs: 15, c: '#fff' })}
      <circle r="7" fill="#facc15" stroke="#a16207" stroke-width="2">
        <animateMotion dur="2.2s" repeatCount="indefinite" path="M126 108 L314 108"/>
      </circle>
      <circle r="6" fill="#facc15" stroke="#a16207" stroke-width="1.5">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M118 94 Q220 42 322 94"/>
      </circle>
      ${T(105, 146, '高電位（V 高）', { fs: 12, b: 1, c: '#dc2626' })}
      ${T(335, 146, '低電位（V 低）', { fs: 12, b: 1, c: '#2563eb' })}
      ${T(220, 192, '黃球代表 +q 檢驗電荷順著電場移動', { fs: 12, c: MUT })}`)
  };

  // 6. 高三物理 s12p2：楊格雙狹縫干涉
  FIG.s12p2 = {
    after: 0, anim: true,
    title: '動畫：楊格雙狹縫干涉（波動性證據）',
    cap: '單色光通過雙狹縫 S₁、S₂ 後產生兩組同調波前，在屏幕上形成明暗相間、等間距（Δy＝Lλ/d）的干涉條紋！',
    v: S(440, 215, '光波通過雙狹縫後產生建設性與破壞性干涉，在右側屏幕形成亮暗條紋',
      `${T(220, 22, '雙狹縫干涉：Δy ＝ Lλ / d', { b: 1, fs: 14 })}
      <rect x="82" y="38" width="8" height="36" fill="#334155"/>
      <rect x="82" y="88" width="8" height="38" fill="#334155"/>
      <rect x="82" y="140" width="8" height="38" fill="#334155"/>
      ${T(66, 84, 'S₁', { fs: 12, b: 1 })}${T(66, 136, 'S₂', { fs: 12, b: 1 })}
      <path d="M24 81 L78 81 M24 133 L78 133" stroke="#eab308" stroke-width="3"/>
      ${[0, 1, 2].map(i => `<circle cx="90" cy="81" r="10" fill="none" stroke="#eab308" stroke-width="2" opacity="0.8"><animate attributeName="r" values="8;240" dur="2.4s" begin="${(i * 0.8).toFixed(1)}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="${(i * 0.8).toFixed(1)}s" repeatCount="indefinite"/></circle>`).join('')}
      ${[0, 1, 2].map(i => `<circle cx="90" cy="133" r="10" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.8"><animate attributeName="r" values="8;240" dur="2.4s" begin="${(i * 0.8).toFixed(1)}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.9;0" dur="2.4s" begin="${(i * 0.8).toFixed(1)}s" repeatCount="indefinite"/></circle>`).join('')}
      <rect x="360" y="38" width="16" height="140" fill="#1e293b" rx="2"/>
      ${[56, 82, 108, 134, 160].map(y => `<rect x="360" y="${y - 6}" width="16" height="12" fill="#facc15" opacity="0.9"/>`).join('')}
      ${T(404, 112, '亮紋', { fs: 11, b: 1, c: '#b45309' })}
      ${T(404, 126, '暗紋', { fs: 11, c: MUT })}
      ${T(225, 198, '光程差 ＝ nλ（亮紋）｜ (n−½)λ（暗紋）', { fs: 12, c: MUT })}`)
  };

  /* ════════ 化學動畫 ════════ */

  // 7. 高一化學 s10ch1：反應式平衡（2H₂ + O₂ → 2H₂O）
  FIG.s10ch1 = {
    after: 0, anim: true,
    title: '動畫：化學反應式平衡（原子不滅）',
    cap: '反應前有 4 個氫原子（2 個 H₂）與 2 個氧原子（1 個 O₂）；反應後重新組合成 2 個水分子（2 H₂O），原子種類與總數完全相等！',
    v: S(440, 210, '2個氫分子與1個氧分子碰撞後，重組為2個水分子',
      `${T(220, 22, '2 H₂ ＋ O₂ → 2 H₂O（原子總數守恆）', { b: 1, fs: 14 })}
      <g>
        <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.42;0.5;1" dur="4.4s" repeatCount="indefinite"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;70 20;70 20" keyTimes="0;0.45;1" dur="4.4s" repeatCount="indefinite"/>
          <circle cx="80" cy="80" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
          <circle cx="98" cy="80" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
          ${T(89, 104, 'H₂', { fs: 11, b: 1 })}
        </g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;70 -20;70 -20" keyTimes="0;0.45;1" dur="4.4s" repeatCount="indefinite"/>
          <circle cx="80" cy="142" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
          <circle cx="98" cy="142" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
          ${T(89, 166, 'H₂', { fs: 11, b: 1 })}
        </g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;-45 0;-45 0" keyTimes="0;0.45;1" dur="4.4s" repeatCount="indefinite"/>
          <circle cx="240" cy="110" r="15" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
          <circle cx="268" cy="110" r="15" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
          ${T(254, 140, 'O₂', { fs: 11, b: 1, c: '#991b1b' })}
        </g>
      </g>
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1" keyTimes="0;0.48;0.55;1" dur="4.4s" repeatCount="indefinite"/>
        <circle cx="320" cy="82" r="15" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
        <circle cx="302" cy="94" r="9" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <circle cx="338" cy="94" r="9" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        ${T(320, 114, 'H₂O', { fs: 11, b: 1, c: '#0369a1' })}
        <circle cx="320" cy="146" r="15" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
        <circle cx="302" cy="158" r="9" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <circle cx="338" cy="158" r="9" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        ${T(320, 178, 'H₂O', { fs: 11, b: 1, c: '#0369a1' })}
      </g>
      ${T(220, 196, '反應前後：4 個 H 原子、2 個 O 原子完全不變', { fs: 12, c: MUT })}`)
  };

  // 8. 高一化學 s10ch2：溶液稀釋（M₁V₁ ＝ M₂V₂）
  FIG.s10ch2 = {
    after: 0, anim: true,
    title: '動畫：溶液稀釋前後，溶質莫耳數不變',
    cap: '加水稀釋時，溶液體積 V 變大、顏色變淡（濃度 M 下降），但燒杯裡的溶質粒子總數（莫耳數 n ＝ M × V）完全不變！',
    v: S(440, 215, '稀釋前濃溶液體積小濃度高，加水稀釋後體積變大但溶質粒子數相同',
      `${T(220, 22, '稀釋核心公式：M₁ V₁ ＝ M₂ V₂（溶質莫耳數不變）', { b: 1, fs: 13 })}
      <rect x="60" y="90" width="90" height="80" fill="#38bdf8" opacity="0.55"/>
      <path d="M60 60 L60 170 L150 170 L150 60" fill="none" stroke="#334155" stroke-width="3"/>
      ${[[80, 115], [125, 110], [95, 140], [130, 150], [76, 155], [110, 128]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#7c3aed"/>`).join('')}
      ${T(105, 192, '稀釋前（6 顆溶質）', { fs: 12, b: 1, c: '#0369a1' })}
      <path d="M180 42 Q220 42 250 75" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="6 4">
        <animate attributeName="stroke-dashoffset" values="20;0" dur="1s" repeatCount="indefinite"/>
      </path>
      ${T(214, 36, '＋ 純水', { fs: 12, b: 1, c: '#0284c7' })}
      <rect x="275" y="56" width="110" height="114" fill="#bae6fd" opacity="0.6">
        <animate attributeName="y" values="90;56;56" keyTimes="0;0.6;1" dur="3.5s" repeatCount="indefinite"/>
        <animate attributeName="height" values="80;114;114" keyTimes="0;0.6;1" dur="3.5s" repeatCount="indefinite"/>
      </rect>
      <path d="M275 45 L275 170 L385 170 L385 45" fill="none" stroke="#334155" stroke-width="3"/>
      ${[[295, 80], [360, 76], [312, 125], [358, 145], [290, 152], [335, 102]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="#7c3aed"/>`).join('')}
      ${T(330, 192, '稀釋後（仍是 6 顆！）', { fs: 12, b: 1, c: '#6d28d9' })}`)
  };

  // 9. 高二化學 s11ch1：水分子的極性與分子間氫鍵
  FIG.s11ch1 = {
    after: 1, anim: true,
    title: '動畫：水分子的角形結構與分子間氫鍵',
    cap: '水分子呈 104.5° 角形，氧端帶微負電（δ⁻）、氫端帶微正電（δ⁺）；相鄰水分子間的「氫鍵（虛線）」使水沸點遠高於同族的 H₂S！',
    v: S(440, 210, '水分子之間透過氫原子與氧原子的靜電吸引形成氫鍵',
      `${T(220, 22, 'H₂O 角形極性分子與分子間氫鍵（O···H）', { b: 1, fs: 14 })}
      <g>
        <circle cx="135" cy="112" r="18" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
        <circle cx="112" cy="138" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <circle cx="164" cy="112" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        ${T(135, 117, 'O δ⁻', { b: 1, fs: 11, c: '#fff' })}
        ${T(164, 96, 'H δ⁺', { fs: 11, b: 1, c: '#0369a1' })}
      </g>
      <line x1="176" y1="112" x2="254" y2="112" stroke="#0ea5e9" stroke-width="3.5" stroke-dasharray="5 5">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1.8s" repeatCount="indefinite"/>
      </line>
      ${T(215, 102, '氫鍵', { fs: 12, b: 1, c: '#0284c7' })}
      <g>
        <animateTransform attributeName="transform" type="rotate" values="-4 275 112;4 275 112;-4 275 112" dur="2.2s" repeatCount="indefinite"/>
        <circle cx="275" cy="112" r="18" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
        <circle cx="304" cy="100" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        <circle cx="298" cy="136" r="10" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
        ${T(275, 117, 'O δ⁻', { b: 1, fs: 11, c: '#fff' })}
        ${T(304, 84, 'H δ⁺', { fs: 11, b: 1, c: '#0369a1' })}
      </g>
      ${T(220, 185, '角形 104.5° 不對稱 → 極性分子；O···H 強吸引力 → 沸點高', { fs: 12, c: MUT })}`)
  };

  // 10. 高二化學 s11ch2：催化劑降低活化能（位能圖）
  FIG.s11ch2 = {
    after: 1, anim: true,
    title: '動畫：催化劑提供較低活化能（Ea）的路徑',
    cap: '藍線為原本高活化能路徑；橘線為加入催化劑後的新路徑，粒子更容易越過山丘到達產物，但反應熱 ΔH 完全不變！',
    v: S(440, 220, '催化劑降低正逆反應活化能使粒子更快跨越能障，但不改變反應熱ΔH',
      `${T(220, 22, '加入催化劑：降低 Ea，反應速率大增，ΔH 不變', { b: 1, fs: 13 })}
      ${L(50, 35, 50, 185, '#334155', { w: 2 })}${L(50, 185, 410, 185, '#334155', { w: 2 })}
      ${T(32, 110, '位能', { fs: 12, b: 1 })}${T(230, 204, '反應進程', { fs: 12, b: 1 })}
      <path d="M60 120 Q130 120 190 46 Q250 46 320 155 L390 155" fill="none" stroke="#94a3b8" stroke-width="3"/>
      <path d="M60 120 Q130 120 190 88 Q250 88 320 155 L390 155" fill="none" stroke="#f97316" stroke-width="3.5"/>
      ${T(190, 39, '未催化 Ea（高）', { fs: 11, c: MUT })}
      ${T(190, 81, '有催化劑 Ea（低）', { fs: 11, b: 1, c: '#c2410c' })}
      ${T(84, 112, '反應物', { fs: 11, b: 1 })}${T(365, 147, '產物', { fs: 11, b: 1 })}
      <circle r="6" fill="#ea580c" stroke="#7c2d12" stroke-width="1.5">
        <animateMotion dur="2.6s" repeatCount="indefinite" path="M60 120 Q130 120 190 88 Q250 88 320 155 L390 155"/>
      </circle>`)
  };

  // 11. 高三化學 s12ch1：酯化反應（羧酸 + 醇 ⇌ 酯 + 水）
  FIG.s12ch1 = {
    after: 1, anim: true,
    title: '動畫：酯化反應（脫去一分子水）',
    cap: '乙酸（CH₃COOH）脫去 －OH，乙醇（C₂H₅OH）脫去 －H，結合成水（H₂O），剩下的片段接在一起變成有水果香氣的乙酸乙酯！',
    v: S(440, 205, '乙酸與乙醇脫去水分子形成乙酸乙酯的過程',
      `${T(220, 22, '酯化反應：乙酸 ＋ 乙醇 ⇌ 乙酸乙酯 ＋ 水', { b: 1, fs: 13 })}
      <rect x="28" y="64" width="128" height="44" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      ${T(92, 91, 'CH₃CO — OH', { b: 1, fs: 13, c: '#991b1b' })}
      ${T(172, 91, '＋', { b: 1, fs: 16 })}
      <rect x="190" y="64" width="128" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      ${T(254, 91, 'H — OC₂H₅', { b: 1, fs: 13, c: '#075985' })}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 48;0 48" keyTimes="0;0.55;1" dur="3.6s" repeatCount="indefinite"/>
        <rect x="130" y="70" width="84" height="32" rx="16" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
        ${T(172, 91, 'H₂O 脫水', { b: 1, fs: 12, c: '#0369a1' })}
      </g>
      <rect x="336" y="64" width="84" height="44" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      ${T(378, 84, '乙酸乙酯', { b: 1, fs: 12, c: '#92400e' })}
      ${T(378, 100, '🍍 香氣', { fs: 11, c: '#b45309' })}
      ${T(220, 182, '需濃硫酸催化並加熱（可逆反應）', { fs: 12, c: MUT })}`)
  };

  // 12. 高三化學 s12ch2：緩衝溶液抵抗 pH 變化
  FIG.s12ch2 = {
    after: 1, anim: true,
    title: '動畫：緩衝溶液如何「吃掉」外來的強酸 H⁺？',
    cap: '緩衝溶液裡有大量共軛鹼 A⁻（例如醋酸根）。當外來強酸 H⁺ 滴入時，A⁻ 立刻抓住 H⁺ 變成弱酸 HA，讓溶液的 pH 幾乎維持不變！',
    v: S(440, 215, '外來氫離子被緩衝溶液中的共軛鹼A負捕捉成HA，維持pH穩定',
      `${T(220, 22, '緩衝溶液（HA / A⁻）：吸收外來 H⁺，穩定 pH', { b: 1, fs: 13 })}
      <rect x="80" y="72" width="180" height="106" fill="#e0f2fe" opacity="0.6"/>
      <path d="M80 56 L80 178 L260 178 L260 56" fill="none" stroke="#334155" stroke-width="3"/>
      <circle cx="170" cy="48" r="10" fill="#ef4444" stroke="#991b1b" stroke-width="1.5">
        <animate attributeName="cy" values="42;125;125" keyTimes="0;0.5;1" dur="3.4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.5;0.6;1" dur="3.4s" repeatCount="indefinite"/>
      </circle>
      ${T(170, 36, '滴入強酸 H⁺', { fs: 11, b: 1, c: '#dc2626' })}
      <circle cx="135" cy="135" r="14" fill="#34d399" stroke="#065f46" stroke-width="1.5"/>
      ${T(135, 140, 'A⁻', { b: 1, fs: 12, c: '#064e3b' })}
      <circle cx="215" cy="135" r="14" fill="#a78bfa" stroke="#5b21b6" stroke-width="1.5">
        <animate attributeName="r" values="14;14;17;14" keyTimes="0;0.55;0.7;1" dur="3.4s" repeatCount="indefinite"/>
      </circle>
      ${T(215, 140, 'HA', { b: 1, fs: 12, c: '#fff' })}
      <rect x="296" y="76" width="114" height="84" rx="10" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      ${T(353, 102, 'pH 計讀數', { fs: 12, b: 1, c: MUT })}
      ${T(353, 134, 'pH ≈ 4.7', { fs: 20, b: 1, c: '#059669' })}
      ${T(353, 152, '幾乎不變！', { fs: 11, b: 1, c: '#059669' })}
      ${T(220, 198, 'H⁺ ＋ A⁻ → HA（把強酸轉成弱酸）', { fs: 12, c: MUT })}`)
  };

  for (const id in FIG) {
    const u = U(id);
    if (!u) continue;
    const f = FIG[id];
    u.lesson.splice(f.after + 1, 0, { t: 'svg', title: f.title, v: f.v, cap: f.cap, anim: !!f.anim });
  }
})();
