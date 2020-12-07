import React from 'react';
const DateTime=()=>{
const date=new Date();
    return(
    <div className="datetime">{`
    Your localtime is: 
    ${date.toLocaleDateString()} - 
    ${date.toLocaleTimeString()}
    
    `}</div>
    )
}
export default DateTime