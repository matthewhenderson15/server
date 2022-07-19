import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;