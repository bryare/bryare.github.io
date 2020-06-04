import React, {Component} from 'react';
import { Icon } from '@iconify/react';
import JavascriptIcon from '@iconify/icons-logos/javascript';
import reactIcon from '@iconify/icons-logos/react';
import css3Icon from '@iconify/icons-logos/css-3';
import html5Icon from '@iconify/icons-logos/html-5';
import githubIcon from '@iconify/icons-logos/github-icon';
import npm2 from '@iconify/icons-logos/npm-2';
import figmaIcon from '@iconify/icons-logos/figma';
import gitIcon from '@iconify/icons-logos/git-icon';
import travisCi from '@iconify/icons-logos/travis-ci';
import terminalIcon from '@iconify/icons-logos/terminal';
import visualStudioCode from '@iconify/icons-logos/visual-studio-code';
import braveIcon from '@iconify/icons-logos/brave';
import electronIcon from '@iconify/icons-logos/electron';
import postmanIcon from '@iconify/icons-logos/postman';
import jestIcon from '@iconify/icons-logos/jest';
import sassIcon from '@iconify/icons-logos/sass';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import prettierIcon from '@iconify/icons-logos/prettier';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';

class Icons extends Component {
    render() {
        return(    
            <div className="">
                <Icon icon={JavascriptIcon} className="icon" />
                <Icon icon={reactIcon} className="icon" />
                <Icon icon={css3Icon} className="icon" />
                <Icon icon={html5Icon} className="icon" />
                <Icon icon={githubIcon} className="icon" />
                <Icon icon={npm2} className="icon" />
                <Icon icon={figmaIcon} className="icon" />
                <Icon icon={gitIcon} className="icon" />
                <Icon icon={travisCi} className="icon" />
                <Icon icon={terminalIcon} className="icon" />
                <Icon icon={visualStudioCode} className="icon" />
                <Icon icon={braveIcon} className="icon" />
                <Icon icon={electronIcon} className="icon" />
                <Icon icon={postmanIcon} className="icon" />
                <Icon icon={jestIcon} className="icon" />
                <Icon icon={sassIcon} className="icon" />
                <Icon icon={nodejsIcon} className="icon" />
                <Icon icon={prettierIcon} className="icon" />
                <Icon icon={bootstrapIcon} className="icon" />
            </div>
        ) 
    }
}

export default Icons