import { Box, Typography } from "@mui/material";
import "./hero-section.css";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import { useBottomPadding } from "@/hooks/use-bottom-padding";

export const HeroSection = () => {
  const bottomPadding = useBottomPadding();

  return (
    <section
      id="hero"
      style={{
        height: `calc(100vh - ${bottomPadding}px)`,
        background:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://static.ladipage.net/5c728619c417ab07e5194baa/z5852503381355_f429ee1d082b65f157e1c028202455db-20240921043754-55e99.jpg') center/cover",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: 800,
          padding: 2,
          paddingBottom: 6,
        }}
      >
        <FadeInOnScroll direction="down">
          <Typography
            sx={(theme) => ({
              fontFamily: "UTM Yen Tu",
              fontWeight: 400,
              fontSize: "4rem",
              textShadow: "2px 2px 8px rgba(139,69,19,0.3)",
              paddingBottom: 8,
              [theme.breakpoints.down("sm")]: { fontSize: "35px" },
              // [theme.breakpoints.down("md")]: { fontSize: "3.5rem" },
            })}
          >
            Văn Vương & Ngọc Nhung
          </Typography>
        </FadeInOnScroll>
        <FadeInOnScroll direction="up">
          <Typography
            sx={(theme) => ({
              fontSize: "1.2rem",
              lineHeight: 1.6,
              maxWidth: 600,
              margin: "0 auto",
              [theme.breakpoints.down("sm")]: {
                fontSize: "14px",
                maxWidth: 340,
              },
            })}
          >
            Ở thời điểm phù hợp nhất, mặc lên người bộ váy cưới đẹp nhất, gả cho
            người đáng tin cậy nhất.
          </Typography>
        </FadeInOnScroll>
      </Box>
    </section>
  );
};
