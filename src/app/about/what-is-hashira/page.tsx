"use client"
import Banner from "@/components/Banner";
import s from "@/styles/hashira.module.css"
import { useTranslations } from "next-intl";
import Card from "./card";

export default function About() {
    const t = useTranslations("whatIsHashira");
    return (
      <>
        <Banner
            backgroundImage="/whatHashira.png"
            title={t('title')}
            subtitle={t('subtitle')}
            description={t('desc')}
        />

        <section className="mt-5 mb-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
              
              <div className="row">
                <div className="col-md-6">
                  <span className="title" style={{fontSize:"20px",fontWeight:"600"}}>{t('hashira')}</span>
                  
                  <p className="subtitle longParagraph mt-3">
                    {t('hashiraDesc')}
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img src="/logo3.jpg" style={{width:"70%"}} alt="" />
                </div>
              </div>

              {/* <div className="position-relative">
                <div className="dotPattern" style={{top:"-70px"}}></div>
                <div className="row">
                  <div className={`col-md-8 ${s.heroDescription}`} >
                    
                    <span className="title">{t('what')}</span>
                    {t('whatDesc')}
                  </div>
                </div>
                <div className="row">
                  <div className={`col-md-6 p-0 ${s.hero}`}>
                    <img src="/img/identity/joelo.png" style={{width:"60%"}} alt="" />
                  </div>
                  <div className="col-md-6">

                  </div>
                </div>
              </div> */}
              {/* <div className="header mt-5">
                  <h2 className="title">Lorem Ipsum</h2>
                  <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sunt minus quis deleniti sit, perspiciatis aliquid nesciunt facilis impedit nobis eos, quam ut veritatis repellendus perferendis neque animi mollitia quae!</p>
              </div> */}
              <hr />
              <div className="row mt-5">
                  <div className="col-md-4">
                    <Card 
                      img="/img/hashira/hashira1.jpg" 
                      title="日本文化" 
                      desc="日本の文化・習慣 日本での生活マナー 季節行事や伝統文化"
                    />
                  </div>
                  <div className="col-md-4">
                    <Card 
                      img="/img/hashira/hashira2.jpg" 
                      title="日本語コミュニケーション" 
                      desc="日常会話 職場での会話 敬語・報連相・接客表現"
                    />
                  </div>
                  <div className="col-md-4">
                    <Card 
                      img="/img/hashira/hashira3.jpg" 
                      title="日本人の価値観" 
                      desc="日本人の考え方 働く姿勢・責任感 協調性・礼儀・時間意識"
                    />
                  </div>
              </div>
              

              
            </div>
          </div>
        </section>
        
      </>
    );
}