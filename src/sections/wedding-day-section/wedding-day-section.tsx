"use client";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

type WeddingDaySectionProps = {
  lang?: "vi" | "ko" | "nha-gai" | "nha-trai";
};

const LANGUAGE_TEXT = {
  "nha-gai": {
    headline: "Wedding Day",
    paragraph: "TRÂN TRỌNG KÍNH MỜI",
    button: "Chỉ đường",
    venue: "Tại : Nhà Hàng tiệc cưới Chu Chánh",
    date: "Thứ 7, ngày 25 tháng 10 năm 2025",
    time: "Tiệc tổ chức vào lúc 11 giờ 00 phút",
    address: "TDP 5, Xã Cát Tiên 2, Tỉnh Lâm Đồng",
    dateDetail: "Thứ 7, ngày 25 tháng 10 năm 2025",
    lunarDate: "(Tức ngày 05 tháng 09 năm Ất Tỵ)",
    invitation: [
      'Tới dự buổi tiệc <b style="color: rgb(168, 6, 6)">Lễ Vu Quy</b> chung vui cùng gia đình chúng tôi',
      "Sự hiện diện của quý khách là niềm vinh dự cho gia đình chúng tôi!",
      "Chúng tôi rất mong được đón tiếp quý khách tại buổi tiệc đặc biệt này.",
    ],
    eventType: "TIỆC NHÀ GÁI",
    guest: "Quý khách",
    couple: "Văn Vương & Ngọc Nhung",
    saveTheDate: "25 . 10 . 2025",
    googleMapUrl: "https://maps.app.goo.gl/8xDXM226cs97U7CH6",
  },
  "nha-trai": {
    headline: "Wedding Day",
    paragraph: "TRÂN TRỌNG KÍNH MỜI",
    button: "Chỉ đường",
    venue: "Tại : Nhà hàng tiệc cưới Minh Hồng",
    date: "Chủ Nhật, ngày 26 tháng 10 năm 2025",
    time: "Tiệc tổ chức vào lúc 11 giờ 00 phút",
    address: "Thôn Sơn Hải, Xã Cát Tiên 2, Tỉnh Lâm Đồng",
    dateDetail: "Chủ Nhật, ngày 26 tháng 10 năm 2025",
    lunarDate: "(Tức ngày 06 tháng 09 năm Ất Tỵ)",
    invitation: [
      'Tới dự buổi tiệc <b style="color: rgb(168, 6, 6)">Lễ Thành Hôn</b> chung vui cùng gia đình chúng tôi',
      "Sự hiện diện của quý khách là niềm vinh dự cho gia đình chúng tôi!",
      "Chúng tôi rất mong được đón tiếp quý khách tại buổi tiệc đặc biệt này.",
    ],
    eventType: "TIỆC NHÀ TRAI",
    guest: "Quý khách",
    couple: "Văn Vương & Ngọc Nhung",
    saveTheDate: "26 . 10 . 2025",
    googleMapUrl: "https://maps.app.goo.gl/5wyMnpjHrbcJDdj6A",
  },
  vi: {
    headline: "Wedding Day",
    paragraph: "TRÂN TRỌNG KÍNH MỜI",
    button: "Chỉ đường",
    venue: "Tại : Sảnh Queen 8 - Queen Plaza Tân Bình",
    date: "Thứ 7, ngày 08 tháng 11 năm 2025",
    time: "Tiệc tổ chức vào lúc 18 giờ 00 phút",
    address:
      "Tầng 3, 91B2 Đường Phạm Văn Hai,\nPhường Tân Hòa, TP. Hồ Chí Minh",
    dateDetail: "Thứ 7, ngày 08 tháng 11 năm 2025",
    lunarDate: "(Tức ngày 19 tháng 09 năm Ất Tỵ)",
    invitation: [
      'Tới dự buổi tiệc <b style="color: rgb(168, 6, 6)">Báo Hỉ</b> chung vui cùng gia đình chúng tôi',
      "Sự hiện diện của quý khách là niềm vinh dự cho gia đình chúng tôi!",
      "Chúng tôi rất mong được đón tiếp quý khách tại buổi tiệc đặc biệt này.",
    ],
    eventType: "TIỆC BÁO HỈ",
    guest: "Quý khách",
    couple: "Văn Vương & Ngọc Nhung",
    saveTheDate: "08 . 11 . 2025",
    googleMapUrl: "https://maps.app.goo.gl/JJDLxawCidMtDGvm9",
  },
  ko: {
    headline: "결혼식 날",
    paragraph: "진심으로 초대합니다",
    button: "길찾기",
    venue: "장소: 퀸 홀 8 - 퀸 플라자 떤빈",
    date: "토요일, 2025년 11월 8일",
    time: "연회는 오후 6시 00분에 시작됩니다",
    address: "3층, 91B2 팜반하이 거리,\n떤호아 동, 호치민시",
    dateDetail: "2025년 11월 8일 토요일",
    lunarDate: "(음력 2025년 9월 19일)",
    invitation: [
      '저희 가족과 함께하는 <b style="color: rgb(168, 6, 6)">결혼식</b> 축하 자리에 초대합니다.',
      "귀하의 참석은 저희 가족에게 큰 영광이 될 것입니다!",
      "이 특별한 자리에 귀하를 모시기를 진심으로 기대합니다.",
    ],
    eventType: "결혼식",
    guest: "귀하",
    couple: "Van Vuong & Ngoc Nhung",
    saveTheDate: "08 . 11 . 2025",
    googleMapUrl: "https://maps.app.goo.gl/JJDLxawCidMtDGvm9",
  },
};

