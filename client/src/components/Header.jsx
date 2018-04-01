import React from 'react';

const header = () => {
    return (
        <nav className="#37474f blue-grey darken-3">
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/dashboard">Try It Out</a></li>
                    <li><a href="/auth/google">Log In</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default header;