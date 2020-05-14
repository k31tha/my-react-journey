import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';

const SignInSignOutLink = () => {
    const auth = useAuth();
    if (!auth.authorised) {
        return (
            <Link to="/signin">sign in</Link>
        )
    }
    else {
        return (
            <a href="/#" onClick={() => auth.signout()}>sign out</a>
        )
    }    
}

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><SignInSignOutLink /></li>
                </ul>
          </nav>
        </header>
    )
}

export default Header;