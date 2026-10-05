"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Music, Volume2 } from "lucide-react";
import { weddingData } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger);

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleStartMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay prevented, user can toggle manually
        });
      }
    };

    window.addEventListener("startMusic", handleStartMusic);
    return () => window.removeEventListener("startMusic", handleStartMusic);
  }, [isPlaying]);

  return (
    <>
      {children}

      <audio ref={audioRef} loop src={weddingData.music} preload="auto" />

      {/* Music Toggle */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-maroon/90 text-gold shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-maroon active:scale-95 border border-gold/20"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <Music className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
