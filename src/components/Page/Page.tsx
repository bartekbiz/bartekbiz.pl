import React, {SyntheticEvent, useEffect, useRef, useState} from "react";
import {Header} from "../Header/Header";
import classes from "./Page.module.scss";
import {Dictionary} from "../../utils/Dictionary";
import {useInView} from "framer-motion";
import {WelcomeScreen} from "../WelcomeScreen/WelcomeScreen";
import {SectionAbout} from "../SectionAbout/SectionAbout";


export function Page() {
    const sections: Dictionary<string, string>[] = [
        {key: "Home", value: "home"},
        {key: "About", value: "about"},
        {key: "Experience", value: "experience"},
        {key: "Contact", value: "contact"}
    ];

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={classes.mainContainer}>
            <WelcomeScreen/>

            <Header
                sections={sections}
                scrollPosition={scrollPosition}
            />

            <div className={classes.contentContainer}>
                <SectionAbout/>
            </div>
        </div>
    );
}