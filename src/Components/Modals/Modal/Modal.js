import React from "react";
import { useParams } from "react-router-dom";
import styles from "../../Modals/FreshbnbModal/FreshbnbModal.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import projectData from "../../../Views/Projects/projectData.json";

const Modal = (props) => {
    let currentProject;
    const { id } = useParams();

    if (!props.show) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div>
                {projectData.map((project, index) => {
                    if (project.id === id) {
                        currentProject = index;
                        return (
                            <div onClick={stop} key={project.id}>
                                <div
                                    className={styles.modal}
                                    onClick={props.onClose}
                                >
                                    <div className={styles["modal-container"]}>
                                        <div className={styles["modal-header"]}>
                                            <div
                                                className={
                                                    styles["modal-close"]
                                                }
                                                onClick={props.onClose}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faXmark}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles["modal-body"]}>
                                            <iframe
                                                title={project.title}
                                                src={project.link}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
};

export default Modal;
