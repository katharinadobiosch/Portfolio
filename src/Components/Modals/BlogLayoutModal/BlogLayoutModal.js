import React from "react";
import styles from "../../Modals/BlogLayoutModal/BlogLayoutModal.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const BlogLayoutModal = (props) => {
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
                                title="Blog Layout"
                                src="https://katharinadobiosch.github.io/cooking-blog-layout/"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogLayoutModal;
