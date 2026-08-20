import AdminTestimonials from "@/components/AdminTestimonials";
import { getAllTestimonialsAction, getSettingsAction } from "@/app/actions/testimonials";

export default async function AdminTestimonialsPage() {
  const [testimonials, settings] = await Promise.all([
    getAllTestimonialsAction(),
    getSettingsAction(),
  ]);

  return (
    <AdminTestimonials
      initialTestimonials={testimonials}
      initialSubmissionsOpen={settings.testimonialSubmissionsOpen}
    />
  );
}
