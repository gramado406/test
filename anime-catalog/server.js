const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = require("./manifest");

const builder = new addonBuilder(manifest);

const seasonCatalog = require("./src/catalog/season");
const lastSeasonCatalog = require("./src/catalog/lastSeason");

builder.defineCatalogHandler(async ({ id, extra }) => {

    try {

        const page = Number(extra?.skip || 0) / 50 + 1;

        switch (id) {

            case "season":

                return {

                    metas: await seasonCatalog.getCurrentSeason(page)

                };

            case "lastSeason":

                return {

                    metas: await lastSeasonCatalog.getLastSeason(page)

                };

            default:

                return {

                    metas: []

                };

        }

    } catch (err) {

        console.error(err);

        return {

            metas: []

        };

    }

});

builder.defineMetaHandler(async () => {

    return {

        meta: {}

    }

});

serveHTTP(builder.getInterface(), {

    port: 7000

});

console.log("");

console.log("Anime Catalog iniciado");

console.log("http://localhost:7000/manifest.json");
