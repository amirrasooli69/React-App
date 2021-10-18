import React, {Component} from "react";
import Car from "./Car";

class App extends Component {
    number= 10;
    render(){
        return (
            <>
           <h1> my labtops:</h1>
            <Car brand="SAMSUNG" cpu="i7"/>
            <Car brand="APPLE" cpu="i9"> I love this labtop </Car>
            <Car brand="ACER" cpu="i5"/>



            </>

        )
    }
}

export default App;