import React, {useRef} from "react";
import {Header} from "../Header/Header";
import classes from "./Page.module.scss";
import {Dictionary} from "../../utils/Dictionary";
import {useInView} from "framer-motion";
import {WelcomeScreen} from "../WelcomeScreen/WelcomeScreen";
import {SectionAbout} from "../SectionAbout/SectionAbout";


export function Page() {
    const sections: Dictionary<string, string>[] = [
        {key: "Home", value: "home"},
        {key: "About", value: "aboutme"},
        {key: "Experience", value: "experience"},
        {key: "Contact", value: "contact"}
    ];

    const welcomeScreenRef = useRef(null);
    const welcomeScreenIsInView = useInView(welcomeScreenRef);

    return (
        <div className={classes.mainContainer}>
            <Header
                sections={sections}
                welcomePhotoIsInView={welcomeScreenIsInView}
            />

            <WelcomeScreen welcomeScreenRef={welcomeScreenRef}/>

            <div className={classes.contentContainer}>
                <SectionAbout/>
            </div>
        </div>
    );
}