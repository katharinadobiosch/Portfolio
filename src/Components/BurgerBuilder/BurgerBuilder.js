import React, { useState } from "react";
import styles from "../BurgerBuilder/BurgerBuilder.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import BurgerBuilderImg from "../BurgerBuilder/static/burger_builder.png";
import BurgerBuilderModal from "../Modals/BurgerBuilderModal/BurgerBuilderModal";

const BurgerBuilder = (props) => {
    const [showModal, setShowModal] = useState(true);

    const openModal = (event) => {
        event.preventDefault();
        setShowModal(true);

        console.log("button was clicked");
    };

    const closeModal = (event) => {
        event.preventDefault();
        setShowModal(false);

        console.log("button was clicked");
    };

    return (
        <>
            <div className={styles["content-container"]}>
                <div className={styles["image-container"]} onClick={openModal}>
                    {/* <div onClick={openModal}>show</div> */}
                    <img
                        src={BurgerBuilderImg}
                        alt="Burger Builder"
                        onClick={openModal}
                    />
                    <BurgerBuilderModal onClose={closeModal} show={showModal} />
                </div>

                <div className={styles.content}>
                    <div className={styles.heading}>
                        <a
                            href="https://katharinadobiosch.github.io/burger-builder/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BURGER BUILDER
                        </a>

                        <a
                            href="https://github.com/katharinadobiosch/burger-builder"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                    <div className={styles.description}>
                        Biscuit lollipop jujubes ice cream cake soufflé brownie
                        jujubes halvah. Lemon drops soufflé caramels liquorice
                        gummi bears ice cream icing candy canes. Chupa chups
                        chocolate bar cake bonbon gingerbread dessert donut
                        gummies cake. Cake cupcake soufflé fruitcake sesame
                        snaps ice cream sweet cake. Chocolate cake bonbon
                        chocolate bar dessert biscuit. Dragée lemon drops
                        gummies dessert chocolate bar lemon drops chocolate
                        topping cheesecake.
                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerBuilder;
