const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = require("./manifest");

const builder = new addonBuilder(manifest);

const catalog = require("./src/services/catalog");

builder.defineCatalogHandler(async ({ id, extra }) => {

    const page = Math.floor((extra?.skip || 0) / 50) + 1;

    return {

        metas: await catalog.loadCatalog(id,page)

    };

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
