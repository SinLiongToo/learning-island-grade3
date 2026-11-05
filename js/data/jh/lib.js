/* 國中（七～九年級）內容的小工具：用精簡的格式寫單元，再轉成網站用的格式
 *  JH.sub(base, grade, { id, blurb, intro, units: [...] })   新增一個科目
 *  JH.u(id, icon, title, summary, { L, T, K, tip, Q, gen })   一個單元
 *    L：教學區塊（和國小相同的 h/table/ex/cards/svg 區塊）
 *    T：想一想 [[問題, [推理步驟...], 還可以再問], ...]
 *    K：重點整理 [..]
 *    Q：固定題 [[題目, [正解, 錯1, 錯2, 錯3], 解說, 是否推理題], ...]
 *  JH.pairs(list, fwd, back, exp)   從 [甲, 乙] 清單出「甲→乙」與反向題的出題函式
 *  JH.tf(list, q, exp)              從 [敘述, 答案] 清單出二選一或多選一題的出題函式
 */
window.SUBJECTS = window.SUBJECTS || [];
window.JH = (function () {
  const G = () => window.G3;
  function u(id, icon, title, summary, o) {
    const lesson = (o.L || []).slice();
    (o.T || []).forEach(([q, steps, ask]) => lesson.push({ t: 'think', q, steps, ask }));
    if (o.K) lesson.push({ t: 'key', v: o.K });
    if (o.tip) lesson.push({ t: 'tip', v: o.tip });
    const quiz = (o.Q || []).map(([q, opts, exp, logic]) => Object.assign({ q, opts, ans: 0, exp }, logic ? { logic: true } : {}));
    return Object.assign({ id, icon, title, summary, lesson, quiz }, o.gen ? { gen: o.gen } : {});
  }
  function sub(base, grade, o) { window.SUBJECTS.push(Object.assign({}, base, { grade }, o)); }
  function pairs(list, fwd, back, exp) {
    return () => {
      const { pick, mc, shuffle } = G();
      const [x, k] = pick(list);
      if (!back || Math.random() < .6) return mc(fwd(x), k, shuffle([...new Set(list.map(l => l[1]))].filter(a => a !== k)), exp(x, k));
      return mc(back(k), x, shuffle(list.filter(l => l[1] !== k).map(l => l[0])), exp(x, k));
    };
  }
  function tf(list, q, exp) {
    return () => {
      const { pick, mc, shuffle } = G();
      const [x, k] = pick(list);
      return mc(q(x), k, shuffle([...new Set(list.map(l => l[1]))].filter(a => a !== k)), exp ? exp(x, k) : `${x}：${k}。`);
    };
  }
  /** 把數字變成上標：sup(-4) → ⁻⁴ */
  const sup = n => String(n).split('').map(c => c === '-' ? '⁻' : '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c]).join('');
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  /** 數字題的干擾選項 */
  const near = (n, step) => G().shuffle([n + step, n - step, n + 2 * step, n - 2 * step, n + 3 * step].filter(x => x !== n));
  /** 只用一種顏色和圖示區分年級，各科共用的島嶼外觀 */
  const B = {
    chinese: { name: '國文島', icon: '📜', color: '#b91c1c', land: '#fecaca' },
    english: { name: '英語島', icon: '🔤', color: '#dc2626', land: '#fca5a5' },
    math: { name: '數學島', icon: '📐', color: '#ea580c', land: '#fed7aa' },
    science: { name: '自然科學島', icon: '🔬', color: '#15803d', land: '#86efac' },
    social: { name: '社會島', icon: '🏛️', color: '#7c3aed', land: '#c4b5fd' },
    taigi: { name: '台語島', icon: '🗣️', color: '#0f766e', land: '#99f6e4' },
    tech: { name: '資訊科技島', icon: '💻', color: '#0369a1', land: '#bae6fd' },
    health: { name: '健康島', icon: '💪', color: '#e11d48', land: '#fecdd3' },
    art: { name: '藝術島', icon: '🎨', color: '#9333ea', land: '#e9d5ff' },
    pe: { name: '體育島', icon: '⚽', color: '#16a34a', land: '#bbf7d0' },
    finance: { name: '理財島', icon: '💰', color: '#ca8a04', land: '#fde68a' },
    world: { name: '國際世界觀島', icon: '🌏', color: '#be185d', land: '#f9a8d4' }
  };
  return { u, sub, pairs, tf, R, near, B, G, sup };
})();
