import Image from "next/image";
import { Button } from "@/components/ui/button";
import LandingSection from "@/components/landing-section";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
    </>
  );
}
