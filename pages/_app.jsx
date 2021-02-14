/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import Layout from '../components/Layout.jsx';
import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line no-extra-parens
const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <Head>
            <title>Helper Functions</title>
            <link
                href="/favicon.png"
                rel="shortcut icon"
            />
        </Head>
        <Component {...pageProps} />
    </Layout>
);

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.shape().isRequired
};

export default MyApp;
