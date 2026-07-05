module.exports = {

    port: process.env.PORT || 7000,

    cache: {

        ttl: 60 * 60 * 6

    },

    anilist: {

        endpoint: "https://graphql.anilist.co",

        perPage: 50

    }

}
