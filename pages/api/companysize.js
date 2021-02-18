const STATUS_OK = 200;

const handler = async (req, res) => {
    // Get string to use as authorisation header
    const auth = Buffer.from(`${process.env.CH_API_KEY}:`).toString('base64');

    const dataOut = await Promise.all(req.body.map((ref) => {
        const oneData = fetch(`https://api.company-information.service.gov.uk/company/${ref}`, {
            headers: {
                'Access-Control-Allow-Headers': '*',
                'Authorization': `Basic ${auth}`
            },
            method: 'GET'
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
            // If we have data, try to return the info we want (default to **NOT FOUND**)
            then((data) => data.accounts.last_accounts.type || '**NOT FOUND**').
            // Otherwise there's been an error, so return **NOT FOUND**
            catch(() => '**NOT FOUND**');
        return oneData;
    }));

    res.status(STATUS_OK).send({ message: dataOut.join('\n') });
    res.end();
};

export default handler;
