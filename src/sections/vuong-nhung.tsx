"use client";

import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import { HeroSection } from "./hero-section/hero-section";
import { AudioSection } from "./audio-section/audio";
import { FloatingNav } from "./floating-nav/floating-nav";
import { WeddingDaySection } from "./wedding-day-section/wedding-day-section";

// Types for component props
interface WeddingInvitationProps {
  className?: string;
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const VuongNhungWeddingInvitation: React.FC<WeddingInvitationProps> = ({
  className = "",
}) => {
  // State management
  const [showMenu, setShowMenu] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [guestName, setGuestName] = useState("");
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Wedding date: November 8, 2025 at 18:00
  const weddingDate = new Date("2025-11-08T18:00:00").getTime();

  // Gallery images
  const galleryImages = [
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697547771_7ee5d22a65c4596e722c8e27a934b810-20240827165330-wdfqv.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697537902_d8e4288480aa52398827aded92fd52b7-20240827165330-4ll8v.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697529612_2526ea2bdf65e66ec7452289847fa42f-20240827165330-o_pbb.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697462520_2c0b444cbe2b6ede6feab9233a7ef7f2-20240827165324-7436c.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697525762_0a71d66a434ea9b877cf797a4bae90f7-20240827165317-yifa8.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697484764_9550c8c67292490cdfe8220f0e75974c-20240827165326-3pfux.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697493791_4691cbad22819b89413fe1451ebc1ac3-20240827165316-wyiof.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697529218_483439675e3e34c0d28a263b597949ee-20240827165317-b8cdg.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697473734_0e05108a03a2ca92b59b59b39fbfc15a-20240827165324--nmrd.jpg",
    "https://w.ladicdn.com/5c728619c417ab07e5194baa/z5764697513167_1c41f468e46b19a6fe2780461602256c-20240827165317-4ltl_.jpg",
  ];

  // Effects
  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  // Popup handlers
  const openPopup = (popupId: string) => {
    setActivePopup(popupId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  // Form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName) {
      openPopup("thankYou");
    }
  };

  // Gallery handlers
  const openGallery = (index: number = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className={`wedding-invitation ${className}`}>
      <AudioSection />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Hero Section */}
      <HeroSection />

      {/* Wedding Day Section */}
      <WeddingDaySection />

      {/* Countdown Section */}
      <section id="countdown" className="countdown-section">
        <div className="container">
          <div className="countdown-content">
            <div className="countdown-timer">
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(countdown.days).padStart(2, "0")}
                </span>
                <span className="countdown-label">Ngày</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(countdown.hours).padStart(2, "0")}
                </span>
                <span className="countdown-label">Giờ</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(countdown.minutes).padStart(2, "0")}
                </span>
                <span className="countdown-label">Phút</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">
                  {String(countdown.seconds).padStart(2, "0")}
                </span>
                <span className="countdown-label">Giây</span>
              </div>
            </div>
            <p className="countdown-text">
              Until we officially become Mr. & Mrs.
            </p>

            <div className="countdown-images">
              <div
                className="countdown-image left"
                onClick={() => openGallery(0)}
              ></div>
              <div className="countdown-image center"></div>
              <div
                className="countdown-image right"
                onClick={() => openGallery(1)}
              ></div>
            </div>

            <h2 className="couple-names-countdown">Văn Vương & Ngọc Nhung</h2>
            <h3 className="happy-wedding">Happy Wedding</h3>
          </div>
        </div>
      </section>

      {/* Couple Introduction Section */}
      <section id="couple-intro" className="couple-section">
        <div className="container">
          <h2 className="couple-names-intro">Văn Vương & Ngọc Nhung</h2>

          <div className="family-info">
            <div className="family-side">
              <h3>Nhà Trai</h3>
              <p>
                Ông: <strong>Nguyễn Văn Thành</strong>
              </p>
              <p>
                Bà: <strong>Nguyễn Thị Mai</strong>
              </p>
              <p>
                Bà: <strong>Nguyễn Thị Liên</strong>
              </p>
            </div>
            <div className="family-side">
              <h3>Nhà Gái</h3>
            </div>
          </div>

          <div className="couple-profiles">
            <div className="profile groom">
              <div
                className="profile-image"
                onClick={() => openGallery(2)}
              ></div>
              <h3>Văn Vương</h3>
              <p>
                Đối với chúng mình hôn nhân không phải là đích đến cuối của tình
                yêu mà là khởi đầu của hạnh phúc.
              </p>
            </div>

            <div className="profile bride">
              <div
                className="profile-image"
                onClick={() => openPopup("brideGallery")}
              ></div>
              <h3>Ngọc Nhung</h3>
              <p>
                Ở thời điểm phù hợp nhất, khoác lên mình bộ váy cưới đẹp nhất,
                gả cho người đáng tin cậy nhất, là anh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Moments Section */}
      <section id="wedding-moments" className="moments-section">
        <div className="container">
          <h2 className="section-title">Wedding Moments</h2>

          <div className="moments-grid">
            {galleryImages.slice(0, 10).map((image, index) => (
              <div
                key={index}
                className="moment-image"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => openGallery(index)}
              ></div>
            ))}
          </div>

          <button className="view-more-btn" onClick={() => openGallery()}>
            <span>XEM THÊM</span>
            <span className="arrow-down">↓</span>
          </button>
        </div>
      </section>

      {/* Love Story Section */}
      <section id="love-story" className="story-section">
        <div className="container">
          <h2 className="section-title">Love Story</h2>

          <div className="story-timeline">
            <div className="story-item">
              <div className="story-image first"></div>
              <h3>GẶP GỠ VÀ DUYÊN PHẬN</h3>
              <p>
                Tình yêu là sự rung cảm của một tâm hồn khi gặp một tâm hồn đồng
                điệu, là sự hòa nhịp của hai trái tim, làm người ta nhìn thấy
                mọi vật tươi đẹp hơn. Khoảng cách giữa chúng ta nếu là một ngàn
                bước thì chỉ cần em đi bước đầu tiên, anh sẽ là người đi về phía
                em chín trăm chín chín bước còn lại.
              </p>
            </div>

            <div className="story-item">
              <div className="story-image second"></div>
              <h3>NĂM THÁNG YÊU NHAU</h3>
              <p>
                Hạnh phúc là khi gặp được người tuyệt nhất ở những giai đoạn đẹp
                nhất của tuổi thanh xuân và cùng nhìn nhau già đi, vì nhau mà cố
                gắng xây dựng một tương lai sung túc, tốt đẹp.
              </p>
            </div>

            <div className="story-item">
              <div className="story-image third"></div>
              <h3>NGÀY MÌNH CHUNG ĐÔI</h3>
              <p>
                Duyên phận là một điều vô cùng thú vị. Đến một lúc nào đó, tất
                cả những bối rối trong cuộc đời sẽ có câu trả lời. Đó sẽ là lúc
                mọi chuyện lại về đúng chỗ của nó. Những người sinh ra dành cho
                nhau, rồi sẽ nhìn thấy nhau và nắm lấy nhau trong cuộc đời này.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section id="final" className="final-section">
        <div className="container">
          <div className="final-content">
            <div className="final-image"></div>
            <h2 className="final-names">Văn Vương & Ngọc Nhung</h2>
            <div className="final-decorations">
              <div className="decoration-left"></div>
              <div className="decoration-right"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popups */}
      {activePopup === "thankYou" && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-image"></div>
            <h3>Cảm ơn {guestName} đã phản hồi cho hai vợ chồng</h3>
            <h4>Thank you!</h4>
            <p>Chúc bạn thật nhiều sức khỏe nhé ❤️</p>
            <button onClick={closePopup}>Đóng</button>
          </div>
        </div>
      )}

      {activePopup === "brideGallery" && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content gallery-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bride-gallery">
              {/* Bride gallery images */}
              <div className="gallery-grid">
                {galleryImages.slice(5, 9).map((image, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    style={{ backgroundImage: `url(${image})` }}
                    onClick={() => openGallery(index + 5)}
                  ></div>
                ))}
              </div>
            </div>
            <button className="close-btn" onClick={closePopup}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Gallery */}
      {showGallery && (
        <div className="gallery-overlay" onClick={() => setShowGallery(false)}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-close"
              onClick={() => setShowGallery(false)}
            >
              ✕
            </button>
            <button className="gallery-prev" onClick={prevImage}>
              ‹
            </button>
            <div className="gallery-main-image">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Wedding photo ${currentImageIndex + 1}`}
              />
            </div>
            <button className="gallery-next" onClick={nextImage}>
              ›
            </button>
            <div className="gallery-thumbnails">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`gallery-thumb ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => setCurrentImageIndex(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Snowflakes Animation */}
      <div className="snowflakes" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: i % 3 === 0 ? "20px" : "16px",
            }}
          >
            {i % 2 === 0 ? "♥️" : "❅"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VuongNhungWeddingInvitation;
