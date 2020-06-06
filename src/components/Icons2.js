import React, {Component} from 'react';
import { InlineIcon } from '@iconify/react';
import reactIcon from '@iconify/icons-simple-icons/react';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import html5Icon from '@iconify/icons-simple-icons/html5';
import css3Icon from '@iconify/icons-simple-icons/css3';
import sassIcon from '@iconify/icons-simple-icons/sass';
import jestIcon from '@iconify/icons-simple-icons/jest';
import electronIcon from '@iconify/icons-simple-icons/electron';
import nodeDotJs from '@iconify/icons-simple-icons/node-dot-js';
import gnubashIcon from '@iconify/icons-simple-icons/gnubash';
import braveIcon from '@iconify/icons-simple-icons/brave';
import appleIcon from '@iconify/icons-simple-icons/apple';
import travisciIcon from '@iconify/icons-simple-icons/travisci';
import gitIcon from '@iconify/icons-simple-icons/git';
import githubIcon from '@iconify/icons-simple-icons/github';
import npmIcon from '@iconify/icons-simple-icons/npm';
import figmaIcon from '@iconify/icons-simple-icons/figma';
import bootstrapIcon from '@iconify/icons-simple-icons/bootstrap';
import prettierIcon from '@iconify/icons-simple-icons/prettier';
import visualstudiocodeIcon from '@iconify/icons-simple-icons/visualstudiocode';
//<InlineIcon icon={Icon} className="icon" />
export default class Icons extends Component {
    render() {
        return(    
            <div className="">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={githubIcon} className="icon" /></a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><InlineIcon link={reactIcon} className="icon" /></a>
                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={javascriptIcon} className="icon" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><InlineIcon icon={html5Icon} className="icon" /></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><InlineIcon icon={css3Icon} className="icon" /></a>
                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={sassIcon} className="icon" /></a>
                <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={jestIcon} className="icon" /></a>
                <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={electronIcon} className="icon" /></a>
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={nodeDotJs} className="icon" /></a>
                <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={gnubashIcon} className="icon" /></a>
                <a href="https://brave.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={braveIcon} className="icon" /></a>
                <a href="https://travis-ci.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={travisciIcon} className="icon" /></a>
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={gitIcon} className="icon" /></a>
                <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={npmIcon} className="icon" /></a>
                <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer"><InlineIcon icon={figmaIcon} className="icon" /></a>
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={bootstrapIcon} className="icon" /></a>
                <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={prettierIcon} className="icon" /></a>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={visualstudiocodeIcon} className="icon" /></a>
                <a href="https://www.apple.com/macos/catalina/" target="_blank" rel="noopener noreferrer"><InlineIcon icon={appleIcon} className="icon" /></a>
            </div>
        ) 
    }
}