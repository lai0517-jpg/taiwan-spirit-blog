export type FieldNoteStatus = 'fact' | 'documented' | 'oral' | 'rumor';

export type FieldNoteEntry = {
  title: string;
  status: FieldNoteStatus;
  statusLabel: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  imageStatus?: 'needed' | 'ready';
  dataStatus?: 'structured' | 'needsCoordinates' | 'needsArticle';
  lat?: number;
  lng?: number;
  relatedPostUrl?: string;
  sourceRefs?: string[];
};

export type FieldNoteSection = {
  title: string;
  entries: FieldNoteEntry[];
};

export type FieldNotePlace = {
  slug: string;
  title: string;
  englishTitle: string;
  county: string;
  regionSlugs: string[];
  sourceFile: string;
  summary: string;
  sections: FieldNoteSection[];
};

export function getFieldNoteEntryId(place: FieldNotePlace, sectionIndex: number, entryIndex: number) {
  return `${place.slug}-${sectionIndex + 1}-${entryIndex + 1}`;
}

export function getFieldNoteEntryImagePath(place: FieldNotePlace, sectionIndex: number, entryIndex: number) {
  return `/taiwan-spirit-blog/assets/images/field-notes/${place.slug}/${getFieldNoteEntryId(place, sectionIndex, entryIndex)}.jpg`;
}

export function getFieldNoteEntryImageStatus(entry: FieldNoteEntry) {
  return entry.imageStatus ?? (entry.image ? 'ready' : 'needed');
}

export function getFieldNoteEntryDataStatus(entry: FieldNoteEntry) {
  return entry.dataStatus ?? 'structured';
}

