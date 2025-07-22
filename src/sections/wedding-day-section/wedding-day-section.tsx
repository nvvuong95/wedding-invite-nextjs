"use client";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { Typography } from "@mui/material";
import { th } from "framer-motion/client";
import React from "react";

type WeddingDaySectionProps = {
  lang?: "vi" | "ko";
};

const LANGUAGE_TEXT = {
  vi: {
    headline: "Wedding Day",
    paragraph: "TRÂN TRỌNG KÍNH MỜI",
    button: "Chỉ đường",
    venue: "Tại : Queen Plaza Tân Bình",
    date: "Thứ 7, ngày 08 tháng 11 năm 2025",
    time: "Tổ chức vào lúc 18 giờ 00 phút",
    address:
      "Sảnh Queen 8 - Tầng 3, 91B2 Phạm Văn Hai, Phường 3, Tân Bình, Hồ Chí Minh",
    dateDetail: "Thứ 7, ngày 08 tháng 11 năm 2025",
    lunarDate: "(Tức ngày 19 tháng 09 năm Ất Tỵ)",
    invitation: [
      "Tới dự bữa Tiệc <b>Báo Hỉ</b> cùng gia đình chúng tôi",
      "Sự hiện diện của quý khách là niềm vinh dự cho gia đình chúng tôi!",
      "Chúng tôi rất mong được đón tiếp quý khách tại buổi tiệc đặc biệt này.",
    ],
    eventType: "TIỆC BÁO HỈ",
    guest: "Quý khách",
    couple: "Văn Vương & Ngọc Nhung",
  },
  ko: {
    headline: "결혼식 날",
    paragraph: "진심으로 초대합니다",
    button: "길찾기",
    venue: "장소 : 퀸 플라자 탄빈",
    date: "토요일, 2025년 11월 8일",
    time: "오후 6시에 시작합니다",
    address: "퀸 8홀 - 3층, 91B2 팜 반 하이, 푸옝 3, 탄빈, 호치민",
    dateDetail: "2025년 11월 8일 토요일",
    lunarDate: "(음력 2025년 9월 19일)",
    invitation: [
      "저희 가족과 함께 <b>결혼식</b>에 참석해 주세요",
      "귀하의 참석은 저희 가족에게 큰 영광입니다!",
      "이 특별한 날에 귀하를 모시게 되어 매우 기쁩니다.",
    ],
    eventType: "결혼식",
    guest: "귀하",
    couple: "Van Vuong & Ngoc Nhung",
  },
};

