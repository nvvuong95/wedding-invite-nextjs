import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  Stack,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
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
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{
            width: 48,
            borderRadius: "50%",
            "& .MuiFab-primary": {
              bgcolor: "#797171",
              color: "white",
              "&:hover": {
                bgcolor: "#5a5a5a",
              },
            },
            // Remove animation from SpeedDial container
          }}
          icon={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "floatingNavPulse 2s infinite",
                "@keyframes floatingNavPulse": {
                  "0%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.15)" },
                  "100%": { transform: "scale(1)" },
                },
              }}
            >
              <Icon icon="mdi:format-list-bulleted" fontSize={20} />
            </Box>
          }
        >
          <SpeedDialAction
            key="location"
            icon={<Icon icon="mdi:map-marker" fontSize={25} />}
            tooltipTitle="Địa điểm"
            onClick={() => {
              document
                .getElementById("wedding-day")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <SpeedDialAction
            key="invite"
            icon={<Icon icon="mdi:email" />}
            tooltipTitle="Thiệp mời"
            onClick={() => {
              document
                .getElementById("wedding-day")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <SpeedDialAction
            key="couple"
            icon={<Icon icon="mdi:account-group" />}
            tooltipTitle="Chân dung cô dâu chú rể"
            onClick={() => {
              document
                .getElementById("couple-intro")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </SpeedDial>
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
