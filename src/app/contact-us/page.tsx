"use client"

import Banner from "@/components/Banner"
import s from "@/styles/contactUs.module.css"
import { useTranslations } from "next-intl";


export default function ContactUs(){
    const t = useTranslations("infoPartnership");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/124009.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                // description={t('desc')}
                customFontSize={true}
            />

            <section>
                <div className="row justify-content-center m-0 mb-5">
                    <div className="col-md-10">
                        <div className="header">
                        <h2 className="title">{t('header')}</h2>
                            <p className="subtitle">{t('subHeader')}</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 border-end">
                                <div className={`${s.logoCont} w-100 d-flex justify-content-center align-items-center`}>
                                    <img src="/logoPlacewell.png" style={{width:"60%"}} alt="" />
                                </div>
                                <div className="w-100 mt-2 text-center">
                                    <span className={s.logoText}>{t('placewellSub')}</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${s.logoCont} w-100 d-flex justify-content-center align-items-center`}>
                                    <img src="/sky.png" style={{width:"50%"}} alt="" />
                                </div>
                                <div className="w-100 mt-2 text-center">
                                    <span className={s.logoText}>{t('skySub')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 justify-content-center">
                            <div className="col-md-10">
                                <div className={`${s.bottomCard} d-flex`} >
                                    <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                        <img src="/star.png" className={s.iconStyle} alt="" />
                                    </div>
                                    <div className="d-flex align-items-center ms-3" style={{width:"85%"}}>
                                        <span style={{fontWeight:"600", color:"#104675"}}>
                                            {t('hashira')}
                                        </span>
                                    </div>
                                </div>

                                <div className={`${s.bottomCard} d-flex mt-4`} >
                                    <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                        <img src="/users.png" className={s.iconStyle} alt="" />
                                    </div>
                                    <div className="d-flex align-items-center ms-3" style={{width:"85%"}}>
                                        <span style={{fontWeight:"600", color:"#104675"}}>
                                            {t('afterHashira')}
                                        </span>
                                    </div>
                                </div>

                                <div className={`${s.bottomCard} d-flex mt-4`} >
                                    <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                        <img src="/message.png" className={s.iconStyle} alt="" />
                                    </div>
                                    <div className="d-flex align-items-center ms-3" style={{width:"85%"}}>
                                        <span style={{fontWeight:"600", color:"#104675"}}>
                                            {t('line')}
                                        </span>
                                    </div>
                                </div>


                                <div className={`${s.bottomCard} mt-4`}>
                                    <div className="row">
                                        <div className="col border-end">
                                            <div className="d-flex">
                                                <div style={{width:"70%"}}>
                                                    <span style={{fontWeight:"600",color:"#A20E15"}}>
                                                        {t('hashiraProfile')}
                                                    </span>
                                                </div>
                                                <div className=" text-end" style={{width:"30%"}}>
                                                    <button
                                                    onClick={()=> window.open("/docs/Hashira Skills 概要書.pdf","_blank")}
                                                    className="btn"
                                                    style={{
                                                        width:"100%",
                                                        background:"#104675",
                                                        color:"white"
                                                    }}>{t('download')}</button>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className="col">
                                            <div className="d-flex">
                                                <div style={{width:"70%"}}>
                                                    <span style={{fontWeight:"600",color:"#A20E15"}}>
                                                        {t('placewellProfile')}
                                                    </span>
                                                </div>
                                                <div className=" text-end" style={{width:"30%"}}>
                                                    <button
                                                    onClick={() => window.open("/docs/PISCO概要書.pdf","_blank")}
                                                    className="btn"
                                                    style={{
                                                        width:"100%",
                                                        background:"#104675",
                                                        color:"white"
                                                    }}>{t('download')}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <hr className="mt-5" style={{height:"3px", background:"#A20E15"}} />

                                <div className="row">
                                    <div className="col-md-8 ">
                                        <div className={`d-flex mt-4`} >
                                            <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                                <img src="/envelop.png" className={s.iconStyleBottom} alt="" />
                                            </div>
                                            <div className="d-flex flex-column  ms-3" style={{width:"85%"}}>
                                                <span style={{fontWeight:"700", color:"#104675", fontSize:"20px"}}>
                                                    {t('email')}
                                                </span>
                                                <div>
                                                    angono@hashiraskils.com <br />
                                                    japan@placewellinternational.com <br />
                                                    marketing@skyinnovationph.com 
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`d-flex mt-4`} >
                                            <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                                <img src="/location.png" className={s.iconStyleBottom} alt="" />
                                            </div>
                                            <div className="d-flex flex-column  ms-3" style={{width:"85%"}}>
                                                <span style={{fontWeight:"700", color:"#104675", fontSize:"20px"}}>
                                                    {t('address')}
                                                </span>
                                                <div>
                                                    Blk. 21 Lot 5 DOMSA, Mahabang Parang,
                                                    <br />
                                                    Angono, 1930 Rizal, Philippines 
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`d-flex mt-4`} >
                                            <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                                <img src="/global.png" className={s.iconStyleBottom} alt="" />
                                            </div>
                                            <div className="d-flex flex-column  ms-3" style={{width:"85%"}}>
                                                <span style={{fontWeight:"700", color:"#104675", fontSize:"20px"}}>
                                                    {t('website')}
                                                </span>
                                                <div>
                                                    hashiraskills.net
                                                    <br />
                                                    placewellinternational.net
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 position-relative">
                                        <div className="text-center position-absolute bottom-0 start-50 translate-middle-x">
                                            <div>
                                                <img src="/line.png" style={{width:"150px"}} alt="" />
                                            </div>
                                            <div>
                                                <img src="/qr.png" style={{width:"170px"}} alt="" />
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
    )
}