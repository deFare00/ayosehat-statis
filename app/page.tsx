"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMenu from "./NavMenu";
import PopularTopics from "./PopularTopics";
import SearchForm from "./SearchForm";
import { topicsData } from "./topik/data";
const socialLinks = [
  { label: "Instagram", icon: "/images/instagram.svg" },
  { label: "Facebook", icon: "/images/facebook.svg" },
  { label: "YouTube", icon: "/images/youtube.svg" },
  { label: "X", icon: "/images/x.svg" }
];
const topics = ["Diabetes", "Anemia", "Hipertensi", "Serangan Jantung", "Stroke"];
const lifeStages = [
  { title: "Bayi dan Balita", age: "< 5 Tahun", image: "/images/bayi.png" },
  { title: "Anak-Anak", age: "5-9 Tahun", image: "/images/anak-anak.png" },
  { title: "Remaja", age: "10-18 Tahun", image: "/images/remaja.png" },
  { title: "Dewasa", age: "18-59 Tahun", image: "/images/dewasa.png" },
  { title: "Lansia", age: "60+ Tahun", image: "/images/lansia.png" }
];

const habits = [
  {
    title: "Konsumsi Makanan Bergizi Seimbang",
    text: "Utamakan buah, sayur, protein tanpa lemak, dan karbohidrat kompleks.",
    icon: "/images/salad.svg"
  },
  {
    title: "Minum Air Putih yang Cukup",
    text: "Minimal 8 gelas atau 2 liter per hari, sesuaikan dengan aktivitas.",
    icon: "/images/water.svg"
  },
  {
    title: "Batasi Konsumsi Gula, Garam, dan Lemak",
    text: "Gula maksimal 50 gram, garam 5 gram, dan lemak total 67 gram per hari.",
    icon: "/images/sugar-free.svg"
  },
  {
    title: "Tidak Merokok",
    text: "Rokok meningkatkan risiko kanker, penyakit jantung, dan paru-paru.",
    icon: "/images/no-smoking.svg"
  },
  {
    title: "Hindari Konsumsi Alkohol",
    text: "Alkohol dapat merusak organ tubuh dan memicu berbagai penyakit kronis.",
    icon: "/images/no-drinking.svg"
  },
  {
    title: "Rutin Berolahraga",
    text: "Minimal 150 menit aktivitas fisik sedang setiap minggu.",
    icon: "/images/sports.svg"
  }
];

const articles = [
  ["Tips Menerapkan Kebiasaan Tidur yang Baik untuk Si Kecil, Begini Caranya!", "Bayi 0-18 Tahun", "/images/article-sleep.svg"],
  ["Diabetes Ancam Nyata Generasi Muda", "Remaja 10-18 Tahun", "/images/article-diabetes.svg"],
  ["Apakah Si Kecil Sudah Siap Tidur Sepanjang Malam Tanpa Menyusu?", "Dewasa 18-59 Tahun", "/images/article-baby.svg"]
];

const campaigns = [
  ["#Janji Hidup Sehat", "Berani Deteksi", "/images/campaign-janji.svg"],
  ["1000 Hari Pertama Kehidupan", "#AnakSehat", "/images/campaign-anak.svg"],
  ["Perangkat Ajar Kesehatan", "Materi edukasi sekolah", "/images/campaign-ajar.svg"]
];

const healthEvents: Record<string, string> = {
  // June (month index 5)
  "5-1": "1 Juni 2026 - Hari Lahir Pancasila (Agenda: Libur Nasional)",
  "5-5": "5 Juni 2026 - Hari Lingkungan Hidup Sedunia (Agenda: Aksi Tanam Pohon)",
  "5-14": "14 Juni 2026 - Hari Donor Darah Sedunia (Agenda: Donor Darah Massal)",
  "5-26": "26 Juni 2026 - Hari Anti Narkotika Internasional (Agenda: Penyuluhan Remaja)",
  // July (month index 6)
  "6-7": "7 Juli 2026 - Agenda: Cek Kesehatan Gratis di Puskesmas",
  "6-11": "11 Juli 2026 - Hari Populasi Sedunia (Keluarga Berencana & Kesehatan)",
  "6-17": "17 Juli 2026 - Hari Vitiligo Sedunia (Edukasi Kesehatan Kulit)",
  "6-23": "23 Juli 2026 - Hari Anak Nasional (Fokus Kesehatan & Imunisasi Anak)",
  "6-28": "28 Juli 2026 - Hari Hepatitis Sedunia (Pencegahan & Deteksi Dini)",
  "6-29": "29 Juli 2026 - Agenda: Sosialisasi Perilaku Hidup Bersih & Sehat (PHBS)",
  // August (month index 7)
  "7-1": "1 Agustus 2026 - Hari ASI Sedunia (Agenda: Sosialisasi Menyusui Nasional)",
  "7-12": "12 Agustus 2026 - Hari Remaja Internasional (Agenda: Edukasi Kesehatan mental)",
  "7-17": "17 Agustus 2026 - Hari Kemerdekaan RI (Agenda: Libur Nasional)"
};

