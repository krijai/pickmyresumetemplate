import React, { Component } from 'react';
import DefaultButton from '../ant-fields/DefaultButton';
import './header.scss'

class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <h1 className="headerTitle">PickMyResumeTemplate</h1>
                <DefaultButton value="Select Your Template" className="defaultButton"/>
            </div>
        );
    }
}

export default Header;