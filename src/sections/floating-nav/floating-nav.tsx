import React, { useState } from "react";
import { Box, Button, IconButton, Drawer, Stack } from "@mui/material";
import { Icon } from "@iconify/react";

export const FloatingNav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openGallery = () => {
    alert("Open gallery!");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <Drawer
        anchor="right"
        open={showMenu}
        onClose={() => setShowMenu(false)}
        PaperProps={{
          sx: { width: 260, p: 2, borderRadius: "16px 0 0 16px" },
        }}
      >
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Button
            startIcon={<Icon icon="mdi:map-marker" />}
            onClick={() => {
              setShowMenu(false);
              document
                .getElementById("wedding-day")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outlined"
            color="primary"
          >
            Địa điểm
          </Button>
          <Button
            startIcon={<Icon icon="mdi:email" />}
            onClick={() => {
              setShowMenu(false);
              document
                .getElementById("wedding-day")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outlined"
            color="primary"
          >
            Thiệp mời
          </Button>
          <Button
            startIcon={<Icon icon="mdi:heart" />}
            onClick={() => {
              setShowMenu(false);
              document
                .getElementById("love-story")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outlined"
            color="primary"
          >
            Câu chuyện
          </Button>
          <Button
            startIcon={<Icon icon="mdi:account-group" />}
            onClick={() => {
              setShowMenu(false);
              document
                .getElementById("couple-intro")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outlined"
            color="primary"
          >
            Chân dung cô dâu chú rể
          </Button>
          <Button
            startIcon={<Icon icon="mdi:camera" />}
            onClick={() => {
              setShowMenu(false);
              openGallery();
            }}
            variant="outlined"
            color="primary"
          >
            Hình ảnh
          </Button>
        </Stack>
        <IconButton
          sx={{ position: "absolute", top: 8, right: 8 }}
          onClick={() => setShowMenu(false)}
        >
          <Icon icon="mdi:close" />
        </IconButton>
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          background: "rgba(255,255,255,0.85)",
          borderRadius: "24px",
          boxShadow: 3,
          p: 1,
        }}
      >
        <IconButton
          color="primary"
          onClick={() => setShowMenu(true)}
          sx={{ bgcolor: "background.paper" }}
        >
          <Icon icon="mdi:menu" />
        </IconButton>
        <IconButton
          color="primary"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{ bgcolor: "background.paper" }}
        >
          <Icon icon="mdi:arrow-up" />
        </IconButton>
      </Box>
    </Box>
  );
};
