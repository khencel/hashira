import styles from './slide4.module.css';

export default function HashiraHeroSection4() {
  return (
    <>
    <section className={styles.sectionStyle} style={{height:"100vh"}}>
        <div className={styles.numb}>
            04
            <div className={styles.underline}></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-10">
                <div className='text-center mt-4'>
                    <span 
                        style={{
                            fontWeight:"700",
                            fontSize:"50px",
                            color:"#002352"
                        }}
                    >柱日本語学校の実績</span>
                    <br />
                    <span 
                    style={{
                        fontSize:"20px",
                        fontWeight:"600",
                        color:"#002352"
                    }}
                    >多くの学生が日本で活躍し、確かな成果を上げています。</span>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4 mt-5">
                        <div className={`${styles.cardStyle} ms-auto`} >
                            <div className='w-100 text-center p-2'>
                                <img src="/img/banner/slide4/group.png" className={styles.logoStyle} alt="" />
                            </div>
                            <div className='w-100 text-center'>
                                <div style={{height:"60px"}}>
                                    <span style={{fontWeight:"700",fontSize:"14px",color:"#002352"}}>送り出し実績</span>
                                </div>
                                
                                <span style={{fontWeight:"700",fontSize:"35px",color:"#002352"}}>2,000</span>
                                <span style={{fontWeight:"700",fontSize:"16px",color:"#002352"}}>名以上</span>
                                <br />
                                <br />
                                <span style={{fontWeight:"700",fontSize:"13px",color:"#002352"}}>
                                    多くのフィリピン人材を<br/>
                                    日本の企業へ送り出しています。
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className={`${styles.cardStyle} m-auto`} >
                            <div className='w-100 text-center p-2'>
                                <img src="/img/banner/slide4/chart.png" className={styles.logoStyle} alt="" />
                            </div>
                            <div className='w-100 text-center'>
                                <div style={{height:"60px"}}>
                                    <span style={{fontWeight:"700",fontSize:"14px",color:"#002352"}}>プロメトリック <br/>合格率</span>
                                </div>
                              
                                <span style={{fontWeight:"700",fontSize:"35px",color:"#002352"}}>70</span>
                                <span style={{fontWeight:"700",fontSize:"16px",color:"#002352"}}>%</span>
                                <br />
                                <br />
                                <span style={{fontWeight:"700",fontSize:"13px",color:"#002352"}}>
                                    質の高い日本語教育で、<br/>
                                    高い合格率を実現。
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <div className={styles.cardStyle}>
                            <div className='w-100 text-center p-2'>
                                <img src="/img/banner/slide4/calendar.png" className={styles.logoStyle} alt="" />
                            </div>
                            <div className='w-100 text-center'>
                                <div style={{height:"60px"}}>
                                    <span style={{fontWeight:"700",fontSize:"14px",color:"#002352"}}>在籍学生数</span>
                                </div>
                                <span style={{fontWeight:"700",fontSize:"35px",color:"#002352"}}>300</span>
                                <span style={{fontWeight:"700",fontSize:"16px",color:"#002352"}}>名以上</span>
                                <br />
                                <br />
                                <span style={{fontWeight:"700",fontSize:"13px",color:"#002352"}}>
                                    さまざまな夢を持つ学生が<br/>
                                    学んでいます。
                                    
                                </span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row justify-content-center mt-5">
            <div className="col-10 mt-5 p-0">
                <div className={styles.bottomItem}>
                    これからも、信頼される教育とサポートで、未来をつなぎます。
                </div>
            </div>
        </div>
    </section>
    </>
  );
}