import { getGallery } from "./gallery";

const images = getGallery()
    .filter(item =>
        ["interview", "tradetest"].includes(item.category)
    )
    .map(item => item.imageUrl);

const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
};


export function getRollingData() {
    return [
        {
            image: "img/why_placewell/branches-400x267.jpg",
            title: "company",
            description: `companyDesc`,
        },
        {
            image: "img/why_placewell/Executive-Conference-Room-400x267.jpg",
            title: "proficient",
            description: `proficientDesc`
        },
        {
            image: "img/why_placewell/Facade-400x267.jpg",
            title: "proven",
            description: `provenDesc`
        },
        {
            image: "img/why_placewell/govt-400x267.jpg",
            title: "manner",
            description: `mannerDesc`
        },
        {
            image: "img/why_placewell/groupchat-400x267.jpg",
            title: "passionate",
            description: `passionateDesc`
        },
    ]
}

export function getWhyHireFilipino() {
    return [
        {
            image: getRandomImage(),
            title: "well",
            description: `wellDesc`,
        },
        {
            image: getRandomImage(),
            title: "english",
            description: `englishDesc`,
        },
        {
            image: getRandomImage(),
            title: "lowAge",
            description: `lowAgeDesc`,
        },
        {
            image: getRandomImage(),
            title: "lowWage",
            description: `lowWageDesc`,
        },
        {
            image: getRandomImage(),
            title: "filipinoLove",
            description: `filipinoLoveDesc`,
        },
        {
            image: getRandomImage(),
            title: "filipinoLove",
            description: `filipinoLoveDesc`,
        },
        {
            image: getRandomImage(),
            title: "filipinoLove",
            description: `filipinoLoveDesc`,
        },
        {
            image: getRandomImage(),
            title: "filipinoLove",
            description: `filipinoLoveDesc`,
        },
        {
            image: getRandomImage(),
            title: "filipinoLove",
            description: `filipinoLoveDesc`,
        },
    ]
}

export function getAllClient(){
    return [
        {
            image:"/img/client/client1.png"
        },
        {
            image:"/img/client/client2.png"
        },
        {
            image:"/img/client/client3.png"
        },
        {
            image:"/img/client/client4.png"
        },
        {
            image:"/img/client/client5.png"
        },
        {
            image:"/img/client/client6.png"
        },
        {
            image:"img/client/client7.png"
        },
        {
            image:"img/client/client8.png"
        }
    ]
}