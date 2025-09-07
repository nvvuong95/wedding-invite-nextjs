import FadeInOnScroll from "@/components/FadeInOnScroll";
import { Box } from "@mui/material";

const LANGUAGE_TEXT = {
  ko: {
    headline: "커플 소개",
    groom: "Van Vuong",
    bride: "Ngoc Nhung",
    groomFamily: "신랑 가족",
    brideFamily: "신부 가족",
    groomParents: "아버지: Nguyen Van Thanh<br/> 어머니: Nguyen Thi Mai",
    brideParents: "어머니: Nguyen Thi Lien",
    groomIntroduction: "우리에게 결혼은 사랑의 끝이 아니라 행복의 시작입니다.",
    brideIntroduction:
      "가장 적절한 순간에, 가장 아름다운 웨딩드레스를 입고, 가장 믿을 수 있는 사람과 결혼하는 것, 그 사람이 바로 당신입니다.",
    groomName: "Van Vuong",
    brideName: "Ngoc Nhung",
  },
  vi: {
    headline: "Giới thiệu cặp đôi",
    groom: "Văn Vương",
    bride: "Ngọc Nhung",
    groomFamily: "Nhà Trai",
    brideFamily: "Nhà Gái",
    groomParents: "Ông: Nguyễn Văn Thành<br /> Bà: Nguyễn Thị Mai",
    brideParents: "Bà: Nguyễn Thị Liên",
    groomIntroduction:
      "Đối với chúng mình hôn nhân không phải là đích đến cuối của tình yêu mà là khởi đầu của hạnh phúc.",
    brideIntroduction:
      "Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất, gả cho người đáng tin cậy nhất, là anh.",
    groomName: "Văn Vương",
    brideName: "Ngọc Nhung",
  },
};

const BACKGROUND_IMAGE_URL =
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/4M8A9178.JPG";

const GROOM_IMAGE_URL =
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/Latest/4M8A0234.JPG?updatedAt=1757234824570";

const BRIDE_IMAGE_URL =
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/Latest/4M8A9349.JPG?updatedAt=1757234812628";

export type CoupleIntroSectionProps = {
  lang?: "vi" | "ko";
};

export const CoupleIntroSection = ({
  lang = "vi",
}: CoupleIntroSectionProps) => {
  return (
    <div id="SECTION358" className="ladi-section">
      <div
        className="ladi-section-background"
        style={{
          backgroundImage: `url("${BACKGROUND_IMAGE_URL}")`,
        }}
      ></div>
      <div className="ladi-overlay"></div>
      <div className="ladi-container">
        <FadeInOnScroll
          delay={0.5}
          direction="down"
          id="IMAGE421"
          className="ladi-element"
        >
          <div className="ladi-image">
            <div
              className="ladi-image-background"
              style={{
                backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/the_wedding.png")`,
              }}
            ></div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="HEADLINE467"
          className="ladi-element"
        >
          <h3 className="ladi-headline">
            {LANGUAGE_TEXT[lang].groomName}&nbsp; &amp;{" "}
            {LANGUAGE_TEXT[lang].brideName}
            <br />
          </h3>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="up"
          delay={1}
          id="GROUP516"
          className="ladi-element"
        >
          <div className="ladi-group">
            {/* <div id="HEADLINE470" className="ladi-element">
              <h3 className="ladi-headline">
                {LANGUAGE_TEXT[lang].groomFamily}
                <br />
              </h3>
            </div> */}
            {/* <div id="PARAGRAPH567" className="ladi-element">
              <div className="ladi-paragraph">
                <span
                  style={{ fontStyle: "normal" }}
                  dangerouslySetInnerHTML={{
                    __html: LANGUAGE_TEXT[lang].groomParents,
                  }}
                ></span>
              </div>
            </div> */}
            <div id="IMAGE424" className="ladi-element">
              <div className="ladi-image">
                <div
                  className="ladi-image-background"
                  style={{
                    backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/husband.png")`,
                  }}
                ></div>
              </div>
            </div>
            {/* <div id="HEADLINE471" className="ladi-element">
              <h3 className="ladi-headline">
                {LANGUAGE_TEXT[lang].brideFamily}
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH568" className="ladi-element">
              <div className="ladi-paragraph">
                <span
                  style={{ fontStyle: "normal" }}
                  dangerouslySetInnerHTML={{
                    __html: LANGUAGE_TEXT[lang].brideParents,
                  }}
                ></span>
              </div>
            </div> */}
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="left"
          delay={1}
          id="GROUP515"
          className="ladi-element"
        >
          <div className="ladi-group">
            <div id="GROUP513" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX424" className="ladi-element">
                  <div className="ladi-box"></div>
                </div>
                <div data-action="true" id="IMAGE422" className="ladi-element">
                  <div className="ladi-image">
                    <Box component="img" src={GROOM_IMAGE_URL}></Box>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE468" className="ladi-element">
              <h3 className="ladi-headline">
                {LANGUAGE_TEXT[lang].groomName}
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH569" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang].groomIntroduction}
                <br />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          direction="right"
          delay={1}
          id="GROUP517"
          className="ladi-element"
        >
          <div className="ladi-group">
            <div id="GROUP514" className="ladi-element">
              <div className="ladi-group">
                <div id="BOX425" className="ladi-element">
                  <div className="ladi-box"></div>
                </div>
                <div data-action="true" id="IMAGE423" className="ladi-element">
                  <div className="ladi-image">
                    <Box component="img" src={BRIDE_IMAGE_URL}></Box>
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE469" className="ladi-element">
              <h3 className="ladi-headline">
                {LANGUAGE_TEXT[lang || "vi"].brideName}
                <br />
              </h3>
            </div>
            <div id="PARAGRAPH570" className="ladi-element">
              <div className="ladi-paragraph">
                {LANGUAGE_TEXT[lang || "vi"].brideIntroduction}
                <br />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
