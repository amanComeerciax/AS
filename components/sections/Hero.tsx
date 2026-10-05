"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { format } from "date-fns";
import { Mouse, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(weddingData.date) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Removed background parallax to prevent zooming

      // Text fade out on scroll
      gsap.to(textRef.current, {
        y: 80,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "10% top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Entrance animations
      const tl = gsap.timeline({ delay: 2 }); // delay for curtain to open
      tl.fromTo(".hero-elem",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const weddingDate = new Date(weddingData.date);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="home" ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/images/Wedding_mandap_video_creation_1080p_20261005175425.mp4" type="video/mp4" />
        </video>
        {/* Very subtle gradient only at the very bottom to blend with next section, video brightness stays original */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-maroon/50 to-transparent" />
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl px-4">
        
        {/* Save The Date */}
        <div className="hero-elem flex items-center gap-6 mb-6">
          <div className="w-12 md:w-20 h-px bg-gold" />
          <p className="font-heading text-xs md:text-sm tracking-[0.4em] uppercase text-gold">
            Save The Date
          </p>
          <div className="w-12 md:w-20 h-px bg-gold" />
        </div>

        {/* Names */}
        <h1 className="hero-elem font-script leading-[1.1] mb-2 flex flex-col items-center">
          <span className="text-4xl md:text-6xl lg:text-[5.5rem] text-ivory font-light tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {weddingData.couple.groom.firstName}
          </span>
          <span className="flex items-center justify-center gap-6 text-3xl md:text-5xl text-gold my-2 md:my-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span className="text-xl md:text-2xl rotate-180 opacity-70">❦</span>
            <span className="font-script">&</span>
            <span className="text-xl md:text-2xl opacity-70">❦</span>
          </span>
          <span className="text-4xl md:text-6xl lg:text-[5.5rem] text-ivory font-light tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            {weddingData.couple.bride.firstName}
          </span>
        </h1>

        {/* Date */}
        <p className="hero-elem font-heading text-sm md:text-base tracking-[0.5em] uppercase text-gold mt-6 mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-gold/20">
          {format(weddingDate, "dd MMMM yyyy")}
        </p>

      </div>

    </section>
  );
}
