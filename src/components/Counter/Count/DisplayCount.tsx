import s from "../Counter.module.css";
import React from "react";

type DisplayCountPropsType = {
    count: number
    maxCount: number
}
export const DisplayCount: React.FC<DisplayCountPropsType> = (props) => {
    return (
        <div className={props.count === props.maxCount ? s.countRed : s.count}>
            {props.count}
        </div>
    )
}