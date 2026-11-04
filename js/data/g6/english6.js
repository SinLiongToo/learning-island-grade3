/* 六年級：英語歡樂小鎮 */
window.SUBJECTS = window.SUBJECTS || [];
(function () {
  const G = () => window.G3;
  const LONG = [['beautiful', '美麗的'], ['interesting', '有趣的'], ['expensive', '昂貴的'], ['popular', '受歡迎的'], ['important', '重要的'], ['difficult', '困難的'], ['delicious', '美味的'], ['dangerous', '危險的']];
  const SHORT = [['tall', 'taller', 'tallest'], ['fast', 'faster', 'fastest'], ['big', 'bigger', 'biggest'], ['happy', 'happier', 'happiest'], ['good', 'better', 'best']];
  const WH = [['Who', '誰', 'Who is your English teacher?', 'Ms. Lin is.'], ['What', '什麼', 'What do you have for breakfast?', 'I have toast and milk.'], ['When', '什麼時候', 'When is your birthday?', 'It\'s on May 3rd.'], ['Where', '哪裡', 'Where is the post office?', 'It\'s next to the bank.'], ['Why', '為什麼', 'Why are you happy?', 'Because I got a new bike.'], ['How', '如何、怎麼樣', 'How do you go to school?', 'I walk to school.'], ['How many', '多少（可數）', 'How many pencils do you have?', 'I have five.'], ['How much', '多少錢', 'How much is the cake?', 'It\'s eighty dollars.'], ['How often', '多常', 'How often do you play basketball?', 'Twice a week.'], ['How old', '幾歲', 'How old is your brother?', 'He\'s fifteen.'], ['Which', '哪一個', 'Which color do you like, red or blue?', 'Blue.'], ['Whose', '誰的', 'Whose bag is this?', 'It\'s Tom\'s.']];
  const R1 = 'Dear Grandpa,\nHow are you? Last summer vacation, our family went to Hualien. We stayed in a hotel near the beach. On the first day, we rode bikes along the coast. The ocean was bluer than the sky! On the second day, we visited Taroko Gorge. It was the most beautiful place I have ever seen. I took a lot of pictures, and I will show them to you next week. I also bought you a souvenir: some mochi. I hope you like it.\nLove,\nAmy';
  const R2 = 'Plastic is everywhere: bags, bottles, straws, and toys. It is cheap and useful, but it can stay on Earth for hundreds of years. Every year, millions of tons of plastic go into the ocean. Sea turtles sometimes think plastic bags are jellyfish and eat them. What can we do? We should bring our own bags and bottles. We should say "No straw, please." We can also recycle. Small actions can make a big difference.';

  window.SUBJECTS.push({
    id: 'english6', grade: 6, name: '英語歡樂小鎮', icon: '🔤', color: '#dc2626', land: '#fca5a5',
    blurb: '旅行、長形容詞比較（more / most）、Wh 問句總整理、時態總複習、閱讀',
    intro: '六年級英語：把學過的文法整理起來，讀更長的文章，準備上國中！',
    units: [
      {
        id: 'g6e1', vocab: true, icon: '✈️', title: 'Travel 旅行',
        summary: 'passport、airport、suitcase、hotel、souvenir……Where did you go? How was your trip?',
        lesson: [
          { t: 'words', lang: 'en', title: '旅行單字', v: [{ e: '🛂', w: 'passport', m: '護照' }, { e: '🛫', w: 'airport', m: '機場' }, { e: '✈️', w: 'airplane', m: '飛機' }, { e: '🎫', w: 'ticket', m: '票' }, { e: '🧳', w: 'suitcase', m: '行李箱' }, { e: '🏨', w: 'hotel', m: '旅館' }, { e: '🗺️', w: 'map', m: '地圖' }, { e: '📷', w: 'camera', m: '相機' }, { e: '🎁', w: 'souvenir', m: '紀念品' }, { e: '🌊', w: 'ocean', m: '海洋' }, { e: '⛰️', w: 'mountain', m: '山' }, { e: '🏝️', w: 'island', m: '島' }, { e: '🏖️', w: 'vacation', m: '假期' }, { e: '🧭', w: 'trip', m: '旅行' }] },
          { t: 'table', title: '聊旅行', head: ['英文', '中文'], rows: [['Where did you go last summer?', '你去年夏天去了哪裡？'], ['I went to Japan with my family.', '我和家人去了日本。'], ['How was your trip?', '你的旅行怎麼樣？'], ['It was great! / It was so much fun!', '很棒！／好好玩！'], ['How did you get there?', '你怎麼去的？'], ['We took an airplane.', '我們搭飛機。']] },
          { t: 'key', v: ['island 的 s 不發音 [ˋaɪlənd]', 'souvenir 紀念品', 'How was your trip? 你的旅行怎麼樣？', '說去過的旅行要用過去式：went、took、saw'] },
          { t: 'tip', v: '出國前把護照影本和家人電話寫在行李箱裡，比較安全。' }
        ],
        quiz: [
          { q: '出國一定要帶的「護照」英文是？', opts: ['passport', 'password', 'postcard', 'pass'], ans: 0, exp: 'passport 護照。', say: 'passport' },
          { q: 'How was your trip? 最適合的回答是？', opts: ['It was great!', 'I went by bus.', 'Yes, I do.', 'It\'s my suitcase.'], ans: 0, exp: '問旅行怎麼樣。', say: 'How was your trip?' },
          { q: '「island」的哪一個字母不發音？', opts: ['s', 'i', 'l', 'd'], ans: 0, exp: 'island 唸 [ˋaɪlənd]。', say: 'island' },
          { q: 'We ___ to Hualien last weekend.', opts: ['went', 'go', 'goes', 'will go'], ans: 0, exp: 'last weekend 用過去式。', say: 'We went to Hualien last weekend.' }
        ]
      },
      {
        id: 'g6e2', icon: '🏆', title: 'more / most 與 as … as',
        summary: '長的形容詞用 more / most；as tall as 和……一樣高',
        lesson: [
          { t: 'h', v: '長的形容詞：前面加 more / most', p: ['兩個音節以上的形容詞（beautiful、interesting），不加 er / est，而是在前面加 <b>more</b>（比較級）或 <b>the most</b>（最高級）。', 'This book is <b>more interesting than</b> that one. / She is <b>the most popular</b> girl in our class.'] },
          { t: 'table', title: '比一比', head: ['原級', '比較級', '最高級'], rows: [['tall（短）', 'taller', 'the tallest'], ['happy（y 結尾）', 'happier', 'the happiest'], ['beautiful（長）', 'more beautiful', 'the most beautiful'], ['interesting（長）', 'more interesting', 'the most interesting'], ['good（不規則）', 'better', 'the best']] },
          { t: 'h', v: 'as … as：一樣', p: 'Tom is <b>as tall as</b> Ben.（Tom 和 Ben 一樣高）中間用<b>原級</b>。<br>否定：Tom is <b>not as tall as</b> Ben.（Tom 沒有 Ben 高）' },
          { t: 'key', v: ['短字加 er / est', '長字用 more / the most', 'as ＋ 原級 ＋ as：一樣', '不能說 more taller 或 most beautifulest'] },
          { t: 'tip', v: 'happy、easy 雖然有兩個音節，但 y 結尾，所以用 happier、easier。' }
        ],
        quiz: [
          { q: 'This movie is ___ than that one.', opts: ['more interesting', 'interestinger', 'most interesting', 'more interestinger'], ans: 0, exp: '長字用 more。', say: 'This movie is more interesting than that one.' },
          { q: 'She is the ___ singer in Taiwan.', opts: ['most popular', 'more popular', 'popularest', 'popular'], ans: 0, exp: '最高級 the most。', say: 'She is the most popular singer in Taiwan.' },
          { q: 'Amy is as ___ as her mother.', opts: ['tall', 'taller', 'tallest', 'more tall'], ans: 0, exp: 'as … as 中間用原級。', say: 'Amy is as tall as her mother.' },
          { q: '下列哪一個是錯的？', opts: ['more taller', 'more beautiful', 'taller', 'the most important'], ans: 0, exp: 'taller 已經是比較級，不能再加 more。', say: 'taller' }
        ],
        gen() {
          const { pick, mc } = G();
          const t = pick(['er', 'est', 'long', 'long', 'as']);
          if (t === 'long') { const [a, m] = pick(LONG), sup = Math.random() < .5; const right = sup ? `the most ${a}` : `more ${a}`; return mc(sup ? `It is ___ place in Taiwan.（${a}，${m}）` : `This one is ___ than that one.（${a}，${m}）`, right, sup ? [`the ${a}est`, `more ${a}`, `the most ${a}est`] : [`${a}er`, `the most ${a}`, `more ${a}er`], `${a} 是長字，用 ${sup ? 'the most' : 'more'}。`, { say: sup ? `It is the most ${a} place in Taiwan.` : `This one is more ${a} than that one.` }); }
          if (t === 'as') { const [a] = pick(SHORT); return mc(`Tom is as ___ as Ben.`, a, [SHORT.find(x => x[0] === a)[1], SHORT.find(x => x[0] === a)[2], `more ${a}`], 'as … as 中間用原級。', { say: `Tom is as ${a} as Ben.` }); }
          const [a, er, est] = pick(SHORT), right = t === 'er' ? er : est;
          return mc(`${a} 的${t === 'er' ? '比較級' : '最高級'}是？`, right, [t === 'er' ? `more ${a}` : `most ${a}`, t === 'er' ? est : er, `${a}${t === 'er' ? 'er' : 'est'}` === right ? `${a}${a.slice(-1)}${t === 'er' ? 'er' : 'est'}` : `${a}${t === 'er' ? 'er' : 'est'}`], `${a} → ${er} → ${est}。`, { say: `${a}, ${er}, ${est}` });
        }
      },
      {
        id: 'g6e3', icon: '❓', title: 'Wh 問句總整理',
        summary: 'Who、What、When、Where、Why、How、How many、How much、How often、Which、Whose',
        lesson: [
          { t: 'table', title: '疑問詞', head: ['疑問詞', '問什麼', '例句', '回答'], rows: WH.map(w => [`<b>${w[0]}</b>`, w[1], w[2], w[3]]) },
          { t: 'h', v: 'Why 和 Because', p: '用 <b>Why</b> 問原因，通常用 <b>Because</b> 回答。' },
          { t: 'key', v: ['Who 人、What 事物、When 時間、Where 地點', 'Why 原因 → Because', 'How many 可數的數量；How much 錢或不可數', 'How often 頻率：once a week、every day'] },
          { t: 'tip', v: '先看答案問的是「人、時間、地點、原因、數量」哪一種，就知道要用哪個疑問詞。' }
        ],
        quiz: [
          { q: '___ is your birthday? It\'s on June 5th.', opts: ['When', 'Where', 'Who', 'Why'], ans: 0, exp: '問時間用 When。', say: 'When is your birthday?' },
          { q: '___ are you late? Because I missed the bus.', opts: ['Why', 'What', 'How', 'Who'], ans: 0, exp: 'Because 回答 Why。', say: 'Why are you late?' },
          { q: '___ do you play the piano? Every day.', opts: ['How often', 'How many', 'How much', 'How old'], ans: 0, exp: '問頻率用 How often。', say: 'How often do you play the piano?' },
          { q: '___ bag is this? It\'s Tom\'s.', opts: ['Whose', 'Who', 'Which', 'Where'], ans: 0, exp: '問誰的用 Whose。', say: 'Whose bag is this?' }
        ],
        gen() {
          const { pick, mc, shuffle } = G();
          const [w, , q, a] = pick(WH);
          const rest = q.slice(w.length);
          return Math.random() < .6
            ? mc(`___${rest}　（回答：${a}）`, w, shuffle(WH.filter(x => x[0] !== w).map(x => x[0])), `回答是「${a}」，所以用 ${w}。`, { say: q })
            : mc(`「${q}」最適合的回答是？`, a, shuffle(WH.filter(x => x[0] !== w).map(x => x[3])), `${w} 問的是${WH.find(x => x[0] === w)[1]}。`, { say: q });
        }
      },
      {
        id: 'g6e4', icon: '⏳', title: '時態總複習',
        summary: '現在簡單式、現在進行式、過去式、未來式：看時間詞選動詞',
        lesson: [
          { t: 'table', head: ['時態', '什麼時候用', '常見時間詞', '例句'], rows: [['現在簡單式', '習慣、事實', 'every day、usually、always', 'He <b>plays</b> soccer every day.'], ['現在進行式', '正在做', 'now、Look!、Listen!', 'He <b>is playing</b> soccer now.'], ['過去式', '已經發生', 'yesterday、last week、ago', 'He <b>played</b> soccer yesterday.'], ['未來式', '還沒發生', 'tomorrow、next week', 'He <b>will play</b> / <b>is going to play</b> soccer tomorrow.']] },
          { t: 'key', v: ['先找時間詞，再決定時態', '現在簡單式 he / she 要加 s', '進行式：be ＋ Ving', '過去式：ed 或不規則', '未來式：will ＋ 原形'] },
          { t: 'tip', v: '寫英文句子前，先問自己：這件事是「習慣、正在、已經、還沒」？' }
        ],
        quiz: [
          { q: 'My sister ___ TV now.', opts: ['is watching', 'watches', 'watched', 'will watch'], ans: 0, exp: 'now → 進行式。', say: 'My sister is watching TV now.' },
          { q: 'We ___ to the zoo last Sunday.', opts: ['went', 'go', 'will go', 'are going'], ans: 0, exp: 'last Sunday → 過去式。', say: 'We went to the zoo last Sunday.' },
          { q: 'He usually ___ to school by bus.', opts: ['goes', 'go', 'went', 'is going'], ans: 0, exp: 'usually → 現在簡單式，he 加 es。', say: 'He usually goes to school by bus.' },
          { q: 'I ___ my grandma tomorrow.', opts: ['will visit', 'visited', 'visit', 'am visit'], ans: 0, exp: 'tomorrow → 未來式。', say: 'I will visit my grandma tomorrow.' }
        ],
        gen() {
          const { pick, mc } = G();
          const V = [['play', 'plays', 'is playing', 'played', 'will play', 'basketball'], ['read', 'reads', 'is reading', 'read', 'will read', 'a book'], ['eat', 'eats', 'is eating', 'ate', 'will eat', 'lunch'], ['go', 'goes', 'is going', 'went', 'will go', 'to the park'], ['watch', 'watches', 'is watching', 'watched', 'will watch', 'TV'], ['write', 'writes', 'is writing', 'wrote', 'will write', 'a letter']];
          const [base, s, ing, past, fut, obj] = pick(V);
          const [time, k] = pick([['every day', 1], ['usually', 1], ['now', 2], ['right now', 2], ['yesterday', 3], ['last night', 3], ['two days ago', 3], ['tomorrow', 4], ['next Monday', 4]]);
          const forms = [null, s, ing, past, fut];
          const sent = k === 1 && time === 'usually' ? `Ken ${time} ___ ${obj}.` : `Ken ___ ${obj} ${time}.`;
          const right = forms[k];
          const opts = [s, ing, past, fut].filter((x, i) => x !== right && !(base === 'read' && i === 2 && k === 1));
          return mc(sent, right, opts, `「${time}」→ ${['', '現在簡單式', '現在進行式', '過去式', '未來式'][k]}。`, { say: sent.replace('___', right) });
        }
      },
      {
        id: 'g6e5', icon: '📰', title: 'Reading 5 英文閱讀（六年級）',
        summary: '旅遊書信、環保短文：找細節、推論、找主旨',
        lesson: [
          { t: 'h', v: '六年級閱讀技巧', cards: [
            { e: '🎯', h: '找主旨', p: '文章最想說什麼？常在第一句或最後一句。' },
            { e: '🔍', h: '找細節', p: '人、時、地、事，回文章找原句。' },
            { e: '🤔', h: '推論', p: '從線索推想文章沒有直接說的事。' } ] },
          { t: 'key', v: ['書信：Dear… 開頭、Love / Your friend 結尾', '說明短文：問題 → 原因 → 解決方法', 'should、can 後面常是作者的建議'] },
          { t: 'tip', v: '遇到不會的字，先看前後句猜意思，再查字典確認。' }
        ],
        quiz: [
          { passage: R1, q: 'Where did Amy\'s family go?', opts: ['Hualien.', 'Taipei.', 'Japan.', 'Kenting.'], ans: 0, exp: 'our family went to Hualien.' },
          { passage: R1, q: 'What did they do on the first day?', opts: ['They rode bikes along the coast.', 'They visited Taroko Gorge.', 'They went shopping.', 'They swam in a pool.'], ans: 0, exp: 'On the first day, we rode bikes along the coast.' },
          { passage: R1, q: 'What did Amy buy for Grandpa?', opts: ['Some mochi.', 'A camera.', 'A bike.', 'Some pictures.'], ans: 0, exp: 'I also bought you a souvenir: some mochi.' },
          { passage: R1, q: 'What will Amy do next week?', opts: ['Show the pictures to Grandpa.', 'Go to Hualien again.', 'Buy a new camera.', 'Stay in a hotel.'], ans: 0, exp: 'I will show them to you next week.' },
          { passage: R2, q: 'Why do sea turtles eat plastic bags?', opts: ['They think the bags are jellyfish.', 'The bags are delicious.', 'They are very hungry for plastic.', 'People give the bags to them.'], ans: 0, exp: 'think plastic bags are jellyfish.' },
          { passage: R2, q: 'How long can plastic stay on Earth?', opts: ['Hundreds of years.', 'A few days.', 'One year.', 'Ten minutes.'], ans: 0, exp: 'it can stay on Earth for hundreds of years.' },
          { passage: R2, q: 'What is the main idea of the passage?', opts: ['Plastic hurts the ocean, and small actions can help.', 'Plastic toys are fun.', 'Sea turtles like jellyfish.', 'Plastic is expensive.'], ans: 0, exp: '問題和解決方法。' },
          { passage: R2, q: 'Which is NOT a way to help in the passage?', opts: ['Use more plastic straws.', 'Bring your own bags.', 'Recycle.', 'Bring your own bottle.'], ans: 0, exp: '文章叫我們說 No straw。' }
        ]
      }
    ]
  });
})();