export const fieldNotePlaces: FieldNotePlace[] = [
  {
    slug: "miaoli-sanyi",
    title: "苗栗三義",
    englishTitle: "Miaoli Sanyi",
    county: "苗栗縣",
    regionSlugs: ["northwest-hakka-hills"],
    sourceFile: "資料參考_References/地區資料_Regions/台灣靈格_三義鶯歌_民間傳說增補版_離線網頁.html",
    summary: "以三叉河、火炎山、舊山線、客庄伯公、石母信仰、鯉魚潭傳說與火炎山生態為核心的地方田野資料。",
    sections: [
      {
        title: "地名地景",
        entries: [
          {
            title: "三叉河／三義",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "打哪叭溪與水尾溪（舊名打木溪）匯成西湖溪，呈三叉狀，形成「三叉河」舊名；1920年設三叉庄，1953年改稱三義鄉。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-1-1.jpg",
            imageAlt: "苗栗三義三叉河地景的田野參考圖",
            imageStatus: "ready",
          },
          {
            title: "火炎山",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "礫岩紅土臺地經大安溪切割、侵蝕與崩塌，形成礫石惡地；1986年公告自然保留區。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-1-2.jpg",
            imageAlt: "苗栗三義火炎山紅土礫岩惡地地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "魚藤坪／龍騰",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "龍騰舊名魚藤坪；魚藤既是地方植物利用，也被納入制服鯉魚精的地名傳說。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-1-3.jpg",
            imageAlt: "苗栗三義魚藤坪與龍騰山谷藤本植物地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "舊山線與龍騰斷橋",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "魚藤坪斷橋為日治時期磚拱橋遺構，1907年完成，1935年地震重創，1999年再受損。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-1-4.jpg",
            imageAlt: "苗栗三義龍騰斷橋磚拱橋遺構田野參考圖",
            imageStatus: "ready",
          },
          {
            title: "雙連潭、拐子湖與坑谷地名",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "三義老地名常以山、崠、崎、坑、湖、潭、坪、壢、角、溝結尾，直接記錄地形、產業或自然狀態。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-1-5.jpg",
            imageAlt: "苗栗三義潭湖坑谷與丘陵農地地景參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "歷史與族群",
        entries: [
          {
            title: "打哪叭社與巴宰族",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "三義北部曾有平埔族打哪叭社活動，南部鯉魚潭附近與巴宰族移住範圍相關。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-2-1.jpg",
            imageAlt: "苗栗三義打哪叭社與巴宰族相關地景及田野調查資料參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/mountain-ancestor/",
          },
          {
            title: "伯公壟等史前遺址",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "鯉魚潭水庫地區曾發現多處史前遺址、石器與陶片；年代與文化層仍須依正式考古報告理解。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-2-2.jpg",
            imageAlt: "苗栗三義伯公壟等史前遺址考古田野參考圖",
            imageStatus: "ready",
          },
          {
            title: "清代拓墾與墾號",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "乾隆年間起漢人進入鯉魚潭、雙連潭、拐子湖、魚藤坪；19世紀墾號推進墾殖、製腦、製材與街庄。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-2-3.jpg",
            imageAlt: "苗栗三義清代拓墾與墾號文獻地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "拓墾敘事的立場",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "早期文獻常從漢人墾民、隘防與衝突角度敘述原住民族；收錄時保留原文脈絡，不視為唯一族群史。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-2-4.jpg",
            imageAlt: "苗栗三義拓墾敘事來源比較與田野資料參考圖",
            imageStatus: "ready",
          },
          {
            title: "三叉神社與皇民化",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "日治時期三叉庄曾設神社；寺廟整理與皇民化也影響五穀宮及地方祭祀。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-2-5.jpg",
            imageAlt: "苗栗三義三叉神社與皇民化歷史地景參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "宗教與民間信仰",
        entries: [
          {
            title: "三義五穀宮",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "主祀神農大帝／五穀先帝，與農業、醫藥、拓墾安全、疫病與聚落平安相連。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-3-1.jpg",
            imageAlt: "苗栗三義五穀宮與農業供品信仰參考圖",
            imageStatus: "ready",
          },
          {
            title: "伯公信仰系統",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "地方調查曾記錄約138處伯公廟或祠，包含神像、神牌、文字石、自然石、木牌與樹下石棚。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-3-2.jpg",
            imageAlt: "苗栗三義客庄伯公祠與樹下石棚信仰參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/tudigong-bogong/",
          },
          {
            title: "石公與石母祠",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "《三義鄉志》將石母祠列為獨立信仰系統；石頭被認作護佑孩童、地方與家庭的神性存在。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-3-3.jpg",
            imageAlt: "苗栗三義石公與石母祠自然石信仰參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "天后宮、關聖宮與佛寺",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "地方另有媽祖、關聖帝君、觀音及九華山大興善寺等信仰，不宜把三義宗教只縮成五穀宮與伯公。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-3-4.jpg",
            imageAlt: "苗栗三義多元廟宇與佛寺宗教地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "基督教與天主教",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "《三義鄉志》另有基督教教會及天主教堂章節，顯示地方宗教並非只有民間信仰。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-3-5.jpg",
            imageAlt: "苗栗三義地方基督教與天主教教堂地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "做齋、經懺與法事戲",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "地方做齋結合佛教經懺、喪葬科儀及戲劇，可見遊獄、打血盆、破輪、斬畜、目連救母、打城與面具演出。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-3-6.jpg",
            imageAlt: "苗栗三義做齋經懺與法事戲儀式器物參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "民間神明",
        entries: [
          {
            title: "神農大帝／五穀爺",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "五穀宮主神，護佑五穀、農業、醫藥、地方平安；神牌、令旗與令印另有皇民化時期保存故事。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-4-1.jpg",
            imageAlt: "苗栗三義神農大帝與五穀藥草供品神像參考圖",
            imageStatus: "ready",
          },
          {
            title: "伯公",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "守庄頭、田地、水邊、道路、橋頭與山區工作地；人口遷移後亦形成多尊伯公合祀。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-4-2.jpg",
            imageAlt: "苗栗三義田邊道路橋頭伯公祠參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/tudigong-bogong/",
          },
          {
            title: "石母娘",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "中埔石母祠地方傳述中，石母娘被說成李梅香老姑婆，奉派到地方護佑；此為乩示與信仰版本，不作人物史。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-4-3.jpg",
            imageAlt: "苗栗三義石母娘護童認契信仰供品參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "吳王爺",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "雙潭吳氏家族與地方口述中的王爺神，流傳下潭玩水與顯現巨人真身等神蹟。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-4-4.jpg",
            imageAlt: "苗栗三義潭邊吳王爺與地方口述顯化參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/temples/wangye/",
          },
          {
            title: "劉錫姑娘",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "義潭橋附近古墓附著的女性孤魂與靈驗敘事；墓碑可查，殉情與護佑賭徒為地方口述。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-4-5.jpg",
            imageAlt: "苗栗三義義潭橋附近劉錫姑娘古墓與潭邊地景參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "地方傳說",
        entries: [
          {
            title: "鯉魚潭鯉魚精",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "深潭巨鯉修煉成精擾亂居民；風水師教人在魚藤坪種魚藤，借關刀山之形斬藤，使毒汁入潭制服鯉魚精。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-5-1.jpg",
            imageAlt: "苗栗三義鯉魚潭巨鯉魚精與魚藤傳說顯化參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/mountain-water/",
          },
          {
            title: "劉錫姑娘投潭",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "相傳清光緒年間女子等待離去或遇海難的丈夫，最終投義潭橋下深潭；後衍生墓前祈求與賭徒還願故事。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-5-2.jpg",
            imageAlt: "苗栗三義劉錫姑娘水邊魂影與義潭橋口傳記憶參考圖",
            imageStatus: "ready",
          },
          {
            title: "勝興九虎穴",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "車站周圍山勢被說成九虎；梁柱米字、屋簷箭形與鋸齒裝飾被附會為八卦鎮煞與虎口。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-5-3.jpg",
            imageAlt: "苗栗三義勝興九虎穴山勢虎形顯化參考圖",
            imageStatus: "ready",
          },
          {
            title: "黃南球「痾屎嚇番」",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "拓墾口述稱以竹筒製作巨大糞便，使對方誤認營中有巨人；另一版本連結吳王爺巨人顯形。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-5-4.jpg",
            imageAlt: "苗栗三義黃南球拓墾口述巨人錯覺與竹筒道具參考圖",
            imageStatus: "ready",
          },
          {
            title: "五穀宮神牌藏閣樓",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "皇民化期間，神農與關聖帝君神牌被藏於導善堂閣樓，令旗與令印由廟祝保存，日後迎回。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-5-5.jpg",
            imageAlt: "苗栗三義五穀宮神牌令旗藏於廟內閣樓的保存故事參考圖",
            imageStatus: "ready",
          },
          {
            title: "大旱與神農降責",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "地方信眾把禁止祭祀後的大旱解釋為神農大帝不滿、降責地方；此為神蹟敘事，不是氣象因果判定。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-5-6.jpg",
            imageAlt: "苗栗三義乾旱田地與神農信仰祭拜記憶參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "山林精怪與怪談",
        entries: [
          {
            title: "王爺潭水中顯形",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "雙潭口述稱吳王爺會進入潭中玩水，居民可見；王爺潭地名也被連結到此說。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-6-1.jpg",
            imageAlt: "苗栗三義王爺潭水中顯形與潭邊信仰參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/temples/wangye/",
          },
          {
            title: "巨人王爺",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "吳氏家族口述稱王爺曾顯現約兩層樓高真身，並被用來補充巨人糞便傳說。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-6-2.jpg",
            imageAlt: "苗栗三義兩層樓高巨人王爺口述顯化參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/temples/wangye/",
          },
          {
            title: "石母護童與認契",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "客家石母信仰常與孩童健康、認石母作契母及地方護佑相連；三義個別祠宇版本應分別記錄。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-6-3.jpg",
            imageAlt: "苗栗三義石母護童與認契供品參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "伯公與山林無形眾生",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "地方文史把伯公描述成人與山林在地神靈、無形眾生溝通的中介，反映入山與動土的敬畏。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-6-4.jpg",
            imageAlt: "苗栗三義山林入口伯公祠與入山敬畏信仰參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/tudigong-bogong/",
          },
          {
            title: "火炎山火龍、山妖",
            status: "rumor",
            statusLabel: "地方傳聞／待訪",
            summary: "目前未找到具名耆老或地方志支持固定火龍、山妖版本；若現場訪談取得，可列入口傳待訪紀錄。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-6-5.jpg",
            imageAlt: "苗栗三義火炎山火龍雲影與山妖待訪傳聞參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "生態植物動物",
        entries: [
          {
            title: "火炎山植物調查規模",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "礫石惡地植群調查記錄84科175屬240種維管束植物：原生220種、特有9種、歸化18種、栽培2種；包含喬木75、灌木47、木質藤本25、草質藤本20及草本73種。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-1.jpg",
            imageAlt: "苗栗三義火炎山植物調查樣區與植群多樣性參考圖",
            imageStatus: "ready",
          },
          {
            title: "代表喬灌木與蕨類",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "正式資料列有馬尾松、相思樹、楓香、烏臼、大頭茶、杜鵑，以及臺灣桫欏、筆筒樹、東方狗脊蕨、稜果榕、密花苧麻、水冬瓜、曼陀羅與杜若等。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-2.jpg",
            imageAlt: "苗栗三義火炎山代表喬灌木與蕨類植群參考圖",
            imageStatus: "ready",
          },
          {
            title: "馬尾松天然族群與林相變化",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "馬尾松是保留區重要保護對象；松材線蟲經松斑天牛傳播後族群衰退，現今林冠多由相思樹構成，另見小梗木薑子、大頭茶及峭壁上的馬尾松更新。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-3.jpg",
            imageAlt: "苗栗三義火炎山馬尾松更新與林相變化參考圖",
            imageStatus: "ready",
          },
          {
            title: "魚藤",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "根部含魚毒成分，傳統上可用於毒魚；在鯉魚精傳說中成為制服水怪的植物。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-4.jpg",
            imageAlt: "苗栗三義魚藤溪邊生育地與植物利用參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/plants/rattan/",
          },
          {
            title: "哺乳類：保留區直接紀錄",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "調查與自動相機直接記錄臺灣鼴鼠、赤腹松鼠、鼬獾及臺灣獼猴；管理計畫另整理石虎的訪談與路殺線索。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-5.jpg",
            imageAlt: "苗栗三義火炎山保留區哺乳類自動相機調查參考圖",
            imageStatus: "ready",
          },
          {
            title: "哺乳類：三義周邊丘陵紀錄",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "鄰近三義、苑裡的淺山相機研究另記錄白鼻心、食蟹獴、麝香貓及石虎。這些屬周邊資料，不等同每一種都在保留區核心現勘出現。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-6.jpg",
            imageAlt: "苗栗三義周邊丘陵哺乳類自動相機與足跡調查參考圖",
            imageStatus: "ready",
          },
          {
            title: "猛禽與遷徙鳥",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "火炎山名錄包含紅隼、大冠鷲、灰面鵟鷹、松雀鷹與鳳頭蒼鷹；灰面鵟鷹於春季北返時可利用山區氣流盤旋、停棲或覓食。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-7.jpg",
            imageAlt: "苗栗三義火炎山猛禽與遷徙鳥類觀察參考圖",
            imageStatus: "ready",
          },
          {
            title: "林地與草灌鳥類",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "正式名錄另列臺灣山鷓鴣、竹雞、綠鳩、臺灣藍鵲、樹鵲、五色鳥、小啄木、臺灣畫眉、白耳畫眉、紋翼畫眉、山紅頭、黑枕藍鶲、紅尾伯勞及多種燕、鶇、鶺鴒。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-8.jpg",
            imageAlt: "苗栗三義火炎山林地與草灌鳥類棲地參考圖",
            imageStatus: "ready",
          },
          {
            title: "兩棲、爬蟲與溪谷魚類",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "調查記錄澤蛙、日本樹蛙、麗紋石龍子、斯文豪氏攀蜥與赤斑吻鰕虎；主要出現在溪谷、積水或林緣微棲地，不代表火炎山是大型濕地。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-9.jpg",
            imageAlt: "苗栗三義火炎山兩棲爬蟲與溪谷魚類微棲地調查參考圖",
            imageStatus: "ready",
          },
          {
            title: "蝴蝶",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "調查曾記錄9科32種，另有較長名錄；代表種包括青帶鳳蝶、紅紋鳳蝶、烏鴉鳳蝶、黃鳳蝶、石牆蝶、紅蛺蝶、琉璃蛺蝶、黑脈樺斑蝶、青斑蝶、琉球青斑蝶與臺灣波紋蛇目蝶。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-10.jpg",
            imageAlt: "苗栗三義火炎山蝴蝶草灌棲地調查參考圖",
            imageStatus: "ready",
          },
          {
            title: "其他昆蟲與蜘蛛",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "正式資料記錄八星虎甲蟲、赤翅蝗、臺灣大蝗、稻蝗、姬蜻蜓、高翔蜻蜓、長腳胡蜂、角蟬、星椿象、黃腹鹿子蛾，以及金蛛、人面蜘蛛等。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-11.jpg",
            imageAlt: "苗栗三義火炎山其他昆蟲與蜘蛛紅土林緣調查參考圖",
            imageStatus: "ready",
          },
          {
            title: "谷地濕潤微棲地",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "保留區內可區分礫石流、峭壁、闊葉林與谷地濕潤環境；谷地可見水黽、蜻蜓、蝗蟲、蛙類、石龍子及鰕虎等，性質與大漢溪河岸水鳥棲地不同。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/miaoli-sanyi/miaoli-sanyi-7-12.jpg",
            imageAlt: "苗栗三義火炎山谷地濕潤微棲地調查參考圖",
            imageStatus: "ready",
          }
        ],
      }
    ],
  },
  {
    slug: "new-taipei-yingge",
    title: "新北鶯歌",
    englishTitle: "New Taipei Yingge",
    county: "新北市",
    regionSlugs: ["north-basin-river-mouth"],
    sourceFile: "資料參考_References/地區資料_Regions/台灣靈格_三義鶯歌_民間傳說增補版_離線網頁.html",
    summary: "以鶯歌石、尖山、碧龍宮龜公石、陶業聚落、土牛溝、八股媽與大漢溪周邊生態為核心的地方田野資料。",
    sections: [
      {
        title: "地名地景",
        entries: [
          {
            title: "鶯歌／鶯歌石",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "地名曾見鸚哥石、鷹哥石、鶯哥石等寫法，核心連結北側山坡形似巨鳥的岩石。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-1-1.jpg",
            imageAlt: "新北鶯歌鶯歌石與大漢溪地景參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "尖山／尖山堆",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "位於西南側，海拔約386.4公尺，形似倒懸扇子；土壤、砂土與黏土資源和早期陶業相關。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-1-2.jpg",
            imageAlt: "新北鶯歌尖山與陶土資源地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "碧龍山／石灰坑",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "北側丘陵地景，碧龍宮與龜公石信仰位於其間，可眺望大漢溪與尖山。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-1-3.jpg",
            imageAlt: "新北鶯歌碧龍山石灰坑與大漢溪眺望地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "大漢溪與鶯歌溪",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "大漢溪影響交通、聚落與產業；鶯歌溪為支流排水，市區部分河段已高度渠道化。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-1-4.jpg",
            imageAlt: "新北鶯歌大漢溪與鶯歌溪水系地景參考圖",
            imageStatus: "ready",
          },
          {
            title: "土牛溝遺跡",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "清代以土溝與土丘構成漢番界線；地方耆老回憶日治時期部分溝段已成排水與戲水空間。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-1-5.jpg",
            imageAlt: "新北鶯歌土牛溝遺跡與排水地景參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/mountain-ancestor/",
          }
        ],
      },
      {
        title: "歷史與族群",
        entries: [
          {
            title: "龜崙社活動範圍",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "漢人入墾前，鶯歌與平埔族龜崙社活動範圍相關；龜崙族與凱達格蘭族的分類，學界仍有語言學上的區辨。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-2-1.jpg",
            imageAlt: "新北鶯歌龜崙社活動範圍文獻與地景參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/mountain-ancestor/",
          },
          {
            title: "土牛溝與漢番界線",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "清乾隆年間設置土牛溝作為漢人與平埔族土地界線，現多已消失，只剩少量遺跡線索。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-2-2.jpg",
            imageAlt: "新北鶯歌土牛溝與漢番界線歷史資料參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/mountain-ancestor/",
          },
          {
            title: "行政沿革",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "清代至日治初期見鶯歌石庄；1920年為鶯歌庄，1940年升格鶯歌街，戰後為鶯歌鎮，後改制為鶯歌區。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-2-3.jpg",
            imageAlt: "新北鶯歌行政沿革歷史資料參考圖",
            imageStatus: "ready",
          },
          {
            title: "陶業兩百年",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "19世紀初移民帶入製陶技術，20世紀逐步產業化；地方黏土、燃料、交通、家族窯場與外來技術共同形成陶都。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-2-4.jpg",
            imageAlt: "新北鶯歌陶業兩百年與窯場工作空間參考圖",
            imageStatus: "ready",
          },
          {
            title: "古窯、煙囪與煤礦",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "鶯歌曾有蛇窯、四角窯、隧道窯、老煙囪與煤礦等產業地景；現存遺構是窯業轉型的重要證據。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-2-5.jpg",
            imageAlt: "新北鶯歌古窯煙囪與煤礦產業遺構參考圖",
            imageStatus: "ready",
          },
          {
            title: "鄭成功北上問題",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "鄭成功炮擊鶯歌石與尖山駐軍缺乏史實依據；但作為地方流傳故事仍完整收錄。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-2-6.jpg",
            imageAlt: "新北鶯歌鄭成功北上問題地方傳說核對參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "宗教與民間信仰",
        entries: [
          {
            title: "碧龍宮／龜公廟",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "以龜形自然石為核心，尊為龜公、八卦祖師；廟內亦奉祀觀音、媽祖與關聖帝君。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-3-1.jpg",
            imageAlt: "新北鶯歌碧龍宮龜公廟與龜形自然石信仰參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "宏德宮",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "主祀孫臏真人，屬歷史人物神格化、兵法祖師與道法傳說系統。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-3-2.jpg",
            imageAlt: "新北鶯歌宏德宮孫臏真人信仰場域參考圖",
            imageStatus: "ready",
          },
          {
            title: "鶯歌福德宮",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "被地方資料稱為歷史悠久的跨里土地公廟，並有遶境、演戲酬神與乞龜活動。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-3-3.jpg",
            imageAlt: "新北鶯歌福德宮土地公信仰與乞龜活動參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/tudigong-bogong/",
          },
          {
            title: "迎尪公",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "東南部各里在正月土地公慶典中迎請尪公看戲與遶境；中秋亦演平安戲祝壽。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-3-4.jpg",
            imageAlt: "新北鶯歌迎尪公祭典與看戲遶境參考圖",
            imageStatus: "ready",
          },
          {
            title: "八股媽祭典",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "觀音佛祖信仰分為鶯歌、同慶、二橋、二甲、南靖、永昌、大溪中庄、尖山八股，輪值選爐主。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-3-5.jpg",
            imageAlt: "新北鶯歌八股媽祭典與觀音佛祖信仰圈參考圖",
            imageStatus: "ready",
          },
          {
            title: "大墓公祭典",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "鶯歌數處大墓公與無主孤墳、舊鐵路工程或地方事故記憶相連，形成萬善同歸祭祀。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-3-6.jpg",
            imageAlt: "新北鶯歌大墓公祭典與萬善同歸信仰參考圖",
            imageStatus: "ready",
          }
        ],
      },
      {
        title: "民間神明",
        entries: [
          {
            title: "龜公／八卦祖師",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "龜形靈石因背部似八卦而受奉祀；搬不動、拭土發光、治病與問事靈驗皆屬信仰起源故事。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-4-1.jpg",
            imageAlt: "新北鶯歌龜公八卦祖師龜形靈石信仰參考圖",
            imageStatus: "ready",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "孫臏真人",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "宏德宮主神，被尊為兵法與謀略祖師；鬥法、撒豆成兵等屬跨地域演義傳說。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-4-2.jpg",
            imageAlt: "新北鶯歌孫臏真人兵法祖師信仰參考圖",
            imageStatus: "ready",
          },
          {
            title: "八股媽",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "地方對八股觀音佛祖信仰的俗稱，祭祀圈跨越多個傳統聚落。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-4-3.jpg",
            imageAlt: "新北鶯歌八股媽觀音佛祖信仰圈參考圖",
            imageStatus: "ready",
          },
          {
            title: "尪公",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "地方迎神與看戲祭典中的神明稱呼，遶境範圍反映傳統泉州移民聚落。",
            image: "/taiwan-spirit-blog/assets/images/field-notes/new-taipei-yingge/new-taipei-yingge-4-4.jpg",
            imageAlt: "新北鶯歌尪公迎神看戲祭典參考圖",
            imageStatus: "ready",
          },
          {
            title: "龜媽石",
            status: "rumor",
            statusLabel: "地方傳聞／待訪",
            summary: "地方轉述稱1950年代尖山埔另發現龜形石，被附會為龜公配偶，並有尋物靈驗說；現存位置與原始廟志待確認。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "大墓公／萬善同歸",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "祭祀無主遺骨與地方事故亡者，不是單一人格神，卻是鶯歌重要的陰祠信仰。",
          }
        ],
      },
      {
        title: "地方傳說",
        entries: [
          {
            title: "鶯歌石吐霧／食人",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "怪石吐出霧氣或瘴氣，使旅人迷失；部分版本稱會吞食路人。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "巨鳥遭炮擊或射殺",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "另一版本稱巨鳥襲擊軍隊，被炮火或箭矢擊中後化為岩石；施擊者多附會鄭成功。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "尖山草鞋泥成山",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "相傳軍隊刮下草鞋泥土，累積成尖山；區公所明示無歷史記載。",
          },
          {
            title: "尖山白馬與水銀",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "地方傳說兩匹白馬常偷吃稻米，被居民圍捕後逃入尖山消失，地面隨後流出水銀。",
          },
          {
            title: "龜公石搬不動",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "務農者欲移石卻無法搬動，清理後發現龜形與八卦紋，遂認為神靈顯化；後衍生治病、問事與還願版本。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "大墓公由來版本",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "地方把大墓公與無主孤墳遷葬、舊鐵路工程及列車事故記憶相連；不同地點的版本不可混為同一事件。",
          }
        ],
      },
      {
        title: "山林精怪與怪談",
        entries: [
          {
            title: "巨鳥與靈石系統",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "鶯歌最穩定的怪異敘事是鳥形怪石、龜形靈石，以及吐霧、石化、搬不動與顯靈。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "鶯歌石孔洞與小神像",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "石體可見自然孔洞，地方走讀提及部分孔洞後來置入小型神像；自然地質與後設奉祀應分列。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "尖山白馬消失",
            status: "oral",
            statusLabel: "民間傳說／口耳相傳",
            summary: "白馬偷吃作物、遭追捕後遁入山體，再以水銀痕跡顯現，是鶯歌現有來源中具體的山怪式傳說。",
          },
          {
            title: "龜媽尋物靈驗",
            status: "rumor",
            statusLabel: "地方傳聞／待訪",
            summary: "轉述稱龜媽石特別能協助尋找失物；目前仍缺完整原始廟志與現址確認。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/stone-uncle/",
          },
          {
            title: "窯鬼、水鬼與山妖匿名說法",
            status: "rumor",
            statusLabel: "地方傳聞／待訪",
            summary: "尚未找到具名耆老、廟志或地方志支持固定窯鬼、鶯歌溪水鬼、牛灶坑女鬼等版本，暫列待訪，不寫成既定傳統。",
            relatedPostUrl: "/taiwan-spirit-blog/posts/monsters/water-ghost/",
          }
        ],
      },
      {
        title: "生態植物動物",
        entries: [
          {
            title: "都市、山區與河岸分區",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "老街及市區溪段、鶯歌石與碧龍山次生林、大漢溪河岸是不同環境，物種不可混列。",
          },
          {
            title: "山區步道林相",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "鶯歌山區步道調查描述低海拔次生林與廢耕地演替：樟、榕、楠木及林下藤本、蕨類之外，也保留老茶樹、柑橘、油桐、相思樹與竹類等經濟植物。",
          },
          {
            title: "先驅樹木與灌叢植物",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "步道記錄五節芒、血桐、白匏子、野桐、構樹、食茱萸、大頭茶、野牡丹、燈稱花、魯花樹、臺灣澤蘭、野薑花及羅氏鹽膚木等。",
          },
          {
            title: "竹、藤與蕨類細項",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "調查列有四方竹、長枝竹、烏腳綠、包籜矢竹、臺灣矢竹；藤本及蕨類包括細梗絡石、串鼻龍、酸藤、魚藤、石葦、抱樹石葦、腎蕨、細柄雙蓋蕨與烏毛蕨。",
          },
          {
            title: "榕類與果實樹木",
            status: "documented",
            statusLabel: "文獻／地方信仰紀錄",
            summary: "步道名錄包含雀榕、稜果榕、水同木、菲律賓榕、澀葉榕，以及刺葉桂櫻、軟毛柿、水冬瓜、懸鉤子、紅子莢蒾與灰木等。",
          },
          {
            title: "東門溪現勘鳥類",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "東門溪河道與鳳鳴滯洪池工程現勘名錄記錄五色鳥、紅尾伯勞、大卷尾、樹鵲、喜鵲、家燕、白頭翁、綠繡眼及灰鶺鴒。",
          },
          {
            title: "鶯歌水邊可確認的水鳥",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "三鶯水資源回收中心位於鶯歌館前路；新北市政府記錄園區水池可見白鷺鷥與環頸鴴。這是鶯歌點位紀錄，不是整條大漢溪的推定名錄。",
          },
          {
            title: "周邊鳥類與猛禽文獻盤點",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "東門溪工程周邊文獻盤點整理64種鳥，含黃嘴角鴞、大冠鷲、紅尾伯勞、黑頭白䴉及八哥等保育類；此為三鶯線與鶯歌廠等周邊既有資料，應與當次現勘9種分開閱讀。",
          },
          {
            title: "哺乳類",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "東門溪現勘直接記錄東亞家蝠；周邊文獻盤點共10種，列有小黃腹鼠、臺灣鼴鼠、鼬獾、大赤鼯鼠與臺灣葉鼻蝠等特有亞種，但不等同全部在滯洪池工址同次出現。",
          },
          {
            title: "兩棲與爬蟲",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "東門溪現勘記錄澤蛙、拉都希氏赤蛙、紅耳龜與無疣蝎虎；周邊資料另含褐樹蛙、斯文豪氏赤蛙、斯文豪氏攀蜥、蓬萊草蜥、過山刀、黃口攀蜥及臺灣中國石龍子。",
          },
          {
            title: "蝴蝶與蜻蛉",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "東門溪現勘記錄大鳳蝶、臺灣紋白蝶、亮色黃蝶、沖繩小灰蝶、埔里琉璃小灰蝶；周邊文獻另列短腹幽蟌、青帶鳳蝶、烏鴉鳳蝶、石牆蝶、豹紋蝶、紫斑蝶及多種灰蝶、弄蝶。",
          },
          {
            title: "水域與底棲生物的資料邊界",
            status: "fact",
            statusLabel: "史實／正式調查",
            summary: "東門溪會議紀錄指出工址水域以常見耐污染魚類為主；周邊盤點才列臺灣石賓、粗首馬口鱲、明潭吻鰕虎、短臀擬鱨與假鋸齒米蝦。兩者不可合寫成同一次現場調查。",
          },
          {
            title: "百年榕樹群",
            status: "rumor",
            statusLabel: "地方傳聞／待訪",
            summary: "登山紀錄提及山區多株老榕樹，但數量、樹齡與是否具有祭祀故事仍待官方名冊或地方訪談確認。",
          }
        ],
      }
    ],
  }
];

export function getFieldNotesByRegion(regionSlug: string) {
  return fieldNotePlaces.filter((place) => place.regionSlugs.includes(regionSlug));
}
