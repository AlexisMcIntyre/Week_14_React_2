import React from 'react';

export default class Counter extends React.Component{

constructor(props) {
    super(props);
    this.state = {
        name: props.name,
        count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
}

handleClick () {
    this.setState(state => ({count: state.count +1}));
}

render () {
    return (
        <div>
            <h2>Rating:</h2>
            <button className="submitbutton"
                onClick={this.handleClick}>
                {this.state.name} {this.state.count}
            </button>
        </div>
    );
}
}