"use client";

import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import CompanyCard from "./CompanyCard";
import styles from "@/styles/Company.module.css";

export default function About() {
  const t = useTranslations("groupCompany");

  return (
    <>
      <Banner
        backgroundImage="/img/banner/DSC03883.jpg"
        title={t("title")}
        subtitle={t("subtitle")}
        description={t("desc")}
      />

      <section className={styles.section}>
        <div className="container">

          <CompanyCard
            title={t("item1")}
            description={t("item1Desc")}
            image="/logoPlacewell.png"
            link="https://www.placewellinternational.net/"
            txtButton={t("button")}
          />

          <CompanyCard
            title={t("item2")}
            description={t("item2Desc")}
            image="/client5.png"
            link="https://www.b-s-aichi.jp/"
            txtButton={t("button")}
          />

          

        </div>
      </section>
    </>
  );
}