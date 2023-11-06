import React from "react";
import {NavBarLink} from "./NavBarLink";
import {Dictionary} from "../../utils/Dictionary";
import classes from "./NavBar.module.scss";

interface NavBarProps {
    sections: Dictionary<string, string>[]
}
export function NavBar({sections}: NavBarProps) {
    return (
        <ul className={classes.navbarUl}>
            {sections.map((link, i) => {
                return <NavBarLink key={i} text={link.key} link={link.value}/>;
            })}
        </ul>
    );
}