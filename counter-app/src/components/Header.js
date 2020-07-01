import React, { Component } from 'react';

export default class Header extends Component {
    render() { // (3)
        return (
            <div className="header">
                <h1>Counter App</h1>
            </div>
        )
    }
}