// Todo remove RSS parser as a dependency
import { RAINDROP_TEST_TOKEN } from '$env/static/private';
import { stringify } from 'querystring';

const collectionId = 0;
const params = {
    perpage: 10,
};

export async function load({ fetch }) {
    let readingList = [];
    try {
        const response = await fetch(`https://api.raindrop.io/rest/v1/raindrops/${collectionId}?${stringify(params)}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${RAINDROP_TEST_TOKEN}`
            }
        })
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            return { statusCode: response.status, body: response.statusText }
        }
        const data = await response.json()
        // console.log(data);
        if (data.items) {
            readingList = data.items;
        } else {
            throw new Error(`raindrops cannot be retrieved from ${JSON.toString(data)}`)
        }
    } catch (err) {
        console.log(err) // output to netlify function log
    }

    return {
        readingList
    }
}
