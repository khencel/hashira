"use client"

import Banner from "@/components/Banner";
import YouTube from "react-youtube";
import TestimonialCard from "@/components/TestimonialsCard";
import s from "../../../styles/testimonials.module.css"
import { useTranslations } from "next-intl";
import { getClient } from "../data";

export default function ClientTestimonial() {
    const t = useTranslations("clientTestimonial");
    const items = getClient()
    return (
        <>
            <Banner
                backgroundImage="/9176158_6604.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                description={t('desc')}
            />

            <section className="mt-5">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">{t('ourClient')}</h2>
                            {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate ratione</p> */}
                        </div>
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
                                    videoId="3rY_jYkcXWw"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "3rY_jYkcXWw",
                                        },
                                    }}
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>健輔橋田</span>
                                    <p className="subtitle">管理団体理事長 <br /> ワールドスター国際交流事業協同組合</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
                                    videoId="bERqugcvTns"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "bERqugcvTns",
                                        },
                                    }}
                                    
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>矢方朋樹</span>
                                    <p className="subtitle">
                                        監理団体理事長
                                        <br />
                                        東海中小企業支援事業協同組合
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
                                    videoId="1vIU3R-BIDQ"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "1vIU3R-BIDQ",
                                        },
                                    }}
                                    
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>Mark Anthony Reyes</span>
                                    <p className="subtitle">Operations Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section  className={`${s.testimonialSection} mt-5 mb-3`}>
                <div className={s.containerContent}>
                    <div className="row m-0 justify-content-center">
                        <div className="col-md-10">
                            <div className="header">
                                <h2 className="title">{t('what')}</h2>
                                {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate ratione</p> */}
                            </div>
                            
                            <div className="row">
                                {
                                    items.map((item, index)=>(
                                        <div className="col-md-4" key={index}>
                                            <TestimonialCard
                                                avatar={item.avatar}
                                                name={item.name}
                                                role={item.role}
                                                company={item.company}
                                                statement={item.statement}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}