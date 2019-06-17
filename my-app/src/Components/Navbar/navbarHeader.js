import React from 'react';
import NavBar from './navbarComponent'

const leftItems = [
    { content: "Aisha A. Jackson", key: "Aisha Jackson" }
];
const rightItems = [
    { as: "a", content: "Home", key: "home" },
    { as: "a", content: "About Me", key: "about me" },
    { as: "a", content: "Resume", key: "resume" },
    { as: "a", content: "Contact", key: "contact" }
];

function NavbarHeader() {
    return (
        <div>
            <NavBar leftItems={leftItems} rightItems={rightItems} />
        </div>
    );
}

export default NavbarHeader;