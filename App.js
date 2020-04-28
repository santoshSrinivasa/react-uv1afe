import React, { Component } from 'react';
import Usercontainer from "./Usercontainer";
import {Provider} from "react-redux";
import store from "./redux/Store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
       <Usercontainer/>
      </div>
      </Provider>
    );
  }
}

export default App