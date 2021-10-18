import React, {Component} from "react";

class App extends Component {
    number= 10;
    render(){
        return (

            <p>multiple: {this.number * 2}</p>

        )
    }
}

export default App;