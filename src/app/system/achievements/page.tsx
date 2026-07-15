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
                    <h2 className="title">数字で見るPLACEWELL、柱日本語学校の実績</h2>
                    <p style={{color:"#104675",fontWeight:"600"}}>確かな実績とデータが、私たちの信頼の証です。</p>
                </div>
                <div className="row">
                  <div className="col-md-3">
                      <div>
                        <img src="/img/achievement/achievement.JPG" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge bg-success rounded-5 p-1">送り出し実績</span>
                        <div className="row">
                          <div className="col-6"><span className={s.titleCard} style={{color:"#0d6308"}}>2,000</span></div>
                          <div className="col-6"><span className={s.titleSecondary}><br />名以上</span></div>
                        </div>
                        <br />
                        <span className={s.titleSecondary}>日本全国で活躍中</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          2020年の設立以来、2,000名を超える人材を日本全国の企業へ送込出しています。
                        </p>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="position-relative">
                        <span className={s.cardBadge} style={{backgroundColor:"#0058DF"}}>80%</span>
                        <img src="/img/achievement/0ad2802a-bd23-4d1a-82f1-6d802c69df34.jpg" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge rounded-5 p-1" style={{backgroundColor:"#0D466C"}}>JFT-Basic</span>
                        <br />
                        <div className="row">
                          <div className="col-6"><span className={s.titleSecondary}><br/>合格率</span></div>
                          <div className="col-6"><span className={`${s.titleCard}`} style={{color:"#0D466C"}}>80</span><span className={s.titleSecondary}>%</span></div>
                        </div>
                        
                        <br />
                        <span className={s.titleSecondary}>日本全国で活躍中</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          4か月間の集中教育プログラムにより、多くの学生が初回受験で合格を達成しています。
                        </p>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="position-relative">
                        <span className={s.cardBadge} style={{backgroundColor:"#FF6700"}}>90%</span>
                        <img src="/img/achievement/9302cdf1-3444-4db3-b6bc-54184b71f4c7.jpg" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge rounded-5 p-1" style={{backgroundColor:"#FF6700"}} >JFT-Basic</span>
                        <br />
                        <div className="row">
                          <div className="col-6"><span className={s.titleSecondary}><br/>合格率</span></div>
                          <div className="col-6"><span className={`${s.titleCard}`} style={{color:"#FF6700"}}>90</span><span className={s.titleSecondary} style={{color:"#FF6700"}}>%</span></div>
                        </div>
                        <br />
                        <span className={s.titleSecondary}>2回目の受験</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          弱点分析と個別指導を通じて、再受験者の高い合格率を実現しています。
                        </p>
                      </div>
                  </div>

                  <div className="col-md-3">
                      <div className="position-relative">
                        <img src="/img/achievement/achievement3.JPG" className={s.imgStyle} alt="" />
                      </div>
                      <div className="p-2">
                        <span className="badge rounded-5 p-1" style={{backgroundColor:"#6E61C2"}} >PROMETRIC</span>
                        <br />
                        <div className="row">
                          <div className="col-6"><span className={s.titleSecondary}><br/>合格率</span></div>
                          <div className="col-6"><span className={`${s.titleCard}`} style={{color:"#104675"}}>90</span><span className={s.titleSecondary}>%</span></div>
                        </div>
                        <br />
                        <span className={s.titleSecondary}>初回受験者</span>
                        <br />
                        <br />
                        <p className={s.titleSecondary}>
                          特定技能試験において、初回受験者でも高い合格実績を維持しています。
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
                    <h2 className="title">成長し続ける柱日本語学校の実績</h2>
                    <p style={{color:"#104675",fontWeight:"600"}}>コロナ禍からの挑戦と成長。より多くの人材を日本へ送り出しています。</p>
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
                              <span className="badge p-1 rounded-5" style={{backgroundColor:"#71757A",width:"100px"}}>コロナの時代</span>
                              <br />
                              <span className={s.titleSecondary}>1つの学校で</span>
                              <br />
                              <span className={s.titleCard} style={{color:"#104675",fontWeight:"500"}}>50</span><span style={{color:"#104675",fontWeight:"600"}}>人</span>
                              <br />
                              <span style={{color:"#104675",fontWeight:"600"}}>のみ</span>
                              
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
                              <span className={`${s.badge} p-1 badge rounded-5`}>現在</span>
                              <br />
                              <span className={s.titleSecondary}>3つの学校で</span>
                              <br />
                              <span style={{color:"#007D59",fontWeight:"600"}}>約</span><span className={s.titleCard} style={{color:"#007D59",fontWeight:"500"}}>500</span><span style={{color:"#007D59",fontWeight:"600"}}>人</span>
                              <br />
                              <span style={{color:"#007D59",fontWeight:"600"}}>にまで拡大!</span>
                              
                              <img src="/img/achievement/group.png" className="img-fluid" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                           <span style={{color:"#007D59",fontWeight:"700",fontSize:"20px"}}>3つの学校体制に!</span>
                        </div>
                        <div className="row">
                          <div className="col-md-4 p-1">
                            <img src="/img/achievement/achievement4.jpg" className={s.imgStyleV1} alt="" />
                            <div className={s.imgTitle}>アンゴノ校</div>
                          </div>
                          <div className="col-md-4 p-1">
                            <img src="/img/achievement/achievement5.jpg" className={s.imgStyleV1} alt="" />
                            <div className={s.imgTitle}>ダスマ校</div>
                          </div>
                          <div className="col-md-4 p-1">
                            <img src="/img/achievement/achievement6.jpg" className={s.imgStyleV1} alt="" />
                            <div className={s.imgTitle}>アンティポロ校</div>
                          </div>
                        </div>
                        <span style={{color:"#104675",fontWeight:"600",fontSize:"14px"}}>教育環境の充実と体制強化により、より多くの優秀な人材を育成し、日本企業の皆さまへ送り出しています。</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-5">
                      <div className={s.cardbottom}>
                        <div className="p-3">
                          <div className="row">
                            <div className="col-md-6">
                              <div>
                                <span className="badge p-1 rounded-5" style={{backgroundColor:"#145AC7",width:"100px"}}>2025年実績</span>
                              </div>
                              <div>
                                <span className={s.titleSecondary}>日本へ送り出した人数</span>
                              </div>
                              <div>
                                <span className={s.titleCardBottom} style={{color:"#104675",fontWeight:"500",fontSize:"100px"}}>419</span><span style={{color:"#104675",fontWeight:"600"}}>人</span>
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
                              <span style={{color:"#104675",fontWeight:"600",fontSize:"14px"}}>たくさんの夢と希望を日本へ!</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className={s.cardbottomRight}>
                        <div className="">

                          <div className="">
                              <div className="d-flex align-items-center">
                                <div className="flex-grow-1 pe-4">
                                  <span
                                    style={{
                                      color: "#104675",
                                      fontWeight: "600",
                                      fontSize: "18px",
                                    }}
                                  >
                                    そして今も、入国を待つ仲間たちが多数控えています。
                                  </span>

                                  <br />

                                  <span
                                    style={{
                                      color: "#104675",
                                      fontWeight: "600",
                                      fontSize: "14px",
                                    }}
                                  >
                                    これからも、さらに多くの仲間たちが日本で新たな一歩を踏み出します。
                                  </span>
                                </div>

                                <div className="ms-4">
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
                                      さらなる
                                      <br />
                                      成長へ!
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
                                      style={{
                                        color: "#104675",
                                        fontWeight: "800",
                                        fontSize: "28px",
                                        lineHeight: "1.6",
                                      }}
                                    >
                                      PLACEWELL と HASHIRA SKILLS は、これからも人と企業、未来をつなぐ架け橋であり続けます。
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