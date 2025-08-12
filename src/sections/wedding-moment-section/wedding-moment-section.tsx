import FadeInOnScroll from "@/components/FadeInOnScroll";
import { useLightbox } from "@/context/lightbox-context";
import { Box } from "@mui/material";

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

const LIST_IMAGE = [
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A9849.JPG?updatedAt=1754443059112",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A9970.JPG?updatedAt=1754442929505",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A9863.JPG?updatedAt=1754442930408",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A0102.JPG?updatedAt=1754442934434",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A0160.JPG?updatedAt=1754442938386",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A0210.JPG?updatedAt=1754442940281",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A8557.JPG?updatedAt=1754442961544",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A8663.JPG?updatedAt=1754442970666",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A8909.JPG?updatedAt=1754442980811",
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A9178.JPG?updatedAt=1754443004617",
];

export const WeddingMomentSection = ({
  lang = "vi",
}: WeddingMomentSectionProps) => {
  const { onDisplay } = useLightbox();

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
            <Box
              component="img"
              src={LIST_IMAGE[0]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 0,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE431"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[1]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 1,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE432"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[2]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 2,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE433"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[3]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 3,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE434"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[4]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 4,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE425"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[5]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 5,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE426"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[6]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 6,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE427"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[7]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 7,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE428"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[8]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 8,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="IMAGE429"
          className="ladi-element"
        >
          <div className="ladi-image">
            <Box
              component="img"
              src={LIST_IMAGE[9]}
              sx={{ cursor: "pointer" }}
              onClick={() =>
                onDisplay({
                  index: 9,
                  slides: LIST_IMAGE.map((src) => ({ src })),
                })
              }
            ></Box>
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
