"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import NavMenu from "../NavMenu";
import { topicsData } from "./data";

const socialLinks = [
  { label: "Instagram", icon: "/images/instagram.svg" },
  { label: "Facebook", icon: "/images/facebook.svg" },
  { label: "YouTube", icon: "/images/youtube.svg" },
  { label: "X", icon: "/images/x.svg" }
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function TopikPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  // Hydrate search query and selected letter from URL search parameters on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const search = params.get("search") || params.get("keyword");
      const letter = params.get("letter");
      if (search) {
        setSearchQuery(decodeURIComponent(search));
      }
      if (letter) {
        setSelectedLetter(letter.toUpperCase());
      }
    }
  }, []);

  // Filter topics based on search and letter
  const filteredData = useMemo(() => {
    const data: Record<string, typeof topicsData[keyof typeof topicsData]> = {};

    alphabet.forEach((letter) => {
      const topics = topicsData[letter] || [];
      
      // If a letter filter is active, only process that letter
      if (selectedLetter && letter !== selectedLetter) {
        return;
      }

      // Filter topics by search query
      const matchingTopics = topics.filter((topic) =>
        topic.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // We include the letter in the filtered dataset if:
      // 1. It is the selected letter (even if no topics match, so we show "Tidak Ada Topik")
      // 2. Or, if there is no search query (show all letters initial state)
      // 3. Or, if there is a search query and some topics match
      if (selectedLetter === letter || searchQuery === "" || matchingTopics.length > 0) {
        data[letter] = searchQuery === "" ? topics : matchingTopics;
      }
    });

    return data;
  }, [searchQuery, selectedLetter]);

  const handleLetterClick = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null); // Toggle off
    } else {
      setSelectedLetter(letter);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedLetter(null);
  };

  const hasResults = Object.keys(filteredData).length > 0;

  return (
    <>
      <header className="site-header">
        <div className="header-quick-links" aria-label="Tautan cepat">
          {socialLinks.map((item) => (
            <a className="social-link" href="#kontak" aria-label={item.label} key={item.label}>
              <Image src={item.icon} alt="" width={16} height={16} sizes="16px" aria-hidden="true" />
            </a>
          ))}
          <a className="quick-text-link" href="#kontak">Kontak</a>
          <a className="quick-text-link login-link" href="#login">
            <Image src="/images/Profile.svg" alt="" width={22} height={22} sizes="22px" aria-hidden="true" />
            <span>Login</span>
          </a>
        </div>
        <nav className="navbar" aria-label="Menu utama">
          <Link className="brand nav-brand" href="/" aria-label="Beranda Kemenkes Ayo Sehat">
            <Image src="/images/kemenkes-ayosehat.png" alt="Kemenkes Ayo Sehat" width={220} height={66} sizes="(max-width: 760px) 170px, 220px" priority />
          </Link>
          <NavMenu />
        </nav>
      </header>

      <main>
        {/* Banner Section */}
        <section className="topik-banner" aria-labelledby="topik-title">
          <div className="container topik-banner-content">
            <h1 id="topik-title">Topik Kesehatan A-Z</h1>
            <p className="topik-subtitle">
              Temukan berbagai informasi kesehatan secara lengkap dan terpercaya dengan mencarinya di bawah ini.
            </p>
            
            <div className="topik-filter-bar">
              {/* Search Box */}
              <div className="topik-search-wrapper">
                <span className="search-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Cari Topik"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Cari Topik Kesehatan"
                />
                {searchQuery && (
                  <button className="search-clear-btn" onClick={() => setSearchQuery("")} aria-label="Hapus pencarian">
                    &times;
                  </button>
                )}
              </div>

              {/* Alphabet A-Z Selector */}
              <div className="topik-alphabet-selector" role="group" aria-label="Filter berdasarkan huruf pertama">
                {alphabet.map((letter) => {
                  const isActive = selectedLetter === letter;
                  const isAvailable = (topicsData[letter] && topicsData[letter].length > 0);
                  
                  return (
                    <button
                      key={letter}
                      className={`alphabet-btn ${isActive ? "active" : ""} ${!isAvailable ? "no-data" : ""}`}
                      onClick={() => handleLetterClick(letter)}
                      aria-pressed={isActive}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="topik-content-section" aria-label="Daftar Topik Kesehatan">
          <div className="container">
            {/* Show reset helpers if filtering is active */}
            {(searchQuery || selectedLetter) && (
              <div className="filter-summary-bar">
                <span>
                  Menampilkan hasil untuk:{" "}
                  {selectedLetter ? `Huruf "${selectedLetter}"` : ""}
                  {selectedLetter && searchQuery ? " & " : ""}
                  {searchQuery ? `Pencarian "${searchQuery}"` : ""}
                </span>
                <button className="btn-reset-filters" onClick={handleResetFilters}>
                  Reset Filter
                </button>
              </div>
            )}

            {hasResults ? (
              <div className="topik-grid-layout">
                {alphabet
                  .filter((letter) => filteredData[letter] !== undefined)
                  .map((letter, index) => {
                    const topics = filteredData[letter];
                    const isLetterEmpty = topics.length === 0;

                    return (
                      <article
                        key={letter}
                        className={`topik-card-item fade-in-up-anim`}
                        style={{ animationDelay: `${(index % 9) * 60}ms` }}
                      >
                        <h2 className="topik-card-letter">{letter}</h2>
                        
                        {isLetterEmpty ? (
                          <p className="no-topic-text">Tidak Ada Topik</p>
                        ) : (
                          <ul className="topik-item-list">
                            {topics.map((topic) => (
                              <li key={topic.name}>
                                <Link href={`/topik/${encodeURIComponent(topic.name.toLowerCase())}`} className="topik-item-link">
                                  <span className="topic-name-txt">{topic.name}</span>
                                  {topic.isNew && <span className="new-tag-pill">Baru</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </article>
                    );
                  })}
              </div>
            ) : (
              <div className="topik-empty-results">
                <h3>Topik Tidak Ditemukan</h3>
                <p>Maaf, tidak ada topik kesehatan yang sesuai dengan kata kunci pencarian Anda.</p>
                <button className="button primary" onClick={handleResetFilters}>
                  Tampilkan Semua Topik
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer about-footer" id="kontak">
        <div className="container footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              <Image src="/images/kemenkes-ayosehat.png" alt="Kemenkes Ayo Sehat" width={220} height={66} sizes="220px" />
            </Link>
            <p><strong>Ayo Sehat</strong><br />Kementerian Kesehatan Republik Indonesia</p>
            <p>Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Jakarta Selatan, DKI Jakarta</p>
            <a className="footer-chat" href="#kontak">Chatbot WhatsApp Ayo Sehat</a>
            <p className="footer-social-title">Media Sosial</p>
            <div className="footer-socials" aria-label="Media sosial">
              {socialLinks.map((item) => (
                <a className="footer-social-link" href="#kontak" aria-label={item.label} key={item.label}>
                  <Image src={item.icon} alt="" width={24} height={24} sizes="24px" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title="Program Unggulan" items={["Pemeriksaan Kesehatan Gratis", "1000 Hari Pertama Kehidupan", "Perangkat Ajar Kesehatan"]} />
          <FooterColumn title="Kampanye Prioritas" items={["Mudik Sehat", "Program Inovasi Edukasi Kesehatan", "Gerakan Aksi Bergizi", "Liburan Sehat", "Gerakan #AnakSehat"]} />
          <FooterColumn title="Informasi" items={["Kampanye Kesehatan", "Kementerian Kesehatan", "Sehat Negeriku"]} />
        </div>
      </footer>
    </>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2>{title}</h2>
      {items.map((item) => <Link href="/topik" key={item}>{item}</Link>)}
    </div>
  );
}
