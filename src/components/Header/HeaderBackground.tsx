import React, {useEffect} from "react";
import classes from "./Header.module.scss";
import {motion, useAnimation} from "framer-motion";


interface HeaderBackgroundProps {
    show: boolean
}
export function HeaderBackground({show}: HeaderBackgroundProps) {
    const mainControls = useAnimation();

    useEffect(() => {
        if (show) {
            mainControls.start("visible");
        }
        else {
            mainControls.start("hidden");
        }

    }, [show]);

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