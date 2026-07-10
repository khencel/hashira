"use client"
import Banner from "@/components/Banner";
import s from "@/styles/hashira.module.css"
import { useTranslations } from "next-intl";
import Card from "./card";
import GetAllData from "./data";

export default function About() {
    const t = useTranslations("whatIsHashira");
    const items = GetAllData()
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
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <span
                    className="title"
                    style={{ fontSize: "24px", fontWeight: "600" }}
                  >
                    {t("hashira")}
                  </span>

                  <p className="subtitle longParagraph mt-3">
                    {t("hashiraDesc")}
                  </p>
                </div>

                <div className="col-md-6 text-center">
                  <img
                    src="/logo3.jpg"
                    style={{ width: "70%" }}
                    alt=""
                  />
                </div>
                {/* <div className="col-md-6 text-center">
                  <img src="/logo3.jpg" style={{width:"70%"}} alt="" />
                </div> */}
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
              <div className="row">
                  {
                    items.map((item,index) => (
                      <div className="col-md-4 mt-5" key={index}>
                        <Card 
                          img={item.image} 
                          title={item.title} 
                          desc={item.desc}
                        />
                      </div>
                    ))
                  }
                  
              </div>
            </div>
          </div>
        </section>
        
      </>
    );
}