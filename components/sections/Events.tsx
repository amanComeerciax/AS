"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingData } from "@/data/wedding";
import { MapPin, Clock, Calendar, Sun, Music, Heart, GlassWater } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const getIcon = (name: string) => {
  switch (name) {
    case "Sun": return Sun;
    case "Music": return Music;
    case "Heart": return Heart;
    case "GlassWater": return GlassWater;
    default: return Heart;
  }
};

export function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".event-card",
        { y: 100, opacity: 0, rotationZ: -5, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          rotationZ: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "elastic.out(1, 0.7)",
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
    <section ref={sectionRef} id="events" className="relative py-24 bg-transparent overflow-hidden border-t-2 border-gold/30">
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-gold" />
            <h2 className="font-cursive text-5xl md:text-7xl text-maroon">
              Wedding Events
            </h2>
            <div className="w-16 h-[1px] bg-gold" />
          </div>
          <div className="w-4 h-4 rounded-full border-2 border-gold/40 flex items-center justify-center">
             <div className="w-1 h-1 bg-gold rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {weddingData.events.map((event) => {
            const Icon = getIcon(event.icon);
            return (
              <div key={event.title} className="event-card bg-white rounded-xl shadow-xl border border-gold/20 p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                
                <div className="w-16 h-16 rounded-full bg-[#fdfbf7] border border-gold/30 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-script text-2xl text-maroon mb-6 font-bold">{event.title}</h3>

                <div className="flex flex-col gap-3 w-full mb-8">
                  <div className="flex items-center justify-center gap-3 text-sm text-charcoal">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="font-heading font-medium tracking-wide">{event.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-sm text-charcoal">
                    <Clock className="w-4 h-4 text-gold" />
                    <span className="font-heading font-medium tracking-wide">{event.time}</span>
                  </div>
                  <div className="flex items-start justify-center gap-3 text-sm text-charcoal mt-2">
                    <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="font-heading font-bold">{event.venue}</span>
                      <span className="font-body text-xs text-charcoal/70">{event.address}</span>
                    </div>
                  </div>
                </div>

                <a 
                  href={event.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto w-full py-3 bg-maroon text-white font-heading text-xs tracking-widest uppercase rounded shadow-lg hover:bg-maroon-light active:scale-95 transition-all"
                >
                  View Details &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
