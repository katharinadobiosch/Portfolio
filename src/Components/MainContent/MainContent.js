import React from "react";

// ? Main scss

import styles from "../MainContent/MainContent.module.scss";

// ? All Component and View imports
import Welcome from "../../Views/Welcome/Welcome";
import About from "../../Views/About/About";
import Skills from "../../Views/Skills/Skills";
import Projects from "../../Views/Projects/Projects";

const MainContent = () => {
    return (
        <>
            <div className={styles["main-container"]}>
                <div className={styles["content-container"]}>
                    <Welcome />
                    {/* <About /> */}

                    {/* ABOUT */}
                    <About />
                    <Skills />
                    <Projects />
                </div>
            </div>
        </>
    );
};

export default MainContent;
