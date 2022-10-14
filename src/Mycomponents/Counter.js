import React, { useState } from 'react'

function Counter() {
    let [count,setCount] =useState(0)
    let Increase=() => {
        setCount(count+1)
    }
    let Dncrease=() => {
        setCount(count-1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increase}>Icrease</button>
        <button onClick={Dncrease}>Decrease</button>
    </div>
  )
}
export default Counter
