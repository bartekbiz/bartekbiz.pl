import React from "react";
import {Header} from "../Header/Header";
import classes from "./Page.module.css";
import {Dictionary} from "../../utils/Dictionary";

export function Page() {
    const sections: Dictionary<string, string>[] = [
        {key: "Home", value: "#"},
        {key: "About Me", value: "#aboutme"},
        {key: "Contact", value: "#contact"}
    ];

    return (
        <div className={classes.mainContainer}>
            <Header sections={sections}/>
        </div>
    );
}