import React from "react";
import {NavBar} from "../NavBar/NavBar";
import {Dictionary} from "../../utils/Dictionary";
import classes from "./Header.module.scss";

interface HeaderProps {
    sections: Dictionary<string, string>[]
}
export function Header({sections}: HeaderProps) {
    return (
        <div className={classes.headerContainer}
        >
            <div className={classes.logoContainer}>
                <h2>Bartosz Bizoń</h2>
            </div>
            <NavBar sections={sections}/>
        </div>
    );
}