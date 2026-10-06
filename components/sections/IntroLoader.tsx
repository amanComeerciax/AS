"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { weddingData } from "@/data/wedding";

export function IntroLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topFlapRef = useRef<HTMLDivElement>(null);
  const bottomFlapRef = useRef<HTMLDivElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (!buttonWrapperRef.current || isOpen) return;

    // Gentle pulse on button
    gsap.to(buttonWrapperRef.current, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [isOpen]);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsHidden(true);
        window.dispatchEvent(new Event("startMusic"));
      },
    });

    // 1. Button shrinks and disappears
    tl.to(buttonWrapperRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      ease: "back.in(2)",
    }, 0);

    // 2. Flaps open UP and DOWN (3D)
    tl.to(topFlapRef.current, {
      rotateX: 100,
      duration: 2,
      ease: "power2.inOut",
    }, 0.2)
    .to(bottomFlapRef.current, {
      rotateX: -100,
      duration: 2,
      ease: "power2.inOut",
    }, 0.2);

    // 3. The Light Wave expands out of the center crack
    tl.to(lightRef.current, {
      width: "300vw",
      height: "300vw",
      opacity: 1,
      duration: 1.5,
      ease: "power3.in",
    }, 0.5);

    // 4. White flash fades out revealing the actual website
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    }, 2);
  };

  if (isHidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-[100dvh] z-[100] overflow-hidden bg-black"
      style={{ perspective: "1500px" }}
    >
      {/* THE LIGHT WAVE (Starts small/invisible, expands massively) */}
      <div
        ref={lightRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-white z-10 opacity-0 pointer-events-none"
        style={{ boxShadow: "0 0 150px 100px rgba(255,255,255,1)" }}
      />

      {/* TOP FULL-SCREEN FLAP */}
      <div
        ref={topFlapRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-maroon z-20 flex items-end justify-center overflow-visible shadow-2xl"
        style={{ transformOrigin: "top", backfaceVisibility: "hidden" }}
      >
        {/* Rich Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.1) 10px, rgba(212,175,55,0.1) 20px)"
        }} />
        
        {/* Double Gold Border */}
        <div className="absolute inset-4 md:inset-8 border-[4px] border-double border-gold/60 rounded-t-xl border-b-0" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gold/50" />

        {/* Decorative Arch Lock Mechanism extending downward */}
        <div className="absolute -bottom-16 w-32 h-16 bg-maroon rounded-b-full border-b-2 border-gold/50 z-30 overflow-hidden">
           <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,175,55,0.1) 10px, rgba(212,175,55,0.1) 20px)"
          }} />
        </div>
      </div>

      {/* BOTTOM FULL-SCREEN FLAP */}
      <div
        ref={bottomFlapRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-maroon z-20 overflow-hidden"
        style={{ transformOrigin: "bottom", backfaceVisibility: "hidden" }}
      >
        {/* Rich Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(212,175,55,0.1) 10px, rgba(212,175,55,0.1) 20px)"
        }} />
        
        {/* Double Gold Border */}
        <div className="absolute inset-4 md:inset-8 border-[4px] border-double border-gold/60 rounded-b-xl border-t-0" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gold/50" />
      </div>

      {/* WAX SEAL / OPEN BUTTON WRAPPER */}
      <div 
        ref={buttonWrapperRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex items-center justify-center cursor-pointer"
        onClick={handleOpen}
      >
        <button
          className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-gold-light via-gold to-[#B8962E] rounded-full shadow-[0_0_40px_rgba(212,175,55,0.6)] flex flex-col items-center justify-center border-2 border-yellow-200/50 text-maroon hover:brightness-110 active:scale-95 transition-all pointer-events-none"
        >
          <div className="absolute inset-1 border border-maroon/20 rounded-full" />
          <span className="font-heading text-xs tracking-[0.3em] font-bold mt-2">OPEN</span>
          <div className="w-10 h-px bg-maroon/40 my-1" />
          <span className="font-script text-3xl leading-none font-bold">
            {weddingData.couple.groom.firstName[0]}&{weddingData.couple.bride.firstName[0]}
          </span>
        </button>
      </div>

    </div>
  );
}
