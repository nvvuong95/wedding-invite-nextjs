import React from "react";
import { Box, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

export const FloatingNav = () => {
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
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 1,
          zIndex: 1300,
        }}
      >
        <IconButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            borderRadius: "50%",
            width: 50,
            height: 50,
            boxShadow: 2,
            bgcolor: "#797171",
            color: "white",
            "&:hover": {
              bgcolor: "#5a5a5a",
            },
            transition: "background-color 0.3s ease",
          }}
        >
          <Icon icon="mdi:arrow-up" />
        </IconButton>
      </Box>
    </Box>
  );
};
