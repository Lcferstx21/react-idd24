// src/components/Scene.tsx

import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";
import styles from "./Scene.module.css";
import { useControls } from "leva";

const Scene = ({ isInteractive }: { isInteractive: boolean }) => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);
  const [resetModels, setResetModels] = useState(false);
  const isDev = process.env.NODE_ENV === "development";
  const { color, intensity, position } = isDev
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useControls("Light", {
        color: "#ffffff",
        intensity: { value: 1, min: 0, max: 10 },
        position: { value: [0, 10, 5], step: 1 },
      })
    : {
        color: "#ffffff",
        intensity: 1,
        position: [0, 10, 5] as [number, number, number], // Explicitly assert the type here
      };

  const models = useMemo(
    () => [
      {
        name: "boy1",
        url: "/model/boy.gltf",
        position: [-1, -6, -2] as [number, number, number],
        scale: [10, 10, 10] as [number, number, number],
      },
      {
        name: "boy2",
        url: "/model/boy.gltf",
        position: [1, 6, 2] as [number, number, number],
        scale: [10, 10, 10] as [number, number, number],
      },
      {
        name: "boy3",
        url: "/model/boy.gltf",
        position: [12, 6, -10] as [number, number, number],
        scale: [10, 10, 10] as [number, number, number],
      },

      {
        name: "data1",
        url: "/model/data.gltf",
        position: [5, 10, 0] as [number, number, number],
        scale: [3, 3, 3] as [number, number, number],
      },

      {
        name: "data2",
        url: "/model/data.gltf",
        position: [8, -6, -6] as [number, number, number],
        scale: [3, 3, 3] as [number, number, number],
      },
      {
        name: "data3",
        url: "/model/data.gltf",
        position: [-15, 2, -6] as [number, number, number],
        scale: [3, 3, 3] as [number, number, number],
      },

      {
        name: "earth1",
        url: "/model/earth.gltf",
        position: [-10, -6, -6] as [number, number, number],
        scale: [0.5, 0.5, 0.5] as [number, number, number],
      },
      {
        name: "earth2",
        url: "/model/earth.gltf",
        position: [10, -1, 2] as [number, number, number],
        scale: [0.5, 0.5, 0.5] as [number, number, number],
      },
      {
        name: "earth3",
        url: "/model/earth.gltf",
        position: [10, 12, -15] as [number, number, number],
        scale: [0.5, 0.5, 0.5] as [number, number, number],
      },

      {
        name: "file1",
        url: "/model/file.gltf",
        position: [0, -8, 0] as [number, number, number],
        scale: [4, 4, 4] as [number, number, number],
      },
      {
        name: "file2",
        url: "/model/file.gltf",
        position: [-8, 8, -10] as [number, number, number],
        scale: [4, 4, 4] as [number, number, number],
      },
      {
        name: "file3",
        url: "/model/file.gltf",
        position: [-8, 19, -15] as [number, number, number],
        scale: [4, 4, 4] as [number, number, number],
      },
    ],
    []
  );

  const handleSelect = (name: string) => {
    if (!isInteractive) return;
    setSelectedModels((prev) => {
      const isSelected = prev.includes(name);
      if (isSelected) {
        return prev.filter((n) => n !== name); // 取消选中
      } else if (prev.length < 2) {
        return [...prev, name]; // 选中
      } else {
        return prev; // 保持当前选中状态不变
      }
    });
  };

  const handleHover = (name: string | null) => {
    if (!isInteractive) return;
    setHoveredModel(name);
  };

  useEffect(() => {
    if (!isInteractive) {
      setSelectedModels([]);
      setHoveredModel(null);
    }
  }, [isInteractive]);

  useEffect(() => {
    if (isInteractive) {
      setResetModels(true);
      setTimeout(() => setResetModels(false), 0);
    }
  }, [isInteractive]);

  return (
    <Canvas
      onPointerMissed={() => setSelectedModels([])}
      camera={{ position: [0, -1, 25], fov: 75 }}
      className={styles.canvas3D}
    >
      <directionalLight
        color={color}
        intensity={intensity}
        position={position}
      />

      <directionalLight args={["#ffffff", 4]} position={[20, 20, 5]} />

      <ambientLight intensity={2} />

      {isInteractive ? <OrbitControls /> : null}
      {models.map((model) => (
        <Model
          key={model.name}
          url={model.url}
          name={model.name}
          position={model.position}
          scale={model.scale}
          onSelect={handleSelect}
          onHover={handleHover}
          isSelected={selectedModels.includes(model.name)}
          isHovered={hoveredModel === model.name}
          resetPosition={resetModels}
        />
      ))}

      {/* <gridHelper args={[100, 100]} /> */}
      {/* <axesHelper args={[5]} /> */}
    </Canvas>
  );
};

export default Scene;
