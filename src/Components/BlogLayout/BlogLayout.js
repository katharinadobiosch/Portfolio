import React, { useState } from "react";
import styles from "../BlogLayout/BlogLayout.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import BlogLayoutImg from "../BlogLayout/static/blog_layout.png";
import BlogLayoutModal from "../Modals/BlogLayoutModal/BlogLayoutModal";

const BlogLayout = (props) => {
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
                        src={BlogLayoutImg}
                        alt="Blog Layout"
                        onClick={openModal}
                    />
                    <BlogLayoutModal onClose={closeModal} show={showModal} />
                </div>

                <div className={styles.content}>
                    <div className={styles.heading}>
                        <a
                            href="https://katharinadobiosch.github.io/cooking-blog-layout/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BLOG LAYOUT{" "}
                        </a>

                        <a
                            href="https://github.com/katharinadobiosch/cooking-blog-layout"
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

export default BlogLayout;
