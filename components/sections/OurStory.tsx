"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingData } from "@/data/wedding";
import { Heart, MessageCircle, Users, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const icons = [MessageCircle, Users, Star, Heart];

export function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw timeline line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Fade in story cards
      gsap.utils.toArray(".story-card").forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="story" className="relative py-24 bg-transparent overflow-hidden border-t-2 border-gold/30">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/st%27.png')" }}
      />
      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-gold" />
            <h2 className="font-cursive text-5xl md:text-7xl text-maroon">
              Our Story
            </h2>
            <div className="w-16 h-[1px] bg-gold" />
          </div>
          <div className="w-4 h-4 rounded-full border-2 border-gold/40 flex items-center justify-center">
             <div className="w-1 h-1 bg-gold rounded-full" />
          </div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2 hidden md:block" />
          <div 
            ref={lineRef} 
            className="absolute left-[50%] top-0 bottom-0 w-px bg-gold -translate-x-1/2 origin-top hidden md:block" 
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {weddingData.loveStory.map((story, i) => {
              const Icon = icons[i % icons.length];
              const isEven = i % 2 === 0;

              return (
                <div key={story.year} className={`story-card relative flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12 md:text-right text-center' : 'md:pl-12 md:text-left text-center'}`}>
                    <div className="bg-white/60 backdrop-blur-sm border border-gold/20 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
                      <div className={`flex flex-col items-center md:items-${isEven ? 'end' : 'start'} mb-4`}>
                        <span className="font-heading text-gold tracking-[0.2em] mb-2">{story.year}</span>
                        <h3 className="font-script text-2xl md:text-3xl text-maroon mb-2">{story.title}</h3>
                      </div>
                      <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                        {story.text}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 bg-[#FCF8F2] border-2 border-gold rounded-full shadow-lg z-10">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
