interface CardProps{
    img: string;
    title: string;
    desc: string;
}

export default function Card({img,title,desc}:CardProps){
    return (
        <>
            <div className="w-100">
                <div>
                    <img 
                        src={img}
                        loading="lazy"
                        alt="" 
                        className="img-fluid rounded-3 shadow"
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover"
                        }}
                    />
                </div>
                <div className="mt-3">
                    <span className="title" style={{fontSize:"20px",fontWeight:"600"}}>{title}</span>
                    <p className="subtitle" style={{fontSize:"14px"}}>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}