"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Voiles organiques en fond de page : papier crème traversé de vert forêt
 * et de touches papaye, dans l'esprit du logo AEMS.
 */

const vertexShaderSource = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShaderSource = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uResolution;

  float hash(vec2 point) {
    return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float valueNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 local = fract(point);
    vec2 smoothLocal = local * local * (3.0 - 2.0 * local);

    float bottomLeft = hash(cell);
    float bottomRight = hash(cell + vec2(1.0, 0.0));
    float topLeft = hash(cell + vec2(0.0, 1.0));
    float topRight = hash(cell + vec2(1.0, 1.0));

    return mix(
      mix(bottomLeft, bottomRight, smoothLocal.x),
      mix(topLeft, topRight, smoothLocal.x),
      smoothLocal.y
    );
  }

  float fractalBrownianMotion(vec2 point) {
    float total = 0.0;
    float amplitude = 0.5;

    for (int octave = 0; octave < 5; octave++) {
      total += amplitude * valueNoise(point);
      point *= 2.03;
      amplitude *= 0.5;
    }

    return total;
  }

  void main() {
    vec2 aspectRatioCorrectedUv = vUv;
    aspectRatioCorrectedUv.x *= uResolution.x / max(uResolution.y, 1.0);

    float slowTime = uTime * 0.035;

    float firstLayer = fractalBrownianMotion(
      aspectRatioCorrectedUv * 2.4 + vec2(slowTime, slowTime * 0.55)
    );
    float secondLayer = fractalBrownianMotion(
      aspectRatioCorrectedUv * 1.6 - vec2(slowTime * 0.7, slowTime * 0.3) + firstLayer
    );
    float thirdLayer = fractalBrownianMotion(
      aspectRatioCorrectedUv * 3.1 + vec2(-slowTime * 0.45, slowTime) + secondLayer * 0.6
    );

    // Palette AEMS : papier crème, vert forêt, vert vif, papaye.
    vec3 paperCream = vec3(0.984, 0.969, 0.937);   // #FBF7EF
    vec3 forestGreen = vec3(0.059, 0.318, 0.196);  // #0F5132
    vec3 vividGreen = vec3(0.086, 0.639, 0.290);   // #16A34A
    vec3 papayaOrange = vec3(0.910, 0.529, 0.118); // #E8871E

    vec3 veilColor = mix(vividGreen, forestGreen, smoothstep(0.35, 0.95, thirdLayer));

    float greenIntensity = smoothstep(0.44, 0.94, secondLayer) * 0.26
      + smoothstep(0.58, 1.0, thirdLayer) * 0.12;

    // La papaye n'apparait que par touches rares, en haut a droite.
    float papayaMask = smoothstep(0.72, 1.0, firstLayer)
      * smoothstep(0.25, 1.0, vUv.x)
      * smoothstep(0.15, 0.95, vUv.y);

    float verticalFalloff = smoothstep(-0.2, 1.05, 1.0 - vUv.y);
    greenIntensity *= verticalFalloff;

    // On degage le centre haut pour garder le titre parfaitement lisible.
    vec2 heroCenter = vec2(0.42 * uResolution.x / max(uResolution.y, 1.0), 0.78);
    float heroGlow = 1.0 - smoothstep(0.0, 0.5, distance(aspectRatioCorrectedUv, heroCenter));
    greenIntensity *= mix(1.0, 0.28, heroGlow);
    papayaMask *= mix(1.0, 0.2, heroGlow);

    vec3 finalColor = mix(paperCream, veilColor, clamp(greenIntensity, 0.0, 1.0));
    finalColor = mix(finalColor, papayaOrange, clamp(papayaMask * 0.16, 0.0, 1.0));

    // Grain leger : evite le banding sur les grands aplats.
    finalColor += (hash(gl_FragCoord.xy + uTime) - 0.5) * 0.01;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export function AuroraBackground() {
  const containerReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerReference.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: false,
        powerPreference: "low-power",
      });
    } catch {
      // WebGL indisponible : la page reste lisible sur le fond crème du CSS.
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(container.clientWidth, container.clientHeight),
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShaderSource,
      fragmentShader: fragmentShaderSource,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const fullScreenQuad = new THREE.Mesh(geometry, material);
    fullScreenQuad.frustumCulled = false;
    scene.add(fullScreenQuad);

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const startTimestamp = performance.now();
    let animationFrameIdentifier = 0;

    const renderFrame = () => {
      animationFrameIdentifier = window.requestAnimationFrame(renderFrame);
      if (!reducedMotionQuery.matches) {
        uniforms.uTime.value = (performance.now() - startTimestamp) / 1000;
      }
      renderer.render(scene, camera);
    };

    renderFrame();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      window.cancelAnimationFrame(animationFrameIdentifier);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerReference}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-paper"
    />
  );
}
