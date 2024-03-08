// src/models/worksData.ts

import icon1 from "./imageWorks/Icon/icon_20240212022358859418350 - OU GA.png";
import icon2 from "./imageWorks/Icon/レイアイコン - _ REI.jpeg";
import icon3 from "./imageWorks/Icon/アイコン - Kihiro Tokuno.png";
import icon4 from "./imageWorks/Icon/DAIDAI.png";
import icon5 from "./imageWorks/Icon/icon - 徐泽雯.png";
import icon6 from "./imageWorks/Icon/Icon02 - 32247002ゴ シセイ.png";
import icon7 from "./imageWorks/Icon/icon - 沢.png";
import icon8 from "./imageWorks/Icon/カビ.png";
import icon9 from "./imageWorks/Icon/リ シン.png";
import icon10 from "./imageWorks/Icon/ 佐々木桃佳.jpg";
import icon11 from "./imageWorks/Icon/DAIDAI.png";

import headerRei1 from "./imageWorks/workHeaderImg/レイアイヘッダー 横 - _ REI.jpeg";
import headerRei2 from "./imageWorks/workHeaderImg/レイアイヘッダー縦 - _ REI.jpeg"

 
// import workImageOuga1 from "./imageWorks/workImg/ouga_001 - OU GA.jpg";
// import workImageOuga2 from "./imageWorks/workImg/ouga_002 - OU GA.jpg";
// import workImageOuga3 from "./imageWorks/workImg/ouga_003 - OU GA.jpg";

import workImageRei1 from "./imageWorks/workImg/レイ_1 - _ REI.jpeg";
import workImageRei2 from "./imageWorks/workImg/レイ_02jpg - _ REI.jpg";
import workImageRei3 from "./imageWorks/workImg/レイ_03 - _ REI.jpg";
import workImageRei4 from "./imageWorks/workImg/レイ_04 - _ REI.jpeg";
import workImageRei5 from "./imageWorks/workImg/レイ_05 - _ REI.jpeg";




export interface WorkData {
  id: string; // 唯一标识
  authorName: string;
  authorNameEn: string;
  researchTheme: string;
  researchThemeEn: string;
  researchKeywords: string[];
  researchSummary: string;
  workIntroduction: string;
  detailPageHeaderImages: string[];
  workImages: string[];
  iconPhoto: string;
  detailPageUrl: string;
  snsTwitter?: string; // 可选的Twitter账号
  snsInstagram?: string; // 可选的Facebook账号
}

export const worksData: WorkData[] = [
  {
    id: "1",
    authorName: "",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageRei1, workImageRei2, workImageRei3, workImageRei4,workImageRei5],
    iconPhoto: icon1,
    detailPageUrl: "/work/1",
    snsInstagram: "https://www.instagram.com/rrreeeiii41/",
    
  },
  {
    id: "2",
    authorName: "厲 万千",
    authorNameEn: "Li Wanqian",
    researchTheme: "言葉のメタファーによるメディア表現",
    researchThemeEn: "Media Representation Based on Language Metaphors",
    researchKeywords: ["比喩", "言語学による可視化", "意味の構築", "メディアデザイン"],
    researchSummary: "言葉は声、造形と記号など複数な特性を持っている。言葉と文化の間にある繋がりは時空、 社会の構成を跨り、表の意味よりも膨大な情報を含めている。言葉の仕組みと表現を研究し、 言葉の意味による抽象表現とイメージ作り、新しいメディアで生じた新しい文字の読み方を探るのが本研究の目的である。",
    
    workIntroduction: "《字の解体》：\n" +
    "　象形文字が持つ世界観、表現力に合わせ、タイプフェイスデザインを行い、漢字ごとにモーショングラフィックスも制作した。\n" +
    "　立体性を持つもの、毎回ランダムで生成するもの、インタラクション性を持つものといった、様々な仕組みを施し、個性を出す工夫をした。\n" +
    "《1984:身体とタイポグラフィ》：\n" +
    "　イギリス小説家ジョージ・オーウェルの小説『1984』12 をコンテンツに、その世界観を表現するタイポグラフィの実験として、音、手の動き、顔などをインプット情報として取り入れ、文字を制御することを試みた。\n" +
    "　アルゴリズミックスタイポグラフィ、インタラクティブな文字表現を試みった。",
    
    detailPageHeaderImages: [headerRei1, headerRei2],
    workImages: [workImageRei1, workImageRei2, workImageRei3, workImageRei4,workImageRei5],
    iconPhoto: icon2,
    detailPageUrl: "/work/2",
    snsInstagram: "https://www.instagram.com/rrreeeiii41/",

  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon3,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon4,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon5,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon6,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon7,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon8,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon9,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon10,
    detailPageUrl: "/work/1",
  },
  {
    id: "1",
    authorName: "作者名1",
    authorNameEn: "Author Name 1",
    researchTheme: "研究テーマ1",
    researchThemeEn: "Research Theme 1",
    researchKeywords: ["Keyword 1", "Keyword 2"],
    researchSummary: "研究概要",
    workIntroduction: "作品介绍",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
    iconPhoto: icon11,
    detailPageUrl: "/work/1",
  },
];
