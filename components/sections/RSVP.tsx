"use client";

import { useState } from "react";
import { weddingData } from "@/data/wedding";

export function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I am ${formData.name}. RSVP for ${formData.guests} guest(s). Message: ${formData.message}`;
    const url = `https://wa.me/${weddingData.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="rsvp" className="relative py-32 bg-maroon overflow-hidden border-t-2 border-gold/30">
      {/* Background Image provided by user */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/inv.png')" }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-2xl">
        
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gold" />
            <h2 className="font-cursive text-5xl md:text-6xl text-maroon">
              RSVP
            </h2>
            <div className="w-12 h-[1px] bg-gold" />
          </div>
          <p className="font-body text-sm text-charcoal/70 mb-2">
            We would be honoured to have you with us on our special day.
          </p>
          <p className="font-body text-sm text-charcoal/70">
            Please confirm your presence below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#f6eee0] border border-gold/30 rounded px-6 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/40 shadow-inner"
            />
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-[#f6eee0] border border-gold/30 rounded px-6 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold shadow-inner appearance-none"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4+">4+ Guests</option>
            </select>
          </div>
          
          <textarea
            placeholder="Message (Optional)"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#f6eee0] border border-gold/30 rounded px-6 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/40 shadow-inner resize-none"
          />

          <button
            type="submit"
            className="mt-4 px-12 py-3 bg-maroon text-white font-heading text-xs tracking-[0.2em] uppercase rounded shadow-xl hover:bg-maroon-light active:scale-95 transition-all w-max mx-auto border border-gold/20"
          >
            Send RSVP &rarr;
          </button>
        </form>

      </div>
    </section>
  );
}
