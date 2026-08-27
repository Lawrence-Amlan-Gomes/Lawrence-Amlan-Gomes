import LandingPage from "@/components/LandingPage";
import { getPublicTestimonialsAction, getSettingsAction } from "@/app/actions/testimonials";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [testimonials, settings] = await Promise.all([
    getPublicTestimonialsAction(),
    getSettingsAction(),
  ]);
  return (
      <LandingPage testimonials={testimonials} submissionsOpen={settings.testimonialSubmissionsOpen} />
  );
}
