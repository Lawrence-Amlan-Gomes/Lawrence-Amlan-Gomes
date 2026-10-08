import LandingPage from "@/components/LandingPage";
import testimonials from "@/app/testimonials-data";

export default function Home() {
  return <LandingPage testimonials={testimonials} />;
}
