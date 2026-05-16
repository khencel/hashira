"use client"
import Banner from "@/components/Banner";
import ImageStyle from "@/components/ImageStyle";
import CustomHR from "@/components/CustomHR";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import s from "./style.module.css"
import MissionVision from "@/components/MissionVision";

export default function About() {
    return (
      <>
        <Banner
          backgroundImage="/img/banner/japan1.jpg"
          title="About Us"
          subtitle="Corporate Identity"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id odit quibusdam, labore quod, distinctio aliquam vero harum cum quisquam voluptatem tempora! Sit delectus est amet dolorum molestias sed unde!"
        />
        <section className="mb-5">
            <div className="header">
              <h2 className="title">Board of Directors</h2>
              <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            

            <div className="row m-0 mt-5 pt-5 justify-content-center">
              <div className="col-md-5 p-3">
                <div className="row">
                  <div className="col"><ImageStyle image="/img/identity/family-lifestyle-night.jpg"/></div>
                  <div className="col d-flex align-items-center">
                      <div className="position-relative">
                        <h5 className="title" style={{fontSize:"24px"}} >Kawamichi Nobuaki </h5>
                        <small>
                            <strong>Vice President for Operations</strong>
                        </small>
                        <div className={s.dotPattern}></div>
                        <p className="mt-3 cardText">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sed cum rerum fugiat ad natus quos, asperiores consequatur dolores sint omnis vitae et, perferendis quibusdam! Itaque voluptatum consequuntur quisquam dolorum?
                        </p>
                      </div>
                      
                    </div>
                </div>
                  
              </div>

              <div className="col-md-5 p-3">
                  <div className="row">
                    <div className="col"><ImageStyle image="/img/identity/jolo.jpg"/></div>
                    
                    <div className="col d-flex align-items-center">
                      <div className="position-relative">
                        <h5 className="title" style={{fontSize:"24px"}} >Jose Lorenzo Escueta Beech  (Joelo)</h5>
                        <small>
                            <strong>President</strong>
                        </small>
                        <div className={s.dotPattern}></div>
                        <p className="mt-3 cardText">
                          Joelo is a licensed attorney and a JLPT N1 passer. He obtained his degree in International Business from Pepperdine University and his Juris Doctor from Ateneo De Manila School of Law. He is also the President of Hashira Skills and Language Academy and Pro-Tech Skills Development Center Corporation. He has been with Placewell since 2018.
                            
                        </p>
                      </div>
                      
                    </div>
                </div>
              </div>
            </div>


            <div className="row m-0 mt-5 justify-content-center">
              <div className="col">
                <CustomHR height="10px" />
              </div>
            </div>
            
        </section>

        

        <section className="mt-5 ">
              <MissionVision />
        </section>


        <section>
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                  <span className="title" style={{fontSize:"18px", fontWeight:"600"}}>OUR PROMISE TO EMPLOYERS</span>
                  <p className="subtitle">
                      We promise that the students that you hire from our school will be ready
                      for work in Japan. They will flourish as workers and be liked as people
                      because of their knowledge of the Japanese Language and respect for the
                      Japanese Cul ture. We assure you that your Filipino workers will be a great
                      help to you and your company.
                  </p>
                </div>
                <div className={`${s.rightSlideDiv} col-md-8`} style={{backgroundImage:`url(/img/165.jpg)`}}>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className={`${s.leftSlideDiv} col-md-8`} style={{backgroundImage:`url(/img/student.jpg)`}}>
                  
                </div>
                <div className="col-md-4">
                  <span className="title" style={{fontSize:"18px", fontWeight:"600"}}>OUR PROMISE TO STUDENTS</span>
                  <p className="subtitle">
                      We promise that you will not only gain new and useful knowledge about the
                      Japanese language and cul ture, but you will also grow as people during your t ime wi th us. We will serve you wi th all our hear t because i t will be our pleasure to see
                      you fulfill your dreams and succeed in Japan.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="row m-0 justify-content-center">
            <div className="col-md-10">
              <div className="header">
                <h2 className="title">Message from the President</h2>
                <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className={`${s.longParagraph}`}>
                    My name is Jose Lorenzo Escueta Beech, but you
                    can call me Joelo! While studying in Japan as an exchange student, I
                    learned a lot of things about the Japanese culture
                    that we don’t practice consistently in the Philippines. These include: Compassion, Courtesy, Humility, Trust and Responsibility - practices that are natural to Japanese people, but may not be to my Filipino countrymen and myself.
                    For this reason, I established Hashira Skills with
                    the goal of spreading the Japanese Language and Culture throughout the Philippines so that more Filipinos can find work and succeed in Japan.
                    I love the students who have trusted their future in
                    our school.
                    I love my teachers who have dedicated themselves
                    to growing and improving our company. And I am so thankful to all of the companies who have given this wonderful, life-changing
                    opportunity to all of our students and team
                    members. Our company values the connection that we have developed with both companies and students alike, as we build a cross-culture bridge between
                    two nations that need each other’s help. Hashira hopes to continue helping hundreds of Filipinos make their dreams come true as we strive
                    to develop young and diligent workers who will surely be a great help to a Japan that is aging and
                    in need of competent foreign workforce. Hashira Skills is always at your service!
                  </p>
                  
                </div>

                <div className="col-md-6">
                  <div className={s.presidentImageWrapper}>
                    <div className={s.blueBg}></div>

                    <img
                      src="/img/identity/joelo.png"
                      className={s.presidentImage}
                      alt=""
                    />

                    <div className={s.dotPattern}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className={s.sectionWrapper}>
            <div className="header">
              <h2 className="title">Company History</h2>
              <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={`${s.historyCont} row justify-content-center position-relative m-0 mb-5`}>
              <div className="col-md-11">

                <hr className={s.customLine} />
                <Swiper
                spaceBetween={20}
                // slidesPerView={4}
                loop={false}
                // modules={[Autoplay]}
                autoplay={{ delay: 2000 }}
                speed={800}
                breakpoints={{
                  0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  },
                  576: {
                  slidesPerView: 1.2, // may konting peek
                  },
                  768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                  },
                  992: {
                  slidesPerView:4,
                  spaceBetween: 20,
                  },
              }}
              >
                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                     
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2022</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={s.badgeCont}>
                      <span className={`badge bg-danger`}>2021</span>
                    </div>
                    <div className={` ${s.historyInfo} mt-2`}>
                      <div>
                        <img src="/img/why_hire/Bartender-400x267.jpg" style={{width:"100%"}} alt="" />
                      </div>
                      <div>
                          <span className="title" style={{fontSize:"24px"}}>Sample Text</span>
                          <p className="cardText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ducimus quibusdam molestiae voluptate fugiat quia animi eaque nisi vel? Magnam cum dolorum minus ut tenetur! Alias eum pariatur odio ad?</p>
                      </div>
                    </div>
                </SwiperSlide>
                
              </Swiper>
              </div>
            </div>
            </div>
            <div className="row m-0 justify-content-center">
              <div className="col">
                <CustomHR height="10px" />
              </div>
            </div>
        </section> */}
      </>
    );
}