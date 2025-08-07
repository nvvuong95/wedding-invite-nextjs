"use client";

import React from "react";
import { HeroSection } from "./hero-section/hero-section";
import { AudioSection } from "./audio-section/audio";
import { FloatingNav } from "./floating-nav/floating-nav";
import { WeddingDaySection } from "./wedding-day-section/wedding-day-section";
import { CountdownSection } from "./countdown-section/countdown-section";
import Snowflakes from "@/components/LeafFall";
import { CoupleIntroSection } from "./couple-intro-section/couple-intro-section";
import { WeddingMomentSection } from "./wedding-moment-section/wedding-moment-section";
import { LoveStorySection } from "./love-story-section/love-story-section";
import { FinalSection } from "./final-section/final-section";

// Types for component props
interface WeddingInvitationProps {
  className?: string;
  lang?: "vi" | "ko";
}

const VuongNhungWeddingInvitation = ({
  lang = "vi",
}: WeddingInvitationProps) => {
  return (
    <div className="ladi-wraper">
      <AudioSection lang={lang} />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <HeroSection lang={lang} />

      {/* Wedding Day Section */}
      <WeddingDaySection lang={lang} />

      {/* Countdown Section */}
      <CountdownSection lang={lang} />

      {/* Couple Introduction Section */}
      <CoupleIntroSection lang={lang} />

      {/* Wedding Moments Section */}
      <WeddingMomentSection lang={lang} />

      {/* Love Story Section */}
      <LoveStorySection lang={lang} />

      {/* Final Section */}
      <FinalSection lang={lang} />

      {/* Snowflakes Animation */}
      <Snowflakes />
    </div>
  );
};

export default VuongNhungWeddingInvitation;
