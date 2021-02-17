/* eslint-disable max-statements */
const INC = 1;
const STATUS_OK = 200;
const STATUS_ERROR = 400;

const handler = (req, res) => {

    // Get response
    fetch('https://api.postcodes.io/postcodes', {
        body: JSON.stringify(req.body),
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
            for (let idx = 0; idx < req.body.postcodes.length; idx += INC) {
                const ret = resultsObj[req.body.postcodes[idx]];
                if (ret) {
                    out = `${out}{lat:${ret.latitude},lng:${ret.longitude}}\n`;
                } else {
                    out += '**NOT FOUND**\n';
                }
            }
            res.status(STATUS_OK).send({ message: out });
            res.end();
        }).
        catch((err) => {
            // There was an error
            // eslint-disable-next-line no-console
            console.warn('Something went wrong.', err);
            res.status(STATUS_ERROR).send({ message: err });
            res.end();
        });

};

export default handler;
