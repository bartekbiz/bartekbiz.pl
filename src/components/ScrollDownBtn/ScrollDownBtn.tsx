import React from "react";
import { FaChevronDown } from "react-icons/fa";
import classes from "./ScrollDownBtn.module.scss";
import {motion} from "framer-motion";
import {Link} from "react-scroll";
import {NavBarLink} from "../NavBar/NavBarLink";
import {BsChevronCompactDown} from "react-icons/bs";

export function ScrollDownBtn() {
    let section = "aboutme";

    return (
        <div className={classes.scrollDownBtnContainer}>
            <motion.button
                className={classes.btn}

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