import Banner from "@/components/Banner";
import s from "@/styles/hashira.module.css"

export default function About() {
    return (
      <>
        <Banner
            backgroundImage="/img/banner/144829.jpg"
            title="About Us"
            subtitle="What is Hashira?"
            description="Filipino workers as the foundation of a Japan in need of labor"
        />

        <section className="mt-5 mb-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
              
              <div className="row">
                <div className="col-md-6">
                  <span className="title" style={{fontSize:"20px",fontWeight:"600"}}>Hashira Skills</span>
                  
                  <p className="subtitle longParagraph mt-3">
                    Hashira Skills is a skills and language institution that was established to help
                    young Filipinos achieve their dream of working in Japan.
                    Students live with their teachers in a Japan-like environment where we teach not
                    only the Japanese language but also Japanese culture and manners.
                    Employers can interview candidates who already speak Japanese because we
                    only recommend students for interview if they perform well at school.
                    Hashira Skills prides itself in being an institution that is run by Filipinos who
                    understand the heart of the Japanese.
                  </p>
                </div>
                <div className="col-md-6 text-center">
                  <img src="/logo3.jpg" style={{width:"70%"}} alt="" />
                </div>
              </div>

              <div className="position-relative">
                <div className="row">
                  <div className={`col-md-8 ${s.heroDescription}`} >
                    <span className="title">WHAT IS HASHIRA? 柱</span>
                    <p className="subtitle longParagraph mt-1">
                        Hashira 柱 is a Japanese language inst i tution that is dedicated to
                        helping Filipinos achieve their dream of working in Japan by providing
                        them wi th high-quali ty
                        Japanese language, cul ture and skills t raining.
                    </p>
                    <p className="subtitle longParagraph mt-2">
                        Hashira 柱 is the Japanese word for “Pillar” or “Foundation”.
                        Our school was named Hashira 柱 for 2 reasons:
                    </p>

                    <ol className="subtitle longParagraph" >
                        <li> 
                          “People are the Stones of a Castle” is a Japanese saying that emphasizes the
                          impor tance of good workers as the foundat ion of a successful company. Our school is
                          commi t ted to molding workers who will be valuable to any Japanese company.
                        </li>

                        <li>
                          The Filipino workers who graduate from our school and eventually star t working in Japan will be the Pillars of their families. The hard work of these “Pillars” will set their families
                          for generat ions to come.
                        </li>
                    </ol>
                  </div>
                </div>
                <div className="row">
                  <div className={`col-md-6 p-0 ${s.hero}`}>
                    <img src="/eloisa.png" style={{width:"60%"}} alt="" />
                  </div>
                  <div className="col-md-6">

                  </div>
                </div>
              </div>

              <div className="position-relative mt-5">
                <div className="row">
                  <div className={`col-md-8 ${s.heroDescriptionV2}`} >
                    <div className="dotPattern"></div>
                    <span className="title">OUR METHODOLOGY</span>
                    
                  </div>
                </div>
                <div className="row">
                  
                  <div className="col-md-6">

                  </div>
                  <div className={`col-md-6 p-0 text-end ${s.hero}`}>
                    <img src="/img/identity/joelo.png" style={{width:"60%"}} alt="" />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </section>
        
      </>
    );
}