import React from "react";
import styles from "../DivContainer/DivContainer.module.scss";
// import HamburgerMenu from "./HamburgerMenu";

const DivContainer = () => {
    return (
        <>
            <div id="about" className={styles["main-container"]}>
                {/* // ?? OPENING TAG */}
                <div className={styles["opening-tag"]}>
                    <span>&lt;div </span>
                    <span>id</span>=<span>"about"</span>
                    <span>&gt;</span>
                </div>
                {/* // ?? CONTENT */}
                <div className={styles.content}>
                    In January 2022 I completed an intensive one year Full Stack
                    Web Development course at Digital Career Institute in
                    Berlin. I have a strong understanding of the fundamentals of
                    HTML, CSS and JavaScript. Understanding UI and UX design
                    principles came naturally due to my design background.
                    Additionally, I have experience in MERN Stack, working with
                    SQLite, MySQL and MongoDB databases. During this time, I
                    also realised that my heart definitely beats for Frontend
                    Development, which is why I want to focus on HTML, CSS and
                    React.
                </div>

                {/* // ?? CLOSING TAG */}
                <div className={styles["closing-tag"]}>
                    <span>&lt;/div&gt;</span>
                </div>
            </div>
        </>
    );
};

export default DivContainer;
