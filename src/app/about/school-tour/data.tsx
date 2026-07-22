import { IoIosBed } from "react-icons/io";
import { MdLocalLaundryService, MdPlace  } from "react-icons/md";
import { GrCafeteria, GrWorkshop  } from "react-icons/gr";
import { RiGroup3Fill } from "react-icons/ri";

export default function getData(){
    return [
        {
            image:"/スクリーンショット 2026-07-18 午前12.05.19.png",
            icon:<IoIosBed />,
            title:"学生寮",
            description:"全寮制の環境で、安心・安全に生活しながら学習に集中できます。共同生活を通して、日本で必要な生活習慣や協調性も身につけます。",
            number:"01",
        },
        {
            image:"/広場.jpg",
            icon:<MdPlace />,
            title:"広場",
            description:"毎朝、全員で体操と朝会を行い、一日の始まりを元気よく迎えます。",
            number:"02",
        },
        {
            image:"/ランドリーエリア.png",
            icon:<MdLocalLaundryService />,
            title:"ランドリーエリア",
            description:"日々の洗濯を自分で行うことで、自立した生活力を育てています。",
            number:"03",
        },
        {
            image:"/食堂.jpg",
            icon:<GrCafeteria />,
            title:"食堂",
            description:"食堂では栄養バランスに配慮した食事を提供し、箸を使った食事を通して日本での生活にも慣れていきます。",
            number:"04",
        },
        {
            image:"/面接室.jpg",
            icon:<RiGroup3Fill />,
            title:"面接室",
            description:"安定した通信環境を備え、オンライン面接はもちろん、対面での面接にも対応しています。",
            number:"05",
        },
        {
            image:"/ChatGPT Image 2026年7月21日 21_07_38.png",
            icon:<GrWorkshop />,
            title:"溶接実技練習スペース",
            description:"TESDA認証を受けた溶接実技スペースでは、候補者の実技をその場で確認し、技術力を評価しながら面接を実施できます。",
            number:"06",
        },
        {
            image:"/classroom pic.png",
            icon:<GrWorkshop />,
            title:"教室",
            description:"明るく快適な教室で、日本語や専門知識を集中して学べる環境を整えています。",
            number:"07",
        },
        {
            image:"/Gemini_Generated_Image_exr4v4exr4v4exr4.png",
            icon:<GrWorkshop />,
            title:"事務所",
            description:"経験豊富な講師が常駐し、学習や生活に関する相談をいつでもサポートします。",
            number:"08",
        }
    ]
}