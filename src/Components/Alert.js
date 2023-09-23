import React from 'react'

function Alert(props) {
    const capitalWord=(word)=>{
        if(word==="danger"){
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
        <div style={{height:"55px"}}>
        {props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalWord(props.alert.type)}</strong> : {props.alert.message}
        </div>}
        </div>
    )
    }
export default Alert
