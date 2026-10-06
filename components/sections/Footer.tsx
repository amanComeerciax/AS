"use client";

import { weddingData } from "@/data/wedding";
import { Camera, Mail, Phone } from "lucide-react";
import { format } from "date-fns";

export function Footer() {
  const weddingDate = new Date(weddingData.date);

  return (
    <footer className="bg-[#1a1412] text-ivory py-12 border-t-[3px] border-maroon relative z-10">
      <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Names & Date */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-16 h-16 rounded-full border border-gold/60 flex items-center justify-center mb-5 text-gold font-script text-xl relative">
             <span className="opacity-90">{weddingData.couple.groom.firstName[0]}</span>
             <div className="w-[1px] h-5 bg-gold/50 mx-2" />
             <span className="opacity-90">{weddingData.couple.bride.firstName[0]}</span>
             <div className="absolute inset-1 border border-gold/30 rounded-full" />
          </div>
          <h3 className="font-script text-[1.6rem] text-gold mb-2 tracking-wide">
            {weddingData.couple.groom.firstName} & {weddingData.couple.bride.firstName}
          </h3>
          <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-ivory/60">
            {format(weddingDate, "dd MMMM yyyy")}
          </p>
        </div>

        {/* Center: Thank you */}
        <div className="flex flex-col items-center text-center max-w-md">
          <h4 className="font-cursive text-5xl md:text-[3.5rem] text-gold mb-4 leading-none">Thank You</h4>
          <p className="font-body text-[10px] md:text-xs text-ivory/50 leading-relaxed mb-4 tracking-wider">
            Your presence will make our day even more special.
            <br />
            JazakAllah Khair.
          </p>
          <div className="flex items-center justify-center text-gold/40">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-1 h-1 bg-gold/40 rotate-45 mx-3" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </div>

        {/* Right Side: Socials */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#1a1412] transition-colors">
            <Phone className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#1a1412] transition-colors">
            <Camera className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#1a1412] transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
