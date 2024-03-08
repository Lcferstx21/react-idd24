import styles from "./HeaderLogo.module.css";
import logo from "./image/icon_logo.svg";

const HeaderLogo = () => {
  return (
    <div className={styles.info__logo} id="info__logo">
      <a href="">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default HeaderLogo;
