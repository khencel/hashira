"use client";

import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import YouTube from "react-youtube";
import styles from "@/styles/School.module.css"
import { TfiVideoClapper } from "react-icons/tfi";
import CardItem from "./card";
import getData from "./data";


export default function SchoolInformation() {
  const t = useTranslations("whatIsHashira");
  const items = getData()
  return (
    <>
      <Banner
        backgroundImage="/Angono Branch 4.jpg"
        title={t("title")}
        subtitle="学校案内"
        description="当校の校舎をご覧ください"
      />

      <section className={`${styles.section} ${styles.banner}`}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="header">
                <h2 className="" style={{color:"white"}}>柱日本語学校紹介動画</h2>
            </div>
              <YouTube
                className={styles.youtubeStyle}
                videoId="WaSmVwttRNk"
                opts={{
                  
                  playerVars: {
                    autoplay: 1,
                    controls: 1,
                    mute: 1,
                    loop: 1,
                    playlist: "WaSmVwttRNk",
                  },
                }}
              />
          </div>
        </div>
          
      </section>

      <section className="mb-5 mt-5">
        <div className="header">
          <h2 className="title">柱日本語学校 施設紹介</h2>
          <p className="subtitle">
            学びやすさと暮らしやすさを兼ね備えた環境で、
            日本で活躍するための第一歩をサポートします。
          </p>
        </div>
        <div className="row m-0 justify-content-center">
          <div className="col-md-10">
            
                <div className={styles.cardItemList}>
                    <div className="row justify-content-center">
                      {
                        items.map((item,index) => (
                          <div className="col-md-4 mb-3" key={index}>
                            <CardItem 
                              image={item.image}
                              title={item.title}
                              description={item.description}
                              number={item.number}
                              icon={item.icon}
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
  );
}