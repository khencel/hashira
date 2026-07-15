"use client"

import Banner from "@/components/Banner";
import YouTube from "react-youtube";
import TestimonialCard from "@/components/TestimonialsCard";
import s from "../../../styles/testimonials.module.css"
import { useTranslations } from "next-intl";
import { getStudent } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
// import "../../../node_modules/swiper/swiper-bundle.min.css";

import { Autoplay,Navigation, Pagination } from "swiper/modules";

export default function StudentTestimonial() {
    const t = useTranslations("studentTestimonial");
    const items = getStudent()
    return (
        <>
            <Banner
                backgroundImage="/9798362_4257304.jpg"
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
                                        videoId="XWjmokb4zUk"
                                        opts={{
                                            width: "100%",
                                            height: "300px",
                                            playerVars: {
                                            autoplay: 0,
                                            controls: 1,
                                            mute: 1,
                                            loop: 1,
                                            playlist: "XWjmokb4zUk",
                                            },
                                        }}
                                        
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>エイザ　ベアナー</span>
                                    <p className="subtitle">海月館グループ　ホテルスタッフ</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
                                        videoId="TPDpyCVv5UM"
                                        opts={{
                                            width: "100%",
                                            height: "300px",
                                            playerVars: {
                                            autoplay: 0,
                                            controls: 1,
                                            mute: 1,
                                            loop: 1,
                                            playlist: "TPDpyCVv5UM",
                                            },
                                        }}
                                        
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>マリア ラリーサ E サンチェス</span>
                                    <p className="subtitle">ザ・テラスホテルズ株式会社　ホテルスタッフ</p>
                                </div>
                            </div>
                            <div className="col-md-4 p-2">
                                <div>
                                    <YouTube
                                        videoId="wwtwvZcB_XY"
                                        opts={{
                                            width: "100%",
                                            height: "300px",
                                            playerVars: {
                                            autoplay: 0,
                                            controls: 1,
                                            mute: 1,
                                            loop: 1,
                                            playlist: "wwtwvZcB_XY",
                                            },
                                        }}
                                        
                                    />
                                </div>
                                <div>
                                    <span className="title" style={{fontSize:"18px"}}>レクシーアン　オプリモ</span>
                                    <p className="subtitle">株式会社壱番屋　外食スタッフ</p>
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
                                slidesPerView={3}
                                loop={true}
                                modules={[Autoplay, Navigation, Pagination]}
                                // autoplay={{ delay: 12000 }}
                                speed={800}
                                navigation
                                pagination={{ clickable: true }}
                            >
                                {
                                    items.map((item, index) => (
                                        <SwiperSlide>
                                            <TestimonialCard
                                                name={item.name}
                                                role={item.role}
                                                company={item.company}
                                                statement={item.statement}
                                                avatar={item.avatar}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                                
                                    
                                


                            </Swiper>
                            {/* <div className="row">
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
                            </div> */}
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}