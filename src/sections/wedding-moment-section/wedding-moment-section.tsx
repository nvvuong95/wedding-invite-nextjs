import FadeInOnScroll from "@/components/FadeInOnScroll";

const LANGUAGE_TEXT = {
  ko: {
    headline: "웨딩 순간",
    xemThem: "더보기",
  },
  vi: {
    headline: "Love Moments",
    xemThem: "Xem thêm",
  },
};

type WeddingMomentSectionProps = {
  lang?: "vi" | "ko";
};

export const WeddingMomentSection = ({
  lang = "vi",
}: WeddingMomentSectionProps) => {
  return (
    <div id="SECTION359" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <FadeInOnScroll
          direction="down"
          delay={0.5}
          id="HEADLINE472"
          className="ladi-element"
        >
          <h3 className="ladi-headline">{LANGUAGE_TEXT[lang].headline}</h3>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE430"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE431"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE432"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE433"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE434"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE425"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE426"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE427"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE428"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE429"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        {/* <div data-action="true" id="GROUP521" className="ladi-element">
          <div className="ladi-group">
            <div id="HEADLINE473" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                {LANGUAGE_TEXT[lang].xemThem}
              </h3>
            </div>
            <div id="SHAPE437" className="ladi-element">
              <div className="ladi-shape ladi-transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 1152 1896.0833"
                  className=""
                  fill="rgba(0, 0, 0, 1)"
                >
                  <path d="M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10L87 759q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
