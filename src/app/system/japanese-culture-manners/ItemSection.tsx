import s from '@/styles/manners.module.css'
import React from 'react'


interface itemProps{
    headTitle?:React.ReactNode,
    description?:string,
    imageLeft?:string,
    imageRight?:string,
    imageCenter?:string,
}

export default function ItemSection ({headTitle,description,imageLeft,imageRight,imageCenter}:itemProps){
    return (
        <div className={`${s.container} mb-5`}>
            <div className="row m-0 justify-content-center">
                <div className="col-md-10 ">
                    <div className="row position-relative justify-content-center">
                        <div
                                className={`${s.mobileTitle} col-md-8 text-center position-absolute start-50 translate-middle`}
                                style={{ bottom: "-130px" }}
                            >
                            <span className="title" style={{fontWeight:"800",fontSize:"40px"}}>{headTitle}</span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-5 p-0">
                            <img src={imageLeft} style={{height:"600px",width:"100%", objectFit:"cover"}} alt="" />
                        </div>
                        <div className="col-7 p-0">
                            <div className={`${s.rightDiv} d-flex justify-content-center align-items-center`}>
                                <div className="row w-100 m-0">
                                    <div className="col-md-6 border p-4">
                                        {description}
                                    </div>
                                    <div className="col-md-2 border position-relative">
                                        <img src={imageCenter} className={s.imgCenter} alt="" />
                                    </div>
                                    <div className="col-md-4 border">
                                        <img src={imageRight} className={s.imgRight} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}