const axios = require("axios");

const config = require("../config");

const cache = require("../cache");

async function request(query, variables = {}) {

    const key = JSON.stringify({

        query,

        variables

    });

    const cached = cache.get(key);

    if (cached) {

        return cached;

    }

    const response = await axios.post(

        config.anilist.endpoint,

        {

            query,

            variables

        },

        {

            headers: {

                "Content-Type": "application/json",

                "Accept": "application/json"

            }

        }

    );

    cache.set(key, response.data.data);

    return response.data.data;

}

module.exports = {

    request

};
