import React from "react";
import sectionClasses from "../../sharedModules/Section.module.scss";


interface SectionProps {
    id: string
    title: string
    children: any
}

export function Section({id, title, children}: SectionProps) {
    return (
        <div id={id}>
            <div className={sectionClasses.sectionContainer}>
                <div className={sectionClasses.sectionTitle}>
                    {title}
                </div>
                {children}
            </div>
        </div>
    );
}