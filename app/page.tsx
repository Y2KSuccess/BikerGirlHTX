import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { RideExperience } from "@/components/sections/RideExperience";
import { EditorialRideSection } from "@/components/sections/EditorialRideSection";
import { WhySheRides } from "@/components/sections/WhySheRides";
import { BookingSection } from "@/components/sections/BookingSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { BeyondBike } from "@/components/sections/BeyondBike";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <RideExperience />
        <EditorialRideSection />
        <WhySheRides />
        <BookingSection />
        <CommunitySection />
        <BeyondBike />
        <CollaborationSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
