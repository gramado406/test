function mapMediaToMeta(media) {
    return {
        id: `anilist:${media.id}`,
        type: "series",

        name:
            media.title.english ||
            media.title.romaji ||
            media.title.native,

        poster:
            media.coverImage?.extraLarge ||
            media.coverImage?.large,

        background: media.bannerImage || undefined,

        description: media.description || "",

        genres: media.genres || [],

        releaseInfo: media.seasonYear
            ? String(media.seasonYear)
            : "",

        imdbRating: media.averageScore
            ? (media.averageScore / 10).toFixed(1)
            : null
    };
}

module.exports = {
    mapMediaToMeta
};
