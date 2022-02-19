import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// ? Main scss

import styles from "../MainContent/MainContent.module.scss";

// ? All Component and View imports
import Welcome from "../../Views/Welcome/Welcome";
import About from "../../Views/About/About";
import Skills from "../../Views/Skills/Skills";
import Projects from "../../Views/Projects/Projects";
import Contact from "../../Views/Contact/Contact";
import Modal from "../../Components/Modals/Modal/Modal";

const MainContent = () => {
    return (
        <>
            <div className={styles["main-container"]}>
                <div className={styles["content-container"]}>
                    <Welcome />

                    <About />
                    <Skills />
                    <Projects />
                    <Contact />

                    {/* <BrowserRouter> */}
                    <Routes>
                        <Route
                            path="/portfolio/:id"
                            element={<Modal />}
                        ></Route>
                    </Routes>
                    {/* </BrowserRouter> */}
                    {/* <Router>
                        <Route path="/portfolio/:id" element={<Modal />} />
                    </Router> */}
                </div>
            </div>
        </>
    );
};

export default MainContent;
