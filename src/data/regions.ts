export type TaiwanSpiritRegion = {
  slug: string;
  title: string;
  englishTitle: string;
  shortTitle: string;
  area: string;
  counties: string[];
  description: string;
  storySummary: string;
  storyFocus: string[];
  aliases?: string[];
};

export type TaiwanRegionGroup = {
  id: string;
  title: string;
  englishTitle: string;
  summary: string;
  regionSlugs: string[];
};

export const taiwanSpiritRegions: TaiwanSpiritRegion[] = [
  {
    slug: 'north-basin-river-mouth',
    title: '北部盆地・河口靈格區',
    englishTitle: 'Northern Basin and River Mouth Region',
    shortTitle: '北部盆地・河口',
    area: '北部',
    counties: ['台北', '新北', '基隆', '桃園北段', '淡水河流域'],
    description: '以盆地、河口、港口與都市廟境為核心，串連媽祖、城隍、水域禁忌、都市傳說與北部山腳地景。',
    storySummary: '北部盆地的故事主軸來自淡水河系、港口聚落與城鎮廟境。河口媽祖、霞海城隍、艋舺與大稻埕的商路信仰，會和鶯歌陶土、石頭顯化、水域禁忌互相串起來，形成都市、河流、山腳交界的靈格網絡。',
    storyFocus: ['淡水河水域禁忌', '港口媽祖與商路守護', '城隍與城市陰陽秩序', '鶯歌石與陶土地景', '北部山腳精怪'],
  },
  {
    slug: 'northwest-hakka-hills',
    title: '西北丘陵・客庄古道靈格區',
    englishTitle: 'Northwest Hakka Hills and Old Trails Region',
    shortTitle: '西北丘陵・客庄古道',
    area: '北中交界',
    counties: ['桃園南段', '新竹', '苗栗', '台三線客庄'],
    description: '以丘陵、客庄、伯公、水圳、古道與山邊聚落為主，適合連結土地信仰、客庄作物與山林精怪。',
    storySummary: '西北丘陵以客庄伯公、義民信仰、水圳與古道為核心。三義、龍騰、火炎山與鯉魚潭的田野節點，會放在丘陵、溪谷、鐵道與聚落開墾記憶之中，讓石母、山神、水精與地方守護者能對到實際地景。',
    storyFocus: ['客庄伯公與義民故事', '三義火炎山與石母', '龍騰斷橋與鐵道記憶', '鯉魚潭水域顯化', '台三線丘陵作物'],
  },
  {
    slug: 'central-river-terrace-clay',
    title: '中部河階・陶土靈格區',
    englishTitle: 'Central River Terrace and Clay Region',
    shortTitle: '中部河階・陶土',
    area: '中部',
    counties: ['台中', '彰化', '南投', '雲林', '濁水溪流域'],
    description: '以河階、陶土、農業聚落與中部山麓為核心，串連作物、老樹、廟會、防衛系統與淺山傳說。',
    storySummary: '中部地區以濁水溪、河階農業、淺山聚落和工藝土質為主。故事整理會把作物、老樹、土地守護、廟會繞境與聚落防衛放在同一張地景脈絡中，之後可延伸到彰化平原、南投山城與雲林農作。',
    storyFocus: ['濁水溪流域與河階農業', '老樹與聚落守護', '淺山動物與精怪', '中部廟會防衛系統', '陶土與工藝地景'],
  },
  {
    slug: 'southern-plain-underground-ancestors',
    title: '南部平原・地下祖靈城靈格區',
    englishTitle: 'Southern Plain and Underground Ancestral City Region',
    shortTitle: '南部平原・地下祖靈城',
    area: '南部',
    counties: ['嘉義', '台南', '高雄', '屏東', '南部海口'],
    description: '以府城、王爺、家將、平原聚落、海口祭儀與祖靈記憶為核心，是廟宇神靈與民俗故事密度最高的區域之一。',
    storySummary: '南部平原的資料會以府城、王爺信仰、家將系統、城隍陰司與海口送疫為主軸。八家將、官將首、王船、瘟王與聚落祖靈的故事，會分別對應廟宇神靈、司法陰司、民俗陣頭與海岸防護。',
    storyFocus: ['府城王爺與王船祭', '八家將與官將首臉譜', '城隍陰司與司法秩序', '平原祖靈與聚落守護', '海口送疫與水路禁忌'],
  },
  {
    slug: 'eastern-rift-valley-jade-ancestors',
    title: '東部縱谷・玉石祖靈靈格區',
    englishTitle: 'Eastern Rift Valley and Jade Ancestors Region',
    shortTitle: '東部縱谷・玉石祖靈',
    area: '東部',
    counties: ['宜蘭南段', '花蓮', '台東', '海岸山脈', '縱谷聚落'],
    description: '以東部縱谷、海岸山脈、玉石、部落植物與祖靈地景為主，適合連結原住民族文化、溪谷與山海交界故事。',
    storySummary: '東部縱谷以山海夾出的移動路線、溪谷、玉石與部落祖靈地景為核心。整理時會避免把不同族群故事混成單一敘事，先保留地點、族群、植物與儀式的資料欄位，再逐步核實來源後串入文章。',
    storyFocus: ['縱谷聚落與溪流路徑', '海岸山脈與山海交界', '玉石與祖靈地景', '部落植物知識', '宜花東地方傳說'],
  },
  {
    slug: 'inland-mountain-mist-stone',
    title: '山林內陸・霧石靈格區',
    englishTitle: 'Inland Mountains, Mist and Stone Region',
    shortTitle: '山林內陸・霧石',
    area: '山林',
    counties: ['中央山脈', '雪山山脈', '玉山山脈', '高山溪谷', '霧林帶'],
    description: '以高山、霧林、溪谷、古道、神木與山林禁忌為主，承接魔神仔、山神、植物與高山物種資料。',
    storySummary: '山林內陸區負責收納跨縣市的高山、霧林、溪谷與古道資料。魔神仔、山神、神木、獵徑禁忌與高山植物會先以地景類型歸檔，等具體地點明確後，再連回北中南東或外島的地區頁。',
    storyFocus: ['中央山脈與高山神靈', '霧林帶與迷路禁忌', '神木與老樹信仰', '古道獵徑故事', '高山植物與溪谷生態'],
    aliases: ['中央山脈・中高海拔'],
  },
  {
    slug: 'islands-and-sea',
    title: '島嶼／海域外篇靈格區',
    englishTitle: 'Islands and Offshore Waters Region',
    shortTitle: '島嶼／海域外篇',
    area: '離島與海域',
    counties: ['澎湖', '金門', '馬祖', '蘭嶼', '綠島', '海岸與外海'],
    description: '以離島、外海、海岸植物、海路信仰與島嶼族群記憶為主，作為台灣本島之外的擴充地帶。',
    storySummary: '外島與海域區會先涵蓋澎湖、金門、馬祖、蘭嶼、綠島、小琉球與本島海岸。重點放在海路守護、王爺信仰、風獅爺、島嶼植物、漁業禁忌與族群記憶，並保留後續細分島嶼頁面的空間。',
    storyFocus: ['澎湖王爺與海路信仰', '金門風獅爺與聚落防護', '馬祖島嶼神明', '蘭嶼與綠島族群故事', '海岸植物與漁業禁忌'],
  },
];

