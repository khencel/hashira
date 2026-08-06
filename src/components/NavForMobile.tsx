"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";

export default function NavForMobile({ onLinkClick }: { onLinkClick?: () => void }) {
  const t1 = useTranslations("navDrop");

  return (
    <>
      <li className="forMobile">
        <Link href="/" className="ms-2" onClick={onLinkClick}>
          {t1("home")}
        </Link>
      </li>

      {/* ABOUT */}
      <li className="forMobile">
        <div className="accordion" id="mobileAccordion">
          <span
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#aboutCollapse"
          >
            {t1("aboutNav")}
          </span>

          <div
            id="aboutCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileAccordion"
          >
            <div className="accordion-body">
              <div className="mega-grid">
                <strong>{t1("about.about")}</strong>

                <Link href="/about/corporate-identity" className="mega-item" onClick={onLinkClick}>
                  <FaHospital className="social-icon" />
                  <div>
                    <h4>{t1("about.corporate")}</h4>
                    <p>{t1("about.know")}</p>
                  </div>
                </Link>

                <Link href="/about/what-is-hashira" className="mega-item" onClick={onLinkClick}>
                  <FaUserDoctor className="social-icon" />
                  <div>
                    <h4>{t1("about.what")}</h4>
                    <p>{t1("about.filipino")}</p>
                  </div>
                </Link>

                <Link href="/about/school-tour" className="mega-item" onClick={onLinkClick}>
                  <FaSyringe className="social-icon" />
                  <div>
                    <h4>学校案内</h4>
                    <p>当校の校舎をご覧ください</p>
                  </div>
                </Link>

                <Link href="/about/industries" className="mega-item" onClick={onLinkClick}>
                  <FaSyringe className="social-icon" />
                  <div>
                    <h4>{t1("about.industries")}</h4>
                    <p>{t1("about.system")}</p>
                  </div>
                </Link>

                <Link href="/about/group-company" className="mega-item" onClick={onLinkClick}>
                  <FaSyringe className="social-icon" />
                  <div>
                    <h4>グループ会社紹介</h4>
                    <p>弊社のグループ会社のご紹介</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* SYSTEM */}
      <li className="forMobile">
        <div className="accordion" id="mobileAccordion2">
          <span
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#systemCollapse"
          >
            {t1("systemNav")}
          </span>

          <div
            id="systemCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileAccordion2"
          >
            <div className="accordion-body">
              <div className="mega-grid">
                <strong>{t1("system.system")}</strong>

                <Link href="/system/overall" className="mega-item" onClick={onLinkClick}>
                  <FaHospital className="social-icon" />
                  <div>
                    <h4>{t1("system.overall")}</h4>
                    <p>{t1("system.our")}</p>
                  </div>
                </Link>

                <Link href="/system/special-rules" className="mega-item" onClick={onLinkClick}>
                  <FaUserDoctor className="social-icon" />
                  <div>
                    <h4>{t1("system.special")}</h4>
                    <p>{t1("system.we")}</p>
                  </div>
                </Link>

                <Link href="/system/japanese-culture-manners" className="mega-item" onClick={onLinkClick}>
                  <FaUserDoctor className="social-icon" />
                  <div>
                    <h4>{t1("system.japanese")}</h4>
                    <p>{t1("system.just")}</p>
                  </div>
                </Link>

                <Link href="/system/achievements" className="mega-item" onClick={onLinkClick}>
                  <FaUserDoctor className="social-icon" />
                  <div>
                    <h4>{t1("system.achievements")}</h4>
                    <p>{t1("system.see")}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* SKILL TRAINING */}
      <li className="forMobile">
        <div className="accordion" id="mobileAccordion3">
          <span
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#skillsCollapse"
          >
            {t1("skillNav")}
          </span>

          <div
            id="skillsCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileAccordion3"
          >
            <div className="accordion-body">
              <div className="mega-grid">
                <strong>{t1("skillsTraining.skill")}</strong>

                <Link href="/skill-training/construction" className="mega-item" onClick={onLinkClick}>
                  <FaHospital className="social-icon" />
                  <div>
                    <h4>{t1("skillsTraining.construction")}</h4>
                    <p>{t1("skillsTraining.see")}</p>
                  </div>
                </Link>

                <Link href="/skill-training/hospitality" className="mega-item" onClick={onLinkClick}>
                  <FaUserDoctor className="social-icon" />
                  <div>
                    <h4>{t1("skillsTraining.hospitality")}</h4>
                    <p>{t1("skillsTraining.enhance")}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* TESTIMONIALS */}
      <li className="forMobile">
        <div className="accordion" id="mobileAccordion4">
          <span
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#testimonialCollapse"
          >
            {t1("testimonialsNav")}
          </span>

          <div
            id="testimonialCollapse"
            className="accordion-collapse collapse"
            data-bs-parent="#mobileAccordion4"
          >
            <div className="accordion-body">
              <div className="mega-grid">
                <strong>{t1("testimonials.testimonials")}</strong>

                <Link href="/testimonials/client-testimonials" className="mega-item" onClick={onLinkClick}>
                  <FaHospital className="social-icon" />
                  <div>
                    <h4>{t1("testimonials.client")}</h4>
                    <p>{t1("testimonials.clientDesc")}</p>
                  </div>
                </Link>

                <Link href="/testimonials/student-testimonials" className="mega-item" onClick={onLinkClick}>
                  <FaUserDoctor className="social-icon" />
                  <div>
                    <h4>{t1("testimonials.student")}</h4>
                    <p>{t1("testimonials.studentDesc")}</p>
                  </div>
                </Link>

                <Link href="/testimonials/teacher-testimonials" className="mega-item" onClick={onLinkClick}>
                  <FaUserDoctor className="social-icon" />
                  <div>
                    <h4>{t1("testimonials.teacher")}</h4>
                    <p>{t1("testimonials.teacherDesc")}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>

      {/* NORMAL LINKS */}
      <li className="forMobile">
        <Link href="/gallery" className="ms-2" onClick={onLinkClick}>
          {t1("gallery")}
        </Link>
      </li>

      <li className="forMobile">
        <Link href="/contact-us" className="ms-2" onClick={onLinkClick}>
          {t1("contact")}
        </Link>
      </li>
    </>
  );
}