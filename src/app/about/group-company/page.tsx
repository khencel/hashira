"use client";

import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import CompanyCard from "./CompanyCard";
import styles from "@/styles/Company.module.css";

export default function About() {
  const t = useTranslations("whatIsHashira");

  return (
    <>
      <Banner
        backgroundImage="/img/banner/DSC03883.jpg"
        title={t("title")}
        subtitle="グループ会社紹介"
        description="弊社のグループ会社のご紹介"
      />

      <section className={styles.section}>
        <div className="container">

          <CompanyCard
            title="プレイスウェル・インターナショナル"
            description="プレイスウェル・インターナショナルは、50年以上にわたり海外でフィリピン人労働者を送り出してきた、フィリピン資本の家族経営人材派遣会社です。本社はマカティにあり、全国15以上の支店と連携しながら、世界各国の企業へフィリピン人材の募集・研修・派遣を行っています。プレイスウェルは、信頼できる人材と効率的で組織化された迅速なサービスの提供に努めると同時に、フィリピン人が価値ある存在として評価される企業とのマッチングを通じて、人材の成長と機会創出にも取り組んでいます。"
            image="/logoPlacewell.png"
            link="https://www.placewellinternational.net/"
          />

          <CompanyCard
            title="協同組合ビジネスサプライ愛知"
            description="協同組合ビジネスサプライ愛知は、Hashira Skillsの設立以来（2019年）、長年にわたりパートナーとして歩んできた信頼ある協同組合です。同組合は、日本における許可監理団体として20年以上にわたりフィリピン人材の受入れ事業に携わり、豊富な実績と経験を有しています。受入れ先は日本全国に及び、愛知、東京、関西、北海道、九州、沖縄に拠点を構え、各地域の企業と外国人材をつないでいます。"
            image="/client5.png"
            link="https://www.b-s-aichi.jp/"
          />

          

        </div>
      </section>
    </>
  );
}