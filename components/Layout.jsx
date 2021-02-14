import Copyright from './Copyright.jsx';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-extra-parens
const Layout = ({ children }) => (
    <>
        <style
            global
            jsx
        >
            {`
                @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
                
                :root {
                    --wates-teal: #00778A;
                    --body-text: #00161A;
                    --contrast-text: #FAFEFF;
                    --wates-lime: #7BC243;
                }

                /* REPSONSIVE LAYOUT AND WIDE PHONE SAFE-CHECK */

                html {
                    padding: env(safe-area-inset);
                }
                @media (max-width: 899px) {
                    .racerlist {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                }
                @media (min-width: 600px) and (max-width: 899px) {
                    .container, nav {
                        width: 600px;
                    }
                }
                @media (min-width: 900px) {
                    .container, nav {
                        width: 900px;
                    }
                }
                .container, nav {
                    padding-left: 10px;
                    padding-right: 10px;
                    margin: auto;
                }

                /* HEADER AND NAV BAR */

                header {
                    border-bottom: 1px solid var(--contrast-text);
                    background-color: var(--wates-teal);
                }
                nav {
                    max-width: 900px;
                    margin: auto;
                    padding: 0.5em;
                    color: var(--contrast-text);
                }
                nav div {
                    margin-top: 0.8rem;
                    float: right;
                }
                nav div a {
                    font-size: 1.1rem;
                    margin-left: 1rem;
                    color: var(--contrast-text);
                }
                nav h1 {
                    color: var(--contrast-text);
                    font-size: 1.7rem;
                    margin: 0px 0.4rem 0px 0px;
                    font-weight: 700;
                    float: left;
                }
                nav:after {
                    content: '';
                    clear: both;
                    display: table;
                }

                /* LINKS */

                a {
                    color: var(--wates-teal);
                    text-decoration: none;
                    cursor: pointer;
                }
                a:hover {
                    text-decoration: underline !important;
                }

                /* LISTS */

                li {
                    padding-bottom: 10px;
                }

                /* to be worked through for relevance */

                main {
                    margin-top: 10px;
                }
                hr {
                    border: none;
                    background-color: var(--wates-teal);
                    height: 1px;
                    opacity: 0.7;
                }
                body {
                    margin: 0;
                    padding: 0;
                    color: #111;
                    font-family: 'Arial', sans-serif;
                    font-size: 18px;
                    background-color: #fff;
                }
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Mukta', sans-serif;
                }
                h2 {
                    color: #394c8f;
                    display: inline-block;
                    padding-bottom: 0.3em;
                    border-bottom: 3px solid #d79022;
                    font-size: 1.75rem;
                    line-height: 1.1em;
                    margin-top: 0;
                }
                h3 {
                    font-size: 1.6rem;
                    color: #394c8f;
                }
                h4 {
                    color: #a06b19;
                    font-size: 1.2rem;
                }
                h5 {
                    font-size: 1rem;
                }
                
                button {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: #fff;
                    border-radius: 5px;
                    border: none;
                    background-color: #394c8f;
                    cursor: pointer;
                    transition: all 0.2s ease 0s;
                    padding: 10px 25px;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
                    font-size: 1.0rem;
                }
                button:hover,
                button:active {
                    box-shadow: 0 0 5px 10px rgba(0, 120, 138, 0.3);
                }
                button.positive_action {
                    background-color: green;
                }





                input {
                    border: 1px solid #d79022;
                    min-width: 20rem;
                    margin-bottom: 0.75rem;
                    border-radius: 0.25rem;
                    padding: 0.5rem 0 0.5rem 0.2rem;
                    font-size: 1rem;
                }
                label, .circle {
                    font-size: 1.5rem;
                    display: inline-block;
                    background-color: #394c8f;
                    border-radius: 50%;
                    width: 2.1rem;
                    height: 2.1rem;
                    text-align: center;
                    color: white;
                    margin-right: 0.75rem;
                    position: relative;
                }
                
                footer {
                    text-align: center;
                    font-size: 0.8rem;
                    margin-top: 1rem;
                    padding: 3rem;
                    color: #888;
                }
                @media (max-width: 335px) {
                    input {
                        min-width: 15rem;
                    }
                }
                @media (min-width: 336px) and (max-width: 365px) {
                    input {
                        min-width: 17rem !important;
                    }
                }
                @media (min-width: 366px) and (max-width: 400px) {
                    input {
                        min-width: 18rem !important;
                    }
                }
                .number-circle-list {
                    list-style: none;
                    padding-left: 1rem;
                    counter-reset: circle-counter;
                }
                .number-circle-list--list-item {
                    counter-increment: circle-counter;
                    margin-bottom: 0.25rem;
                }
                .number-circle-list--list-item:before {
                    content: counter(circle-counter);
                    background-color: gray;
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    display: inline-block;
                    font-size: 0.75rem;
                    line-height: 1.5rem;
                    color: $default-color;
                    text-align: center;
                    margin-right: 0.5rem;
                    position: relative;
                    top: -2px;
                }
                .number-circle-list--list-item:last-child {
                    margin-bottom: 0;
                }
                .number-circle-list--list-item > .number-circle-list--list-item {
                    margin-left: 0.25rem;
                }
                .number-circle-list--primary-color > .number-circle-list--list-item:before {
                    background-color: #394C8F;
                    color: white;
                }
                }
            `}
        </style>
        <Head>
            <title>Helper Functions</title>
            <meta
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                key="viewport"
                name="viewport"
            />
            <meta
                content="Helper Functions"
                name="description"
            />
            <meta
                content="Helper Functions"
                property="og:title"
            />
        </Head>
        <header>
            {/* <ToastContainer align="right" position="top" /> */}
            <nav>
                <Link href="/">
                    <a>
                        <h1>Helper Functions</h1>
                    </a>
                </Link>
                <div>
                    <Link href="/">
                        <a>
                            (to come)
                        </a>
                    </Link>
                    <Link href="/latlong">
                        <a>
                            Lat/Long Lookup
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
        <div className="container">
            <main>{children}</main>
            <hr />
            <Copyright />
        </div>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
