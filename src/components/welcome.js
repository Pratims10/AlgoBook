import React,{Component} from 'react';

class welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            ctr:0
        };
    }
    increase(){
//        this.setState({
//            ctr:this.state.ctr+1
//        });
        this.setState(prvstate=>({
            ctr:prvstate.ctr+1
        }))
//        alert("sa");
    }
    decrease(){
        this.setState({
            ctr:this.state.ctr-1
        })
    }
    increase5(){
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();
    }
    render(){
        return(
            <div>
                <h2>Count={this.state.ctr}</h2>
                <button onClick={()=>this.increase5()}>Increment</button>
                <button onClick={()=>this.decrease()}>Decrement</button>
            </div>
        );
    }
}
export default welcome;