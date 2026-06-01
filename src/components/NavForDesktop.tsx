"use client";
import { useState } from "react";
import { FaHospital, FaUserDoctor, FaSyringe } from "react-icons/fa6";
import Link from "next/link";
// import { useTranslations } from "next-intl";

export default function NavForDesktop() {
    const [megaOpen, setMegaOpen] = useState(false);
    const [megaOpen2, setMegaOpen2] = useState(false);
    const [megaOpen3, setMegaOpen3] = useState(false);
    const [megaOpen4, setMegaOpen4] = useState(false);
    // const t = useTranslations();

    return (
        <>
            <li className="d-none d-md-block"><Link href="/">Home</Link></li>
            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                >
                <a href="#" className="nav-link active">
                    About Us
                </a>

                <div className={`mega-menu ${megaOpen ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>About Us</strong>
                        <Link href="/about/corporate-identity" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Corporate Identity</h4>
                            <p>Know all about one of the Philippines’ leading Japanese Schools</p>
                            </div>
                        </Link>

                        <Link href="/about/what-is-hashira" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                                
                                <h4>What is Hashira</h4>
                                
                                <p>
                                    Filipino workers as the foundation of a Japan in need of labor
                                </p>
                            </div>
                        </Link>

                        <Link href="/about/industries" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Industries</h4>
                            <p>Over 2,000 Filipino workers deployed all across Japan </p>
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
                    System
                </a>

                <div className={`mega-menu ${megaOpen4 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>System</strong>
                        <Link href="/system/overall" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Overall</h4>
                            <p>Our system ensures that we provide our clients with the best possible Filipino Workers</p>
                            </div>
                        </Link>

                        <Link href="/system/special-rules" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Special Rules</h4>
                            <p>We implement these rules to encourage a disciplined and competitive environment</p>
                            </div>
                        </Link>

                        <Link href="/system/achievements" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Achievements</h4>
                            <p>See what Hashira has achieved since its establishment in 2020</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/OFW-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Japanese Culture and Manners</h4>
                            <p>just as important as Japanese language</p>
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
                    Skills Training
                </a>

                <div className={`mega-menu ${megaOpen2 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>Skills Training</strong>
                        <Link href="/testimonials/client-testimonials" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Construction</h4>
                            <p>See how we train our construction workers</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/OFW-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Hospitality</h4>
                            <p>Enhancing the heart of the Filipino</p>
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
                    Testimonials
                </a>

                <div className={`mega-menu ${megaOpen3 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>Testimonials</strong>
                        <Link href="/testimonials/client-testimonials" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Client Testimonials</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/OFW-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Student Testimonials</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/OFW-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Teacher Testimonials</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </li>

            

            <li className="d-none d-md-block"><Link href="/gallery">Gallery</Link></li>
            <li className="d-none d-md-block">
                <Link href="/contact-us">Contact Us</Link>
            </li>
        </>
    )
}