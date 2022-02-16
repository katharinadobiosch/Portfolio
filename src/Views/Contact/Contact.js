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
                        <form
                            action="https://usebasin.com/f/e3757595a834
"
                            method="POST"
                            className={styles.form}
                        >
                            <input
                                type="text"
                                name="username"
                                placeholder="Your name"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your E-Mail"
                                required
                            />
                            <textarea
                                type="text"
                                placeholder="Drop me a line :)"
                            />

                            <div className={styles.button_container}>
                                <button type="submit">Send</button>
                            </div>
                        </form>
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
