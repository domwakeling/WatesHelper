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
                body {
                    margin: 0;
                    padding: 0;
                    color: #111;
                    font-family: 'Arial', sans-serif;
                    font-size: 18px;
                    background-color: #fff;
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
                /* INPUT AND OUTPUT */
                .half {
                    width: 49%;
                    display: inline-block;
                }
                .half.right {
                    text-align: right;
                }
                #inputField, #outputField{
                    width: 95%;
                    height: 310px;
                    border: 1px solid var(--wates-lime);
                    border-radius: 3px;
                }
                #inputField {
                    float: left;
                }
                #outputField {
                    float: right;
                }
                /* GENERIC COMMON ELEMENTS */
                hr {
                    border: none;
                    background-color: var(--wates-teal);
                    height: 1px;
                    opacity: 0.7;
                }
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Mukta', sans-serif;
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
                button:hover, button:active {
                    box-shadow: 0 0 5px 10px rgba(0, 120, 138, 0.3);
                }
                button.positive_action {
                    background-color: green;
                }
                code {
                    background-color: lightgrey;
                    padding: 2px 4px 3px;
                    border-radius: 4px;
                    color: red;
                }
                .clearboth {
                    clear: both;
                }
                /* TODO - CHECK WHAT IS REQUIRED */
                main {
                    margin-top: 10px;
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
                input {
                    border: 1px solid #d79022;
                    min-width: 20rem;
                    margin-bottom: 0.75rem;
                    border-radius: 0.25rem;
                    padding: 0.5rem 0 0.5rem 0.2rem;
                    font-size: 1rem;
                }                
                footer {
                    text-align: center;
                    font-size: 0.8rem;
                    margin-top: 1rem;
                    padding: 3rem;
                    color: #888;
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
