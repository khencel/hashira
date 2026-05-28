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

                        <Link href="/testimonials/OFW-testimonials" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Special Rules</h4>
                            <p>We implement these rules to encourage a disciplined and competitive environment</p>
                            </div>
                        </Link>

                        <Link href="/testimonials/OFW-testimonials" className="mega-item">
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

            <li className="d-none d-md-block"><Link href="/engage-with-us">Engage with Us</Link></li>

            <li
                className="mega-wrapper d-none d-md-block"
                onMouseEnter={() => setMegaOpen2(true)}
                onMouseLeave={() => setMegaOpen2(false)}
                >
                <a href="#" className="nav-link active">
                    Departments and Facilities
                </a>

                <div className={`mega-menu ${megaOpen2 ? "show" : ""}`}>

                    {/* arrow */}
                    <div className="mega-arrow"></div>

                    <div className="mega-grid">
                        <strong>Departments and Facilities</strong>
                        <Link href="/department-facilities/department" className="mega-item">
                            <FaHospital className="social-icon" />
                            <div>
                            <h4>Departments</h4>
                            <p>Discover how we deliver streamlined operations</p>
                            </div>
                        </Link>
                        

                        <Link href="/department-facilities/main-office" className="mega-item">
                            <FaUserDoctor className="social-icon" />
                            <div>
                            <h4>Main Office</h4>
                            <p>Explore our five-storey headquarters in Makati </p>
                            </div>
                        </Link>

                        <Link href="/department-facilities/branch-offices" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Branch Offices</h4>
                            <p>Learn more about our nationwide locations </p>
                            </div>
                        </Link>

                        <Link href="/department-facilities/dormitory" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Dormitory</h4>
                            <p>View our well-maintained housing facilities for selected workers</p>
                            </div>
                        </Link>

                        <div className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Pro-Tech Skills</h4>
                            <p>Our TESDA accredited Hospitality and Caregiving Training Center</p>
                            </div>
                        </div>

                        <Link href="/department-facilities/hashira" className="mega-item">
                            <FaSyringe className="social-icon" />
                            <div>
                            <h4>Hashira Skills</h4>
                            <p>Our TESDA accredited Japanese Language and Construction Training Center</p>
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
                            <h4>OFW Testimonials</h4>
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