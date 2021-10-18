import React, {Component} from "react";
import Hi from "./Hi";

class App extends Component {
    render(){
        return (
            <>
            <Hi/>
            <div>
                <h1>Amir</h1>
            </div>
            <Hi/>
            <p>Hellow world</p>
            </>
        )
    }
}

export default App;