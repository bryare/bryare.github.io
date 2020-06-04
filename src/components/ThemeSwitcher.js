import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import StyledSpinner from './StyledSpinner.js'

const GlobalStyle = createGlobalStyle`
    body {
        transition: background 1.1s cubic-bezier(.60, 0, 0.3, .5);
        &[data-theme='dark'] {
            color: ${props => props.darkTextColor};
            background: ${props => props.darkColor};
        }
        &[data-theme='light'] {
            color: ${props => props.lightTextColor};
            background: ${props => props.lightColor};
        }
    }
`;

const ThemeSwitcherWrapper = styled.div``;

export default class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 
                localStorage.getItem("theme") !== null  
                    ? localStorage.getItem("theme")
                    : "light"
        };     
    }

    componentDidMount = () => {
        const { theme } = this.state;
        const { cssSelector } = this.props;
        const selector = document.querySelector(cssSelector);
        selector.dataset.theme = theme;
    };

    switchTheme = () => {
        const { cssSelector } = this.props;
        const selector = document.querySelector(cssSelector);

        this.setState(
            currentState => ({
                theme: currentState.theme === "light" ? "dark" : "light"
            }),
        
            () => {
                selector.dataset.theme = this.state.theme;
                localStorage.setItem("theme", this.state.theme);
            }
        );
    };

    render() {
        const { theme } = this.state;
        const isActive = theme === "dark" ? "active" : "";
        const {
            darkColor,
            lightColor,
            darkTextColor,
            lightTextColor
        } = this.props;

        return (
            <ThemeSwitcherWrapper>
                <GlobalStyle
                    darkColor = { darkColor }
                    lightColor = { lightColor }
                    darkTextColor = { darkTextColor }
                    lightTextColor = { lightTextColor }
                />
                
                <a 
                    href="/#" 
                    onClick={this.switchTheme}
                    className={`${"button-switcher " + isActive}`}
                    aria-label="switch theme button"
                >
                    <StyledSpinner/>
                </a>
            </ThemeSwitcherWrapper>
        );
    }
}