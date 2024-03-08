export const vertexSelected = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

export const
    fragmentSelected = `
    uniform float opacity;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      float fresnel = dot(normalize(vNormal), normalize(vPosition));
      fresnel = 1.0 - fresnel;
      fresnel = pow(fresnel, 3.0);
      fresnel = clamp(fresnel, 0.0, 1.0);
      
      vec3 color = vec3(0.94, 0.97, 1.0); // Light blue color
      gl_FragColor = vec4(color * fresnel, opacity);
    }
  `;