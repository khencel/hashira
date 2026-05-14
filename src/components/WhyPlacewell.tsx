import Image from "next/image";
import s from "../components/styles/whyPlacewell.module.css"
import { FaCircleCheck } from "react-icons/fa6";
import { getRollingData } from "@/data/homepage";
import { MdGroups } from "react-icons/md";
import { FaGlobe, FaCalendar  } from "react-icons/fa6";

export default function WhyPlacewell() {
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
                <div className={s.stats}>
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
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={s.right}>
            <span className={s.titleHead}>Why Hashira?</span>
            <br />
            <span className={s.desc}>
                Hashira 柱 is a Japanese language inst i tution that is dedicated to
                helping Filipinos achieve their dream of working in Japan by providing
                them wi th high-quali ty
                Japanese language, cul ture and skills t raining.
                Hashira 柱 is the Japanese word for “Pillar” or “Foundation”.
                Our school was named Hashira 柱 for 2 reasons:
                <ul>
                    <li>
                        “People are the Stones of a Castle” is a Japanese saying that emphasizes the
                        impor tance of good workers as the foundat ion of a successful company. Our school is
                        commi t ted to molding workers who will be valuable to any Japanese company.
                    </li>
                    <li>
                        The Filipino workers who graduate from our school and eventually star t working in Japan will be the Pillars of their families. The hard work of these “Pillars” will set their families
                        for generat ions to come.
                    </li>
                </ul>
            </span>

            <div className={s.list}>
                {rollingData.map((item, i) => (
                <div key={i} className={s.item}>
                    <div >
                        <FaCircleCheck className={s.icon}/>
                    </div>
                    <div>
                        <h4>{item.title}</h4>
                        <p>
                            {item.description}
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