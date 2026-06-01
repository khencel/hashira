import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";

export function getDepartmentList(){
    return [
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: "Japanese Only Space",
            description: "We encourage our students to speak Japanese as much as possible while inside the school.",
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
                img3:"/img/default.png",
            },
            videoId:"1vIU3R-BIDQ"
        },
        {
            icon:<FaUser style={{fontSize:"40px"}} />,
            title: "Strike Out Rule",
            description: "Students who break rules and consistently perform poorly in class may be subjected to warnings or even dismissal from the school.",
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
                img3:"/img/default.png",
            }
        },
        {
            icon:<GiInjustice style={{fontSize:"40px"}} />,
            title: "Mock Tests",
            description: "Our students are required to take multiple JFT mock tests before taking the actual exam. Our mock tests consist of compilations of past JFT questions.",
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
                img3:"/img/default.png",
            },
            videoId:"1vIU3R-BIDQ"
        },
        {
            icon:<IoDocumentSharp style={{fontSize:"40px"}} />,
            title: "Weekend Pass",
            description: `Students are allowed to go home for the weekend if their cumulative average for
            the said week is above 70%.`,
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
                img3:"/img/default.png",
            }
        },
        
    ]
}


export function getAccount(){
    return {
            icon:<IoCalculator style={{fontSize:"40px"}} />,
            title: "Re-batching System",
            description: `We give chances to failing students who have a good attitude and work hard.
            Instead of kicking them out, we transfer them to a lower batch in hopes they give
            an improved performance.`,
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
                img3:"/img/default.png",
            }
        }
}