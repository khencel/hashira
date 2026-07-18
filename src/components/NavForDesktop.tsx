"use client";
import { useState } from "react";
import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavForDesktop() {
    const [megaOpen, setMegaOpen] = useState(false);
    const [megaOpen2, setMegaOpen2] = useState(false);
    const [megaOpen3, setMegaOpen3] = useState(false);
    const [megaOpen4, setMegaOpen4] = useState(false);
   
    const t1 = useTranslations("navDrop");

    return (
        <>
            <li className="d-none d-md-block"><Link href="/" className="nav-link">{t1('home')}</Link></li>
            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                >
                <a href="#" className="nav-link active">
                    {t1('aboutNav')}
                </a>

                <div className={`mega-menu ${megaOpen ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>{t1('about.about')}</strong>
                        <Link href="/about/corporate-identity" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>{t1('about.corporate')}</h4>
                            <p>{t1('about.know')}</p>
                            </div>
                        </Link>

                        <Link href="/about/what-is-hashira" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                                
                                <h4>{t1('about.what')}</h4>
                                
                                <p>
                                    {t1('about.filipino')}
                                </p>
                            </div>
                        </Link>

                        <Link href="/about/school-tour" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>学校案内</h4>
                            <p>当校の校舎をご覧ください</p>
                            </div>
                        </Link>

                        <Link href="/about/industries" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>{t1('about.industries')}</h4>
                            <p>{t1('about.system')} </p>
                            </div>
                        </Link>
                        <Link href="/about/group-company" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>グループ会社紹介</h4>
                            <p>弊社のグループ会社のご紹介</p>
                            </div>
                        </Link>
                        {/* <Link href="/worldwide-careers" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Overall</h4>
                            <p>Our system ensures that we provide our clients with the best possible Filipino Workers </p>
                            </div>
                        </Link> */}
                    </div>
                </div>
            </li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen4(true)}
                onMouseLeave={() => setMegaOpen4(false)}
                >
                <a href="#" className="nav-link active">
                    {t1('systemNav')}
                </a>

                <div className={`mega-menu ${megaOpen4 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>{t1('system.system')}</strong>
                        <Link href="/system/overall" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>{t1('system.overall')}</h4>
                            <p>{t1('system.our')}</p>
                            </div>
                        </Link>

                        <Link href="/system/special-rules" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t1('system.special')}</h4>
                            <p>{t1('system.we')}</p>
                            </div>
                        </Link>

                        

                        <Link href="/system/japanese-culture-manners" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t1('system.japanese')}</h4>
                            <p>{t1('system.just')}</p>
                            </div>
                        </Link>

                        <Link href="/system/achievements" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t1('system.achievements')}</h4>
                            <p>{t1('system.see')}</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen2(true)}
                onMouseLeave={() => setMegaOpen2(false)}
                >
                <a href="#" className="nav-link active">
                    {t1('skillNav')}
                </a>

                <div className={`mega-menu ${megaOpen2 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>{t1('skillsTraining.skill')}</strong>
                        <Link href="/skill-training/construction" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>{t1('skillsTraining.construction')}</h4>
                            <p>{t1('skillsTraining.see')}</p>
                            </div>
                        </Link>

                        <Link href="/skill-training/hospitality" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t1('skillsTraining.hospitality')}</h4>
                            <p>{t1('skillsTraining.enhance')}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen3(true)}
                onMouseLeave={() => setMegaOpen3(false)}
                >
                <a href="#" className="nav-link active">
                    {t1('testimonialsNav')}
                </a>

                <div className={`mega-menu ${megaOpen3 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>{t1('testimonials.testimonials')}</strong>
                        <Link href="/testimonials/client-testimonials" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>{t1('testimonials.client')}</h4>
                            <p>{t1('testimonials.clientDesc')}</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/student-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t1('testimonials.student')}</h4>
                            <p>{t1('testimonials.studentDesc')}</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/teacher-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>{t1('testimonials.teacher')}</h4>
                            <p>{t1('testimonials.teacherDesc')}</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </li>

            

            <li className="d-none d-md-block"><Link href="/gallery" className="nav-link">{t1('gallery')}</Link></li>
            <li className="d-none d-md-block">
                <Link href="/contact-us" className="nav-link">{t1('contact')}</Link>
            </li>
        </>
    )
}