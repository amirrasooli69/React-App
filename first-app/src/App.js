import React, {Component} from "react";
// import Car from "./Car";
import UserC from "./UserC";
import UserF from "./UserF";
import './App.css'

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
        // this.state = {
        //     name: "Benz",
        //     speed: 250
        // }
        // this.state = {
        //     number: 0,
        // }
    }

    // changeHandler = () => {
    //     this.setState({
    //         name: "BMW",
    //         speed: 200
    //     })
    // }

    // upOne = () => {
    //     // this.setState({
    //     //     number: this.state.number + 1,
    //     // }, () => { console.log(`new number: ${this.state.number}`)})
    //     // console.log(this.state.number);
    //     this.setState((prevState) => ({
    //         number: prevState.number +1,
    //     }))
    //     console.log(this);
    // }

    // upThree = () => {
    //     this.upOne();
    //     this.upOne();
    //     this.upOne();
    // }

    render () {
        return(
            <div >
                {/* <h1>My cars:</h1> */}
                {/* <p>my first car is {this.state.name} and highest speed is {this.state.speed}</p> */}
                {/* <button onClick= {this.changeHandler}>Change state</button> */}
                {/* <h1>now number is: {this.state.number}</h1> */}
                {/* <button onClick= {this.upOne}>Up 1</button> */}
                {/* <button onClick= {this.upThree}>Up 3</button> */}
                <UserC lastName= "Rasooli" job="programmer"/>
                <br/>
                <UserF name= "Jafar" lastName= "Gholi" job= "employeer" age= "45" />

            </div>
        )
    }
}
export default App;