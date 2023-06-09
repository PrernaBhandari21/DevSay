import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>

            <li>
                <Link to='/profiles'>
                    <i className='fas fa-code'></i> Developers
                </Link>
            </li>

            <li>
                <Link to='/tech-blogs'>
                    <i className='fas fa-code'></i> Tech-Blogs
                </Link>
            </li>

            <li>
                <Link to='/posts'>
                    <i className='fas fa-thumbtack'></i> Posts
                </Link>
            </li>
            <li>
                <Link to='/dashboard'>
                    <i className='fas fa-id-card'></i>{' '}
                    <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>
            <li>
                <a onClick={logout} href='#!'>
                    <i className='fas fa-sign-out-alt'></i>{' '}
                    <span className='hide-sm'>Logout</span>
                </a>
            </li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li>
                <Link to='/profiles'>
                    <i className='fas fa-code'></i> Developers
                </Link>
            </li>

            <li>
                <Link to='/tech-blogs'>
                    <i className='fas fa-code'></i> Tech-Blogs
                </Link>
            </li>

            <li>
                                <Link to='/register'>
                    <i className='fas fa-user-plus'></i> Register
                </Link>
            </li>
            <li>
                <Link to='/login'>
                    <i className='fas fa-sign-in-alt'></i> Login
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fab fa-dev'></i> DevSay
                </Link>
            </h1>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
        </nav>
    );
};

Navbar.protoTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
