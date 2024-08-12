import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/characters" activeClassName="active">Browse Characters</NavLink>
            <NavLink to="/comics" activeClassName="active">Comics</NavLink>
        </nav>
    );
};

export default Navigation;
