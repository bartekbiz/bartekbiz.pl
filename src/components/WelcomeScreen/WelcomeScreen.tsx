import React from "react";
import {WelcomePhoto} from "./WelcomePhoto";
import {WelcomeText} from "./WelcomeText";
import classes from "./WelcomeScreen.module.scss";

interface WelcomeScreenProps {
    welcomeScreenRef: any
}
export function WelcomeScreen({welcomeScreenRef}: WelcomeScreenProps) {
    return (
        <div
            className={classes.welcomeScreenContainer}
            ref={welcomeScreenRef}
        >
            <WelcomePhoto/>
            <div className={classes.welcomeContent}>
                <WelcomeText/>
            </div>
        </div>
    );
}