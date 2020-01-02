import React from 'react';

class eventbind extends React.Component{
    constructor(props) {
        super(props);
        this.clickHandler=this.clickHandler.bind(this);
        this.state={
            message:"Welcome"
        }
    }
    clickHandler(){
        this.setState({
           message:"Good Bye" 
        });
        console.log(this);
    }
//clickHandler=()=>{
//    this.setState({
//        message:"Good Bye"
//    });
//}
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
{/*                <button onClick={this.clickHandler.bind(this)}>Click Me</button>*/}
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}
export default eventbind;