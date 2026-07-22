import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";

export function getDepartmentList(){
    return [
        {
            icon:<RiTeamFill style={{fontSize:"2.5em"}} />,
            title: "Japanese",
            description: "JapaneseDesc",
            image:{
                img1:"/img/rules/DSC02767.jpg",
                img2:"/img/rules/g1-img2.jpg",
                // img2:"/img/rules/DSC04557.jpg",
                img3:"/img/rules/g1-iimg3.jpg",
            },
            videoId:"dwBm36gS7yw"
        },
        {
            icon:<FaUser style={{fontSize:"2.5em"}} />,
            title: "Strike",
            description: "StrikeDesc",
            image:{
                img1:"/img/rules/rules1.JPG",
                img2:"/img/rules/g2-img2.jpg",
              
            }
        },
        {
            icon:<GiInjustice style={{fontSize:"2.5em"}} />,
            title: "Mock",
            description: "MockDesc",
            image:{
                img1:"/img/rules/DSC02747.jpg",
                img2:"/img/rules/DSC02878.jpg",
                img3:"/img/rules/g3-img3.jpg",
               
            },
            videoId:"T1dGAqWIum0"
        },
        {
            icon:<IoDocumentSharp style={{fontSize:"2.5em"}} />,
            title: "Weekend",
            description: `WeekendDesc`,
            image:{
                img1:"/img/rules/g4-img2.jpg",
                img2:"/img/rules/76ecfa3a-4519-4853-8c93-0940cc96d151.jpg",
                
            }
        },
        
    ]
}


export function getAccount(){
    return {
            icon:<IoCalculator style={{fontSize:"2.5em"}} />,
            title: "Rebatching",
            description: `RebatchingDesc`,
            image:{
                img1:"/img/rules/g5-img1.jpg",
                img2:"/img/rules/g5-img2.jpg",
                img3:"/img/rules/g5-img3.jpg",
            }
        }
}