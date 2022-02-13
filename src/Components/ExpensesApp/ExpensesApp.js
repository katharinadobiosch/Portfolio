import React, { useState } from "react";
import styles from "../ExpensesApp/ExpensesApp.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ExpensesAppImg from "../ExpensesApp/static/expenses_app.png";
import ExpensesAppModal from "../Modals/ExpensesAppModal/ExpensesAppModal";

const ExpensesApp = (props) => {
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
            <div className={styles["content-container"]}>
                <div className={styles["image-container"]} onClick={openModal}>
                    <img
                        src={ExpensesAppImg}
                        alt="ExpensesApp"
                        onClick={openModal}
                    />
                    <ExpensesAppModal onClose={closeModal} show={showModal} />
                </div>

                <div className={styles.content}>
                    <div className={styles.heading}>
                        <a
                            href="https://katharinadobiosch.github.io/Expenses-App/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            EXPENSES APP
                        </a>

                        <a
                            href="https://github.com/katharinadobiosch/Expenses-App/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                    <div className={styles.description}>
                        Fun Fact: I started to write the code for this project
                        when I was in Mallorca with my sister. One day we were
                        on the beach and next to us was a family. The mother and
                        her children had brown hair and looked like they were
                        kissed by the sun, she was wearing a beige bikini, they
                        were sitting on a beige blanket and had a beige parasol.
                        We called them the „beige family“ and I got inspired
                        from them for my color theme.
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpensesApp;
