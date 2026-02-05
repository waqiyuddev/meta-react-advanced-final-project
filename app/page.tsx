import Image from "next/image";
import { Button } from "@/components/ui/button";
import LandingSection from "@/components/landing-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
