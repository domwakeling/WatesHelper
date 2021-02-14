/* eslint-disable no-ternary */
import React from 'react';

const Copyright = () => {
    const from = 2021;
    const year = new Date().getFullYear();
    const str = year > from
        ? `${from}–${year} `
        : `${year} `;
    return (
        <h5 className="copyright">
            &copy;
            {str}
            {' '}
            Dom Wakeling
        </h5>
    );
};

export default Copyright;
