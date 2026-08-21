"use client"

import Banner from "@/components/Banner"
import s from "@/styles/contactUs.module.css"
import { useTranslations } from "next-intl";


export default function ContactUs(){
    const t = useTranslations("contactUs");
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
                        <h2 className="title">提携のご案内</h2>
                            <p className="subtitle">提携までの流れをステップごとにご案内します</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 border-end">
                                <div className={`${s.logoCont} w-100 d-flex justify-content-center align-items-center`}>
                                    <img src="/logoPlacewell.png" style={{width:"60%"}} alt="" />
                                </div>
                                <div className="w-100 mt-2 text-center">
                                    <span className={s.logoText}>50年の経験と実績を誇る送り出し機関</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={`${s.logoCont} w-100 d-flex justify-content-center align-items-center`}>
                                    <img src="/sky.png" style={{width:"50%"}} alt="" />
                                </div>
                                <div className="w-100 mt-2 text-center">
                                    <span className={s.logoText}>日本事業専門送り出し機関</span>
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
                                            Hashira Skillsと合わせると、20名以上の日本語対応可能な
                                            スタッフが在籍しております。
                                        </span>
                                    </div>
                                </div>

                                <div className={`${s.bottomCard} d-flex mt-4`} >
                                    <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                        <img src="/users.png" className={s.iconStyle} alt="" />
                                    </div>
                                    <div className="d-flex align-items-center ms-3" style={{width:"85%"}}>
                                        <span style={{fontWeight:"600", color:"#104675"}}>
                                            弊社スタッフは、MWO、OTIT、入管関連書類の作成を
                                            得意としております。
                                        </span>
                                    </div>
                                </div>

                                <div className={`${s.bottomCard} d-flex mt-4`} >
                                    <div className="border-end d-flex justify-content-center align-items-center" style={{width:"15%"}}>
                                        <img src="/message.png" className={s.iconStyle} alt="" />
                                    </div>
                                    <div className="d-flex align-items-center ms-3" style={{width:"85%"}}>
                                        <span style={{fontWeight:"600", color:"#104675"}}>
                                            LINEグループチャットとメールの両方を活用し、
                                            迅速かつ効率的なコミュニケーションを実現しています。
                                        </span>
                                    </div>
                                </div>


                                <div className={`${s.bottomCard} mt-4`}>
                                    <div className="row">
                                        <div className="col border-end">
                                            <div className="d-flex">
                                                <div style={{width:"70%"}}>
                                                    <span style={{fontWeight:"600",color:"#A20E15"}}>
                                                        Hashira Skills 概要書
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
                                                    }}>Download</button>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className="col">
                                            <div className="d-flex">
                                                <div style={{width:"70%"}}>
                                                    <span style={{fontWeight:"600",color:"#A20E15"}}>
                                                        Placewell International 概要書
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
                                                    }}>Download</button>
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
                                                    メール
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
                                                    メール
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
                                                <img src="/global.png" className={s.iconStyleBottom} alt="" />
                                            </div>
                                            <div className="d-flex flex-column  ms-3" style={{width:"85%"}}>
                                                <span style={{fontWeight:"700", color:"#104675", fontSize:"20px"}}>
                                                    メール
                                                </span>
                                                <div>
                                                    angono@hashiraskils.com <br />
                                                    japan@placewellinternational.com <br />
                                                    marketing@skyinnovationph.com 
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