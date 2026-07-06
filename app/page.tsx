import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
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

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-quick-links" aria-label="Tautan cepat">
          {socialLinks.map((item) => (
            <a className="social-link" href="#kontak" aria-label={item.label} key={item.label}>
              <Image src={item.icon} alt="" width={11} height={11} aria-hidden="true" />
            </a>
          ))}
          <a className="quick-text-link" href="#kontak">Kontak</a>
          <a className="quick-text-link login-link" href="#login">
            <Image src="/images/Profile.svg" alt="" width={16} height={16} aria-hidden="true" />
            <span>Login</span>
          </a>
        </div>
        <nav className="navbar" aria-label="Menu utama">
          <Link className="brand nav-brand" href="/" aria-label="Beranda Kemenkes Ayo Sehat">
            <Image src="/images/kemenkes-ayosehat.png" alt="Kemenkes Ayo Sehat" width={220} height={66} priority />
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
            <form className="search-form" action="#topik" role="search">
              <label className="sr-only" htmlFor="keyword">Kata kunci</label>
              <input id="keyword" name="keyword" type="search" placeholder="Ketikan kata kunci Anda di sini" />
              <button type="submit">Cari</button>
            </form>
            <div className="chips" aria-label="Topik populer">
              <span>Topik populer:</span>
              {topics.map((topic, index) => (
                <a className={index === 1 ? "active" : ""} href="#topik" key={topic}>{topic}</a>
              ))}
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
                  <Image src={stage.image} alt={stage.title} width={274} height={270} />
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
              <Image className="habit-image" src="/images/perilaku-hidup-sehat.png" alt="Keluarga melakukan gaya hidup sehat" width={520} height={520} />
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
              <p>Temukan penyakit dan kondisi; hidup sehat; keselamatan di tempat kerja; kesehatan lingkungan, cedera, kekerasan, dan keselamatan.</p>
              <div className="letters" aria-label="Daftar alfabet topik">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("").map((letter, index) => (
                  <a className={index === 0 ? "selected" : ""} href="#artikel" key={letter}>{letter}</a>
                ))}
              </div>
              <Image className="topic-image" src="/images/doctor-notes.svg" alt="Dokter menulis catatan kesehatan" width={760} height={190} />
            </article>
            <aside className="side-stack" aria-label="Informasi kesehatan">
              <article className="mini-panel">
                <h3>Kalender Kesehatan</h3>
                <p>Informasi terkait hari besar kesehatan setahun penuh.</p>
                <div className="calendar" aria-label="Kalender November 2025">
                  <strong>November 2025</strong>
                  {Array.from({ length: 35 }, (_, i) => <span className={i === 10 ? "today" : ""} key={i}>{i > 4 && i < 31 ? i - 4 : ""}</span>)}
                </div>
              </article>
              <article className="mini-panel">
                <h3>Kampanye Kesehatan</h3>
                <Image src="/images/campaign-ckg.svg" alt="Cek Kesehatan Gratis di Sekolah" width={270} height={150} />
                <p>Cek Kesehatan Gratis (CKG) di Sekolah</p>
              </article>
            </aside>
          </div>
        </section>

        <section className="section articles" id="artikel" aria-labelledby="article-title">
          <div className="container">
            <div className="section-head">
              <h2 id="article-title">Artikel Terbaru</h2>
              <a className="outline" href="#download">Lihat Artikel Lainnya</a>
            </div>
            <div className="article-grid">
              {articles.map(([title, tag, image]) => (
                <article className="article-card" key={title}>
                  <Image src={image} alt="" width={360} height={190} />
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
                <Image src={image} alt={title} width={310} height={230} />
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
              <span className="brand-mark" aria-hidden="true" />
              <span>Kemenkes<br />Ayo Sehat</span>
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
        <Image src={habit.icon} alt="" width={72} height={72} />
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
