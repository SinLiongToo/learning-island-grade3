/* 英語歡樂小鎮：單字卡可按 🔊 聽美式發音（瀏覽器語音） */
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'english', name: '英語歡樂小鎮', icon: '🔤', color: '#dc2626', land: '#fca5a5',
  blurb: '發音、數字、顏色、文具、動物、家人、身體、對話、天氣、食物、動作、衣服、我的家、時間、月份、職業、交通運動、相反詞、文法、人稱與單複數、句子重組、閱讀',
  intro: '每張單字卡都可以按 🔊 聽發音，也可以按「全部唸一遍」跟著唸。大聲說出來，才學得最快！',
  units: [
    /* ---------- 1. 自然發音：短母音 ---------- */
    {
      id: 'e1', vocab: true, icon: '🔠', title: 'Phonics 短母音 a e i o u',
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
      id: 'e2', vocab: true, icon: '🔢', title: 'Numbers 數字 1–20',
      summary: 'one 到 twenty、How many…? 句型',
      lesson: [
        { t: 'words', lang: 'en', title: '1 到 10', v: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'].map((w, i) => ({ w, e: String(i + 1), m: String(i + 1) })) },
        { t: 'words', lang: 'en', title: '11 到 20', v: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'].map((w, i) => ({ w, e: String(i + 11), m: String(i + 11) })) },
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
      id: 'e3', vocab: true, icon: '🎨', title: 'Colors & Shapes 顏色和形狀',
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
      id: 'e4', vocab: true, icon: '✏️', title: 'School Things 教室文具',
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
      id: 'e5', vocab: true, icon: '🐯', title: 'Animals 動物',
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
      id: 'e6', vocab: true, icon: '👨‍👩‍👧', title: 'Family 家人',
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
      id: 'e7', vocab: true, icon: '👃', title: 'My Body 身體',
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
      id: 'e8', vocab: true, icon: '💬', title: 'Hello! 日常對話',
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
    },

/* ---------- 9. 星期與天氣 ---------- */
    {
      id: 'e9', vocab: true, icon: '🌦️', title: 'Days & Weather 星期與天氣',
      summary: 'Monday 到 Sunday；sunny、rainy……What day is it? How\'s the weather?',
      lesson: [
        { t: 'words', lang: 'en', title: '一星期七天（第一個字母要大寫）', v: [{ e: '1️⃣', w: 'Monday', m: '星期一' }, { e: '2️⃣', w: 'Tuesday', m: '星期二' }, { e: '3️⃣', w: 'Wednesday', m: '星期三' }, { e: '4️⃣', w: 'Thursday', m: '星期四' }, { e: '5️⃣', w: 'Friday', m: '星期五' }, { e: '6️⃣', w: 'Saturday', m: '星期六' }, { e: '7️⃣', w: 'Sunday', m: '星期日' }] },
        { t: 'words', lang: 'en', title: '天氣', v: [{ e: '☀️', w: 'sunny', m: '晴朗的' }, { e: '🌧️', w: 'rainy', m: '下雨的' }, { e: '☁️', w: 'cloudy', m: '多雲的' }, { e: '🌬️', w: 'windy', m: '颳風的' }, { e: '❄️', w: 'snowy', m: '下雪的' }, { e: '🥵', w: 'hot', m: '熱的' }, { e: '🥶', w: 'cold', m: '冷的' }, { e: '🌤️', w: 'warm', m: '溫暖的' }, { e: '🍃', w: 'cool', m: '涼爽的' }] },
        { t: 'table', title: '常用問答', head: ['問', '答'], rows: [['What day is it today?（今天星期幾？）', 'It\'s Friday.'], ['How\'s the weather?（天氣如何？）', 'It\'s rainy.'], ['Is it sunny today?', 'Yes, it is.／No, it isn\'t.'], ['What day is tomorrow?（明天星期幾？）', 'Tomorrow is Saturday.']] },
        { t: 'h', v: '記住順序', p: ['Sunday → Monday → Tuesday → Wednesday → Thursday → Friday → Saturday', 'Wednesday 唸起來像「Wenz-day」，中間的 d 不發音。Tuesday 和 Thursday 都是 T 開頭，很容易搞混！'] },
        { t: 'key', v: ['星期的第一個字母一定大寫', 'Tuesday 星期二；Thursday 星期四', 'sun → sunny、rain → rainy、cloud → cloudy、wind → windy', 'How\'s the weather? → It\'s ___.'] },
        { t: 'tip', v: '每天早上看窗外，用英文說一句：It\'s sunny today! 一週就記得所有天氣單字。' }
      ],
      quiz: [
        { q: '今天是 Monday，明天是星期幾？', opts: ['Tuesday', 'Thursday', 'Sunday', 'Wednesday'], ans: 0, exp: 'Monday 的下一天是 Tuesday（星期二）。', say: 'Today is Monday. What day is tomorrow?' },
        { q: '「Thursday」是星期幾？', opts: ['星期四', '星期二', '星期三', '星期五'], ans: 0, exp: 'Thursday 星期四；Tuesday 才是星期二。', say: 'Thursday' },
        { q: '"How\'s the weather?" 外面正在下雨，要怎麼回答？', opts: ['It\'s rainy.', 'It\'s Monday.', 'It\'s sunny.', 'I\'m fine.'], ans: 0, exp: '下雨的 rainy。', say: 'How is the weather?' },
        { q: '星期六和星期日叫「週末」，週末是哪兩天？', opts: ['Saturday 和 Sunday', 'Friday 和 Saturday', 'Sunday 和 Monday', 'Monday 和 Tuesday'], ans: 0, exp: 'Saturday 星期六，Sunday 星期日。' },
        { q: '下列哪一個拼寫「正確」？', opts: ['Wednesday', 'Wensday', 'Wendesday', 'Wednsday'], ans: 0, exp: 'W-e-d-n-e-s-d-a-y，中間的 d 不發音但要寫。', say: 'Wednesday' },
        { q: '"Is it sunny today?" 今天陰陰的、不是晴天，要怎麼回答？', opts: ['No, it isn\'t. It\'s cloudy.', 'Yes, it is. It\'s cloudy.', 'No, I\'m not.', 'Yes, I can.'], ans: 0, exp: '不是晴天要說 No, it isn\'t.，再說 It\'s cloudy.', say: 'Is it sunny today?' },
        { q: '"What day is it today?" 問的是什麼？', opts: ['今天星期幾', '今天天氣如何', '今天幾號', '現在幾點'], ans: 0, exp: 'What day 問星期幾。', say: 'What day is it today?' },
        { q: '星期五的前一天是星期幾？', opts: ['Thursday', 'Saturday', 'Tuesday', 'Monday'], ans: 0, exp: 'Friday 的前一天是 Thursday。' }
      ]
    },

    /* ---------- 10. 食物 ---------- */
    {
      id: 'e10', vocab: true, icon: '🍔', title: 'Food & Drinks 食物和飲料',
      summary: 'rice、bread、milk、juice……Do you like…? I\'m hungry.',
      lesson: [
        { t: 'words', lang: 'en', title: '食物 Food', v: [{ e: '🍚', w: 'rice', m: '米飯' }, { e: '🍜', w: 'noodles', m: '麵' }, { e: '🍞', w: 'bread', m: '麵包' }, { e: '🥚', w: 'egg', m: '蛋' }, { e: '🍔', w: 'hamburger', m: '漢堡' }, { e: '🍕', w: 'pizza', m: '披薩' }, { e: '🍰', w: 'cake', m: '蛋糕' }, { e: '🍪', w: 'cookie', m: '餅乾' }, { e: '🍦', w: 'ice cream', m: '冰淇淋' }, { e: '🍗', w: 'chicken', m: '雞肉' }, { e: '🐟', w: 'fish', m: '魚' }, { e: '🥗', w: 'salad', m: '沙拉' }] },
        { t: 'words', lang: 'en', title: '飲料 Drinks', v: [{ e: '🥛', w: 'milk', m: '牛奶' }, { e: '🧃', w: 'juice', m: '果汁' }, { e: '💧', w: 'water', m: '水' }, { e: '🍵', w: 'tea', m: '茶' }, { e: '🥤', w: 'soda', m: '汽水' }] },
        { t: 'table', title: '常用句子', head: ['英文', '中文'], rows: [['I\'m hungry. / I\'m thirsty.', '我肚子餓。／我口渴。'], ['Do you like pizza?', '你喜歡披薩嗎？'], ['Yes, I do. / No, I don\'t.', '喜歡。／不喜歡。'], ['What do you want?', '你想要什麼？'], ['I want some juice, please.', '我想要一些果汁，謝謝。'], ['Here you are.', '給你。']] },
        { t: 'h', v: '注意：Do you…? 要用 do 回答', p: '問句用 <b>Do</b> 開頭，回答也用 <b>do</b>：Do you like cake? → Yes, I <b>do</b>. ／ No, I <b>don\'t</b>.（不是 Yes, I can.）' },
        { t: 'key', v: ['hungry 餓（想吃東西）；thirsty 渴（想喝東西）', 'Do you like…? → Yes, I do. / No, I don\'t.', '說得禮貌一點：加上 please'] },
        { t: 'tip', v: 'hungry（餓）和 angry（生氣）只差一個字母 h，小心別寫錯！' }
      ],
      quiz: [
        { q: '"Do you like pizza?" 你很喜歡，要怎麼回答？', opts: ['Yes, I do.', 'Yes, I can.', 'Yes, I am.', 'Yes, it is.'], ans: 0, exp: 'Do 開頭的問句，用 Yes, I do. 回答。', say: 'Do you like pizza?' },
        { q: '"Do you like fish?" 你不喜歡，要怎麼回答？', opts: ['No, I don\'t.', 'No, I can\'t.', 'No, I am not.', 'No, it isn\'t.'], ans: 0, exp: '否定回答 No, I don\'t.', say: 'Do you like fish?' },
        { q: '你剛跑完步，很想喝水，要說？', opts: ['I\'m thirsty.', 'I\'m hungry.', 'I\'m angry.', 'I\'m sleepy.'], ans: 0, exp: 'thirsty 口渴。', say: 'I am thirsty.' },
        { q: '肚子咕嚕咕嚕叫，想吃東西，要說？', opts: ['I\'m hungry.', 'I\'m thirsty.', 'I\'m happy.', 'I\'m tall.'], ans: 0, exp: 'hungry 餓。', say: 'I am hungry.' },
        { q: '把東西拿給別人時說「給你」，英文是？', opts: ['Here you are.', 'Thank you.', 'You\'re welcome.', 'I\'m sorry.'], ans: 0, exp: 'Here you are. 給你。', say: 'Here you are.' },
        { q: '在早餐店想點一杯果汁，最有禮貌的說法是？', opts: ['I want some juice, please.', 'Juice!', 'Give me juice now.', 'I am juice.'], ans: 0, exp: '加上 please 比較有禮貌。', say: 'I want some juice, please.' },
        { q: '下列哪一個是「飲料」？', opts: ['milk', 'bread', 'rice', 'cake'], ans: 0, exp: 'milk 牛奶是飲料。', say: 'milk' },
        { q: '"What do you want?" 這句話的意思是？', opts: ['你想要什麼？', '你喜歡什麼？', '你叫什麼名字？', '你好嗎？'], ans: 0, exp: 'want 想要。', say: 'What do you want?' }
      ]
    },

    /* ---------- 11. 動作 ---------- */
    {
      id: 'e11', vocab: true, icon: '🏊', title: 'Actions 動作',
      summary: 'run、jump、swim、sing……I can / I can\'t；What are you doing?',
      lesson: [
        { t: 'words', lang: 'en', title: '動作單字', v: [{ e: '🏃', w: 'run', m: '跑' }, { e: '🦘', w: 'jump', m: '跳' }, { e: '🏊', w: 'swim', m: '游泳' }, { e: '🎤', w: 'sing', m: '唱歌' }, { e: '💃', w: 'dance', m: '跳舞' }, { e: '🕊️', w: 'fly', m: '飛' }, { e: '📖', w: 'read', m: '讀' }, { e: '✍️', w: 'write', m: '寫' }, { e: '🎨', w: 'draw', m: '畫畫' }, { e: '🍳', w: 'cook', m: '煮飯' }, { e: '🚶', w: 'walk', m: '走路' }, { e: '😴', w: 'sleep', m: '睡覺' }, { e: '⚽', w: 'kick', m: '踢' }, { e: '🙌', w: 'clap', m: '拍手' }] },
        { t: 'h', v: '我會／我不會：can', p: ['<b>I can swim.</b>（我會游泳。）　<b>I can\'t fly.</b>（我不會飛。）', 'can 後面的動作<b>不加 s</b>：He can run.（不是 He can runs.）', '<b>Can you dance?</b> → Yes, I can.／No, I can\'t.'] },
        { t: 'h', v: '挑戰：正在做什麼？', p: ['<b>What are you doing?</b>（你正在做什麼？）', '<b>I\'m reading.</b>（我正在讀書。）動作後面加 <b>-ing</b> 表示「正在」。', '有些字要變化：swim → swi<b>mm</b>ing、run → ru<b>nn</b>ing、dance → danc<b>ing</b>（去 e 加 ing）、write → writ<b>ing</b>。'] },
        { t: 'key', v: ['can + 動作原形：I can swim.', 'can\'t ＝ cannot（不會）', '正在做：am/is/are + 動作-ing', 'swimming、running 要多一個字母；dancing、writing 去 e'] },
        { t: 'tip', v: '玩比手畫腳：一個人做動作，另一個人用英文猜「You\'re dancing!」' }
      ],
      quiz: [
        { q: '小鳥會飛，但小狗不會。"A dog ___ fly."', opts: ['can\'t', 'can', 'is', 'do'], ans: 0, exp: '不會用 can\'t。', say: 'A dog can\'t fly.' },
        { q: '下列哪一句「正確」？', opts: ['He can run fast.', 'He can runs fast.', 'He cans run fast.', 'He can running fast.'], ans: 0, exp: 'can 後面接動作原形，不加 s 或 ing。', say: 'He can run fast.' },
        { q: '"What are you doing?" 你正在畫畫，要怎麼回答？', opts: ['I\'m drawing.', 'I can draw.', 'I like draw.', 'I\'m draw.'], ans: 0, exp: '正在做：I\'m + 動作-ing。', say: 'What are you doing?' },
        { q: '「swim」加上 ing 要怎麼寫？', opts: ['swimming', 'swiming', 'swimeing', 'swimmming'], ans: 0, exp: 'swim 短母音結尾，要重複 m 再加 ing。', say: 'swimming' },
        { q: '「dance」加上 ing 要怎麼寫？', opts: ['dancing', 'danceing', 'dancling', 'dancinge'], ans: 0, exp: '字尾是 e，先去掉 e 再加 ing。', say: 'dancing' },
        { q: '"Can you sing?" 你會唱歌，回答是？', opts: ['Yes, I can.', 'Yes, I do.', 'Yes, I am.', 'Yes, you can.'], ans: 0, exp: 'Can 問句用 can 回答。', say: 'Can you sing?' },
        { q: '「cook」是什麼意思？', opts: ['煮飯', '看書', '跳舞', '跑步'], ans: 0, exp: 'cook 煮飯、烹飪。', say: 'cook' },
        { q: '"She is ___ a book." 她正在讀書。空格要填？', opts: ['reading', 'read', 'reads', 'to read'], ans: 0, exp: 'is + 動作-ing 表示正在做。', say: 'She is reading a book.' }
      ]
    },

    /* ---------- 12. 心情與地點 ---------- */
    {
      id: 'e12', vocab: true, icon: '😊', title: 'Feelings & Places 心情與地點',
      summary: 'happy、sad、tired；school、park、zoo……How do you feel? Where are you?',
      lesson: [
        { t: 'words', lang: 'en', title: '心情 Feelings', v: [{ e: '😄', w: 'happy', m: '快樂的' }, { e: '😢', w: 'sad', m: '難過的' }, { e: '😠', w: 'angry', m: '生氣的' }, { e: '😩', w: 'tired', m: '累的' }, { e: '😨', w: 'scared', m: '害怕的' }, { e: '😴', w: 'sleepy', m: '想睡的' }, { e: '🤩', w: 'excited', m: '興奮的' }, { e: '🤒', w: 'sick', m: '生病的' }] },
        { t: 'words', lang: 'en', title: '地點 Places', v: [{ e: '🏫', w: 'school', m: '學校' }, { e: '🏠', w: 'home', m: '家' }, { e: '🌳', w: 'park', m: '公園' }, { e: '🦁', w: 'zoo', m: '動物園' }, { e: '📚', w: 'library', m: '圖書館' }, { e: '🏥', w: 'hospital', m: '醫院' }, { e: '🏖️', w: 'beach', m: '海灘' }, { e: '🛒', w: 'supermarket', m: '超市' }] },
        { t: 'table', title: '常用問答', head: ['問', '答'], rows: [['How do you feel?（你覺得怎麼樣？）', 'I feel happy.／I\'m tired.'], ['Are you OK?（你還好嗎？）', 'I\'m sick. I want to go home.'], ['Where are you?（你在哪裡？）', 'I\'m at the park.'], ['Where is Mom?（媽媽在哪裡？）', 'She\'s at the supermarket.'], ['Let\'s go to the zoo!（我們去動物園吧！）', 'OK! / Great!']] },
        { t: 'key', v: ['How do you feel? → I\'m / I feel + 心情', 'Where are you? → I\'m at the ___.', 'Let\'s go to the ___!（我們去…吧！）', 'go home（回家）不用加 the'] },
        { t: 'tip', v: '寫日記時用英文寫一句心情：Today I\'m happy because…' }
      ],
      quiz: [
        { q: '跑完 3000 公尺後覺得好累，英文說？', opts: ['I\'m tired.', 'I\'m happy.', 'I\'m angry.', 'I\'m hungry.'], ans: 0, exp: 'tired 累的。', say: 'I am tired.' },
        { q: '"Where are you?" 你在圖書館，要怎麼回答？', opts: ['I\'m at the library.', 'I\'m a library.', 'I like the library.', 'It\'s a library.'], ans: 0, exp: '在某個地方：I\'m at the ___.', say: 'Where are you?' },
        { q: '想看獅子和大象，應該去哪裡？', opts: ['the zoo', 'the library', 'the hospital', 'the supermarket'], ans: 0, exp: 'zoo 動物園。' },
        { q: '"How do you feel?" 你生病了，要怎麼回答？', opts: ['I\'m sick.', 'I\'m nine.', 'I\'m at home.', 'I\'m Tom.'], ans: 0, exp: 'sick 生病的。', say: 'How do you feel?' },
        { q: '明天要去遊樂園，心裡好期待，英文說？', opts: ['I\'m excited!', 'I\'m sad.', 'I\'m sleepy.', 'I\'m scared.'], ans: 0, exp: 'excited 興奮的。', say: 'I am excited!' },
        { q: '「我們去公園吧！」英文是？', opts: ['Let\'s go to the park!', 'Let\'s go to park the!', 'Let go the park!', 'We park go!'], ans: 0, exp: 'Let\'s go to the ___!', say: 'Let\'s go to the park!' },
        { q: '「hospital」是哪裡？', opts: ['醫院', '旅館', '學校', '超市'], ans: 0, exp: 'hospital 醫院。', say: 'hospital' },
        { q: '看鬼故事看到很害怕，英文說？', opts: ['I\'m scared.', 'I\'m excited.', 'I\'m happy.', 'I\'m thirsty.'], ans: 0, exp: 'scared 害怕的。', say: 'I am scared.' }
      ]
    },

    /* ---------- 13. 文法挑戰 ---------- */
    {
      id: 'e13', icon: '🧠', title: '文法挑戰（進階）',
      summary: 'a / an、單複數、am / is / are、he / she / it / they、this / these',
      lesson: [
        { t: 'table', title: '① a 還是 an？看「發音」', head: ['規則', '例子'], rows: [['子音開頭用 a', 'a cat、a book、a banana'], ['母音（a e i o u 的音）開頭用 an', 'an apple、an egg、an ice cream、an orange、an umbrella']] },
        { t: 'table', title: '② 名詞變複數', head: ['規則', '例子'], rows: [['大部分加 s', 'cat → cats、book → books'], ['s、x、sh、ch 結尾加 es', 'bus → buses、box → boxes、dish → dishes、peach → peaches'], ['不規則（要背）', 'foot → feet、tooth → teeth、child → children、man → men、mouse → mice'], ['單複數一樣', 'fish → fish、sheep → sheep']] },
        { t: 'table', title: '③ am / is / are', head: ['主詞', 'be 動詞', '例句'], rows: [['I', 'am', 'I am nine.'], ['you、we、they、兩個以上', 'are', 'They are my friends.'], ['he、she、it、一個人或一樣東西', 'is', 'My mom is a nurse.']] },
        { t: 'table', title: '④ 代名詞', head: ['指誰', '用', '例句'], rows: [['一個男生', 'he', 'Tom is my friend. He is tall.'], ['一個女生', 'she', 'Amy is my sister. She is cute.'], ['一隻動物或一樣東西', 'it', 'I have a dog. It is brown.'], ['很多人或東西', 'they', 'Ben and Tim are brothers. They like soccer.'], ['我和別人', 'we', 'Amy and I are classmates. We are nine.']] },
        { t: 'table', title: '⑤ this / that / these / those', head: ['', '近', '遠'], rows: [['一個', 'this（這個）', 'that（那個）'], ['很多個', 'these（這些）', 'those（那些）']], note: 'This is my pen.／These are my pens.' },
        { t: 'tip', v: '這一課的題目由電腦自動出題，每次都不一樣。做錯了不要緊，看解析再練一次！' }
      ],
      quiz: [
        { q: 'I have ___ umbrella.', opts: ['an', 'a', 'two', 'many'], ans: 0, exp: 'umbrella 是母音 u 的音開頭，用 an。', say: 'I have an umbrella.' },
        { q: 'There are three ___ in the box.', opts: ['mice', 'mouse', 'mouses', 'mices'], ans: 0, exp: 'mouse 的複數是 mice（不規則）。', say: 'There are three mice in the box.' },
        { q: 'Amy and I ___ good friends.', opts: ['are', 'am', 'is', 'be'], ans: 0, exp: 'Amy and I ＝ we，用 are。', say: 'Amy and I are good friends.' },
        { q: 'These ___ my books.', opts: ['are', 'is', 'am', 'be'], ans: 0, exp: 'These 是複數，用 are。', say: 'These are my books.' },
        { q: 'My grandpa is 70. ___ likes tea.', opts: ['He', 'She', 'It', 'They'], ans: 0, exp: 'grandpa 是男生，用 he。', say: 'My grandpa is seventy. He likes tea.' },
        { q: '下列哪一句「完全正確」？', opts: ['I have two feet.', 'I have two foots.', 'I has two feet.', 'I have two feets.'], ans: 0, exp: 'foot 的複數是 feet；I 用 have。', say: 'I have two feet.' }
      ],
      gen() {
        const { pick, mc } = window.G3;
        const t = pick(['aan', 'aan', 'plural', 'plural', 'be', 'be', 'there', 'pron', 'this']);
        if (t === 'aan') {
          const [w, art] = pick([['apple', 'an'], ['egg', 'an'], ['orange', 'an'], ['umbrella', 'an'], ['elephant', 'an'], ['ice cream', 'an'], ['owl', 'an'], ['eraser', 'an'], ['old book', 'an'], ['banana', 'a'], ['dog', 'a'], ['pencil', 'a'], ['bag', 'a'], ['cat', 'a'], ['ruler', 'a'], ['big apple', 'a'], ['red umbrella', 'a'], ['hamburger', 'a']]);
          const extra = w.includes(' ') ? `要看緊跟在後面的字「${w.split(' ')[0]}」` : `${w} 是${art === 'an' ? '母音' : '子音'}開頭`;
          return mc(`I have ___ ${w}.`, art, [art === 'an' ? 'a' : 'an'], `${extra}，所以用 ${art}。`, { keep: true, say: `I have ${art} ${w}.` });
        }
        if (t === 'plural') {
          const [s, p] = pick([['cat', 'cats'], ['box', 'boxes'], ['bus', 'buses'], ['dish', 'dishes'], ['peach', 'peaches'], ['watch', 'watches'], ['foot', 'feet'], ['tooth', 'teeth'], ['child', 'children'], ['man', 'men'], ['woman', 'women'], ['mouse', 'mice'], ['fish', 'fish'], ['sheep', 'sheep'], ['pencil', 'pencils'], ['fox', 'foxes']]);
          const n = pick(['two', 'three', 'four', 'five', 'six', 'many']);
          return mc(`「${s}」的複數：I see ${n} ___.`, p, [s + 's', s + 'es', s, p + 's'], `${s} 的複數是 ${p}。`, { say: `I see ${n} ${p}.` });
        }
        if (t === 'be') {
          const [sub, be] = pick([['I', 'am'], ['You', 'are'], ['He', 'is'], ['She', 'is'], ['It', 'is'], ['We', 'are'], ['They', 'are'], ['My mom', 'is'], ['Tom and Amy', 'are'], ['The cats', 'are'], ['My dog', 'is'], ['Mr. Lin', 'is'], ['My brother and I', 'are']]);
          const tail = pick(['happy', 'nine years old', 'in the park', 'hungry', 'at school', 'tired']);
          return mc(`${sub} ___ ${tail}.`, be, ['am', 'is', 'are'].filter(x => x !== be), `${sub} 要用 ${be}。（I → am；一個人或東西 → is；兩個以上、you → are）`, { keep: true, say: `${sub} ${be} ${tail}.` });
        }
        if (t === 'there') {
          const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
          const k = pick([0, 0, 1, 2, 4, 6, 9, 11]);
          const [sg, pl] = pick([['apple', 'apples'], ['bird', 'birds'], ['box', 'boxes'], ['child', 'children'], ['egg', 'eggs'], ['book', 'books']]);
          const be = k === 0 ? 'is' : 'are';
          return mc(`There ___ ${nums[k]} ${k === 0 ? sg : pl} on the table.`, be, [be === 'is' ? 'are' : 'is', 'am'], `${nums[k]} 是${k === 0 ? '一個，用 is' : '兩個以上，用 are'}。`, { keep: true, say: `There ${be} ${nums[k]} ${k === 0 ? sg : pl} on the table.` });
        }
        if (t === 'pron') {
          const [first, pro, rest] = pick([['Mr. Wang is my teacher.', 'He', 'is very kind'], ['Amy is my sister.', 'She', 'likes cats'], ['I have a dog.', 'It', 'is brown'], ['Ben and Tim are brothers.', 'They', 'play soccer'], ['Tom and I are classmates.', 'We', 'are nine'], ['Look at my grandma.', 'She', 'is cooking'], ['This is my new bike.', 'It', 'is blue'], ['My parents are at home.', 'They', 'are watching TV']]);
          return mc(`${first} ___ ${rest}.`, pro, ['He', 'She', 'It', 'They', 'We'].filter(x => x !== pro), `男生 he、女生 she、動物或東西 it、很多人 they、包含我 we。`, { say: `${first} ${pro} ${rest}.` });
        }
        const [zh, w, be, noun] = pick([['這一枝', 'This', 'is', 'pencil'], ['那一枝', 'That', 'is', 'pencil'], ['這些', 'These', 'are', 'pencils'], ['那些', 'Those', 'are', 'pencils'], ['這一本', 'This', 'is', 'book'], ['那些', 'Those', 'are', 'books'], ['這些', 'These', 'are', 'books'], ['那一本', 'That', 'is', 'book']]);
        return mc(`「${zh}是我的${noun.startsWith('pencil') ? '鉛筆' : '書'}」：___ ${be} my ${noun}.`, w, ['This', 'That', 'These', 'Those'].filter(x => x !== w), '近 this／these，遠 that／those；一個 this／that，很多個 these／those。', { keep: true, say: `${w} ${be} my ${noun}.` });
      }
    },

    /* ---------- 人稱與單複數 ---------- */
    {
      id: 'e24', icon: '👥', title: '人稱與單複數（專項練習）',
      summary: 'I / you / he / she / it / we / they；my / his / her；am / is / are；likes / like；cat → cats',
      lesson: [
        { t: 'table', title: '① 人稱代名詞（當主詞）', head: ['人稱', '單數（一個）', '複數（兩個以上）'], rows: [
          ['第一人稱（說話的人）', 'I 我', 'we 我們'],
          ['第二人稱（聽話的人）', 'you 你', 'you 你們'],
          ['第三人稱（別人、動物、東西）', 'he 他（男）／she 她（女）／it 它、牠', 'they 他們、它們'] ] },
        { t: 'h', v: '把名字換成代名詞', p: ['Tom → <b>he</b>　　Amy → <b>she</b>　　my cat → <b>it</b>　　the books → <b>they</b>', 'Tom and Ben → <b>they</b>　　<b>Amy and I</b> → <b>we</b>（有「我」就是 we）　　you and Ben → <b>you</b>（有「你」就是 you）'] },
        { t: 'table', title: '② 所有格（誰的）', head: ['主詞', '所有格', '例子'], rows: [['I', 'my 我的', 'my bag'], ['you', 'your 你的、你們的', 'your pencil'], ['he', 'his 他的', 'his cap'], ['she', 'her 她的', 'her dress'], ['it', 'its 牠的', 'its tail'], ['we', 'our 我們的', 'our classroom'], ['they', 'their 他們的', 'their house']], note: '名字的所有格加 \'s：Amy\'s bag（Amy 的書包）＝ her bag。' },
        { t: 'table', title: '③（挑戰）受格：放在動詞或介係詞後面', head: ['主詞', '受格', '例子'], rows: [['I', 'me', 'Help me!'], ['he', 'him', 'I like him.'], ['she', 'her', 'Look at her.'], ['we', 'us', 'Come with us.'], ['they', 'them', 'I see them.']], note: 'you 和 it 的受格不變：I love you. I like it.' },
        { t: 'table', title: '④ be 動詞跟著主詞變', head: ['主詞', 'be 動詞', '縮寫'], rows: [['I', 'am', 'I\'m'], ['he / she / it / 一個人或東西', 'is', 'he\'s、she\'s、it\'s'], ['you / we / they / 兩個以上', 'are', 'you\'re、we\'re、they\'re']] },
        { t: 'h', v: '⑤ 第三人稱單數，動詞要加 s', p: ['主詞是 <b>he、she、it 或「一個人／一樣東西」</b>時，一般動詞要加 <b>s</b>：He <b>likes</b> apples. My dog <b>runs</b> fast.', '主詞是 I、you、we、they、兩個以上時<b>不加</b>：I <b>like</b> apples. They <b>run</b> fast.', '特別的：have → <b>has</b>（He has a cat.）；go → <b>goes</b>；watch → <b>watches</b>。'] },
        { t: 'table', title: '⑥ 名詞的單數和複數', head: ['規則', '例子'], rows: [['一般加 s', 'cat → cats、toy → toys'], ['s、x、sh、ch 結尾加 es', 'bus → buses、box → boxes、dish → dishes、peach → peaches'], ['子音 ＋ y 結尾：去 y 加 ies', 'baby → babies、strawberry → strawberries、butterfly → butterflies'], ['f 結尾常改 ves', 'leaf → leaves、wolf → wolves'], ['不規則', 'man → men、woman → women、child → children、foot → feet、tooth → teeth、mouse → mice'], ['單複數同形', 'fish → fish、sheep → sheep、deer → deer']], note: 'toy、boy、day 是「母音＋y」，直接加 s：toys、boys、days。' },
        { t: 'h', v: '⑦ 整句變複數', p: ['單數：<b>This is a cat.</b>　→　複數：<b>These are cats.</b>', '單數：<b>It is a box.</b>　→　複數：<b>They are boxes.</b>', '單數：<b>There is a bird.</b>　→　複數：<b>There are three birds.</b>', '變複數時，<b>this→these、that→those、it→they、is→are</b>，<b>a／an 拿掉</b>，名詞變複數。'] },
        { t: 'key', v: ['有「我」→ we；有「你」→ you；其他人或東西 → they', 'he 他的是 his；she 她的是 her', 'I am／he is／they are', 'he、she、it、一個人 → 動詞加 s；have → has', 'baby → babies；toy → toys；child → children', 'This is a cat. → These are cats.'] },
        { t: 'tip', v: '這一課大部分題目由電腦自動出題，可以一直練。最常錯的是「he 後面的動詞忘了加 s」和「Amy and I 要用 we」，做題時特別注意！' }
      ],
      quiz: [
        { q: 'Tom and I are classmates. → ___ are classmates.', opts: ['We', 'They', 'He', 'I'], ans: 0, exp: '有「I」的一群人用 we。', say: 'We are classmates.' },
        { q: 'You and Amy are good friends. → ___ are good friends.', opts: ['You', 'They', 'We', 'She'], ans: 0, exp: '有「you」的一群人，還是用 you（你們）。', say: 'You are good friends.' },
        { q: 'This is Ben\'s bike. → This is ___ bike.', opts: ['his', 'he', 'her', 'him'], ans: 0, exp: 'Ben 是男生，他的 ＝ his。', say: 'This is his bike.' },
        { q: 'My sister ___ a cat.', opts: ['has', 'have', 'is have', 'haves'], ans: 0, exp: '一個人（第三人稱單數）用 has。', say: 'My sister has a cat.' },
        { q: 'My parents ___ coffee every morning.', opts: ['drink', 'drinks', 'drinking', 'is drink'], ans: 0, exp: 'parents 是複數，動詞不加 s。', say: 'My parents drink coffee every morning.' },
        { q: '「baby」的複數是？', opts: ['babies', 'babys', 'babyes', 'baby'], ans: 0, exp: '子音＋y：去 y 加 ies。', say: 'babies' },
        { q: '「toy」的複數是？', opts: ['toys', 'toies', 'toyes', 'toy'], ans: 0, exp: 'o 是母音，母音＋y 直接加 s。', say: 'toys' },
        { q: '把「This is an apple.」改成複數：', opts: ['These are apples.', 'These is apples.', 'This are apples.', 'These are an apples.'], ans: 0, exp: 'this→these、is→are、拿掉 an、apple→apples。', say: 'These are apples.' },
        { q: '（挑戰）I can\'t find my glasses. Can you help ___?', opts: ['me', 'I', 'my', 'mine'], ans: 0, exp: '放在動詞 help 後面，要用受格 me。', say: 'Can you help me?' },
        { q: '（挑戰）Look at the birds! I like ___.', opts: ['them', 'they', 'their', 'it'], ans: 0, exp: 'the birds 是複數，在 like 後面用受格 them。', say: 'I like them.' },
        { q: 'The dog is wagging ___ tail.', opts: ['its', 'it\'s', 'his', 'their'], ans: 0, exp: '動物的「牠的」用 its；it\'s 是 it is 的縮寫。', say: 'The dog is wagging its tail.' },
        { q: '下列哪一句「完全正確」？', opts: ['She watches TV after dinner.', 'She watch TV after dinner.', 'She watchs TV after dinner.', 'She are watching TV after dinner.'], ans: 0, exp: 'she 第三人稱單數，watch 要加 es：watches。', say: 'She watches TV after dinner.' }
      ],
      gen() {
        const { pick, shuffle, mc } = window.G3;
        const t = pick(['subj', 'subj', 'poss', 'poss', 'obj', 'be', 'be', 'verb', 'verb', 'verb', 'plural', 'plural', 'whole', 'whole']);
        const PRO = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];
        if (t === 'subj') {
          const [noun, pro, rest] = pick([['Tom', 'He', 'is tall'], ['My grandma', 'She', 'is seventy'], ['Mr. Chen', 'He', 'is a doctor'], ['Amy', 'She', 'likes music'], ['The cat', 'It', 'is sleeping'], ['My bike', 'It', 'is new'], ['Tom and Ben', 'They', 'are brothers'], ['The books', 'They', 'are on the desk'], ['My sister and I', 'We', 'are twins'], ['Amy and I', 'We', 'like pizza'], ['You and Tim', 'You', 'are late'], ['The children', 'They', 'are in the park'], ['Ms. Lin', 'She', 'is our teacher'], ['The apples', 'They', 'are red']]);
          return mc(`${noun} ${rest}. → ___ ${rest}.`, pro, shuffle(PRO.filter(x => x !== pro && x !== 'I')), `${noun} → ${pro}。（有 I 用 we；有 you 用 you；男 he、女 she、物 it、很多 they）`, { say: `${pro} ${rest}.` });
        }
        if (t === 'poss') {
          const [owner, poss, thing] = pick([['Tom\'s', 'his', 'bag'], ['Amy\'s', 'her', 'dress'], ['my dad\'s', 'his', 'car'], ['my mom\'s', 'her', 'phone'], ['Ben and Tim\'s', 'their', 'ball'], ['the dog\'s', 'its', 'bone'], ['the cat\'s', 'its', 'bed'], ['the students\'', 'their', 'classroom'], ['my grandpa\'s', 'his', 'glasses'], ['Lily\'s', 'her', 'kite']]);
          return mc(`This is ${owner} ${thing}. → This is ___ ${thing}.`, poss, shuffle(['his', 'her', 'its', 'their', 'our', 'he', 'she', 'it\'s'].filter(x => x !== poss)), `${owner.replace(/'s?$/, '')} 的 → ${poss}。`, { say: `This is ${poss} ${thing}.` });
        }
        if (t === 'obj') {
          const [pre, obj, sub, why] = pick([['I like Amy. I like', 'her', 'she', 'Amy 是女生'], ['Do you know Mr. Wang? I know', 'him', 'he', 'Mr. Wang 是男生'], ['Where are my shoes? I can\'t find', 'them', 'they', 'shoes 是複數'], ['Come and play with', 'us', 'we', '我們'], ['Please help', 'me', 'I', '我'], ['This cake is yummy. I love', 'it', 'it', '一樣東西'], ['The ducks are cute. Look at', 'them', 'they', 'ducks 是複數']]);
          return mc(`（挑戰）${pre} ___.`, obj, shuffle(['me', 'him', 'her', 'us', 'them', 'it', sub, sub === 'it' ? 'its' : sub].filter(x => x !== obj)), `${why}，放在動詞或介係詞後面用受格 ${obj}。`, { say: `${pre} ${obj}.` });
        }
        if (t === 'be') {
          const [sub, be] = pick([['I', 'am'], ['He', 'is'], ['She', 'is'], ['It', 'is'], ['We', 'are'], ['You', 'are'], ['They', 'are'], ['My brother', 'is'], ['My brothers', 'are'], ['The child', 'is'], ['The children', 'are'], ['This box', 'is'], ['These boxes', 'are'], ['Amy and Ben', 'are'], ['Mr. Lee', 'is'], ['My feet', 'are'], ['The fish', 'is']]);
          const tail = pick(['happy', 'in the classroom', 'very big', 'at home', 'hungry']);
          return mc(`${sub} ___ ${tail}.`, be, ['am', 'is', 'are'].filter(x => x !== be), `${sub} → ${be}。（I → am；一個 → is；兩個以上、you → are）`, { keep: true, say: `${sub} ${be} ${tail}.` });
        }
        if (t === 'verb') {
          const [base, s3] = pick([['like', 'likes'], ['play', 'plays'], ['eat', 'eats'], ['read', 'reads'], ['run', 'runs'], ['have', 'has'], ['go', 'goes'], ['watch', 'watches'], ['wash', 'washes'], ['swim', 'swims'], ['sing', 'sings'], ['drink', 'drinks']]);
          const obj = { like: 'apples', play: 'basketball', eat: 'breakfast', read: 'books', run: 'fast', have: 'a dog', go: 'to school', watch: 'TV', wash: 'the dishes', swim: 'every day', sing: 'well', drink: 'milk' }[base];
          const [sub, third] = pick([['He', true], ['She', true], ['My dad', true], ['Amy', true], ['The cat', true], ['I', false], ['We', false], ['They', false], ['You', false], ['My friends', false], ['Tom and I', false]]);
          const right = third ? s3 : base;
          return mc(`${sub} ___ ${obj}.`, right, [third ? base : s3, { like: 'liking', play: 'playing', eat: 'eating', read: 'reading', run: 'running', have: 'having', go: 'going', watch: 'watching', wash: 'washing', swim: 'swimming', sing: 'singing', drink: 'drinking' }[base], `is ${base}`], third ? `${sub} 是第三人稱單數，動詞要變成 ${s3}。` : `${sub} 不是第三人稱單數，動詞用原形 ${base}。`, { say: `${sub} ${right} ${obj}.` });
        }
        if (t === 'plural') {
          const [s, p, rule] = pick([['cat', 'cats', '加 s'], ['bus', 'buses', 's 結尾加 es'], ['box', 'boxes', 'x 結尾加 es'], ['dish', 'dishes', 'sh 結尾加 es'], ['peach', 'peaches', 'ch 結尾加 es'], ['baby', 'babies', '子音＋y，去 y 加 ies'], ['strawberry', 'strawberries', '子音＋y，去 y 加 ies'], ['butterfly', 'butterflies', '子音＋y，去 y 加 ies'], ['toy', 'toys', '母音＋y，直接加 s'], ['boy', 'boys', '母音＋y，直接加 s'], ['day', 'days', '母音＋y，直接加 s'], ['leaf', 'leaves', 'f 改 ves'], ['wolf', 'wolves', 'f 改 ves'], ['man', 'men', '不規則'], ['woman', 'women', '不規則'], ['child', 'children', '不規則'], ['foot', 'feet', '不規則'], ['tooth', 'teeth', '不規則'], ['mouse', 'mice', '不規則'], ['sheep', 'sheep', '單複數同形'], ['fish', 'fish', '單複數同形']]);
          const wrong = [s + 's', s + 'es', s.replace(/y$/, 'ies'), p + 's', s].filter(w => w !== p);
          return Math.random() < .5
            ? mc(`「${s}」的複數是？`, p, shuffle(wrong), `${s} → ${p}（${rule}）。`, { say: p })
            : mc(`I see two ___.（${s}）`, p, shuffle(wrong), `two 後面要用複數：${p}（${rule}）。`, { say: `I see two ${p}.` });
        }
        const [sg, pl] = pick([['This is a cat.', 'These are cats.'], ['That is a bird.', 'Those are birds.'], ['It is a box.', 'They are boxes.'], ['This is an egg.', 'These are eggs.'], ['That is a bus.', 'Those are buses.'], ['It is a baby.', 'They are babies.'], ['This is a child.', 'These are children.'], ['He is a student.', 'They are students.'], ['She is a nurse.', 'They are nurses.'], ['There is a mouse.', 'There are three mice.'], ['There is a peach.', 'There are four peaches.'], ['I am a boy.', 'We are boys.']]);
        const w = pl.split(' ');
        const fakes = [
          w.map((x, i) => i === 1 ? (x === 'are' ? 'is' : x) : x).join(' '),
          sg.replace('.', '').split(' ').map((x, i) => i === sg.split(' ').length - 1 ? pl.split(' ').pop().replace('.', '') : x).join(' ') + '.',
          pl.replace(/\w+\.$/, sg.split(' ').pop())
        ];
        return mc(`把「${sg}」改成複數：`, pl, fakes, `變複數：this→these、that→those、it/he/she→they、I→we、is/am→are、a/an 拿掉、名詞變複數。`, { say: pl });
      }
    },

    /* ---------- 14. 英文閱讀 ---------- */
    {
      id: 'e14', icon: '📗', title: 'Reading 英文閱讀（進階）',
      summary: '讀懂英文短文，回答問題',
      lesson: [
        { t: 'h', v: '讀英文短文的方法', cards: [
          { e: '👀', h: '先看問題', p: '知道要找什麼：Who（誰）、What（什麼）、Where（哪裡）、When（什麼時候）、How many（幾個）。' },
          { e: '🔍', h: '找關鍵字', p: '問題問 Where，就找 at、in、on 後面的地方。' },
          { e: '🧩', h: '不懂的字先跳過', p: '看前後句猜猜看，不一定每個字都要懂。' } ] },
        { t: 'table', title: '疑問詞', head: ['疑問詞', '問什麼', '例子'], rows: [['Who', '誰', 'Who is she? She\'s my aunt.'], ['What', '什麼', 'What is it? It\'s a kite.'], ['Where', '哪裡', 'Where is the cat? It\'s on the bed.'], ['When', '什麼時候', 'When is your birthday? It\'s in May.'], ['How many', '幾個', 'How many dogs? Two dogs.'], ['How old', '幾歲', 'How old is he? He\'s ten.']] },
        { t: 'words', lang: 'en', title: '位置介係詞', v: [{ e: '📦', w: 'in', m: '在…裡面' }, { e: '🔝', w: 'on', m: '在…上面' }, { e: '⬇️', w: 'under', m: '在…下面' }, { e: '↔️', w: 'next to', m: '在…旁邊' }, { e: '🔙', w: 'behind', m: '在…後面' }] },
        { t: 'tip', v: '每篇短文讀兩次：第一次大概看懂在說什麼，第二次對著問題找答案。' }
      ],
      quiz: [
        { passage: 'Hi! I\'m Kevin. I\'m nine years old. I have a big family. My father is a cook. My mother is a teacher. I have one sister. Her name is Lily. She is six. We have a cat. Its name is Mimi. Mimi likes to sleep on my bed.', q: 'How old is Kevin?', opts: ['nine', 'six', 'ten', 'seven'], ans: 0, exp: '第二句：I\'m nine years old.' },
        { passage: 'Hi! I\'m Kevin. I\'m nine years old. I have a big family. My father is a cook. My mother is a teacher. I have one sister. Her name is Lily. She is six. We have a cat. Its name is Mimi. Mimi likes to sleep on my bed.', q: 'Kevin 的爸爸是做什麼的？', opts: ['廚師（cook）', '老師（teacher）', '醫生（doctor）', '警察（police officer）'], ans: 0, exp: 'My father is a cook.' },
        { passage: 'Hi! I\'m Kevin. I\'m nine years old. I have a big family. My father is a cook. My mother is a teacher. I have one sister. Her name is Lily. She is six. We have a cat. Its name is Mimi. Mimi likes to sleep on my bed.', q: 'Who is Mimi?', opts: ['Kevin 家的貓', 'Kevin 的妹妹', 'Kevin 的媽媽', 'Kevin 的老師'], ans: 0, exp: 'We have a cat. Its name is Mimi.' },
        { passage: 'Hi! I\'m Kevin. I\'m nine years old. I have a big family. My father is a cook. My mother is a teacher. I have one sister. Her name is Lily. She is six. We have a cat. Its name is Mimi. Mimi likes to sleep on my bed.', q: 'Where does Mimi like to sleep?', opts: ['on Kevin\'s bed', 'under the table', 'in the kitchen', 'in the park'], ans: 0, exp: 'Mimi likes to sleep on my bed.' },
        { passage: 'Today is Saturday. It\'s sunny and warm. Amy and her brother Ben go to the park. Amy rides her bike. Ben plays with a red kite. They see five ducks in the pond. At twelve o\'clock, they are hungry. They go home and eat noodles with Mom.', q: 'What day is it today?', opts: ['Saturday', 'Sunday', 'Monday', 'Friday'], ans: 0, exp: 'Today is Saturday.' },
        { passage: 'Today is Saturday. It\'s sunny and warm. Amy and her brother Ben go to the park. Amy rides her bike. Ben plays with a red kite. They see five ducks in the pond. At twelve o\'clock, they are hungry. They go home and eat noodles with Mom.', q: 'What does Ben play with?', opts: ['a red kite', 'a bike', 'a ball', 'five ducks'], ans: 0, exp: 'Ben plays with a red kite.' },
        { passage: 'Today is Saturday. It\'s sunny and warm. Amy and her brother Ben go to the park. Amy rides her bike. Ben plays with a red kite. They see five ducks in the pond. At twelve o\'clock, they are hungry. They go home and eat noodles with Mom.', q: 'How many ducks do they see?', opts: ['five', 'four', 'twelve', 'two'], ans: 0, exp: 'They see five ducks in the pond.' },
        { passage: 'Today is Saturday. It\'s sunny and warm. Amy and her brother Ben go to the park. Amy rides her bike. Ben plays with a red kite. They see five ducks in the pond. At twelve o\'clock, they are hungry. They go home and eat noodles with Mom.', q: '為什麼他們十二點回家？', opts: ['因為肚子餓了', '因為下雨了', '因為天黑了', '因為風箏壞了'], ans: 0, exp: 'At twelve o\'clock, they are hungry.' },
        { passage: 'Look at my room. My bed is next to the window. My desk is blue. There are three books on the desk. My schoolbag is under the desk. My teddy bear is on the bed. I love my room!', q: 'Where is the schoolbag?', opts: ['under the desk', 'on the bed', 'next to the window', 'on the desk'], ans: 0, exp: 'My schoolbag is under the desk.' },
        { passage: 'Look at my room. My bed is next to the window. My desk is blue. There are three books on the desk. My schoolbag is under the desk. My teddy bear is on the bed. I love my room!', q: 'What color is the desk?', opts: ['blue', 'red', 'brown', 'white'], ans: 0, exp: 'My desk is blue.' },
        { passage: 'Look at my room. My bed is next to the window. My desk is blue. There are three books on the desk. My schoolbag is under the desk. My teddy bear is on the bed. I love my room!', q: '書桌上有什麼？', opts: ['三本書', '一隻泰迪熊', '一個書包', '一扇窗戶'], ans: 0, exp: 'There are three books on the desk.' },
        { passage: 'Look at my room. My bed is next to the window. My desk is blue. There are three books on the desk. My schoolbag is under the desk. My teddy bear is on the bed. I love my room!', q: 'Where is the bed?', opts: ['next to the window', 'under the desk', 'behind the door', 'in the kitchen'], ans: 0, exp: 'My bed is next to the window.' }
      ]
    },

/* ---------- 15. 衣服 ---------- */
    {
      id: 'e15', vocab: true, icon: '👕', title: 'Clothes 衣服',
      summary: 'shirt、pants、shoes……I\'m wearing…；Put on your coat.',
      lesson: [
        { t: 'words', lang: 'en', title: '衣服和配件', v: [{ e: '👕', w: 'T-shirt', m: 'T恤' }, { e: '👔', w: 'shirt', m: '襯衫' }, { e: '👖', w: 'pants', m: '長褲' }, { e: '🩳', w: 'shorts', m: '短褲' }, { e: '👗', w: 'dress', m: '洋裝' }, { e: '👚', w: 'skirt', m: '裙子' }, { e: '🧥', w: 'coat', m: '外套' }, { e: '🧢', w: 'cap', m: '棒球帽' }, { e: '🎩', w: 'hat', m: '帽子' }, { e: '👟', w: 'shoes', m: '鞋子' }, { e: '🧦', w: 'socks', m: '襪子' }, { e: '🧤', w: 'gloves', m: '手套' }, { e: '🧣', w: 'scarf', m: '圍巾' }, { e: '🩱', w: 'swimsuit', m: '泳衣' }] },
        { t: 'h', v: '「一雙、一條」的東西用複數', p: ['褲子、短褲、鞋子、襪子、手套都是「成對」的，英文用複數：<b>My pants are</b> blue.（不是 is）', '一件的用單數：<b>My shirt is</b> white.'] },
        { t: 'table', title: '常用句子', head: ['英文', '中文'], rows: [['What are you wearing?', '你穿著什麼？'], ['I\'m wearing a red T-shirt.', '我穿著一件紅色 T 恤。'], ['Put on your coat. It\'s cold.', '穿上外套，天氣很冷。'], ['Take off your shoes, please.', '請把鞋子脫掉。'], ['Whose cap is this? It\'s Tom\'s.', '這是誰的帽子？是 Tom 的。']] },
        { t: 'key', v: ['pants、shorts、shoes、socks 用複數：are', 'put on 穿上；take off 脫掉', 'Whose…? 問「誰的」；Tom\'s ＝ Tom 的'] },
        { t: 'tip', v: '早上換衣服時，用英文說：I\'m wearing a white shirt and black pants.' }
      ],
      quiz: [
        { q: 'My shoes ___ new.', opts: ['are', 'is', 'am', 'be'], ans: 0, exp: 'shoes 是複數（一雙），用 are。', say: 'My shoes are new.' },
        { q: 'My dress ___ pink.', opts: ['is', 'are', 'am', 'be'], ans: 0, exp: '一件洋裝，用 is。', say: 'My dress is pink.' },
        { q: '天氣很冷，媽媽說「穿上外套」，英文是？', opts: ['Put on your coat.', 'Take off your coat.', 'Wash your coat.', 'Buy a coat.'], ans: 0, exp: 'put on 穿上。', say: 'Put on your coat.' },
        { q: '進日本朋友家要脫鞋，英文說？', opts: ['Take off your shoes.', 'Put on your shoes.', 'Wear your shoes.', 'Clean your shoes.'], ans: 0, exp: 'take off 脫掉。', say: 'Take off your shoes.' },
        { q: '"Whose cap is this?" 這是 Amy 的，要怎麼回答？', opts: ['It\'s Amy\'s.', 'It\'s Amy.', 'I\'m Amy.', 'Yes, it is.'], ans: 0, exp: 'Amy\'s ＝ Amy 的。', say: 'Whose cap is this?' },
        { q: '冬天保護脖子的是？', opts: ['scarf', 'socks', 'shorts', 'cap'], ans: 0, exp: 'scarf 圍巾。', say: 'scarf' },
        { q: '去游泳要穿什麼？', opts: ['swimsuit', 'coat', 'gloves', 'scarf'], ans: 0, exp: 'swimsuit 泳衣。', say: 'swimsuit' },
        { q: '"What are you wearing?" 最適合的回答是？', opts: ['I\'m wearing a yellow T-shirt.', 'I like yellow.', 'It\'s Monday.', 'I\'m fine.'], ans: 0, exp: '問穿什麼，答 I\'m wearing…', say: 'What are you wearing?' }
      ]
    },

    /* ---------- 16. 我的家 ---------- */
    {
      id: 'e16', vocab: true, icon: '🏠', title: 'My House 我的家與位置',
      summary: 'bedroom、kitchen、sofa……in、on、under、next to、behind',
      lesson: [
        { t: 'words', lang: 'en', title: '房間 Rooms', v: [{ e: '🛏️', w: 'bedroom', m: '臥室' }, { e: '🛋️', w: 'living room', m: '客廳' }, { e: '🍳', w: 'kitchen', m: '廚房' }, { e: '🛁', w: 'bathroom', m: '浴室' }, { e: '🍽️', w: 'dining room', m: '餐廳（家裡吃飯的地方）' }, { e: '🌱', w: 'garden', m: '花園' }] },
        { t: 'words', lang: 'en', title: '家具 Furniture', v: [{ e: '🛏️', w: 'bed', m: '床' }, { e: '🛋️', w: 'sofa', m: '沙發' }, { e: '🪑', w: 'chair', m: '椅子' }, { e: '🗄️', w: 'desk', m: '書桌' }, { e: '🍽️', w: 'table', m: '桌子' }, { e: '📺', w: 'TV', m: '電視' }, { e: '🚪', w: 'door', m: '門' }, { e: '🪟', w: 'window', m: '窗戶' }, { e: '🧊', w: 'refrigerator', m: '冰箱' }, { e: '🪞', w: 'mirror', m: '鏡子' }] },
        { t: 'words', lang: 'en', title: '位置 Where?', v: [{ e: '📦', w: 'in', m: '在…裡面' }, { e: '🔝', w: 'on', m: '在…上面' }, { e: '⬇️', w: 'under', m: '在…下面' }, { e: '↔️', w: 'next to', m: '在…旁邊' }, { e: '🔙', w: 'behind', m: '在…後面' }, { e: '🔜', w: 'in front of', m: '在…前面' }] },
        { t: 'table', title: '常用問答', head: ['問', '答'], rows: [['Where is the cat?', 'It\'s under the bed.'], ['Where are my socks?', 'They\'re in the box.'], ['Where is Mom?', 'She\'s in the kitchen.'], ['Is the book on the desk?', 'Yes, it is. / No, it isn\'t.']] },
        { t: 'key', v: ['in 裡面、on 上面、under 下面', 'next to 旁邊、behind 後面、in front of 前面', '一樣東西 Where is…? It\'s…；很多樣 Where are…? They\'re…'] },
        { t: 'tip', v: '找東西時用英文問家人：Where is my eraser? 一邊找一邊練習！' }
      ],
      quiz: [
        { q: '貓躲在床底下，英文怎麼說？', opts: ['The cat is under the bed.', 'The cat is on the bed.', 'The cat is in the bed.', 'The cat is behind the bed.'], ans: 0, exp: 'under 在下面。', say: 'The cat is under the bed.' },
        { q: '媽媽正在煮飯，她最可能在哪裡？', opts: ['kitchen', 'bedroom', 'bathroom', 'garden'], ans: 0, exp: 'kitchen 廚房。', say: 'kitchen' },
        { q: '"Where are my socks?" 襪子在箱子裡，回答是？', opts: ['They\'re in the box.', 'It\'s in the box.', 'They\'re on the box.', 'I\'m in the box.'], ans: 0, exp: 'socks 是複數用 they；在裡面用 in。', say: 'Where are my socks?' },
        { q: '「在…後面」的英文是？', opts: ['behind', 'in front of', 'next to', 'under'], ans: 0, exp: 'behind 後面；in front of 前面。', say: 'behind' },
        { q: '"Is the book on the desk?" 書在書桌上，回答是？', opts: ['Yes, it is.', 'No, it isn\'t.', 'Yes, I am.', 'Yes, they are.'], ans: 0, exp: 'Is it…? → Yes, it is.', say: 'Is the book on the desk?' },
        { q: '放牛奶和蔬菜保冷的是？', opts: ['refrigerator', 'sofa', 'mirror', 'window'], ans: 0, exp: 'refrigerator 冰箱。', say: 'refrigerator' },
        { q: '一家人坐著看電視的地方通常是？', opts: ['living room', 'bathroom', 'kitchen', 'garden'], ans: 0, exp: 'living room 客廳。', say: 'living room' },
        { q: 'The lamp is ___ the bed.（檯燈在床的旁邊）', opts: ['next to', 'under', 'in', 'behind'], ans: 0, exp: 'next to 旁邊。', say: 'The lamp is next to the bed.' }
      ],
      gen() {
        const { pick, mc } = window.G3;
        const thing = pick([['cat', 'It\'s', 'is'], ['ball', 'It\'s', 'is'], ['dog', 'It\'s', 'is'], ['books', 'They\'re', 'are'], ['shoes', 'They\'re', 'are'], ['crayons', 'They\'re', 'are']]);
        const place = pick(['bed', 'table', 'box', 'sofa', 'desk', 'door', 'chair']);
        const [pre, zh] = pick([['in', '裡面'], ['on', '上面'], ['under', '下面'], ['next to', '旁邊'], ['behind', '後面'], ['in front of', '前面']]);
        const all = ['in', 'on', 'under', 'next to', 'behind', 'in front of'];
        if (Math.random() < .5) return mc(`Where ${thing[2]} the ${thing[0]}?（在 ${place} 的${zh}）→ ${thing[1]} ___ the ${place}.`, pre, all.filter(x => x !== pre).sort(() => Math.random() - .5), `${zh}用 ${pre}。`, { say: `${thing[1]} ${pre} the ${place}.` });
        const wrong = thing[1] === 'It\'s' ? 'They\'re' : 'It\'s';
        return mc(`Where ${thing[2]} the ${thing[0]}? → ___ ${pre} the ${place}.`, thing[1], [wrong, 'I\'m', 'You\'re'], `${thing[0]} 是${thing[2] === 'is' ? '一個，用 It\'s' : '很多個，用 They\'re'}。`, { say: `${thing[1]} ${pre} the ${place}.` });
      }
    },

    /* ---------- 17. 時間與作息 ---------- */
    {
      id: 'e17', vocab: true, icon: '⏰', title: 'Time & Daily Routine 時間與作息',
      summary: 'What time is it? It\'s seven thirty. get up、brush my teeth、go to bed',
      lesson: [
        { t: 'h', v: '說時間', p: ['<b>What time is it?</b>（現在幾點？）', '整點：<b>It\'s seven o\'clock.</b>（7:00）', '幾點幾分：先說「點」再說「分」：<b>It\'s seven thirty.</b>（7:30）、<b>It\'s nine fifteen.</b>（9:15）、<b>It\'s six forty-five.</b>（6:45）'] },
        { t: 'words', lang: 'en', title: '每天做的事', v: [{ e: '⏰', w: 'get up', m: '起床' }, { e: '🪥', w: 'brush my teeth', m: '刷牙' }, { e: '🧼', w: 'wash my face', m: '洗臉' }, { e: '🥞', w: 'eat breakfast', m: '吃早餐' }, { e: '🏫', w: 'go to school', m: '去上學' }, { e: '📒', w: 'do my homework', m: '寫功課' }, { e: '🛁', w: 'take a bath', m: '洗澡' }, { e: '🛌', w: 'go to bed', m: '上床睡覺' }] },
        { t: 'table', title: '一天的作息', head: ['時間', '英文句子'], rows: [['6:30', 'I get up at six thirty.'], ['7:00', 'I eat breakfast at seven o\'clock.'], ['7:30', 'I go to school at seven thirty.'], ['5:00', 'I do my homework at five o\'clock.'], ['9:00', 'I go to bed at nine o\'clock.']] },
        { t: 'key', v: ['What time is it? → It\'s ___.', '幾點用 o\'clock；幾點幾分直接說數字：seven thirty', '在幾點做某事用 at：at seven o\'clock'] },
        { t: 'tip', v: '晚上睡前用英文說出明天幾點起床：I get up at six thirty!' }
      ],
      quiz: [
        { q: '時鐘顯示 8:00，"What time is it?"', opts: ['It\'s eight o\'clock.', 'It\'s eight thirty.', 'It\'s eighteen.', 'It\'s Monday.'], ans: 0, exp: '整點用 o\'clock。', say: 'What time is it?' },
        { q: '「It\'s ten thirty.」是幾點？', opts: ['10:30', '10:03', '3:10', '10:13'], ans: 0, exp: '先說點再說分：10 點 30 分。', say: 'It\'s ten thirty.' },
        { q: '「I get up at six thirty.」意思是？', opts: ['我六點半起床。', '我六點半睡覺。', '我六點半上學。', '我六點半吃晚餐。'], ans: 0, exp: 'get up 起床。', say: 'I get up at six thirty.' },
        { q: 'I go to school ___ seven o\'clock.', opts: ['at', 'on', 'in', 'to'], ans: 0, exp: '在幾點用 at。', say: 'I go to school at seven o\'clock.' },
        { q: '睡前要「刷牙」，英文是？', opts: ['brush my teeth', 'wash my face', 'take a bath', 'get up'], ans: 0, exp: 'brush my teeth 刷牙。', say: 'brush my teeth' },
        { q: '「It\'s four forty-five.」是幾點？', opts: ['4:45', '4:40', '5:45', '4:54'], ans: 0, exp: 'forty-five ＝ 45。', say: 'It\'s four forty-five.' },
        { q: '放學回家後寫功課，英文是？', opts: ['do my homework', 'go to bed', 'eat breakfast', 'go to school'], ans: 0, exp: 'homework 功課。', say: 'do my homework' },
        { q: '時鐘顯示 9:15，下列哪一句正確？', opts: ['It\'s nine fifteen.', 'It\'s fifteen nine.', 'It\'s nine fifty.', 'It\'s nine o\'clock.'], ans: 0, exp: 'fifteen 15，fifty 50，小心別搞混。', say: 'It\'s nine fifteen.' }
      ],
      gen() {
        const { rnd, pick, mc } = window.G3;
        const H = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
        const M = { 0: 'o\'clock', 15: 'fifteen', 30: 'thirty', 45: 'forty-five', 10: 'ten', 20: 'twenty', 40: 'forty', 50: 'fifty' };
        const h = rnd(1, 12), m = pick([0, 0, 15, 30, 30, 45, 10, 20, 40, 50]);
        const say = m === 0 ? `It's ${H[h]} o'clock.` : `It's ${H[h]} ${M[m]}.`;
        const clock = `${h}:${String(m).padStart(2, '0')}`;
        const swap = { 15: 50, 50: 15, 40: 45, 45: 40, 30: 0, 0: 30, 10: 20, 20: 10 };
        const alt = mm => mm === 0 ? `It's ${H[h]} o'clock.` : `It's ${H[h]} ${M[mm]}.`;
        if (Math.random() < .5) return mc(`時鐘顯示 ${clock}，"What time is it?"`, say, [alt(swap[m]), `It's ${H[h % 12 + 1]} ${m ? M[m] : 'o\'clock'}.`, `It's ${M[m] === 'o\'clock' ? 'thirty' : M[m]} ${H[h]}.`], `先說「點」${H[h]}，再說「分」${m ? M[m] : '（整點用 o\'clock）'}。`, { say });
        return mc(`「${say}」是幾點？`, clock, [`${h}:${String(swap[m]).padStart(2, '0')}`, `${h % 12 + 1}:${String(m).padStart(2, '0')}`, `${m === 0 ? 12 : Math.min(m, 12)}:${String(h).padStart(2, '0')}`], `${say.replace('It\'s ', '')} ＝ ${clock}。`, { say });
      }
    },

    /* ---------- 18. 月份與生日 ---------- */
    {
      id: 'e18', vocab: true, icon: '🎂', title: 'Months & Birthday 月份與生日',
      summary: 'January 到 December；When is your birthday? It\'s in May.',
      lesson: [
        { t: 'words', lang: 'en', title: '十二個月（第一個字母大寫）', v: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((w, i) => ({ e: ['⛄', '🧧', '🌱', '🌸', '🌷', '🌦️', '🏖️', '🍉', '🍎', '🎃', '🍂', '🎄'][i], w, m: `${i + 1} 月` })) },
        { t: 'h', v: '問生日', p: ['<b>When is your birthday?</b>（你的生日是什麼時候？）', '<b>It\'s in May.</b>（在五月。）月份前面用 <b>in</b>。', '<b>Happy birthday!</b>（生日快樂！）　<b>How old are you now?</b> → I\'m ten.'] },
        { t: 'h', v: '四季 Seasons', p: '<b>spring</b> 春天（3～5 月）、<b>summer</b> 夏天（6～8 月）、<b>fall／autumn</b> 秋天（9～11 月）、<b>winter</b> 冬天（12～2 月）' },
        { t: 'key', v: ['月份第一個字母大寫', '在幾月用 in：in July', 'February 的 r 要記得寫：Feb-ru-ary', 'spring、summer、fall、winter'] },
        { t: 'tip', v: '把全家人的生日月份用英文寫在月曆上，就能記住所有月份了！' }
      ],
      extraWords: [{ w: 'spring', m: '春天' }, { w: 'summer', m: '夏天' }, { w: 'fall', m: '秋天' }, { w: 'winter', m: '冬天' }],
      quiz: [
        { q: '"When is your birthday?" 你的生日在八月，回答是？', opts: ['It\'s in August.', 'It\'s on August.', 'I\'m August.', 'It\'s August old.'], ans: 0, exp: '月份前用 in。', say: 'When is your birthday?' },
        { q: '一年的第一個月是？', opts: ['January', 'June', 'July', 'December'], ans: 0, exp: 'January 一月。', say: 'January' },
        { q: '聖誕節在幾月？', opts: ['December', 'November', 'October', 'September'], ans: 0, exp: '聖誕節在 12 月 December。', say: 'December' },
        { q: '「二月」的英文拼法哪一個正確？', opts: ['February', 'Febuary', 'Feburary', 'Februery'], ans: 0, exp: 'Feb-ru-ary，中間有 r。', say: 'February' },
        { q: '台灣最熱、放暑假的季節是？', opts: ['summer', 'winter', 'spring', 'fall'], ans: 0, exp: 'summer 夏天。', say: 'summer' },
        { q: '同學生日，你要對他說？', opts: ['Happy birthday!', 'Good night!', 'I\'m sorry.', 'Goodbye!'], ans: 0, exp: '生日快樂 Happy birthday!', say: 'Happy birthday!' },
        { q: 'May 的下一個月是？', opts: ['June', 'July', 'April', 'March'], ans: 0, exp: '五月之後是六月 June。', say: 'May, June' },
        { q: '「十月」的英文是？', opts: ['October', 'August', 'November', 'September'], ans: 0, exp: 'October 十月。', say: 'October' }
      ],
      gen() {
        const { rnd, mc } = window.G3;
        const M = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const i = rnd(0, 11), after = Math.random() < .6;
        const ans = M[after ? (i + 1) % 12 : (i + 11) % 12];
        return mc(`What month comes ${after ? 'after' : 'before'} ${M[i]}?（${M[i]} 的${after ? '下' : '上'}一個月）`, ans, [M[i], M[(i + 2) % 12], M[(i + 10) % 12], M[(i + 6) % 12]], `${M[i]} 是 ${i + 1} 月，${after ? '下' : '上'}一個月是 ${ans}。`, { say: `${after ? 'After' : 'Before'} ${M[i]}` });
      }
    },

    /* ---------- 19. 職業 ---------- */
    {
      id: 'e19', vocab: true, icon: '👩‍⚕️', title: 'Jobs 職業',
      summary: 'teacher、doctor、nurse、police officer……What does he do?',
      lesson: [
        { t: 'words', lang: 'en', title: '職業單字', v: [{ e: '🧑‍🏫', w: 'teacher', m: '老師' }, { e: '👨‍⚕️', w: 'doctor', m: '醫生' }, { e: '👩‍⚕️', w: 'nurse', m: '護理師' }, { e: '👮', w: 'police officer', m: '警察' }, { e: '🧑‍🚒', w: 'firefighter', m: '消防員' }, { e: '🧑‍🌾', w: 'farmer', m: '農夫' }, { e: '🧑‍🍳', w: 'cook', m: '廚師' }, { e: '🚌', w: 'bus driver', m: '公車司機' }, { e: '🧑‍✈️', w: 'pilot', m: '機師' }, { e: '👨‍🔧', w: 'mechanic', m: '技師' }, { e: '🧑‍🎨', w: 'artist', m: '藝術家' }, { e: '🎤', w: 'singer', m: '歌手' }, { e: '📮', w: 'mail carrier', m: '郵差' }, { e: '🧑‍💼', w: 'clerk', m: '店員' }] },
        { t: 'table', title: '常用問答', head: ['問', '答'], rows: [['What do you want to be?（你長大想做什麼？）', 'I want to be a doctor.'], ['What does your father do?（你爸爸做什麼工作？）', 'He\'s a farmer.'], ['Is she a nurse?', 'Yes, she is. / No, she isn\'t.']] },
        { t: 'key', v: ['職業前面加 a／an：a teacher、an artist', 'I want to be a ___.（我想當…）', 'What does he/she do? → He\'s/She\'s a ___.'] },
        { t: 'tip', v: 'artist 是母音開頭，要說 an artist 喔！' }
      ],
      quiz: [
        { q: '在醫院幫病人看病、開藥的是？', opts: ['doctor', 'farmer', 'pilot', 'singer'], ans: 0, exp: 'doctor 醫生。', say: 'doctor' },
        { q: '開飛機的人是？', opts: ['pilot', 'bus driver', 'mechanic', 'cook'], ans: 0, exp: 'pilot 機師。', say: 'pilot' },
        { q: '"What do you want to be?" 你想當老師，回答是？', opts: ['I want to be a teacher.', 'I am a teacher now.', 'I want a teacher.', 'I like teacher.'], ans: 0, exp: 'want to be 想成為。', say: 'What do you want to be?' },
        { q: 'She is ___ artist.', opts: ['an', 'a', 'two', 'the a'], ans: 0, exp: 'artist 母音開頭，用 an。', say: 'She is an artist.' },
        { q: '"What does your mother do?" 媽媽是護理師，回答是？', opts: ['She\'s a nurse.', 'He\'s a nurse.', 'She\'s nurse.', 'I\'m a nurse.'], ans: 0, exp: '媽媽用 she，職業前加 a。', say: 'What does your mother do?' },
        { q: '火災時來救火的是？', opts: ['firefighter', 'police officer', 'clerk', 'farmer'], ans: 0, exp: 'firefighter 消防員。', say: 'firefighter' },
        { q: '在田裡種稻子、種菜的人是？', opts: ['farmer', 'singer', 'pilot', 'doctor'], ans: 0, exp: 'farmer 農夫。', say: 'farmer' },
        { q: '送信、送包裹到你家的是？', opts: ['mail carrier', 'mechanic', 'cook', 'nurse'], ans: 0, exp: 'mail carrier 郵差。', say: 'mail carrier' }
      ]
    },

    /* ---------- 20. 運動與交通 ---------- */
    {
      id: 'e20', vocab: true, icon: '⚽', title: 'Sports & Transportation 運動與交通',
      summary: 'basketball、soccer；bus、MRT、train……How do you go to school?',
      lesson: [
        { t: 'words', lang: 'en', title: '運動 Sports', v: [{ e: '🏀', w: 'basketball', m: '籃球' }, { e: '⚽', w: 'soccer', m: '足球' }, { e: '⚾', w: 'baseball', m: '棒球' }, { e: '🏸', w: 'badminton', m: '羽毛球' }, { e: '🏓', w: 'table tennis', m: '桌球' }, { e: '🏐', w: 'volleyball', m: '排球' }, { e: '🤸', w: 'jump rope', m: '跳繩' }] },
        { t: 'words', lang: 'en', title: '交通工具 Transportation', v: [{ e: '🚌', w: 'bus', m: '公車' }, { e: '🚗', w: 'car', m: '汽車' }, { e: '🚕', w: 'taxi', m: '計程車' }, { e: '🛵', w: 'scooter', m: '機車' }, { e: '🚲', w: 'bike', m: '腳踏車' }, { e: '🚆', w: 'train', m: '火車' }, { e: '🚇', w: 'MRT', m: '捷運' }, { e: '✈️', w: 'plane', m: '飛機' }, { e: '🚢', w: 'ship', m: '大船' }] },
        { t: 'table', title: '常用問答', head: ['問', '答'], rows: [['Let\'s play basketball!（我們來打籃球吧！）', 'OK! / Sounds great!'], ['What sport do you like?', 'I like baseball.'], ['How do you go to school?（你怎麼去上學？）', 'I go to school by bus.／I walk to school.'], ['How does your dad go to work?', 'He goes to work by MRT.']] },
        { t: 'key', v: ['play + 球類運動：play soccer（不加 the）', '搭交通工具用 by：by bus、by car、by MRT', '走路去：walk to school（不是 by walk）'] },
        { t: 'tip', v: '注意：「走路上學」要說 I walk to school.，不能說 by walk 喔！' }
      ],
      quiz: [
        { q: '"How do you go to school?" 你搭公車，回答是？', opts: ['I go to school by bus.', 'I go to school on bus.', 'I go to school by a bus.', 'I bus to school.'], ans: 0, exp: '搭交通工具用 by，後面不加 a。', say: 'How do you go to school?' },
        { q: '你每天走路上學，英文是？', opts: ['I walk to school.', 'I go to school by walk.', 'I go to school by foot walk.', 'I walking school.'], ans: 0, exp: '走路要說 walk to school。', say: 'I walk to school.' },
        { q: '「我們來踢足球吧！」英文是？', opts: ['Let\'s play soccer!', 'Let\'s play the soccer!', 'Let\'s soccer play!', 'Let\'s do soccer!'], ans: 0, exp: 'play + 球類，不加 the。', say: 'Let\'s play soccer!' },
        { q: '「羽毛球」的英文是？', opts: ['badminton', 'baseball', 'basketball', 'volleyball'], ans: 0, exp: 'badminton 羽毛球。', say: 'badminton' },
        { q: '在台北，地底下跑的快速大眾運輸是？', opts: ['MRT', 'plane', 'ship', 'taxi'], ans: 0, exp: 'MRT 捷運。', say: 'M R T' },
        { q: '要出國去日本，可以搭什麼？', opts: ['plane', 'bike', 'scooter', 'bus'], ans: 0, exp: 'plane 飛機。', say: 'plane' },
        { q: '"What sport do you like?" 最適合的回答是？', opts: ['I like basketball.', 'I like by bus.', 'I like Monday.', 'I like red.'], ans: 0, exp: '問喜歡什麼運動。', say: 'What sport do you like?' },
        { q: 'My dad goes to work ___ car.', opts: ['by', 'on', 'in a', 'with'], ans: 0, exp: 'by car 開車、搭車。', say: 'My dad goes to work by car.' }
      ]
    },

    /* ---------- 21. 相反詞 ---------- */
    {
      id: 'e21', vocab: true, icon: '↕️', title: 'Opposites 相反詞（形容詞）',
      summary: 'big / small、tall / short、fast / slow、old / new / young',
      lesson: [
        { t: 'table', title: '常見相反詞', head: ['英文', '中文', '相反', '中文'], rows: [
          ['big', '大的', 'small', '小的'], ['tall', '高的', 'short', '矮的'], ['long', '長的', 'short', '短的'], ['fast', '快的', 'slow', '慢的'],
          ['hot', '熱的', 'cold', '冷的'], ['old', '舊的', 'new', '新的'], ['old', '老的', 'young', '年輕的'], ['happy', '快樂的', 'sad', '難過的'],
          ['clean', '乾淨的', 'dirty', '髒的'], ['full', '飽的、滿的', 'hungry', '餓的'], ['heavy', '重的', 'light', '輕的'], ['open', '開著的', 'closed', '關著的'] ] },
        { t: 'words', lang: 'en', title: '聽聽看', v: [{ e: '🐘', w: 'big', m: '大的' }, { e: '🐭', w: 'small', m: '小的' }, { e: '🦒', w: 'tall', m: '高的' }, { e: '🐇', w: 'fast', m: '快的' }, { e: '🐢', w: 'slow', m: '慢的' }, { e: '👶', w: 'young', m: '年輕的' }, { e: '🧼', w: 'clean', m: '乾淨的' }, { e: '🐷', w: 'dirty', m: '髒的' }, { e: '🏋️', w: 'heavy', m: '重的' }, { e: '🪶', w: 'light', m: '輕的' }] },
        { t: 'h', v: '形容詞放哪裡？', p: ['放在名詞<b>前面</b>：a <b>big</b> elephant、a <b>slow</b> turtle。', '放在 is／are <b>後面</b>：The elephant is <b>big</b>. The turtles are <b>slow</b>.'] },
        { t: 'key', v: ['short 有兩個意思：矮的（↔ tall）、短的（↔ long）', 'old 有兩個意思：舊的（↔ new）、老的（↔ young）', '形容詞放在名詞前，或 is/are 後'] },
        { t: 'tip', v: '找一找家裡的東西，用英文說出兩個相反的形容：My bag is big. My pencil case is small.' }
      ],
      quiz: [
        { q: '「fast」的相反詞是？', opts: ['slow', 'big', 'tall', 'new'], ans: 0, exp: 'fast 快 ↔ slow 慢。', say: 'fast, slow' },
        { q: '長頸鹿很高，大象很大。"The giraffe is ___."', opts: ['tall', 'short', 'slow', 'small'], ans: 0, exp: 'tall 高的。', say: 'The giraffe is tall.' },
        { q: '「old」和哪一個字可以是相反詞？', opts: ['new 或 young', 'big', 'fast', 'happy'], ans: 0, exp: '舊的 ↔ new；老的 ↔ young。', say: 'old, new, young' },
        { q: '「The rope is short.」這裡的 short 最可能是什麼意思？', opts: ['短的', '矮的', '小的', '慢的'], ans: 0, exp: '繩子用「短」，人才用「矮」。', say: 'The rope is short.' },
        { q: '下列哪一句的形容詞位置正確？', opts: ['I have a big dog.', 'I have a dog big.', 'I big have a dog.', 'I have big a dog.'], ans: 0, exp: '形容詞放在名詞前面。', say: 'I have a big dog.' },
        { q: '吃了很多東西，肚子撐撐的，英文說？', opts: ['I\'m full.', 'I\'m hungry.', 'I\'m empty.', 'I\'m light.'], ans: 0, exp: 'full 飽的 ↔ hungry 餓的。', say: 'I am full.' },
        { q: '「heavy」的相反詞是？', opts: ['light', 'dark', 'tall', 'clean'], ans: 0, exp: 'heavy 重 ↔ light 輕。', say: 'heavy, light' },
        { q: '小豬在泥巴裡打滾，身體很髒。"The pig is ___."', opts: ['dirty', 'clean', 'young', 'fast'], ans: 0, exp: 'dirty 髒的。', say: 'The pig is dirty.' }
      ],
      gen() {
        const { pick, shuffle, mc } = window.G3;
        const P = [['big', 'small'], ['tall', 'short'], ['long', 'short'], ['fast', 'slow'], ['hot', 'cold'], ['new', 'old'], ['young', 'old'], ['happy', 'sad'], ['clean', 'dirty'], ['heavy', 'light'], ['open', 'closed'], ['full', 'hungry']];
        const [a, b] = pick(P);
        const [x, y] = Math.random() < .5 ? [a, b] : [b, a];
        const pool = shuffle([...new Set(P.flat())].filter(w => w !== x && w !== y && !P.some(p => p.includes(x) && p.includes(w))));
        return mc(`「${x}」的相反詞是哪一個？`, y, pool, `${x} ↔ ${y}。`, { say: x });
      }
    },

    /* ---------- 22. 句子重組 ---------- */
    {
      id: 'e22', icon: '🧩', title: 'Sentence Puzzle 句子重組（進階）',
      summary: '把打散的英文字排成正確的句子',
      lesson: [
        { t: 'h', v: '英文句子的順序', p: ['英文的基本順序是：<b>誰 ＋ 做什麼／是什麼 ＋ 其他</b>。', 'I ＋ like ＋ apples.　She ＋ is ＋ my sister.　We ＋ play ＋ basketball ＋ after school.'] },
        { t: 'table', title: '問句的順序', head: ['類型', '順序', '例子'], rows: [['Yes/No 問句（be 動詞）', 'Is／Are ＋ 誰 ＋ …？', 'Is she your mom?'], ['Yes/No 問句（can）', 'Can ＋ 誰 ＋ 動作？', 'Can you swim?'], ['Yes/No 問句（do）', 'Do ＋ 誰 ＋ 動作？', 'Do you like cats?'], ['疑問詞問句', '疑問詞 ＋ is／are／do ＋ …？', 'Where is my bag?']] },
        { t: 'h', v: '時間和地點放後面', p: '「在學校」「放學後」「在星期天」通常放在句子最後：I read books <b>in the library</b>. We go to the park <b>on Sunday</b>.' },
        { t: 'key', v: ['直述句：誰 ＋ 動作 ＋ 其他', '問句把 is／are／can／do 放最前面', '疑問詞（What、Where、How）放問句第一個', '句子第一個字大寫，最後加句號或問號'] },
        { t: 'tip', v: '這一課由電腦自動出題。先找出「誰」，再找「動作」，剩下的放後面，就排得出來！' }
      ],
      quiz: [
        { q: '把字排成正確的句子：like / I / bananas', opts: ['I like bananas.', 'Like I bananas.', 'Bananas I like.', 'I bananas like.'], ans: 0, exp: '誰（I）＋ 動作（like）＋ 東西。', say: 'I like bananas.' },
        { q: '把字排成正確的問句：you / can / swim', opts: ['Can you swim?', 'You can swim?', 'Swim can you?', 'Can swim you?'], ans: 0, exp: '問句把 can 放最前面。', say: 'Can you swim?' },
        { q: '把字排成正確的問句：is / where / cat / the', opts: ['Where is the cat?', 'Is where the cat?', 'The cat where is?', 'Where the cat is?'], ans: 0, exp: '疑問詞 Where 放第一個，再放 is。', say: 'Where is the cat?' },
        { q: '把字排成正確的句子：play / we / after school / soccer', opts: ['We play soccer after school.', 'We after school play soccer.', 'Play we soccer after school.', 'Soccer we play after school.'], ans: 0, exp: '時間（after school）放最後。', say: 'We play soccer after school.' }
      ],
      gen() {
        const { pick, shuffle, mc } = window.G3;
        const S = [['I', 'have', 'two', 'brothers', '.'], ['She', 'is', 'my', 'teacher', '.'], ['We', 'like', 'to', 'sing', '.'], ['My', 'dog', 'is', 'very', 'cute', '.'], ['They', 'are', 'in', 'the', 'park', '.'], ['Do', 'you', 'like', 'apples', '?'], ['Can', 'he', 'ride', 'a', 'bike', '?'], ['Where', 'are', 'my', 'shoes', '?'], ['What', 'color', 'is', 'it', '?'], ['How', 'old', 'are', 'you', '?'], ['I', 'go', 'to', 'school', 'by', 'bus', '.'], ['He', 'can', 'play', 'baseball', '.'], ['Is', 'this', 'your', 'pencil', '?'], ['My', 'mom', 'is', 'in', 'the', 'kitchen', '.'], ['I', 'get', 'up', 'at', 'seven', '.'], ['There', 'are', 'five', 'birds', 'in', 'the', 'tree', '.'], ['What', 'time', 'is', 'it', '?'], ['Amy', 'is', 'wearing', 'a', 'red', 'dress', '.'], ['Let\'s', 'go', 'to', 'the', 'zoo', '!'], ['I', 'want', 'to', 'be', 'a', 'doctor', '.']];
        const s = pick(S);
        const words = s.slice(0, -1), end = s[s.length - 1];
        const join = ws => { const t = ws.join(' '); return t.charAt(0).toUpperCase() + t.slice(1) + end; };
        const lower = w => (w === 'I' || w === 'Amy' || w === 'Let\'s') ? w : w.toLowerCase();
        const right = join(words);
        const wrongs = new Set();
        for (let g = 0; wrongs.size < 3 && g < 60; g++) {
          const w = join(shuffle(words.map(lower)));
          if (w !== right) wrongs.add(w);
        }
        return mc(`把字排成正確的句子：${shuffle(words.map(lower)).join(' / ')}`, right, [...wrongs], `正確順序：${right}`, { say: right });
      }
    },

    /* ---------- 23. 英文閱讀 2 ---------- */
    {
      id: 'e23', icon: '📘', title: 'Reading 2 英文閱讀（挑戰）',
      summary: '更長的英文短文：日記、邀請卡、動物介紹',
      lesson: [
        { t: 'h', v: '閱讀挑戰的小技巧', p: ['文章變長了，先看<b>標題和第一句</b>，猜猜文章在說什麼。', '看到數字、星期、時間、地點，先用筆圈起來，題目最常考這些。', '有些問題要「想一想」：文章沒有直接寫，但可以從線索推出來。'] },
        { t: 'words', lang: 'en', title: '閱讀會遇到的字', v: [{ e: '📔', w: 'diary', m: '日記' }, { e: '💌', w: 'invite', m: '邀請' }, { e: '🎉', w: 'party', m: '派對' }, { e: '🐧', w: 'penguin', m: '企鵝' }, { e: '🐻‍❄️', w: 'polar bear', m: '北極熊' }, { e: '🌊', w: 'ocean', m: '海洋' }, { e: '🧊', w: 'ice', m: '冰' }, { e: '😋', w: 'delicious', m: '美味的' }] },
        { t: 'tip', v: '讀完後試著用中文說說看文章大意，能說出來就代表真的看懂了！' }
      ],
      quiz: [
        { passage: 'Sunday, May 12\nToday is Mother\'s Day. I get up at six o\'clock. My brother and I make a card for Mom. I draw flowers on it, and my brother writes "We love you!" Dad cooks noodles for lunch. They are delicious. In the afternoon, we go to the beach. Mom is very happy. I\'m tired now, but it\'s a great day.', q: 'What day is it?', opts: ['Sunday', 'Saturday', 'Monday', 'Friday'], ans: 0, exp: '日記第一行：Sunday, May 12。' },
        { passage: 'Sunday, May 12\nToday is Mother\'s Day. I get up at six o\'clock. My brother and I make a card for Mom. I draw flowers on it, and my brother writes "We love you!" Dad cooks noodles for lunch. They are delicious. In the afternoon, we go to the beach. Mom is very happy. I\'m tired now, but it\'s a great day.', q: '卡片上的字是誰寫的？', opts: ['哥哥（弟弟）', '我', '爸爸', '媽媽'], ans: 0, exp: 'my brother writes "We love you!"' },
        { passage: 'Sunday, May 12\nToday is Mother\'s Day. I get up at six o\'clock. My brother and I make a card for Mom. I draw flowers on it, and my brother writes "We love you!" Dad cooks noodles for lunch. They are delicious. In the afternoon, we go to the beach. Mom is very happy. I\'m tired now, but it\'s a great day.', q: 'Who cooks lunch?', opts: ['Dad', 'Mom', 'My brother', 'I'], ans: 0, exp: 'Dad cooks noodles for lunch.' },
        { passage: 'Sunday, May 12\nToday is Mother\'s Day. I get up at six o\'clock. My brother and I make a card for Mom. I draw flowers on it, and my brother writes "We love you!" Dad cooks noodles for lunch. They are delicious. In the afternoon, we go to the beach. Mom is very happy. I\'m tired now, but it\'s a great day.', q: 'Where do they go in the afternoon?', opts: ['the beach', 'the zoo', 'the park', 'school'], ans: 0, exp: 'In the afternoon, we go to the beach.' },
        { passage: 'Sunday, May 12\nToday is Mother\'s Day. I get up at six o\'clock. My brother and I make a card for Mom. I draw flowers on it, and my brother writes "We love you!" Dad cooks noodles for lunch. They are delicious. In the afternoon, we go to the beach. Mom is very happy. I\'m tired now, but it\'s a great day.', q: '寫日記的人現在覺得怎麼樣？', opts: ['很累，但很開心', '很生氣', '肚子很餓', '很害怕'], ans: 0, exp: 'I\'m tired now, but it\'s a great day.' },
        { passage: 'Dear Kevin,\nPlease come to my birthday party!\nDay: Saturday, July 20\nTime: 2:00 p.m. to 5:00 p.m.\nPlace: My house, No. 8, Park Road\nWe can play games, eat cake, and swim in the pool. Please bring your swimsuit!\nYour friend,\nMia', q: 'Who is the party for?', opts: ['Mia', 'Kevin', 'Kevin\'s mom', 'Park Road'], ans: 0, exp: '寫卡片的是 Mia，是她的生日派對（my birthday party）。' },
        { passage: 'Dear Kevin,\nPlease come to my birthday party!\nDay: Saturday, July 20\nTime: 2:00 p.m. to 5:00 p.m.\nPlace: My house, No. 8, Park Road\nWe can play games, eat cake, and swim in the pool. Please bring your swimsuit!\nYour friend,\nMia', q: '派對一共辦幾個小時？', opts: ['3 小時', '2 小時', '5 小時', '7 小時'], ans: 0, exp: '從下午 2 點到 5 點，共 3 小時。' },
        { passage: 'Dear Kevin,\nPlease come to my birthday party!\nDay: Saturday, July 20\nTime: 2:00 p.m. to 5:00 p.m.\nPlace: My house, No. 8, Park Road\nWe can play games, eat cake, and swim in the pool. Please bring your swimsuit!\nYour friend,\nMia', q: 'Kevin 去派對要帶什麼？', opts: ['泳衣', '蛋糕', '遊戲機', '外套'], ans: 0, exp: 'Please bring your swimsuit!' },
        { passage: 'Dear Kevin,\nPlease come to my birthday party!\nDay: Saturday, July 20\nTime: 2:00 p.m. to 5:00 p.m.\nPlace: My house, No. 8, Park Road\nWe can play games, eat cake, and swim in the pool. Please bring your swimsuit!\nYour friend,\nMia', q: 'Mia 的生日最可能在哪個季節？', opts: ['summer', 'winter', 'spring', 'fall'], ans: 0, exp: 'July 七月是夏天，而且可以游泳。' },
        { passage: 'Penguins are birds, but they can\'t fly. They can swim very well. They use their wings like flippers in the water. Penguins eat fish. Most penguins live in the south, near the cold ocean. Their bodies are black and white. Baby penguins are gray and soft. Polar bears live in the north, so polar bears and penguins don\'t meet!', q: 'Can penguins fly?', opts: ['No, they can\'t.', 'Yes, they can.', 'Yes, they do.', 'No, they aren\'t.'], ans: 0, exp: 'they can\'t fly.' },
        { passage: 'Penguins are birds, but they can\'t fly. They can swim very well. They use their wings like flippers in the water. Penguins eat fish. Most penguins live in the south, near the cold ocean. Their bodies are black and white. Baby penguins are gray and soft. Polar bears live in the north, so polar bears and penguins don\'t meet!', q: '企鵝寶寶是什麼顏色？', opts: ['灰色（gray）', '黑白色', '黃色', '藍色'], ans: 0, exp: 'Baby penguins are gray and soft.' },
        { passage: 'Penguins are birds, but they can\'t fly. They can swim very well. They use their wings like flippers in the water. Penguins eat fish. Most penguins live in the south, near the cold ocean. Their bodies are black and white. Baby penguins are gray and soft. Polar bears live in the north, so polar bears and penguins don\'t meet!', q: '為什麼北極熊和企鵝不會碰面？', opts: ['一個住北邊、一個住南邊', '因為企鵝會飛走', '因為北極熊不會游泳', '因為牠們是好朋友'], ans: 0, exp: 'Polar bears live in the north… penguins live in the south.' },
        { passage: 'Penguins are birds, but they can\'t fly. They can swim very well. They use their wings like flippers in the water. Penguins eat fish. Most penguins live in the south, near the cold ocean. Their bodies are black and white. Baby penguins are gray and soft. Polar bears live in the north, so polar bears and penguins don\'t meet!', q: 'What do penguins eat?', opts: ['fish', 'grass', 'bananas', 'ice'], ans: 0, exp: 'Penguins eat fish.' }
      ]
    }
  ]
});
