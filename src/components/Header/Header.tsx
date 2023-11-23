import React from "react";
import {NavBar} from "../NavBar/NavBar";
import {Dictionary} from "../../utils/Dictionary";
import classes from "./Header.module.scss";
import {NavBarLink} from "../NavBar/NavBarLink";
import {MenuBtn} from "../MenuBtn/MenuBtn";
import {HeaderBackground} from "./HeaderBackground";


interface HeaderProps {
    sections: Dictionary<string, string>[],
    welcomePhotoIsInView: boolean
}
export function Header({sections, welcomePhotoIsInView}: HeaderProps) {
    return (
        <div className={classes.headerMainContainer}>
            <HeaderBackground welcomePhotoIsInView={welcomePhotoIsInView}/>

            <div className={classes.headerContentsContainer}>
                <div className={classes.headerContents}>
                    <div className={classes.logoContainer}>
                        <NavBarLink link={"home"}>
                            <h2 className={classes.logoText}>Bartosz Bizoń</h2>
                        </NavBarLink>
                    </div>

                    {/*<MenuBtn/>*/}
                    <NavBar sections={sections}/>
                </div>
            </div>

        </div>
    );
}