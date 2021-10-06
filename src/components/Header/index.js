import React from 'react';
import './Header.css';

export default () => {
    return(
        <header className="black">
            <div className="header--logo">
                <a href="/">
                    <img src="https://webraga.pt/wp-content/uploads/2020/04/we-braga-netflix-1.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}