export const taiwanRegionGroups: TaiwanRegionGroup[] = [
  {
    id: 'north',
    title: '北部地區',
    englishTitle: 'North Taiwan',
    summary: '台北、新北、基隆、桃園北段與淡水河流域，優先串連城市廟境、河口、港口與鶯歌陶土地景。',
    regionSlugs: ['north-basin-river-mouth', 'northwest-hakka-hills'],
  },
  {
    id: 'central',
    title: '中部地區',
    englishTitle: 'Central Taiwan',
    summary: '台中、彰化、南投、雲林與濁水溪流域，對應河階農業、作物、淺山傳說與中部廟會。',
    regionSlugs: ['central-river-terrace-clay'],
  },
  {
    id: 'south',
    title: '南部地區',
    englishTitle: 'South Taiwan',
    summary: '嘉義、台南、高雄、屏東與南部海口，集中處理王爺、家將、府城陰司與海岸祭儀故事。',
    regionSlugs: ['southern-plain-underground-ancestors'],
  },
  {
    id: 'east',
    title: '東部地區',
    englishTitle: 'East Taiwan',
    summary: '宜蘭南段、花蓮、台東、縱谷與海岸山脈，保留祖靈地景、玉石、溪谷與部落植物資料欄位。',
    regionSlugs: ['eastern-rift-valley-jade-ancestors'],
  },
  {
    id: 'islands',
    title: '外島地區',
    englishTitle: 'Outlying Islands',
    summary: '澎湖、金門、馬祖、蘭嶼、綠島、小琉球與外海，串連島嶼神明、海路禁忌與族群記憶。',
    regionSlugs: ['islands-and-sea'],
  },
  {
    id: 'mountains',
    title: '山林內陸／高山',
    englishTitle: 'Mountains and Inland Highlands',
    summary: '中央山脈、雪山山脈、玉山山脈與霧林帶，收納跨縣市的山神、魔神仔、古道與高山植物資料。',
    regionSlugs: ['inland-mountain-mist-stone'],
  },
];

export function getRegionsByGroup(group: TaiwanRegionGroup) {
  return group.regionSlugs
    .map((slug) => findRegionBySlug(slug))
    .filter((region): region is TaiwanSpiritRegion => Boolean(region));
}

export function normalizeRegionName(region: string) {
  return region.replace(/靈格區$/u, '').trim();
}

export function findRegionBySlug(slug: string) {
  return taiwanSpiritRegions.find((region) => region.slug === slug);
}

export function regionMatches(region: TaiwanSpiritRegion, value: string) {
  const normalizedValue = normalizeRegionName(value);
  return [
    region.title,
    region.shortTitle,
    ...(region.aliases ?? []),
  ].some((candidate) => normalizeRegionName(candidate) === normalizedValue);
}