export default function Home() {
  const [selectedLetter, setSelectedLetter] = useState<string>("A");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  
  // Calendar states
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2026, 6, 7)); // Default to July 7, 2026
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 6, 11)); // Default selected July 11, 2026

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  // Helper functions for month navigation
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

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
        <section className="hero" id="tentang">
          <div className="container hero-content">
            <div className="hero-copy">
              <h1>Ayo Sehat</h1>
              <h2>Kementerian Kesehatan Republik Indonesia</h2>
              <p>
                Ayo Sehat Kemenkes RI merupakan platform/saluran sumber informasi, edukasi kesehatan,
                serta gaya hidup sehat resmi dari Kementerian Kesehatan sehingga dapat
                dipertanggungjawabkan dan informasi yang diberikan sejalan dengan program pemerintah.
              </p>
              <a className="button primary" href="#pencarian">Selengkapnya</a>
            </div>
          </div>
        </section>

        <section className="search-band" id="pencarian" aria-labelledby="search-title">
          <div className="container center">
            <h2 id="search-title">Pencarian Ayosehat</h2>
            <p>Pendekatan menjaga kesehatan sejak lahir hingga lansia, dengan</p>
            <SearchForm />
            <div className="chips" aria-label="Topik populer">
              <span>Topik populer:</span>
              <PopularTopics topics={topics} />
            </div>
          </div>
        </section>

        <section className="section life-section" id="siklus-hidup" aria-labelledby="life-title">
          <div className="life-container center">
            <h2 id="life-title">Menu Siklus Hidup</h2>
            <p>Pendekatan menjaga kesehatan sejak lahir hingga lansia, dengan perhatian khusus sesuai kebutuhan di setiap tahap usia.</p>
            <div className="life-grid">
              {lifeStages.map((stage) => (
                <a className="life-card" href="#artikel" key={stage.title}>
                  <Image src={stage.image} alt={stage.title} width={274} height={270} sizes="274px" />
                  <div className="life-label">
                    <strong>{stage.title}</strong>
                    <span>{stage.age}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section habits" id="hidup-sehat" aria-labelledby="habits-title">
          <div className="habit-container center">
            <h1 id="habits-title">Perilaku Hidup Sehat</h1>
            <p className="habit-intro">
              Perilaku hidup sehat adalah kebiasaan sehari-hari yang dilakukan untuk menjaga dan<br />
              meningkatkan kesehatan tubuh dan pikiran, seperti makan bergizi, olahraga teratur, cukup istirahat,<br />
              serta menjaga kebersihan dan kesehatan mental.
            </p>
            <div className="habit-layout">
              <div className="habit-list">
                {habits.slice(0, 3).map((habit) => <HabitItem key={habit.title} habit={habit} side="left" />)}
              </div>
              <Image className="habit-image" src="/images/perilaku-hidup-sehat.png" alt="Keluarga melakukan gaya hidup sehat" width={520} height={520} sizes="(max-width: 760px) 76vw, (max-width: 1020px) 520px, 34vw" />
              <div className="habit-list">
                {habits.slice(3).map((habit) => <HabitItem key={habit.title} habit={habit} side="right" />)}
              </div>
            </div>
            <a className="button primary wide" href="#topik">Simak Perilaku Hidup Sehat Lainnya</a>
          </div>
        </section>

        <section className="section two-column" id="topik" aria-labelledby="topic-title">
          <div className="container content-grid">
            <article className="az-panel">
              <h2 id="topic-title">Topik A-Z</h2>
              <p>
                Temukan penyakit dan kondisi; hidup sehat; keselamatan di tempat kerja; kesehatan lingkungan; cedera, kekerasan, dan keselamatan; kesehatan global; kesehatan pelancong, dan banyak lagi.
              </p>
              
              <div className="letters-grid" role="group" aria-label="Filter berdasarkan huruf pertama">
                {alphabet.map((letter) => {
                  const topics = topicsData[letter] || [];
                  const isAvailable = topics.length > 0;
                  const isActive = selectedLetter === letter;
                  
                  return (
                    <button
                      key={letter}
                      className={`letter-btn ${isActive ? "active" : ""} ${!isAvailable ? "disabled" : ""}`}
                      onClick={() => {
                        if (isAvailable) {
                          if (selectedLetter === letter) {
                            setIsExpanded(!isExpanded);
                          } else {
                            setSelectedLetter(letter);
                            setIsExpanded(true);
                          }
                        }
                      }}
                      disabled={!isAvailable}
                      aria-pressed={isActive}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>

              {selectedLetter && (
                <div className={`topics-accordion ${isExpanded ? "expanded" : "collapsed"}`}>
                  <button 
                    className="accordion-header" 
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                  >
                    <div className="accordion-title-wrapper">
                      <span className="letter-badge">{selectedLetter}</span>
                      <span className="accordion-title-text">Topik Kesehatan</span>
                    </div>
                    <span className={`accordion-icon ${isExpanded ? "up" : "down"}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </span>
                  </button>
                  
                  {isExpanded && (
                    <div className="accordion-content">
                      <div className="topics-preview-grid">
                        {topicsData[selectedLetter]?.slice(0, 4).map((topic) => (
                          <Link 
                            key={topic.name} 
                            href={`/topik/${encodeURIComponent(topic.name.toLowerCase())}`} 
                            className="topic-preview-card"
                          >
                            <span className="topic-card-arrow">&gt;</span>
                            <span className="topic-card-name">{topic.name}</span>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="accordion-footer">
                        <Link 
                          href={`/topik?letter=${selectedLetter}`} 
                          className="view-all-link"
                        >
                          Lihat Semua ({topicsData[selectedLetter]?.length || 0} topik) &gt;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>

            <aside className="side-stack" aria-label="Informasi kesehatan">
              <div className="calendar-section-wrapper">
                <h3 className="sidebar-section-title">Kalender Kesehatan</h3>
                <p className="sidebar-section-subtitle">Informasi terkait dengan hari besar dan agenda kesehatan satu tahun penuh</p>
                
                <article className="mini-panel calendar-card">
                  {/* Month Selector */}
                  <div className="calendar-month-selector">
                    <button className="month-nav-btn" aria-label="Bulan sebelumnya" onClick={handlePrevMonth} type="button">&lt;</button>
                    <span className="current-month-year">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                    <button className="month-nav-btn" aria-label="Bulan berikutnya" onClick={handleNextMonth} type="button">&gt;</button>
                  </div>

                  {/* Day Labels */}
                  <div className="calendar-day-labels">
                    <span>Sen</span>
                    <span>Sel</span>
                    <span>Rab</span>
                    <span>Kam</span>
                    <span>Jum</span>
                    <span>Sab</span>
                    <span>Min</span>
                  </div>

                  {/* Days Grid */}
                  <div className="calendar-days-grid">
                    {/* Render empty slots based on the first day of the month */}
                    {Array.from({ length: currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1 }).map((_, idx) => (
                      <span key={`empty-${idx}`} className="empty-day-cell" aria-hidden="true" />
                    ))}
                    
                    {Array.from({ length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate() }, (_, idx) => {
                      const dayNum = idx + 1;
                      
                      const today = new Date(2026, 6, 7);
                      const isToday = today.getFullYear() === currentDate.getFullYear() && 
                                      today.getMonth() === currentDate.getMonth() && 
                                      dayNum === today.getDate();

                      const isSelected = selectedDate.getFullYear() === currentDate.getFullYear() && 
                                         selectedDate.getMonth() === currentDate.getMonth() && 
                                         dayNum === selectedDate.getDate();

                      const dotKey = `${currentDate.getMonth()}-${dayNum}`;
                      const hasDot = healthEvents[dotKey] !== undefined;
                      
                      return (
                        <button
                          key={dayNum}
                          className={`day-cell ${isToday ? "today" : ""} ${isSelected ? "selected" : ""} ${hasDot ? "has-dot" : ""}`}
                          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum))}
                          type="button"
                        >
                          <span className="day-number">{dayNum}</span>
                          {hasDot && <span className="day-dot" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected Event Display */}
                  <div className="calendar-event-divider" />
                  <div className="calendar-event-display">
                    {healthEvents[`${selectedDate.getMonth()}-${selectedDate.getDate()}`] ? (
                      <p className="event-desc">{healthEvents[`${selectedDate.getMonth()}-${selectedDate.getDate()}`]}</p>
                    ) : (
                      <p className="event-placeholder">Berikut tanggal kesehatan terkait</p>
                    )}
                  </div>

                  {/* Legend Footer */}
                  <div className="calendar-legend-divider" />
                  <div className="calendar-legend-footer">
                    <span className="legend-item">
                      <span className="legend-dot today-dot" /> Hari ini
                    </span>
                    <span className="legend-item">
                      <span className="legend-dot selected-dot" /> Dipilih
                    </span>
                  </div>
                </article>
              </div>
              <article className="mini-panel">
                <h3>Kampanye Kesehatan</h3>
                <Image src="/images/campaign-ckg.svg" alt="Cek Kesehatan Gratis di Sekolah" width={270} height={150} sizes="(max-width: 1020px) 270px, 270px" />
                <p>Cek Kesehatan Gratis (CKG) di Sekolah</p>
              </article>
            </aside>
          </div>
        </section>

        <section className="section articles" id="artikel" aria-labelledby="article-title">
          <div className="container">
            <div className="section-head">
              <h2 id="article-title">Artikel Terbaru</h2>
              <a className="outline" href="#download">LIHAT ARTIKEL LAINNYA</a>
            </div>
            <div className="article-grid">
              {articles.map(([title, tag, image]) => (
                <article className="article-card" key={title}>
                  <Image src={image} alt="" width={360} height={190} sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1020px) 33vw, 360px" />
                  <span>{tag}</span>
                  <h3>{title}</h3>
                  <p>18 Jul 2025 • Waktu Baca 3 Menit</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="campaign-band" id="kampanye" aria-labelledby="campaign-title">
          <h2 className="sr-only" id="campaign-title">Kampanye Ayo Sehat</h2>
          <div className="container campaign-grid">
            {campaigns.map(([title, text, image]) => (
              <article className="campaign-card" key={title}>
                <Image src={image} alt={title} width={310} height={230} sizes="(max-width: 760px) calc(100vw - 84px), (max-width: 1020px) 33vw, 310px" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="kontak">
        <div className="container footer-grid">
          <div>
            <Link className="brand footer-brand" href="/">
              <Image src="/images/kemenkes-ayosehat.png" alt="Kemenkes Ayo Sehat" width={220} height={66} sizes="220px" />
            </Link>
            <p><strong>Ayo Sehat</strong><br />Kementerian Kesehatan Republik Indonesia</p>
            <p>Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Jakarta Selatan, DKI Jakarta</p>
          </div>
          <FooterColumn title="Program Unggulan" items={["Pemeriksaan Kesehatan Gratis", "1000 Hari Pertama Kehidupan", "Perangkat Ajar Kesehatan"]} />
          <FooterColumn title="Kampanye Prioritas" items={["Muda Sehat", "Program Inovasi Edukasi Kesehatan", "Gerakan Ayo Sehat"]} />
          <FooterColumn title="Informasi" items={["Kampanye Kesehatan", "Kementerian Kesehatan", "Sehat Negeriku"]} />
        </div>
      </footer>
    </>
  );
}

function HabitItem({
  habit,
  side
}: {
  habit: { title: string; text: string; icon: string };
  side: "left" | "right";
}) {
  return (
    <article className={`habit-item ${side === "left" ? "is-left" : "is-right"}`}>
      <div>
        <h3>{habit.title}</h3>
        <p>{habit.text}</p>
      </div>
      <span className="habit-icon" aria-hidden="true">
        <Image src={habit.icon} alt="" width={72} height={72} sizes="(max-width: 760px) 40px, 72px" />
      </span>
    </article>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2>{title}</h2>
      {items.map((item) => <a href="#topik" key={item}>{item}</a>)}
    </div>
  );
}
