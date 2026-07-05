const season = require("../catalog/season");
const last = require("../catalog/lastSeason");

async function loadCatalog(id, page) {

    switch(id){

        case "season":
            return season.getCurrentSeason(page);

        case "lastSeason":
            return last.getLastSeason(page);

        default:
            return [];
    }

}

module.exports = {

    loadCatalog

}
