import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer  light-blue darken-2">
            <div className="footer-copyright">
                <div className="center container">
                    © {new Date().getFullYear()} Copyright
                </div>
            </div>
        </footer>
    );
}

export default Footer;