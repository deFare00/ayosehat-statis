"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const campaignSlides = [
  {
    title: "Gerakan Masyarakat Hidup Sehat (GERMAS)",
    image: "/images/campaign-germas.png",
    alt: "Gerakan Masyarakat Hidup Sehat"
  },
  {
    title: "Cek Kesehatan Gratis (CKG) di Sekolah",
    image: "/images/campaign-ckg.svg",
    alt: "Cek Kesehatan Gratis di Sekolah"
  },
  {
    title: "#Janji Hidup Sehat: Berani Deteksi",
    image: "/images/campaign-janji.svg",
    alt: "#Janji Hidup Sehat"
  }
];

export default function CampaignSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % campaignSlides.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + campaignSlides.length) % campaignSlides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % campaignSlides.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  return (
    <div 
      className="campaign-slider-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Kampanye Kesehatan Slider"
    >
      <div className="campaign-slider-header">
        <div className="campaign-title-group">
          <h3 className="sidebar-section-title">Kampanye Kesehatan</h3>
          <p className="sidebar-section-subtitle">Kampanye kesehatan yang sedang berlangsung</p>
        </div>
        <Link href="#kampanye" className="sidebar-see-all-link">
          Lihat Semua
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="see-all-arrow">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </div>

      <div className="campaign-slider-card">
        <div className="campaign-slider-image-container">
          {campaignSlides.map((slide, idx) => (
            <div
              key={slide.title}
              className={`campaign-slide-item ${idx === activeIndex ? "active" : ""}`}
              aria-hidden={idx !== activeIndex}
              style={{ position: "absolute" }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="280px"
                priority={idx === 0}
                style={{ objectFit: "cover" }}
                className="campaign-slide-image"
              />
            </div>
          ))}

          <button
            onClick={handlePrev}
            className="campaign-slider-nav-btn prev"
            aria-label="Slide sebelumnya"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="campaign-slider-nav-btn next"
            aria-label="Slide berikutnya"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="campaign-slider-info">
          <p className="campaign-slider-title">
            {campaignSlides[activeIndex].title}
          </p>
        </div>
      </div>

      <div className="campaign-slider-dots" role="tablist" aria-label="Slide Indikator">
        {campaignSlides.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === activeIndex}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`campaign-slider-dot ${idx === activeIndex ? "active" : ""}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
