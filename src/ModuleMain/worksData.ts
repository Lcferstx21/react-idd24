// src/models/worksData.ts

import icon1 from "./imageWorks/Icon/icon_20240212022358859418350 - OU GA.png";
import icon2 from "./imageWorks/Icon/レイアイコン - _ REI.jpeg";
// import icon3 from "./imageWorks/150x150.png";
// import icon4 from "./imageWorks/150x150.png";
import icon5 from "./imageWorks/Icon/icon - 徐泽雯.png";
import icon6 from "./imageWorks/Icon/icon6.png";
import icon7 from "./imageWorks/Icon/icon - 沢.png";
import icon8 from "./imageWorks/Icon/kabi.png";
import icon9 from "./imageWorks/Icon/アイコン - Kihiro Tokuno.png";
import icon10 from "./imageWorks/Icon/リ シン.png";
import icon11 from "./imageWorks/Icon/ 佐々木桃佳.jpg";
import icon12 from "./imageWorks/Icon/DAIDAI.png";

import headerRei1 from "./imageWorks/workHeaderImg/レイアイヘッダー 横 - _ REI.jpeg";
import headerRei2 from "./imageWorks/workHeaderImg/レイアイヘッダー縦 - _ REI.jpeg"

 
import workImageOuga1 from "./imageWorks/workImg/ouga_001 - OU GA.jpg";
import workImageOuga2 from "./imageWorks/workImg/ouga_002 - OU GA.jpg";
import workImageOuga3 from "./imageWorks/workImg/ouga_003 - OU GA.jpeg";

import workImageRei1 from "./imageWorks/workImg/レイ_1 - _ REI.jpeg";
import workImageRei2 from "./imageWorks/workImg/レイ_02jpg - _ REI.jpg";
import workImageRei3 from "./imageWorks/workImg/レイ_03 - _ REI.jpg";
import workImageRei4 from "./imageWorks/workImg/レイ_04 - _ REI.jpeg";
import workImageRei5 from "./imageWorks/workImg/レイ_05 - _ REI.jpeg";




import workImageJo1 from "./imageWorks/workImg/20240214175559709441996 - 徐泽雯.jpeg";
import workImageJo2 from "./imageWorks/workImg/202402141758141936333206 - 徐泽雯.jpeg";
import workImageJo3 from "./imageWorks/workImg/202402141758592094719464 - 徐泽雯.jpeg";
import workImageJo4 from "./imageWorks/workImg/20240214181644738643145 - 徐泽雯.jpeg";
import workImageJo5 from "./imageWorks/workImg/20240214181855164363214 - 徐泽雯.jpeg";


import workImageWu1 from "./imageWorks/workImg/ゴシセイ_01 - 32247002ゴ シセイ.png";
import workImageWu2 from "./imageWorks/workImg/ゴシセイ_02 - 32247002ゴ シセイ.png";
import workImageWu3 from "./imageWorks/workImg/ゴシセイ_03 - 32247002ゴ シセイ.png";
import workImageWu4 from "./imageWorks/workImg/ゴシセイ_04 - 32247002ゴ シセイ.png";
import workImageWu5 from "./imageWorks/workImg/ゴシセイ_05 - 32247002ゴ シセイ.png";


import workImageZhang1 from "./imageWorks/workImg/chotakukon−1 - 沢.png";
import workImageZhang2 from "./imageWorks/workImg/chotakukon−2 - 沢.png";
import workImageZhang3 from "./imageWorks/workImg/chotakukon−3 - 沢.png";

import workImageKabi1 from "./imageWorks/workImg/チンカビ　32347006 - カビ.png";
import workImageKabi2 from "./imageWorks/workHeaderImg/m-03 - カビ.png";

import workImageA1 from "./imageWorks/workImg/Arwa_1 - Kihiro Tokuno.png";
import workImageA2 from "./imageWorks/workImg/Arwa_2 - Kihiro Tokuno.png";
import workImageA3 from "./imageWorks/workImg/Arwa_3 - Kihiro Tokuno.png";

