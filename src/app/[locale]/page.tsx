import CTASection from "@/components/CTASection";
import DiscoverOurJourney from "@/components/DiscoverOurJourney";
import Hero from "@/components/Hero";
import NotableFeatures from "@/components/NotableFeatures";
import PartnerUniversities from "@/components/PartnerUniversities";
import StepSection from "@/components/StepSection";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Gateway to Academic Excellence Abroad!",
  description:
    "Unlock your potential with expert guidance for studying abroad. We provide comprehensive services to ensure your academic success in North Cyprus, China, and Turkey. From university applications to visa support, we've got you covered.",
  keywords:
    "study abroad, university applications, scholarship guidance, visa support, academic success, North Cyprus, China, Turkey, international education, accommodation arrangements, pre-departure orientation",
  openGraph: {
    title: "Your Gateway to Academic Excellence Abroad!",
    description:
      "Unlock your potential with expert guidance for studying abroad. We provide comprehensive services to ensure your academic success in North Cyprus, China, and Turkey. From university applications to visa support, we've got you covered.",
    url: "https://yourexcellentschoolagency.com",
    images: [
      {
        url: "/path/to/social-image.png",
        width: 800,
        height: 600,
        alt: "Academic Excellence Abroad Social Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Gateway to Academic Excellence Abroad!",
    description:
      "Unlock your potential with expert guidance for studying abroad. We provide comprehensive services to ensure your academic success in North Cyprus, China, and Turkey. From university applications to visa support, we've got you covered.",
    images: [
      {
        url: "/path/to/twitter-image.png",
        width: 800,
        height: 600,
        alt: "Academic Excellence Abroad Twitter Image",
      },
    ],
  },
  icons: {
    icon: "/path/to/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      {/* <Hero />
      <NotableFeatures />
      <DiscoverOurJourney />
      <StepSection />
      <PartnerUniversities />
      <Testimonials />
      <CTASection /> */}
    </>
  );
}
