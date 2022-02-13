import React from "react";
import styles from "../../Modals/FreshbnbModal/FreshbnbModal.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ExpensesAppModal = (props) => {
    if (!props.show) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div onClick={stop}>
                <div className={styles.modal} onClick={props.onClose}>
                    <div className={styles["modal-container"]}>
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
                                title="Freshbnb"
                                src="https://freshbnb.vercel.app/"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpensesAppModal;
