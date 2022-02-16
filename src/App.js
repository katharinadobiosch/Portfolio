import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// ? Main scss
import styles from "./Styling/app.module.scss";

// ? All Component and View imports
import LoadingBar from "./Components/LoadingBar/LoadingBar";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Hamburger from "./Components/Hamburger/Hamburger";
import Modal from "./Components/Modals/Modal/Modal";

const App = () => {
    return (
        <>
            <LoadingBar />
            <Header />
            <MainContent />
            {/* <BrowserRouter> */}
            {/* <Routes>
                <Route
                    path="/portfolio/project/:id"
                    element={<Modal />}
                ></Route>
            </Routes> */}
            {/* <Link to="/portfolio/project/:id" element={<Modal />}></Link> */}

            {/* </BrowserRouter> */}
        </>
    );
};

export default App;
