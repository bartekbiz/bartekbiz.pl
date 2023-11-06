import React from "react";
import code from "../../img/code_photo.jpg"
import classes from "./WelcomeScreen.module.scss";

export function  WelcomePhoto() {
    return (
        <img
            className={classes.welcomePhoto}
            src={code}
            alt={""}
        />
    );
}
