const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const manifest = require("./manifest");

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(async () => {

    return {

        metas: []

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
