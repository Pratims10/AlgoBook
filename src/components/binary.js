import React, { Component } from 'react'
import "./myStyle.css";

class Binary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            index:0,
            ar:[3,5,6,8,9,10]
        }
    }
    linearSearch(){
        const srch=8;
        for(let i=0;i<5;i++){
            this.setState(prevState=>({
                index:prevState.index+1
            }),function(){
/*                for(let qq=0;qq<=1000000000;qq++)
                qq++;
                console.log(i);*/
                this.render();
            }
            );
        }
    }

    render() {
        console.log("a"+this.state.index+"e");
        const ui=this.state.ar.map((x,index)=>
        {
            if(this.state.index===index)
            return(<div key={index} className="red">{x}</div>);
            else
            return(<div key={index} className="q">{x}</div>);
        });
        return (
            <center>
            <div className="mystl">
                {ui}
            </div>
            <button onClick={()=>this.linearSearch()}>Run</button>
            </center>
        )
    }
}

export default Binary
