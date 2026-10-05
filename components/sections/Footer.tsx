"use client";

import { weddingData } from "@/data/wedding";
import { Camera, Mail, Phone } from "lucide-react";
import { format } from "date-fns";

export function Footer() {
  const weddingDate = new Date(weddingData.date);

  return (
    <footer className="bg-[#1A1816] text-ivory py-16 border-t-4 border-maroon">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Names & Date */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mb-6 text-gold font-script text-2xl relative">
             <span className="opacity-90">{weddingData.couple.groom.firstName[0]}</span>
             <div className="w-[1px] h-6 bg-gold/30 mx-2" />
             <span className="opacity-90">{weddingData.couple.bride.firstName[0]}</span>
             {/* Fake Wreath Decoration */}
             <div className="absolute inset-1 border border-gold/20 rounded-full" />
             <div className="absolute -inset-2 border border-gold/10 rounded-full border-dashed" />
          </div>
          <h3 className="font-script text-3xl text-gold mb-2">
            {weddingData.couple.groom.firstName} & {weddingData.couple.bride.firstName}
          </h3>
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-ivory/60">
            {format(weddingDate, "dd MMMM yyyy")}
          </p>
        </div>

        {/* Center: Thank you */}
        <div className="flex flex-col items-center text-center max-w-sm">
          <h4 className="font-cursive text-4xl text-gold mb-4">Thank You</h4>
          <p className="font-body text-xs text-ivory/50 leading-relaxed mb-4">
            Your presence will make our day even more special.
            <br />
            JazakAllah Khair.
          </p>
          <div className="flex items-center justify-center text-gold">
            <div className="w-8 h-px bg-gold/30" />
            <div className="w-1 h-1 bg-gold rounded-full mx-3 opacity-50" />
            <div className="w-8 h-px bg-gold/30" />
          </div>
        </div>

        {/* Right Side: Socials */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#1A1816] transition-colors">
            <Phone className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#1A1816] transition-colors">
            <Camera className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#1A1816] transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
