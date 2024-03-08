import React from "react";
import styles from "./Header.module.css";
import insLogo from "./image/logo_insta.svg";
import xLogo from "./image/logo_x.svg";
import threadsLogo from "./image/logo_threads.svg";
import xiaohongshuLogo from "./image/logo_xiaohongshu.svg";
import facebookLogo from "./image/logo_facebook.svg";
import maps from "./image/maps.png";
import WorksOverview from "./WorksOverview";
// import box2 from "./imageWorks/box2.png";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const handleToggleContent = (contentId: string) => {
    const content = document.getElementById(contentId);
    if (content) {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    }
  };

  return (
    <nav className={styles.top__left__info}>
      <div className={styles.info__title}>
        <h1>
          多摩美術大学大学院
          <br />
          情報デザイン研究領域
          <br />
          大学院修了制作展2024
        </h1>
        <p className={styles.h2_eng}>
          Graduate School of Tama Art University
          <br />
          Information Design Department
          <br />
          Masters Works Special Exhibit 2024
        </p>
      </div>

      <div className={styles.info__link}>
        <div className={`${styles.link} ${styles.message}`}>
          <h2
            className={styles.toggleTrigger}
            onClick={() => handleToggleContent("content1")}
          >
            → <s>メッセージ</s>
          </h2>
          <p className={styles.h3_eng}>Message</p>
          <p
            id="content1"
            className={`${styles.toggleContent} ${styles.hidden} ${styles.messageTxt}`}
          >
            本展覧会は、多摩美術大学大学院デザイン専攻情報デザイン領域に所属する大学院インタラクションデザインプログラムの学生による有志の展覧会です。今年の展示のテーマは「INTER_」です。
            <br />
            <br />
            人々は、たくさんのヒトやコトのあいだの中で、互いにかかわりあって生きています。
            <br />
            <br />
            そんな人々を取り巻く世界を理解・解釈するため、わたしたちはモノとコト、芸術と科学、現実と想像、異なる分野や側面を行き来し、探求・表現することに試みました。
            <br />
            <br />
            本展覧会では、美術・デザイン分野にとどまらず、工学、人類学、社会学、認知科学、言語学といった異なる学科領域の間を追求することで、人々が触れる情報の体験やメディアなど創造的な「INTER_」を個々が作品として形作った成果を展示しました。
            <br />
            <br />
            <br />
          </p>
        </div>
        {/* maps */}
        <div className={`${styles.link} ${styles.researchGroup}`}>
          <h2
            className={styles.toggleTrigger}
            onClick={() => handleToggleContent("content2")}
          >
            → <s>会場</s>
          </h2>
          <p className={styles.h3_eng}>Place</p>
          <div
            id="content2"
            className={`${styles.toggleContent} ${styles.hidden}`}
          >
            <div>
              {/* <img src={box2} alt="" className={styles.boxMap} /> */}
              <div className={styles.mapContainer}>
                <img src={maps} className={styles.mapsImg}></img>
              </div>
            </div>

            <p className={styles.mapsTxt}>
              <a
                href="https://www.google.com/maps/place/BUoY+Cafe+%26+Bar/@35.7462913,139.8008161,16.6z/data=!3m1!5s0x60188e5a5d7ef6e5:0x1efc6e4692915edc!4m5!3m4!1s0x60188e5a5d7c19e7:0xa65b19b78c557ca2!8m2!3d35.7435032!4d139.8021921?shorturl=1"
                target="_blank"
              >
                → Google Mapで開く
              </a>
              <br />
              <br />
              〒120-0036 東京都足立区千住仲町49-11
              <br />
              東京メトロ千代田線・日比谷／JR常磐線／東武スカイツリーライン「北千住」駅
              <br />
              出口１より徒歩6分、西口より徒歩8分
            </p>
          </div>
        </div>
        {/* works */}
        <div className={`${styles.link} ${styles.works}`}>
          <h2
            className={styles.toggleTrigger}
            onClick={() => handleToggleContent("content3")}
          >
            → <s>作品</s>
          </h2>
          <p className={styles.h3_eng}>Works</p>
          <div
            id="content3"
            className={`${styles.toggleContent} ${styles.hidden}`}
          >
            <WorksOverview />
          </div>
        </div>{" "}
      </div>

      <div className={styles.info__date} id="left__info">
        <div className={styles.date__course}>
          <h3>メディアアートコース</h3>
          <h2>3.8 (金) から3.10 (日)</h2>
          <p className={styles.h3_eng}>
            Media Art Course <br />
            Date: 8, Mar. Fri. through 10, Mar. Sun.
          </p>
        </div>
        <div className={styles.date__course}>
          <h3>インタラクションデザインコース</h3>
          <h2>3.15 (金) から3.17 (日)</h2>
          <p className={styles.h3_eng}>
            Interaction Design Course <br />
            Date: 15, Mar. Fri. through 17, Mar. Sun.
          </p>
        </div>
      </div>

      <div className={styles.right__sns__oosugi} id="right__sns">
        <a
          href="https://www.instagram.com/tau_idd_master"
          target="_blank"
          className={styles.flex}
          rel="noopener noreferrer"
        >
          <h2>→</h2>
          <img src={insLogo} alt="Instagram" />
        </a>

        <a
          href="https://x.com/tauidd_master/status/1754734958634287578"
          target="_blank"
          className={styles.flex}
          rel="noopener noreferrer"
        >
          <h2>→</h2>
          <img src={xLogo} alt="X" />
        </a>
        <a
          href="https://www.threads.net/@tau_idd_master/post/C2_nYgJyPGN/"
          target="_blank"
          className={styles.flex}
          rel="noopener noreferrer"
        >
          <h2>→</h2>
          <img src={threadsLogo} alt="Threads" />
        </a>
        <a
          href="https://www.xiaohongshu.com/discovery/item/65c1da5b0000000002012a9a"
          target="_blank"
          className={styles.flex}
          rel="noopener noreferrer"
        >
          <h2>→</h2>
          <img src={xiaohongshuLogo} alt="Xiaohongshu" />
        </a>
        <a
          href="https://www.facebook.com/share/p/sWyWaysiDSUmfSUR/"
          target="_blank"
          className={styles.flex}
          rel="noopener noreferrer"
        >
          <h2>→</h2>
          <img src={facebookLogo} alt="Facebook" />
        </a>
      </div>

      <div>
        <p id={styles.info__copyrights}>
          多摩美術大学情報デザイン学科研究室後援
          <br />
          Copyright © 2024 Tama Art University
          <br />
          Graduate School Information Design Field
        </p>
      </div>
    </nav>
  );
};
export default Header;
