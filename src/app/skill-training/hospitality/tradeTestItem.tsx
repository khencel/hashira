"use client"

import YouTube from "react-youtube";
import s from "@/styles/tradeTest.module.css";
import { useTranslations } from "next-intl";
interface TradeTestItemProps {
    number: number;
    title: string;
    description: string;
    videoId: string;
    image1: string;
    image2: string;
}

export default function TradeTestItem({ number, title, description, videoId, image1, image2 }: TradeTestItemProps){
    const t = useTranslations("hospitality");
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <div className="d-flex">
                        <div style={{width:"15%"}}>
                            <span style={{fontSize:"14px",background:"#CFA711"}} className="badge p-2">{number}</span>
                        </div>
                        <div style={{width:"85%"}}>
                            <div>
                                <span className="title" style={{fontSize:"20px",fontWeight:"600"}}>{t(title)}</span>
                                <p className="subtitle" style={{fontSize:"14px"}}>
                                    {t(description)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 p-2">
                    <YouTube
                        videoId={videoId}
                        opts={{
                            width: "100%",
                            height: "300px",
                            playerVars: {
                            autoplay: 0,
                            controls: 1,
                            mute: 1,
                            loop: 1,
                            playlist: videoId,
                            },
                        }}
                    />
                   
                </div>
                <div className="col-md-3 p-2">
                    <img src={image1} className={s.imageStyle} alt="" />
                </div>
                <div className="col-md-3 p-2">
                    <img src={image2} className={s.imageStyle} alt="" />
                </div>
            </div>
        </>
    )
}