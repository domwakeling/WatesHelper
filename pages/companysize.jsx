import { useState } from 'react';

const STATUS_OK = 200;

const CompanySizeApp = () => {
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
        const dataIn = inputText.split('\n');
        // Send request to server (internal API)
        const res = await fetch('/api/companysize', {
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
                <h1>Companies House Lookup</h1>
            </div>
            <p>This page takes a series of Companies House numbers and returns the type of accounts
                last filed. If there is an error (for instance if the reference is not found) the
                response will be <code>**NOT FOUND**</code>.
            </p>
            <p>
                The input expects each company reference to be on a separate line &mdash; you can
                simply copy a series of references from Excel and paste here, although it is
                recommended you remove the final trailing (blank) line when you do so.
            </p>
            <p>The API is rate-limited to 500 companies in a 5-minute period &mdash; it is
                recommended that you only lookup circa 20 companies at a time.
            </p>
            <p>
                Possible return values are:
            </p>
            <ul>
                <li><code>%!s(&lt;nil&gt;)</code></li>
                <li><code>full</code></li>
                <li><code>small</code></li>
                <li><code>medium</code></li>
                <li><code>group</code></li>
                <li><code>dormant</code></li>
                <li><code>interim</code></li>
                <li><code>initial</code></li>
                <li><code>total-exemption-full</code></li>
                <li><code>total-exemption-small</code></li>
                <li><code>partial-exemption</code></li>
                <li><code>audit-exemption-subsidiary</code></li>
                <li><code>filing-exemption-subsidiary</code></li>
                <li><code>micro-entity</code></li>
            </ul>
            <hr />
            <div className="half">
                <p>Enter company references as a last and <code>Process</code> ...</p>
                <textarea
                    id="inputField"
                    onChange={inputHandler}
                    value={inputText}
                />
            </div>
            <div className="half right">
                <p>... and business sizes will appear here</p>
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

export default CompanySizeApp;
