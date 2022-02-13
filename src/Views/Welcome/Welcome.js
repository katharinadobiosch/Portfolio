import React from "react";
import styles from "../Welcome/Welcome.module.scss";
// import HamburgerMenu from "./HamburgerMenu";

const Welcome = () => {
    return (
        <>
            <div id="welcome" className={styles["main-container"]}>
                <div className={styles.content}>
                    <p>Hi, nice to see you :)</p>
                    <p>
                        I'm <span>Katharina</span>.
                    </p>
                    <p>
                        A Full Stack Web Developer with a design background and
                        a focus on Frontend Development.
                    </p>
                    <p>I live in Berlin.</p>
                </div>
            </div>
        </>
    );
};

export default Welcome;
