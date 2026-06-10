"use client";
import Banner from "@/components/Banner";
import TradeTestItem from "./tradeTestItem";
import {getData} from "./data";
import YouTube from "react-youtube";
import s from "@/styles/SkillTraining.module.css"
import { useTranslations } from "next-intl";

export default function Construction() {
    const t = useTranslations("construction");
    const data = getData();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/144829.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                description={t('desc')}
            />

            <div className="row justify-content-center m-0">
                <div className="col-md-10">
                    {data.map((item) => (
                        <TradeTestItem key={item.number} {...item} />
                    ))}
                </div>
            </div>

            <section className="mt-5 mb-5">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="header">
                            <h2 className="title">Other</h2>
                            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                        <div className={`row ${s.sectionStyle}`}>
                            <div className="col-md-3 p-3">
                                <span className="title" style={{fontWeight:"600", fontSize:"20px"}}>
                                    {t('Safety')}
                                </span>
                                <p className="subtitle" style={{fontSize:"14px"}}>
                                    {t('SafetyDesc')}
                                </p>
                            </div>
                            <div className="col-md-5" style={{paddingTop:"10px"}}>
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
                            <div className="col-md-4">
                                <div >
                                    <img src="/img/banner/27532.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
                                </div>
                                <div >
                                    <img src="/img/banner/27532.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
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
                            <div className="col-md-4">
                                <div >
                                    <img src="/img/banner/27532.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
                                </div>
                                <div >
                                    <img src="/img/banner/27532.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className={`row ${s.sectionStyle}`}>
                            <div className="col-md-3 p-3">
                                <span className="title" style={{fontWeight:"600", fontSize:"20px"}}>
                                    {t('Emphasis')}
                                </span>
                                <p className="subtitle" style={{fontSize:"14px"}}>
                                    {t('EmphasisDesc')}
                                </p>
                            </div>
                            <div className="col-md-5" style={{paddingTop:"10px"}}>
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
                            <div className="col-md-4">
                                <div >
                                    <img src="/img/banner/27532.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
                                </div>
                                <div >
                                    <img src="/img/banner/27532.jpg" style={{width:"100%", height:"150px", objectFit:"cover",margin:"10px 0",borderRadius:"5px"}} alt="" />
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
