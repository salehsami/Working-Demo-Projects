import { useState } from "react"
import './index.css';

import Block from "./Block"

import React from "react"

const Table = () => {

    const [state, setstate] = useState(Array(9).fill(null));

    return (
        <>
		<div className = "Table-Container">
		<div className = "container-Row">
            <Block/>
		    <Block/>
		    <Block/>
        </div>
            

		<div className = "container-Row">
		    <Block/>
		    <Block/>
		    <Block/>
		</div>

		<div className = "container-Row">
		    <Block/>
		    <Block/>
		    <Block/>
		</div>
            
        </div>
        </>
)
}

export default Table