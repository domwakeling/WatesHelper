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
            // The API call/promise was successfully returned!
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
            // Create an array (in correct order) of lat/lng and join into a string
            const dataOut = req.body.postcodes.
                map((postcode) => {
                    const ret = resultsObj[postcode];
                    // eslint-disable-next-line no-ternary
                    return ret
                        ? `{lat:${ret.latitude},lng:${ret.longitude}}`
                        : '**NOT FOUND**';
                }).
                join('\n');
            res.status(STATUS_OK).send({ message: dataOut });
            res.end();
        }).
        catch((err) => {
            // There was an error
            res.status(STATUS_ERROR).
                send({ message: err });
            res.end();
        });
};

export default handler;
