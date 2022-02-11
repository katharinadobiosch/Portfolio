import React from "react";

// ? Stylesheet
import styles from "../LoadingBar/LoadingBar.module.scss";

const LoadingBar = () => {
    return (
        <>
            <div className={styles["loading-bar"]}></div>
        </>
    );
};

export default LoadingBar;
