import Image from "next/image";
import s from "../components/styles/whyPlacewell.module.css"
import { FaCircleCheck } from "react-icons/fa6";
import { getRollingData } from "@/data/homepage";
import { MdGroups } from "react-icons/md";
import { FaGlobe, FaCalendar  } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function WhyPlacewell() {
    const t = useTranslations("home");
    const rollingData = getRollingData();
    return (
        <section className={s.section}>
        <div className={s.wrapper}>

            {/* LEFT SIDE */}
            <div className={s.left}>
            <div className={s.imageWrap}>
                <Image
                src="/img/planning.jpg"
                alt="Planning"
                fill
                className={s.image}
                />
                <div className={s.fade}></div>
            </div>

            {/* STATS */}
                {/* <div className={s.stats}>
                    <div className={s.stat}>
                        
                        <MdGroups className={s.iconStat} />
                        
                        <h3>200,000</h3>
                        <p>Deployed OFWs</p>
                    </div>
                    <div className={s.stat}>
                        
                        <FaGlobe className={s.iconStat} />
                        
                        <h3>15+</h3>
                        <p>Branch Offices</p>
                    </div>
                    <div className={s.stat}>
                        <FaCalendar className={s.iconStat} /> 
                        <h3>50 Years</h3>
                        <p>Experience</p>
                    </div>
                </div> */}
            </div>

            {/* RIGHT SIDE */}
            <div className={s.right}>
            <span className={s.titleHead}>{t('why')}?</span>

            <div className={s.list}>
                {rollingData.map((item, i) => (
                <div key={i} className={s.item}>
                    <div >
                        <FaCircleCheck className={s.icon}/>
                    </div>
                    <div>
                        <h4>{t(item.title)}</h4>
                        <p>
                            {t(item.description)}
                        </p>
                    </div>
                </div>
                ))}
            </div>
            </div>

        </div>
        </section>
    );
}