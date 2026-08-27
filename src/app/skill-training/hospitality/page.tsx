"use client";
import Banner from "@/components/Banner";
import TradeTestItem from "./tradeTestItem";
import {getData} from "./data";
import YouTube from "react-youtube";
import s from "@/styles/SkillTraining.module.css"
import { useTranslations } from "next-intl";

export default function Construction() {
    const t = useTranslations("hospitality");
    const data = getData();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/DSC03209 (1).jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                description={t('desc')}
            />

            <div className="row justify-content-center m-0">
                <div className="col-md-11">
                    {data.map((item) => (
                        <TradeTestItem key={item.number} {...item} />
                    ))}
                </div>
            </div>

            <section className="mt-5 mb-5">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">{t('bottomTitle')}</h2>
                            <p className="subtitle">{t('bottomSubtitle')}</p>
                        </div>

                        <div className={`row align-items-center ${s.sectionStyle}`}>
                            <div className="col-lg-3 col-md-4 col-12 p-3">
                                <span className="title" style={{fontWeight:"600", fontSize:"20px"}}>
                                    {t('Japanese')}
                                </span>
                                <p className="subtitle" style={{fontSize:"14px"}}>
                                    {t('JapaneseDesc')}
                                </p>
                            </div>
                            <div className="col-lg-5 col-md-8 col-12" style={{paddingTop:"10px"}}>
                                <div className={s.videoWrapper}>
                                    <YouTube
                                        videoId="qORaQcTU3UA"
                                        opts={{
                                            width: "100%",
                                            height: "300px",
                                            playerVars: {
                                            autoplay: 0,
                                            controls: 1,
                                            mute: 1,
                                            loop: 1,
                                            playlist: "qORaQcTU3UA",
                                            },
                                        }}
                                        
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className={s.imageGrid}>
                                    <img
                                        src="/img/hospitality/DSC02753.jpg"
                                        className={s.galleryImage}
                                        alt=""
                                    />

                                    <img
                                        src="/img/hospitality/dcb5999c-c30c-408a-baf9-ee84d5375d3c.jpg"
                                        className={s.galleryImage}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`row ${s.sectionStyle}`}>
                            <div className="col-md-3 p-3">
                                <span className="title" style={{fontWeight:"600", fontSize:"20px"}}>
                                    {t('Technical')}
                                </span>
                                <p className="subtitle" style={{fontSize:"14px"}}>
                                    {t('TechnicalDesc')}
                                </p>
                            </div>
                            <div className="col-md-5" style={{paddingTop:"10px"}}>
                                <YouTube
                                videoId="kptzfxDTykY"
                                opts={{
                                    width: "100%",
                                    height: "300px",
                                    playerVars: {
                                    autoplay: 0,
                                    controls: 1,
                                    mute: 1,
                                    loop: 1,
                                    playlist: "kptzfxDTykY",
                                    },
                                }}
                               
                                />
                            </div>
                            <div className="col-md-4">
                                <div >
                                    <img src="/img/hospitality/3b9ad848-f4a7-4be5-ad8f-d19edb4ba7f1.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
                                </div>
                                <div >
                                    <img src="/img/hospitality/ed634217-f8d6-4ba4-91b3-4f1fb435cd69.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
                
        </>
    );
}

/* Reusable Section */
