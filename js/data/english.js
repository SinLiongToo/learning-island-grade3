/* 英語歡樂小鎮：單字卡可按 🔊 聽美式發音（瀏覽器語音） */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'english', name: '英語歡樂小鎮', icon: '🔤', color: '#dc2626', land: '#fca5a5',
  blurb: '字母與自然發音、數字、顏色、文具、動物、家人、身體、日常對話',
  intro: '每張單字卡都可以按 🔊 聽發音，也可以按「全部唸一遍」跟著唸。大聲說出來，才學得最快！',
  units: [
    /* ---------- 1. 自然發音：短母音 ---------- */
    {
      id: 'e1', icon: '🔠', title: 'Phonics 短母音 a e i o u',
      summary: 'cat、bed、pig、dog、sun：看到字就會唸',
      lesson: [
        { t: 'h', v: '母音字母：a、e、i、o、u', p: ['26 個字母裡，<b>a、e、i、o、u</b> 叫母音字母，其他叫子音字母。', '三個字母「子音＋母音＋子音」組成的短單字（像 c-a-t），母音通常發<b>短母音</b>。把每個字母的音連起來唸，就會唸單字了！'] },
        { t: 'words', lang: 'en', title: 'a 的短音（嘴巴張大）：/æ/', v: [{ e: '🐱', w: 'cat', m: '貓' }, { e: '🎒', w: 'bag', m: '袋子' }, { e: '🎩', w: 'hat', m: '帽子' }, { e: '🗺️', w: 'map', m: '地圖' }, { e: '🍎', w: 'apple', m: '蘋果' }] },
        { t: 'words', lang: 'en', title: 'e 的短音：/ɛ/', v: [{ e: '🛏️', w: 'bed', m: '床' }, { e: '🖊️', w: 'pen', m: '原子筆' }, { e: '🔴', w: 'red', m: '紅色' }, { e: '🔟', w: 'ten', m: '十' }, { e: '🥚', w: 'egg', m: '蛋' }] },
        { t: 'words', lang: 'en', title: 'i 的短音：/ɪ/', v: [{ e: '🐷', w: 'pig', m: '豬' }, { e: '6️⃣', w: 'six', m: '六' }, { e: '🐟', w: 'fish', m: '魚' }, { e: '🪑', w: 'sit', m: '坐' }, { e: '🦶', w: 'kick', m: '踢' }] },
        { t: 'words', lang: 'en', title: 'o 的短音：/ɑ/', v: [{ e: '🐶', w: 'dog', m: '狗' }, { e: '📦', w: 'box', m: '箱子' }, { e: '🔥', w: 'hot', m: '熱的' }, { e: '🍲', w: 'pot', m: '鍋子' }, { e: '🐸', w: 'frog', m: '青蛙' }] },
        { t: 'words', lang: 'en', title: 'u 的短音：/ʌ/', v: [{ e: '☀️', w: 'sun', m: '太陽' }, { e: '🚌', w: 'bus', m: '公車' }, { e: '☕', w: 'cup', m: '杯子' }, { e: '🦆', w: 'duck', m: '鴨子' }, { e: '🏃', w: 'run', m: '跑' }] },
        { t: 'h', v: '加上 e 會變長音', p: '字尾多一個不發音的 e，前面的母音就唸<b>字母本身的名字</b>（長母音）：cap → cape、kit → kite、hop → hope、cut → cute。例如 bake、lake、face 的 a 唸 /eɪ/。' },
        { t: 'key', v: ['母音：a e i o u', '子音＋母音＋子音（cat）：唸短母音', '字尾有不發音的 e（cake）：母音唸長音', '容易搞混的字母：b 和 d、p 和 q'] },
        { t: 'tip', v: 'b 和 d 分不清？比個讚：左手 b、右手 d，「bed」就像一張床！' }
      ],
      quiz: [
        { q: '下列哪一個單字的 a 和 cat 的 a 發音一樣（短母音）？', opts: ['bag', 'bake', 'lake', 'face'], ans: 0, exp: 'bag 是短母音 /æ/；bake、lake、face 字尾有 e，唸長音。', say: 'cat, bag, bake, lake, face' },
        { q: '「pig」中間的母音字母是哪一個？', opts: ['i', 'e', 'a', 'u'], ans: 0, exp: 'p-i-g，母音是 i。', say: 'pig' },
        { q: '下列哪一個「不是」母音字母？', opts: ['b', 'a', 'o', 'u'], ans: 0, exp: '母音字母只有 a、e、i、o、u。' },
        { q: '聽聽看，哪一個單字的意思是「太陽」？', opts: ['sun', 'bus', 'cup', 'run'], ans: 0, exp: 'sun 太陽；bus 公車；cup 杯子；run 跑。', say: 'sun' },
        { q: '下列哪一個字和 dog 的母音發音一樣？', opts: ['box', 'bed', 'sun', 'pig'], ans: 0, exp: 'dog、box 都是短母音 o。', say: 'dog, box' },
        { q: '把 kit 加上 e 變成 kite，i 的發音會變成？', opts: ['長音，唸字母 i 的名字', '還是短音', '不發音', '變成 e 的音'], ans: 0, exp: '字尾不發音的 e 讓前面母音變長音。', say: 'kit, kite' },
        { q: '「red、bed、ten」三個字共同的母音是哪一個？', opts: ['e', 'a', 'i', 'o'], ans: 0, exp: '都是短母音 e。', say: 'red, bed, ten' },
        { q: '「bed」的第一個字母是？', opts: ['b', 'd', 'p', 'q'], ans: 0, exp: 'b-e-d。小心 b 和 d 不要寫反。', say: 'bed' },
        { q: '聽聽看，哪一個單字的意思是「鴨子」？', opts: ['duck', 'dog', 'fish', 'frog'], ans: 0, exp: 'duck 鴨子。', say: 'duck' }
      ]
    },

    /* ---------- 2. 數字 ---------- */
    {
      id: 'e2', icon: '🔢', title: 'Numbers 數字 1–20',
      summary: 'one 到 twenty、How many…? 句型',
      lesson: [
        { t: 'words', lang: 'en', title: '1 到 10', v: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'].map((w, i) => ({ w, e: String(i + 1), m: '' + '一二三四五六七八九十'[i] })) },
        { t: 'words', lang: 'en', title: '11 到 20', v: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'].map((w, i) => ({ w, e: String(i + 11) })) },
        { t: 'h', v: '13 到 19 都有 -teen', p: 'thirteen（13）、fourteen（14）……nineteen（19），後面都是 <b>-teen</b>。注意拼字：<b>thir</b>teen、<b>fif</b>teen、eigh<b>teen</b>（只有一個 t）。' },
        { t: 'h', v: '問數量：How many …?', p: ['<b>How many</b> ducks can you see?（你看到幾隻鴨子？）', '<b>There are seven ducks.</b>（有七隻鴨子。）兩個以上，名詞後面通常要加 <b>s</b>。', '只有一個時：There is one duck.'] },
        { t: 'key', v: ['13–19 字尾是 -teen', '12 是 twelve，20 是 twenty', 'How many + 複數名詞？', '兩個以上加 s：one cat, two cats'] },
        { t: 'tip', v: '數樓梯、數筆、數糖果的時候，試試用英文數！' }
      ],
      quiz: [
        { q: '「seven」是數字幾？', opts: ['7', '6', '17', '70'], ans: 0, exp: 'seven ＝ 7。', say: 'seven' },
        { q: '數字 12 的英文是？', opts: ['twelve', 'twenty', 'eleven', 'two'], ans: 0, exp: '12 ＝ twelve；20 ＝ twenty。', say: 'twelve' },
        { q: '數字 15 的英文是？', opts: ['fifteen', 'fiveteen', 'fifty', 'five'], ans: 0, exp: '15 拼成 fifteen，不是 fiveteen。', say: 'fifteen' },
        { q: '"How many ducks can you see?" 你看見 7 隻鴨子，要怎麼回答？', opts: ['There are seven ducks.', 'There are five ducks.', 'There is one duck.', 'There are eleven ducks.'], ans: 0, exp: '7 ＝ seven，兩隻以上用 ducks。', say: 'How many ducks can you see?' },
        { q: '"three + four = ?"', opts: ['seven', 'six', 'eight', 'twelve'], ans: 0, exp: '3 ＋ 4 ＝ 7 ＝ seven。', say: 'three plus four is?' },
        { q: '"ten − two = ?"', opts: ['eight', 'twelve', 'nine', 'seven'], ans: 0, exp: '10 － 2 ＝ 8 ＝ eight。', say: 'ten minus two is?' },
        { q: '數字 20 的英文是？', opts: ['twenty', 'twelve', 'twoteen', 'ten'], ans: 0, exp: '20 ＝ twenty。', say: 'twenty' },
        { q: '「two cat」要改成正確的說法是？', opts: ['two cats', 'two cat', 'twos cat', 'two a cat'], ans: 0, exp: '兩隻以上名詞加 s：two cats。', say: 'two cats' }
      ]
    },

    /* ---------- 3. 顏色和形狀 ---------- */
    {
      id: 'e3', icon: '🎨', title: 'Colors & Shapes 顏色和形狀',
      summary: 'red、blue、yellow……What color is it?',
      lesson: [
        { t: 'words', lang: 'en', title: '顏色 Colors', v: [{ e: '🔴', w: 'red', m: '紅色' }, { e: '🟠', w: 'orange', m: '橘色' }, { e: '🟡', w: 'yellow', m: '黃色' }, { e: '🟢', w: 'green', m: '綠色' }, { e: '🔵', w: 'blue', m: '藍色' }, { e: '🟣', w: 'purple', m: '紫色' }, { e: '🩷', w: 'pink', m: '粉紅色' }, { e: '🟤', w: 'brown', m: '咖啡色' }, { e: '⚫', w: 'black', m: '黑色' }, { e: '⚪', w: 'white', m: '白色' }] },
        { t: 'words', lang: 'en', title: '形狀 Shapes', v: [{ e: '⭕', w: 'circle', m: '圓形' }, { e: '🟥', w: 'square', m: '正方形' }, { e: '🔺', w: 'triangle', m: '三角形' }, { e: '⭐', w: 'star', m: '星形' }, { e: '❤️', w: 'heart', m: '愛心' }] },
        { t: 'h', v: '問顏色', p: ['<b>What color is it?</b>（它是什麼顏色？）', '<b>It\'s blue.</b>（它是藍色。）', '兩種顏色：<b>It\'s blue and yellow.</b>'] },
        { t: 'key', v: ['What color is it? → It\'s ___.', 'orange 是橘色，也是柳丁', 'purple 紫色、pink 粉紅色、brown 咖啡色'] },
        { t: 'tip', v: '穿衣服時說說看：My shirt is white. My pants are blue.' }
      ],
      quiz: [
        { q: '香蕉通常是什麼顏色？', opts: ['yellow', 'blue', 'purple', 'black'], ans: 0, exp: 'yellow 黃色。', say: 'yellow' },
        { q: '"What color is your schoolbag?" 書包是藍色配黃色，要怎麼回答？', opts: ['It\'s blue and yellow.', 'It\'s red and green.', 'It\'s black and white.', 'It\'s purple and pink.'], ans: 0, exp: 'blue 藍色，yellow 黃色。', say: 'What color is your schoolbag?' },
        { q: '「green」是什麼顏色？', opts: ['綠色', '灰色', '紅色', '咖啡色'], ans: 0, exp: 'green 綠色。', say: 'green' },
        { q: '天空晴朗時通常是什麼顏色？', opts: ['blue', 'brown', 'pink', 'orange'], ans: 0, exp: 'blue 藍色。', say: 'blue' },
        { q: '「triangle」是哪一種形狀？', opts: ['三角形', '圓形', '正方形', '星形'], ans: 0, exp: 'triangle 三角形。', say: 'triangle' },
        { q: '「圓形」的英文是？', opts: ['circle', 'square', 'heart', 'star'], ans: 0, exp: 'circle 圓形。', say: 'circle' },
        { q: '紅色加黃色會變成橘色，橘色的英文是？', opts: ['orange', 'purple', 'brown', 'pink'], ans: 0, exp: 'orange 橘色。', say: 'orange' },
        { q: '問別人東西是什麼顏色，要怎麼說？', opts: ['What color is it?', 'How many is it?', 'How old is it?', 'What\'s your name?'], ans: 0, exp: 'What color…? 問顏色。', say: 'What color is it?' }
      ]
    },

    /* ---------- 4. 文具 ---------- */
    {
      id: 'e4', icon: '✏️', title: 'School Things 教室文具',
      summary: 'pencil、eraser、ruler……What\'s this? It\'s a…',
      lesson: [
        { t: 'words', lang: 'en', title: '文具單字', v: [{ e: '✏️', w: 'pencil', m: '鉛筆' }, { e: '🧽', w: 'eraser', m: '橡皮擦' }, { e: '📏', w: 'ruler', m: '尺' }, { e: '🖊️', w: 'pen', m: '原子筆' }, { e: '📘', w: 'book', m: '書' }, { e: '📓', w: 'notebook', m: '筆記本' }, { e: '🎒', w: 'bag', m: '書包' }, { e: '🖍️', w: 'crayon', m: '蠟筆' }, { e: '✂️', w: 'scissors', m: '剪刀' }, { e: '🧴', w: 'glue', m: '膠水' }] },
        { t: 'h', v: '這是什麼？', p: ['<b>What\'s this?</b>（這是什麼？）　<b>It\'s a pencil.</b>（這是一枝鉛筆。）', '母音開頭的字前面用 <b>an</b>：It\'s <b>an</b> eraser.'] },
        { t: 'h', v: '借東西', p: ['<b>May I borrow your ruler?</b>（我可以借你的尺嗎？）', '<b>Sure. Here you are.</b>（好啊，給你。）　用完要說 <b>Thank you!</b>'] },
        { t: 'h', v: '是你的嗎？', p: ['<b>Is this your pen?</b>（這是你的筆嗎？）', '<b>Yes, it is.</b>（是。）／<b>No, it isn\'t.</b>（不是。）'] },
        { t: 'key', v: ['What\'s this? → It\'s a/an ___.', 'an eraser（e 是母音，用 an）', 'May I borrow your ___?', 'Is this your ___? → Yes, it is. / No, it isn\'t.'] },
        { t: 'tip', v: 'scissors（剪刀）因為有兩片刀刃，永遠有個 s 喔！' }
      ],
      quiz: [
        { q: '"I made a mistake. May I borrow your ______?" 想擦掉錯字，空格要填？', opts: ['eraser', 'ruler', 'pencil', 'notebook'], ans: 0, exp: '擦掉錯字要用 eraser 橡皮擦。', say: 'I made a mistake. May I borrow your eraser?' },
        { q: '「ruler」是什麼？', opts: ['尺', '鉛筆', '膠水', '書包'], ans: 0, exp: 'ruler 尺。', say: 'ruler' },
        { q: '"What\'s this?" 指著一枝鉛筆，要怎麼回答？', opts: ['It\'s a pencil.', 'It\'s a ruler.', 'I\'m a pencil.', 'Yes, it is.'], ans: 0, exp: 'It\'s a pencil.', say: 'What is this?' },
        { q: '下列哪一個要用 an？', opts: ['eraser', 'pencil', 'ruler', 'book'], ans: 0, exp: 'eraser 是母音 e 開頭，用 an eraser。', say: 'an eraser' },
        { q: '"Is this your bag?" 如果是你的，要回答？', opts: ['Yes, it is.', 'No, it isn\'t.', 'Yes, I am.', 'It\'s a bag.'], ans: 0, exp: 'Is this…? 肯定回答 Yes, it is.', say: 'Is this your bag?' },
        { q: '「剪刀」的英文是？', opts: ['scissors', 'glue', 'crayon', 'pen'], ans: 0, exp: 'scissors 剪刀。', say: 'scissors' },
        { q: '同學借你東西後，你應該說？', opts: ['Thank you!', 'Goodbye!', 'I\'m nine.', 'Good night!'], ans: 0, exp: '謝謝 Thank you!', say: 'Thank you!' },
        { q: '「crayon」是什麼？', opts: ['蠟筆', '膠水', '筆記本', '書'], ans: 0, exp: 'crayon 蠟筆。', say: 'crayon' }
      ]
    },

    /* ---------- 5. 動物 ---------- */
    {
      id: 'e5', icon: '🐯', title: 'Animals 動物',
      summary: 'dog、cat、tiger、elephant……I like…',
      lesson: [
        { t: 'words', lang: 'en', title: '動物單字', v: [{ e: '🐶', w: 'dog', m: '狗' }, { e: '🐱', w: 'cat', m: '貓' }, { e: '🐦', w: 'bird', m: '鳥' }, { e: '🐟', w: 'fish', m: '魚' }, { e: '🐰', w: 'rabbit', m: '兔子' }, { e: '🐯', w: 'tiger', m: '老虎' }, { e: '🦁', w: 'lion', m: '獅子' }, { e: '🐘', w: 'elephant', m: '大象' }, { e: '🐒', w: 'monkey', m: '猴子' }, { e: '🐻', w: 'bear', m: '熊' }, { e: '🐷', w: 'pig', m: '豬' }, { e: '🐸', w: 'frog', m: '青蛙' }] },
        { t: 'h', v: '說說喜歡的動物', p: ['<b>What animal do you like?</b>（你喜歡什麼動物？）', '<b>I like dogs.</b>（我喜歡狗。）說喜歡某一種動物時，通常用複數：dogs、cats、rabbits。'] },
        { t: 'h', v: '那是什麼？', p: '近的用 <b>this</b>，遠的用 <b>that</b>：<b>What\'s that?</b> → <b>It\'s a tiger.</b>' },
        { t: 'key', v: ['I like + 複數動物（I like cats.）', 'this 近、that 遠', 'an elephant（e 開頭用 an）'] },
        { t: 'tip', v: '去動物園時，用英文跟家人介紹看到的動物吧！' }
      ],
      quiz: [
        { q: '「elephant」是什麼動物？', opts: ['大象', '老虎', '猴子', '兔子'], ans: 0, exp: 'elephant 大象。', say: 'elephant' },
        { q: '「猴子」的英文是？', opts: ['monkey', 'rabbit', 'bear', 'lion'], ans: 0, exp: 'monkey 猴子。', say: 'monkey' },
        { q: '"What animal do you like?" 你喜歡兔子，要怎麼說？', opts: ['I like rabbits.', 'I am a rabbit.', 'It\'s a rabbit.', 'I like rabbit is.'], ans: 0, exp: 'I like + 複數：I like rabbits.', say: 'What animal do you like?' },
        { q: '指著遠方的老虎問「那是什麼？」要說？', opts: ['What\'s that?', 'What\'s this?', 'How are you?', 'What color is it?'], ans: 0, exp: '遠的用 that。', say: 'What is that?' },
        { q: '「bear」是什麼動物？', opts: ['熊', '鳥', '魚', '豬'], ans: 0, exp: 'bear 熊。', say: 'bear' },
        { q: '下列哪一個要用 an？', opts: ['elephant', 'tiger', 'lion', 'monkey'], ans: 0, exp: 'elephant 母音開頭：an elephant。', say: 'an elephant' },
        { q: '「會游泳、住在水裡、有鰭」的動物是？', opts: ['fish', 'bird', 'dog', 'lion'], ans: 0, exp: 'fish 魚。', say: 'fish' },
        { q: '「lion」是什麼動物？', opts: ['獅子', '老虎', '大象', '熊'], ans: 0, exp: 'lion 獅子；tiger 老虎。', say: 'lion' }
      ]
    },

    /* ---------- 6. 家人 ---------- */
    {
      id: 'e6', icon: '👨‍👩‍👧', title: 'Family 家人',
      summary: 'father、mother、brother、sister……Who is he?',
      lesson: [
        { t: 'words', lang: 'en', title: '家人單字', v: [{ e: '👨', w: 'father', s: 'father, dad', m: '爸爸（dad）' }, { e: '👩', w: 'mother', s: 'mother, mom', m: '媽媽（mom）' }, { e: '👦', w: 'brother', m: '哥哥／弟弟' }, { e: '👧', w: 'sister', m: '姊姊／妹妹' }, { e: '👴', w: 'grandfather', s: 'grandfather, grandpa', m: '爺爺／外公（grandpa）' }, { e: '👵', w: 'grandmother', s: 'grandmother, grandma', m: '奶奶／外婆（grandma）' }, { e: '🧒', w: 'me', m: '我' }] },
        { t: 'h', v: '介紹家人', p: ['男生用 <b>he</b>，女生用 <b>she</b>：', '<b>Who is he?</b> → <b>He\'s my father.</b>', '<b>Who is she?</b> → <b>She\'s my sister.</b>', 'This is my family.（這是我的家人。）'] },
        { t: 'key', v: ['brother 哥哥或弟弟；sister 姊姊或妹妹', '男生 he，女生 she', 'Who is he/she? → He\'s/She\'s my ___.'] },
        { t: 'tip', v: '英文的 brother 不分哥哥弟弟，要特別說可以用 big brother（哥哥）、little brother（弟弟）。' }
      ],
      quiz: [
        { q: '「mother」是誰？', opts: ['媽媽', '爸爸', '姊姊', '奶奶'], ans: 0, exp: 'mother 媽媽（mom）。', say: 'mother' },
        { q: '"Who is he?" 他是你的爸爸，要怎麼回答？', opts: ['He\'s my father.', 'She\'s my father.', 'He\'s my mother.', 'I\'m my father.'], ans: 0, exp: '男生用 he，爸爸是 father。', say: 'Who is he?' },
        { q: '"Who is she?" 她是你的妹妹，要怎麼回答？', opts: ['She\'s my sister.', 'He\'s my sister.', 'She\'s my brother.', 'She\'s my father.'], ans: 0, exp: '女生用 she，妹妹是 sister。', say: 'Who is she?' },
        { q: '「grandmother」是指誰？', opts: ['奶奶或外婆', '媽媽', '阿姨', '姊姊'], ans: 0, exp: 'grandmother ＝ grandma。', say: 'grandmother' },
        { q: '「哥哥」的英文是？', opts: ['brother', 'sister', 'father', 'grandfather'], ans: 0, exp: 'brother 哥哥或弟弟。', say: 'brother' },
        { q: '介紹「這是我的家人」要怎麼說？', opts: ['This is my family.', 'This is my father.', 'I am a family.', 'Who is she?'], ans: 0, exp: 'family 家人、家庭。', say: 'This is my family.' },
        { q: '「dad」是哪一個字的口語說法？', opts: ['father', 'mother', 'brother', 'grandfather'], ans: 0, exp: 'dad ＝ father。', say: 'dad' }
      ]
    },

    /* ---------- 7. 身體 ---------- */
    {
      id: 'e7', icon: '👃', title: 'My Body 身體',
      summary: 'head、eye、nose、mouth、hand……Touch your nose!',
      lesson: [
        { t: 'words', lang: 'en', title: '身體部位', v: [{ e: '🙂', w: 'head', m: '頭' }, { e: '👁️', w: 'eye', m: '眼睛' }, { e: '👂', w: 'ear', m: '耳朵' }, { e: '👃', w: 'nose', m: '鼻子' }, { e: '👄', w: 'mouth', m: '嘴巴' }, { e: '✋', w: 'hand', m: '手' }, { e: '💪', w: 'arm', m: '手臂' }, { e: '🦵', w: 'leg', m: '腿' }, { e: '🦶', w: 'foot', m: '腳（一隻）' }, { e: '👣', w: 'feet', m: '腳（兩隻）' }] },
        { t: 'h', v: '跟著做：Touch your …!', p: ['<b>Touch your nose!</b>（摸摸你的鼻子！）', '<b>Raise your hand!</b>（舉手！）　<b>Clap your hands!</b>（拍拍手！）', '兩個以上加 s：two eyes、two ears、two hands。腳特別：一隻 <b>foot</b>，兩隻 <b>feet</b>。'] },
        { t: 'key', v: ['eye 眼睛、ear 耳朵、nose 鼻子、mouth 嘴巴', 'one foot, two feet（不是 foots）', 'Touch your ___!'] },
        { t: 'tip', v: '和家人玩「Simon says」：「Simon says touch your ear!」說 Simon says 才要做喔！' }
      ],
      quiz: [
        { q: '「nose」是哪個部位？', opts: ['鼻子', '耳朵', '眼睛', '嘴巴'], ans: 0, exp: 'nose 鼻子。', say: 'nose' },
        { q: '老師說 "Touch your ear!"，你要摸哪裡？', opts: ['耳朵', '眼睛', '頭', '腳'], ans: 0, exp: 'ear 耳朵。', say: 'Touch your ear!' },
        { q: '「嘴巴」的英文是？', opts: ['mouth', 'mouse', 'nose', 'head'], ans: 0, exp: 'mouth 嘴巴；mouse 是老鼠。', say: 'mouth' },
        { q: '兩隻腳的英文是？', opts: ['two feet', 'two foots', 'two foot', 'two feets'], ans: 0, exp: 'foot 的複數是 feet。', say: 'two feet' },
        { q: '"Raise your hand!" 是叫你做什麼？', opts: ['舉手', '拍手', '洗手', '摸頭'], ans: 0, exp: 'raise your hand 舉手。', say: 'Raise your hand!' },
        { q: '「eye」是哪個部位？', opts: ['眼睛', '耳朵', '手臂', '腿'], ans: 0, exp: 'eye 眼睛。', say: 'eye' },
        { q: '「leg」是哪個部位？', opts: ['腿', '手', '頭', '鼻子'], ans: 0, exp: 'leg 腿。', say: 'leg' }
      ]
    },

    /* ---------- 8. 日常對話 ---------- */
    {
      id: 'e8', icon: '💬', title: 'Hello! 日常對話',
      summary: '打招呼、自我介紹、問年紀、道謝道歉、Can you…?',
      lesson: [
        { t: 'words', lang: 'en', title: '打招呼', v: [{ e: '👋', w: 'Hello!', m: '哈囉' }, { e: '🌅', w: 'Good morning!', m: '早安' }, { e: '🌞', w: 'Good afternoon!', m: '午安' }, { e: '🌆', w: 'Good evening!', m: '晚上好' }, { e: '🌙', w: 'Good night!', m: '晚安（睡前）' }, { e: '👋', w: 'Goodbye!', m: '再見' }] },
        { t: 'table', title: '常用問答', head: ['問', '答'], rows: [
          ['How are you?（你好嗎？）', 'I\'m fine, thank you.／I\'m great!'],
          ['What\'s your name?（你叫什麼名字？）', 'My name is Amy.／I\'m Amy.'],
          ['How old are you?（你幾歲？）', 'I\'m nine (years old).'],
          ['Nice to meet you.（很高興認識你。）', 'Nice to meet you, too.'],
          ['Thank you.（謝謝。）', 'You\'re welcome.（不客氣。）'],
          ['I\'m sorry.（對不起。）', 'That\'s OK.（沒關係。）'],
          ['Can you swim?（你會游泳嗎？）', 'Yes, I can.／No, I can\'t.'] ] },
        { t: 'words', lang: 'en', title: '聽聽看整句', v: [{ e: '🙂', w: 'How are you?' }, { e: '😊', w: 'I\'m fine, thank you.' }, { e: '🏷️', w: 'What\'s your name?' }, { e: '🎂', w: 'How old are you?' }, { e: '🤝', w: 'Nice to meet you.' }, { e: '🚲', w: 'Can you ride a bike?' }] },
        { t: 'key', v: ['Good night 是睡前說的，晚上見面說 Good evening', 'How old…? 問年紀；How are you? 問好', 'Thank you → You\'re welcome', 'Can you…? → Yes, I can. / No, I can\'t.'] },
        { t: 'tip', v: '回答問題時看著對方的眼睛、面帶微笑，說英文會更有自信！' }
      ],
      quiz: [
        { q: '老師問 "How are you today?" 你覺得很棒，最適合的回答是？', opts: ['I\'m great, thank you!', 'I\'m nine years old.', 'My name is Tim.', 'It is sunny.'], ans: 0, exp: 'How are you? 問你好不好。', say: 'How are you today?' },
        { q: '同學問 "Can you ride a bike?" 你會騎，要怎麼回答？', opts: ['Yes, I can.', 'No, I am not.', 'Yes, I do.', 'No, I can.'], ans: 0, exp: 'Can 問句，肯定回答 Yes, I can.', say: 'Can you ride a bike?' },
        { q: '"How old are you?" 你 9 歲，要怎麼回答？', opts: ['I\'m nine.', 'I\'m fine.', 'I\'m Amy.', 'I can.'], ans: 0, exp: 'How old 問年紀。', say: 'How old are you?' },
        { q: '別人跟你說 "Thank you."，你要回答？', opts: ['You\'re welcome.', 'Good night.', 'I\'m sorry.', 'How are you?'], ans: 0, exp: '不客氣：You\'re welcome.', say: 'Thank you.' },
        { q: '晚上睡覺前跟家人說的是？', opts: ['Good night!', 'Good morning!', 'Good afternoon!', 'Hello!'], ans: 0, exp: 'Good night 是道晚安、準備睡覺。', say: 'Good night!' },
        { q: '你不小心撞到同學，應該說？', opts: ['I\'m sorry.', 'Thank you.', 'You\'re welcome.', 'Goodbye.'], ans: 0, exp: '道歉說 I\'m sorry.', say: 'I am sorry.' },
        { q: '"What\'s your name?" 你叫 Amy，要怎麼回答？', opts: ['My name is Amy.', 'I\'m fine.', 'I\'m nine.', 'Nice to meet you.'], ans: 0, exp: '問名字，回答 My name is…', say: 'What is your name?' },
        { q: '早上到學校見到老師，要說？', opts: ['Good morning!', 'Good night!', 'Good evening!', 'Goodbye!'], ans: 0, exp: '早安 Good morning!', say: 'Good morning!' },
        { q: '"Nice to meet you." 最適合的回答是？', opts: ['Nice to meet you, too.', 'You\'re welcome.', 'I\'m sorry.', 'Yes, I can.'], ans: 0, exp: '我也很高興認識你。', say: 'Nice to meet you.' }
      ]
    }
  ]
});
