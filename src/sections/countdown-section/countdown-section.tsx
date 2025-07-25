import FadeInOnScroll from "@/components/FadeInOnScroll";
import React, { useEffect, useState } from "react";
// Simple animated countdown text component
const AnimatedCountdownText = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setAnimate(true);
      const timeout = setTimeout(() => {
        setDisplayValue(value);
        setAnimate(false);
      }, 200); // animation duration
      return () => clearTimeout(timeout);
    }
  }, [value, displayValue]);

  return (
    <span
      style={{
        minWidth: 32,
        fontWeight: 700,
        fontSize: "2rem",
        borderRadius: "12px",
        transition:
          "transform 0.4s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.4s, background 0.4s, opacity 0.4s",
        transform: animate
          ? "scale(1.18) rotate(-3deg)"
          : "scale(1) rotate(0deg)",
        opacity: animate ? 0.85 : 1,
      }}
    >
      {displayValue}
    </span>
  );
};

const targetDate = new Date("2025-11-08T18:00:00");

const getCountdown = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
  const hours = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0);
  const minutes = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0);
  const seconds = Math.max(Math.floor((diff / 1000) % 60), 0);

  return { days, hours, minutes, seconds };
};

type CountdownSectionProps = {
  lang?: "vi" | "ko";
};

const LANGUAGE_TEXT: Record<string, any> = {
  vi: {
    days: "Ngày",
    hours: "Giờ",
    minutes: "Phút",
    seconds: "Giây",
    weddingMessage: "Là ngày cưới của chúng mình! 💍🎉",
  },
  ko: {
    days: "일",
    hours: "시간",
    minutes: "분",
    seconds: "초",
    weddingMessage: "우리의 결혼식 날이에요! 💍🎉",
  },
};

export const CountdownSection = ({ lang = "vi" }: CountdownSectionProps) => {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="SECTION356" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <div id="SHAPE435" className="ladi-element">
          <div className="ladi-shape">
            <img src="/images/svg/wedding-ring.svg" alt="Wedding Ring" />
          </div>
        </div>
        <FadeInOnScroll
          delay={0.5}
          direction="up"
          id="IMAGE417"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/countdown_bg.png")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <div id="BOX416" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="BOX417" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="BOX418" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="BOX419" className="ladi-element">
          <div className="ladi-box ladi-transition"></div>
        </div>
        <div id="COUNTDOWN345" className="ladi-element">
          <div className="ladi-countdown">
            {["days", "hours", "minutes", "seconds"].map((key, idx) => (
              <div
                key={key}
                id={`COUNTDOWN_ITEM${375 + idx}`}
                className="ladi-element"
              >
                <div className="ladi-countdown-background"></div>
                <div className="ladi-countdown-text">
                  <AnimatedCountdownText
                    value={countdown[key as keyof typeof countdown]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="PARAGRAPH561" className="ladi-element">
          <div className="ladi-paragraph">{LANGUAGE_TEXT[lang].days}</div>
        </div>
        <div id="PARAGRAPH562" className="ladi-element">
          <div className="ladi-paragraph">{LANGUAGE_TEXT[lang].hours}</div>
        </div>
        <div id="PARAGRAPH563" className="ladi-element">
          <div className="ladi-paragraph">{LANGUAGE_TEXT[lang].minutes}</div>
        </div>
        <div id="PARAGRAPH564" className="ladi-element">
          <div className="ladi-paragraph">{LANGUAGE_TEXT[lang].seconds}</div>
        </div>
        <div id="PARAGRAPH565" className="ladi-element">
          <div className="ladi-paragraph">
            {LANGUAGE_TEXT[lang].weddingMessage}
          </div>
        </div>
        <FadeInOnScroll
          delay={0.5}
          direction="left"
          id="IMAGE418"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          delay={1}
          direction="up"
          id="HEADLINE465"
          className="ladi-element"
        >
          <h3 className="ladi-headline">
            Văn Vương&nbsp; &amp; Ngọc Nhung
            <br />
          </h3>
        </FadeInOnScroll>
        <FadeInOnScroll
          delay={1}
          direction="up"
          id="HEADLINE466"
          className="ladi-element"
        >
          <div id="HEADLINE466" className="ladi-element">
            <h3 className="ladi-headline">Happy Wedding</h3>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          delay={0.5}
          direction="right"
          id="IMAGE419"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          delay={1}
          direction="up"
          id="IMAGE420"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
