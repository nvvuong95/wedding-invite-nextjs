import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const targetDate = new Date("2025-11-08T18:00:00");

const getCountdown = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
  const hours = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0);
  const minutes = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0);
  const seconds = Math.max(Math.floor((diff / 1000) % 60), 0);

  return { days, hours, minutes, seconds };
};

export const CountdownSection = () => {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      id="countdown"
      sx={{
        py: { xs: 6, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          textAlign: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Dancing Script, cursive",
                color: "#c97b63",
                mb: 2,
                fontWeight: 700,
                letterSpacing: 1,
                fontSize: { xs: 28, md: 34 },
              }}
            >
              Đếm ngược đến ngày cưới
            </Typography>
          </motion.div>
        </motion.div>
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={{ xs: 1.5, md: 3 }}>
            {[
              { label: "Ngày", value: countdown.days },
              { label: "Giờ", value: countdown.hours },
              { label: "Phút", value: countdown.minutes },
              { label: "Giây", value: countdown.seconds },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, #fff3e0 60%, #ffe0e0 100%)",
                    boxShadow: "none",
                    width: { xs: 70, sm: 100, md: 130 },
                    height: { xs: 70, sm: 100, md: 130 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.value}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "relative",
                        zIndex: 1,
                        marginTop: 0,
                        marginBottom: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "60%",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#c97b63",
                          fontWeight: 700,
                          letterSpacing: 2,
                          mb: 0.5,
                          fontFamily: "Dancing Script, cursive",
                          fontSize: { xs: 26, sm: 32, md: 38 },
                        }}
                      >
                        {String(item.value).padStart(2, "0")}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#a0522d",
                      fontWeight: 500,
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: { xs: 14, md: 18 },
                      letterSpacing: 1,
                      position: "relative",
                      zIndex: 1,
                      mt: 0.5,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </Box>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "#c97b63",
              fontFamily: "Dancing Script, cursive",
              fontSize: { xs: 16, md: 22 },
              mt: 2,
            }}
          >
            Hân hoan chào đón bạn đến dự lễ cưới của chúng tôi!
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};
