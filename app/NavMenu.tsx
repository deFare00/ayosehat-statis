"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Tentang", icon: "/images/info-circle.svg", href: "/tentang", activePath: "/tentang" },
  { label: "Topik", icon: "/images/category.svg", href: "/#topik" },
  { label: "Siklus Hidup", icon: "/images/3-user.svg", href: "/#siklus-hidup" },
  { label: "Hidup Sehat", icon: "/images/heart.svg", href: "/#hidup-sehat" },
  { label: "Kampanye", icon: "/images/activity.svg", href: "/#kampanye" },
  { label: "Kegiatan", icon: "/images/calendar.svg", href: "/#kegiatan" },
  { label: "Download", icon: "/images/download.svg", href: "/#download" },
  { label: "Kemitraan", icon: "/images/Document.svg", href: "/#kemitraan" }
];

export default function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMenuOpen);

    return () => document.body.classList.remove("mobile-menu-open");
  }, [isMenuOpen]);

  const renderMenuLinks = () =>
    menuItems.map((item) => {
      const isActive = item.activePath === pathname;

      return (
        <a
          className={isActive ? "active" : ""}
          href={item.href}
          key={item.label}
          aria-current={isActive ? "page" : undefined}
          onClick={() => setIsMenuOpen(false)}
        >
          <Image className="menu-icon" src={item.icon} alt="" width={42} height={42} sizes="(max-width: 760px) 40px, 42px" aria-hidden="true" />
          <span>{item.label}</span>
        </a>
      );
    });

  return (
    <div className="nav-menu">
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label="Buka menu navigasi"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <span>Menu</span>
        <span className="mobile-menu-bars" aria-hidden="true" />
      </button>

      <div className="menu desktop-menu">{renderMenuLinks()}</div>

      <div
        className={`mobile-menu-backdrop${isMenuOpen ? " is-open" : ""}`}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />
      <div className={`mobile-menu-panel${isMenuOpen ? " is-open" : ""}`} id="mobile-navigation">
        <div className="mobile-menu-head">
          <span>Menu</span>
          <button type="button" className="mobile-menu-close" aria-label="Tutup menu navigasi" onClick={() => setIsMenuOpen(false)}>
            <span aria-hidden="true" />
          </button>
        </div>
        <div className="menu mobile-menu-list">{renderMenuLinks()}</div>
      </div>
    </div>
  );
}
