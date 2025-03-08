import Casino from "@/components/Casino";
import Hero from "@/components/Hero";
import HowToBuy from "@/components/HowToBuy";
import MeetPeperuney from "@/components/MeetPeperuney";
import OurPartners from "@/components/OurPartners";
import PeperuneyToons from "@/components/PeperuneyToons";
import Pizzanomics from "@/components/Pizzanomics";
import 'animate.css';
export default function Home() {
  return (
    <div>
      <Hero />
      <MeetPeperuney />
      <HowToBuy />
      <Pizzanomics />
      <Casino />
      <PeperuneyToons />
      <OurPartners />
    </div>
  );
}
