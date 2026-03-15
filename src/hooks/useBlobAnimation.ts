"use client";

import { useEffect, useRef } from "react";

interface BlobTarget {
  x: number;
  y: number;
  scale: number;
}

interface BlobState {
  x: number;
  y: number;
  scale: number;
  target: BlobTarget;
}

function randomTarget(rangeX: number, rangeY: number): BlobTarget {
  return {
    x: (Math.random() - 0.5) * rangeX,
    y: (Math.random() - 0.5) * rangeY,
    scale: 0.85 + Math.random() * 0.3,
  };
}

export function useBlobAnimation(count: number = 3) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const configs = [
      { rangeX: 500, rangeY: 350, speed: 0.018, interval: 180 },
      { rangeX: 600, rangeY: 400, speed: 0.012, interval: 240 },
      { rangeX: 450, rangeY: 300, speed: 0.022, interval: 150 },
    ].slice(0, count);

    const states: BlobState[] = configs.map(({ rangeX, rangeY }) => ({
      x: 0,
      y: 0,
      scale: 1,
      target: randomTarget(rangeX, rangeY),
    }));

    let rafId: number;
    let frameCount = 0;

    function animate() {
      frameCount++;

      states.forEach((state, i) => {
        const { rangeX, rangeY, speed, interval } = configs[i];

        if (frameCount % interval === 0) {
          state.target = randomTarget(rangeX, rangeY);
        }

        state.x += (state.target.x - state.x) * speed;
        state.y += (state.target.y - state.y) * speed;
        state.scale += (state.target.scale - state.scale) * speed;

        const el = refs.current[i];
        if (el) {
          el.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
        }
      });

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [count]);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  };

  return { setRef };
}
