export type TaiwanSpiritRegion = {
  slug: string;
  title: string;
  englishTitle: string;
  shortTitle: string;
  area: string;
  counties: string[];
  description: string;
  aliases?: string[];
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
  },
  {
    slug: 'northwest-hakka-hills',
    title: '西北丘陵・客庄古道靈格區',
    englishTitle: 'Northwest Hakka Hills and Old Trails Region',
    shortTitle: '西北丘陵・客庄古道',
    area: '北中交界',
    counties: ['桃園南段', '新竹', '苗栗', '台三線客庄'],
    description: '以丘陵、客庄、伯公、水圳、古道與山邊聚落為主，適合連結土地信仰、客庄作物與山林精怪。',
  },
  {
    slug: 'central-river-terrace-clay',
    title: '中部河階・陶土靈格區',
    englishTitle: 'Central River Terrace and Clay Region',
    shortTitle: '中部河階・陶土',
    area: '中部',
    counties: ['台中', '彰化', '南投', '雲林', '濁水溪流域'],
    description: '以河階、陶土、農業聚落與中部山麓為核心，串連作物、老樹、廟會、防衛系統與淺山傳說。',
  },
  {
    slug: 'southern-plain-underground-ancestors',
    title: '南部平原・地下祖靈城靈格區',
    englishTitle: 'Southern Plain and Underground Ancestral City Region',
    shortTitle: '南部平原・地下祖靈城',
    area: '南部',
    counties: ['嘉義', '台南', '高雄', '屏東', '南部海口'],
    description: '以府城、王爺、家將、平原聚落、海口祭儀與祖靈記憶為核心，是廟宇神靈與民俗故事密度最高的區域之一。',
  },
  {
    slug: 'eastern-rift-valley-jade-ancestors',
    title: '東部縱谷・玉石祖靈靈格區',
    englishTitle: 'Eastern Rift Valley and Jade Ancestors Region',
    shortTitle: '東部縱谷・玉石祖靈',
    area: '東部',
    counties: ['宜蘭南段', '花蓮', '台東', '海岸山脈', '縱谷聚落'],
    description: '以東部縱谷、海岸山脈、玉石、部落植物與祖靈地景為主，適合連結原住民族文化、溪谷與山海交界故事。',
  },
  {
    slug: 'inland-mountain-mist-stone',
    title: '山林內陸・霧石靈格區',
    englishTitle: 'Inland Mountains, Mist and Stone Region',
    shortTitle: '山林內陸・霧石',
    area: '山林',
    counties: ['中央山脈', '雪山山脈', '玉山山脈', '高山溪谷', '霧林帶'],
    description: '以高山、霧林、溪谷、古道、神木與山林禁忌為主，承接魔神仔、山神、植物與高山物種資料。',
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
  },
];

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
