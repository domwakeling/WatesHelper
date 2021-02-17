import { useState } from 'react';

const STATUS_OK = 200;

const LatLongApp = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const inputHandler = (event) => {
        const { value } = event.target;
        setInputText(value);
    };

    const copyButtonHandler = (event) => {
        // Stop default
        event.preventDefault();
        // Only act if there is data ...
        if (outputText !== '') {
            // Copy data to clipboard
            const copyText = document.querySelector('#outputField');
            copyText.select();
            document.execCommand('copy');
        }
        event.target.blur();
    };

    const processButtonHandler = async (event) => {
        // Stop default
        event.preventDefault();
        // Gather data for request
        const dataIn = { 'postcodes': inputText.split('\n') };
        // Send request to server (internal API)
        const res = await fetch('/api/latlong', {
            body: JSON.stringify(dataIn),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        });
        // If successful use data, otherwise show an error message
        if (res.status === STATUS_OK) {
            const ret = await res.json();
            setOutputText(ret.message);
        } else {
            setOutputText('ERROR');
        }
        // Blur the target
        event.target.blur();
    };

    return (
        <div>
            <div className="title">
                <h1>Postcode to Lat/Lng Converter</h1>
            </div>
            <p>This page takes a series of postcodes and returns latitude/longitude in the
                format <code>&#123;lat:0.000,lng:0.000&#125;</code>.
            </p>
            <p>
                The input expects each postcode to be on a separate line &mdash; you can simply
                copy a series of postcodes from Excel and paste here, although it is recommended
                you remove the final trailing (blank) line when you do so.
            </p>
            <p>Due to limitations of the API being used (postcodes.io) you should only search for
                circa 20 postcodes at a time.
            </p>
            <p>If a postcode is not recognised, the response will be <code>**NOT FOUND**</code>. In
                this instance the only suggestion I can make is to enter the postcode into Google
                Maps, and use the lat/long from the resulting URL (thankfully this is not a common
                issue).
            </p>
            <p>Having generated a lat/lng list, you can use the <code>Copy</code> button to copy
                those values to the clipboard &mdash; and then you can easily paste those values
                into Excel.
            </p>
            <hr />
            <div className="half">
                <p>Enter postcodes as a list and hit <code>Process</code> ...</p>
                <textarea
                    id="inputField"
                    onChange={inputHandler}
                    value={inputText}
                />
            </div>
            <div className="half right">
                <p>... and lat/long will appear here</p>
                <textarea
                    id="outputField"
                    readOnly
                    value={outputText}
                />
            </div>
            <div
                className="clearboth"
                style={{ 'height': '10px' }}
            />
            <div>
                <button
                    className="positive_action right"
                    onClick={copyButtonHandler}
                    type="button"
                >
                    Copy
                </button>
                <button
                    className="positive_action"
                    onClick={processButtonHandler}
                    type="button"
                >
                    Process
                </button>
            </div>
            <div
                className="clearboth"
                style={{ 'height': '10px' }}
            />
        </div>
    );
};

export default LatLongApp;
