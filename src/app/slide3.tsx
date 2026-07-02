import styles from './slide3.module.css';

export default function HashiraHeroSection2() {
  return (
    <>
    <section className={styles.sectionStyle} style={{height:"100vh"}}>
        {/* <div className={styles.numb}>
            03
            <div className={styles.underline}></div>
        </div> */}
        {/* <div className="row">
            <div className="col-md-8 p-0">
                <div className={styles.leftDiv}>

                </div>
            </div>
            <div className="col-md-4 p-0">
                <div className={styles.rightDiv}>

                </div>
            </div>
        </div> */}

        <div className="row">
            <div className="col">
                <div className={styles.slantDiv}>

                </div>

                <div className={styles.titleHeader}>
                    実技講習と実技テストも
                    <br />
                    実施しています
                </div>

                <div className={styles.horizontalDiv}>
                    <span className={styles.hozizonText}>働く力を確実に身につけるための実践的なカリキュラム。</span>
                </div>

                <div className={`${styles.bottomDiv} d-flex flex-column align-items-center justify-content-center `}>
                    
                    <div className={styles.bottomItem}>
                        <div>
                            <img src="/img/banner/slide3/tools_icon_8k.png" style={{width:"60px"}} alt="" />
                        </div>
                        <div className='ms-3'>
                            <span style={{fontWeight:"600", fontSize:"14px",color:"#002F6D"}}>実技講習</span>
                            <br />
                            
                            <span style={{fontWeight:"600", fontSize:"12px",color:"#002F6D"}}>
                                各業種に必要な知識と技能を、経験豊富な講師が
                                <br />
                                実践的に指導します。
                            </span>
                        </div>
                    </div>

                    <div className={styles.bottomItem}>
                        <div>
                            <img src="/img/banner/slide3/clipboard_icon_8k.png" style={{width:"60px"}} alt="" />
                        </div>
                        <div className='ms-3'>
                            <span style={{fontWeight:"600", fontSize:"14px",color:"#002F6D"}}>実技テスト</span>
                            <br />
                            
                            <span style={{fontWeight:"600", fontSize:"12px",color:"#002F6D"}}>
                                定期的に実技テストを実施し、理解度とスキルの<br />
                                定着をしっかり確認します。
                            </span>
                        </div>
                    </div>
                    
                    <div className={styles.bottomItem}>
                        <div>
                            <img src="/img/banner/slide3/award_icon_8k.png" style={{width:"60px"}} alt="" />
                        </div>
                        <div className='ms-3'>
                            <span style={{fontWeight:"600", fontSize:"14px",color:"#002F6D"}}>即戦力の育成</span>
                            <br />
                            
                            <span style={{fontWeight:"600", fontSize:"12px",color:"#002F6D"}}>
                                講習とテストを通じて、自信を持って日本の職場で<br />
                                活躍できる人材を育成します。 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="/img/banner/slide3/upper.png" className={styles.upperImage} alt="" />
        <img src="/img/banner/slide3/middle.png" className={styles.middleImage} alt="" />
        <img src="/img/banner/slide3/bottom.png" className={styles.bottomImage} alt="" />
        
    </section>
    </>
  );
}