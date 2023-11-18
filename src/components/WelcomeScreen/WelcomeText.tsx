import React from "react";
import {TypeAnimation} from "react-type-animation";
import classes from "./WelcomeScreen.module.scss";

export function WelcomeText(){
    const text = `Hi, I'm Bartosz Bizoń \na Software Developer.`;
    const text1 = ``;

    return (
        <div>
            <TypeAnimation
                sequence={[text, 2000, ""]}
                speed={50}
                style={{ whiteSpace: 'pre-line'}}
                className={classes.welcomeText}
                repeat={Infinity}
            />
        </div>
    );
}