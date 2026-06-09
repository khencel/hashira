import Banner from "@/components/Banner";
import s from '@/styles/manners.module.css'

export default function JapaneseCultureManners() {
    return (
      <>
        <Banner
            backgroundImage="/img/banner/31383.jpg"
            title="System"
            subtitle="Japanese Culture and Manners"
            description="just as important as Japanese language"
        />
        <div className={`${s.container} mb-5`}>
            <div className="row m-0 justify-content-center">
                <div className="col-md-10 ">
                    <div className="row position-relative justify-content-center">
                        <div className="col-md-6 text-center position-absolute start-50 translate-middle" style={{bottom:"-130px"}}>
                            <span className="title" style={{fontWeight:"800",fontSize:"40px"}}><span className="text-white">Japanese</span> Cultural Manners</span>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-5 p-0">
                            <img src="/img/manners/noShoes.jpg" style={{height:"600px",width:"100%", objectFit:"cover"}} alt="" />
                        </div>
                        <div className="col-7 p-0">
                            <div className={`${s.rightDiv} d-flex justify-content-center align-items-center`}>
                                <div className="row w-100 m-0">
                                    <div className="col-md-6 border p-4">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos illo minus expedita aliquid id similique fugit eveniet nemo, debitis corrupti tenetur, alias quae eos saepe impedit obcaecati sapiente maxime?
                                    </div>
                                    <div className="col-md-2 border position-relative">
                                        <img src="/img/manners/fuji.jpg" className={s.imgCenter} alt="" />
                                    </div>
                                    <div className="col-md-4 border">
                                        <img src="/img/manners/noShoes2.jpg" className={s.imgRight} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
      </>
    );
}