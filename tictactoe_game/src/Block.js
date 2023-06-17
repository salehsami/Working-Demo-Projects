import React from 'react'
import './index.css';

const Block = (props) => {
    return (
        <>		<div className = "Block-Container">{props.value}</div>
		<div className = "Block-Container">{props.value}</div>
            <div className="Block-Container">{props.value}</div>
            </>

)
}

export default Block