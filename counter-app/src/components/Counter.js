import React, { Component } from 'react'; // (1)

export default class Counter extends Component { // (2)
    constructor(props) { // (3)
        super(props);
        this.state = {
            count: 0,
            result: null
        }
    }

    decrement = (x) => {
        return x -= 1;
    }

    decrementResult = (x) => {
        if (x <= 0) {
            return "Cannot Be Decreased Any Further";
        } else 
        return "";
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
                result: currentResult
            })
        } else
            this.setState({
                count: currentCount,
                result: ""
            })

    }



    

    decreClick = () => {
        const currentCount = this.decrement(this.state.count);
        const currentResult = this.decrementResult(currentCount);
        if (currentCount < 0) {
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
                <button className="increment" onClick={this.handleClick}>Increase</button>
                <button className="decrement" onClick={this.decreClick}>Decrease</button>
            </div>
        )
    }
}