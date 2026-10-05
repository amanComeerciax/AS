"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { weddingData } from "@/data/wedding";

export function IntroLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play failed", e));
    }
    // Fire event to start background music
    window.dispatchEvent(new Event("startMusic"));
  };

  const handleVideoEnd = () => {
    // Fade out the entire loader gently when the video finishes
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setIsHidden(true);
        }
      });
    } else {
      setIsHidden(true);
    }
  };

  if (isHidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-[100dvh] z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src="/images/Create_card_tap_opening_animation_20261005185043.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        playsInline
        muted={false} // Allow sound if the video has it, music event also fires
        onEnded={handleVideoEnd}
      />

      {/* Initial Start Button (Shown before playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
          <button
            onClick={handlePlay}
            className="relative w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-gold-light via-gold to-[#B8962E] rounded-full shadow-[0_0_40px_rgba(212,175,55,0.6)] flex flex-col items-center justify-center border-2 border-yellow-200/50 text-maroon hover:brightness-110 active:scale-95 transition-all animate-pulse-glow"
          >
            <div className="absolute inset-1 border border-maroon/20 rounded-full" />
            <span className="font-heading text-sm tracking-[0.3em] font-bold mt-2">OPEN</span>
            <div className="w-12 h-px bg-maroon/40 my-2" />
            <span className="font-script text-3xl leading-none font-bold">
              {weddingData.couple.groom.firstName[0]}&{weddingData.couple.bride.firstName[0]}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
