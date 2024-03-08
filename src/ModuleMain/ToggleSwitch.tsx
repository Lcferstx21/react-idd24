import React from "react";
import styles from "./ToggleSwitch.module.css";

interface ToggleSwitchProps {
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle }) => {
  return (
    <div className={styles.right__button}>
      <label className={`${styles.toggleSwitch} ${styles.rotate}`}>
        <input type="checkbox" id="myToggleSwitch" onChange={onToggle} />
        <span className={styles.slider}></span>
      </label>
      <div> ← かかわる</div>
    </div>
  );
};

export default ToggleSwitch;
