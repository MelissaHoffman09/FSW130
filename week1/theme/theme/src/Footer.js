import React from 'react';
import ThemeContext from './ThemeContext';

const Footer = () => {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <footer className={`${theme.style}-footer flex-center`}>
                    <p> Melissa Hoffman 2021 &copy;</p>
                </footer>
            )}
        </ThemeContext.Consumer>
    );
}

export default Footer;