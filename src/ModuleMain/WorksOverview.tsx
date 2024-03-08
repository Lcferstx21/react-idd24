import React from "react";
import WorkItem from "./WorkItem";
import styles from "./WorksOverview.module.css";
import { worksData } from "./worksData"; // 确保路径正确

const WorksOverview: React.FC = () => {
  return (
    <div className={styles.worksOverview}>
      {worksData.map((work, index) => (
        <WorkItem
          key={index}
          id={work.id}
          authorName={work.authorName}
          authorNameEn={work.authorNameEn}
          researchTheme={work.researchTheme}
          researchThemeEn={work.researchThemeEn}
          iconPhoto={work.iconPhoto}
        />
      ))}
    </div>
  );
};

export default WorksOverview;
