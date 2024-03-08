import React from "react";
import { Link, useParams } from "react-router-dom";
import { worksData } from "./worksData";

import WorkItem from "./WorkItem";
import Bg from "../myModule/Bg";
import CustomCursor from "../myModule/CustomCursor";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./WorkDetail.module.css";

// React-slick settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  adaptiveWidth: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const WorkDetail: React.FC = () => {
  const { workId } = useParams<{ workId: string }>();
  const work = worksData.find((work) => work.id === workId);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div className={styles.workDetail}>
      <CustomCursor />

      <Slider {...settings} className={styles.headerSlider}>
        {work.workImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Header ${index}`} />
          </div>
        ))}
      </Slider>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <WorkItem
            id={work.id}
            authorName={work.authorName}
            authorNameEn={work.authorNameEn}
            researchTheme={work.researchTheme}
            researchThemeEn={work.researchThemeEn}
            iconPhoto={work.iconPhoto}
          />{" "}
        </div>

        <div className={styles.rightSide}>
          <div>
            <h1>
              {work.authorName} ({work.authorNameEn})
            </h1>
          </div>
          <div>
            <h2>{work.researchTheme}</h2>
            <h2>{work.researchThemeEn}</h2>
          </div>
          <div>
            <h3>研究キーワード</h3>
            <p>{work.researchKeywords.join(", ")}</p>
          </div>

          <div>
            <h3>研究概要</h3>
            <p> {work.researchSummary}</p>
          </div>

          <div>
            <h3>研究紹介</h3>
            <p>{work.workIntroduction}</p>
          </div>
        </div>
      </div>

      <div className={styles.backBtn}>
        {" "}
        <Link to="/">← Back</Link>
      </div>

      <Bg is3DEnabled />
    </div>
  );
};

export default WorkDetail;
