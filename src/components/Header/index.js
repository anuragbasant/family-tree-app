import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="site-header">
                <div className="site-title">Family Tree</div>
                <div className="site-settings fa fa-cogs" />
            </div>
        );
    }
}