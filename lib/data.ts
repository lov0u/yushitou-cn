/* 听山 TIDGE — 玉石工艺品数据 */

export interface JadeWork {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  material: string;
  size: string;
  weight: string;
  technique: string;
  meaning: string;
  description: string;
  image: string;
  year: string;
}

export interface CraftStep {
  id: number;
  code: string;
  title: string;
  titleEn: string;
  description: string;
  detail: string;
  duration: string;
  tools: string[];
}

export interface JadeType {
  id: string;
  name: string;
  nameEn: string;
  origin: string;
  hardness: string;
  features: string;
  description: string;
  colorRange: string[];
}

/* 精品作品 */
export const works: JadeWork[] = [
  {
    id: "w01",
    title: "山行",
    titleEn: "Mountain Path",
    category: "山子摆件",
    material: "和田玉 籽料",
    size: "180×120×60mm",
    weight: "860g",
    technique: "圆雕 · 浮雕 · 俏色",
    meaning: "深山问道，行者在途",
    description: "以和田玉籽料为材，巧妙利用天然皮色雕刻山径行者，层次深远，意境苍茫。玉质温润，皮色金黄，浑然天成。",
    image: "/images/works-mountain-path.jpg",
    year: "2025",
  },
  {
    id: "w02",
    title: "观自在",
    titleEn: "Avalokitesvara",
    category: "人物摆件",
    material: "翡翠 冰种",
    size: "95×60×35mm",
    weight: "280g",
    technique: "圆雕 · 阴刻",
    meaning: "慈悲圆满，自在无为",
    description: "冰种翡翠精雕观音法相，通体透润，种水俱佳。面部开相慈悲庄严，衣纹流畅自然，光影下如沐佛光。",
    image: "/images/works-avalokitesvara.jpg",
    year: "2025",
  },
  {
    id: "w03",
    title: "碧潭",
    titleEn: "Jade Pool",
    category: "手镯",
    material: "和田玉 碧玉",
    size: "内径58mm / 条宽14mm",
    weight: "62g",
    technique: "素面抛光",
    meaning: "碧水深潭，宁静致远",
    description: "碧玉老坑料，色如深潭碧水，玉质缜密细腻。素面无纹，尽显玉质本色，光泽内敛温润。",
    image: "/images/works-jade-pool.jpg",
    year: "2025",
  },
  {
    id: "w04",
    title: "辟邪",
    titleEn: "Warder",
    category: "挂件",
    material: "南红玛瑙",
    size: "42×28×16mm",
    weight: "28g",
    technique: "圆雕 · 镂雕",
    meaning: "镇宅辟邪，招财纳福",
    description: "南红瓦西料精雕貔貅，红色浓郁纯正，肉质饱满。开嘴含珠，神态威猛，细节精到。",
    image: "/images/works-warder.jpg",
    year: "2024",
  },
  {
    id: "w05",
    title: "素壁",
    titleEn: "Pure Wall",
    category: "平安扣",
    material: "和田玉 白玉",
    size: "直径38mm / 厚8mm",
    weight: "22g",
    technique: "素面 · 抛光",
    meaning: "平安圆满，护身辟邪",
    description: "羊脂白玉籽料平安扣，白度一级，脂粉感极佳。大圆套小圆，大道至简，佩戴温润贴肤。",
    image: "/images/works-pure-wall.jpg",
    year: "2025",
  },
  {
    id: "w06",
    title: "竹影",
    titleEn: "Bamboo Shadow",
    category: "把件",
    material: "和田玉 青玉",
    size: "68×42×28mm",
    weight: "95g",
    technique: "浮雕 · 阴刻",
    meaning: "竹报平安，节节高升",
    description: "青玉竹节把件，造型圆润适手。竹节挺拔，叶脉清晰，把玩间尽显文人雅趣。青玉色泽沉稳，适合日常盘玩。",
    image: "/images/works-bamboo-shadow.jpg",
    year: "2024",
  },
];

