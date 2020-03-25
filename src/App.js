import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from "./components/features/Contact";
import Home from "./components/features/Home";
import Signup from "./components/account/Signup";
import Login from "./components/account/Login";
import Checkout from './components/features/Checkout'
export default function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
