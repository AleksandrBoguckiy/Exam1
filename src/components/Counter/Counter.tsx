import React from "react";
import s from './Counter.module.css'
import {Button} from "../Button/Button";
import {DisplayCount} from "./Count/DisplayCount";

export type CounterPropsType = {
    count: number
    callBack: () => void
    callBack1: () => void
    maxCount: number
    initCount: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {

    return (
        <div className={s.counter}>

            <DisplayCount count={props.count} maxCount={props.maxCount}/>

            <div className={s.button}>

                <Button value='INCREASE' conditions={props.callBack} disabled={props.count === props.maxCount}/>
                <Button value='RESET' conditions={props.callBack1} disabled={props.count === props.initCount}/>

            </div>
        </div>
    )
}
