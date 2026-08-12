import { RiTeamFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GiInjustice } from "react-icons/gi";
import { IoDocumentSharp, IoCalculator  } from "react-icons/io5";

export function JapaneseCultureList(t:any){
    return [
        {
            icon:<RiTeamFill style={{fontSize:"2.5em"}} />,
            title: t('item1'),
            description: t('item1Desc'),
            image:{
                img1:"/img/japanese/g1-img1.jpg",
                img2:"/img/japanese/g1-img2.jpg",
                img3:"/img/japanese/g1-img3.jpg",
            
            },
            videoId:"qf6uQPhrlgk"
            
        },
        {
            icon:<FaUser style={{fontSize:"2.5em"}} />,
            title: t('item2'),
            description: t('item2Desc'),
            image:{
                img1:"/img/rules/DSC04557.jpg",
                img2:"/img/japanese/g2-img2.jpg",
                // img3:"/img/manners/greet3.jpg",
              
            }
        },
        {
            icon:<IoCalculator style={{fontSize:"2.5em"}} />,
            title: t('item3'),
            description: t('item3Desc'),
            image:{
                img1:"/img/japanese/g3-img1.jpg",
                img2:"/img/japanese/g3-img2.jpg",
                img3:"/img/japanese/g3-img3.jpg",
            },
            videoId:"lfTr8dA4nk4"
          
        },
        {
            icon:<GiInjustice style={{fontSize:"2.5em"}} />,
            title: t('item4'),
            description: t('item4Desc'),
            image:{
                img1:"/img/japanese/g4-img1.jpg",
                img2:"/trash.jpg",
                // img3:"/img/manners/recycle3.jpg",
               
            }
        },
        
    ]
}


export function getAccount(t:any){
    return {
            icon:<IoDocumentSharp style={{fontSize:"2.5em"}} />,
            title: t('item5'),
            description: t('item5Desc'),
            image:{
                img1:"/img/japanese/g5-img2.jpg",
                img2:"/img/japanese/g5-img1.jpg",
                img3:"/img/japanese/g5-img3.jpg",
            }

        }
}