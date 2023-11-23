import React from "react";
import classes from "./MenuBtn.module.scss";
import buttonClasses from "../../sharedModules/Button.module.scss";
import {CiMenuBurger} from "react-icons/ci";

export function MenuBtn() {
    return (
        <div>
            <button className={classes.menuButton}>
                <CiMenuBurger />
            </button>
        </div>
    );
}