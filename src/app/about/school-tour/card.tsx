import styles from "@/styles/School.module.css";
import { ReactNode } from "react";

interface CardProps{
    image?:string,
    icon?:ReactNode,
    title?:string,
    description?:string,
    number?:string,
}

export default function CardItem({
  image,
  icon,
  title,
  description,
  number,
}:CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.body}>
        <div className={styles.icon}>
          {icon}
        </div>

        <div className={styles.content}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>

        <div className={styles.number}>
          {number}
        </div>
      </div>
    </div>
  );
}