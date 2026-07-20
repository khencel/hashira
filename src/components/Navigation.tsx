"use client";
import { useState } from "react";
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok 
} from "react-icons/fa6";

import NavForMobile from "./NavForMobile";
import NavForDesktop from "./NavForDesktop";
import { useLocale } from "@/i18n/LocaleContext";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();

  return (
    <div className="nav-div">
      <nav className="nav-container">

        {/* TOP BAR */}
        <div className="nav-top">
          <div className="logo">
            <img src="/logo3.jpg" alt="logo" />
          </div>

          {/* BURGER */}
          <div
            className={`burger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* SOCIALS DESKTOP */}
          <div className={`socials ${open ? "hide" : ""}`}>
            <Link target="_blank" href={"https://www.facebook.com/profile.php?id=61590683485492&mibextid=wwXIfr&rdid=CXKHSSTSFfbU1fr9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18t4vLYP9w%2F%3Fmibextid%3DwwXIfr#"}>
              <span><FaFacebook className="social-icon" /></span>
            </Link>
            <Link target="_blank" href={""}>
            <span><FaInstagram className="social-icon" /></span>
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/channel/UCE9mVgF3EqaZefDfjo0SQCA"}>
            <span><FaYoutube className="social-icon" /></span>
            </Link>
            <Link target="_blank" href={""}>
            <span><FaTiktok className="social-icon" /></span>
            </Link>
            <span>
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as "en" | "ja")}
              >
                <option value="en">English</option>
                <option value="ja">Japanese</option>
              </select>
            </span>
          </div>
        </div>

        {/* MOBILE SOCIALS */}
        <div className={`socials for-mobile pt-2 pb-3 ${open ? "show" : ""}`}>
          <Link target="_blank" href={"https://www.facebook.com/profile.php?id=61590683485492&mibextid=wwXIfr&rdid=CXKHSSTSFfbU1fr9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18t4vLYP9w%2F%3Fmibextid%3DwwXIfr#"}>
            <span><FaFacebook className="social-icon" /></span>
          </Link>
          <span><FaInstagram className="social-icon" /></span>
          <Link target="_blank" href={"https://www.youtube.com/channel/UCE9mVgF3EqaZefDfjo0SQCA"}>
            <span><FaYoutube className="social-icon" /></span>
          </Link>
          <span><FaTiktok className="social-icon" /></span>
        </div>

        {/* MENU */}
        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <NavForDesktop />
          <NavForMobile onLinkClick={() => setOpen(false)} />
        </ul>
      </nav>
    </div>
  );
}