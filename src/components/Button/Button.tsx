import s from './Button.module.css'
import React from "react";

type ButtonPropsType = {
    value: string
    disabled?: boolean
    conditions?: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <div className={s.button}>
            <button className={props.disabled ? s.btnDis : `${s.btn} ${s.btn1}`}
                    onClick={props.conditions}
                    disabled={props.disabled}>
                {props.value}
            </button>
        </div>
    )
}