// components/JobCard.jsx
import s from "@/styles/about.module.css";

interface cardProps{
    image?:string,
    title?:string,
    description?: string,
    icon?:React.ReactNode
}


export default function JobCard({
  image,
  title,
  description,
  icon,
}:cardProps) {
  return (
    <div className={`card border-0 shadow-sm rounded-4 overflow-hidden h-100 ${s.jobCard}`}>
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <div className="card-body text-center position-relative pt-5">

        {/* Floating Icon */}
        <div
          className="position-absolute top-0 start-50 translate-middle"
          style={{
            width: "70px",
            height: "70px",
            background: "#0d3b66",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "5px solid white",
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h5 className="fw-bold mt-2">{title}</h5>

        {/* Description */}
        <p className="text-muted mb-0">
          {description}
        </p>
      </div>
    </div>
  );
}