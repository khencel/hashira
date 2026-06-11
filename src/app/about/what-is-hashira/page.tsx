"use client"
import Banner from "@/components/Banner";
import s from "@/styles/hashira.module.css"
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("whatIsHashira");
    return (
      <>
        <Banner
            backgroundImage="/img/banner/144829.jpg"
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

              <div className="position-relative">
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
              </div>

              <div className="position-relative mt-5">
                <div className="row">
                  <div className={`col-md-8 ${s.heroDescriptionV2}`} >
                    <div className="dotPattern"></div>
                    <span className="title">{t('our')}</span>
                    
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col-md-6">

                  </div>
                  <div className={`col-md-6 p-0 text-end ${s.hero}`}>
                    <img src="/img/methodology.jpg" style={{width:"60%"}} alt="" />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </section>
        
      </>
    );
}