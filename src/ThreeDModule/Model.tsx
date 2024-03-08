import React, { useEffect, useRef, useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";
import gsap from "gsap";

// import { Shadervert, Shaderfrag } from "../Shaders/ShaderMtDefault";
// import { vertexSelected, fragmentSelected } from "../Shaders/ShaderMtSelected";

interface ModelProps {
  url: string;
  name: string;
  position: [number, number, number];
  scale: [number, number, number]; // 添加 scale 属性
  onSelect: (name: string) => void;
  onHover: (name: string | null) => void;
  isSelected: boolean;
  isHovered: boolean;
  resetPosition?: boolean;
}

const Model: React.FC<ModelProps> = ({
  url,
  name,
  position,
  scale,
  onSelect,
  onHover,
  isSelected,
  isHovered,
  resetPosition = false,
}: ModelProps) => {
  // const model = useLoader(GLTFLoader, url);

  const gltf = useLoader(GLTFLoader, url);
  const modelScene = useMemo(() => clone(gltf.scene), [gltf.scene]);

  const ref = useRef<THREE.Group>(null!);

  useEffect(() => {
    if (ref.current) {
      console.log(`模型 ${name} 的引用:`, ref.current);
    }
  }, [name]);

  // 为每个模型生成随机移动和旋转速度
  const [rotationSpeed, movementSpeed] = useMemo(
    () => [
      new THREE.Vector3(
        Math.random() * 0.01,
        Math.random() * 0.01,
        Math.random() * 0.01
      ),
      new THREE.Vector3(
        Math.random() * 0.04 - 0.02,
        Math.random() * 0.04 - 0.02,
        Math.random() * 0.04 - 0.02
      ),
    ],
    []
  );

  // 使用useFrame钩子添加旋转和运动
  useFrame(() => {
    if (ref.current) {
      // 假设边界尺寸如下，你可以根据实际情况调整
      const boundary = {
        minX: -20,
        maxX: 20,
        minY: -15,
        maxY: 15,
        minZ: -20,
        maxZ: 20,
      };

      // 更新模型的旋转
      ref.current.rotation.x += rotationSpeed.x;
      ref.current.rotation.y += rotationSpeed.y;
      ref.current.rotation.z += rotationSpeed.z;

      // 预计算下一步的位置
      const nextX = ref.current.position.x + movementSpeed.x;
      const nextY = ref.current.position.y + movementSpeed.y;
      const nextZ = ref.current.position.z + movementSpeed.z;

      // 检查模型是否即将超出边界
      if (nextX < boundary.minX || nextX > boundary.maxX) {
        movementSpeed.x *= -1; // 改变X方向
      }
      if (nextY < boundary.minY || nextY > boundary.maxY) {
        movementSpeed.y *= -1; // 改变Y方向
      }
      if (nextZ < boundary.minZ || nextZ > boundary.maxZ) {
        movementSpeed.z *= -1; // 改变Z方向
      }

      // 根据新的运动方向更新模型的位置
      ref.current.position.x += movementSpeed.x;
      ref.current.position.y += movementSpeed.y;
      ref.current.position.z += movementSpeed.z;
    }
  });

  // 监听resetPosition的变化，如果为true，则平滑移动模型回到初始位置
  useEffect(() => {
    if (resetPosition && ref.current) {
      // 使用gsap创建平滑过渡动画
      gsap.to(ref.current.position, {
        x: position[0],
        y: position[1],
        z: position[2],
        duration: 1, // 动画持续时间，例如1秒
        ease: "power3.out", // 动画缓动函数
      });
    }
  }, [resetPosition, position]);

  // 模拟Shader效果，实际应用中可能需要自定义材质
  const defaultMaterial = useMemo(
    () =>
      // new THREE.ShaderMaterial({
      //   vertexShader: Shadervert,
      //   fragmentShader: Shaderfrag,
      //   uniforms: {
      //     lightColor: { value: new THREE.Color(1.0, 1.0, 1.0) }, // 白光
      //     objectColor: { value: new THREE.Color(1.0, 1.0, 1.0) }, // 白色物体
      //     lightDirection: {
      //       value: new THREE.Vector3(0.5, 0.7, 0.5).normalize(),
      //     }, // 光源方向
      //   },
      // }),
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#ffffff"),
        metalness: 0.0,
        roughness: 1.0,
        transmission: 0.0,
        transparent: false,
        reflectivity: 0.0,
        clearcoat: 0.0,
        clearcoatRoughness: 0.0,
      }),

    []
  );

  const hoverMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#B4FF00"),
        transparent: true,
        opacity: 0.5,
      }),
    []
  );

  const selectedMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#B4FF00"),
        metalness: 0.0,
        roughness: 1.0,
        transmission: 0.0,
        transparent: false,
        reflectivity: 0.0,
        clearcoat: 0.0,
        clearcoatRoughness: 0.0,
      }),
    []
  );

  // 遍历克隆的模型场景并应用材质
  useEffect(() => {
    modelScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = isSelected
          ? selectedMaterial
          : isHovered
          ? hoverMaterial
          : defaultMaterial;
      }
    });
  }, [
    modelScene,
    isSelected,
    isHovered,
    defaultMaterial,
    hoverMaterial,
    selectedMaterial,
  ]);

  // 在模型加载后设置模型名称
  useFrame(() => {
    if (ref.current) {
      ref.current.name = name;
    }
  });

  return (
    <primitive
      // object={model.scene}
      object={modelScene}
      ref={ref}
      position={position}
      onPointerOver={() => onHover(name)}
      onPointerOut={() => onHover(null)}
      onClick={() => onSelect(name)}
      scale={scale}
    />
  );
};

export default Model;
