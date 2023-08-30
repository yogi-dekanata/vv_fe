import React, {useState} from 'react';
import '../css/Header.css';
import Register from './Register'; // Pastikan Anda mengimpor komponen Register
import SignIn from './SignIn'; // Pastikan Anda mengimpor komponen SignIn

const Header = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showSignInModal, setShowSignInModal] = useState(false);

    const openRegisterModal = () => {
        setShowRegisterModal(true);
    };

    const closeRegisterModal = () => {
        setShowRegisterModal(false);
    };

    const openSignInModal = () => {
        setShowSignInModal(true);
    };

    const closeSignInModal = () => {
        setShowSignInModal(false);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Your Brand</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>

                    <button className="btn btn-outline-light" onClick={openRegisterModal}>Register</button>
                    <button className="btn btn-outline-light ml-2" onClick={openSignInModal}>Sign In</button>
                </div>
            </nav>

            {/* Modal untuk Register */}
            <div className={`modal ${showRegisterModal ? 'show' : ''}`} tabIndex="-1"
                 style={{display: showRegisterModal ? 'block' : 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Register</h5>
                            <button type="button" className="close" onClick={closeRegisterModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Register/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeRegisterModal}>Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal untuk Sign In */}
            <div className={`modal ${showSignInModal ? 'show' : ''}`} tabIndex="-1"
                 style={{display: showSignInModal ? 'block' : 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign In</h5>
                            <button type="button" className="close" onClick={closeSignInModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <SignIn/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeSignInModal}>Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
