import React from 'react'
import Child from './child.js'
const Parent=()=>{
    const name="reshmi";
    const object={
        name:"passing object using prop",
        age:21,
       
    }
    const arr=[1,2,3,4] 
    return(
        <div>
            <Child name={name} obj={object} arr={arr}/>
        </div>
    )
}

export default Parent 