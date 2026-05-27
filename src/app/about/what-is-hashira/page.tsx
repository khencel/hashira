import Banner from "@/components/Banner";

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
                  <img src="/img/default.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}