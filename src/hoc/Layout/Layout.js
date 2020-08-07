import React from 'react';
import Uncomma from "../../components/Uncomma/Uncomma";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
    return (
        <div>
            <Uncomma/>
            <React.Fragment>
                {props.children}
            </React.Fragment>
            <Footer />
        </div>
    )
}

export default Layout;