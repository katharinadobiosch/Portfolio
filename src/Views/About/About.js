import React from "react";
import styles from "../About/About.module.scss";
// import HamburgerMenu from "./HamburgerMenu";

const About = () => {
    return (
        <>
            <div className={styles["main-container"]}>
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

export default About;
