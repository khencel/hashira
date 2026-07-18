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
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, placeat accusantium, inventore iusto minima doloribus dicta harum.",
            number:"01",
        },
        {
            image:"/広場.jpg",
            icon:<MdPlace />,
            title:"広場",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, placeat accusantium, inventore iusto minima doloribus dicta harum.",
            number:"02",
        },
        {
            image:"/ランドリーエリア.png",
            icon:<MdLocalLaundryService />,
            title:"ランドリーエリア",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, placeat accusantium, inventore iusto minima doloribus dicta harum.",
            number:"03",
        },
        {
            image:"/食堂.jpg",
            icon:<GrCafeteria />,
            title:"食堂",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, placeat accusantium, inventore iusto minima doloribus dicta harum.",
            number:"04",
        },
        {
            image:"/面接室.jpg",
            icon:<RiGroup3Fill />,
            title:"面接室",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, placeat accusantium, inventore iusto minima doloribus dicta harum.",
            number:"05",
        },
        {
            image:"/welding.png",
            icon:<GrWorkshop />,
            title:"溶接実技練習スペース",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, placeat accusantium, inventore iusto minima doloribus dicta harum.",
            number:"06",
        }
    ]
}