import React, { Component } from 'react'; // (1)

export default class Counter extends Component { // (2)
    constructor(props) { // (3)
        super(props);
        this.state = {
            count: 0,
            result: null
        }
    }


    increment = (x) => {
        return x += 1
    }

    findResult = (x) => {
        if (x >= 3) {
            return "Limit Reached";
        } else
            return "";
    }

    handleClick = () => {
        const currentCount = this.increment(this.state.count);
        const currentResult = this.findResult(currentCount);
        if (currentCount > 3) {
            this.setState({
                count: 0,
                result: ""
            })
        } else
            this.setState({
                count: currentCount,
                result: currentResult
            })
            
    }


    render() { // (4)
        const currCount = this.state.count;
        const result = this.state.result;
        return ( // (5)
            <div className="counter">
                <h2 className="current-count">{currCount}</h2>
                <h3 className="result" style={{ color: "red" }}>{result}</h3>
                <button className="increment"onClick={this.handleClick}>Increase</button>
            </div>
        )
    }
}