import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";

export function JapaneseCultureList(){
    return [
        {
            icon:<RiTeamFill style={{fontSize:"2.5em"}} />,
            title: "日本文化・生活マナー",
            description: "日本での生活や職場に円滑に適応できるよう、日本の文化、生活習慣、職場でのマナーやルールについて学びます。",
            image:{
                img1:"/img/japanese/g1-img1.jpg",
                img2:"/img/japanese/g1-img2.jpg",
                img3:"/img/japanese/g1-img3.jpg",
            
            },
            videoId:"1vIU3R-BIDQ"
            
        },
        {
            icon:<FaUser style={{fontSize:"2.5em"}} />,
            title: "あいさつ指導",
            description: "日本社会において重要な「あいさつ」の習慣を身につけ、相手に好印象を与えられるコミュニケーション能力を育成します。",
            image:{
                img1:"/img/rules/DSC04557.jpg",
                img2:"/img/japanese/g2-img2.jpg",
                // img3:"/img/manners/greet3.jpg",
              
            }
        },
        {
            icon:<IoCalculator style={{fontSize:"2.5em"}} />,
            title: "日本式共同生活プログラム",
            description: `日本での共同生活を想定した寮生活を通じて、規律、協調性、清潔意識、責任感を身につけます。`,
            image:{
                img1:"/img/japanese/g3-img1.jpg",
                img2:"/img/japanese/g3-img2.jpg",
                img3:"/img/japanese/g3-img3.jpg",
            },
            videoId:"1vIU3R-BIDQ"
          
        },
        {
            icon:<GiInjustice style={{fontSize:"2.5em"}} />,
            title: "ごみ分別・リサイクル教育",
            description: "日本での生活に欠かせないごみの分別方法やリサイクルのルールを学び、環境への意識を高めます。",
            image:{
                img1:"/img/japanese/g4-img1.jpg",
                img2:"/trash.jpg",
                // img3:"/img/manners/recycle3.jpg",
               
            }
        },
        
    ]
}


export function getAccount(){
    return {
            icon:<IoDocumentSharp style={{fontSize:"2.5em"}} />,
            title: "元技能実習生による指導",
            description: `日本での就労経験を持つ元技能実習生が、自身の経験をもとに実践的なアドバイスや指導を行います。`,
            image:{
                img1:"/img/japanese/g5-img1.jpg",
                img2:"/img/japanese/g5-img2.jpg",
                img3:"/img/japanese/g5-img3.jpg",
            }

        }
}