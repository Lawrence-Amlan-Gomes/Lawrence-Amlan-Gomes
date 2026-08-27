import Testimonials from "@/components/Testimonials";
import { getPublicTestimonialsAction, getSettingsAction } from "@/app/actions/testimonials";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [testimonials, settings] = await Promise.all([
    getPublicTestimonialsAction(),
    getSettingsAction(),
  ]);
  return (
    <Testimonials
      initialTestimonials={testimonials}
      submissionsOpen={settings.testimonialSubmissionsOpen}
    />
  );
}
