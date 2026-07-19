"use client"

import Banner from "@/components/Banner"
import s from "@/styles/contactUs.module.css"
import { FaFacebookF } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactUs(){
    const t = useTranslations("contactUs");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/124009.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                // description={t('desc')}
                customFontSize={true}
            />

            <section  className={`${s.testimonialSection} `}>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div >
                        
                        <div className="header">
                            <h2 className="title">{t('connect')}</h2>
                            {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                        </div>

                        {/* MAIN */}
                        <section className={` container`}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div >
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30892.52672393006!2d121.15724164692706!3d14.566802681197766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c1e9d1ddc9b5%3A0xfc095f21b3b019!2sHashira%20Skills%20%26%20Language%20Academy!5e0!3m2!1sen!2sph!4v1784434116956!5m2!1sen!2sph" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className={`${s.contactCard} ${s.card}`}>
                                        <h4>Contact Information</h4>

                                        <div className={s.infoItem}>
                                            <span>📍</span>
                                            <div>
                                            <strong>Address</strong>
                                            <p>G5XM+R85, Don Mariano Santos Ave, Angono, Rizal</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span>📞</span>
                                            <div>
                                            <strong>Phone</strong>
                                            <p>+639175672721</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span>📧</span>
                                            <div>
                                            <strong>Email</strong>
                                            <p>angono@hashiraskills.com</p>
                                            </div>
                                        </div>

                                        <div className={s.infoItem}>
                                            <span><FaFacebookF /></span>
                                            <div>
                                            <strong>Facebook</strong>
                                            <Link href={""}>
                                                <p>Hashira Skills</p>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </section>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}