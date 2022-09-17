import { FC, useRef, useState } from 'react';

import { CourseModulePropsTypes } from './CourseModule.types';

import style from './courseModule.module.scss';

const CourseModule:FC<CourseModulePropsTypes> = ({ index, subjects}) => {
    const [opened, setOpened] = useState(false);
    const listNode = useRef<HTMLUListElement>();

    const toggleHandler = () => {
        setOpened(prev => !prev);
        const list = listNode.current;
        if (opened) {
            list.style.maxHeight = null;
          } else {
            list.style.maxHeight = list.scrollHeight + "px";
          }
    };

    return (
        <div className={`${style.container} ${opened ? style.opened : ''}`}>
            <h3 className={style.title} onClick={toggleHandler}> {index} модуль </h3>
            <ul className={style.list} ref={listNode}>
                {subjects.map(subject => 
                    <li className={style.list_item} key={subject.id}> 
                        {subject.string} 
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CourseModule