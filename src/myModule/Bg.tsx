import { useEffect, useState } from "react";
import styles from "./Bg.module.css";

const Bg = ({ is3DEnabled }: { is3DEnabled: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [targetBackgroundPosition, setTargetBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });
  const [currentBackgroundPosition, setCurrentBackgroundPosition] = useState({
    x: 50,
    y: 50,
  });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setIsMouseMoving(true);
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (!is3DEnabled) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [is3DEnabled]);

  useEffect(() => {
    const mouseMoveTimeout = setTimeout(() => {
      setIsMouseMoving(false);
    }, 1000);

    return () => clearTimeout(mouseMoveTimeout);
  }, [mousePosition]);

  useEffect(() => {
    let frameId: number;

    const updateBackgroundPosition = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let targetX, targetY;

      if (!isMouseMoving) {
        const time = new Date().getTime();
        targetX = 50 + Math.sin(time / 2000) * 5;
        targetY = 50 + Math.cos(time / 2000) * 5;
      } else {
        targetX = 50 + ((mousePosition.x - windowWidth / 2) / windowWidth) * 10;
        targetY =
          50 + ((mousePosition.y - windowHeight / 2) / windowHeight) * 10;
      }

      setTargetBackgroundPosition({ x: targetX, y: targetY });

      // Easing effect for smooth transition
      const easeFactor = 0.1;
      const dx = targetBackgroundPosition.x - currentBackgroundPosition.x;
      const dy = targetBackgroundPosition.y - currentBackgroundPosition.y;

      setCurrentBackgroundPosition({
        x: currentBackgroundPosition.x + dx * easeFactor,
        y: currentBackgroundPosition.y + dy * easeFactor,
      });

      frameId = requestAnimationFrame(updateBackgroundPosition);
    };

    frameId = requestAnimationFrame(updateBackgroundPosition);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [
    mousePosition,
    targetBackgroundPosition,
    currentBackgroundPosition,
    isMouseMoving,
  ]);

  const containerClasses = `${styles.backgroundContainer} ${
    is3DEnabled ? styles.blur : ""
  }`;

  return (
    <div
      className={containerClasses}
      style={{
        backgroundPosition: `${currentBackgroundPosition.x}% ${currentBackgroundPosition.y}%`,
      }}
    ></div>
  );
};

export default Bg;
