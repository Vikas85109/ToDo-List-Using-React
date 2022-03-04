import React, { useState } from 'react'




const DigitalTime=()=>{
    let time=new Date().toLocaleTimeString();
    
    const [ctime,setCtime]=useState(time);
    


    const Update=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(Update,1000)

    
    return(
        <>
        <h3 style={{marginBottom:"20px" , color:"brown"}}>Time Now : {ctime}</h3>
        </>
    )
}

export default DigitalTime;