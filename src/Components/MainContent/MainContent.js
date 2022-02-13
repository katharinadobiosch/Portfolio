import React from "react";

// ? Main scss

import styles from "../MainContent/MainContent.module.scss";

// ? All Component and View imports
import Welcome from "../../Views/Welcome/Welcome";
import About from "../About/About";
import Skills from "../Skills/Skills";

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
                </div>
            </div>
        </>
    );
};

export default MainContent;
