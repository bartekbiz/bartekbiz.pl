import React from "react";
import {WelcomePhoto} from "./WelcomePhoto";
import {WelcomeText} from "./WelcomeText";
import classes from "./WelcomeScreen.module.scss";
import {ScrollDownBtn} from "../ScrollDownBtn/ScrollDownBtn";

export function WelcomeScreen() {
    return (
        <div
            id={"home"}
            className={classes.welcomeScreenContainer}
        >
            <WelcomePhoto/>
            <div className={classes.welcomeContent}>
                <WelcomeText/>
            </div>
            <ScrollDownBtn/>
        </div>
    );
}