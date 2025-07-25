"use client";

import VuongNhungWeddingInvitation from "@/sections/vuong-nhung";

export default function Home() {
  if (typeof window === "undefined") {
    return (
      <div
        id="loading-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255,255,255,0.95)",
          zIndex: 3000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          transition: "opacity 0.6s",
          pointerEvents: "auto",
          opacity: 1,
          animation: "fadeOutLoading 1s 2s forwards",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            border: "8px solid #8b4513",
            borderTop: "8px solid #ffd700",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: 30,
          }}
        />
        <div
          style={{
            fontFamily: "UTM Yen Tu, Prata, serif",
            fontSize: "2rem",
            color: "#8b4513",
            letterSpacing: "2px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          초대장을 불러오는 중...
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes fadeOutLoading {
            to {
              opacity: 0;
              pointer-events: none;
              visibility: hidden;
            }
          }
        `}</style>
      </div>
    );
  } else {
    return <VuongNhungWeddingInvitation lang={"ko"} />;
  }
}
