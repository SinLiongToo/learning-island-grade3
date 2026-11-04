/* 五年級：英語歡樂小鎮 */
window.SUBJECTS = window.SUBJECTS || [];
(function () {
  const G = () => window.G3;
  const R1 = 'Hi, I\'m Kenji. I\'m from Japan. I speak Japanese and a little English. Next month, I\'m going to visit Taiwan with my family. We are going to eat beef noodles and bubble tea in Taipei. Then we will take the high speed rail to Tainan. I want to see the old temples there. I can\'t speak Chinese, so I\'m learning some words now: "Hello," "Thank you," and "How much is it?"';
  const R2 = 'School Rules\n1. You must be on time for class.\n2. You must wear your school uniform on Mondays.\n3. You mustn\'t run in the hallway.\n4. You mustn\'t eat in the library.\n5. You should drink water and wash your hands often.\n6. You can borrow three books from the library each week.';

  window.SUBJECTS.push({
    id: 'english5', grade: 5, name: '英語歡樂小鎮', icon: '🔤', color: '#dc2626', land: '#fca5a5',
    blurb: 'r 控制母音、國家與語言、未來式、must / should / can、閱讀',
    intro: '五年級英語：認識世界各國，說出未來的計畫，看懂規則。按 🔊 跟著唸！',
    units: [
      {
        id: 'g5e1', vocab: true, icon: '🚗', title: 'Phonics r 控制母音（ar or er ir ur）',
        summary: 'car、horse、her、bird、nurse：母音後面跟著 r，發音會改變',
        lesson: [
          { t: 'h', v: '母音 ＋ r，變出新聲音', p: '母音後面接 <b>r</b> 時，母音不再唸短音，而是和 r 一起發一個新的音。' },
          { t: 'table', head: ['組合', 'KK', '例字'], rows: [['ar', '[ɑr]', 'car、star、park、farm'], ['or', '[ɔr]', 'fork、horse、corn、short'], ['er', '[ɝ] / [ɚ]', 'her、teacher、water'], ['ir', '[ɝ]', 'bird、girl、shirt'], ['ur', '[ɝ]', 'nurse、turtle、purple']], note: 'er、ir、ur 三個唸法一樣！' },
          { t: 'words', lang: 'en', title: 'ar 和 or', v: [{ e: '🚗', w: 'car', m: '汽車' }, { e: '⭐', w: 'star', m: '星星' }, { e: '🏞️', w: 'park', m: '公園' }, { e: '🚜', w: 'farm', m: '農場' }, { e: '🍴', w: 'fork', m: '叉子' }, { e: '🐴', w: 'horse', m: '馬' }, { e: '🌽', w: 'corn', m: '玉米' }, { e: '🩳', w: 'shorts', m: '短褲' }] },
          { t: 'words', lang: 'en', title: 'er、ir、ur', v: [{ e: '👩', w: 'her', m: '她的' }, { e: '🐦', w: 'bird', m: '鳥' }, { e: '👧', w: 'girl', m: '女孩' }, { e: '👕', w: 'shirt', m: '襯衫' }, { e: '👩‍⚕️', w: 'nurse', m: '護理師' }, { e: '🐢', w: 'turtle', m: '海龜' }, { e: '🟣', w: 'purple', m: '紫色' }, { e: '🍔', w: 'hamburger', m: '漢堡' }] },
          { t: 'key', v: ['ar 唸 [ɑr]：car', 'or 唸 [ɔr]：fork', 'er、ir、ur 都唸 [ɝ]：her、bird、nurse'] },
          { t: 'tip', v: '拼字時最容易錯 er、ir、ur，因為唸起來一樣，要多看多寫記住。' }
        ],
        quiz: [
          { q: 'bird 的 ir 和下列哪一個字的發音一樣？', opts: ['nurse', 'car', 'fork', 'fire'], ans: 0, exp: 'ir 和 ur 都唸 [ɝ]。', say: 'bird, nurse' },
          { q: '下列哪一個字有 [ɑr] 的音？', opts: ['star', 'her', 'girl', 'corn'], ans: 0, exp: 'ar 唸 [ɑr]。', say: 'star' },
          { q: '「馬」的英文是？', opts: ['horse', 'house', 'hose', 'hearse'], ans: 0, exp: 'horse，or 唸 [ɔr]。', say: 'horse' },
          { q: 'er、ir、ur 三個組合的發音是？', opts: ['一樣', '完全不同', 'ir 不發音', 'ur 唸 [u]'], ans: 0, exp: '都唸 [ɝ]。', say: 'her, bird, nurse' }
        ],
        gen() {
          const { pick, mc } = G();
          const W = [['car', 'ar', '汽車'], ['star', 'ar', '星星'], ['farm', 'ar', '農場'], ['fork', 'or', '叉子'], ['horse', 'or', '馬'], ['corn', 'or', '玉米'], ['her', 'er', '她的'], ['bird', 'ir', '鳥'], ['girl', 'ir', '女孩'], ['shirt', 'ir', '襯衫'], ['nurse', 'ur', '護理師'], ['turtle', 'ur', '海龜'], ['purple', 'ur', '紫色']];
          const [w, d, m] = pick(W);
          return mc(`空格要填哪兩個字母？ ${w.replace(d, '__')}（${m}）`, d, ['ar', 'or', 'er', 'ir', 'ur'].filter(x => x !== d), `${w}：${d}。`, { say: w });
        }
      },
      {
        id: 'g5e2', vocab: true, icon: '🌏', title: 'Countries & Languages 國家與語言',
        summary: 'Japan / Japanese、Korea / Korean……Where are you from? I\'m from Taiwan.',
        lesson: [
          { t: 'words', lang: 'en', title: '國家', v: [{ e: '🇹🇼', w: 'Taiwan', m: '台灣' }, { e: '🇯🇵', w: 'Japan', m: '日本' }, { e: '🇰🇷', w: 'Korea', m: '韓國' }, { e: '🇺🇸', w: 'America', m: '美國' }, { e: '🇨🇦', w: 'Canada', m: '加拿大' }, { e: '🇬🇧', w: 'England', m: '英格蘭（英國）' }, { e: '🇫🇷', w: 'France', m: '法國' }, { e: '🇩🇪', w: 'Germany', m: '德國' }, { e: '🇹🇭', w: 'Thailand', m: '泰國' }, { e: '🇻🇳', w: 'Vietnam', m: '越南' }, { e: '🇦🇺', w: 'Australia', m: '澳洲' }] },
          { t: 'words', lang: 'en', title: '語言', v: [{ e: '🀄', w: 'Chinese', m: '中文' }, { e: '🗾', w: 'Japanese', m: '日語' }, { e: '🇰🇷', w: 'Korean', m: '韓語' }, { e: '🔤', w: 'English', m: '英語' }, { e: '🥖', w: 'French', m: '法語' }, { e: '🥨', w: 'German', m: '德語' }, { e: '🐘', w: 'Thai', m: '泰語' }, { e: '🍜', w: 'Vietnamese', m: '越南語' }] },
          { t: 'table', title: '問答', head: ['英文', '中文'], rows: [['Where are you from?', '你從哪裡來？'], ['I\'m from Taiwan.', '我來自台灣。'], ['Where is she from? She\'s from Japan.', '她從哪裡來？她來自日本。'], ['What language do you speak?', '你說什麼語言？'], ['I speak Chinese and English.', '我說中文和英語。']] },
          { t: 'key', v: ['國家、語言的第一個字母要大寫', 'Where are you from? → I\'m from…', 'Japan → Japanese；Korea → Korean；France → French'] },
          { t: 'tip', v: '台灣的新住民很多來自越南、印尼、泰國、菲律賓，可以問問同學的爸媽會說哪些語言！' }
        ],
        quiz: [
          { q: 'Where are you from? 正確的回答是？', opts: ['I\'m from Taiwan.', 'I\'m Taiwan.', 'I from Taiwan.', 'I\'m fine.'], ans: 0, exp: 'be from ＝ 來自。', say: 'Where are you from?' },
          { q: '日本人說的語言是？', opts: ['Japanese', 'Japan', 'Chinese', 'Korean'], ans: 0, exp: 'Japan 是國家，Japanese 是語言。', say: 'Japanese' },
          { q: '「法國」的英文是？', opts: ['France', 'French', 'Finland', 'Fran'], ans: 0, exp: 'France 法國；French 法語。', say: 'France' },
          { q: '下列哪一個寫法正確？', opts: ['I speak English.', 'I speak english.', 'i speak English.', 'I Speak english.'], ans: 0, exp: '語言和 I 都要大寫。', say: 'I speak English.' }
        ],
        gen() {
          const { pick, mc } = G();
          const C = [['Japan', 'Japanese'], ['Korea', 'Korean'], ['France', 'French'], ['Germany', 'German'], ['Thailand', 'Thai'], ['Vietnam', 'Vietnamese'], ['England', 'English']];
          const [c, l] = pick(C);
          return Math.random() < .5
            ? mc(`People in ${c} speak ___.`, l, C.filter(x => x[1] !== l).map(x => x[1]), `${c} → ${l}。`, { say: `People in ${c} speak ${l}.` })
            : mc(`說 ${l} 的國家是？`, c, C.filter(x => x[0] !== c).map(x => x[0]), `${l} 是 ${c} 的語言。`, { say: c });
        }
      },
      {
        id: 'g5e3', vocab: true, icon: '🔮', title: 'Future 未來式：be going to / will',
        summary: 'I\'m going to visit my grandma. It will rain tomorrow. 談計畫和預測',
        lesson: [
          { t: 'h', v: '說未來的事', p: ['<b>be going to ＋ 原形動詞</b>：已經計畫好要做的事。<br>I\'m <b>going to visit</b> my grandma this weekend.', '<b>will ＋ 原形動詞</b>：預測、或當下決定的事。<br>It <b>will rain</b> tomorrow. / I <b>will help</b> you!'] },
          { t: 'words', lang: 'en', title: '週末計畫', v: [{ e: '🏕️', w: 'go camping', m: '去露營' }, { e: '👵', w: 'visit my grandparents', m: '拜訪祖父母' }, { e: '🎉', w: 'have a party', m: '開派對' }, { e: '🏖️', w: 'go to the beach', m: '去海邊' }, { e: '🎬', w: 'see a movie', m: '看電影' }, { e: '🛍️', w: 'go shopping', m: '去購物' }, { e: '📅', w: 'this weekend', m: '這個週末' }, { e: '➡️', w: 'next week', m: '下星期' }, { e: '🌅', w: 'tomorrow', m: '明天' }] },
          { t: 'table', title: '問句', head: ['英文', '中文'], rows: [['What are you going to do this weekend?', '你這週末要做什麼？'], ['I\'m going to go camping.', '我要去露營。'], ['Are you going to see a movie? Yes, I am.', '你要去看電影嗎？是的。'], ['Will it be sunny tomorrow? No, it won\'t.', '明天會晴天嗎？不會。']] },
          { t: 'key', v: ['be going to ＋ 原形：計畫', 'will ＋ 原形：預測、臨時決定', 'will not ＝ won\'t', '未來時間：tomorrow、next week、this weekend'] },
          { t: 'tip', v: 'be going to 的 be 要跟著主詞變：I am、he is、they are going to……' }
        ],
        quiz: [
          { q: 'She ___ going to visit Japan next year.', opts: ['is', 'are', 'am', 'will'], ans: 0, exp: 'she 用 is。', say: 'She is going to visit Japan next year.' },
          { q: 'It will ___ tomorrow.', opts: ['rain', 'rains', 'rained', 'raining'], ans: 0, exp: 'will 後面用原形。', say: 'It will rain tomorrow.' },
          { q: '「will not」的縮寫是？', opts: ['won\'t', 'willn\'t', 'wont\'', 'wiln\'t'], ans: 0, exp: 'will not ＝ won\'t。', say: 'won\'t' },
          { q: '下列哪一個是「未來」的時間？', opts: ['next week', 'last week', 'yesterday', 'two days ago'], ans: 0, exp: 'next week 下星期。', say: 'next week' }
        ],
        gen() {
          const { pick, mc } = G();
          const t = pick(['be', 'verb', 'time']);
          if (t === 'be') { const [s, b] = pick([['I', 'am'], ['He', 'is'], ['She', 'is'], ['We', 'are'], ['They', 'are'], ['My dad', 'is'], ['You', 'are']]); const p = pick(['go camping', 'visit my grandparents', 'see a movie', 'go shopping']); return mc(`${s} ___ going to ${p} this weekend.`, b, ['am', 'is', 'are', 'will'].filter(x => x !== b), `${s} 用 ${b}。`, { say: `${s} ${b} going to ${p} this weekend.` }); }
          if (t === 'verb') { const [v, wrong] = pick([['go', ['goes', 'went', 'going']], ['play', ['plays', 'played', 'playing']], ['eat', ['eats', 'ate', 'eating']], ['be', ['is', 'was', 'being']], ['help', ['helps', 'helped', 'helping']]]); return mc(`I will ___ tomorrow.（${v}）`, v, wrong, 'will 後面接原形動詞。', { say: `I will ${v} tomorrow.` }); }
          const fut = pick(['tomorrow', 'next Sunday', 'this weekend', 'next year']), past = pick(['yesterday', 'last Sunday', 'last year']);
          return mc(`下列哪一個時間詞要搭配未來式（will / be going to）？`, fut, [past, 'every day', 'two days ago'], `${fut} 是未來的時間。`, { say: fut });
        }
      },
      {
        id: 'g5e4', icon: '🚸', title: 'must / mustn\'t / should / can 規則與建議',
        summary: 'You must wear a helmet. You mustn\'t run. You should drink water.',
        lesson: [
          { t: 'table', head: ['助動詞', '意思', '例句'], rows: [['must', '<b>必須</b>（規定）', 'You must wear a helmet.'], ['mustn\'t', '<b>不可以</b>（禁止）', 'You mustn\'t run in the hallway.'], ['should', '<b>應該</b>（建議）', 'You should go to bed early.'], ['shouldn\'t', '<b>不應該</b>', 'You shouldn\'t eat too much candy.'], ['can', '<b>可以、會</b>', 'You can borrow two books.'], ['can\'t', '<b>不可以、不會</b>', 'You can\'t swim here.']] },
          { t: 'h', v: '後面一律接原形動詞', p: '不管主詞是誰，must、should、can 後面都接<b>原形動詞</b>：He must <b>wear</b>（不是 wears）。' },
          { t: 'key', v: ['must 必須；mustn\'t 禁止', 'should 建議', 'can 可以；can\'t 不可以', '後面接原形動詞'] },
          { t: 'tip', v: '看到告示牌 "No running" 就可以說：You mustn\'t run here.' }
        ],
        quiz: [
          { q: '騎腳踏車時「必須」戴安全帽：You ___ wear a helmet.', opts: ['must', 'mustn\'t', 'can\'t', 'shouldn\'t'], ans: 0, exp: 'must 必須。', say: 'You must wear a helmet.' },
          { q: '在圖書館「不可以」吃東西：You ___ eat in the library.', opts: ['mustn\'t', 'must', 'should', 'can'], ans: 0, exp: 'mustn\'t 禁止。', say: 'You mustn\'t eat in the library.' },
          { q: '朋友感冒了，你建議他：You ___ see a doctor.', opts: ['should', 'mustn\'t', 'can\'t', 'shouldn\'t'], ans: 0, exp: 'should 建議。', say: 'You should see a doctor.' },
          { q: 'He must ___ his homework.', opts: ['do', 'does', 'did', 'doing'], ans: 0, exp: 'must 後面接原形。', say: 'He must do his homework.' }
        ],
        gen() {
          const { pick, mc } = G();
          const L = [['wear a seat belt in the car', 'must', '在車上要繫安全帶'], ['stop at a red light', 'must', '紅燈要停'], ['be quiet in the library', 'must', '圖書館要安靜'], ['run in the hallway', 'mustn\'t', '不能在走廊奔跑'], ['swim in the river alone', 'mustn\'t', '不能自己去河邊游泳'], ['touch the plug with wet hands', 'mustn\'t', '濕手不能碰插頭'], ['drink more water on hot days', 'should', '天熱應該多喝水'], ['brush your teeth before bed', 'should', '睡前應該刷牙'], ['eat more vegetables', 'should', '應該多吃青菜']];
          const [p, m, zh] = pick(L);
          return mc(`You ___ ${p}.（${zh}）`, m, ['must', 'mustn\'t', 'should'].filter(x => x !== m), { must: 'must 表示規定、必須。', 'mustn\'t': 'mustn\'t 表示禁止。', should: 'should 表示建議。' }[m], { say: `You ${m} ${p}.` });
        }
      },
      {
        id: 'g5e5', icon: '📰', title: 'Reading 4 英文閱讀（五年級）',
        summary: '自我介紹與旅行計畫、學校規則：找細節、看懂 must / going to',
        lesson: [
          { t: 'h', v: '讀懂規則和計畫', p: ['看到 <b>must / mustn\'t</b> → 規則；看到 <b>should</b> → 建議。', '看到 <b>be going to / will</b> → 還沒發生的未來計畫。'] },
          { t: 'key', v: ['先看題目的問題詞：Who、Where、What、How many', '回文章找關鍵字', 'can\'t ＝ 不會、不能'] },
          { t: 'tip', v: '讀完可以用中文跟家人說一次文章在講什麼，就知道自己有沒有讀懂。' }
        ],
        quiz: [
          { passage: R1, q: 'Where is Kenji from?', opts: ['Japan.', 'Taiwan.', 'Korea.', 'America.'], ans: 0, exp: 'I\'m from Japan.' },
          { passage: R1, q: 'What is Kenji going to do next month?', opts: ['Visit Taiwan.', 'Visit Japan.', 'Learn to swim.', 'Go to school.'], ans: 0, exp: 'I\'m going to visit Taiwan.' },
          { passage: R1, q: 'How will they go to Tainan?', opts: ['By high speed rail.', 'By plane.', 'By bus.', 'By bike.'], ans: 0, exp: 'take the high speed rail to Tainan.' },
          { passage: R1, q: 'Which is true about Kenji?', opts: ['He can\'t speak Chinese.', 'He speaks Korean.', 'He lives in Tainan.', 'He doesn\'t like noodles.'], ans: 0, exp: 'I can\'t speak Chinese.' },
          { passage: R2, q: 'Where mustn\'t students run?', opts: ['In the hallway.', 'On the playground.', 'In the park.', 'At home.'], ans: 0, exp: 'You mustn\'t run in the hallway.' },
          { passage: R2, q: 'When must students wear the school uniform?', opts: ['On Mondays.', 'Every day.', 'On Fridays.', 'Never.'], ans: 0, exp: 'on Mondays.' },
          { passage: R2, q: 'How many books can students borrow each week?', opts: ['Three.', 'Two.', 'Five.', 'One.'], ans: 0, exp: 'three books each week.' },
          { passage: R2, q: 'Which one is advice (建議), not a rule?', opts: ['Drink water and wash your hands often.', 'Be on time for class.', 'Don\'t eat in the library.', 'Wear your uniform on Mondays.'], ans: 0, exp: 'should 是建議。' }
        ]
      }
    ]
  });
})();
