"use client";

import { useState, useEffect } from "react";
import VuongNhungWeddingInvitation from "@/sections/vuong-nhung";

const AUTH_KEY = "wedding_invite_authorized";

export default function Home() {
  const [code, setCode] = useState("");
  const [authorized, setAuthorized] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("code")?.toLowerCase() === "vuongnhung") {
        setAuthorized(true);
        sessionStorage.setItem(AUTH_KEY, "true");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Kiểm tra trạng thái xác thực
      const isAuth = sessionStorage.getItem(AUTH_KEY) === "true";
      // setAuthorized(isAuth);
      setIsReady(true);
    }
  }, []);

  // Xác thực bằng mã
  const handleAuth = () => {
    if (code.trim().toLowerCase() === "vuongnhung") {
      setAuthorized(true);
      sessionStorage.setItem(AUTH_KEY, "true");
    } else {
      alert("Mã không đúng. Vui lòng thử lại.");
    }
  };

  if (typeof window === "undefined" || !isReady) {
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
          Đang tải thiệp mời...
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
  }

  if (!authorized) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url("https://ik.imagekit.io/n7dpnbw3v/wedding/window-room-with-surreal-mystical-view.jpg")`,
          backgroundSize: "contain",
          backgroundBlendMode: "darken",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            pointerEvents: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.85)",
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(139,69,19,0.08)",
                padding: "32px 28px 24px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 320,
              }}
            >
              <div
                style={{
                  fontFamily: "UTM Yen Tu, Prata, serif",
                  fontSize: "2.2rem",
                  color: "#8b4513",
                  marginBottom: 28,
                  letterSpacing: "2px",
                  fontWeight: 500,
                  textAlign: "center",
                  textShadow:
                    "0 2px 8px #ffe4e1, 0 0 12px #fffbe6, 0 0 24px #ffd700",
                  filter: "brightness(1.25)",
                }}
              >
                Đây là trang nội bộ
                <br />
                Vui lòng nhập mã để vào
              </div>

              <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Nhập mã truy cập"
                style={{
                  padding: "12px 18px",
                  fontSize: "1.15rem",
                  borderRadius: 10,
                  border: "1.5px solid #8b4513",
                  marginBottom: 18,
                  outline: "none",
                  width: 220,
                  textAlign: "center",
                  background: "#fffbe6",
                  boxShadow: "0 2px 8px #ffe4e1",
                  transition: "border 0.2s",
                }}
                onFocus={(e) => (e.target.style.border = "2px solid #ffd700")}
                onBlur={(e) => (e.target.style.border = "1.5px solid #8b4513")}
              />
              <button
                onClick={handleAuth}
                style={{
                  padding: "12px 32px",
                  fontSize: "1.05rem",
                  borderRadius: 10,
                  border: "none",
                  background:
                    "linear-gradient(90deg, #8b4513 60%, #ffd700 100%)",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                  boxShadow: "0 2px 8px #ffe4e1",
                  letterSpacing: "1px",
                  transition: "background 0.2s",
                }}
              >
                Vào trang
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        animation: "fadeInInvitation 1.2s",
      }}
    >
      <VuongNhungWeddingInvitation />
      <style>{`
        @keyframes fadeInInvitation {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
