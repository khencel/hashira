"use client"

import Banner from "@/components/Banner";
import YouTube from "react-youtube";
import TestimonialCard from "@/components/TestimonialsCard";
import s from "../../../styles/testimonials.module.css"
import { useTranslations } from "next-intl";
import { getClient } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination } from "swiper/modules";

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
                                    videoId="qZFmmB7THxw"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "qZFmmB7THxw",
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
                                    videoId="BZHjWdZY1TI"
                                    opts={{
                                        width: "100%",
                                        height: "300px",
                                        playerVars: {
                                        autoplay: 0,
                                        controls: 1,
                                        mute: 1,
                                        loop: 1,
                                        playlist: "BZHjWdZY1TI",
                                        },
                                    }}
                                    
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>臼井　一徳</span>
                                    <p className="subtitle">担当相談役 <br/>協同組合ビジネスサプライ愛知</p>
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
                            
                            <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    loop={true}
                                    modules={[Autoplay, Navigation, Pagination]}
                                    autoplay={{
                                      delay: 12000, // 12 seconds
                                      disableOnInteraction: false, // optional: tuloy pa rin autoplay kahit nag-click/swipe ang user
                                    }}
                                    speed={800}
                                    navigation
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        576: {
                                        slidesPerView: 1,
                                        spaceBetween: 15,
                                        },
                                        768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                        },
                                        992: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                        },
                                        1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 25,
                                        },
                                    }}
                                  >

                                    {
                                        items.map((item,index) => (
                                            <SwiperSlide>
                                                <div key={index}>
                                                    <TestimonialCard
                                                        name={item.name}
                                                        role={item.role}
                                                        company={item.company}
                                                        avatar={item.avatar}
                                                        statement={item.statement}
                                                    />
                                                </div>
                                                
                                            </SwiperSlide>
                                            
                                        ))
                                    }
                                
                            </Swiper>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}