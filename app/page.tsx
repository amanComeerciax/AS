import { IntroLoader } from "@/components/sections/IntroLoader";
import { Hero } from "@/components/sections/Hero";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { Blessings } from "@/components/sections/Blessings";
import { Couple } from "@/components/sections/Couple";
import { OurStory } from "@/components/sections/OurStory";
import { Events } from "@/components/sections/Events";
import { VenueMap } from "@/components/sections/VenueMap";
import { Gallery } from "@/components/sections/Gallery";
import { RSVP } from "@/components/sections/RSVP";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-ivory">
      <IntroLoader />
      <Hero />
      <Blessings />
      <Couple />
      <OurStory />
      
      {/* Combined background for Events and VenueMap */}
      <div className="relative">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/images/po.png')" }}
        />
        <div className="relative z-10">
          <Events />
          <VenueMap />
        </div>
      </div>

      <Gallery />
      <RSVP />
      <Footer />
    </main>
  );
}
