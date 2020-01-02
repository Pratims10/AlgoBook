import React from 'react'
import NameDetails from './nameDetails';

function Namelist() {
    const names=[
        {
            id:1,
            name:"Shubham",
            age:47
        },
        {
            id:2,
            name:"Pratim",
            age:21
        },
        {
            id:3,
            name:"Abhishe",
            age:32
        }];
        const names2=["A","B","C","A"];
    const op=names2.map((x,index)=>{
        return(
            <h2 key={index}>{index}   {x}</h2>
        )}
    );
    return (
        <div>
        {op}
        </div>
    )
}
export default Namelist;