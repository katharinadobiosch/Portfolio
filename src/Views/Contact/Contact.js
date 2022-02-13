import React from "react";
import styles from "../Contact/Contact.module.scss";

const Contact = () => {
    return (
        <>
            <div id="projects" className={styles["main-container"]}>
                {/* // ?? OPENING TAG */}
                <div className={styles["opening-tag"]}>
                    <span>&lt;form</span>
                    <span>&gt;</span>
                </div>
                {/* // ?? CONTENT */}
                <div className={styles["content-container"]}>
                    <div className={styles.content}>
                        CONTACT CONTACT CONTACT
                    </div>
                </div>

                {/* // ?? CLOSING TAG */}
                <div className={styles["closing-tag"]}>
                    <span>&lt;/form&gt;</span>
                </div>
            </div>
        </>
    );
};

export default Contact;
