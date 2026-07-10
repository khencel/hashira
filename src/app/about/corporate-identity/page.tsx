"use client"
import Banner from "@/components/Banner";
import ImageStyle from "@/components/ImageStyle";
import CustomHR from "@/components/CustomHR";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import s from "./style.module.css"
import MissionVision from "@/components/MissionVision";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("corporate");
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

            

            <div className="row m-0 mt-5 pt-5 justify-content-center">
              

              <div className="col-md-5 p-3">
                  <div className="row">
                    <div className="col"><ImageStyle image="/img/identity/jolo.jpg"/></div>
                    
                    <div className="col d-flex align-items-center">
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
                <div className="row">
                  <div className="col"><ImageStyle image="/img/identity/kuwamichi.jpg"/></div>
                  <div className="col d-flex align-items-center">
                      <div className="position-relative">
                        <h5 className="title" style={{fontSize:"24px"}} >{t('kawamichi')} </h5>
                        <small>
                            <strong>{t('vice')}</strong>
                        </small>
                        {/* <div className={s.dotPattern}></div> */}
                        <p className="mt-3 cardText">
                            川道 信晃
                            RWグループ 代表

                            19歳の頃より外国人材受入事業に携わり、協同組合ビジネスサプライ愛知の設立メンバーとして事業の立ち上げに参画。以来20年以上にわたり、技能実習制度をはじめとする外国人材受入事業に従事してきました。

                            現在はRWグループ代表として、外国人材紹介事業、日本語教育事業および各種支援事業を統括。長年培った経験と国内外のネットワークを活かし、外国人材と受入企業双方を支援しています。

                            外国人材の育成、日本語教育、生活支援、定着支援を通じて、日本と海外をつなぐ架け橋として国際人材交流の発展に取り組んでいます。
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
            <div className="col-md-10">
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
            <div className="col-md-10">
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

        <section className="mt-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
              <div className="header">
                <h2 className="title">{t('message')}</h2>
                {/* <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className={`${s.longParagraph}`}>
                    {t('messageDesc')}
                  </p>
                  
                </div>

                <div className="col-md-6">
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
        {/* <section>
          <div className={s.sectionWrapper}>
            <div className="header">
              <h2 className="title">Company History</h2>
              <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={`${s.historyCont} row justify-content-center position-relative m-0 mb-5`}>
              <div className="col-md-11">

                <hr className={s.customLine} />
                <Swiper
                spaceBetween={20}
                // slidesPerView={4}
                loop={false}
                // modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                speed={800}
                breakpoints={{
                  0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  },
                  576: {
                  slidesPerView: 1.2, // may konting peek
                  },
                  768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                  },
                  992: {
                  slidesPerView:4,
                  spaceBetween: 20,
                  },
              }}
              >
                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                     
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2022</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>
                
              </Swiper>
              </div>
            </div>
            </div>
            <div className="row m-0 justify-content-center">
              <div className="col">
                <CustomHR height="10px" />
              </div>
            </div>
        </section> */}
      </>
    );
}