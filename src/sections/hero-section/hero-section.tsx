import "./hero-section.css";
import FadeInOnScroll from "@/components/FadeInOnScroll";

const HEADLINE_TEXT = {
  vi: "Văn Vương & Ngọc Nhung",
  ko: "Van Vuong & Ngoc Nhung",
};

const PARAGRAPH_TEXT = {
  vi: "Ở thời điểm phù hợp nhất, mặc lên người bộ váy cưới đẹp nhất, gả cho người đáng tin cậy nhất.",
  ko: "가장 적절한 순간에, 가장 아름다운 웨딩드레스를 입고, 가장 신뢰할 수 있는 사람에게 시집갑니다.",
};

type HeroSectionProps = {
  lang?: "vi" | "ko";
};

export const HeroSection = ({ lang = "vi" }: HeroSectionProps) => {
  return (
    <div id="SECTION1" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-overlay"></div>
      <div className="ladi-container">
        <div id="IMAGE407" className="ladi-element">
          <div className="ladi-image">
            <div className="ladi-image-background"></div>
            <div className="ladi-overlay"></div>
          </div>
        </div>
        <FadeInOnScroll delay={0.5} direction="down">
          <div id="HEADLINE427" className="ladi-element">
            <h3 className="ladi-headline">
              {HEADLINE_TEXT[lang]}
              <br />
            </h3>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.5} direction="up">
          <div id="PARAGRAPH439" className="ladi-element">
            <div className="ladi-paragraph">{PARAGRAPH_TEXT[lang]}</div>
          </div>
        </FadeInOnScroll>
        <div id="GROUP537" className="ladi-element">
          <div className="ladi-group">
            <div id="GROUP538" className="ladi-element">
              <div className="ladi-group">
                <div id="GROUP539" className="ladi-element">
                  <div className="ladi-group">
                    <div
                      data-action="true"
                      id="GROUP540"
                      className="ladi-element"
                    >
                      <div className="ladi-group">
                        <div id="BOX429" className="ladi-element">
                          <div className="ladi-box ladi-transition"></div>
                        </div>
                        <div id="SHAPE439" className="ladi-element">
                          <div className="ladi-shape">
                            <img
                              src="./images/svg/ladi.svg"
                              width="100%"
                              height="100%"
                              className=""
                              alt="Ladi Logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-action="true"
                      id="GROUP541"
                      className="ladi-element"
                    >
                      <div className="ladi-group">
                        <div id="BOX430" className="ladi-element">
                          <div className="ladi-box ladi-transition"></div>
                        </div>
                        <div id="SHAPE440" className="ladi-element">
                          <div className="ladi-shape">
                            <img src="./images/svg/ladi1.svg" alt="Ladi Logo" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-action="true"
                      id="GROUP542"
                      className="ladi-element"
                    >
                      <div className="ladi-group">
                        <div id="BOX431" className="ladi-element">
                          <div className="ladi-box ladi-transition"></div>
                        </div>
                        <div id="SHAPE441" className="ladi-element">
                          <div className="ladi-shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 64 64"
                              x="0px"
                              y="0px"
                              preserveAspectRatio="none"
                              width="100%"
                              height="100%"
                              className=""
                              fill="rgba(255, 255, 255, 1)"
                            >
                              <path d="M61.029 2.28501C61.9762 2.85331 62.2833 4.08183 61.715 5.02899L52.115 21.029C51.7781 21.5905 51.1876 21.9515 50.5342 21.9955C49.8808 22.0394 49.2473 21.7607 48.8383 21.2494L42.4383 13.2494C41.7482 12.3869 41.8881 11.1283 42.7506 10.4383C43.6131 9.74824 44.8717 9.88808 45.5617 10.7506L50.1649 16.5045L58.285 2.97101C58.8533 2.02385 60.0818 1.71671 61.029 2.28501Z"></path>
                              <path d="M16 6C10.4772 6 6 10.4771 6 16V48C6 53.5228 10.4772 58 16 58H48C53.5228 58 58 53.5228 58 48V26C58 24.8954 58.8954 24 60 24C61.1046 24 62 24.8954 62 26V48C62 55.732 55.732 62 48 62H16C8.26801 62 2 55.732 2 48V16C2 8.26801 8.26801 2 16 2H38C39.1046 2 40 2.89543 40 4C40 5.10457 39.1046 6 38 6H16Z"></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M32 14C27.5817 14 24 17.5817 24 22C24 26.4183 27.5817 30 32 30C36.4183 30 40 26.4183 40 22C40 17.5817 36.4183 14 32 14ZM28 22C28 19.7909 29.7909 18 32 18C34.2091 18 36 19.7909 36 22C36 24.2091 34.2091 26 32 26C29.7909 26 28 24.2091 28 22Z"
                              ></path>
                              <path d="M30 32C22.268 32 16 38.268 16 46V48C16 49.1046 16.8954 50 18 50C19.1046 50 20 49.1046 20 48V46C20 40.4771 24.4772 36 30 36V42C30 43.1046 30.8954 44 32 44C33.1046 44 34 43.1046 34 42V36C39.5228 36 44 40.4771 44 46V48C44 49.1046 44.8954 50 46 50C47.1046 50 48 49.1046 48 48V46C48 38.268 41.732 32 34 32H30Z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-action="true"
                      id="GROUP543"
                      className="ladi-element"
                    >
                      <div className="ladi-group">
                        <div id="BOX432" className="ladi-element">
                          <div className="ladi-box ladi-transition"></div>
                        </div>
                        <div id="SHAPE442" className="ladi-element">
                          <div className="ladi-shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              data-name="Layer 1"
                              viewBox="0 0 100 100"
                              x="0px"
                              y="0px"
                              preserveAspectRatio="none"
                              width="100%"
                              height="100%"
                              className=""
                              fill="rgba(255, 255, 255, 1)"
                            >
                              <path d="m61.05,8c-4.31,0-8.21,1.74-11.05,4.55-2.84-2.81-6.74-4.55-11.05-4.55-8.67,0-15.71,5.82-15.71,15.71,0,13.96,26.76,31.41,26.76,31.41,0,0,26.76-15.12,26.76-31.41,0-8.43-7.03-15.71-15.71-15.71Zm-11.05,22.13c.12,0,.23.02.33.04,3.16.18,5.68,2.79,5.68,6,0,2.8-1.92,5.15-4.52,5.82v2.77c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-2.77c-2.59-.67-4.52-3.02-4.52-5.82,0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5c0,1.66,1.35,3.01,3.02,3.01s3.02-1.35,3.02-3.01-1.35-3.02-3.02-3.02c-.12,0-.23-.02-.33-.04-3.16-.18-5.68-2.79-5.68-6,0-2.8,1.92-5.15,4.52-5.82v-2.71c0-.83.67-1.5,1.5-1.5s1.5.67,1.5,1.5v2.71c2.59.67,4.52,3.02,4.52,5.82,0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5c0-1.66-1.35-3.02-3.02-3.02s-3.02,1.35-3.02,3.02,1.35,3.01,3.02,3.01Z"></path>
                              <path d="m87.72,66.64l-.26-.24c-.85-.76-2.05-1.03-3.14-.71l-15.68,6.89c-.03-.12-.04-.25-.08-.36-.33-.91-1.08-1.61-1.99-1.86l-17.08-5.13c-2.39-.72-4.92-.75-7.32-.1l-15.14,4.12-3.3-.05.02-1.29c.01-.97-.65-1.81-1.59-2.02l-8.8-1.99c-1.09-.25-2.13.57-2.14,1.69l-.28,20.48c-.02,1.1.97,1.94,2.06,1.75l8.84-1.55c.97-.17,1.68-1,1.69-1.99h0s1.96-.03,1.96-.03l33.09,4.38c.67.09,1.34.13,2,.13,3.13,0,6.19-.97,8.77-2.8l18.26-12.95.14-.11c.88-.8,1.39-1.94,1.39-3.13s-.51-2.33-1.4-3.13Zm-67.2,16.82l-6.59,1.15.24-17.44,6.55,1.48-.21,14.8Zm65.25-12.83l-18.17,12.89c-2.52,1.79-5.59,2.54-8.65,2.14l-33.2-4.39h-.11s-2.1.02-2.1.02l.13-9.08,3.72.05,15.55-4.23c1.86-.51,3.82-.48,5.67.07l17.11,5.13c-1.35,1.94-3.72,2.9-6.05,2.44l-10.27-2.04c-.81-.16-1.6.37-1.76,1.18s.37,1.6,1.18,1.76l10.27,2.04c.58.12,1.17.17,1.74.17,2.02,0,3.97-.7,5.54-1.94l18.85-8.29c.08,0,.16.02.22.07l.26.24c.26.23.4.55.4.9,0,.33-.12.63-.35.86Z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-action="true" id="GROUP544" className="ladi-element">
                  <div className="ladi-group">
                    <div id="BOX433" className="ladi-element">
                      <div className="ladi-box ladi-transition"></div>
                    </div>
                    <div id="SHAPE443" className="ladi-element">
                      <div className="ladi-shape ladi-transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100%"
                          viewBox="0 -960 960 960"
                          width="100%"
                          preserveAspectRatio="none"
                          className=""
                          fill="rgba(255, 255, 255, 1)"
                        >
                          <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
