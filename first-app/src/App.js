import React, {Component} from "react";
// import Car from "./Car";

// class App extends Component {
//     number= 10;
//     render(){
//         return (
//             <>
//            <h1> my labtops:</h1>
//             <Car brand="SAMSUNG" cpu="i7"/>
//             <Car brand="APPLE" cpu="i9"> I love this labtop </Car>
//             <Car brand="ACER" cpu="i5"/>



//             </>

//         )
//     }
// }

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Benz",
            speed: 250
        }
    }

    changeHandler = () => {
        this.setState({
            name: "BMW",
            speed: 200
        })
    }
    render () {
        return(
            <div>
                <h1>My cars:</h1>
                <p>my first car is {this.state.name} and highest speed is {this.state.speed}</p>
                <button onClick= {this.changeHandler}>Change state</button>
            </div>
        )
    }
}
export default App;