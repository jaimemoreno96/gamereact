import React from 'react'

const Header = ({ title, login, balance, nameA }) => {

    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{title}</a>
                <ul className="right hide-on-med-and-down">
                    {login
                        ?
                        <li><p>{nameA} ${balance}</p></li>
                        :
                        <li> <button
                            type="button"
                            className="waves-effect waves-light btn-small btn-block yellow accent-4">
                            Login
                        </button></li>}
                </ul>
            </div>
        </nav>
    );
}

export default Header;