import FadeInOnScroll from "@/components/FadeInOnScroll";

type IFinalSectionProps = {
  lang?: "vi" | "ko";
};

const LANGUAGE_TEXT = {
  vi: {
    title: "Văn Vương & Ngọc Nhung",
  },
  ko: {
    title: "Van Vuong & Ngoc Nhung",
  },
};

const IMAGE_AVATAR_URL =
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A0105.JPG?updatedAt=1754442935068";

export const FinalSection = ({ lang = "vi" }: IFinalSectionProps) => {
  return (
    <div id="SECTION361" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="GROUP526"
          className="ladi-element"
        >
          <div className="ladi-group">
            <div id="IMAGE439" className="ladi-element">
              <div className="ladi-image">
                <div
                  className="ladi-image-background"
                  style={{
                    backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/the_wedding_bg.png")`,
                  }}
                ></div>
              </div>
            </div>
            <div id="HEADLINE477" className="ladi-element">
              <h3 className="ladi-headline">
                {LANGUAGE_TEXT[lang].title}
                <br />
              </h3>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={1} id="IMAGE440" className="ladi-element">
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("${IMAGE_AVATAR_URL}")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="bounceIn"
          delay={0.5}
          id="IMAGE441"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/thank_you.png")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
