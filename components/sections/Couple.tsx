"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { weddingData } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger);

export function Couple() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".couple-elem",
        { y: 60, opacity: 0, rotationX: 15 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="couple" className="relative py-24 bg-maroon overflow-hidden border-t-2 border-gold/30">
      {/* Background Image provided by user */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/3.png')" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="couple-elem flex flex-col items-center mb-20 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-gold" />
            <h2 className="font-cursive text-5xl md:text-7xl text-gold">
              The Couple
            </h2>
            <div className="w-16 h-[1px] bg-gold" />
          </div>
          <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
             <div className="w-2 h-2 bg-gold rotate-45" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
          
          {/* Groom */}
          <div className="couple-elem flex flex-col items-center max-w-sm text-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96 mb-8 rounded-t-full p-2 border border-gold/40 shadow-2xl">
              <div className="relative w-full h-full rounded-t-full overflow-hidden">
                <Image
                  src="/images/groom.jpg"
                  alt={weddingData.couple.groom.firstName}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Bottom floral accent mock */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-30" />
            </div>
            
            <h3 className="font-script text-3xl md:text-4xl text-ivory mb-4">
              {weddingData.couple.groom.firstName}
            </h3>
            <p className="font-body text-sm text-ivory/70 leading-relaxed italic">
              "{weddingData.couple.groom.bio}"
            </p>
          </div>

          {/* Bride */}
          <div className="couple-elem flex flex-col items-center max-w-sm text-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96 mb-8 rounded-t-full p-2 border border-gold/40 shadow-2xl">
              <div className="relative w-full h-full rounded-t-full overflow-hidden">
                <Image
                  src="/images/bride.jpg"
                  alt={weddingData.couple.bride.firstName}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-30" />
            </div>
            
            <h3 className="font-script text-3xl md:text-4xl text-ivory mb-4">
              {weddingData.couple.bride.firstName}
            </h3>
            <p className="font-body text-sm text-ivory/70 leading-relaxed italic">
              "{weddingData.couple.bride.bio}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
