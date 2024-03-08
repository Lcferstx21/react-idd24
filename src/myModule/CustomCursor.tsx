import React, { useState, useEffect } from "react";
import "./customCursor.css"; // 假设你的CSS文件名为customCursor.css
import mouse1 from "./assets/Mouse.png";
import mouse2 from "./assets/Mouse22.png";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // 新增一个状态来控制光标的显示和隐藏
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true); // 当光标移动时，使光标可见

      // 重置定时器
      if (timer) clearTimeout(timer);
      setTimer(
        window.setTimeout(() => setIsVisible(false), 500) as unknown as number
      );
      // 如果1秒钟内没有移动，则隐藏光标
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      // 组件卸载时清除定时器
      if (timer) clearTimeout(timer);
    };
  }, [timer]); // 依赖项中添加timer，确保能够清除上一个定时器

  // 根据isVisible状态决定是否渲染光标
  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${clicked ? "custom-cursor-clicked" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundImage: `url(${clicked ? mouse2 : mouse1})`,
      }}
    />
  );
};

export default CustomCursor;
