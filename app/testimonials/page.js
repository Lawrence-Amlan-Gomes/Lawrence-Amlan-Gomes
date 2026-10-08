import Testimonials from "@/components/Testimonials";
import testimonials from "@/app/testimonials-data";

export default function Home() {
  return <Testimonials testimonials={testimonials} />;
}
