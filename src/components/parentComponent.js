import React from 'react';
import ChildComponent from './childComponent';

class ParentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parentName:"Parent"
        }
        this.greetParent=this.greetParent.bind(this);
    }
    greetParent(child){
        alert(`Hello ${this.state.parentName} from ${child}`);
    }
    render(){
        return(
            <div>
            <ChildComponent parentHandler={this.greetParent}/>
            </div>
        );
    }
}
export default ParentComponent;