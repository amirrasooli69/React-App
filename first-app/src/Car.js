import React , {Component} from "react";

class Car extends Component {
    render() {
        return (
            <p>
                My labtob brand is {this.props.brand} and it has core {this.props.cpu} cpu. {this.props.children}
            </p>
        )
    }
}

export default Car;