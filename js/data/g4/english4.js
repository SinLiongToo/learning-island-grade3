/* 四年級：英語歡樂小鎮 */
window.SUBJECTS = window.SUBJECTS || [];
(function () {
  const G = () => window.G3;
  const ORD = [[1, 'first', '1st'], [2, 'second', '2nd'], [3, 'third', '3rd'], [4, 'fourth', '4th'], [5, 'fifth', '5th'], [6, 'sixth', '6th'], [7, 'seventh', '7th'], [8, 'eighth', '8th'], [9, 'ninth', '9th'], [10, 'tenth', '10th'], [11, 'eleventh', '11th'], [12, 'twelfth', '12th'], [20, 'twentieth', '20th'], [21, 'twenty-first', '21st'], [22, 'twenty-second', '22nd'], [23, 'twenty-third', '23rd'], [30, 'thirtieth', '30th'], [31, 'thirty-first', '31st']];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const PAST = [['go', 'went', '去'], ['eat', 'ate', '吃'], ['see', 'saw', '看見'], ['have', 'had', '有、吃'], ['do', 'did', '做'], ['make', 'made', '做、製作'], ['get', 'got', '得到'], ['buy', 'bought', '買'], ['swim', 'swam', '游泳'], ['run', 'ran', '跑'], ['sing', 'sang', '唱歌'], ['drink', 'drank', '喝'], ['write', 'wrote', '寫'], ['come', 'came', '來'], ['take', 'took', '拿、搭乘'], ['sleep', 'slept', '睡覺'], ['read', 'read', '讀']];
  const REG = [['play', 'played', '玩'], ['watch', 'watched', '看（電視）'], ['clean', 'cleaned', '打掃'], ['cook', 'cooked', '煮'], ['walk', 'walked', '走路'], ['visit', 'visited', '拜訪'], ['study', 'studied', '讀書'], ['stop', 'stopped', '停'], ['dance', 'danced', '跳舞'], ['help', 'helped', '幫忙'], ['jump', 'jumped', '跳'], ['live', 'lived', '住'], ['cry', 'cried', '哭']];
  const ADJ = [['tall', 'taller', 'tallest', '高的'], ['short', 'shorter', 'shortest', '矮的、短的'], ['fast', 'faster', 'fastest', '快的'], ['slow', 'slower', 'slowest', '慢的'], ['long', 'longer', 'longest', '長的'], ['small', 'smaller', 'smallest', '小的'], ['big', 'bigger', 'biggest', '大的'], ['hot', 'hotter', 'hottest', '熱的'], ['fat', 'fatter', 'fattest', '胖的'], ['heavy', 'heavier', 'heaviest', '重的'], ['happy', 'happier', 'happiest', '快樂的'], ['easy', 'easier', 'easiest', '容易的'], ['nice', 'nicer', 'nicest', '好的'], ['cute', 'cuter', 'cutest', '可愛的'], ['good', 'better', 'best', '好的'], ['bad', 'worse', 'worst', '壞的']];
  /* 比較題的素材：[A, B, 形容詞, A 比 B 怎樣（true＝A 比較〜）] */
  const CMP = [['An elephant', 'a mouse', 'big', true], ['A turtle', 'a rabbit', 'slow', true], ['A giraffe', 'a dog', 'tall', true], ['A bike', 'a car', 'fast', false], ['Summer', 'winter', 'hot', true], ['A pencil', 'a ruler', 'long', false], ['A baby', 'a man', 'heavy', false], ['A cheetah', 'a horse', 'fast', true], ['A cat', 'a tiger', 'big', false]];

  const R1 = 'My name is Ben. Last Sunday, I went to the zoo with my family. We saw many animals. The giraffes were very tall, and the monkeys were funny. I ate an ice cream there. It was hot, but I was very happy. I want to go again next month.';
  const R2 = 'Dear Amy,\nMy birthday party is on Saturday, July 12th, at two o\'clock. It is at my house, next to the post office on Park Road. We are going to eat cake and play games. Please come and bring your swimsuit. We can swim in the pool, too!\nYour friend,\nLily';
  const R3 = 'There are four seasons in Taiwan. Spring is warm, and there are many flowers. Summer is the hottest season. People like to swim and eat shaved ice. Fall is cool and windy. Winter is cold, but it doesn\'t snow in most places. My favorite season is fall because I can fly a kite.';

  window.SUBJECTS.push({
    id: 'english4', grade: 4, name: '英語歡樂小鎮', icon: '🔤', color: '#dc2626', land: '#fca5a5',
    blurb: '子音組合、Magic e、興趣、問路、序數日期、過去式、比較級、There is / Do you、閱讀',
    intro: '四年級英語：學會更多拼讀規則，開始說「昨天做了什麼」和「誰比較高」。按 🔊 跟著唸！',
    units: [
      /* ---------- 1. 子音組合 ---------- */
      {
        id: 'g4e1', vocab: true, icon: '🐟', title: 'Phonics 子音組合（sh ch th wh ph ck ng）',
        summary: 'ship、chair、think、whale、phone、duck、ring；bl、fl、gr、st……',
        lesson: [
          { t: 'h', v: '兩個字母，一個新的音', p: '有些子音兩個在一起，會發出<b>全新的聲音</b>，叫做<b>雙字母子音</b>（digraph）。' },
          { t: 'table', head: ['組合', '發音提示', '例字'], rows: [['sh', '「噓」安靜的聲音', 'ship、fish、shoe'], ['ch', '像「ㄑ」用力一點', 'chair、lunch、chicken'], ['th', '舌頭輕放在上下牙齒中間', 'think、three、this、mother'], ['wh', '和 w 一樣', 'whale、white、what'], ['ph', '和 f 一樣', 'phone、photo、dolphin'], ['ck', '和 k 一樣，放在短母音後', 'duck、clock、sock'], ['ng', '鼻音，像「ㄥ」', 'ring、king、sing']] },
          { t: 'words', lang: 'en', title: '雙字母子音', v: [{ e: '🚢', w: 'ship', m: '船' }, { e: '🐟', w: 'fish', m: '魚' }, { e: '🪑', w: 'chair', m: '椅子' }, { e: '🍱', w: 'lunch', m: '午餐' }, { e: '🤔', w: 'think', m: '想' }, { e: '3️⃣', w: 'three', m: '三' }, { e: '🐋', w: 'whale', m: '鯨魚' }, { e: '⚪', w: 'white', m: '白色' }, { e: '📱', w: 'phone', m: '電話' }, { e: '🐬', w: 'dolphin', m: '海豚' }, { e: '🦆', w: 'duck', m: '鴨子' }, { e: '🧦', w: 'sock', m: '襪子' }, { e: '💍', w: 'ring', m: '戒指' }, { e: '👑', w: 'king', m: '國王' }] },
          { t: 'h', v: '子音連在一起，兩個音都要唸', p: 'bl、cl、fl、gr、tr、st、sn、sw 這些組合，<b>兩個音都要唸出來</b>，快快連在一起。例如 flag 是 f ＋ l ＋ ag。' },
          { t: 'words', lang: 'en', title: '連續子音', v: [{ e: '⬛', w: 'black', m: '黑色' }, { e: '⏰', w: 'clock', m: '時鐘' }, { e: '🚩', w: 'flag', m: '旗子' }, { e: '🍇', w: 'grape', m: '葡萄' }, { e: '🌳', w: 'tree', m: '樹' }, { e: '⭐', w: 'star', m: '星星' }, { e: '🐍', w: 'snake', m: '蛇' }, { e: '🏊', w: 'swim', m: '游泳' }] },
          { t: 'key', v: ['sh 噓、ch 用力的ㄑ、th 舌頭放牙齒中間', 'ph 唸 f；wh 唸 w；ck 唸 k', 'bl、fl、st 兩個音都要唸'] },
          { t: 'tip', v: '唸 th 時對著鏡子看：舌尖要稍微露出來一點點，才是正確的 th 音喔！' }
        ],
        quiz: [
          { q: 'phone 的 ph 發什麼音？', opts: ['f', 'p', 'h', 'b'], ans: 0, exp: 'ph 唸成 f：phone、photo。', say: 'phone' },
          { q: '下列哪一個字有 sh 的音？', opts: ['fish', 'chair', 'think', 'king'], ans: 0, exp: 'fish 的 sh。', say: 'fish' },
          { q: '唸 th（例如 think）時，舌頭要放在哪裡？', opts: ['上下牙齒中間', '捲到後面', '貼住上嘴唇', '不用動'], ans: 0, exp: '舌尖輕放在上下牙齒之間。', say: 'think' },
          { q: 'whale 開頭的 wh 發什麼音？', opts: ['w', 'h', 'f', 'k'], ans: 0, exp: 'wh 唸 w。', say: 'whale' },
          { q: '「duck」的 ck 發什麼音？', opts: ['k', 's', 'ch', 'd'], ans: 0, exp: 'ck 唸 k。', say: 'duck' },
          { q: '下列哪一個字的開頭是「連續子音」（兩個音都要唸）？', opts: ['flag', 'ship', 'phone', 'whale'], ans: 0, exp: 'flag 的 f 和 l 都要唸。', say: 'flag' }
        ],
        gen() {
          const { pick, mc } = G();
          const W = [['ship', 'sh', '船'], ['shoe', 'sh', '鞋子'], ['fish', 'sh', '魚'], ['chair', 'ch', '椅子'], ['lunch', 'ch', '午餐'], ['chicken', 'ch', '雞'], ['think', 'th', '想'], ['three', 'th', '三'], ['mother', 'th', '媽媽'], ['whale', 'wh', '鯨魚'], ['white', 'wh', '白色'], ['phone', 'ph', '電話'], ['photo', 'ph', '照片'], ['dolphin', 'ph', '海豚'], ['duck', 'ck', '鴨子'], ['sock', 'ck', '襪子'], ['clock', 'ck', '時鐘'], ['ring', 'ng', '戒指'], ['king', 'ng', '國王'], ['sing', 'ng', '唱歌']];
          const [w, d, m] = pick(W);
          const blank = w.replace(d, '__');
          return mc(`聽聽看，空格要填哪兩個字母？ ${blank}（${m}）`, d, ['sh', 'ch', 'th', 'wh', 'ph', 'ck', 'ng'].filter(x => x !== d), `${w} 的 ${d}。`, { say: w });
        }
      },

      /* ---------- 2. Magic e ---------- */
      {
        id: 'g4e2', vocab: true, icon: '🪄', title: 'Phonics 神奇的 e（a_e i_e o_e u_e）',
        summary: 'cap → cape、kit → kite、hop → hope、cub → cube：字尾 e 讓母音唸自己的名字',
        lesson: [
          { t: 'h', v: '字尾的 e 不發音，但有魔法', p: ['單字最後的 <b>e 不發音</b>，但它會讓前面的母音<b>唸出自己的名字</b>（長母音）：a 唸 [e]、i 唸 [aɪ]、o 唸 [o]、u 唸 [ju]。', '比一比：<b>cap</b>（帽子，短 a）→ <b>cape</b>（披風，長 a）。'] },
          { t: 'table', head: ['短母音', '加上 e', '長母音'], rows: [['cap 帽子', 'cape 披風', 'a 唸 [e]'], ['kit 一套工具', 'kite 風箏', 'i 唸 [aɪ]'], ['hop 跳', 'hope 希望', 'o 唸 [o]'], ['cub 幼獸', 'cube 方塊', 'u 唸 [ju]']] },
          { t: 'words', lang: 'en', title: 'Magic e 單字', v: [{ e: '🎂', w: 'cake', m: '蛋糕' }, { e: '🏞️', w: 'lake', m: '湖' }, { e: '🎮', w: 'game', m: '遊戲' }, { e: '🚲', w: 'bike', m: '腳踏車' }, { e: '🪁', w: 'kite', m: '風箏' }, { e: '5️⃣', w: 'five', m: '五' }, { e: '👃', w: 'nose', m: '鼻子' }, { e: '🏠', w: 'home', m: '家' }, { e: '🪢', w: 'rope', m: '繩子' }, { e: '🥰', w: 'cute', m: '可愛的' }, { e: '🧊', w: 'cube', m: '方塊' }, { e: '🎵', w: 'tune', m: '曲調' }] },
          { t: 'key', v: ['字尾 e 不發音', 'e 讓前面的母音唸「字母名字」', 'a_e [e]、i_e [aɪ]、o_e [o]、u_e [ju]'] },
          { t: 'tip', v: '遇到不會的字，先看最後有沒有 e：有的話，前面的母音大多唸長音。' }
        ],
        quiz: [
          { q: 'kite 最後的 e 要不要唸出來？', opts: ['不唸', '要唸', '唸成 a', '唸成 i'], ans: 0, exp: '字尾的 e 不發音。', say: 'kite' },
          { q: 'cap 加上 e 變成什麼字？', opts: ['cape', 'cake', 'cup', 'cap e'], ans: 0, exp: 'cap → cape（披風）。', say: 'cape' },
          { q: '下列哪一個字的 a 唸長音 [e]？', opts: ['lake', 'cat', 'hat', 'bag'], ans: 0, exp: 'lake 是 a_e。', say: 'lake' },
          { q: 'hope 的 o 怎麼唸？', opts: ['和字母 O 的名字一樣 [o]', '和 hot 的 o 一樣', '不發音', '唸成 u'], ans: 0, exp: 'o_e 唸長音 [o]。', say: 'hope' },
          { q: '下列哪一組是「短母音 → 長母音」？', opts: ['hop → hope', 'cake → cat', 'bike → big', 'cute → cut'], ans: 0, exp: '加上 e 變長音。', say: 'hop, hope' }
        ],
        gen() {
          const { pick, mc } = G();
          const PAIRS = [['cap', 'cape'], ['hat', 'hate'], ['tap', 'tape'], ['kit', 'kite'], ['pin', 'pine'], ['bit', 'bite'], ['hop', 'hope'], ['not', 'note'], ['rob', 'robe'], ['cub', 'cube'], ['cut', 'cute'], ['tub', 'tube']];
          const [s, l] = pick(PAIRS);
          const long = Math.random() < .5, w = long ? l : s;
          return mc(`聽到的是哪一個字？`, w, [long ? s : l, ...PAIRS.filter(p => p[0] !== s).map(p => p[long ? 1 : 0]).slice(0, 2)], `${w}：${long ? '字尾有 e，母音唸長音' : '沒有 e，母音唸短音'}。`, { say: w, noread: true });
        }
      },

      /* ---------- 3. 興趣 ---------- */
      {
        id: 'g4e3', vocab: true, icon: '🎨', title: 'Hobbies 興趣',
        summary: 'play the piano、draw pictures、ride a bike……What do you like to do?',
        lesson: [
          { t: 'words', lang: 'en', title: '興趣 Hobbies', v: [{ e: '🎹', w: 'play the piano', m: '彈鋼琴' }, { e: '🎻', w: 'play the violin', m: '拉小提琴' }, { e: '🖍️', w: 'draw pictures', m: '畫畫' }, { e: '📚', w: 'read books', m: '看書' }, { e: '🚲', w: 'ride a bike', m: '騎腳踏車' }, { e: '🪁', w: 'fly a kite', m: '放風箏' }, { e: '🎣', w: 'go fishing', m: '去釣魚' }, { e: '⛰️', w: 'go hiking', m: '去爬山' }, { e: '📷', w: 'take pictures', m: '拍照' }, { e: '🎮', w: 'play video games', m: '玩電動' }, { e: '💃', w: 'dance', m: '跳舞' }, { e: '🍪', w: 'bake cookies', m: '烤餅乾' }] },
          { t: 'table', title: '問別人的興趣', head: ['英文', '中文'], rows: [['What do you like to do?', '你喜歡做什麼？'], ['I like to draw pictures.', '我喜歡畫畫。'], ['What does she like to do?', '她喜歡做什麼？'], ['She likes to play the piano.', '她喜歡彈鋼琴。'], ['Do you like to go fishing?', '你喜歡釣魚嗎？'], ['Yes, I do. / No, I don\'t.', '是的，我喜歡。／不，我不喜歡。']] },
          { t: 'h', v: 'play 後面有沒有 the？', p: '<b>樂器</b>前面要加 the：play <b>the</b> piano、play <b>the</b> guitar。<br><b>球類運動</b>不加 the：play basketball、play soccer。' },
          { t: 'key', v: ['I like to ＋ 動作', 'he / she 用 likes', '樂器加 the；球類不加'] },
          { t: 'tip', v: '介紹自己的時候加一句：I like to ___. 就能讓別人更認識你！' }
        ],
        quiz: [
          { q: '「我喜歡放風箏。」英文怎麼說？', opts: ['I like to fly a kite.', 'I like fly kite.', 'I likes to fly a kite.', 'I like to flying a kite.'], ans: 0, exp: 'like to ＋ 原形動詞。', say: 'I like to fly a kite.' },
          { q: 'She ___ to play the piano.', opts: ['likes', 'like', 'liking', 'is like'], ans: 0, exp: 'she 用 likes。', say: 'She likes to play the piano.' },
          { q: '下列哪一個「不用」加 the？', opts: ['play basketball', 'play the piano', 'play the violin', 'play the guitar'], ans: 0, exp: '球類運動不加 the。', say: 'play basketball' },
          { q: '"Do you like to go hiking?" 喜歡的話怎麼回答？', opts: ['Yes, I do.', 'Yes, I am.', 'Yes, I like.', 'No, I do.'], ans: 0, exp: 'Do you…? → Yes, I do.', say: 'Do you like to go hiking?' },
          { q: '「take pictures」是什麼意思？', opts: ['拍照', '畫畫', '拿圖片', '看照片'], ans: 0, exp: 'take pictures 拍照。', say: 'take pictures' }
        ]
      },

      /* ---------- 4. 城鎮與問路 ---------- */
      {
        id: 'g4e4', vocab: true, icon: '🏙️', title: 'In Town 城鎮與問路',
        summary: 'post office、bank、supermarket……Where is the bank? Turn left. It\'s next to…',
        lesson: [
          { t: 'words', lang: 'en', title: '城鎮裡的地方', v: [{ e: '🏤', w: 'post office', m: '郵局' }, { e: '🏦', w: 'bank', m: '銀行' }, { e: '🏥', w: 'hospital', m: '醫院' }, { e: '🛒', w: 'supermarket', m: '超市' }, { e: '🏪', w: 'convenience store', m: '便利商店' }, { e: '📖', w: 'bookstore', m: '書店' }, { e: '👮', w: 'police station', m: '警察局' }, { e: '🚒', w: 'fire station', m: '消防局' }, { e: '🍽️', w: 'restaurant', m: '餐廳' }, { e: '🚉', w: 'train station', m: '火車站' }, { e: '🏛️', w: 'museum', m: '博物館' }, { e: '🎬', w: 'movie theater', m: '電影院' }] },
          { t: 'words', lang: 'en', title: '問路', v: [{ e: '⬆️', w: 'go straight', m: '直走' }, { e: '⬅️', w: 'turn left', m: '左轉' }, { e: '➡️', w: 'turn right', m: '右轉' }, { e: '↔️', w: 'between', m: '在…兩者之間' }, { e: '🔄', w: 'across from', m: '在…的對面' }, { e: '🧍', w: 'next to', m: '在…旁邊' }, { e: '🔲', w: 'corner', m: '轉角' }] },
          { t: 'table', title: '問路對話', head: ['英文', '中文'], rows: [['Excuse me. Where is the post office?', '不好意思，郵局在哪裡？'], ['Go straight and turn left.', '直走再左轉。'], ['It\'s next to the bank.', '它在銀行旁邊。'], ['It\'s between the bookstore and the park.', '它在書店和公園中間。'], ['It\'s across from the hospital.', '它在醫院對面。'], ['Thank you! / You\'re welcome.', '謝謝！／不客氣。']] },
          { t: 'key', v: ['問路先說 Excuse me.', 'Where is the ___?', 'between A and B：在 A 和 B 中間', 'across from：在對面'] },
          { t: 'tip', v: '迷路的時候，可以到便利商店或警察局請大人幫忙。' }
        ],
        quiz: [
          { q: '想寄信，要去哪裡？', opts: ['post office', 'bank', 'hospital', 'bookstore'], ans: 0, exp: '郵局 post office。', say: 'post office' },
          { q: '「It\'s between the bank and the park.」意思是？', opts: ['它在銀行和公園中間', '它在銀行旁邊', '它在公園對面', '它在銀行裡面'], ans: 0, exp: 'between A and B 在 A 和 B 之間。', say: 'It\'s between the bank and the park.' },
          { q: '問路前，禮貌的開頭是？', opts: ['Excuse me.', 'Goodbye.', 'Good night.', 'I\'m sorry, too.'], ans: 0, exp: 'Excuse me. 不好意思打擾一下。', say: 'Excuse me.' },
          { q: '「右轉」英文是？', opts: ['turn right', 'turn left', 'go straight', 'go back'], ans: 0, exp: 'turn right。', say: 'turn right' },
          { q: '「across from the hospital」意思是？', opts: ['在醫院對面', '在醫院旁邊', '在醫院裡面', '在醫院後面'], ans: 0, exp: 'across from 在對面。', say: 'across from the hospital' }
        ]
      },

      /* ---------- 5. 序數與日期 ---------- */
      {
        id: 'g4e5', vocab: true, icon: '📅', title: 'Ordinal Numbers 序數與日期',
        summary: 'first、second、third……What\'s the date today? It\'s May 5th.',
        lesson: [
          { t: 'h', v: '序數：第幾', p: ['表示「第幾個」用<b>序數</b>。大部分是數字後面加 <b>th</b>：fourth、sixth、tenth。', '特別的三個：<b>first（第一）、second（第二）、third（第三）</b>。'] },
          { t: 'words', lang: 'en', title: '序數', v: ORD.slice(0, 12).map(([n, w, s]) => ({ e: '🏅', w, m: `第 ${n}（${s}）` })) },
          { t: 'table', title: '要小心的拼法', head: ['數字', '序數', '注意'], rows: [['5', 'fifth', 've 變 f'], ['8', 'eighth', '只加 h'], ['9', 'ninth', '去掉 e'], ['12', 'twelfth', 've 變 f'], ['20', 'twentieth', 'y 變 ie'], ['21', 'twenty-first', '個位用 first']] },
          { t: 'table', title: '說日期', head: ['英文', '中文'], rows: [['What\'s the date today?', '今天幾月幾號？'], ['It\'s May 5th. (May fifth)', '五月五日。'], ['When is Children\'s Day?', '兒童節是什麼時候？'], ['It\'s on April 4th.', '在四月四日。'], ['I\'m in the fourth grade.', '我讀四年級。']] },
          { t: 'key', v: ['first 1st、second 2nd、third 3rd，其他多半加 th', '日期用序數：May 5th 唸 May fifth', '日期前面用 on：on April 4th', '幾年級也用序數：the fourth grade'] },
          { t: 'tip', v: '寫縮寫看最後兩個字母：1st、2nd、3rd、4th……21st、22nd、23rd。' }
        ],
        quiz: [
          { q: '「第三」英文是？', opts: ['third', 'three', 'threeth', 'thirdth'], ans: 0, exp: 'third 第三。', say: 'third' },
          { q: '「我讀四年級。」英文怎麼說？', opts: ['I\'m in the fourth grade.', 'I\'m in the four grade.', 'I\'m four grade.', 'I\'m in fourth.'], ans: 0, exp: '年級用序數 fourth。', say: 'I\'m in the fourth grade.' },
          { q: '5 的序數怎麼拼？', opts: ['fifth', 'fiveth', 'fivth', 'fifty'], ans: 0, exp: 'five → fifth。', say: 'fifth' },
          { q: '"What\'s the date today?" 是在問什麼？', opts: ['今天幾月幾號', '今天星期幾', '現在幾點', '今天天氣如何'], ans: 0, exp: 'date 日期。', say: 'What\'s the date today?' },
          { q: 'The party is ___ May 5th. 空格要填？', opts: ['on', 'in', 'at', 'to'], ans: 0, exp: '日期前用 on。', say: 'The party is on May fifth.' }
        ],
        gen() {
          const { pick, mc } = G();
          const [n, w, s] = pick(ORD);
          const t = pick(['abbr', 'word', 'date']);
          if (t === 'abbr') return mc(`「${w}」的縮寫是？`, s, [`${n}th`, `${n}st`, `${n}nd`, `${n}rd`].filter(x => x !== s), `${w} → ${s}。`, { say: w });
          if (t === 'word') return mc(`「第 ${n}」的英文是？`, w, ORD.filter(o => o[0] !== n).map(o => o[1]).sort(() => Math.random() - .5), `第 ${n} ＝ ${w}（${s}）。`, { say: w });
          const m = Math.floor(Math.random() * 12), d = pick(ORD.filter(o => o[0] <= (m === 1 ? 28 : 30)));
          return mc(`「${m + 1} 月 ${d[0]} 日」英文怎麼寫？`, `${MONTHS[m]} ${d[2]}`, [`${MONTHS[(m + 1) % 12]} ${d[2]}`, `${MONTHS[m]} ${d[0]}${d[2].endsWith('th') ? 'st' : 'th'}`, `${MONTHS[(m + 11) % 12]} ${d[2]}`], `${m + 1} 月是 ${MONTHS[m]}，${d[0]} 日是 ${d[1]}（${d[2]}）。`, { say: `${MONTHS[m]} ${d[1]}` });
        }
      },

      /* ---------- 6. 過去式 ---------- */
      {
        id: 'g4e6', icon: '⏪', title: 'Past Tense 過去式：昨天做了什麼',
        summary: 'played、watched；went、ate、saw；was / were；What did you do yesterday?',
        lesson: [
          { t: 'h', v: '已經發生的事要用過去式', p: '說<b>昨天、上週、去年</b>做的事，動詞要變成<b>過去式</b>。常見的時間詞：<b>yesterday、last Sunday、last week、last year、two days ago</b>。' },
          { t: 'table', title: '規則變化：加 ed', head: ['規則', '例子'], rows: [['一般加 ed', 'play → played、watch → watched、clean → cleaned'], ['字尾是 e，只加 d', 'dance → danced、live → lived'], ['子音 ＋ y，y 改 i 加 ed', 'study → studied、cry → cried'], ['短母音 ＋ 一個子音，重複字尾再加 ed', 'stop → stopped']] },
          { t: 'table', title: '不規則變化（要背）', head: ['現在', '過去', '中文'], rows: PAST.map(p => [p[0], `<b>${p[1]}</b>`, p[2]]) },
          { t: 'h', v: 'be 動詞的過去式', p: '<b>am / is → was</b>；<b>are → were</b>。例：I <b>was</b> tired yesterday. They <b>were</b> at the park.' },
          { t: 'table', title: '問答', head: ['英文', '中文'], rows: [['What did you do yesterday?', '你昨天做了什麼？'], ['I went to the park.', '我去了公園。'], ['Did you watch TV last night?', '你昨晚有看電視嗎？'], ['Yes, I did. / No, I didn\'t.', '有。／沒有。']] },
          { t: 'key', v: ['過去的時間 → 動詞用過去式', '規則：加 ed（注意 e、y、重複字尾）', '不規則：go-went、eat-ate、see-saw 要背', 'am/is → was；are → were', 'Did 問句後面的動詞用原形：Did you go…?'] },
          { t: 'tip', v: '睡前用英文說一句今天做的事：I played basketball today. 每天一句，很快就熟了！' }
        ],
        quiz: [
          { q: 'Yesterday I ___ to the zoo.', opts: ['went', 'go', 'goes', 'going'], ans: 0, exp: 'yesterday 用過去式 went。', say: 'Yesterday I went to the zoo.' },
          { q: 'study 的過去式是？', opts: ['studied', 'studyed', 'studed', 'studying'], ans: 0, exp: '子音＋y → y 改 i 加 ed。', say: 'studied' },
          { q: 'They ___ at home last night.', opts: ['were', 'was', 'are', 'is'], ans: 0, exp: 'they 的過去式 be 動詞是 were。', say: 'They were at home last night.' },
          { q: 'Did you eat breakfast? 沒有吃的話怎麼回答？', opts: ['No, I didn\'t.', 'No, I don\'t.', 'No, I wasn\'t.', 'No, I ate.'], ans: 0, exp: 'Did 問句用 did / didn\'t 回答。', say: 'Did you eat breakfast?' },
          { q: 'Did she ___ TV last night?', opts: ['watch', 'watched', 'watches', 'watching'], ans: 0, exp: 'Did 後面的動詞用原形。', say: 'Did she watch TV last night?' }
        ],
        gen() {
          const { pick, mc } = G();
          const t = pick(['irr', 'irr', 'reg', 'mean', 'be']);
          if (t === 'irr') { const [a, b, m] = pick(PAST.filter(p => p[0] !== p[1])); return mc(`「${a}」（${m}）的過去式是？`, b, [`${a}ed`, `${a}s`, `${a}ing`], `${a} 是不規則變化 → ${b}。`, { say: `${a}, ${b}` }); }
          if (t === 'reg') { const [a, b, m] = pick(REG); const w = new Set([`${a}ed`, `${a}d`, `${a.replace(/y$/, 'i')}ed`, `${a}${a.slice(-1)}ed`, `${a}s`]); w.delete(b); return mc(`「${a}」（${m}）的過去式怎麼拼？`, b, [...w], `${a} → ${b}。`, { say: b }); }
          if (t === 'mean') { const [a, b, m] = pick(PAST.concat(REG).filter(p => p[0] !== p[1])); return mc(`「${b}」是哪一個動詞的過去式？`, `${a}（${m}）`, PAST.concat(REG).filter(p => p[0] !== a).sort(() => Math.random() - .5).map(p => `${p[0]}（${p[2]}）`), `${b} 是 ${a} 的過去式。`, { say: b }); }
          const [sub, be] = pick([['I', 'was'], ['He', 'was'], ['She', 'was'], ['It', 'was'], ['We', 'were'], ['They', 'were'], ['You', 'were'], ['My parents', 'were'], ['Tom', 'was']]);
          const [place, zh] = pick([['at school', '在學校'], ['at the park', '在公園'], ['very tired', '很累'], ['happy', '很開心'], ['at home', '在家']]);
          return mc(`${sub} ___ ${place} yesterday.`, be, ['was', 'were', 'is', 'are'].filter(x => x !== be), `${sub} 的過去式 be 動詞用 ${be}。（昨天${zh}）`, { say: `${sub} ${be} ${place} yesterday.` });
        }
      },

      /* ---------- 7. 比較級 ---------- */
      {
        id: 'g4e7', icon: '📏', title: 'Comparatives 比較級與最高級',
        summary: 'tall → taller → tallest；big → bigger；heavy → heavier；good → better → best',
        lesson: [
          { t: 'h', v: '兩個比較用 -er，三個以上最厲害用 -est', p: ['兩個東西比較：A is <b>taller than</b> B.（A 比 B 高）', '三個以上，誰最厲害：A is <b>the tallest</b>.（A 最高）'] },
          { t: 'table', title: '變化規則', head: ['規則', '比較級', '最高級'], rows: [['一般加 er / est', 'tall → taller', 'tallest'], ['字尾 e 加 r / st', 'nice → nicer', 'nicest'], ['短母音 ＋ 一個子音：重複字尾', 'big → bigger、hot → hotter', 'biggest、hottest'], ['子音 ＋ y：y 改 i', 'heavy → heavier、happy → happier', 'heaviest、happiest'], ['不規則', 'good → better、bad → worse', 'best、worst']] },
          { t: 'ex', q: '用英文說：大象比老鼠大。', steps: ['兩個比較 → big 的比較級', 'big 是短母音 ＋ g → 重複 g → bigger', '加上 than'], a: 'An elephant is bigger than a mouse.' },
          { t: 'key', v: ['A is ___er than B.（兩個比）', 'A is the ___est.（三個以上最…）', 'big → bigger；heavy → heavier；nice → nicer', 'good → better → best'] },
          { t: 'tip', v: '最高級前面別忘了 the：the tallest、the best。' }
        ],
        quiz: [
          { q: 'Tom is ___ than Ben.', opts: ['taller', 'tall', 'tallest', 'more tall'], ans: 0, exp: '兩人比較加 er ＋ than。', say: 'Tom is taller than Ben.' },
          { q: 'big 的比較級是？', opts: ['bigger', 'biger', 'bigest', 'more big'], ans: 0, exp: '短母音 ＋ 子音，重複字尾。', say: 'bigger' },
          { q: 'heavy 的最高級是？', opts: ['heaviest', 'heavyest', 'heavier', 'most heavy'], ans: 0, exp: '子音＋y → y 改 i 加 est。', say: 'heaviest' },
          { q: 'good → better → ___', opts: ['best', 'goodest', 'bestest', 'well'], ans: 0, exp: 'good 是不規則：better、best。', say: 'good, better, best' },
          { q: 'The cheetah is ___ fastest animal on land.', opts: ['the', 'a', 'an', 'than'], ans: 0, exp: '最高級前面加 the。', say: 'The cheetah is the fastest animal on land.' }
        ],
        gen() {
          const { pick, mc } = G();
          const t = pick(['er', 'est', 'sent']);
          if (t !== 'sent') {
            const [a, er, est, m] = pick(ADJ), right = t === 'er' ? er : est;
            const end = t === 'er' ? 'er' : 'est';
            const w = new Set([a + end, a.replace(/y$/, 'i') + end, a + a.slice(-1) + end, (t === 'er' ? 'more ' : 'most ') + a]);
            w.delete(right);
            return mc(`${a}（${m}）的${t === 'er' ? '比較級' : '最高級'}是？`, right, [...w], `${a} → ${er} → ${est}。`, { say: `${a}, ${er}, ${est}` });
          }
          const [A, B, adj, yes] = pick(CMP), row = ADJ.find(x => x[0] === adj);
          const s = `${A} is ${row[1]} than ${B}.`;
          return mc(`這句話對嗎？「${s}」`, yes ? '對' : '不對', [yes ? '不對' : '對'], `${A.toLowerCase()} ${yes ? '確實' : '並沒有'}比 ${B} ${row[3].replace('的', '')}。`, { say: s });
        }
      },

      /* ---------- 8. 文法：There is / Do you ---------- */
      {
        id: 'g4e8', icon: '🧠', title: '文法：There is / are、Do / Does、現在進行式',
        summary: 'There is a cat. There are two cats. Do you…? Does he…? He is running.',
        lesson: [
          { t: 'table', title: 'There is / There are（有……）', head: ['', '例句'], rows: [['一個 → There is', 'There <b>is</b> a book on the desk.'], ['兩個以上 → There are', 'There <b>are</b> three cats under the tree.'], ['問句', '<b>Is there</b> a park near your home? Yes, there is.'], ['問有幾個', 'How many students <b>are there</b>? There are 25.']] },
          { t: 'table', title: 'Do / Does 問句', head: ['主詞', '問句', '回答'], rows: [['I / you / we / they', '<b>Do</b> you like apples?', 'Yes, I do. / No, I don\'t.'], ['he / she / it / 一個人', '<b>Does</b> he like apples?', 'Yes, he does. / No, he doesn\'t.']], note: 'Does 問句裡的動詞用原形：Does she <b>play</b>…?（不是 plays）' },
          { t: 'table', title: '現在進行式：正在做', head: ['公式', '例句'], rows: [['am / is / are ＋ 動詞ing', 'I <b>am reading</b>. She <b>is running</b>. They <b>are swimming</b>.'], ['字尾 e 去 e 加 ing', 'dance → dancing、write → writing'], ['短母音＋子音重複', 'run → running、swim → swimming、sit → sitting']] },
          { t: 'key', v: ['There is ＋ 一個；There are ＋ 很多個', 'he / she / it 用 Does；其他用 Do', 'Does 後面動詞用原形', '正在做：be 動詞 ＋ Ving'] },
          { t: 'tip', v: '看到 now、Look!、Listen! 就要想到「正在做」，用 be ＋ Ving。' }
        ],
        quiz: [
          { q: 'There ___ two birds in the tree.', opts: ['are', 'is', 'am', 'be'], ans: 0, exp: '兩隻 → There are。', say: 'There are two birds in the tree.' },
          { q: '___ your brother play basketball?', opts: ['Does', 'Do', 'Is', 'Are'], ans: 0, exp: 'your brother 是 he → Does。', say: 'Does your brother play basketball?' },
          { q: 'Does she ___ English?', opts: ['speak', 'speaks', 'speaking', 'spoke'], ans: 0, exp: 'Does 後面用原形。', say: 'Does she speak English?' },
          { q: 'Look! The dog is ___.', opts: ['running', 'runing', 'run', 'runs'], ans: 0, exp: 'run → running（重複 n）。', say: 'Look! The dog is running.' },
          { q: 'Is there a bank near here? 有的話怎麼回答？', opts: ['Yes, there is.', 'Yes, it is.', 'Yes, I do.', 'Yes, there are.'], ans: 0, exp: 'Is there…? → Yes, there is.', say: 'Is there a bank near here?' }
        ],
        gen() {
          const { pick, rnd, mc } = G();
          const t = pick(['there', 'do', 'ing', 'ing']);
          if (t === 'there') {
            const [s, p] = pick([['book', 'books'], ['cat', 'cats'], ['apple', 'apples'], ['box', 'boxes'], ['bird', 'birds'], ['pencil', 'pencils']]);
            const n = rnd(1, 6), place = pick(['on the desk', 'in the box', 'under the tree', 'in the room']);
            const word = ['', 'a', 'two', 'three', 'four', 'five', 'six'][n];
            const be = n === 1 ? 'is' : 'are';
            return mc(`There ___ ${n === 1 ? (/^[aeiou]/.test(s) ? 'an' : 'a') : word} ${n === 1 ? s : p} ${place}.`, be, ['is', 'are', 'am', 'be'].filter(x => x !== be), `${n === 1 ? '一個用 There is' : '兩個以上用 There are'}。`, { say: `There ${be} ${n === 1 ? (/^[aeiou]/.test(s) ? 'an' : 'a') : word} ${n === 1 ? s : p} ${place}.` });
          }
          if (t === 'do') {
            const [sub, d] = pick([['you', 'Do'], ['they', 'Do'], ['he', 'Does'], ['she', 'Does'], ['your sister', 'Does'], ['Mr. Lin', 'Does'], ['your parents', 'Do'], ['we', 'Do'], ['the cat', 'Does']]);
            const v = pick(['like milk', 'play soccer', 'go to school', 'eat fish', 'read books']);
            return mc(`___ ${sub} ${v}?`, d, ['Do', 'Does', 'Is', 'Are'].filter(x => x !== d), `${sub} ${d === 'Does' ? '是第三人稱單數，用 Does' : '用 Do'}。`, { say: `${d} ${sub} ${v}?` });
          }
          const [v, ing] = pick([['run', 'running'], ['swim', 'swimming'], ['sit', 'sitting'], ['dance', 'dancing'], ['write', 'writing'], ['make', 'making'], ['read', 'reading'], ['play', 'playing'], ['sing', 'singing'], ['ride', 'riding'], ['cut', 'cutting'], ['eat', 'eating']]);
          const [sub, be] = pick([['I', 'am'], ['She', 'is'], ['He', 'is'], ['They', 'are'], ['We', 'are'], ['The boy', 'is']]);
          const w = new Set([v + 'ing', v.replace(/e$/, '') + 'ing', v + v.slice(-1) + 'ing', v + 's', v]);
          w.delete(ing);
          return mc(`Look! ${sub} ${be} ___ now.（${v}）`, ing, [...w], `${v} → ${ing}。`, { say: `Look! ${sub} ${be} ${ing} now.` });
        }
      },

      /* ---------- 9. 閱讀 ---------- */
      {
        id: 'g4e9', icon: '📰', title: 'Reading 3 英文閱讀（四年級）',
        summary: '日記、邀請卡、季節介紹：找人事時地物，讀懂過去式',
        lesson: [
          { t: 'h', v: '讀英文短文的方法', cards: [
            { e: '1️⃣', h: '先看題目', p: '知道要找什麼：Who? When? Where? What?' },
            { e: '2️⃣', h: '圈關鍵字', p: '日期、地點、人名通常是大寫或數字。' },
            { e: '3️⃣', h: '看動詞', p: 'went、ate、saw 是過去式，表示已經發生。' } ] },
          { t: 'table', title: '問題詞', head: ['英文', '問什麼'], rows: [['Who', '誰'], ['When', '什麼時候'], ['Where', '在哪裡'], ['What', '什麼'], ['Why', '為什麼（答案常有 because）'], ['How many', '有多少']] },
          { t: 'key', v: ['Who 誰、When 何時、Where 哪裡、What 什麼、Why 為什麼', '答案通常在文章裡可以找到原句', 'because 後面是原因'] },
          { t: 'tip', v: '不認識的單字先跳過，看前後文猜猜看，常常也能答對！' }
        ],
        quiz: [
          { passage: R1, q: 'Where did Ben go last Sunday?', opts: ['The zoo.', 'The park.', 'The beach.', 'School.'], ans: 0, exp: 'I went to the zoo.' },
          { passage: R1, q: 'What did Ben eat?', opts: ['An ice cream.', 'A hamburger.', 'Some fruit.', 'A cake.'], ans: 0, exp: 'I ate an ice cream there.' },
          { passage: R1, q: 'How was the weather?', opts: ['It was hot.', 'It was cold.', 'It was rainy.', 'It was snowy.'], ans: 0, exp: 'It was hot.' },
          { passage: R1, q: 'The monkeys were ___.', opts: ['funny', 'tall', 'sad', 'big'], ans: 0, exp: 'the monkeys were funny.' },
          { passage: R2, q: 'When is Lily\'s birthday party?', opts: ['On Saturday, July 12th.', 'On Sunday, July 12th.', 'On Saturday, June 12th.', 'On Friday, July 2nd.'], ans: 0, exp: 'on Saturday, July 12th。' },
          { passage: R2, q: 'Where is the party?', opts: ['At Lily\'s house.', 'At the post office.', 'At school.', 'At the park.'], ans: 0, exp: 'It is at my house.' },
          { passage: R2, q: 'What should Amy bring?', opts: ['Her swimsuit.', 'A cake.', 'A kite.', 'Some books.'], ans: 0, exp: 'Please come and bring your swimsuit.' },
          { passage: R2, q: 'Lily\'s house is next to the ___.', opts: ['post office', 'bank', 'pool', 'school'], ans: 0, exp: 'next to the post office.' },
          { passage: R3, q: 'Which season is the hottest in Taiwan?', opts: ['Summer.', 'Spring.', 'Fall.', 'Winter.'], ans: 0, exp: 'Summer is the hottest season.' },
          { passage: R3, q: 'Why does the writer like fall?', opts: ['Because he / she can fly a kite.', 'Because it snows.', 'Because there are many flowers.', 'Because he / she can swim.'], ans: 0, exp: 'because I can fly a kite.' },
          { passage: R3, q: 'How many seasons are there in Taiwan?', opts: ['Four.', 'Two.', 'Three.', 'Five.'], ans: 0, exp: 'There are four seasons.' }
        ]
      }
    ]
  });
})();
