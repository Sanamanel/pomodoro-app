import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                {"Hello"} {this.props.name}
            </div>
        );
    }
}

const mountNode = document.querySelector("#app");
ReactDOM.render(<HelloMessage name={"Rachida"} />, mountNode);
