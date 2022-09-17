import { FC } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import CourseOverview from "../components/CourseOverview/CourseOverview";
import AttestationCard from "../components/AttestationCard/AttestationCard";

import { homeProps } from "../index.types";

import style from './index.module.scss';

const Home:FC<homeProps> = ( { courses } ) => {
    return (
        <>
            <Head>
                <title> Обучение | Специализиррованные дисциплины </title>
            </Head>
            <main className={style.main}>
                <h1 className={style.title}> Специализированные дисциплины </h1>

                <section className={style.courses}>
                    {courses.map( course => {
                        return <CourseOverview 
                                        title={course.title} 
                                        subjects={course.specializedSubjects} 
                                        id={course._id} 
                                        key={course._id}/>    
                    })} 
                </section>

                <section className={style.attestation}>
                    <AttestationCard
                                title="Практические модули"
                                text={["Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе"]}
                                color = 'red'
                                corner/>
                    <AttestationCard
                                title="Итоговая аттестация"
                                text={[
                                    "Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)",
                                    "Защита итоговой аттестационной работы"
                                ]}
                                bullets/>
                </section>
            </main>
        </>
    )
}

// обновление данных происходит раз в день, выбрал статический рендер с ревалидацией дважды в сутки
export const getStaticProps:GetStaticProps = async () => {
    const response = await fetch(`https://api-moscow-mba.herokuapp.com/products`);
    const courses = await response.json()

    const coursesForPageCount = 5;
    const coursesSliced = courses.slice(0, coursesForPageCount);

    const dayInSeconds = 60 * 60 * 12;

    return {
        props: {
            courses: coursesSliced
        },
        revalidate: dayInSeconds
    }
} 

export default Home 