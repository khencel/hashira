"use client";

import { useEffect, useRef, useState } from "react";
import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import s from "@/styles/achievement.module.css"
import { MdGroups } from "react-icons/md";


export default function Achievements() {
  const t = useTranslations("achievement");
  return (
    <>
        <Banner
            backgroundImage="/DSC03897.jpg"
            title={t('title')}
            subtitle={t('subtitle')}
            description={t('desc')}
        />

        <section className="mt-5 mb-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
                <div className="header">
                    <h2 className="title">{t('section2Title')}</h2>
                    <p style={{color:"#104675",fontWeight:"600"}}>{t('section2Subtitle')}</p>
                </div>
                <div className="row">
                  <div className="col-md-3">
                      <div>
                        <img src="/img/achievement/achievement.JPG" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge bg-success rounded-5 p-1">{t('section2Item1Header')}</span>
                        <div className="row">
                          <div className="col-6"><span className={s.titleCard} style={{color:"#0d6308"}}>2,000</span></div>
                          <div className="col-6"><span className={s.titleSecondary}><br />{t('section2Item1Subheader')}</span></div>
                        </div>
                        <br />
                        <span className={s.titleSecondary}>{t('section2Item1Title')}</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          {t('section2Item1Subtitle')}
                        </p>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="position-relative">
                        <span className={s.cardBadge} style={{backgroundColor:"#0058DF"}}>80%</span>
                        <img src="/img/achievement/0ad2802a-bd23-4d1a-82f1-6d802c69df34.jpg" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge rounded-5 p-1" style={{backgroundColor:"#0D466C"}}>{t('section2Item2Header')}</span>
                        <br />
                        <div className="row">
                          <div className="col-6"><span className={s.titleSecondary}><br/>{t('section2Item2Subheader')}</span></div>
                          <div className="col-6"><span className={`${s.titleCard}`} style={{color:"#0D466C"}}>80</span><span className={s.titleSecondary}>%</span></div>
                        </div>
                        
                        <br />
                        <span className={s.titleSecondary}>{t('section2Item2Title')}</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          {t('section2Item2Subtitle')}
                        </p>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="position-relative">
                        <span className={s.cardBadge} style={{backgroundColor:"#FF6700"}}>90%</span>
                        <img src="/img/achievement/9302cdf1-3444-4db3-b6bc-54184b71f4c7.jpg" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge rounded-5 p-1" style={{backgroundColor:"#FF6700"}} >{t('section2Item3Header')}</span>
                        <br />
                        <div className="row">
                          <div className="col-6"><span className={s.titleSecondary}><br/>{t('section2Item3Subheader')}</span></div>
                          <div className="col-6"><span className={`${s.titleCard}`} style={{color:"#FF6700"}}>90</span><span className={s.titleSecondary} style={{color:"#FF6700"}}>%</span></div>
                        </div>
                        <br />
                        <span className={s.titleSecondary}>{t('section2Item3Title')}</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          {t('section2Item3Subtitle')}
                        </p>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="position-relative">
                        <img src="/img/achievement/achievement3.JPG" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge rounded-5 p-1" style={{backgroundColor:"#6E61C2"}} >{t('section2Item4Header')}</span>
                        <br />
                        <div className="row">
                          <div className="col-6"><span className={s.titleSecondary}><br/>{t('section2Item4Subheader')}</span></div>
                          <div className="col-6"><span className={`${s.titleCard}`} style={{color:"#104675"}}>90</span><span className={s.titleSecondary}>%</span></div>
                        </div>
                        <br />
                        <span className={s.titleSecondary}>{t('section2Item4Title')}</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          {t('section2Item4Subtitle')}
                        </p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </section>


        <section className="mt-5 mb-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
                <div className="header">
                    <h2 className="title">{t('section3Title')}</h2>
                    <p style={{color:"#104675",fontWeight:"600"}}>{t('section3Subtitle')}</p>
                </div>
                {/* <hr
                  className="mx-auto"
                  style={{
                    
                    width: "10%",
                    height: "5px",
                    backgroundColor: "#216DDA",
                    border: 0,
                    textAlign: "center",
                    marginTop: "-20px",
                  }}
                /> */}

                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-5">
                          <div className={s.cardLeft}>
                            <div className="text-center">
                              <span className="badge p-1 rounded-5" style={{backgroundColor:"#71757A",width:"auto"}}>{t('leftTitle')}</span>
                              <br />
                              <span className={s.titleSecondary}>{t('leftDesc')}</span>
                              <br />
                              <span className={s.titleCard} style={{color:"#104675",fontWeight:"500"}}>50</span><span style={{color:"#104675",fontWeight:"600"}}>{t('leftNumber')}</span>
                              <br />
                              <span style={{color:"#104675",fontWeight:"600"}}>{t('leftUnderNumber')}</span>
                              
                              <img src="/img/achievement/peopleHouse.png" className="img-fluid" alt="" />
                            </div>
                          </div>
                          
                        </div>
                        <div className="col-md-1">
                          <div className="position-relative">
                            <img src="/img/achievement/arrowRight.png" className={s.imgArrow} style={{height:"100px"}} alt="" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className={s.cardRight}>
                            <div className="text-center">
                              <span className={`${s.badge} p-1 badge rounded-5`}>{t('rightTitle')}</span>
                              <br />
                              <span className={s.titleSecondary}>{t('rightDesc')}</span>
                              <br />
                              <span style={{color:"#007D59",fontWeight:"600"}}>{t('rightNumber')}</span><span className={s.titleCard} style={{color:"#007D59",fontWeight:"500"}}>500</span><span style={{color:"#007D59",fontWeight:"600"}}>{t('rightNumber1')}</span>
                              <br />
                              <span style={{color:"#007D59",fontWeight:"600"}}>{t('rightUnderNumber')}</span>
                              
                              <img src="/img/achievement/group.png" className="img-fluid" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                           <span style={{color:"#007D59",fontWeight:"700",fontSize:"20px"}}>{t('rightPartTitle')}</span>
                        </div>
                        <div className="row">
                          <div className="col-md-4 p-1">
                            <img src="/img/achievement/achievement4.jpg" className={s.imgStyleV1} alt="" />
                            <div className={s.imgTitle}>{t('rightPartTitleItem1')}</div>
                          </div>
                          <div className="col-md-4 p-1">
                            <img src="/img/achievement/achievement5.jpg" className={s.imgStyleV1} alt="" />
                            <div className={s.imgTitle}>{t('rightPartTitleItem2')}</div>
                          </div>
                          <div className="col-md-4 p-1">
                            <img src="/img/achievement/achievement6.jpg" className={s.imgStyleV1} alt="" />
                            <div className={s.imgTitle}>{t('rightPartTitleItem3')}</div>
                          </div>
                        </div>
                        <span style={{color:"#104675",fontWeight:"600",fontSize:"14px"}}>{t('rightPartBootomText')}</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5">
                      <div className={s.cardbottom}>
                        <div className="p-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div>
                                <span className="badge p-1 rounded-5" style={{backgroundColor:"#145AC7",width:"100px"}}>{t('bottomTitle')}</span>
                              </div>
                              <div>
                                <span className={s.titleSecondary}>{t('bottomDesc')}</span>
                              </div>
                              <div>
                                <span className={s.titleCardBottom} style={{color:"#104675",fontWeight:"500",fontSize:"100px"}}>419</span><span style={{color:"#104675",fontWeight:"600"}}>{t('bottomNumber')}</span>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <img src="/img/achievement/plane.png" className="img-fluid" alt="" />
                            </div>
                          </div>
                          
                          <div className="d-flex">
                            <div>
                              <span className="badge p-2 rounded-5" style={{backgroundColor:"#145AC7"}}><MdGroups style={{fontSize:"30px"}} /></span>
                              
                            </div>
                            <div className="ms-3 pt-2">
                              <span style={{color:"#104675",fontWeight:"600",fontSize:"14px"}}>{t('bottomUnderNumber')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className={s.cardbottomRight}>
                        <div className="">

                          <div className="">
                              <div className="d-flex flex-column flex-md-row align-items-center">
                                <div className="flex-grow-1 pe-md-4 text-center text-md-start">
                                  <span
                                    style={{
                                      color: "#104675",
                                      fontWeight: "600",
                                      fontSize: "18px",
                                    }}
                                  >
                                    {t('bottomRightText')}
                                  </span>

                                  <br />

                                  <span
                                    style={{
                                      color: "#104675",
                                      fontWeight: "600",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {t('bottomRightText1')}
                                  </span>
                                </div>

                                <div className="ms-md-4 mt-4 mt-md-0">
                                  <span
                                    className="badge d-inline-flex align-items-center justify-content-center"
                                    style={{
                                      backgroundColor: "#145AC7",
                                      width: "180px",
                                      height: "180px",
                                      borderRadius: "50%",
                                    }}
                                  >
                                    <span style={{ fontSize: "20px", textAlign: "center" }}>
                                      {t('bottomRightCircle')}
                                      <br />
                                      {t('bottomRightCircle1')}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="row justify-content-center mt-5">
                                <div className="col">
                                  <div className="text-center mt-5">
                                    <div
                                      style={{
                                        width: "80px",
                                        height: "4px",
                                        background: "#145AC7",
                                        margin: "0 auto 20px",
                                        borderRadius: "10px",
                                      }}
                                    />

                                    <span

                                    className={s.titleButtom}
                                      style={{
                                        color: "#104675",
                                        fontWeight: "800",
                                        fontSize: "28px",
                                        lineHeight: "1.6",
                                      }}
                                    >
                                      {t('bottomRightFooter')}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
            </div>
          </div>
        </section>
      
    </>
  );
}