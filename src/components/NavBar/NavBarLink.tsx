import React from "react";
import {scrollToSection} from "../../utils/Utils";
import classes from "./NavBar.module.scss";

interface NavBarLinkProps {
    text: string,
    link: string
}
export function NavBarLink({text, link}: NavBarLinkProps) {
    return (
        <li>
            <a className={classes.navbarA} href={link} onClick={() => scrollToSection(link)}>
                {text}
            </a>
        </li>
    );
}