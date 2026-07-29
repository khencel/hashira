"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import s from "../components/styles/swiper.module.css"
import { Autoplay,Navigation, Pagination } from "swiper/modules";
import YouTube from "react-youtube";
import { CSSProperties } from "react";
import CustomHR from "@/components/CustomHR";
import Rolling from "@/components/Rolling";
import { getRollingData, getWhyHireFilipino, getAllClient, ShowGallery } from "@/data/homepage";
import WhyPlacewell from "@/components/WhyPlacewell";
import WhyHire from "@/components/WhyHire";
import { useTranslations } from "next-intl";
import  HashiraHeroSection from "./slide1"
import HashiraHeroSection1 from "./slide2"
import HashiraHeroSection2 from "./slide3"
import HashiraHeroSection4 from "./slide4";
import { FaYoutube } from "react-icons/fa";




export default function Home() {
 
  const t = useTranslations("home");
  const rollingData = getRollingData();
  const whyHireFilipino = getWhyHireFilipino();
  const allClient = getAllClient();
  const galleryList = ShowGallery()
  
  const styles: { section: CSSProperties; header: CSSProperties; title: CSSProperties; subtitle: CSSProperties; videoCard: CSSProperties; videoWrapper: CSSProperties; youtube: CSSProperties; gradientBg: CSSProperties } = {
  section: {
    padding: "60px 20px",
    background: "#ffffff",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "60px",
    position: "relative",
    overflow: "hidden",
    zIndex: 0,
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
    color: "black",
  },

  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#104675",
  },

  subtitle: {
    color: "black",
  },

  videoCard: {
    width: "100%",
    maxWidth: "80%",
    height: "750px",
    padding: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    zIndex: 2,
    display: "flex",
    background: "white",
  },

  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
    overflow: "hidden",
    borderRadius: "12px",
  },
  youtube: {
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    overflow: "hidden",
    flex: 1,
  },
  gradientBg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "60%",

    background: "linear-gradient(to bottom, transparent, #104675)",
    zIndex: 0,
    pointerEvents: "none",
  },

  
};
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 12000 }}
        speed={800}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <HashiraHeroSection />
          {/* <div className={s.hero}>
              <div className={s.content}>
                <h1 className={s.bannerTitle}>{t('build')}</h1>
                <p>{t('trusted')}</p>
                
                <div className={s.buttons}>
                  <button className={s.btnprimary}>{t('contact')}</button>
                  
                </div>
              </div>
          </div> */}

        </SwiperSlide>

        <SwiperSlide>
          <HashiraHeroSection1 />
        </SwiperSlide>

        <SwiperSlide>
          <HashiraHeroSection2 />
        </SwiperSlide>

        <SwiperSlide>
          <HashiraHeroSection4 />
        </SwiperSlide>
        
      </Swiper>
      <section style={styles.section}>
        <div style={styles.gradientBg}></div>
        <div style={styles.header} className=" w-100 position-relative">
          <h2 style={styles.title}>{t('feature')}</h2>
          <p style={styles.subtitle}>
            {/* Watch our latest highlight and updates */}
          </p>

          <div className="position-absolute"  style={{top:"0px",right:"0px",height:"100%",width:"30%"}}>
             <a href="https://www.youtube.com/channel/UCE9mVgF3EqaZefDfjo0SQCA"
                target="_blank"
                className="youtube-subscribe-btn">

                  <span className="subscribe-text">
                      Hashira Skills
                  </span>

                  <span className="subscribe-icon">
                      <FaYoutube />
                  </span>

              </a>
          </div>

          
        </div>

        
        <div style={styles.videoCard} className={s.videoCard}>
            <YouTube
              videoId="aAOoxl6C0yU"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  controls: 1,
                  mute: 1,
                  loop: 1,
                  playlist: "aAOoxl6C0yU",
                },
              }}
              style={styles.youtube}
            />
        </div>
        <div style={{width:"80%", zIndex: 1}}>
          <CustomHR />
        </div>
        
        
    </section>
    <WhyHire />
    <WhyPlacewell />
    

    <section className="mt-5 mb-5">
      <div style={styles.header}>
          <h2 style={styles.title}>{t('gallery')}</h2>
          <p style={styles.subtitle}>
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
          </p>
        </div>
        
        <div className="row justify-content-center m-0">
          <div className="col-md-10">
              <Rolling data={galleryList} isLoop={true} isAutoplay={true}  />
              
              <CustomHR />
          </div>
        </div>
    </section>


    <section className="mt-5 mb-5">
      <div style={styles.header}>
          <h2 style={styles.title}>{t('ourClient')}</h2>
          <p style={styles.subtitle}>
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
          </p>
        </div>
        
        <div className="row justify-content-center m-0">
          <div className="col-md-10">
              <Rolling data={allClient} perSlide={5} isLoop={true} isAutoplay={true} isContain={false} />
              
              <CustomHR />
          </div>
        </div>
    </section>
     
    </>
    
  );
}