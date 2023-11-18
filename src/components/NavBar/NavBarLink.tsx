import React from "react";
import classes from "./NavBar.module.scss";
import {animateScroll, Link} from "react-scroll";

interface NavBarLinkProps {
    link: string,
    children: any
}
export function NavBarLink({link, children}: NavBarLinkProps) {
    return (
        <Link
            className={classes.navbarLink}
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            duration={500}
        >{children}
        </Link>
    );
}