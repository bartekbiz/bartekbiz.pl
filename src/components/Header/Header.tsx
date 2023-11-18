import React, {useEffect, useRef} from "react";
import {NavBar} from "../NavBar/NavBar";
import {Dictionary} from "../../utils/Dictionary";
import classes from "./Header.module.scss";
import {motion, useAnimation} from "framer-motion";
import {NavBarLink} from "../NavBar/NavBarLink";

interface HeaderProps {
    sections: Dictionary<string, string>[],
    welcomePhotoIsInView: boolean
}
export function Header({sections, welcomePhotoIsInView}: HeaderProps) {
    const mainControls = useAnimation();

    useEffect(() => {
        if (!welcomePhotoIsInView) {
            mainControls.start("visible");
        }
        else {
            mainControls.start("hidden");
        }

    }, [welcomePhotoIsInView]);

    return (
        <div>
            <motion.div
                className={classes.headerBackground}
                variants={{
                    hidden: {opacity: 0, y: -10},
                    visible: {opacity: 1, y: 0}
                }}
                initial={"hidden"}
                animate={mainControls}
                transition={{duration: 0.3}}
            />

            <div className={classes.headerContentsContainer}>
                <div className={classes.logoContainer}>
                    <NavBarLink link={"home"}>
                        <h2 style={{whiteSpace: "nowrap"}}>Bartosz Bizoń</h2>
                    </NavBarLink>
                </div>
                <NavBar sections={sections}/>
            </div>
        </div>
    );
}