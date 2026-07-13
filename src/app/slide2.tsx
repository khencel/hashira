import styles from './slide2.module.css';
import SkillData from '@/data/skill';

export default function HashiraHeroSection1() {
    const skills = SkillData()
    return (
        <>
        <section style={{
            position:"absolute",
            zIndex:"1",
            width:"100%",
            bottom:"0px"
        }}>
            <div className="row justify-content-center">
                <div className="col">
                    <div className={`row ${styles.skillDiv}`}>
                        {
                            skills.map(((item, keys) => (
                                <div className="col p-0 pt-3 pb-5" key={keys}>
                                    <div className={`text-center ${keys !== 0 ? 'border-start' : ''} d-flex flex-column align-items-center justify-content-center w-100`}>
                                        <span className={styles.circleIcon}>
                                            <img src={item.icon} style={{width:"50%"}} alt="" />
                                        </span>
                                        
                                        <span className={styles.titleIcon} dangerouslySetInnerHTML={{__html: item.title}}></span>

                                        <span className={styles.descIcon} dangerouslySetInnerHTML={{__html: item.desc}}></span>
                                    </div>
                                </div>
                            )))
                        }
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.sectionStyle} style={{height:"100vh"}}>
            {/* <div className={styles.numb}>
                02
                <div className={styles.underline}></div>
            </div> */}
            <div className={styles.title1}>
                柱日本語学校の特徴
            </div>
            <div className={`row ${styles.noGutterRow}`}>
                <div className="col-md-4 p-0">
                    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:"100vh", background:"white"}}>
                        <div className={styles.title1} style={{fontSize:"35px",top:"20%"}}>
                            学ぶだけではない。
                            <br />
                            日本で働くための
                            <span style={{fontSize:"40px",color:"#D19C00"}}>力</span>
                            を育てる。
                        </div>
                    
                    <div className={styles.title1} style={{bottom:"40%",fontSize:"20px"}}>
                            日本語教育・専門教育・生活指導を通じて、
                            <br />
                            日本企業で活躍できる人材を育成しています。
                        </div>
                    </div>

                    
                </div>
                <div className="col-md-8 p-0 d-none d-md-block">
                    <div className={styles.rightCont}>

                    </div>
                </div>
            </div>

            
        </section>

        
        </>
    );
}