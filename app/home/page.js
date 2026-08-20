import LandingPage from "@/components/LandingPage";
import { getAllTestimonialsAction, getSettingsAction } from "@/app/actions/testimonials";

export default async function Home() {
  const [testimonials, settings] = await Promise.all([
    getAllTestimonialsAction(),
    getSettingsAction(),
  ]);
  return (
      <LandingPage testimonials={testimonials} submissionsOpen={settings.testimonialSubmissionsOpen} />
  );
}
