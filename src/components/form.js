import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            message:'',
            topic:'React'
        }
    }
    usernameChange(event){
        this.setState({
            username:event.target.value
        });
    }
    messageChange=(event)=>{
        this.setState({
            message:event.target.value
        });
    }
    topicChange=(event)=>{
        this.setState({
            topic:event.target.value
        });
    }
    formSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.message} ${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.formSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={(event)=>this.usernameChange(event)}/>
            </div>
            <div>
                <label>Message</label>
                <textarea value={this.state.message} onChange={this.messageChange}></textarea>
            </div>
            <div>
                <label>Choose Topic</label>
                <select value={this.state.topic} onChange={this.topicChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
