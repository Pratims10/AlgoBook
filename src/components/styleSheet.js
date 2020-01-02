import React from 'react';
import './myStyle.css'


const inlinestyle={
    fontSize: '100px',
    color: 'red'
}
function styleSheet() {
    return (
        <div className="mystl">
            <h1 style={inlinestyle}>Stylesheet</h1>
        </div>
    )
}

export default styleSheet