import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";

export function getDepartmentList(){
    return [
        {
            icon:<RiTeamFill style={{fontSize:"40px"}} />,
            title: "Japanese",
            description: "JapaneseDesc",
            image:{
                img1:"/img/rules/DSC02767.jpg",
                img2:"/img/rules/DSC04557.jpg",
                img3:"/img/default.png",
            },
            videoId:"1vIU3R-BIDQ"
        },
        {
            icon:<FaUser style={{fontSize:"40px"}} />,
            title: "Strike",
            description: "StrikeDesc",
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
              
            }
        },
        {
            icon:<GiInjustice style={{fontSize:"40px"}} />,
            title: "Mock",
            description: "MockDesc",
            image:{
                img1:"/img/rules/DSC02747.jpg",
                img2:"/img/rules/DSC02878.jpg",
                img3:"/img/default.png",
               
            },
            videoId:"1vIU3R-BIDQ"
        },
        {
            icon:<IoDocumentSharp style={{fontSize:"40px"}} />,
            title: "Weekend",
            description: `WeekendDesc`,
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
                
            }
        },
        
    ]
}


export function getAccount(){
    return {
            icon:<IoCalculator style={{fontSize:"40px"}} />,
            title: "Rebatching",
            description: `RebatchingDesc`,
            image:{
                img1:"/img/default.png",
                img2:"/img/default.png",
                img3:"/img/default.png",
            }
        }
}