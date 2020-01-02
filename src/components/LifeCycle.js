import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:"Pratim"
        }
        console.log("Constructor");
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }
    render() {
        console.log("render()");
        return (
            <div>
               <div> LifeCycle A</div>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycle
