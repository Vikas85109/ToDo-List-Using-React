import React, { useState } from 'react'




const DigitalTime=()=>{
    let time=new Date().toLocaleTimeString();
    let dat=new Date().toDateString();
    
    const [ctime,setCtime]=useState(time);
    


    const Update=()=>{
        time=new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(Update,1000)

    
    return(
        <>
        <h3 style={{marginBottom:"10px" , color:"brown"}}>Today Date : {dat}</h3>
        <h3 style={{marginBottom:"10px" , color:"brown"}}>Time Now : {ctime}  </h3>
        </>
    )
}

export default DigitalTime;