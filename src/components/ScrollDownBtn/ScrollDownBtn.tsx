import React from "react";
import classes from "./ScrollDownBtn.module.scss";
import buttonClasses from "../../sharedModules/Button.module.scss";
import {motion} from "framer-motion";
import {NavBarLink} from "../NavBar/NavBarLink";
import {BsChevronCompactDown} from "react-icons/bs";

export function ScrollDownBtn() {
    let section = "about";

    return (
        <div className={classes.scrollDownBtnContainer}>
            <motion.button
                className={buttonClasses.btnWithIcon}

                variants={{
                    up: {y: -7},
                    down: {y: 0}
                }}
                initial={"up"}
                animate={"down"}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    repeatDelay: 0.1,
                    repeatType: "mirror",
                    type: "spirng",
                    stiffness: 50}}
            >
                <NavBarLink link={section}>
                    <BsChevronCompactDown />
                </NavBarLink>
            </motion.button>
        </div>
    );
}