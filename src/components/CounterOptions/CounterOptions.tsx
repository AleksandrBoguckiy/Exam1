import s from "./CounterOptions.module.css";
import React from "react";
import {Button} from "../Button/Button";

export const CounterOptions = () => {
    return (
        <div className={s.counter}>
            <div className={s.inputBlock}>
                <div className={s.inputMax}>
                    max value: <input/>
                </div>
                <div className={s.inputMax}>
                    start value: <input/>
                </div>
            </div>
            <div className={s.button}>
                <Button value='SET'/>
            </div>
        </div>
    )
}