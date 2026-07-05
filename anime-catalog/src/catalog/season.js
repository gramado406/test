const client = require("../anilist/client");
const query = require("../anilist/queries");
const season = require("../anilist/seasons");
const mapper = require("../anilist/mapper");
const config = require("../config");

async function getCurrentSeason(page = 1) {

    const data = await client.request(

        query.SEASON_QUERY,

        {

            season: season.currentSeason(),

            seasonYear: season.currentYear(),

            page,

            perPage: config.anilist.perPage

        }

    );

    return data.Page.media.map(mapper.mapMediaToMeta);

}

module.exports = {

    getCurrentSeason

};
