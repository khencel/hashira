"use client"
import Banner from "@/components/Banner";
import {getDepartmentList, getAccount}  from "./data"
import s from "../../department-facilities/department/department.module.css"
import YouTube from "react-youtube";
import { useTranslations } from "next-intl";

export default function SpecialRules() {
    const t = useTranslations("specialRules");
    const departments = getDepartmentList();
    const account = getAccount();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/DSC03840.jpg"
                title={t('title')}
                subtitle={t('subtitle')}
                description={t('desc')}
            />

            <section className="mb-3" style={{background:"#f4f3f3"}}>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            {
                                departments.map((department,index)=>{
                                    return (
                                        <div className="col-md-6 py-3" key={index}>
                                            <div className={s.departmentContainer}>
                                                <div style={{width:"60%"}} className="">
                                                    <div className="d-flex mb-3">
                                                        <div className="mt-3 d-flex justify-content-center align-items-center" style={{width:"30%"}}>
                                                            <span className="badge p-3 rounded-circle" style={{background:"#104675"}}>{department.icon}</span>
                                                        </div>
                                                        <div className="mt-3" style={{width:"70%"}}>
                                                            <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{t(department.title)}</span>
                                                        </div>
                                                    </div> 
                                                    <div className="p-3">
                                                        <div className={s.descriptioCont}>
                                                            <p className="subtitle">
                                                                {t(department.description)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {
                                                        department.videoId && (
                                                            <div className="p-3 text-center">
                                                                <YouTube
                                                                    videoId={department.videoId}
                                                                    opts={{
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        playerVars: {
                                                                        autoplay: 0,
                                                                        controls: 1,
                                                                        mute: 1,
                                                                        loop: 1,
                                                                        playlist: department.videoId,
                                                                        },
                                                                    }}
                                                                    
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                    
                                                </div>
                                                <div style={{width:"40%"}} className="p-3 text-center">
                                                    <div className={s.imageSize} style={{backgroundImage:`url(${department?.image?.img1})`}}>

                                                    </div>
                                                    <div className={s.imageSize} style={{backgroundImage:`url(${department?.image?.img2})`}}>

                                                    </div>
                                                    <div className={s.imageSize} style={{backgroundImage:`url(${department?.image?.img3})`}}>

                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>


                        <div className="row d-md-none">
                            <div className="col-md-6 py-3">
                                <div className={s.departmentContainer}>
                                    <div style={{width:"60%"}} className="">
                                        <div className="d-flex mb-3">
                                            <div className="mt-3 d-flex justify-content-center align-items-center" style={{width:"30%"}}>
                                                <span className="badge p-3 rounded-circle" style={{background:"#104675"}}>{account.icon}</span>
                                            </div>
                                            <div className="mt-3" style={{width:"70%"}}>
                                                <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{t(account.title)}</span>
                                            </div>
                                        </div> 
                                        <div className="p-3">
                                            <div className={s.descriptioCont}>
                                                <p className="subtitle">
                                                    {t(account.description)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:"40%"}} className="p-3 text-center">
                                        <div className={s.imageSize} style={{backgroundImage:`url(${account?.image?.img1})`}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${account?.image?.img2})`}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${account?.image?.img3})`}}>

                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3 d-none d-md-block">
                            <div className="col-md-12"> 
                                <div className={s.departmentContainerBottom}>
                                    <div style={{width:"30%"}} >
                                        <div className="d-flex mb-3">
                                            <div className="mt-3 d-flex justify-content-center align-items-center" style={{width:"30%"}}>
                                                <span className="badge p-3 rounded-circle" style={{background:"#104675"}}>{account.icon}</span>
                                            </div>
                                            <div className="mt-3" style={{width:"70%"}}>
                                                <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{t(account.title)}</span>
                                            </div>
                                        </div> 
                                        <div className="p-3">
                                            <div className={s.descriptioCont}>
                                                <p className="subtitle">
                                                    {t(account.description)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:"70%"}} className=" d-flex">
                                        <div className={s.imageSize} style={{backgroundImage:`url(${account?.image?.img1})`,margin:"10px",height:"200px"}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${account?.image?.img2})`,margin:"10px",height:"200px"}}>

                                        </div>
                                        <div className={s.imageSize} style={{backgroundImage:`url(${account?.image?.img3})`,margin:"10px",height:"200px"}}>

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

/* Reusable Section */
