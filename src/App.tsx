import { useEffect, useState } from "react";
import "./App.css";
// ---------ModuleMain---------
import Bg from "./myModule/Bg";
import Header from "./ModuleMain/Header";
import CustomCursor from "./myModule/CustomCursor";
import ToggleSwitch from "./ModuleMain/ToggleSwitch";
import HeaderLogo from "./ModuleMain/HeaderLogo";
import Scene from "./ThreeDModule/Scene";

function App() {
  const [is3DEnabled, setIs3DEnabled] = useState(false);
  const [hasSceneBeenActivated, setHasSceneBeenActivated] = useState(false);
  const [headerClass, setHeaderClass] = useState("");
  const [headerLogoClass, setHeaderLogoClass] = useState("");

  useEffect(() => {
    if (is3DEnabled) {
      setHeaderClass("headerFadeOut");
      setHeaderLogoClass("headerFadeIn");
    } else {
      setHeaderClass("headerFadeIn");
      setHeaderLogoClass("headerFadeOut");
    }
  }, [is3DEnabled]);

  const toggle3DContent = () => {
    setIs3DEnabled(!is3DEnabled);
    if (!hasSceneBeenActivated) {
      setHasSceneBeenActivated(true);
    }
  };

  return (
    <div className="appContainer">
      <CustomCursor />

      <div className={`${headerLogoClass} headerLogo`}>
        <HeaderLogo />
      </div>

      <div className={`${headerClass} header`}>
        <Header />
      </div>

      <ToggleSwitch onToggle={toggle3DContent} />
      {hasSceneBeenActivated && <Scene isInteractive={is3DEnabled} />}

      <Bg is3DEnabled={is3DEnabled} />
    </div>
  );
}

export default App;
