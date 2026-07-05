function currentSeason() {

    const month = new Date().getMonth() + 1;

    if (month <= 3)

        return "WINTER";

    if (month <= 6)

        return "SPRING";

    if (month <= 9)

        return "SUMMER";

    return "FALL";

}

function currentYear() {

    return new Date().getFullYear();

}

function previousSeason() {

    const seasons = [

        "WINTER",

        "SPRING",

        "SUMMER",

        "FALL"

    ];

    let season = currentSeason();

    let index = seasons.indexOf(season);

    let year = currentYear();

    index--;

    if (index < 0) {

        index = 3;

        year--;

    }

    return {

        season: seasons[index],

        year

    }

}

module.exports = {

    currentSeason,

    currentYear,

    previousSeason

}
