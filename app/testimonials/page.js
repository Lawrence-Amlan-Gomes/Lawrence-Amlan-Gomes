import Testimonials from "@/components/Testimonials";
import { getAllTestimonialsAction, getSettingsAction } from "@/app/actions/testimonials";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [testimonials, settings] = await Promise.all([
    getAllTestimonialsAction(),
    getSettingsAction(),
  ]);
  return (
    <Testimonials
      initialTestimonials={testimonials}
      submissionsOpen={settings.testimonialSubmissionsOpen}
    />
  );
}
