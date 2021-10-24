import React, { Component } from 'react';
import './App.css';

class UserC extends Component {
    constructor() {
        super();
        this.state = {
            name: "Amir",
            age: 30
        }
    }
    render() {
        const {name , age } = this.state;
        const {lastName , job} = this.props;
        return (
            <div>
                <p className= 'header'>I am {name} {lastName} and my age is {age}</p>
                <p> my job's {job} </p>
            </div>
        );
    }
}

export default UserC;