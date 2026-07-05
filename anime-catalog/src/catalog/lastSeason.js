const client = require("../anilist/client");
const query = require("../anilist/queries");
const season = require("../anilist/seasons");
const mapper = require("../anilist/mapper");
const config = require("../config");

async function getLastSeason(page = 1) {

    const last = season.previousSeason();

    const data = await client.request(

        query.SEASON_QUERY,

        {

            season: last.season,

            seasonYear: last.year,

            page,

            perPage: config.anilist.perPage

        }

    );

    return data.Page.media.map(mapper.mapMediaToMeta);

}

module.exports = {

    getLastSeason

};
