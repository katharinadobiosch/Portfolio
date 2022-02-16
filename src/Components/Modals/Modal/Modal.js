import React from "react";
import styles from "../../Modals/FreshbnbModal/FreshbnbModal.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
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
                                title="Burger Builder"
                                src="https://katharinadobiosch.github.io/burger-builder"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

// import React from "react";
// import { useParams } from "react-router-dom";
// import styles from "../../Modals/BurgerBuilderModal/BurgerBuilderModal.module.scss";
// import projectData from "../../Data/JsonData/projectData.json";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

// const Modal = (props) => {
//     let currentProjectIndex;
//     const { id } = useParams();

//     if (!props.show) {
//         return null;
//     }

//     const stop = (event) => {
//         event.stopPropagation();
//     };

//     return (
//         <>
//             {projectData.map((project, index) => {
//                 if (project.id === id) {
//                     currentProjectIndex = index;
//                     return (
//                         <div onClick={stop}>
//                             <div
//                                 className={styles.modal}
//                                 onClick={props.onClose}
//                             >
//                                 <div className={styles["modal-container"]}>
//                                     <div className={styles["modal-header"]}>
//                                         <div
//                                             className={styles["modal-close"]}
//                                             onClick={props.onClose}
//                                         >
//                                             <FontAwesomeIcon icon={faXmark} />
//                                         </div>
//                                     </div>
//                                     <div className={styles["modal-body"]}>
//                                         <iframe
//                                             title={project.title}
//                                             src={project.link}
//                                         ></iframe>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 }
//             })}
//         </>
//     );
// };

// export default Modal;
