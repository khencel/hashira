"use client";
import Banner from "@/components/Banner";
import s from '@/styles/manners.module.css'
import ItemSection from "./ItemSection";
import { useTranslations } from "next-intl";


export default function JapaneseCultureManners() {
    const t = useTranslations("japaneseCulture");
    return (
        <>
            <Banner
                backgroundImage="/img/banner/31383.jpg"
                title={t('title')}
                subtitle={t('Japanese')}
                description="just as important as Japanese language"
            />
            
            <ItemSection
                headTitle={
                    <>
                        {/* <span className="text-white">Japanese</span> Cultural Manners */}
                        {t('Japanese')}
                    </>
                }
                description={t('JapaneseDesc')}
                imageLeft="/img/manners/noShoes.jpg"
                imageRight="/img/manners/fuji.jpg"
                imageCenter="/img/manners/noShoes2.jpg"
            />
            
            <div className={s.parallax} style={{backgroundImage:"url('/img/banner/31383.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        {/* <span className="text-white">Japanese</span> Greetings */}
                        {t('Greetings')}
                    </>
                }

                description={t('GreetingsDesc')}
                imageLeft="/img/manners/greet1.jpg"
                imageRight="/img/manners/greet2.jpg"
                imageCenter="/img/manners/greet3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/garbage.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        {/* <span className="text-white">Sustainable</span> Recycling  */}
                        {t('Recycling')}
                    </>
                }

                description={t('RecyclingDesc')}
                imageLeft="/img/manners/recycle2.jpg"
                imageRight="/img/manners/recycle1.jpg"
                imageCenter="/img/manners/recycle3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/mentor.png')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        {/* <span className="text-white">Learning</span> from Ex Trainee Teachers  */}
                        {t('Life')}
                    </>
                }

                description={t('LifeDesc')}
                imageLeft="/img/manners/mentor1.jpg"
                imageRight="/img/manners/mentor2.jpg"
                imageCenter="/img/manners/mentor3.jpg"
            />

            <div className={s.parallax} style={{backgroundImage:"url('/img/parallax/stayin.jpg')"}}></div>

            <ItemSection
                headTitle={
                    <>
                        {/* <span className="text-white">Japanese</span> Stay-in System  */}
                        {t('Stay')}
                    </>
                }

                description={t('StayDesc')}
                imageLeft="/img/manners/stay3.jpg"
                imageRight="/img/manners/stay2.jpg"
                imageCenter="/img/manners/stay1.jpg"
            />
        </>
    );
}