import Banner from "@/components/Banner"
import BranchLocator from "./branches"
import JobCard from "./card"
import { FaHardHat } from "react-icons/fa";
import { getAllIndustriesFirstRow, getAllIndustriesSecondRow } from "@/data/industries"
import { FaGlobe } from "react-icons/fa";

export default function AboutBranches() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/philippines.jpg"
                title="About Us"
                subtitle="Industries"
                description="Over 2,000 Filipino workers deployed all across Japan"
            />

            {/* <BranchLocator /> */}
            <section className="mt-5 mb-5">
                <div className="header">
                    <h2 className="title">Our Industries</h2>
                    <p className="subtitle">We provide skilled and dependable Filipino workers to support Japan's growing industries.</p>
                </div>
                <div className="row m-0 justify-content-center">
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            {
                                getAllIndustriesFirstRow().map((item,index) => (
                                    <div className="col-md-2" key={index}>
                                        <JobCard 
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                            icon={item.icon}
                                        />
                                    </div>
                                ))
                            }
                        </div>

                        {/* SECOND ROW */}
                        <div className="row justify-content-center mt-3">
                            {
                                getAllIndustriesSecondRow().map((item,index) => (
                                    <div className="col-md-2" key={index}>
                                        <JobCard
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                            icon={item.icon}
                                        />
                                    </div>
                                ))
                            }
                            

                            {/* sakop 2 columns */}
                            <div className="col-4">
                                
                            <div className="d-flex">
                                <div >
                                    <span className="badge rounded-circle p-3" style={{background:"#CC121B",border:"5px solid white"}}>
                                        <FaGlobe style={{fontSize:"25px",color:"white"}} />
                                    </span>
                                </div>
                                <div style={{marginLeft:"20px"}}>
                                    <span className="title" style={{fontSize:"18px",fontWeight:"bold"}}>
                                        Map of Japan & Deployment Areas
                                    </span>
                                    <p className="subtitle" style={{fontSize:"14px",color:"#555"}}>
                                        Explore our deployment areas across Japan and see where our Filipino workers are making a difference.
                                    </p>
                                </div>
                            </div>
                            
                            <div>
                                <img
                                    src="/img/default.png"
                                    alt="Map of Japan"
                                    className="img-fluid rounded-4 shadow-sm"
                                    style={{
                                        width: "100%",
                                        height: "300px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}