/* 工艺流程 */
export const craftSteps: CraftStep[] = [
  {
    id: 1,
    code: "01",
    title: "选料",
    titleEn: "Selection",
    description: "审玉度材，辨色识纹",
    detail: "根据玉料的质地、颜色、裂纹、形状等特性，挑选适合雕刻的原石。评估种水、色泽分布、瑕疵位置，判断最佳利用方案。不同题材对料质要求不同——手镯需无裂无瑕的大料，摆件可适当利用俏色。",
    duration: "1-3天",
    tools: ["强光手电", "放大镜", "游标卡尺", "记号笔"],
  },
  {
    id: 2,
    code: "02",
    title: "设计",
    titleEn: "Design",
    description: "因材施艺，画样定稿",
    detail: "依据玉料天然形态和瑕疵分布，构思题材并绘制草图。讲究'因材施艺'，巧妙利用玉料的天然颜色和形状，将瑕疵转化为艺术特色。设计是决定作品成败的关键环节。",
    duration: "2-7天",
    tools: ["铅笔", "防水墨水", "设计稿纸"],
  },
  {
    id: 3,
    code: "03",
    title: "粗坯",
    titleEn: "Roughing",
    description: "去料打胚，定形定势",
    detail: "用切割工具去除多余部分，初步雕出作品的大致轮廓。此阶段需大胆落刀，确定整体构图和比例关系，为后续精雕奠定基础。",
    duration: "3-10天",
    tools: ["切割机", "金刚石锯片", "雕刻机", "粗磨头"],
  },
  {
    id: 4,
    code: "04",
    title: "细雕",
    titleEn: "Detailing",
    description: "精雕细琢，传神写韵",
    detail: "运用圆雕、浮雕、透雕、镂雕、线雕、阴刻、俏色巧雕等多种技法刻画细节，塑造层次与神韵。这是最考验功力的环节，慢工出细活。",
    duration: "7-30天",
    tools: ["雕刻机", "各类金刚石磨头", "超声波工具"],
  },
  {
    id: 5,
    code: "05",
    title: "打磨",
    titleEn: "Polishing",
    description: "逐级打磨，圆润线条",
    detail: "用砂纸或磨头逐级打磨（从粗砂到细砂），使表面光滑、线条流畅。打磨需耐心细致，逐级提升目数，不可跳级，否则会留下划痕。",
    duration: "2-5天",
    tools: ["砂纸（240#-2000#）", "羊毛轮", "打磨机"],
  },
  {
    id: 6,
    code: "06",
    title: "抛光",
    titleEn: "Finishing",
    description: "高速抛光，玉润生辉",
    detail: "使用抛光粉和软布高速摩擦，让玉石呈现温润亮泽的最终效果。抛光质量直接影响玉器的光泽度和观感，是体现'玉润'的关键步骤。",
    duration: "1-3天",
    tools: ["抛光粉", "皮革轮", "超声波清洗机"],
  },
  {
    id: 7,
    code: "07",
    title: "配座",
    titleEn: "Mounting",
    description: "配座包装，整体呈现",
    detail: "为摆件等作品配制木座或锦盒，完善整体展示效果。木座讲究与作品风格统一，锦盒注重保护与美观并重。",
    duration: "1-5天",
    tools: ["木工工具", "红木/黑檀料", "锦盒"],
  },
];

