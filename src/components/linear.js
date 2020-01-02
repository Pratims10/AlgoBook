import React, { Component } from 'react'
import './myStyle.css';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Linear extends Component {
    render(){
        const ui=this.props.ar.map((x,index)=>
        {
            if(this.props.index===index)
            {
                if(this.props.ar[this.props.index]!==this.props.srch)
                return(<div key={index} className="def red col-2 col-sm-2 col-md-1 col-1 align-self-center">{x}</div>);
                else
                {
                    return(<div key={index} className="def green col-2 col-sm-2 col-md-1" onLoad={this.props.check()}>{x}</div>);
                }
            }
            else
            return(<div key={index} className="def col-2 col-sm-2 col-md-1 q col-1">{x}</div>);
        });
        return (
            <center>
            <div className="mystl container">
                <div className="row">
                    {ui}
                </div>
            </div>
            </center>
        )
    }
}

export default Linear