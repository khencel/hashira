"use client"
import Banner from "@/components/Banner"
import BranchLocator from "./branches"
import JobCard from "./card"
import { FaHardHat } from "react-icons/fa";
import { getAllIndustriesFirstRow, getAllIndustriesSecondRow } from "@/data/industries"
import { FaGlobe } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function AboutBranches() {
    const t = useTranslations("industries");
    const getFirstRow = getAllIndustriesFirstRow()
    return (
        <>
            <Banner
                backgroundImage="/img/banner/Industries_header.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                description={t('desc')}
            />

            {/* <BranchLocator /> */}
            <section className="mt-5 mb-5">
                <div className="header">
                    <h2 className="title">{t('our')}</h2>
                    <p className="subtitle">{t('ourDesc')}</p>
                </div>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="row justify-content-center">
                            {
                                getFirstRow.map((item,index) => (
                                    <div className="col-md-3" key={index}>
                                        <JobCard 
                                            image={item.image}
                                            title={t(item.title)}
                                            description={t(item.description)}
                                            icon={item.icon}
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        {/* SECOND ROW */}
                        <div className="row justify-content-center mt-3">
                            {
                                getAllIndustriesSecondRow().map((item,index) => (
                                    <div className="col-md-3" key={index}>
                                        <JobCard
                                            image={item.image}
                                            title={t(item.title)}
                                            description={t(item.description)}
                                            icon={item.icon}
                                        />
                                    </div>
                                ))
                            }
                            

                            {/* sakop 2 columns */}
                        <div className="col-6 mt-4">
                                
                            <div className="d-flex">
                                <div >
                                    <span className="badge rounded-circle p-3" style={{background:"#CC121B",border:"5px solid white"}}>
                                        <FaGlobe style={{fontSize:"25px",color:"white"}} />
                                    </span>
                                </div>
                                <div style={{marginLeft:"20px"}}>
                                    <span className="title" style={{fontSize:"18px",fontWeight:"bold"}}>
                                        {t('map')}
                                    </span>
                                    <p className="subtitle" style={{fontSize:"14px",color:"#555"}}>
                                        {t('explore')}
                                    </p>
                                </div>
                            </div>
                            
                            <div>
                                <img
                                    src="/img/default.png"
                                    alt="Map of Japan"
                                    className="img-fluid rounded-4 shadow-sm"
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}