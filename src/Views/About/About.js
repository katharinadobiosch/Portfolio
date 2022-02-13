import React from "react";
import styles from "../About/About.module.scss";
// import HamburgerMenu from "./HamburgerMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import cV from "./static/CV_portfolio.pdf";

const About = () => {
    return (
        <>
            <div id="about" className={styles["main-container"]}>
                {/* // ?? OPENING TAG */}
                <div className={styles["opening-tag"]}>
                    <span>&lt;div </span>
                    <span>id</span>=<span>"about"</span>
                    <span>&gt;</span>
                </div>
                {/* // ?? CONTENT */}
                <div className={styles.content}>
                    Born in Poland in 1986, I came to Germany with my parents
                    and just two suitcases a few years later. I've always loved{" "}
                    <span>design</span> and <span> pretty things</span>, so I
                    suppose it's natural that I graduated in{" "}
                    <span> communication design</span>.
                    <br />
                    <br />
                    During my studies, I worked in a high-class jewellery,
                    watches and home accessories shop. It was during this time
                    that I discovered my passion for — above all — high-quality
                    products.
                    <br />
                    <br />
                    After moving to Berlin and working as a{" "}
                    <span>store manager</span> in retail for nearly three years,
                    it was time to live my dream: I{" "}
                    <span>opened my own store</span>. During this time, I was
                    able to develop a strong customer-centric way of thinking
                    and noticed that I have excellent perseverance. I am{" "}
                    <span>solution-oriented</span> and can{" "}
                    <span>
                        adapt quickly to new situations and circumstances
                    </span>{" "}
                    and, above all, I have a <span>growth mindset</span> that
                    thrives in challenging environments. Equipped with this
                    knowledge and capabilities, I seized the opportunity during
                    the pandemic and decided to embark on a new career path that
                    both challenges and interests me, to focus on a
                    future-oriented professional field.
                </div>

                <div>
                    <a
                        className={styles.download}
                        href={cV}
                        download="CV Katharina Dobiosch"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div>Download my CV</div>
                        <div>
                            <FontAwesomeIcon icon={faDownload} />
                        </div>
                    </a>
                </div>

                {/* // ?? CLOSING TAG */}
                <div className={styles["closing-tag"]}>
                    <span>&lt;/div&gt;</span>
                </div>
            </div>
        </>
    );
};

export default About;
