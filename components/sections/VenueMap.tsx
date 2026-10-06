"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { weddingData } from "@/data/wedding";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function VenueMap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".map-elem",
        { scale: 0.8, opacity: 0, rotationX: -20 },
        {
          scale: 1,
          opacity: 1,
          rotationX: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Assuming all events are at the same venue for this section
  const mainEvent = weddingData.events[2]; 

  return (
    <section ref={sectionRef} className="relative py-24 bg-transparent overflow-hidden border-t-2 border-gold/30">
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-16 text-center map-elem">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-[1px] bg-gold" />
            <h2 className="font-cursive text-5xl md:text-7xl text-maroon">
              Getting There
            </h2>
            <div className="w-16 h-[1px] bg-gold" />
          </div>
          <div className="w-4 h-4 rounded-full border-2 border-gold/40 flex items-center justify-center">
             <div className="w-1 h-1 bg-gold rounded-full" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-xl shadow-2xl overflow-hidden border border-gold/20 map-elem">
          
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col items-start justify-center">
             <div className="w-16 h-16 rounded-full bg-[#FCF8F2] border border-gold/40 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-gold" />
             </div>
             <h3 className="font-script text-3xl text-maroon mb-2">{mainEvent.venue}</h3>
             <p className="font-body text-charcoal/70 mb-8">{mainEvent.address}</p>
             
             <a 
                href={mainEvent.mapLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-maroon text-white font-heading text-xs tracking-widest uppercase rounded shadow-lg hover:bg-maroon-light active:scale-95 transition-all w-full text-center"
             >
               Open in Maps &rarr;
             </a>
          </div>

          <div className="w-full md:w-2/3 h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.535037905769!2d72.54700447596001!3d22.981566318391786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ec3748ef21%3A0x6d0ba5a42dd843e3!2sKabir%20Farm!5e0!3m2!1sen!2sin!4v1714123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
