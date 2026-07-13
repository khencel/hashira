"use client";
import Banner from "@/components/Banner";
import s from "../../department-facilities/department/department.module.css"
import { useTranslations } from "next-intl";
import { JapaneseCultureList, getAccount } from "./data";
import YouTube from "react-youtube";

export default function JapaneseCultureManners() {
    const t = useTranslations("japaneseCulture");
    const itemList = JapaneseCultureList()
    const account = getAccount()
    return (
        <>
            <Banner
                backgroundImage="/img/banner/31383.jpg"
                title={t('title')}
                subtitle={t('Japanese')}
                description={t('desc')}
            />

            <section className="mb-3" style={{background:"#f4f3f3"}}>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">
                        <div className="row">
                            {
                                itemList.map((department,index)=>{
                                    return (
                                        <div className="col-md-6 py-3" key={index}>
                                            <div className={s.departmentContainer}>
                                                <div style={{width:"60%"}} className="">
                                                    <div className="d-flex mb-3">
                                                        <div className="mt-3 d-flex justify-content-center align-items-center" style={{width:"30%"}}>
                                                            <span className="badge p-3 rounded-circle" style={{background:"#104675"}}>{department.icon}</span>
                                                        </div>
                                                        <div className="mt-3" style={{width:"70%"}}>
                                                            <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{department.title}</span>
                                                        </div>
                                                    </div> 
                                                    <div className="p-3">
                                                        <div className={s.descriptioCont}>
                                                            <p className="subtitle">
                                                                {department.description}
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
                                                                        playlist: "1vIU3R-BIDQ",
                                                                        },
                                                                    }}
                                                                    
                                                                />
                                                            </div>
                                                        )
                                                    }
                                                    
                                                </div>
                                                <div style={{width:"40%"}} className="p-3 text-center">
                                                    <div className={s.imageSize}>
                                                        <img src={department?.image?.img1} className={s.imageStyle} alt="" />
                                                        {/* <img src="/img/default.png" className={s.imageStyle} alt="" /> */}
                                                    </div>
                                                    <div className={s.imageSize}>
                                                        <img src={department?.image?.img2} className={s.imageStyle} alt="" />
                                                        {/* <img src="/img/default.png" className={s.imageStyle} alt="" /> */}
                                                    </div>
                                                    <div className={s.imageSize} >
                                                        {
                                                            department?.image?.img3 && (
                                                                <img src={department?.image?.img3} className={s.imageStyle} alt="" />
                                                            )
                                                        }
                                                        
                                                        {/* <img src="/img/default.png" className={s.imageStyle} alt="" /> */}
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
                                                <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{account.title}</span>
                                            </div>
                                        </div> 
                                        <div className="p-3">
                                            <div className={s.descriptioCont}>
                                                <p className="subtitle">
                                                    {account.description}
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
                                                <span className="title" style={{fontSize:"18px",fontWeight:"600"}}>{account.title}</span>
                                            </div>
                                        </div> 
                                        <div className="p-3">
                                            <div className={s.descriptioCont}>
                                                <p className="subtitle">
                                                    {account.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:"70%"}} className=" d-flex">
                                        <div className={`${s.imageSize} p-1`}>
                                            <img src={account?.image?.img1} style={{height:"200px"}} className={s.imageStyle} alt="" />
                                            {/* <img src="/img/default.png" className={s.imageStyle} alt="" /> */}
                                        </div>
                                        <div className={`${s.imageSize} p-1`}>
                                            <img src={account?.image?.img2} style={{height:"190px"}} className={s.imageStyle} alt="" />
                                            {/* <img src="/img/default.png" className={s.imageStyle} alt="" /> */}
                                        </div>
                                        <div className={`${s.imageSize} p-1`}>
                                            <img src={account?.image?.img3} style={{height:"190px"}} className={s.imageStyle} alt="" />
                                            {/* <img src="/img/default.png" className={s.imageStyle} alt="" /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* <ItemSection
                headTitle={
                    <>
                        {t('Japanese')}
                    </>
                }
                description={t('JapaneseDesc')}
                imageLeft="/img/manners/noShoes.jpg"
                imageRight="/img/manners/fuji.jpg"
                imageCenter="/img/manners/noShoes2.jpg"
            />
            
            <div className={s.parallax} style={{backgroundImage:"url('/img/banner/31383.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        {t('Greetings')}
                    </>
                }

                description={t('GreetingsDesc')}
                imageLeft="/img/manners/greet1.jpg"
                imageRight="/img/manners/greet2.jpg"
                imageCenter="/img/manners/greet3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/garbage.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                      
                        {t('Recycling')}
                    </>
                }

                description={t('RecyclingDesc')}
                imageLeft="/img/manners/recycle2.jpg"
                imageRight="/img/manners/recycle1.jpg"
                imageCenter="/img/manners/recycle3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/mentor.png')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        
                        {t('Life')}
                    </>
                }

                description={t('LifeDesc')}
                imageLeft="/img/manners/mentor1.jpg"
                imageRight="/img/manners/mentor2.jpg"
                imageCenter="/img/manners/mentor3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/stayin.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                       
                        {t('Stay')}
                    </>
                }

                description={t('StayDesc')}
                imageLeft="/img/manners/stay3.jpg"
                imageRight="/img/manners/stay2.jpg"
                imageCenter="/img/manners/stay1.jpg"
            /> */}
        </>
    );
}