import SingleCaseStudy from "@/components/SingleCaseStudy";

export default async function CaseStudyPage({ params }) {
  return <SingleCaseStudy urlTitle={(await params).urlTitle} />;
}
