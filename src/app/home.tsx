"use client";

import React from "react";
import { useLanguage } from "@/i18n/language-provider";
import { getCopy } from "@/content/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  AboutSection,
  CapabilitiesSection,
  ContactSection,
  EquipmentSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  TeamSection
} from "@/sections/home-sections";

export function Home() {
  const { lang } = useLanguage();
  const copy = React.useMemo(() => getCopy(lang), [lang]);

  return (
    <div>
      <Header />
      <main>
        <HeroSection copy={copy} />
        <AboutSection copy={copy} />
        <ServicesSection copy={copy} />
        <ProjectsSection copy={copy} />
        <CapabilitiesSection copy={copy} />
        <EquipmentSection copy={copy} />
        <TeamSection copy={copy} />
        <ContactSection copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}

