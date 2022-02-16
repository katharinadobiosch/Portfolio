import React, { useState } from "react";
import styles from "../Freshbnb/Freshbnb.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// import FreshbnbImg from "../Freshbnb/static/freshbnb.png";
import FreshbnbModal from "../Modals/FreshbnbModal/FreshbnbModal";


const Freshbnb = (props) => {
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
                    <img src={FreshbnbImg} alt="Freshbnb" onClick={openModal} />
                    <FreshbnbModal onClose={closeModal} show={showModal} />
                </div>

                <div className={styles.content}>
                    <div className={styles.heading}>
                        <a
                            href="https://freshbnb.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            FRESHBNB
                        </a>

                        <a
                            href="https://github.com/ediheid/frontend-dci-final-group-project"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                    <div className={styles.description}>
                        During the 6-week final project at DCI I was part of an
                        agile development team in which we built a safe and
                        active community and platform to host and book
                        properties to legally wild camp! 🚌 I was responsible
                        for the Frontend, was the contact person and decision
                        maker for all design and styling questions, created the
                        wireframe in Figma and of course worked on the Frontend
                        in React.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Freshbnb;
