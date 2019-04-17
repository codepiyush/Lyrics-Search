import React from "react";
import { Consumer } from "./context";

class Main extends React.Component {
    render() {

        return (
            <Consumer>
                {value => {
                    console.log(value);
                }
                }
            </Consumer>

        )
    }
}
export default Main;