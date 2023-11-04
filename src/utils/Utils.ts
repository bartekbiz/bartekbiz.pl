
export const scrollToSection = (sectionName: string) => {
    const target = document.getElementById(sectionName);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};