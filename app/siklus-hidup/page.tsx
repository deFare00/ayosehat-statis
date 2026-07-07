"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMenu from "../NavMenu";

const socialLinks = [
  { label: "Instagram", icon: "/images/instagram.svg" },
  { label: "Facebook", icon: "/images/facebook.svg" },
  { label: "YouTube", icon: "/images/youtube.svg" },
  { label: "X", icon: "/images/x.svg" }
];

const lifeStages = [
  { id: "bayi", title: "Bayi dan Balita", age: "< 5 Tahun", image: "/images/bayi.png" },
  { id: "anak", title: "Anak-Anak", age: "5-9 Tahun", image: "/images/anak-anak.png" },
  { id: "remaja", title: "Remaja", age: "10-18 Tahun", image: "/images/remaja.png" },
  { id: "dewasa", title: "Dewasa", age: "18-59 Tahun", image: "/images/dewasa.png" },
  { id: "lansia", title: "Lansia", age: "60+ Tahun", image: "/images/lansia.png" }
];

const stageDetails: Record<string, {
  title: string;
  age: string;
  image: string;
  tags: string[];
  paragraphs: string[];
  topics: { title: string; image: string }[];
  illnesses: { title: string; image: string }[];
  articles: { title: string; tags: string; image: string }[];
}> = {
  bayi: {
    title: "Bayi dan Balita",
    age: "< 5 Tahun",
    image: "/images/bayi.png",
    tags: ["Penyakit Populer", "Imunisasi", "Gizi Bayi", "Tumbuh Kembang"],
    paragraphs: [
      "Masa bayi dan balita (usia 0-5 tahun) merupakan masa keemasan (golden age) dalam tumbuh kembang anak. Perkembangan otak, fisik, dan sosial emosional terjadi sangat pesat pada fase ini, sehingga membutuhkan perhatian penuh dari orang tua.",
      "Asupan gizi seimbang, pemberian ASI eksklusif hingga 6 bulan dilanjutkan MPASI yang bergizi, serta stimulasi yang tepat sangat menentukan masa depan anak. Orang tua perlu memantau tumbuh kembang anak secara berkala ke Posyandu atau Puskesmas.",
      "Imunisasi dasar lengkap wajib diberikan untuk melindungi si kecil dari berbagai penyakit menular berbahaya. Pola asuh yang penuh kasih sayang akan membangun pondasi emosional yang kuat bagi pertumbuhan mental yang sehat di masa depan."
    ],
    topics: [
      { title: "Inisiasi Menyusu Dini & ASI Eksklusif", image: "/images/article-baby.svg" },
      { title: "Gizi Seimbang untuk Balita", image: "/images/perilaku-hidup-sehat.png" },
      { title: "Stimulasi Motorik Anak", image: "/images/healthy-family.svg" }
    ],
    illnesses: [
      { title: "Diare pada Balita", image: "/images/article-diabetes.svg" },
      { title: "Campak dan Rubella", image: "/images/article-sleep.svg" },
      { title: "Stunting pada Balita", image: "/images/hero-family.svg" }
    ],
    articles: [
      { title: "Langkah Mudah Menyiapkan MPASI Bergizi untuk Bayi 6 Bulan", tags: "Bayi dan Balita (0-5 Tahun)", image: "/images/article-baby.svg" },
      { title: "Mengenal Jadwal Imunisasi Anak Terbaru dari Kemenkes RI", tags: "Bayi dan Balita (0-5 Tahun)", image: "/images/article-sleep.svg" },
      { title: "Mengatasi GTM (Gerakan Tutup Mulut) pada Anak dengan Bijak", tags: "Bayi dan Balita (0-5 Tahun)", image: "/images/article-baby.svg" }
    ]
  },
  anak: {
    title: "Anak-Anak",
    age: "5-9 Tahun",
    image: "/images/anak-anak.png",
    tags: ["Nutrisi Sekolah", "Kesehatan Gigi", "Perilaku Bersih", "Aktivitas Fisik"],
    paragraphs: [
      "Anak usia sekolah dasar (5-9 tahun) mengalami perkembangan motorik, kognitif, dan sosial yang lebih kompleks. Ini adalah masa di mana anak mulai bersosialisasi secara aktif dengan lingkungan sekolah dan teman sebaya.",
      "Pemberian nutrisi yang tepat mendukung konsentrasi belajar dan energi mereka untuk beraktivitas fisik. Selain nutrisi, membiasakan pola hidup bersih dan sehat (PHBS) seperti mencuci tangan pakai sabun harus ditanamkan sejak dini.",
      "Masalah kesehatan yang sering muncul pada usia ini mencakup kesehatan gigi, gangguan penglihatan, dan infeksi saluran pernapasan. Keterlibatan orang tua dan guru sangat penting untuk memantau perilaku belajar dan kesehatan fisik anak."
    ],
    topics: [
      { title: "Kesehatan Mata Anak Sekolah dasar", image: "/images/perilaku-hidup-sehat.png" },
      { title: "Membiasakan Sarapan Pagi Sehat", image: "/images/article-sleep.svg" },
      { title: "Pendidikan Karakter & Sosial Anak", image: "/images/healthy-family.svg" }
    ],
    illnesses: [
      { title: "Karies Gigi pada Anak", image: "/images/article-diabetes.svg" },
      { title: "Demam Berdarah (DBD)", image: "/images/article-sleep.svg" },
      { title: "Cacingan dan Pencegahannya", image: "/images/hero-family.svg" }
    ],
    articles: [
      { title: "Pentingnya Sarapan Pagi untuk Konsentrasi Belajar Anak", tags: "Anak-Anak (5-9 Tahun)", image: "/images/article-sleep.svg" },
      { title: "Cara Mengajarkan Cuci Tangan Pakai Sabun yang Benar", tags: "Anak-Anak (5-9 Tahun)", image: "/images/article-baby.svg" },
      { title: "Menjaga Kesehatan Mata Anak di Era Gadget Digital", tags: "Anak-Anak (5-9 Tahun)", image: "/images/article-diabetes.svg" }
    ]
  },
  remaja: {
    title: "Remaja",
    age: "10-18 Tahun",
    image: "/images/remaja.png",
    tags: ["Penyakit Populer", "Penyakit Menular", "Penyakit Tidak Menular", "Kesehatan Jiwa"],
    paragraphs: [
      "Remaja merupakan kelompok usia 10 tahun sampai sebelum berusia 19 tahun. Upaya kesehatan remaja memiliki tujuan untuk mempersiapkan remaja menjadi orang dewasa yang sehat, cerdas, berkualitas, dan produktif dan berperan serta dalam menjaga, mempertahankan dan meningkatkan kesehatan dirinya. Kesehatan remaja merupakan hal yang sangat penting diperhatikan karena pada masa ini remaja mengalami perubahan fisik, psikologis, dan sosial yang signifikan. Kementerian Kesehatan RI menekankan bahwa kesehatan remaja sangat dipengaruhi oleh pola makan yang sehat, aktivitas fisik yang teratur, remaja yang sehat ditandai dengan berat badan, tinggi badan, dan indeks massa tubuh yang sesuai dengan usianya.",
      "Upaya kesehatan remaja meliputi perkembangan positif, pencegahan kecelakaan, pencegahan kekerasan, kesehatan reproduksi, pencegahan dan pengendalian penyakit menular dan pencegahan penyakit tidak menular, gizi dan aktivitas fisik, kesehatan jiwa, dan kesehatan remaja pada situasi krisis. Remaja juga perlu memiliki kesehatan mental dan emosional yang baik, serta kemampuan untuk mengambil keputusan yang baik dan bertanggung jawab atas tindakan mereka. Pola makan yang sehat dan bergizi sangat penting bagi kesehatan remaja. Orangtua dan remaja sendiri perlu memperhatikan asupan makanan yang mengandung karbohidrat, protein, lemak, vitamin, dan mineral yang cukup untuk mendukung pertumbuhan dan perkembangan mereka.",
      "Aktivitas fisik yang teratur juga perlu diperhatikan, seperti olahraga ringan atau berjalan-jalan, untuk membantu meningkatkan kesehatan jantung dan paru-paru, serta kekuatan otot dan tulang. Jika ada keluhan atau tanda-tanda tidak sehat pada remaja, segera konsultasikan ke dokter atau fasilitas kesehatan terdekat. Pencegahan dan perawatan yang tepat dapat membantu mempertahankan kesehatan remaja dan mendukung pertumbuhan dan perkembangan yang optimal. Upaya Kesehatan Remaja selain ditujukan kepada remaja, juga ditujukan kepada orang tua atau pengasuh untuk mendukung dan mewujudkan remaja yang sehat. Upaya kesehatan remaja harus melibatkan peran serta remaja dalam menjaga, mempertahankan dan meningkatkan kesehatan dirinya.",
      "Dukungan keluarga sangat diperlukan sehingga remaja dapat tumbuh sehat sesuai dengan kemampuan, minat, dan bakatnya, mencegah perkawinan remaja, dan memfasilitasi remaja mendapatkan pelayanan kesehatan sesuai standar. Dukungan Keluarga sebagaimana dimaksud dalam pengasuhan, pemeliharaan, Pendidikan, dan perlindungan kepada Remaja."
    ],
    topics: [
      { title: "Lingkungan Sehat dan Aman", image: "/images/topik-lingkungan.png" },
      { title: "Pola Asuh dan Perkembangan Anak", image: "/images/perilaku-hidup-sehat.png" },
      { title: "Pencegah Infeksi pada Remaja", image: "/images/healthy-family.svg" }
    ],
    illnesses: [
      { title: "Batuk Rejan", image: "/images/article-diabetes.svg" },
      { title: "Pneumonia", image: "/images/article-sleep.svg" },
      { title: "Influenza", image: "/images/hero-family.svg" }
    ],
    articles: [
      { title: "Program Keluarga Berencana untuk Menyongsong Generasi Emas 2045", tags: "Bayi dan Balita (0-5 Tahun) • Anak-Anak (5-9 Tahun) • Remaja (10-18 Tahun) • Dewasa...", image: "/images/article-baby.svg" },
      { title: "Cek Kesehatan, Gaya Hidup Masa Kini dan Kunci Sehat Menuju Masa Depan", tags: "Bayi dan Balita (0-5 Tahun) • Anak-Anak (5-9 Tahun) • Remaja (10-18 Tahun) • Dewasa...", image: "/images/article-diabetes.svg" },
      { title: "Campak dan Rubella Masih Ada, Lindungi Buah Hati dengan Imunisasi Lengkap", tags: "Bayi dan Balita (0-5 Tahun) • Anak-Anak (5-9 Tahun) • Remaja (10-18 Tahun) • Dewasa...", image: "/images/article-sleep.svg" },
      { title: "Apakah Si Kecil Sudah Siap Tidur Sepanjang Malam Tanpa Menyusu?", tags: "Bayi dan Balita (0-5 Tahun) • Anak-Anak (5-9 Tahun) • Remaja (10-18 Tahun) • Dewasa...", image: "/images/article-baby.svg" }
    ]
  },
  dewasa: {
    title: "Dewasa",
    age: "18-59 Tahun",
    image: "/images/dewasa.png",
    tags: ["Pencegahan PTM", "Gaya Hidup Sehat", "Kesehatan Kerja", "Kesehatan Reproduksi"],
    paragraphs: [
      "Usia produktif dewasa (18-59 tahun) berfokus pada menjaga produktivitas kerja dan mencegah penyakit tidak menular (PTM) melalui gaya hidup sehat. Ini adalah masa penting untuk mencegah penuaan dini dan penyakit metabolik.",
      "Aktivitas fisik sedang minimal 150 menit per minggu, pola makan rendah gula, garam, lemak (GGL), serta mengelola stres dengan baik sangat krusial. Pemeriksaan kesehatan secara berkala (check-up) membantu mendeteksi risiko penyakit sejak dini.",
      "Menjaga keseimbangan kehidupan kerja dan pribadi (work-life balance) serta menghindari kebiasaan buruk seperti merokok dan konsumsi alkohol berlebih akan meningkatkan kualitas hidup secara keseluruhan hingga masa tua nanti."
    ],
    topics: [
      { title: "Manajemen Stres di Tempat Kerja", image: "/images/perilaku-hidup-sehat.png" },
      { title: "Deteksi Dini Penyakit Kronis", image: "/images/healthy-family.svg" },
      { title: "Pola Makan Rendah Gula, Garam, Lemak", image: "/images/article-diabetes.svg" }
    ],
    illnesses: [
      { title: "Hipertensi dan Stroke", image: "/images/article-diabetes.svg" },
      { title: "Diabetes Tipe 2", image: "/images/article-sleep.svg" },
      { title: "Obesitas dan Metabolisme", image: "/images/hero-family.svg" }
    ],
    articles: [
      { title: "Panduan Deteksi Dini Penyakit Tidak Menular secara Mandiri", tags: "Dewasa (18-59 Tahun)", image: "/images/article-diabetes.svg" },
      { title: "Tips Membakar Kalori di Sela Kesibukan Kantor", tags: "Dewasa (18-59 Tahun)", image: "/images/article-sleep.svg" },
      { title: "Mengatur Pola Tidur Berkualitas untuk Pekerja Shift", tags: "Dewasa (18-59 Tahun)", image: "/images/article-sleep.svg" }
    ]
  },
  lansia: {
    title: "Lansia",
    age: "60+ Tahun",
    image: "/images/lansia.png",
    tags: ["Healthy Aging", "Senam Lansia", "Nutrisi Lansia", "Kesehatan Sendi"],
    paragraphs: [
      "Kelompok lanjut usia (60+ tahun) memerlukan perhatian khusus untuk menjaga kemandirian, kebugaran, dan kualitas hidup. Menua dengan sehat (healthy aging) adalah tujuan utama pelayanan kesehatan lansia.",
      "Penurunan fungsi fisiologis tubuh dapat diantisipasi dengan nutrisi yang mudah dicerna dan kaya kalsium, latihan fisik ringan (seperti jalan kaki atau senam lansia), serta menjaga interaksi sosial untuk menghindari demensia dan depresi.",
      "Dukungan penuh dari keluarga dan komunitas sangat berperan penting dalam memberikan rasa aman dan bahagia bagi lansia. Pemeriksaan rutin tekanan darah, kadar gula darah, dan fungsi sendi wajib dilakukan."
    ],
    topics: [
      { title: "Pencegahan Jatuh pada Lansia", image: "/images/healthy-family.svg" },
      { title: "Nutrisi Khusus Osteoporosis", image: "/images/perilaku-hidup-sehat.png" },
      { title: "Menjaga Memori dan Kognitif", image: "/images/article-sleep.svg" }
    ],
    illnesses: [
      { title: "Osteoarthritis / Nyeri Sendi", image: "/images/article-diabetes.svg" },
      { title: "Demensia Alzheimer", image: "/images/article-sleep.svg" },
      { title: "Katarak dan Gangguan Penglihatan", image: "/images/hero-family.svg" }
    ],
    articles: [
      { title: "Tips Menjaga Kepadatan Tulang Sejak Dini hingga Lansia", tags: "Lansia (60+ Tahun)", image: "/images/article-sleep.svg" },
      { title: "Pentingnya Dukungan Keluarga untuk Menghindari Depresi Lansia", tags: "Lansia (60+ Tahun)", image: "/images/article-baby.svg" },
      { title: "Panduan Senam Ringan yang Aman bagi Lansia di Rumah", tags: "Lansia (60+ Tahun)", image: "/images/article-sleep.svg" }
    ]
  }
};

