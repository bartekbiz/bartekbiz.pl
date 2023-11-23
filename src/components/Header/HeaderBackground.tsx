import React, {useEffect} from "react";
import classes from "./Header.module.scss";
import {motion, useAnimation} from "framer-motion";


interface HeaderBackgroundProps {
    welcomePhotoIsInView: boolean
}
export function HeaderBackground({welcomePhotoIsInView}: HeaderBackgroundProps) {
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
    );
}