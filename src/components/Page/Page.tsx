import React from "react";
import {Header} from "../Header/Header";
import classes from "./Page.module.css";

export function Page() {
    return (
        <div className={classes.mainContainer}>
            <Header/>
        </div>
    );
}