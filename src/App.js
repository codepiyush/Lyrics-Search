import React, { Component } from 'react';
import Navbar from "./navbar"
import { Provider } from "./context"
import Main from "./main";

class App extends Component {

    render() {
        return (
            <Provider>
                <Navbar />
                <Main/>
            </Provider>
        )
    }
}

export default App;