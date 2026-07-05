class IdResolver {

    async resolve(anilist) {

        return {

            anilist,

            mal: null,

            kitsu: null,

            imdb: null,

            tmdb: null

        };

    }

}

module.exports = new IdResolver();
