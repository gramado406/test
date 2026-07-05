module.exports = {

    id: "community.anime.catalog",

    version: "1.0.0",

    name: "Anime Catalog",

    description: "Anime catalog powered by AniList",

    resources: [

        "catalog",
        "meta"

    ],

    types: [

        "series"

    ],

    catalogs: [

        {

            id: "season",

            type: "series",

            name: "🌸 Temporada"

        },

        {

            id: "lastSeason",

            type: "series",

            name: "⏪ Temporada Passada"

        },

        {

            id: "all",

            type: "series",

            name: "📚 Todos",

            extra: [

                {

                    name: "genre"

                }

            ]

        }

    ]

}
