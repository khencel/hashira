"use client"
import Banner from "@/components/Banner";
import ImageStyle from "@/components/ImageStyle";
import CustomHR from "@/components/CustomHR";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import s from "./style.module.css"
import MissionVision from "@/components/MissionVision";
import { useTranslations } from "next-intl";
import { useEffect, useRef  } from "react";
import { customEvent } from "@/lib/metaPixel";

export default function CorporateIdentity() {
    const t = useTranslations("corporate");
    const hasTracked = useRef(false);

    useEffect(() => {
      if (hasTracked.current) return;
      hasTracked.current = true;
      customEvent("CorporateIdentityPageView");
    }, []);
    return (
      <>
        <Banner
          backgroundImage="/img/banner/DSC02891.jpg"
          title={t('about')}
          subtitle={t('corporate')}
          description={t('corporateDesc')}
        />

        

        <section className="mb-5">
            <div className="header">
              <h2 className="title">{t('board')}</h2>
              {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
            </div>

            

            <div className="row m-0 justify-content-center">
              

              <div className="col-md-5 p-3">
                  <div className="row p-3">
                    <div className="col-md-6"><ImageStyle image="/img/identity/jolo.jpg"/></div>
                    
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="position-relative">
                        <h5 className="title" style={{fontSize:"24px"}} >{t('jose')}</h5>
                        <small>
                            <strong>{t('president')}</strong>
                        </small>
                        {/* <div className={s.dotPattern}></div> */}
                        <p className="mt-3 cardText">
                          {t('presidentDesc')}
                        </p>
                      </div>
                      
                    </div>
                </div>
              </div>

              <div className="col-md-5 p-3">
                <div className="row p-3">
                  <div className="col-md-6"><ImageStyle image="/nobuaki.png"/></div>
                  <div className="col-md-6 d-flex align-items-center">
                      <div className="position-relative">
                        <h5 className="title" style={{fontSize:"24px"}} >{t('kawamichi')} </h5>
                        <small>
                            <strong>{t('vice')}</strong>
                        </small>
                        {/* <div className={s.dotPattern}></div> */}
                        <p className="mt-3 cardText">
                            {t('viceDesc')}
                        </p>
                      </div>
                      
                    </div>
                </div>
                  
              </div>
            </div>


            <div className="row m-0 mt-5 justify-content-center">
              <div className="col">
                <CustomHR height="10px" />
              </div>
            </div>
            
        </section>

        

        <section className="mt-5 ">
              <MissionVision />
        </section>


        <section>
          <div className="row m-0 justify-content-center">
            <div className="col-md-10 p-4">
              <div className="row">
                <div className="col-md-4">
                  <span className="title" style={{fontSize:"18px", fontWeight:"600"}}>{t('our')}</span>
                  <p className="subtitle">
                      {t('ourDesc')}
                  </p>
                </div>
                <div className={`${s.rightSlideDiv} col-md-8`} style={{backgroundImage:`url(/grop.jpg)`}}>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10 p-4">
              <div className="row">
                <div className={`${s.leftSlideDiv} col-md-8`} style={{backgroundImage:`url(/img/DSC02704.jpg)`}}>
                  
                </div>
                <div className="col-md-4">
                  <span className="title" style={{fontSize:"18px", fontWeight:"600"}}>{t('ourStudent')}</span>
                  <p className="subtitle">
                      {t('ourStudentDesc')}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="mt-md-5 mt-0 mb-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10 p-4">
              <div className="header">
                <h2 className="title">{t('message')}</h2>
                {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              </div>
              <div className="row">
                <div className="col-md-6 order-2 order-md-1">
                  <div className={`${s.presMessage} position-relative`}>
                      <div>
                        <p className={`${s.longParagraph}`}>
                          {t('messageDesc')}
                        </p>
                      </div>
                      <div
                        // className={s.signature}
                        // style={{
                        //     position:"absolute",
                        //     bottom:"5%",
                        //     left:"0%"
                        //   }}
                        >
                        <div>
                          <img src="/sign.png"  style={{width:"100px"}} alt="" />
                        </div>
                        <span>Jose Lorenzo Escueta Beech</span>
                        <br />
                        <span>President & CEO</span>
                      </div>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
                  <div className={s.presidentImageWrapper}>
                    <div className={s.blueBg}></div>

                    <img
                      src="/img/identity/joelo.png"
                      className={s.presidentImage}
                      alt=""
                    />

                    <div className={s.dotPattern}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </>
    );
}