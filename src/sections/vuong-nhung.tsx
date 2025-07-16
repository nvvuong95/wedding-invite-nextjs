"use client";

import React, { useState, useEffect, useRef } from "react";
import "./style.css";
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
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const VuongNhungWeddingInvitation: React.FC<WeddingInvitationProps> = () => {
  return (
    <div className="ladi-wraper">
      <AudioSection />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Wedding Day Section */}
      <WeddingDaySection />

      {/* Countdown Section */}
      <CountdownSection />

      {/* Couple Introduction Section */}
      <CoupleIntroSection />

      {/* Wedding Moments Section */}
      <WeddingMomentSection />

      {/* Love Story Section */}
      <LoveStorySection />

      {/* Final Section */}
      <FinalSection />

      {/* Snowflakes Animation */}
      <Snowflakes />
    </div>
  );
};

export default VuongNhungWeddingInvitation;
