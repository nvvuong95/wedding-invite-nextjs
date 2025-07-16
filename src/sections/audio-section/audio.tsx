import { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";

export const AudioSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showFull, setShowFull] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (audioRef.current && !isPlaying) {
  //       audioRef.current.play().catch(() => {});
  //     }
  //   }, 3000);
  //   return () => clearTimeout(timer);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 32,
        left: 32,
        zIndex: 1400,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <audio
        ref={audioRef}
        loop
        src="https://procare.one/wp-content/uploads/2024/05/EDY-DUC-PHUC.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: showFull ? 2 : 0,
          background: showFull
            ? "linear-gradient(90deg, #f8fafc 60%, #e0e7ff 100%)"
            : "transparent",
          borderRadius: "32px",
          boxShadow: showFull ? "0 8px 32px rgba(60,60,120,0.12)" : "none",
          p: showFull ? 2 : 0,
          minWidth: showFull ? 220 : 56,
          transition:
            "all 0.3s cubic-bezier(.4,2,.6,1), min-width 0.3s cubic-bezier(.4,2,.6,1)",
        }}
      >
        <IconButton
          color="primary"
          sx={{
            bgcolor: "#fff",
            boxShadow: 2,
            mr: showFull ? 1 : 0,
            "&:hover": { bgcolor: "#f0f4ff" },
            transition: "background 0.2s, margin 0.3s cubic-bezier(.4,2,.6,1)",
            animation: isPlaying
              ? "spin-music-icon 1.5s linear infinite"
              : "none",
          }}
          onClick={() => setShowFull((prev) => !prev)}
        >
          <Icon icon="mdi:music" width={28} height={28} />
        </IconButton>
        <style>
          {`
        @keyframes spin-music-icon {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        `}
        </style>
        {showFull && (
          <>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ fontWeight: 600, fontSize: 16, color: "#3b3b5c" }}>
                Nhạc nền
              </Box>
              <Box sx={{ fontSize: 13, color: "#6b7280" }}>
                <span style={{ fontStyle: "italic" }}>
                  {isPlaying ? "Đang phát" : "Nhấn để phát nhạc"}
                </span>
              </Box>
            </Box>
            <IconButton
              color="primary"
              sx={{
                bgcolor: "#fff",
                boxShadow: 2,
                "&:hover": { bgcolor: "#f0f4ff" },
                transition: "background 0.2s",
              }}
              onClick={toggleMusic}
            >
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
                  transform: isPlaying
                    ? "rotate(180deg) scale(1.2)"
                    : "rotate(0deg) scale(1)",
                }}
              >
                <Icon
                  icon={isPlaying ? "mdi:pause" : "mdi:play"}
                  width={28}
                  height={28}
                />
              </span>
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
};
