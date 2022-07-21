import React from 'react';
import Search from './search';

const Nav = ({ counter }) => {
    return (
        <div>
            <h3>Nav {counter}</h3>
            <Search counter={counter}></Search>
        </div>
    );
};

export default Nav;