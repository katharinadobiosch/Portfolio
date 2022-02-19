import React, { useState } from "react";
import styles from "../Projects/Projects.module.scss";

import { Link } from "react-router-dom";

import projectData from "../../Components/Data/JsonData/projectData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import img from "../Projects/static/freshbnb.png"

import Modal from "../../Components/Modals/Modal/Modal";
import BurgerBuilderModal from "../../Components/Modals/BurgerBuilderModal/BurgerBuilderModal";

const Projects = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = (event) => {
        event.preventDefault();
        setShowModal(true);
        console.log("open modal was clicked");
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);
    };

    return (
        <>
            {projectData.map((project, index) => {
                return (
                    <div
                        id="projects"
                        className={styles["main-container"]}
                        key={project.id}
                    >
                        {/* // ?? OPENING TAG */}
                        <div className={styles["opening-tag"]}>
                            <span>&lt;div </span>
                            <span>id</span>=<span>"projects"</span>
                            <span>&gt;</span>
                        </div>
                        {/* // ?? CONTENT */}
                        <div className={styles["content-container"]}>
                            <div className={styles.content}>
                                {/* // MAP THROUGH JSON DATA */}
                                <Link to={`/portfolio/${project.id}`}>
                                    <div
                                        className={styles["image-container"]}
                                        onClick={openModal}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.imgAlt}
                                            onClick={openModal}
                                        />
                                        {/* <BurgerBuilderModal
                                            onClose={closeModal}
                                            show={showModal}
                                        /> */}
                                        <Modal
                                            onClose={closeModal}
                                            show={showModal}
                                        />
                                    </div>
                                </Link>

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
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </div>

                                    <div className={styles.description}>
                                        {project.description}
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
