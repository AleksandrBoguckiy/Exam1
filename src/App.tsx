import React, {useState} from 'react';
import './App.module.css';
import s from './App.module.css'
import {Counter} from "./components/Counter/Counter";

function App() {

    const maxCount = 5;
    const initCount = 0;

    const [count, setCount] = useState<number>(initCount);

    const changeCount = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    };

    const resetCount = () => {
        setCount(initCount)
    }

    return (
        <div className={s.app}>
            <Counter count={count}
                     callBack={changeCount}
                     callBack1={resetCount}
                     maxCount={maxCount}
                     initCount={initCount}/>
        </div>
    );
}

export default App;
