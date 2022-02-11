import React from "react";
import styles from "../Hamburger/Hamburger.module.scss";
// import HamburgerMenu from "./HamburgerMenu";

const Hamburger = () => {
    const onRouteHandler = (id) => {
        //  window.location.replace("/" + path);
        const elementSection = document.getElementById(id);
        const elementCheckbox = document.getElementById("checkbox-menu");

        elementSection.scrollIntoView({ behavior: "smooth" });

        elementCheckbox.click();
    };
    return (
        <>
            <nav role="navigation">
                <div className={styles.menuToggle}>
                    {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
                    <input type="checkbox" />

                    {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
                    <span></span>
                    <span></span>
                    <span></span>

                    {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
                    <ul className={styles.menu}>
                        <li>Home</li>

                        <li>About</li>

                        <li>Info</li>

                        <li>Contact</li>

                        <li>Show me more</li>
                    </ul>
                </div>
            </nav>{" "}
        </>
    );
};

export default Hamburger;
