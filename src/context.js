import React from "react";

const myContext = React.createContext();

export class Provider extends React.Component {
    constructor() {
        super();
        this.state = {
            lyrics: [
                { name: "abc" },
                { name: "123" }
            ],
            title: "Top Ten Songs",
        }
    }
    render() {
        return (
            <myContext.Provider value={this.state}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}
export const Consumer = myContext.Consumer;