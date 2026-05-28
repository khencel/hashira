import Banner from "@/components/Banner";
import Step from "./Step";
import s from "@/styles/overall.module.css";

export default function Overall() {
  return (
    <>
      <Banner
        backgroundImage="/img/banner/144829.jpg"
        title="System"
        subtitle="Overall"
        description="Our system ensures that we provide our clients with the best possible Filipino Workers"
      />

      <section className={s.systemSection}>
        <div className="container">

          <Step
            title="Orientation"
            text="We start by hosting an information session for interested candidates where we explain the whole process from point A to Z."
            image="/img/default.png"
            reverse={false}
          />

          <Step
            title="Screening"
            text="Candidates who are interested in our program are pre-interviewed and screened through IQ, math, and personality tests and more."
            image="/img/default.png"
            reverse={true}
          />

          <Step
            title="Study before Interview"
            text="Employers can interview candidates who already speak Japanese because we only recommend students for interview if they perform well at school."
            image="/img/default.png"
            reverse={false}
          />

          <Step
            title="Interview and Trade Test"
            text="We are able to facilitate orderly and efficient interviews and trade tests through our experienced staff."
            image="/img/default.png"
            reverse={true}
          />

          <Step
            title="Monthly Evaluation"
            text="Our students are required to take a monthly evaluation. Those who fail are either kicked out or re-batched."
            image="/img/default.png"
            reverse={false}
          />

          <Step
            title="Post-Deployment Monitoring"
            text="Although it is mainly the responsibility of the
                agency to monitor our workers in Japan, we take responsibility in ensuring the
                welfare of our students in Japan because we treasure the relationship we built
                with them while they studied at our school."
            image="/img/default.png"
            reverse={true}
          />

        </div>
      </section>
    </>
  );
}

/* Reusable Section */
