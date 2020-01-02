import React from 'react';

const Greet= ({name,children})=>{
    return(
        <div>
            <h2>Hello, {name}</h2>
            <p>{children}</p>
        </div>
    );
}
export default Greet;