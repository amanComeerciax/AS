"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingData } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownSection() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      gsap.from(".countdown-title", {
        y: 30, opacity: 0, duration: 1,
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
      });
      gsap.from(".countdown-item", {
        y: 60, opacity: 0, scale: 0.8, stagger: 0.15, duration: 1, ease: "back.out(1.5)",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" ref={containerRef} className="section-padding bg-blush/40 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-maroon/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="countdown-title font-script text-4xl md:text-6xl text-maroon mb-4">
          Counting the Days
        </h2>
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="countdown-item flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-ivory/80 backdrop-blur-sm shadow-lg border border-gold/20 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
            >
              {/* Decorative circle behind number */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gold" />
              </div>

              <span className="font-heading text-4xl md:text-5xl lg:text-6xl text-maroon mb-2 relative z-10 tabular-nums">
                {isMounted ? String(block.value).padStart(2, "0") : "00"}
              </span>
              <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.3em] text-charcoal/50 relative z-10">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
