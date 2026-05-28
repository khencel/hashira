import s from "@/styles/overall.module.css";

interface StepProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}

export default function Step({ title, text, image, reverse }: StepProps) {
  return (
    <div className={`${s.stepRow} ${reverse ? s.reverse : ""}`}>
      
      <div className={s.stepImage}>
        <div className={s.imageWrapper}>
          <img src={image} alt={title} />
        </div>
      </div>

      <div className={s.stepContent}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </div>
  );
}