export default function SiklusHidup() {
  const [activeStageId, setActiveStageId] = useState<string>("remaja");
  const details = stageDetails[activeStageId];

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

      <main className="siklus-hidup-page">
        {/* Intro Section */}
        <section className="section life-section" id="siklus-hidup" aria-labelledby="life-title">
          <div className="life-container center">
            <h1 id="life-title" className="siklus-page-title">Siklus Hidup Kesehatan</h1>
            <p className="siklus-page-subtitle">
              Pendekatan menjaga kesehatan sejak lahir hingga lansia, dengan perhatian khusus sesuai kebutuhan di setiap tahap usia.
            </p>

            {/* Stage Selector Grid */}
            <div className="life-grid siklus-tab-grid">
              {lifeStages.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`life-card siklus-tab-card ${isActive ? "active" : ""}`}
                    aria-pressed={isActive}
                  >
                    <Image src={stage.image} alt={stage.title} width={274} height={270} sizes="274px" />
                    <div className="life-label">
                      <strong>{stage.title}</strong>
                      <span>{stage.age}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dynamic Detail Content Section */}
        <section className="section cycle-details-section" aria-label="Detail Siklus Hidup">
          <div className="container">
            {/* Breadcrumb */}
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Siklus Hidup</Link>
              <span className="separator">&rsaquo;</span>
              <span className="current">{details.title}</span>
            </nav>

            <div className="content-grid cycle-layout-grid">
              {/* Left Column: Details */}
              <div className="cycle-main-content">
                {/* Large Representative Image */}
                <div className="cycle-featured-image-container">
                  <Image
                    className="cycle-featured-image"
                    src={details.image}
                    alt={`Kelompok Umur ${details.title}`}
                    width={760}
                    height={400}
                    priority
                  />
                </div>

                {/* Title & Age */}
                <div className="cycle-header-meta">
                  <span className="cycle-meta-label">Kelompok Umur</span>
                  <h2 className="cycle-title">
                    {details.title} <span className="cycle-plus-icon">+</span> <span className="cycle-age-range">{details.age}</span>
                  </h2>
                </div>

                {/* Filter Chips & Share Section */}
                <div className="cycle-actions-row">
                  <div className="cycle-tags-list" aria-label="Kategori Terkait">
                    {details.tags.map((tag) => (
                      <span key={tag} className="cycle-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="cycle-share-box" aria-label="Bagikan Halaman">
                    <a href="#share" className="share-btn"><Image src="/images/facebook.svg" alt="Facebook" width={16} height={16} /></a>
                    <a href="#share" className="share-btn"><Image src="/images/x.svg" alt="X" width={16} height={16} /></a>
                    <a href="#share" className="share-btn"><Image src="/images/instagram.svg" alt="Instagram" width={16} height={16} /></a>
                    <a href="#share" className="share-btn"><Image src="/images/youtube.svg" alt="YouTube" width={16} height={16} /></a>
                  </div>
                </div>

                {/* Detailed Paragraphs */}
                <div className="cycle-paragraphs-content">
                  {details.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Topik Kesehatan Terkait */}
                <div className="cycle-related-section">
                  <div className="related-section-header">
                    <h3>Topik Kesehatan Terkait</h3>
                    <div className="slider-arrows">
                      <button className="arrow-btn prev" aria-label="Sebelumnya">&lsaquo;</button>
                      <button className="arrow-btn next" aria-label="Berikutnya">&rsaquo;</button>
                    </div>
                  </div>
                  <div className="related-cards-grid">
                    {details.topics.map((topic, index) => (
                      <div className="related-card" key={index}>
                        <div className="related-card-img-wrapper">
                          <Image src={topic.image} alt="" width={240} height={140} />
                        </div>
                        <div className="related-card-label">
                          <span>{topic.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Penyakit Terkait */}
                <div className="cycle-related-section">
                  <div className="related-section-header">
                    <h3>Penyakit Terkait</h3>
                    <div className="slider-arrows">
                      <button className="arrow-btn prev" aria-label="Sebelumnya">&lsaquo;</button>
                      <button className="arrow-btn next" aria-label="Berikutnya">&rsaquo;</button>
                    </div>
                  </div>
                  <div className="related-cards-grid">
                    {details.illnesses.map((illness, index) => (
                      <div className="related-card color-accent" key={index}>
                        <div className="related-card-img-wrapper">
                          <Image src={illness.image} alt="" width={240} height={140} />
                        </div>
                        <div className="related-card-label">
                          <span>{illness.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Sidebar */}
              <aside className="side-stack cycle-sidebar">
                {/* Kalender Kesehatan */}
                <article className="mini-panel cycle-sidebar-panel">
                  <div className="panel-header-row">
                    <h3>Kalender Kesehatan</h3>
                    <a href="#kalender" className="panel-link-all">Lihat Semua</a>
                  </div>
                  <p>Informasi terkait hari besar kesehatan setahun penuh.</p>
                  <div className="calendar-widget" aria-label="Kalender November 2025">
                    <div className="calendar-header-row">
                      <button className="cal-arrow" aria-label="Bulan Sebelumnya">&lsaquo;</button>
                      <strong>November 2025</strong>
                      <button className="cal-arrow" aria-label="Bulan Berikutnya">&rsaquo;</button>
                    </div>
                    <div className="calendar-grid-header">
                      <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                    </div>
                    <div className="calendar-grid-days">
                      <span className="empty"></span><span className="empty"></span><span className="empty"></span><span className="empty"></span><span className="empty"></span>
                      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
                      <span>8</span><span>9</span><span>10</span><span className="cal-active">11</span><span>12</span><span>13</span><span>14</span>
                      <span>15</span><span>16</span><span className="cal-marked">17</span><span>18</span><span>19</span><span>20</span><span>21</span>
                      <span className="cal-marked">22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
                      <span>29</span><span>30</span>
                    </div>
                  </div>
                </article>

                {/* Artikel Terkait */}
                <article className="mini-panel cycle-sidebar-panel">
                  <h3>Artikel Terkait</h3>
                  
                  {/* Highlight Article */}
                  <div className="sidebar-article-hero">
                    <div className="article-hero-img-wrapper">
                      <Image src={details.articles[0].image} alt="" width={270} height={140} />
                    </div>
                    <span className="article-hero-tags">{details.articles[0].tags}</span>
                    <h4 className="article-hero-title">{details.articles[0].title}</h4>
                    <p className="article-hero-meta">18 Jul 2025 • Waktu Baca 3 Menit</p>
                  </div>

                  {/* Secondary Articles List */}
                  <div className="sidebar-articles-list">
                    {details.articles.slice(1).map((art, idx) => (
                      <div className="sidebar-article-item" key={idx}>
                        <div className="article-item-thumb">
                          <Image src={art.image} alt="" width={60} height={60} />
                        </div>
                        <div className="article-item-content">
                          <span className="article-item-tags">{art.tags}</span>
                          <h5 className="article-item-title">{art.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="panel-footer-link">
                    <a href="#artikel" className="link-more">Lainnya &rsaquo;</a>
                  </div>
                </article>

                {/* Media Publikasi Terkait */}
                <article className="mini-panel cycle-sidebar-panel">
                  <h3>Media Publikasi Terkait</h3>
                  <div className="publication-banner-card">
                    <div className="pub-banner-img-wrapper">
                      <Image src="/images/perilaku-hidup-sehat.png" alt="Hari Kesehatan Nasional" width={270} height={160} />
                    </div>
                    <h4 className="pub-banner-title">Payung Hari Kesehatan Nasional (HKN) ke-61</h4>
                    <p className="pub-banner-desc">Apakah si kecil sudah siap tidur sepanjang malam tanpa menyusu?</p>
                    <div className="pub-carousel-dots">
                      <span className="dot active"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <div className="panel-footer-link">
                    <a href="#publikasi" className="link-more">Lainnya &rsaquo;</a>
                  </div>
                </article>
              </aside>
            </div>
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
      {items.map((item) => <Link href="/#topik" key={item}>{item}</Link>)}
    </div>
  );
}
