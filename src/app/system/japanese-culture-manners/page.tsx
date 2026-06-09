import Banner from "@/components/Banner";
import s from '@/styles/manners.module.css'
import ItemSection from "./ItemSection";


export default function JapaneseCultureManners() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/31383.jpg"
                title="System"
                subtitle="Japanese Culture and Manners"
                description="just as important as Japanese language"
            />
            
            <ItemSection
                headTitle={
                    <>
                        <span className="text-white">Japanese</span> Cultural Manners
                    </>
                }
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos illo minus expedita aliquid id similique fugit eveniet nemo, debitis corrupti tenetur, alias quae eos saepe impedit obcaecati sapiente maxime?"
                imageLeft="/img/manners/noShoes.jpg"
                imageRight="/img/manners/fuji.jpg"
                imageCenter="/img/manners/noShoes2.jpg"
            />
            
            <div className={s.parallax} style={{backgroundImage:"url('/img/banner/31383.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        <span className="text-white">Japanese</span> Greetings
                    </>
                }

                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos illo minus expedita aliquid id similique fugit eveniet nemo, debitis corrupti tenetur, alias quae eos saepe impedit obcaecati sapiente maxime?"
                imageLeft="/img/manners/greet1.jpg"
                imageRight="/img/manners/greet2.jpg"
                imageCenter="/img/manners/greet3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/garbage.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        <span className="text-white">Sustainable</span> Recycling 
                    </>
                }

                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos illo minus expedita aliquid id similique fugit eveniet nemo, debitis corrupti tenetur, alias quae eos saepe impedit obcaecati sapiente maxime?"
                imageLeft="/img/manners/recycle2.jpg"
                imageRight="/img/manners/recycle1.jpg"
                imageCenter="/img/manners/recycle3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/mentor.png')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        <span className="text-white">Learning</span> from Ex Trainee Teachers 
                    </>
                }

                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos illo minus expedita aliquid id similique fugit eveniet nemo, debitis corrupti tenetur, alias quae eos saepe impedit obcaecati sapiente maxime?"
                imageLeft="/img/manners/mentor1.jpg"
                imageRight="/img/manners/mentor2.jpg"
                imageCenter="/img/manners/mentor3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/stayin.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        <span className="text-white">Japanese</span> Stay-in System 
                    </>
                }

                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quos illo minus expedita aliquid id similique fugit eveniet nemo, debitis corrupti tenetur, alias quae eos saepe impedit obcaecati sapiente maxime?"
                imageLeft="/img/manners/stay3.jpg"
                imageRight="/img/manners/stay2.jpg"
                imageCenter="/img/manners/stay1.jpg"
            />
        </>
    );
}