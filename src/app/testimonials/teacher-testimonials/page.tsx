"use client"

import Banner from "@/components/Banner";
import YouTube from "react-youtube";
import TestimonialCard from "@/components/TestimonialsCard";
import s from "../../../styles/testimonials.module.css"
import { useTranslations } from "next-intl";
import { getTeachers } from "../data";

export default function TeacherTestimonial() {
    const t = useTranslations("teacherTestimonial");
    const items = getTeachers()
    return (
        <>
            <Banner
                backgroundImage="/img/banner/57234.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                description={t('desc')}
            />

            <section className="mt-5">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">{t('our')}</h2>
                            {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate ratione</p> */}
                        </div>
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
                                    videoId="YMe7bSttqBE"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "YMe7bSttqBE",
                                        },
                                    }}
                                    
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>ケイビー先生</span>
                                    <p className="subtitle">技能実習生主任</p>
                                </div>
                            </div>
                            
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
                                    videoId="eAeVBxZPie8"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "eAeVBxZPie8",
                                        },
                                    }}
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>ルイサ先生</span>
                                    <p className="subtitle">本部長</p>
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
                                    <p className="subtitle">監理団体理事長</p>
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
                                    items.map((item, index) => (
                                        <div className="col-md-4" key={index}>
                                            <TestimonialCard
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