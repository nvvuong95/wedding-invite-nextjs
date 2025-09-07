import FadeInOnScroll from "@/components/FadeInOnScroll";
import { Box } from "@mui/material";

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
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/Latest/4M8A0221-removebg-preview.png?updatedAt=1757246800997";

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
          <div
            className="ladi-image"
            style={{
              backgroundImage: 'url("/images/1746.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Box
              component="img"
              src={`${IMAGE_AVATAR_URL}`}
              alt="image avatar"
              sx={{
                transform: "scale(1.2)",
                transformOrigin: "right",
                // backgroundColor: "#FEEBEA",
              }}
            />
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
