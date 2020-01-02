import React, { Component } from 'react'
import Linear from './linear';
import './myStyle.css';

const arr=['3','5','4','1','6','7','54','6','32'];
        const n=arr.length;
class LinearParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
             index:0,
             start:0,
             flag:false,
             search:''
        }
        this.check=this.check.bind(this);
    }
    check=()=>{
        this.setState({
            flag:true
        });
    }
    shouldComponentUpdate(nextProps,nextState){
//        console.log("shouldComponentUpdate "+this.state.flag);
        if(this.state.flag)
        return false;
        return true;
    }
    linearSearch(){
        if(this.state.index===n-1)
        return;
        if(this.state.flag===true)
        return;
//        console.log(`${this.state.flag} ${this.state.index}`);
        setTimeout(() => {
            this.setState(prev=>({
                index:prev.index+1,
                start:1
            }))
        }, 400);
    }
    reset(){
//        console.log("reset");
        this.setState({
            flag:false,
            index: 0,
            start:0,
            search:''
        },function(){
            this.forceUpdate()
        });
    }

    searchElementChange=(event)=>{
        this.setState({
            search:event.target.value
        })
    }
    render() {
//        console.log("render() "+this.state.start);
        if(this.state.start===1)
        return (
            <div>
                <Linear ar={arr} index={this.state.index} srch={this.state.search} check={this.check}/>
                <br/><br/>
                <label>Enter Search Element</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' value={this.state.search} onChange={this.searchElementChange} className='txt txt2'></input>
                <br/>
                <button className="button button4" onClick={this.linearSearch()}>Run</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="button button4" type='submit' onClick={()=>this.reset()}>Reset</button>
            </div>
        )
        else{
            return (
                <div>
                    <Linear ar={arr} index={this.state.index} srch={this.state.search} check={this.check}/>
                    <br/><br/>
                    <label>Enter Search Element</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type='text' value={this.state.search} onChange={this.searchElementChange} className='txt txt2'></input>
                    <br/>
                    <button className="button button4" onClick={()=>this.linearSearch()}>Run</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="button button4" type='submit' onClick={()=>this.reset()}>Reset</button>
                </div>
            )
        }
    }
}

export default LinearParent