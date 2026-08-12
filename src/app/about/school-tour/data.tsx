import { IoIosBed } from "react-icons/io";
import { MdLocalLaundryService, MdPlace  } from "react-icons/md";
import { GrCafeteria, GrWorkshop  } from "react-icons/gr";
import { RiGroup3Fill } from "react-icons/ri";

export default function getData(t:any){
    return [
        {
            image:"/広場.jpg",
            icon:<MdPlace />,
            title:t("item1"),
            description:t("item1Desc"),
            number:"01",
        },
        {
            image:"/食堂.jpg",
            icon:<GrCafeteria />,
            title:t("item2"),
            description:t("item2Desc"),
            number:"02",
        },
        {
            image:"/ChatGPT Image 2026年7月21日 21_07_38.png",
            icon:<GrWorkshop />,
            title:t("item3"),
            description:t("item3Desc"),
            number:"03",
        },
        {
            image:"/classroom pic.png",
            icon:<GrWorkshop />,
            title:t("item4"),
            description:t("item4Desc"),
            number:"04",
        },
        {
            image:"/Gemini_Generated_Image_exr4v4exr4v4exr4.png",
            icon:<GrWorkshop />,
            title:t("item5"),
            description:t("item5Desc"),
            number:"05",
        },
        {
            image:"/面接室.jpg",
            icon:<RiGroup3Fill />,
            title:t("item6"),
            description:t("item6Desc"),
            number:"06",
        },
        {
            image:"/スクリーンショット 2026-07-18 午前12.05.19.png",
            icon:<IoIosBed />,
            title:t("item7"),
            description:t("item7Desc"),
            number:"07",
        },
        
        {
            image:"/ランドリーエリア.png",
            icon:<MdLocalLaundryService />,
            title:t("item8"),
            description:t("item8Desc"),
            number:"08",
        }
        
        
    ]
}