export const WeddingDaySection = ({ lang = "vi" }: WeddingDaySectionProps) => {
  return (
    <div id="SECTION353" className="ladi-section">
      <div className="ladi-section-background"></div>
      <div className="ladi-container">
        <FadeInOnScroll delay={0.5} direction="down">
          <div id="HEADLINE428" className="ladi-element">
            <h3 className="ladi-headline">{LANGUAGE_TEXT[lang].headline}</h3>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll
          data-action="true"
          id="GROUP469"
          className="ladi-element"
        >
          <div className="ladi-group">
            <div id="BOX405" className="ladi-element">
              <div className="ladi-box ladi-transition"></div>
            </div>
            <div id="GROUP468" className="ladi-element">
              <div className="ladi-group">
                <div id="PARAGRAPH441" className="ladi-element">
                  <div className="ladi-paragraph">
                    {LANGUAGE_TEXT[lang].paragraph}
                  </div>
                </div>
                <div id="FORM344" data-config-id="" className="ladi-element">
                  <div className="ladi-form">
                    <div id="FORM_ITEM366" className="ladi-element">
                      <div className="ladi-form-item-container">
                        <div className="ladi-form-item-background"></div>
                        <div className="ladi-form-item">
                          <span tabIndex={1} className="ladi-form-control">
                            {LANGUAGE_TEXT[lang].guest}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="PARAGRAPH442" className="ladi-element">
                  <div className="ladi-paragraph">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: LANGUAGE_TEXT[lang].invitation[0],
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="HEADLINE433" className="ladi-element">
              <Typography
                className="ladi-headline"
                sx={(theme) => ({
                  fontFamily: "var(--ladi-font-family-1)",
                  fontSize: "1.5rem",
                  color: "var(--ladi-color-1)",
                  [theme.breakpoints.up("md")]: { fontSize: "2.5rem" },
                  textAlign: "center",
                })}
              >
                {LANGUAGE_TEXT[lang].couple}
              </Typography>
            </div>
            <div id="HEADLINE435" className="ladi-element">
              <h3 className="ladi-headline ladi-transition">
                {LANGUAGE_TEXT[lang].invitation[1]}
              </h3>
            </div>
            <div data-action="true" id="GROUP462" className="ladi-element">
              <div
                className="ladi-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://maps.app.goo.gl/JJDLxawCidMtDGvm9"
                  target="_blank"
                  id="BUTTON396"
                  className="ladi-element"
                >
                  <div className="ladi-button">
                    <div className="ladi-button-background"></div>
                    <div
                      id="BUTTON_SHAPE396"
                      className="ladi-element ladi-button-shape"
                    >
                      <div className="ladi-shape">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="none"
                          viewBox="0 0 24 24"
                          className=""
                          fill="rgba(255, 255, 255, 1)"
                        >
                          <use xlinkHref="#shape_gFxNLGjWpI"></use>
                        </svg>
                      </div>
                    </div>
                    <div
                      id="BUTTON_TEXT396"
                      className="ladi-element ladi-button-headline"
                    >
                      <p className="ladi-headline">
                        {LANGUAGE_TEXT[lang].button}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div id="GROUP464" className="ladi-element">
              <div className="ladi-group">
                <div id="IMAGE408" className="ladi-element">
                  <div className="ladi-image">
                    <div
                      className="ladi-image-background"
                      style={{
                        backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/IMG_6547.JPG")`,
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="ladi-overlay"></div>
                  </div>
                </div>
                <div id="GROUP467" className="ladi-element">
                  <div className="ladi-group">
                    <div id="HEADLINE436" className="ladi-element">
                      <h3 className="ladi-headline">
                        Save
                        <br />
                      </h3>
                    </div>
                    <div id="HEADLINE437" className="ladi-element">
                      <h3 className="ladi-headline">
                        The Date
                        <br />
                      </h3>
                    </div>
                    <div id="LINE353" className="ladi-element">
                      <div className="ladi-line">
                        <div className="ladi-line-container"></div>
                      </div>
                    </div>
                    <div id="PARAGRAPH450" className="ladi-element">
                      <div className="ladi-paragraph">08 . 11 . 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP465" className="ladi-element">
              <div className="ladi-group">
                <div id="HEADLINE434" className="ladi-element">
                  <h3 className="ladi-headline ladi-transition">
                    {LANGUAGE_TEXT[lang].venue}
                    <br />
                  </h3>
                </div>
                <div id="PARAGRAPH451" className="ladi-element">
                  <div className="ladi-paragraph">
                    {LANGUAGE_TEXT[lang].eventType}
                  </div>
                </div>
                <div id="PARAGRAPH452" className="ladi-element">
                  <div className="ladi-paragraph">
                    {LANGUAGE_TEXT[lang].time}
                  </div>
                </div>
                <div id="PARAGRAPH453" className="ladi-element">
                  <div className="ladi-paragraph">
                    {LANGUAGE_TEXT[lang].date}
                  </div>
                </div>
                <div id="PARAGRAPH454" className="ladi-element">
                  <div className="ladi-paragraph">
                    {LANGUAGE_TEXT[lang].lunarDate}
                  </div>
                </div>
                <div id="PARAGRAPH455" className="ladi-element">
                  <div className="ladi-paragraph">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: LANGUAGE_TEXT[lang].address,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
