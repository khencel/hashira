"use client"
import Banner from "@/components/Banner";
import Step from "./Step";
import s from "@/styles/overall.module.css";
import { useTranslations } from "next-intl";

export default function Overall() {
  const t = useTranslations("overall");
  return (
    <>
      <Banner
        backgroundImage="/img/banner/DSC02920.jpg"
        title={t('title')}
        subtitle={t('subtitle')}
        description={t('desc')}
      />

      <section className={s.systemSection}>
        <div className="container">

          <Step
            title={t('Orientation')}
            text={t('OrientationDesc')}
            image="/img/banner/DSC03841.jpg"
            reverse={false}
          />

          <Step
            title={t('Screening')}
            text={t('ScreeningDesc')}
            image="/img/industries/DSC02781.jpg"
            reverse={true}
          />

          <Step
            title={t('Study')}
            text={t('StudyDesc')}
            image="/img/industries/stuudy.jpg"
            reverse={false}
          />

          <Step
            title={t('Interview')}
            text={t('InterviewDesc')}
            image="/img/industries/Interview.JPG"
            reverse={true}
          />

          <Step
            title={t('Monthly')}
            text={t('MonthlyDesc')}
            image="/img/industries/monthly.JPG"
            reverse={false}
          />

          <Step
            title={t('Post')}
            text={t('PostDesc')}
            image="/img/banner/DSC03897.jpg"
            reverse={true}
          />

        </div>
      </section>
    </>
  );
}

/* Reusable Section */
