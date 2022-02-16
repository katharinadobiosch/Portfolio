import React, { useState } from "react";
import styles from "../Projects/Projects.module.scss";

import Freshbnb from "../../Components/Freshbnb/Freshbnb";
import BurgerBuilder from "../../Components/BurgerBuilder/BurgerBuilder";
import ExpensesApp from "../../Components/ExpensesApp/ExpensesApp";
import FoodOrderApp from "../../Components/FoodOrderApp/FoodOrderApp";
import BlogLayout from "../../Components/BlogLayout/BlogLayout";

import projectData from "../Projects/projectData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import FreshbnbImg from "../Projects/static/freshbnb.png";
import FreshbnbModal from "../../Components/Modals/FreshbnbModal/FreshbnbModal";
import Modal from "../../Components/Modals/Modal/Modal";

const Projects = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    return (
        <>
            {projectData.map((project, index) => {
                return (
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

                                {/* // MAP THROUGH JSON DATA */}
                                <div>
                                    <div
                                        className={styles["content-container"]}
                                    >
                                        <div
                                            className={
                                                styles["image-container"]
                                            }
                                            onClick={openModal}
                                        >
                                            <img
                                                src={project.image}
                                                alt="Freshbnb"
                                                onClick={openModal}
                                            />
                                            <Modal
                                                onClose={closeModal}
                                                show={showModal}
                                            />
                                        </div>

                                        <div className={styles.content}>
                                            <div className={styles.heading}>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {project.title}
                                                </a>

                                                <a
                                                    href={project.gitHubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faGithub}
                                                    />
                                                </a>
                                            </div>

                                            <div className={styles.description}>
                                                {project.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles["burger-creator"]}></div>
                            </div>
                        </div>

                        {/* // ?? CLOSING TAG */}
                        <div className={styles["closing-tag"]}>
                            <span>&lt;/div&gt;</span>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Projects;

//////////////////////////////////////////////////////////////////////

// import React from "react";
// import styles from "../Projects/Projects.module.scss";

// import Freshbnb from "../../Components/Freshbnb/Freshbnb";
// import BurgerBuilder from "../../Components/BurgerBuilder/BurgerBuilder";
// import ExpensesApp from "../../Components/ExpensesApp/ExpensesApp";
// import FoodOrderApp from "../../Components/FoodOrderApp/FoodOrderApp";
// import BlogLayout from "../../Components/BlogLayout/BlogLayout";

// const Projects = () => {
//     return (
//         <>
//             <div id="projects" className={styles["main-container"]}>
//                 {/* // ?? OPENING TAG */}
//                 <div className={styles["opening-tag"]}>
//                     <span>&lt;div </span>
//                     <span>id</span>=<span>"projects"</span>
//                     <span>&gt;</span>
//                 </div>
//                 {/* // ?? CONTENT */}
//                 <div className={styles["content-container"]}>
//                     <div className={styles.content}>
//                         {/* PROJECTS PROJECTS PROJECTS{" "} */}

//                         <div>
//                             <Freshbnb />
//                             <BurgerBuilder />
//                             <ExpensesApp />
//                             <FoodOrderApp />
//                             <BlogLayout />
//                         </div>

//                         <div className={styles["burger-creator"]}></div>
//                     </div>
//                 </div>

//                 {/* // ?? CLOSING TAG */}
//                 <div className={styles["closing-tag"]}>
//                     <span>&lt;/div&gt;</span>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Projects;
