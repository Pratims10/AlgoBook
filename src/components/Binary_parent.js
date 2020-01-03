import React, { Component } from 'react'
import Binary from './binary';
import './myStyle.css';

const ar=['-4','5','53','66','96','100','200','538','700','1000'];
const n=ar.length;

class BinaryParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
             l:0,
             r:n-1,
             start:0,
             search:'100',
             flag:false,
        }
    }
    
    check=()=>{
        this.setState({
            flag:true
        })
    }
    shouldComponentUpdate(nextProps,nextState){
            if(this.state.flag)
            return false;
            return true;
    }

    reset=()=>{
        this.setState({
             l:0,
             r:n-1,
             start:0,
             search:'',
             flag:false
        },function(){
            this.forceUpdate()
        })
    }

    binarySearch(){
        if(this.state.l>this.state.r)
        return;
        if(this.state.flag===true)
        return;
        setTimeout(() => {
            let mid=Math.floor((this.state.l+this.state.r)/2);
            console.log(this.state.search+" "+ar[mid]);
            if(parseInt(this.state.search)>parseInt(ar[mid]))
            {
                console.log("inside right "+this.state.search+" "+ar[mid]);
//                console.log("right");
                this.setState(prev=>({
                    l:mid+1,
                    start:1
                }),function(){
                    console.log("D "+this.state.l);
                })
            }
            else if(parseInt(this.state.search)<parseInt(ar[mid])){
                console.log("left");
                this.setState(prev=>({
                    r:mid-1,
                    start:1
                }),function(){
                    console.log("S "+this.state.r);
                })
            }
            else
            {
                this.setState(prev=>({
                    flag:true,
                    start:0
                }))
            }
        }, 1000);
    }

    searchElementChange=(event)=>{
        this.setState({
            search:event.target.value
        })
    }

    render() {
        if(this.state.start===1)
        return (
            <center>
            <div>
                <Binary l={this.state.l} r={this.state.r} ar={ar} srch={this.state.search} check={this.state.check} />
                <br/><br/>
                <label>Enter Search Element</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' value={this.state.search} onChange={this.searchElementChange} className='txt txt2'></input>
                <br/>
                <button className="button button4" onClick={this.binarySearch()}>Run</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="button button4" type='submit' onClick={()=>this.reset()}>Reset</button>
            </div>
            </center>
        )
        else
        return (
            <center>
            <div>
                <Binary l={this.state.l} r={this.state.r} ar={ar} srch={this.state.search} check={this.state.check}/>
                <br/><br/>
                <label>Enter Search Element</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' value={this.state.search} onChange={this.searchElementChange} className='txt txt2'></input>
                <br/>
                <button className="button button4" onClick={()=>this.binarySearch()}>Run</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="button button4" type='submit' onClick={()=>this.reset()}>Reset</button>
            </div>
            </center>
        )
    }
}

export default BinaryParent