import workImageL1 from "./imageWorks/workImg/截屏2024-02-12 上午12.03.29 - 32347008リ シン.png";
import workImageL2 from "./imageWorks/workImg/截屏2024-02-12 上午12.03.55 - 32347008リ シン.png";
import workImageL3 from "./imageWorks/workImg/截屏2024-02-12 上午12.04.03 - 32347008リ シン.png";
import workImageL4 from "./imageWorks/workImg/截屏2024-02-12 上午12.04.26 - 32347008リ シン.png";

import workImageMo1 from "./imageWorks/workImg/sasaki_01 - 佐々木桃佳.jpg";
import workImageMo2 from "./imageWorks/workImg/sasaki_02 - 佐々木桃佳.jpg";
import workImageMo3 from "./imageWorks/workImg/sasaki_03 - 佐々木桃佳.jpg";
import workImageMo4 from "./imageWorks/workImg/sasaki_04 - 佐々木桃佳.jpg";

import workImageDaiDai2 from "./imageWorks/workHeaderImg/未标题-1 - 21 Lcferstx.png";

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
  snsTwitter?: string; // 可选的Twitter账号
  snsInstagram?: string; // 可选的Facebook账号
}

export const worksData: WorkData[] = [
  // 1
  {
    id: "1",
    authorName: "オウガ",
    authorNameEn: "OUGA",
    researchTheme: "アルゴリズミックデザインにおけるボタニカルのメディア表現",
    researchThemeEn: "Media Expression of Botanicals in Algorithmic Design",
    researchKeywords: ["Interaction design", "On-screen media", "Computational design", "Infographics", "Procedural modeling"],
    researchSummary: "昨今、多くのメディアアート作品において、植物に新たなテクノロジーを用いた表現を掛け合わせる手法が散見される。これらを総称してボタニカル(植物性)アートと呼ぶ。しかし、実際の植物の発芽から枯れるまでのルールを、アルゴリズミックデザインの手法を駆使して、成長規則を解析し、そして時間軸に沿ったプロシージャルモデリングでリアルタイムレンダリングCGに反映させた関連研究はまだない。そこで、本研究では、自然規則の美しさを駆使して、それらを時間軸に沿ってCGに反映させるという、新たな視覚デザインの作成方法の構築を考察する。",
    workIntroduction: "まずは植物の成長規則を観察・分析した上で、「L-system」を使用してさまざまな形の植物を生成できるプロシージャルモデルを作成した。そして、観るだけではない、身体性のあるインタラクティブな鑑賞ができる作品《digital ikebana》を制作した。これは、プロシージャルなデジタル植物が含まれる造花を、ロボットアームで掴んで花器に生けていくと、それがデジタル上にリアルタイムレンダリングされるという装置である。人間とロボットアームの協業による「生け花」を楽しめるものになった。本研究成果の活用先の例として、伝統的な花屋や茶室での体験をアップデートできる可能性があると考えている。",
    detailPageHeaderImages: [workImageOuga1],
    workImages: [workImageOuga1,workImageOuga2,workImageOuga3],
    iconPhoto: icon1,
   
    snsTwitter: "https://twitter.com/magurokani95 ",
    snsInstagram: "https://twitter.com/maguropan",
  },
  // 2
  {
    id: "2",
    authorName: "厲 万千",
    authorNameEn: "Li Wanqian",
    researchTheme: "言葉のメタファーによるメディア表現",
    researchThemeEn: "Media Representation Based on Language Metaphors",
    researchKeywords: ["比喩", "言語学による可視化", "意味の構築", "メディアデザイン"],
    researchSummary: "言葉は声、造形と記号など複数な特性を持っている。言葉と文化の間にある繋がりは時空、 社会の構成を跨り、表の意味よりも膨大な情報を含めている。言葉の仕組みと表現を研究し、 言葉の意味による抽象表現とイメージ作り、新しいメディアで生じた新しい文字の読み方を探るのが本研究の目的である。",
    
    workIntroduction: "《字の解体》：象形文字が持つ世界観、表現力に合わせ、タイプフェイスデザインを行い、漢字ごとにモーショングラフィックスも制作した。立体性を持つもの、毎回ランダムで生成するもの、インタラクション性を持つものといった、様々な仕組みを施し、個性を出す工夫をした。《1984:身体とタイポグラフィ》：イギリス小説家ジョージ・オーウェルの小説『1984』12 をコンテンツに、その世界観を表現するタイポグラフィの実験として、音、手の動き、顔などをインプット情報として取り入れ、文字を制御することを試みたアルゴリズミックスタイポグラフィ、インタラクティブな文字表現を試みった。",
    
    detailPageHeaderImages: [headerRei1, headerRei2],
    workImages: [workImageRei1, workImageRei2, workImageRei3, workImageRei4,workImageRei5],
    iconPhoto: icon2,
    snsInstagram: "https://www.instagram.com/rrreeeiii41/",

  },
  // 3
  // {
  //   id: "3",
  //   authorName: "Tokuno Kihiro",
  //   authorNameEn: "Author Name 1",
  //   researchTheme: "研究テーマ1",
  //   researchThemeEn: "Research Theme 1",
  //   researchKeywords: ["Keyword 1", "Keyword 2"],
  //   researchSummary: "研究概要",
  //   workIntroduction: "作品介绍",
  //   detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
  //   workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
  //   iconPhoto: icon3,
  // },
  // 4
  // {
  //   id: "4",
  //   authorName: "戴 怡航",
  //   authorNameEn: "DAI Yihang",
  //   researchTheme: "研究テーマ1",
  //   researchThemeEn: "Research Theme 1",
  //   researchKeywords: ["Keyword 1", "Keyword 2"],
  //   researchSummary: "研究概要",
  //   workIntroduction: "作品介绍",
  //   detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
  //   workImages: ["path/to/workImage1.png", "path/to/workImage2.png"],
  //   iconPhoto: icon4,
  // },
  // 5
  {
    id: "5",
    authorName: "徐澤雯",
    authorNameEn: "XU ZEWEN",
    researchTheme: "子供の創造性が生まれるインタラクションの研究 ー表現と対話によるワークショップを事例としてー",
    researchThemeEn: "Research on interactions that generate creativity in children —A case study of a workshop with expression and dialogue—",
    researchKeywords: ["ワークショップ", "体験形","コミュニケーション","発想"],
    researchSummary: "教育においては、子供の創造力を引き出すことを、重要な社会的価値として実現すべきである。しかし、現在の知識を重視するだけの教育制度では、社会の潜在力を十分に引き出すことができていないと考える。最終的に社会に送り出す人材を教育しても、社会的価値として十分に発揮できていないのではないだろうか。子供にとって、中等教育に入る前に受ける教育は、試験で高得点を取ることを主とすべきではなく、感性と創造力の開発を探究し、それを加えていくべきと考える。本研究は子供の創造性が生まれることを目的に、表現と対話によるワークショップのデザインを提案した。それは体験型絵本と遊具によるワークショプで、数名の子供たちは設定された環境の中で関わり、自分の考えを自由に発想し表現していった。また親に対しては、創造性の役割と重要性を再考する機会になることをねらいとした。",
    workIntroduction: "本研究でデザインしたワークショップ装置『だれでもペープサート』のコンセプトは、子供たちが自ら物語の主役となり、それを演じる楽しさを体験することである（図2,3）。この装置を使うことで、子供たちは想像力を活かし、独自のキャラクターを生み出していく。さらに３つの装置「ストーリーシャッフルカードマシン」「違和感ルーレット」「キーワード単語ガチャ」を組み合わせることで、物語のアイデアが広がっていく（図4,5,6,7）。子供たちはランダムに選ばれた単語を手がかりに自由な発想で物語を構成し、それを演じることで創造力や表現力を育んでいく。このワークショップは、子供たちにとって楽しく学びながら創造力を鍛え、表現力を育む場としてデザインした。子供は自分自身の考えを表現し、他者と協力しながら独自の物語を創り出し、それを具現化するのがこの装置の役割である。最後に学びの成果としてビデオ撮影を行う。子供たちは達成感が得られ、協働で創る面白さを経験する。『だれでもペープサート』の手順は「物語の起承転結を説明し担当を決め、各自がキャラクターをデザインする」「各参加者はガチャで自分のキーワードを決める」「参加者が協働で物語を作る」「物語のシーンの設や道具を作る」「創作した物語を参加者が一緒に演じる」で進める。",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageJo1, workImageJo2, workImageJo3, workImageJo4,workImageJo5],
    iconPhoto: icon5,
  },
  {
    id: "6",
    authorName: "ゴシセイ",
    authorNameEn: "WU SICHENG",
    researchTheme: "医師と患者のコミュニケーションにおける 「情報非対称性」の解決の研究",
    researchThemeEn: "Service Design Research on “Information Asymmetry” between Doctor and Patient Communication",
    researchKeywords: ["情報の非対称性", "オンライン医療","EMRシステム","医療電子カルテ"],
    researchSummary: "近年中国では、オンライン医療または遠距離医療に関する医療手段の利用について社会問題として注目されている。医師と患者との関係において、様々な問題が起きる理由には、病状への情報の格差があり、患者に対して医師が強い立場にあるため「情報の非対称性」が起きている。本研究は、遠距離医療サービス支援における、オンラインコミュニケーションのサービスとそれを支えるアプリケーションのデザイン開発を目的とする。医師がオンライン診療システムを使用する際、患者の思いや状況を理解し、医師の医療知識を患者に伝える必要がある。それは、医師と患者の間の情報の不平等問題を解決することができる。",
    workIntroduction: "中高齢患者の医療問題について分析し、患者用「アンシンドクター」の開発を行い使用時の実用性について検証を行った。そして、医師の視点から、日本と中国の医療専門分野の医師へインタビューとユーザーテストを行い、医師向けの専門版シミュレーションアプリをリデザインし、医師が専門情報を取り扱う際のに問題を解決した。修士研究を通じて、より具体的な医療現場における作業内容に着目すると、それぞれの医療作業特性に対してデザインしていく必要があることが明らかになった。二年間の修士研究を通じて、医師と患者のコミュニケーションの問題を実際に解決することができた。",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageWu1, workImageWu2, workImageWu3, workImageWu4,workImageWu5],
    iconPhoto: icon6,
    snsInstagram: "https://www.instagram.com/wsctt91/",
    
  },
  {
    id: "7",
    authorName: "張 沢坤",
    authorNameEn: "ZHANG Zekun",
    researchTheme: "植物をテーマとしたアプリケーションデザインの研究",
    researchThemeEn: "Research on Plant-themed applications Design",
    researchKeywords: ["アプリケーションデザイン", "植物","経験デザイン","ゲームデザイン"],
    researchSummary: "本研究では、制作した作品を通じて、アプリケーションデザインとサービスデザインをどのような形で提供するのかを検討する。そのため、一年次にはアプリケーションの研究作品「格物」を制作した。次に、植物に関するコンテンツのデジタル化についてを検討し、既存のサービスやプロダクトを体験し、これらのプロダクトが満たしていないニーズは何であるかを探り、新しいアプリケーションのデザインコンセプトを考え、インタラクティブなアプリケーションプロトタイプ「Plants and...」と「植物をめぐる冒険」を制作した。",
    workIntroduction: "専門家向けの植物学習ツールとコミュニティ「格物」；風に吹かれる草原のモーションを組み込んだ風景によって構成されているインターフェース「Plants and...」；ゲーミフィケーションを活用した大きな地図の中で、植物を探索して学ぶための手帳アプリケーション「植物をめぐる冒険」。",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageZhang1, workImageZhang2, workImageZhang3],
    iconPhoto: icon7,
    
  },
  {
    id: "8",
    authorName: "チンカビ",
    authorNameEn: "CHEN JIAMEI",
    researchTheme: "家庭における非言語的コミュニケーションに関する研究— 日常生活中の小さな痕跡を通して、家族間の絆が深まる",
    researchThemeEn: "A study of Non-verbal communication reflected in family relationships — Strengthening family bonds through small tiny matters of daily life",
    researchKeywords: ["絆", "家族関係","痕跡探索"],
    researchSummary: "自分自身を万華鏡のように考え、日常の物事をさまざまな角度から、さまざまな方法で 見ていくと、私たちの周りには常に情報があり、日々変化し、更新されていることに気づ く。注意深く観察すれば、古いものの中に必ず新しいつながりや新しい情報が見つかる。 しかし、常に慣れた家族と一緒に家で暮らしてきたため、無意識のうちに自分が持って いる印象を「家族や家庭」に押し付けてしまった。そのため、記憶や物語を含む日常の 「痕跡」を探ることを通して、固有の印象を壊し、自分と「家族・家庭」の関係を考え直 すことができるのではないかと考える。例えば、家で同じものを見ているのに違う認識を していることに、驚きや発見、そして共感が生まれるかもしれない。周囲を改めて見つめ 直し、新しい視点をもって自発的に行動することで、十分知っているつもりだった家族に 新たな情報を得ることができると考えている。",
    workIntroduction: "家族との関係は、他者とのつなが りを学ぶベースとなり得ると考え、家庭を入り口にして、非言語コミュニケーションで家 族間の相互理解や感情表現を促進すれば、将来、家族以外の人とよりよく関わるための基 礎になる。本研究は非言語的コミュニケーションを通して、家族の痕跡を可視化し、体験化し、理 解を相互に深め、家庭関係を最適化する活動をしている。",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageKabi1, workImageKabi2],
    iconPhoto: icon8,
    
  },
  {
    id: "9",
    authorName: "アルワ",
    authorNameEn: "ALHARBI ARWA",
    researchTheme: "異文化交流を支えるコミュニケーションツールのデザイン開発",
    researchThemeEn: "Design and Development of Communication Tools that Support Cross-cultural Exchange",
    researchKeywords: ["異文化コミュニケーション", "留学生","日本大学"],
    researchSummary: "本研究は、日本の大学における外国人留学生と日本人学生間の交流活性化を目指す。これまで、交流を阻む要因に焦点を当てた研究は多数存在するが、実際に交流を支援するコミュニケーション・ツールに関する研究は限られている。そこで、お互いの文化を深く理解するための新しいアプローチとして、異文化交流を促進する協力型カードゲームを提案する。このゲームは、「みんなが書いたヒントから答えを連想する」というメカニズムを通じて、参加者が相手の文化に関する知識を深めることを目的としている。異文化間の「連想」と「対話」を促すことで、留学生と日本人学生の間における意義ある交流の橋渡しを図る。",
    workIntroduction: "ユーザーテストは、対話と連想を通じて交流を促進し、達成感と親密感を育む効果があることを明らかにし、進行の可視化などの改善点を提示した。これに基づき、KIZUKI異文化交流キットのブラッシュアップを行なった。プレイヤーは順番にカードを引き、互いにヒントを出し合って言葉を当てる。連想に成功すれば「文化チップ」を得られ、異なる文化背景からのヒント比較により、異文化理解を深めると同時に楽しめる。このゲームは「文化の違い」を乗り越える手法として設計されており、今後は「空気を読む」などの異文化間コミュニケーションスタイルを取り入れることを目指す。",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageA1, workImageA2, workImageA3],
    iconPhoto: icon9,
    
  },
  {
    id: "10",
    authorName: "リ シン",
    authorNameEn: "LI ZHEN",
    researchTheme: "社会問題に対するスペキュラティヴデザインの提案と研究 ——毒親問題を例として——",
    researchThemeEn: "To solve social problems  Proposal and research of speculative design  ——As an example of the problem of toxic parents——",
    researchKeywords: ["スペキュラティヴデザイン", "問題提起","批判性","未来学","制度","クリティカルデザイン"],
    researchSummary: "本研究は、法律制度、倫理、道徳に関連し、サービスやプロダクトによる解決が難しいと思われる複雑な社会問題に対して、スペキュラティヴ・デザインの態度で、人々の思索や議論を喚起する可能性を拡げることを目的にしている。そこで、「毒親」を例に挙げ、「Probable Future（起こりそうな未來）」と「Plausible Future（起こってもおかしくない未來）」の間にある「ありうる未來」のVisionを仮定した：2050年、「合格親育成法案」という草案が提出された。この法案は、親は職業と見なされ、勉強と試験を経て「親ライセンス」を取得した人のみ出産の資格を獲得し、本当の「合格親」として社会に承認される。鑑賞者はこのような「ありうる未来」の設定に基づき表現した生活空間に入り込み、体験しながら、この草案に対する投票し、自分の意見を述べることができる。",
    workIntroduction: "（作品タイトル「合格親育成計画2050」）毒親問題が深刻化のなる2050年、「合格親育成法案」という草案が提出された。この法案 は、親は職業と見なされ、勉強と試験を経て「 親ライセンス」を取得した人のみ出産の資格を 獲得し、本当の「合格親」として社会に承認され る。「親になるには、ライセンスを取る必要があるのか」という問いをめぐって、いろんな議論も展開された...",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageL4, workImageL2, workImageL3,workImageL1],
    iconPhoto: icon10,
    
  },
  {
    id: "11",
    authorName: "佐々木桃佳",
    authorNameEn: "SASAKI MOMOKA",
    researchTheme: "インスタレーションにおける影表現のリアリティと想像性の研究",
    researchThemeEn: "Research on the reality and imagination of shadow expression in installations",
    researchKeywords: ["インタラクションデザイン", "3DCG","ライティング","プロジェクションマッピング"],
    researchSummary: "本研究は、インスタレーション作品の空間において生成された「偽の影」が、実在の影と同等のリアリティを持つに至る要因を明らかにし、そのような偽の影の制作手法を探求することを目的とする。加えて、影のリアリティが鑑賞者の想像性にどのような影響を及ぼすかを明らかにする。研究方法としては「偽の影」を用いたインスタレーション作品の制作を通じて、鑑賞者への影響や、「偽の影」のリアリティを高めるために必要な要素に関して考察する。",
    workIntroduction: "街の影を壁に投影した作品。影を見た時、我々はその影の原因になっている物体を想像する。しかし、 複数人が全く同じ物体を想像することは少ない。影の大きさや形は条件次第で可変する曖昧な現象であり、見る人によってイメージする影の原因になっているものも異なる。鑑賞者は、対となる風景と「偽の影」として映る動物を見て、街と動物の関係性や、動物の存在としてオブジェクトを想像するだろう。しかしオブジェクトを見ると、それはその街の風景そのものの形をしている。影をその土と動物の関係性を表す虚像と しても捉えることができる。",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageMo1, workImageMo2, workImageMo3,workImageMo4],
    iconPhoto: icon11,
    snsInstagram: "https://www.instagram.com/_mo_36/",
    snsTwitter: "https://twitter.com/mokael_36/",
    
  },
  {
    id: "12",
    authorName: "ダイダイ",
    authorNameEn: "DAI CHENYI",
    researchTheme: "視覚障害者の視点に基づいたインタラクションシステムのデザイン研究",
    researchThemeEn: "Multisensory Game Interaction System Design for the Visually Impaired",
    researchKeywords: ["Tangible User Interfaces (TUI)","Visually Impairment", "Game", "Accessibility","Human-Computer Interaction (HCI)"
],
    researchSummary: "本研究では、視覚障害者と晴眼者が公平に遊べる有形ビデオゲーム「SoundGift」を設計した。現在、多くのビデオゲームは主に視覚的インタラクションに依存しており、これが視覚障害者の体験に制限をもたらしている。そこで、本研究では、伝統的なインタラクションの枠を越え、アクセシビリティとゲームの公平性を基に、新しいインタラクション形式の可能性を探求する。",
    workIntroduction: "「Sound Gift」はTUI技術に基づいて、ESP32とUnityを用いて開発された。3Dプリントとレーザーカット技術を使って、物理的な部分の造形を行った。本研究は、触覚と聴覚のフィードバックを通じて、視覚障害者のゲーム体験を向上させ、晴眼者と視覚障害者が平等に仮想ゲーム世界を構築し、探索することを可能にした。今後、より優れたユーザー体験を実現し、さらなるテストと改良を目指している。",
    detailPageHeaderImages: ["path/to/headerImage1.png", "path/to/headerImage2.png"],
    workImages: [workImageDaiDai2],
    iconPhoto: icon12,
    
  },
];
