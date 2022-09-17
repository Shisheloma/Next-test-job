import { FC } from "react";

import CourseModule from "../CourseModule/CourseModule"

import { CourseOverviewPropsTypes } from "./CourseOverview.types";

import style from './courseOverview.module.scss';

const CourseOverview:FC<CourseOverviewPropsTypes> = ({ title, subjects, id }) => {

    const moduleDivider = Math.ceil(subjects.length / 2)
    
    return (
        <article className={style.container}>
            <h2 className={style.title}> {title} </h2>
            <div className={style.modules}>
                <CourseModule subjects={subjects.slice(0, moduleDivider)} index={1} key={id + "_01"}/>
                <CourseModule subjects={subjects.slice(moduleDivider)} index={2} key={id + "_02"}/>
            </div>
        </article>
    )
}

export default CourseOverview