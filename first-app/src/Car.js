// import React , {Component} from "react";
import React from "react";


// class Car extends Component {
//     render() {
//         return (
//             <p>
//                 My labtob brand is {this.props.brand} and it has core {this.props.cpu} cpu. {this.props.children}
//             </p>
//         )
//     }
// }

const Car = (props) => {
    return (
            <p>
                My labtob brand is {props.brand} and it has core {props.cpu} cpu. {props.children}
            </p>
    )
}

export default Car;