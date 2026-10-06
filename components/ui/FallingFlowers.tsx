"use client";

import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  rotation: number;
  scale: number;
  isRed: boolean;
}

export function FallingFlowers() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate petals only on client to avoid hydration mismatch
    const newPetals = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage across screen
      animationDuration: 10 + Math.random() * 15, // 10 to 25 seconds fall time
      animationDelay: Math.random() * -20, // Negative delay so some start immediately in the middle
      rotation: Math.random() * 360,
      scale: 0.4 + Math.random() * 0.6,
      isRed: Math.random() > 0.5,
    }));
    setPetals(newPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[55] overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0 animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            transform: `scale(${petal.scale}) rotate(${petal.rotation}deg)`,
          }}
        >
          <div 
            className={`w-4 h-4 md:w-5 md:h-5 rounded-tl-full rounded-br-full shadow-sm animate-petal-sway ${petal.isRed ? 'bg-maroon/60' : 'bg-[#e26b6b]/50'}`}
            style={{
              animationDuration: `${petal.animationDuration / 3}s`,
              animationDelay: `${petal.animationDelay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
