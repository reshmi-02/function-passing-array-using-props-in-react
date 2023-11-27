import React from 'react'

const Child=(val)=>{
  
    return(
        <div>
            <h1>Child component</h1>
            <h1>1)passing value from parent to child</h1>
            <p>{val.name}</p>
            <h1>2){val.obj.name}</h1>
            <p>{val.obj.age}</p>
            <h1>3)Passing array using props</h1>
            <p>{val.arr[2]}</p>
        </div>
    )
}

export default Child