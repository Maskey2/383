import React from "react";
import FarmField from './FarmField'
import Footer from './Footer'
import Navbar from './Nav'
import Login from "../account/Login";
import Signup from "../account/Signup";
import Contact from "./Contact";

function Home() {
    return (
        <div>
            <Navbar />
            <FarmField />
            <Footer />
            {/* <Login />
            <Signup />
            <Contact /> */}
        </div>
    )
}
export default Home;