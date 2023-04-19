import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";

function Layout() {
    return (
        <React.Fragment>
            <Navbar />
            <Home />
            {/*}
            <Navbar />
            <Home />*/}
        </React.Fragment>
    );
}

export default Layout;
