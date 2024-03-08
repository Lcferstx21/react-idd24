// Vertex Shader
export const Shadervert = `
varying vec3 vNormal;

void main() {
  vNormal = normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Fragment Shader
export const Shaderfrag = `
uniform vec3 lightColor;
uniform vec3 objectColor;
uniform vec3 lightDirection;
varying vec3 vNormal;

void main() {
  // 环境光
  float ambientStrength = 0.1;
  vec3 ambient = ambientStrength * lightColor;

  // 漫反射光
  vec3 norm = normalize(vNormal);
  float diff = max(dot(norm, lightDirection), 0.0);
  vec3 diffuse = diff * lightColor;

  vec3 result = (ambient + diffuse) * objectColor;
  gl_FragColor = vec4(result, 1.0); // 使用光照计算结果
}
`;
