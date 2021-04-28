import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    componentDidMount(){
        this.intervalId = setInterval(
            ()=>this.tick()
            ,1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    tick = ()=>{
        this.setState({
            date: new Date()
        })
    }
    render(){
        return (
            <div className="clock">
                <p className="sevenSegment" style={{fontSize: 60}}>
                    {this.state.date.toLocaleTimeString()}
                </p>
            </div>
        )
    }
}

export default Clock;