import Link from "next/link";
import styles from "@/styles/Company.module.css";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function CompanyCard({
  title,
  description,
  image,
  link,
}: Props) {
  return (
    <div className={styles.card}>

      <div className="row align-items-center">

        <div className="col-lg-6">

          <div className={styles.leftAccent}></div>

          <h2 className={styles.titleHead}>{title}</h2>

          <p>{description}</p>

          <Link href={link} target="_blank" className={styles.button}>
            ホームページ →
          </Link>

        </div>

        <div className="col-lg-6">

          <div className={styles.logoCard}>
            <img src={image} alt="" />
          </div>

        </div>

      </div>

    </div>
  );
}