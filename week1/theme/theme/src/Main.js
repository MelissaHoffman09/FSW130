import React from 'react';
import ThemeContext from './ThemeContext';
import './styles.css';

const Main = () => {
    return ( 
        <main>
            <ThemeContext.Consumer>
                {theme => (
                    <div className={`${theme.style}-main flex-center flex-column`}>
                        <h1>Let's change the theme of this page</h1>
                        <div className={`${theme.style}-button dropdown`}>
                            <button className={`${theme.style}-button`}>Click here</button>
                            <div className="dropdown-content">
                                <a href="#" onClick={() => {theme.setTheme("light")}}>Light</a>
                                <a href="#" onClick={() => {theme.setTheme("dark")}}>Dark</a>
                                <a href="#" onClick={() => {theme.setTheme("autumn")}}>Autumn</a>
                                <a href="#" onClick={() => {theme.setTheme("spring")}}>Spring</a>
                                

                            </div>
                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        </main>
    );
}

export default Main;