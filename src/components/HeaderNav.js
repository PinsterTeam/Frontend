import React, { Component } from 'react';
import SvgAngleLeft from './svg/SvgAngleLeft';

class HeaderNav extends Component {
    getModalButton(modal) {
        if (modal && sessionStorage.getItem('pinster-user-role') <= 2) {
            return this.props.modalOptions();
        }
        return <div className="header-nav-spacer" />;
    }

    render() {
        return (
            <header className="container with-fixed-header">
                <div className="header-nav-wrapper full-bleed container">
                    <div className="header-nav">
                        <a className="header-nav-back" onClick={this.props.history.goBack}>
                            <span className="sr-only">back</span>
                            <SvgAngleLeft color={'white'} />
                        </a>
                        <span>{this.props.label}</span>
                        {this.getModalButton(this.props.modal)}
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderNav;
