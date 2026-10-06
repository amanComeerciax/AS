"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { weddingData } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger);

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-img",
        { y: 80, scale: 0.8, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: { each: 0.1, from: "center" },
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="relative py-24 bg-maroon overflow-hidden border-t-2 border-gold/30">
      {/* Background Image provided by user */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/gal.png')" }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-gold" />
            <h2 className="font-cursive text-5xl md:text-7xl text-gold">
              Moments
            </h2>
            <div className="w-16 h-[1px] bg-gold" />
          </div>
          <div className="w-4 h-4 rounded-full border-2 border-gold/40 flex items-center justify-center">
             <div className="w-1 h-1 bg-gold rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {weddingData.gallery.map((image, i) => (
            <div 
              key={i} 
              className="gallery-img relative aspect-[4/3] w-full overflow-hidden rounded-md border border-gold/40 shadow-xl group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
