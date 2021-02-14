import { useState } from 'react';

const INC = 1;

const LatLongApp = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const inputHandler = (event) => {
        const { value } = event.target;
        setInputText(value);
    };

    const buttonHandler = (event) => {
        // Stop default
        event.preventDefault();
        // Gather data for request
        const dataIn = { 'postcodes': inputText.split('\n') };
        // Get response
        fetch('https://api.postcodes.io/postcodes', {
            body: JSON.stringify(dataIn),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).
            then((response) => {
                // The API call was successful!
                if (response.ok) {
                    // Get the json if ok
                    return response.json();
                }

                // Else show the rejected promise
                return Promise.reject(response);
            }).
            then((data) => {
            // We have data; turn it into key/value pairs
                const resultsObj = {};
                for (let idx = 0; idx < data.result.length; idx += INC) {
                    resultsObj[data.result[idx].query] = data.result[idx].result;
                }
                let out = '';
                for (let idx = 0; idx < inputText.split('\n').length; idx += INC) {
                    const res = resultsObj[inputText.split('\n')[idx]];
                    if (res) {
                        out = `${out}{lat:${res.latitude},lng:${res.longitude}}\n`;
                    } else {
                        out += '**NOT FOUND**\n';
                    }
                }
                setOutputText(out);
            }).
            catch((err) => {
            // There was an error
                // eslint-disable-next-line no-console
                console.warn('Something went wrong.', err);
            });
        event.target.blur();
    };

    return (
        <div>
            <div className="title">
                <h1>Postcode to Lat/Lng Converter</h1>
            </div>
            <div className="half">
                <p>Enter postcodes as a list (copy and paste from Excel) and hit PROCESS</p>
                <textarea
                    id="inputField"
                    onChange={inputHandler}
                    value={inputText}
                />
            </div>
            <div className="half">
                <p>And lat/long will appear here</p>
                <textarea
                    id="outputField"
                    readOnly
                    value={outputText}
                />
            </div>
            <button
                className="positive_action"
                onClick={buttonHandler}
                type="button"
            >
                Process
            </button>
        </div>
    );
};

export default LatLongApp;
