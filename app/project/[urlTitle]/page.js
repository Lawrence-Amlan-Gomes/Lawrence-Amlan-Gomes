// app/project/[urlTitle]/page.js
import SingleProject from "@/components/SingleProject";

export default async function ProjectPage({ params }) {
  return <SingleProject urlTitle={(await params).urlTitle} />;
}