import Image from "next/image";
import Link from "next/link";
import NavMenu from "../NavMenu";

const socialLinks = [
  { label: "Instagram", icon: "/images/instagram.svg" },
  { label: "Facebook", icon: "/images/facebook.svg" },
  { label: "YouTube", icon: "/images/youtube.svg" },
  { label: "X", icon: "/images/x.svg" }
];

const aboutParagraphs = [
  "Ayo Sehat Kemenkes RI merupakan platform/saluran sumber informasi, edukasi kesehatan, serta gaya hidup sehat resmi dari Kementerian Kesehatan sehingga dapat dipertanggungjawabkan dan informasi yang diberikan sejalan dengan program pemerintah.",
  "@ayosehat.kemkes hadir agar masyarakat dapat mengakses langsung informasi dan edukasi kesehatan yang dibutuhkan dari sumber resmi dan terpercaya.",
  "Konten yang ada di Ayo Sehat adalah hasil pelibatan dan kolaborasi dengan lintas program pada setiap perencanaan dan produksinya.",
  "Ayo Sehat juga dapat menjadi wadah berbagi informasi tentang kegiatan seputar kesehatan yang diinisiasi program hingga mitra yang dapat diikuti masyarakat."
];

export default function Tentang() {
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
        <section className="about-hero" aria-labelledby="about-page-title">
          <div className="container about-hero-content">
            <h1 id="about-page-title">Ayo Sehat</h1>
            <p>Kementerian Kesehatan<br />Republik Indonesia</p>
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <div className="container about-layout">
            <article className="about-copy">
              <h2 id="about-title">Tentang</h2>
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
            <Image
              className="about-image"
              src="/images/tentang-hero.png"
              alt="Keluarga Indonesia tersenyum bersama"
              width={660}
              height={792}
              sizes="(max-width: 760px) calc(100vw - 28px), (max-width: 1020px) 70vw, 46vw"
              priority
            />
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
