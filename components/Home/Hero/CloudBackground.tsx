"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore
import CLOUDS from "vanta/dist/vanta.clouds.min";

export default function VantaCloudsBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!effectRef.current && vantaRef.current) {
      effectRef.current = CLOUDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        skyColor: 0x000000,
        cloudColor: 0x8f9aaf,
        cloudShadowColor: 0x09101b,
        sunColor: 0xe892cc,
        sunGlareColor: 0x463744,
        sunlightColor: 0x827979,
        speed: 1.2,
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}