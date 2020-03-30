import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Contact from "./components/features/Contact";
import Home from "./components/features/Home";
import Signup from "./components/account/Signup";
import Login from "./components/account/Login";
import Checkout from './components/features/Checkout'
import { Provider } from 'react-redux';
import store from './store.js';

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/checkout"><Checkout /></Route>
                    <Route path="/signup"><Signup /></Route>
                    <Route path="/contact"><Contact /></Route>
                    <Route path="/login"><Login /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </Router>
        </Provider>
    );
}
