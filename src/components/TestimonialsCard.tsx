import s from "../components/styles/Testimonials.module.css"

interface TestimonialProps{
  avatar?:string,
  name?:string,
  role?:string,
  company?:string
  statement?:string
}

export default function TestimonialCard({avatar, name, role, company, statement}:TestimonialProps) {
  return (
    <div className={s.testimonialCard}>
      <div className={s.quote}>“</div>

      <p className={s.testimonialText}>
        {
          statement ? (
            statement
          ):(
            `Working with this team was an absolute pleasure. They delivered exactly
            what we needed, on time and beyond our expectations.`
          )
        }
        
      </p>

      <div className={s.divider}></div>

      <div className={s.testimonialFooter}>
        <div className={s.userInfo}>
          <img
            src={avatar?avatar:"https://randomuser.me/api/portraits/women/44.jpg"}
            alt="user"
            className={s.avatar}
          />
          <div>
            <h4 className={s.name}>
              {name?name:"Sarah Johnson"}
            </h4>
            <p className={s.role}>
              {role?role:"Sarah Johnson"}
              <br />
              {company?company:"BrightWave Inc."}
            </p>
          </div>
        </div>

        <div className={s.stars}>★★★★★</div>
      </div>
    </div>
  );
}