import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useParams } from "react-router-dom";
import { worksData } from "./worksData";

import WorkItem from "./WorkItem";
import Bg from "../myModule/Bg";
import CustomCursor from "../myModule/CustomCursor";

import styles from "./WorkDetail.module.css";

const WorkDetail: React.FC = () => {
  const { workId } = useParams<{ workId: string }>();
  const work = worksData.find((work) => work.id === workId);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div className={styles.workDetail}>
      <CustomCursor />

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {work.workImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Work ${workId} Slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.mainContainer}>
        <div className={styles.subContainer}>
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
              {/* <img src={box} className={styles.nameBox} /> */}

              <div className={styles.nameContent}>
                <h1>
                  {work.authorName} ({work.authorNameEn})
                </h1>
              </div>
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
      </div>

      <Bg is3DEnabled={false} />
    </div>
  );
};

export default WorkDetail;
