import React,{Component} from 'react';

class UserGreeting extends Component{
    constructor(props) {
        super(props);
        this.state={
            loggedIn:true
        }
    }
    render(){
        return(
            this.state.loggedIn && <div>Welcome Pratim</div>
/*            this.state.loggedIn ?
            <div>Welcome Pratim</div> :
            <div>Welcome User</div>
*/        );
    }
}
export default UserGreeting;