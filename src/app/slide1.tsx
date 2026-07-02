import styles from './slide1.module.css';

export default function HashiraHeroSection() {
  return (
    <>
    <section className={styles.sectionStyle} style={{height:"100vh"}}>
        {/* <div className={styles.numb}>
            01
            <div className={styles.underline}></div>
        </div> */}
        <div className="row ">
            <div className="col">

                
                <div
                className="row w-100 justify-content-center"
                style={{ minHeight: "400px",height:"100vh" }}
                >
                    
                    <div className="col-md-8 position-relative  d-flex justify-content-center align-items-center">
                        
                        <img src="/img/banner/slide1Title.png" className={styles.imgStyle} alt="" />
                    </div>
                
                </div>
                
            </div>
        </div>
    </section>
    </>
  );
}