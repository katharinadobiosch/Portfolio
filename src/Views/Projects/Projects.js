import React, { useState } from "react";
import styles from "../Projects/Projects.module.scss";

// import BlogLayout from "./static/burger_creator.png";
// import ExpensesApp from "./static/burger_creator.png";
// import FoodOrderApp from "./static/burger_creator.png";

import BurgerBuilder from "../../Components/BurgerBuilder/BurgerBuilder";

const Projects = () => {
    const [show01, setShow01] = useState(false);

    const openBurgerBuilder = (event) => {
        event.preventDefault();
        setShow01(true);
    };

    const closeBurgerBuilder = (event) => {
        event.preventDefault();
        setShow01(false);
    };

    return (
        <>
            <div id="projects" className={styles["main-container"]}>
                {/* // ?? OPENING TAG */}
                <div className={styles["opening-tag"]}>
                    <span>&lt;div </span>
                    <span>id</span>=<span>"projects"</span>
                    <span>&gt;</span>
                </div>
                {/* // ?? CONTENT */}
                <div className={styles["content-container"]}>
                    <div className={styles.content}>
                        {/* PROJECTS PROJECTS PROJECTS{" "} */}
                        <div>
                            Here are a few projects I have worked on recently
                        </div>
                        <div>
                            <BurgerBuilder />
                        </div>

                        <div className={styles["burger-creator"]}></div>
                    </div>
                </div>

                {/* // ?? CLOSING TAG */}
                <div className={styles["closing-tag"]}>
                    <span>&lt;/div&gt;</span>
                </div>
            </div>
        </>
    );
};

export default Projects;
