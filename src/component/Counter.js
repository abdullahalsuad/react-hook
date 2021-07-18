import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    let i = 0;
    const addFive = () => {
        while (i < 5){
            setCount((prevState) => prevState + 1 )
            i += 1;
        }
    }
    return (
        <div>
            {count}
            <p>
                <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                    Add 1 
                </button>
                <br></br>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </div>
    )
}