const BACKGROUND_IMAGE_URL =
  "https://ik.imagekit.io/n7dpnbw3v/wedding/pre_wedding/Latest/4M8A9178.JPG?updatedAt=1757234813855";

const BACKGROUND_THIEP_CUOI_URL =
  "https://ik.imagekit.io/n7dpnbw3v/wedding/bg-thiep-cuoi.png";

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
            <Box
              sx={(theme) => ({
                width: "100%",
                aspectRatio: { 26: 35 },
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                [theme.breakpoints.down("md")]: {
                  display: "flex",
                  flexDirection: "column",
                  paddingX: 1,
                },
                [theme.breakpoints.up("md")]: {
                  height: "100%",
                },
              })}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "rgb(0, 0, 0) -10px 15px 20px -15px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={BACKGROUND_IMAGE_URL}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* <Box
                  sx={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)", // Backdrop for the whole image area
                  }}
                ></Box> */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    zIndex: 2,
                    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "80px",
                      fontFamily: "VkJLVNoaXNobpQnJcgudHRm",
                      lineHeight: 1.2,
                      color: "rgb(255, 255, 255)",
                      textAlign: "center",
                    }}
                  >
                    Save
                    <br />
                    The Date
                  </Typography>
                  <div id="LINE353">
                    <div className="ladi-line">
                      <div className="ladi-line-container"></div>
                    </div>
                  </div>
                  <div id="PARAGRAPH450">
                    <div className="ladi-paragraph">
                      {LANGUAGE_TEXT[lang].saveTheDate}
                    </div>
                  </div>
                </Box>
              </Box>
              <Box
                sx={(theme) => ({
                  width: "100%",
                  aspectRatio: { 26: 35 },
                  boxShadow: "rgb(0, 0, 0) 10px 15px 20px -15px", // updated box shadow
                  backgroundColor: "rgb(241, 243, 244)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingY: "5rem",
                  gap: 1,
                  backgroundImage: `url(${BACKGROUND_THIEP_CUOI_URL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  [theme.breakpoints.up("md")]: {
                    height: "100%",
                  },
                  [theme.breakpoints.down("md")]: {
                    paddingY: "4rem",
                  },
                })}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: 2,
                  }}
                >
                  <Typography
                    sx={(theme) => ({
                      fontFamily: "Quicksand, sans-serif",
                      lineHeight: 1.6,
                      color: "rgb(0, 0, 0)",
                      textAlign: "center",
                      fontSize: "20px",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "16px",
                      },
                    })}
                  >
                    {LANGUAGE_TEXT[lang].paragraph}
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "18px",
                      fontWeight: "bold",
                      lineHeight: 1.6,
                      color: "rgb(168, 6, 6)",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "14px",
                      },
                      paddingY: 2,
                    })}
                  >
                    {LANGUAGE_TEXT[lang].guest}
                  </Typography>

                  <Typography
                    sx={(theme) => ({
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      textAlign: "center",
                      color: "rgb(0, 0, 0)",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "12px",
                      },
                    })}
                    dangerouslySetInnerHTML={{
                      __html: LANGUAGE_TEXT[lang].invitation[0],
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: 2,
                  }}
                >
                  <Typography
                    className="ladi-headline"
                    sx={(theme) => ({
                      fontFamily: "VVRNIFllbiBUdSdGY",
                      fontSize: "40px",
                      color: "rgb(205, 99, 99)",
                      textAlign: "center",
                      paddingY: 3,
                      fontWeight: 500,
                      [theme.breakpoints.down("md")]: {
                        fontSize: "28px",
                      },
                    })}
                  >
                    {LANGUAGE_TEXT[lang].couple}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "16px",
                        lineHeight: 1.6,
                        textAlign: "center",
                        color: "rgb(0, 0, 0)",
                        [theme.breakpoints.down("md")]: {
                          fontSize: "12px",
                        },
                      })}
                    >
                      {LANGUAGE_TEXT[lang].time}
                    </Typography>
                    <Box>
                      <Typography
                        sx={(theme) => ({
                          fontFamily: "Quicksand, sans-serif",
                          fontSize: "16px",
                          fontWeight: "bold",
                          lineHeight: 1.6,
                          textAlign: "center",
                          [theme.breakpoints.down("md")]: {
                            fontSize: "12px",
                          },
                          color: "rgb(205, 7, 7)",
                        })}
                      >
                        {LANGUAGE_TEXT[lang].date}
                      </Typography>
                      <Typography
                        sx={(theme) => ({
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "14px",
                          lineHeight: 1.6,
                          textAlign: "center",
                          color: "rgb(0, 0, 0)",
                          fontStyle: "italic",
                          [theme.breakpoints.down("md")]: {
                            fontSize: "12px",
                          },
                        })}
                      >
                        {LANGUAGE_TEXT[lang].lunarDate}
                      </Typography>
                    </Box>
                    <Typography
                      sx={(theme) => ({
                        fontFamily: "Mulish, sans-serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        lineHeight: 1.6,
                        textAlign: "center",
                        [theme.breakpoints.down("md")]: {
                          fontSize: "12px",
                        },
                        color: "rgb(135, 9, 9)",
                        paddingY: 1,
                      })}
                    >
                      {LANGUAGE_TEXT[lang].venue}
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        fontFamily: "Quicksand, sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.6,
                        textAlign: "center",
                        color: "rgb(0, 0, 0)",
                        [theme.breakpoints.down("md")]: {
                          fontSize: "10px",
                        },
                      })}
                    >
                      {LANGUAGE_TEXT[lang].address}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: 2,
                  }}
                >
                  <Typography
                    sx={(theme) => ({
                      fontFamily: '"Dancing Script", cursive',
                      fontSize: "18px",
                      lineHeight: 1.6,
                      textAlign: "center",
                      color: "rgb(0, 0, 0)",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "16px",
                      },
                      maxWidth: "70%",
                    })}
                  >
                    {LANGUAGE_TEXT[lang].invitation[1]}
                  </Typography>
                  <Button
                    sx={(theme) => ({
                      marginTop: "1rem",
                      backgroundColor: "#989898",
                      color: "white",
                      padding: "0.5rem 1.5rem",
                      fontSize: "15px",
                      lineHeight: 1.4,
                      fontFamily: "Quicksand, sans-serif",
                      textDecoration: "none",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "13px",
                      },
                    })}
                    startIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ display: "block" }}
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
                        />
                      </svg>
                    }
                  >
                    <a
                      href={LANGUAGE_TEXT[lang].googleMapUrl}
                      target="_blank"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {LANGUAGE_TEXT[lang].button}
                    </a>
                  </Button>
                </Box>
              </Box>
            </Box>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
};
