import React, { useState } from "react";
import styles from "../../Modals/BurgerBuilderModal/BurgerBuilderModal.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import BurgerBuilderImg from "../BurgerBuilder/static/burger_builder.png";

const BurgerBuilderModal = (props) => {
    if (!props.show) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div className={styles.modal} onClick={props.onClose}>
                <div className={styles["modal-content"]} onClick={stop}>
                    <div className={styles["modal-header"]}>
                        <div
                            className={styles["modal-close"]}
                            onClick={props.onClose}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                    <div className={styles["modal-body"]}>
                        <iframe
                            title="Burger Builder"
                            src="https://katharinadobiosch.github.io/burger-builder"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerBuilderModal;
