import Image from "next/image";
import Navbar from "./nav";
import HeroSection from "./home/herosection";
import ForStudent from "./home/ForStudent";
import CategoryCardShow from "./home/Category";
import StartJourneyCard from "./home/Journey";
import BecomeInstructor from "./home/Because";
import JobsCard from "./home/job";
import Cta from "./home/Cta";
import TestimonialsCardShow from "./home/Testimonials";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ForStudent/>
      <CategoryCardShow></CategoryCardShow>
      <StartJourneyCard></StartJourneyCard>
      <BecomeInstructor></BecomeInstructor>
      <JobsCard/>
      <Cta></Cta>
      <TestimonialsCardShow></TestimonialsCardShow>
      <Footer/>
    </>
  );
}
