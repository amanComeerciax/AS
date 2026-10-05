"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingData } from "@/data/wedding";
import { Flower2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Blessings() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blessing-elem",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 bg-[#FCF8F2] overflow-hidden shadow-inner z-10 border-t-2 border-b-2 border-gold/30">
      {/* Background Image provided by user */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/2.png')" }}
      />

      <div ref={contentRef} className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
        
        {/* Top Ornament */}
        <div className="blessing-elem flex items-center justify-center gap-2 mb-4 opacity-80">
           <div className="w-16 h-px bg-gold/60" />
           <span className="text-gold text-lg">❁</span>
           <div className="w-16 h-px bg-gold/60" />
        </div>

        <p className="blessing-elem font-heading text-[10px] md:text-xs tracking-[0.4em] uppercase text-gold mb-3 font-semibold">
          With the blessings of our families
        </p>

        <h2 className="blessing-elem font-script text-3xl md:text-[2.5rem] lg:text-5xl text-maroon mb-10 tracking-wide">
          TOGETHER WITH OUR FAMILIES
        </h2>

        {/* Parents Section */}
        <div className="blessing-elem w-full flex flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-12 mb-8">
          
          <div className="flex flex-col items-end text-right flex-1">
            <span className="font-heading text-xs md:text-sm text-maroon font-bold uppercase tracking-wider mb-1">
              {weddingData.couple.groom.father}
            </span>
            <span className="font-heading text-[10px] md:text-xs text-maroon/80 font-bold uppercase tracking-wider">
              & {weddingData.couple.groom.mother}
            </span>
          </div>

          <div className="flex items-center justify-center text-gold opacity-80 shrink-0">
            <div className="w-8 md:w-16 h-px bg-gold/40" />
            <div className="mx-3 w-3 h-3 md:w-4 md:h-4 border border-gold rotate-45 flex items-center justify-center">
               <div className="w-1 h-1 bg-gold" />
            </div>
            <div className="w-8 md:w-16 h-px bg-gold/40" />
          </div>

          <div className="flex flex-col items-start text-left flex-1">
            <span className="font-heading text-xs md:text-sm text-maroon font-bold uppercase tracking-wider mb-1">
              {weddingData.couple.bride.father}
            </span>
            <span className="font-heading text-[10px] md:text-xs text-maroon/80 font-bold uppercase tracking-wider">
              & {weddingData.couple.bride.mother}
            </span>
          </div>

        </div>

        <p className="blessing-elem font-body text-xs md:text-sm text-charcoal/80 max-w-xl mx-auto leading-relaxed font-medium">
          Joyfully invite you to share in the celebration of the<br className="hidden md:block" /> marriage of their beloved children
        </p>

        {/* Bottom Ornament */}
        <div className="blessing-elem mt-8 flex items-center justify-center gap-2 opacity-80">
           <div className="w-12 h-px bg-gold/60" />
           <span className="text-gold text-sm rotate-180">❁</span>
           <div className="w-12 h-px bg-gold/60" />
        </div>

      </div>
    </section>
  );
}
