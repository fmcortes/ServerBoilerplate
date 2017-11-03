import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/app";
import Header from "./components/header";
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
         <div>
            <Header />
            <Route exact path="/" component={App} />
            <Route exact path="/signin" component={Signin} />
         </div>
      </BrowserRouter>
   </Provider>,
   document.querySelector(".container")
);
