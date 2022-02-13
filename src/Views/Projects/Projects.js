import React from "react";
import styles from "../Projects/Projects.module.scss";

import Freshbnb from "../../Components/Freshbnb/Freshbnb";
import BurgerBuilder from "../../Components/BurgerBuilder/BurgerBuilder";
import ExpensesApp from "../../Components/ExpensesApp/ExpensesApp";
import FoodOrderApp from "../../Components/FoodOrderApp/FoodOrderApp";
import BlogLayout from "../../Components/BlogLayout/BlogLayout";

const Projects = () => {
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
                            <Freshbnb />
                            <BurgerBuilder />
                            <ExpensesApp />
                            <FoodOrderApp />
                            <BlogLayout />
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
