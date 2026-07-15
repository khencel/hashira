import s from "../components/styles/Banner.module.css";
import { FaGlobe } from "react-icons/fa";

interface BannerProps {
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    havebutton?: boolean;
    customFontSize?:boolean
}

export default function Banner({ backgroundImage, title, subtitle, description, havebutton, customFontSize }: BannerProps) {
  return (
    <section
      className={s.banner}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className={s.overlay}></div>

      <div className={s.content}>
        <p className={s.tag}>{title}</p>

        {customFontSize ? (
          <h4 className={s.title1}>
            {subtitle}
          </h4>
        ) : (
          <h1 className={s.title}>
            {subtitle}
          </h1>
        )}

        <p className={s.desc} dangerouslySetInnerHTML={{ __html: description || "" }}>
         
        </p>

        {
            havebutton && (
              <button className={`${s.btnprimary} rounded-4`}><FaGlobe /> Visit Hashira Website</button>
            )
        }

        

      </div>

      
    </section>
  );
}