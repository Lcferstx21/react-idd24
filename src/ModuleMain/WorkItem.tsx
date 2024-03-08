import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./WorkItem.module.css";
import WorksComputer from "./imageWorks/computer.png";

interface WorkItemProps {
  id: string;
  authorName: string;
  authorNameEn: string;
  researchTheme: string;
  researchThemeEn: string;
  iconPhoto: string;
}

const WorkItem: React.FC<WorkItemProps> = ({
  id,
  authorName,
  authorNameEn,
  researchTheme,
  researchThemeEn,
  iconPhoto,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.workItem}>
      <div className={styles.WorkWrapper}>
        <img
          src={WorksComputer}
          alt="Work computer background"
          className={styles.WorkWrapperBg}
        />

        <div
          className={`${styles.WorkWrapperOverlay} ${
            isHovered ? styles.hidden : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to={`/work/${id}`} className={styles.workLink}>
            {" "}
            {/* 使用id来构建链接 */}
            <img
              src={iconPhoto}
              alt={`${authorName}の研究テーマ`}
              className={styles.workIcon}
            />
          </Link>
        </div>

        <div className={`${styles.workMsg} ${isHovered ? styles.show : ""}`}>
          <h3>{authorName}</h3>
          <h3 className={styles.authorNameEn}>{authorNameEn}</h3>

          <p>
            {researchTheme}
            <br />
            {researchThemeEn}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
