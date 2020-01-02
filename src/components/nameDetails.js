import React from 'react'

function NameDetails({x}) {
    return (
        <div>
        <h2>Hi, I am {x.name}. I am {x.age} years old.</h2>
        </div>
    );
}

export default NameDetails
