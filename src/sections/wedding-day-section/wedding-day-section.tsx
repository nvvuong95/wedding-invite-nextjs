"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  Divider,
  Link,
  Paper,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { CountdownSection } from "../countdown-section/countdown-section";

export const WeddingDaySection = () => {
  return (
    <Box
      component="section"
      id="wedding-day"
      sx={{
        py: { xs: 5, md: 8 },
        background: "linear-gradient(135deg, #f9f9f9 60%, #f3e5f5 100%)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <FadeInOnScroll direction="down">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            className="wedding-title"
            sx={{
              fontFamily: '"UVN Moi Hong", cursive',
              color: "#000",
              fontStyle: "italic",
              mb: 2,
              fontSize: { xs: 32, md: 80 },
              textShadow: "0 2px 12px #e1bee7",
            }}
          >
            Wedding Day
          </Typography>
        </FadeInOnScroll>
        {/* <FadeInOnScroll direction="up" delay={300}>
          <Typography
            align="center"
            color="text.secondary"
            sx={{
              mb: 4,
              fontSize: { xs: 16, md: 18 },
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Chúng tôi hân hoan chào đón sự hiện diện của bạn trong ngày trọng
            đại này!
          </Typography>
        </FadeInOnScroll> */}
        <FadeInOnScroll direction="up" delay={1000}>
          <Card
            elevation={6}
            sx={{
              mt: 10,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              background: "rgba(255,255,255,0.95)",
              minHeight: 400,
            }}
          >
            {/* Left: Image */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: "rgb(0, 0, 0) -10px 15px 20px -15px", // Left shadow for left box
              }}
            >
              <Box
                component="img"
                src="https://w.ladicdn.com/s900x1200/5c728619c417ab07e5194baa/z5764697493791_4691cbad22819b89413fe1451ebc1ac3-20240827165316-wyiof.jpg"
                alt="Wedding Couple"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  mx: "auto",
                  zIndex: 2,
                }}
              />
              {/* Save The Date overlay - full backdrop and centered text */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(0,0,0,0.5)", // Full backdrop
                  p: 0,
                  textAlign: "center",
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    px: { xs: 2, md: 5 },
                    py: { xs: 1.5, md: 2.5 },
                    textAlign: "center",
                    background: "transparent",
                    borderRadius: 3,
                    opacity: 1,
                    position: "relative",
                    overflow: "visible",
                    width: "100%",
                    maxWidth: 320,
                    mx: "auto",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -18,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#fff",
                      borderRadius: "50%",
                      width: 36,
                      height: 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 8px #b388ff33",
                      zIndex: 2,
                    }}
                  >
                    <Icon
                      icon="mdi:calendar-heart"
                      color="#ab47bc"
                      width={24}
                      height={24}
                    />
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: 1,
                      mt: 2,
                      mb: 0.5,
                      fontFamily: '"UVN Moi Hong", cursive',
                      fontSize: 32,
                    }}
                  >
                    Save The Date
                  </Typography>
                  <Divider sx={{ my: 1.2, borderColor: "#b388ff44" }} />
                  <Typography
                    variant="h4"
                    sx={{
                      letterSpacing: 6,
                      fontWeight: 800,
                      color: "#ffffff",
                      fontFamily: '"UVN Moi Hong", cursive',
                      textShadow: "0 2px 12px #ede7f6",
                      mb: 0.5,
                    }}
                  >
                    08 . 11 . 2025
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={
                      <Icon icon="mdi:calendar-plus" width={20} height={20} />
                    }
                    href="/wedding-invite.ics"
                    download
                    sx={{
                      mt: 1,
                      mb: 1,
                      fontWeight: 600,
                      borderRadius: 2,
                      borderColor: "#b388ff",
                      color: "#fff",
                      background: "rgba(171,71,188,0.15)",
                      "&:hover": {
                        background: "#b388ff",
                        color: "#fff",
                        borderColor: "#ab47bc",
                      },
                      fontSize: 14,
                      px: 2.5,
                      py: 0.7,
                    }}
                  >
                    Thêm vào lịch
                  </Button>
                </Paper>
              </Box>
              {/* Decorative overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 24,
                  left: 24,
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#fff8e1",
                  opacity: 0.7,
                  zIndex: 1,
                  boxShadow: "0 2px 8px #e1bee7",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#b388ff",
                  opacity: 0.18,
                  zIndex: 1,
                }}
              />
            </Box>
            {/* Right: Invite Card */}
            <Box
              sx={{
                flex: 1,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "transparent",
                boxShadow: "rgb(0, 0, 0) 10px 15px 20px -15px",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mb={2}
              >
                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  TRÂN TRỌNG KÍNH MỜI
                </Typography>

                <Typography
                  variant="h6"
                  align="center"
                  gutterBottom
                  sx={{
                    color: "rgb(168, 6, 6)",
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  Quý khách
                </Typography>
                <Typography align="center" variant="body2" sx={{ mt: 1 }}>
                  Tới dự bữa Tiệc <strong>Báo Hỉ</strong> cùng gia đình chúng
                  tôi
                </Typography>

                <Typography
                  variant="h4"
                  align="center"
                  sx={{
                    my: 4,
                    fontFamily: '"UVN Moi Hong", cursive',
                    letterSpacing: 1,
                    textShadow: "0 2px 8px #f3e5f5",
                    fontSize: { xs: 28, md: 36 },
                  }}
                >
                  Văn Vương & Ngọc Nhung
                </Typography>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: "#ab47bc",
                      fontSize: 20,
                      mb: 0.5,
                    }}
                  >
                    Tại: Queen Plaza Tân Bình
                  </Typography>
                  {/* <Typography
                variant="body2"
                sx={{
                  fontWeight: 700,
                  color: "#7c43bd",
                  letterSpacing: 1,
                  mb: 1,
                }}
                >
                TIỆC BÁO HỈ
                </Typography> */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                    }}
                  >
                    <b>18:00</b> | Thứ 7, 08.11.2025
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#888",
                    }}
                  >
                    (19/09/Ất Tỵ)
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      fontWeight: 500,
                      fontSize: 15.5,
                    }}
                  >
                    Sảnh Queen 8 - Tầng 3<br />
                    91B2 Phạm Văn Hai, P.3, Tân Bình, HCM
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography
                  align="center"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    fontSize: { xs: 15, md: 17 },
                    fontStyle: "italic",
                  }}
                >
                  Sự hiện diện của quý khách là niềm vinh dự cho gia đình chúng
                  tôi!
                </Typography>

                <Box display="flex" justifyContent="center" mb={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: 22,
                        }}
                      >
                        <Icon icon="mdi:map-marker" width={22} height={22} />
                      </span>
                    }
                    component={Link}
                    href="https://maps.app.goo.gl/JJDLxawCidMtDGvm9"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 4,
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 600,
                      background:
                        "linear-gradient(90deg, #e1bee7 60%, #b388ff 100%)",
                      color: "#6a1b9a",
                      boxShadow: "0 2px 8px #b388ff44",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #b388ff 60%, #ab47bc 100%)",
                        color: "#fff",
                      },
                    }}
                  >
                    Chỉ đường
                  </Button>
                </Box>
              </Box>
            </Box>
          </Card>
        </FadeInOnScroll>
      </Container>

      <CountdownSection />
    </Box>
  );
};
