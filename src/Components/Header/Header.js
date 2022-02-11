import React from "react";
import styles from "../Header/Header.module.scss";
import Hamburger from "../Hamburger/Hamburger";
// import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
    return (
        <>
            <div className={styles["header-container"]}>
                <div className={styles["content-container"]}>
                    <div className={styles.logo}>
                        <p>KATHARINA</p>
                        <p>DOBIOSCH</p>
                    </div>
                    <div className={styles.menu}>
                        <Hamburger />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