/* 玉石种类 */
export const jadeTypes: JadeType[] = [
  {
    id: "hetian",
    name: "和田玉",
    nameEn: "Hetian Jade",
    origin: "新疆和田 / 青海 / 俄罗斯",
    hardness: "6.0-6.5",
    features: "温润内敛，油润如脂",
    description: "软玉之王，核心是'脂粉感'——看起来像凝结的羊油，摸上去滑而不涩。韧性好，耐佩戴，注重'君子比德于玉'的传统文化意境。按颜色分为白玉、青玉、碧玉、黄玉、墨玉、糖玉等八大色系。",
    colorRange: ["羊脂白", "青白", "碧绿", "蜜黄", "墨黑", "糖色"],
  },
  {
    id: "feicui",
    name: "翡翠",
    nameEn: "Jadeite",
    origin: "缅甸",
    hardness: "6.5-7.0",
    features: "明亮通透，玻璃光泽",
    description: "硬玉之王，光感锐利明亮，有'刚性'。追求'珠光宝气'的视觉冲击，颜色鲜艳（尤其是正阳绿）。以'种水色工'为评价标准，分为玻璃种、冰种、糯种、豆种等。",
    colorRange: ["帝王绿", "阳绿", "紫罗兰", "无色", "红翡", "黄翡"],
  },
  {
    id: "dushan",
    name: "独山玉",
    nameEn: "Dushan Jade",
    origin: "河南南阳",
    hardness: "6.0-6.5",
    features: "色彩斑斓，一石多色",
    description: "一块玉料上常同时呈现2-3种或更多颜色，色彩斑斓、丰富多变。玻璃光泽但比翡翠偏柔和。硬度较高、耐磨性强，适合俏色巧雕。",
    colorRange: ["绿白", "紫绿", "黄褐", "墨色", "杂色"],
  },
  {
    id: "xiuyu",
    name: "岫玉",
    nameEn: "Xiuyan Jade",
    origin: "辽宁岫岩",
    hardness: "4.5-5.5",
    features: "清透水润，温润如冰",
    description: "中国历史上开发最早的玉种之一，红山文化玉器多用岫玉。半透明的'水头'感似翡翠，蜡状光泽，油润感更强。价格亲民，适合大件雕刻。",
    colorRange: ["淡绿", "深绿", "黄绿", "白色", "灰色"],
  },
  {
    id: "nanhong",
    name: "南红玛瑙",
    nameEn: "Southern Red Agate",
    origin: "云南保山 / 四川凉山",
    hardness: "6.5-7.0",
    features: "红色浓郁，肉质饱满",
    description: "近年备受追捧的玛瑙品种，红色浓郁纯正。保山料胶质感强，凉山料（九口、瓦西、联合）各有特色。适合精雕挂件和把件。",
    colorRange: ["柿子红", "玫瑰红", "樱桃红", "冰飘"],
  },
  {
    id: "lüsongshi",
    name: "绿松石",
    nameEn: "Turquoise",
    origin: "湖北竹山",
    hardness: "5.0-6.0",
    features: "天蓝色调，国际名贵",
    description: "国际公认的名贵玉石，以天蓝色为最佳。含铁量高时呈绿色。质地细腻的高瓷松石密度高、硬度大，适合镶嵌和雕刻。",
    colorRange: ["高蓝", "天蓝", "绿蓝", "菜籽黄"],
  },
];

/* 产品分类 */
export const categories = [
  { id: "ornament", name: "摆件", nameEn: "Ornament", count: 24, desc: "山子、人物、瑞兽、花卉" },
  { id: "pendant", name: "挂件", nameEn: "Pendant", count: 48, desc: "观音、佛公、平安扣、如意" },
  { id: "bracelet", name: "手镯", nameEn: "Bracelet", count: 16, desc: "福镯、平安镯、贵妃镯" },
  { id: "plaything", name: "把件", nameEn: "Plaything", count: 20, desc: "手把件、文房把件" },
  { id: "seal", name: "印章", nameEn: "Seal", count: 12, desc: "玉印章、闲章、名章" },
  { id: "beads", name: "珠串", nameEn: "Beads", count: 18, desc: "手串、念珠、项链" },
];

/* 雕刻技法 */
export const techniques = [
  { name: "圆雕", nameEn: "Round Carving", desc: "全方位立体雕刻，可从不同角度观赏" },
  { name: "浮雕", nameEn: "Relief", desc: "利用厚度压缩表现立体感，分高浮雕与浅浮雕" },
  { name: "透雕", nameEn: "Openwork", desc: "在浮雕基础上镂空背景，增强通透感" },
  { name: "镂雕", nameEn: "Pierce Carving", desc: "将玉料镂空形成多层次立体造型" },
  { name: "线雕", nameEn: "Line Carving", desc: "用单线条刻画花纹，分阴线与阳线" },
  { name: "阴刻", nameEn: "Intaglio", desc: "从反面雕刻，正面呈现凹入图案" },
  { name: "链雕", nameEn: "Chain Carving", desc: "将整块玉料雕成活动链条，高难度工艺" },
  { name: "俏色", nameEn: "Color巧雕", desc: "利用玉石天然多色巧妙安排，化瑕为艺" },
];

/* 企业信息 */
export const companyInfo = {
  name: "听山 TIDGE",
  nameFull: "听山玉石工艺品",
  domain: "yushitou.cn",
  email: "lov0u@foxmail.com",
  address: "烟台",
  business: "玉石工艺品加工",
  established: "2015",
  description: "听山 TIDGE，玉石工艺品加工品牌。以侘寂之心对话千年玉道，用当代设计语言重塑传统工艺。",
};
