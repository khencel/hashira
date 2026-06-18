"use client"

import Image from "next/image";
import s from "../components/styles/Footer.module.css"
import { 
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok 
} from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className={s.footer}>
      <div className={s.topSection}>
        {/* Left Logo */}
        <div className={s.logo}>
          <h2>Hashira Skill</h2>
          <span>Language Academy</span>
        </div>

        {/* Links */}
        <div className={s.links}>
          <div>
            <p>{t('home')}</p>
            <p>{t('about')}</p>
            <p>{t('system')}</p>
            <p>{t('skill')}</p>
          </div>

          <div>
            <p>{t('testimonial')}</p>
            <p>{t('gallery')}</p>
            <p>{t('contact')}</p>
            <p>{t('faq')}</p>
          </div>
        </div>

        {/* Social + Badge */}
        <div className={s.right}>
          <p className={s.connect}>{t('connect')}</p>

          <div className={s.socials}>
            <span><FaFacebook className="social-icon" style={{color:"white"}} /></span>
            <span><FaLinkedin className="social-icon" style={{color:"white"}} /></span>
            <span><FaInstagram className="social-icon" style={{color:"white"}} /></span>
            <span><FaYoutube className="social-icon" style={{color:"white"}} /></span>
            <span><FaTiktok className="social-icon" style={{color:"white"}} /></span>
          </div>

          {/* <div className={s.badge}>
            <Image
              src="/dpo-badge.png"
              alt="DPO Badge"
              width={120}
              height={200}
            />
          </div> */}
        </div>
      </div>

      <div className={s.divider} />

      <div className={s.bottom}>
        <div className={s.bottomLeft}>
          {/* <p>Legal & Compliance</p>
          <p>Privacy Policy</p> */}
        </div>

        {/* <div className={s.bottomRight}>
          <p>
            Website developed by <strong>Concept Machine</strong>
          </p>
        </div> */}
      </div>
    </footer>
  );
}