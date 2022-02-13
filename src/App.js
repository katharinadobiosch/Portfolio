import React from "react";

// ? Main scss
import styles from "./Styling/app.module.scss";

// ? All Component and View imports
import LoadingBar from "./Components/LoadingBar/LoadingBar";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Hamburger from "./Components/Hamburger/Hamburger";

const App = () => {
    return (
        <>
            <LoadingBar />
            <Header />
            <MainContent />
        </>
    );
};

export default App;
