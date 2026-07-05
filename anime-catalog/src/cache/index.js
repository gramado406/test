const NodeCache = require("node-cache");

module.exports = new NodeCache({

    stdTTL: 21600,

    checkperiod: 300,

    useClones: false

});
