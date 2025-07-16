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
                <div className="ladi-image-background"></div>
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
            <div className="ladi-image-background"></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="bounceIn"
          delay={0.5}
          id="IMAGE441"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div className="ladi-image-background"></div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
