export type ReferenceFolder = {
  title: string;
  englishTitle: string;
  path: string;
  purpose: string;
  connectedData?: string[];
};

export const referenceFolders: ReferenceFolder[] = [
  {
    title: '地區資料',
    englishTitle: 'Region References',
    path: '資料參考_References/地區資料_Regions/',
    purpose: '地區、地景、地方田野、縣市文化脈絡與台灣地圖節點的原始參考資料。',
    connectedData: ['src/data/regions.ts', 'src/data/fieldNotes.ts'],
  },
  {
    title: '台灣地圖',
    englishTitle: 'Taiwan Map',
    path: '資料參考_References/台灣地圖_Map/',
    purpose: '點位、座標、地區分層、路線與地圖素材。',
    connectedData: ['src/data/regions.ts', 'src/data/fieldNotes.ts'],
  },
  {
    title: '廟宇神靈',
    englishTitle: 'Temples',
    path: '資料參考_References/廟宇神靈_Temples/',
    purpose: '廟宇、神明、祭典、家將、地方信仰故事。',
  },
  {
    title: '精怪地景',
    englishTitle: 'Monsters and Landscapes',
    path: '資料參考_References/精怪地景_Monsters/',
    purpose: '精怪、傳說、地景禁忌、地方故事。',
  },
  {
    title: '法器符咒',
    englishTitle: 'Talismans',
    path: '資料參考_References/法器符咒_Talismans/',
    purpose: '法器、符令、紙錢、祭儀用品與實物參考。',
  },
  {
    title: '植物作物',
    englishTitle: 'Plants',
    path: '資料參考_References/植物作物_Plants/',
    purpose: '植物、作物、族群使用、民俗用途與生態資料。',
  },
  {
    title: '圖片參考',
    englishTitle: 'Image References',
    path: '資料參考_References/圖片參考_Image_References/',
    purpose: '照片、掃描圖、圖片來源註記與視覺參考。',
    connectedData: ['public/assets/images/field-notes/'],
  },
];
