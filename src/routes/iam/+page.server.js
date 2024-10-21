// Todo remove RSS parser as a dependency
import { RAINDROP_TEST_TOKEN, LASTFM_API_KEY } from '$env/static/private';
import { stringify } from 'querystring';

const collectionId = 0;
const RaindropParams = {
    perpage: 10,
};

const LastFMParams = {
    method: 'user.getrecenttracks',
    user: 'd3sandoval',
    api_key: LASTFM_API_KEY,
    format: 'json',
    limit: 10,
};

export async function load({ fetch }) {
    let readingList = [];
    try {
        const response = await fetch(`https://api.raindrop.io/rest/v1/raindrops/${collectionId}?${stringify(RaindropParams)}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${RAINDROP_TEST_TOKEN}`
            }
        })
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            throw new Error(`raindrops cannot be retrieved. error: ${response.statusText}`)
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

    let nowPlaying = [];
    try {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?${stringify(LastFMParams)}`, {
            headers: { Accept: 'application/json' }
        })
        if (!response.ok) {
            // NOT res.status >= 200 && res.status < 300
            throw new Error(`tracks cannot be retrieved. error: ${response.statusText}`)
        }
        const data = await response.json()

        if (data.recenttracks && data.recenttracks.track) {
            nowPlaying = data.recenttracks.track
        } else {
            throw new Error(`tracks cannot be retrieved from ${JSON.toString(data)}`)
        }
    } catch (err) {
        console.log(err) // output to netlify function log
    }

    return {
        readingList,
        nowPlaying
    }
}
